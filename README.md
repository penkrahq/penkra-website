# Penkra Website

Public website for Penkra.

## Commands

- `pnpm install`
- `pnpm dev`
- `pnpm typecheck`
- `pnpm build`
- `pnpm start`

Use Node 22 and pnpm 11.7.0.

## Local Development

```bash
pnpm install
pnpm dev
```

The local Next.js server runs on `http://localhost:3000` by default.

## Deployment Shape

The production Docker Compose deployment follows the existing Hetzner proxy pattern:

- Join external Docker network `nginx-proxy`.
- Set `VIRTUAL_HOST`, `VIRTUAL_PORT`, and `LETSENCRYPT_HOST`.
- Use `penkra.com` as the production host.
- GitHub Actions deploys with the repo runner labeled `self-hosted`, `Linux`, `ARM64`, `penkra`,
  and `website`.
- Successful `main` CI deploys production.

The GitHub production environment URL is `https://penkra.com`.

## Smoke Checks

The deploy workflow checks the container locally for:

- `/`
- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`

For a manual public smoke check after deployment:

```bash
curl -fsS https://penkra.com >/dev/null
curl -fsS https://penkra.com/sitemap.xml | grep -F "https://penkra.com"
curl -fsS https://penkra.com/robots.txt | grep -F "Sitemap: https://penkra.com/sitemap.xml"
curl -fsS https://penkra.com/manifest.webmanifest | grep -F '"name":"Penkra"'
```

