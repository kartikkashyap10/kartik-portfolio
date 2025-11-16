This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Quick Vercel Deployment Guide

1. Push your repository to GitHub (or connect the Git provider you use).
2. Go to https://vercel.com/new and import your repository.
3. In the Vercel import settings set the Root to the project root (this repo uses the app router and the default build command).

Environment variables to add in the Vercel dashboard (Project Settings → Environment Variables):

- `WAKATIME_API_KEY` — your Wakatime API key (server-side secret)
- `NEXT_PUBLIC_GITHUB_USERNAME` — your GitHub username (used client-side)
- `NEXT_PUBLIC_LEETCODE_USERNAME` — your LeetCode username (used client-side)

Notes:
- We created server-side API routes `/api/wakatime` and `/api/leetcode` to proxy Wakatime and LeetCode requests — this keeps your API key secure and avoids CORS issues.
- Make sure `WAKATIME_API_KEY` is set in the Vercel dashboard (do NOT commit it to the repo).
- After you add env vars, re-deploy the project from the Vercel dashboard.

If you'd like, I can create a GitHub Action or connect the repo to Vercel and set the recommended environment variables for you (you'll need to authorize access to Vercel/GitHub).
