# Vila Ventures

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Start development:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Payload CMS

- Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)
- REST API base: [http://localhost:3000/api](http://localhost:3000/api)
- GraphQL endpoint: [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql)

Payload is configured in `payload.config.ts` with:

- SQLite local database (`DATABASE_URL=file:./payload.db`)
- Auth-enabled `users` collection
- Starter `posts` collection

On first visit to `/admin`, create your first user to access the dashboard.
