# Database Optimization: Materialized Views

## The Concurrent Refresh Strategy

Standard SQL views run the aggregation query *every time* you call them. Materialized Views (MVs) cache the result on disk, acting like a physical table.

### Why `REFRESH MATERIALIZED VIEW CONCURRENTLY`?

1.  **Standard Refresh (`REFRESH MATERIALIZED VIEW leaderboard_mv`)**
    *   **Behavior**: It creates a new data version and swaps it.
    *   **Locking**: It acquires an **EXCLUSIVE LOCK** on the view.
    *   **Impact**: While refreshing, **NO ONE can read** from the leaderboard. The API would hang or fail.
    *   **Downtime**: ~100-500ms (or more for large data).

2.  **Concurrent Refresh (`REFRESH MATERIALIZED VIEW CONCURRENTLY leaderboard_mv`)**
    *   **Behavior**: It compares the existing data with new data and only updates the differences (diff).
    *   **Locking**: It requires only a **weak lock**.
    *   **Impact**: Users can **continue reading** the old leaderboard while the new one is being calculated.
    *   **Requirement**: You MUST create a `UNIQUE INDEX` on the view (e.g., on `user_id`) for this to work.

### Recommended Usage for Scale

For a competitive programming platform like this:
*   **Trigger-based Refresh**: Good for < 10,000 users. Real-time updates.
*   **Cron-based Refresh**: Mandatory for > 10,000 users.
    *   Triggers on every insert act as a "Write Amplifier". If 100 people submit at once, 100 Refreshes trigger queue up, killing the DB CPU.
    *   Using `pg_cron` to refresh every 1 minute decouples read-load from write-load.

## Implementation Details

We implemented:
1.  **View**: Aggregates `SolvedProblem` grouped by `User`.
2.  **Index**: `leaderboard_mv_user_id_idx` to enable concurrent refreshes.
3.  **Trigger**: Auto-refreshes on every `INSERT/UPDATE/DELETE` to `SolvedProblem`.
