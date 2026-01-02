
# 🚀 Deployment Guide: CodeForge

Since **CodeForge** is a full-stack Next.js application with a Database, you cannot just drop it on Netlify or GitHub Pages. You need a two-part deployment:

1.  **Framework:** Vercel (The creators of Next.js).
2.  **Database:** Neon (Serverless Postgres).

---

## Step 1: Set up the Database (Neon) 🐘

We need a real PostgreSQL database in the cloud. **Neon** is the best free option.

1.  Go to [Neon.tech](https://neon.tech) and Sign Up (Free Tier).
2.  Create a **New Project**. Name it `cp-zero-to-hero`.
3.  Once created, it will show you a **Connection String**.
    *   It looks like: `postgres://user:password@ep-cool-fog-123456.us-east-2.aws.neon.tech/neondb?sslmode=require`
    *   **COPY THIS STRING.** You will need it.

---

## Step 2: Prepare Your Code (Important!) ⚠️

Right now, your code is set up for `sqlite` (local file). Vercel **does not support** SQLite files because its file system is read-only. We must switch to Postgres.

1.  Open `prisma/schema.prisma`.
2.  Change the `datasource` block:

    ```prisma
    // OLD (Delete this)
    // datasource db {
    //   provider = "sqlite"
    //   url      = "file:./dev.db"
    // }

    // NEW (Add this)
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }
    ```

3.  **Commit and Push** this change to GitHub:
    ```bash
    git add .
    git commit -m "chore: switch to postgres for deployment"
    git push
    ```

---

## Step 3: Deploy to Vercel ▲

1.  Go to [Vercel.com](https://vercel.com) and Sign Up/Login.
2.  Click **"Add New..."** -> **Project**.
3.  Import your GitHub repository (`cp-zero-to-hero`).
4.  **Configure Project:**
    *   **Framework Preset:** Next.js (Auto-detected).
    *   **Environment Variables:** (Expand this section).

    You must add the following variables:

    | Key | Value |
    | :--- | :--- |
    | `DATABASE_URL` | *(Paste the Neon Connection String from Step 1)* |
    | `AUTH_SECRET` | Generate a random string (e.g., run `openssl rand -base64 32`) |
    | `AUTH_URL` | `https://your-vercel-project-name.vercel.app` (Add this AFTER you know your URL, or just leave it out for Vercel) |
    | `GOOGLE_CLIENT_ID` | *(From your Google Cloud Console)* |
    | `GOOGLE_CLIENT_SECRET` | *(From your Google Cloud Console)* |
    | `GROQ_API_KEY` | *(Your AI Key)* |

5.  Click **Deploy**.

---

## Step 4: Final Database Push 📦

Vercel will build your site, but the database on Neon is **empty**. We need to push your schema to it.

1.  Locally, update your `.env` file to use the **Neon Connection String**:
    ```env
    DATABASE_URL="postgres://user:password@ep-cool-..."
    ```
2.  Run the migration command:
    ```bash
    npx prisma db push
    ```
    *(This will create all the tables in the Neon cloud database).*

3.  Done! Your Vercel app will now talk to Neon.

---

### Troubleshooting

*   **Error: P1001 Can't reach database:** Check your `DATABASE_URL` in Vercel.
*   **Error: 500 on Login:** Make sure `AUTH_SECRET` and Google Keys are set correctly.
