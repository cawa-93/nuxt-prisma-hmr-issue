# Nuxt 3 + Prisma HRM Issue reproduction

## Steps

1. Install dependencies
    ```
   npm ci
   ```
2. In `.env` set up `DATABASE_URL` to postgres db
3. `npm run db:migrate`
4. `npm run db:generate:client`
5. Run server in dev mode by `npm run dev`
6. Open `/api/users`. You should see JSON response with empty array and `prisma:query` logs in console.
7. Make any change in `server/api/users.ts` to trigger HMR
8. Open `/api/users`. Expected: JSON response with empty array. Actual: server stack or crash.
