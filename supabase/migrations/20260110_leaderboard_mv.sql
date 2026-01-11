-- 1. Create Materialized View
CREATE MATERIALIZED VIEW leaderboard_mv AS
SELECT
    u.id AS user_id,
    COALESCE(u.name, 'Anonymous') AS username,
    COALESCE(u."codeforcesHandle", 'N/A') AS handle,
    COUNT(sp.id) AS total_solved,
    COALESCE(SUM(sp.rating), 0) AS total_score,
    MAX(sp."solvedAt") AS last_activity
FROM "User" u
LEFT JOIN "SolvedProblem" sp ON u.id = sp."userId"
GROUP BY u.id
ORDER BY total_score DESC;

-- 2. Create Unique Index for Concurrent Refresh efficiency
CREATE UNIQUE INDEX leaderboard_mv_user_id_idx ON leaderboard_mv (user_id);

-- 3. Create Refresh Function
CREATE OR REPLACE FUNCTION refresh_leaderboard()
RETURNS TRIGGER AS $$
BEGIN
    -- For low scale, this is fine. For high scale (>10k users), allow some lag.
    -- CONCURRENTLY allows reads to continue while refreshing.
    REFRESH MATERIALIZED VIEW CONCURRENTLY leaderboard_mv;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- 4. Create Trigger on SolvedProblem (Submissions)
-- This ensures the leaderboard updates whenever someone solves a problem.
CREATE TRIGGER refresh_leaderboard_trigger
AFTER INSERT OR UPDATE OR DELETE ON "SolvedProblem"
FOR EACH STATEMENT
EXECUTE FUNCTION refresh_leaderboard();

-- NOTE: For massive scale (>100k submissions/day), disable the trigger above 
-- and use pg_cron extension instead:
-- SELECT cron.schedule('*/1 * * * *', 'REFRESH MATERIALIZED VIEW CONCURRENTLY leaderboard_mv');
