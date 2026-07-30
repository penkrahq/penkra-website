# Penkra Website

Public website for Penkra.

## Design authority

`penkra-website.pen` is the canonical product-design source for the public website.
The implementation should reproduce its screens, components, interaction states, and
responsive behavior.

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
Account requests go directly to `http://localhost:3012/auth`. Override
`NEXT_PUBLIC_PENKRA_AUTH_URL` when the local backend uses a different origin.

## Deployment Shape

The production Docker Compose deployment follows the existing Hetzner proxy pattern:

- Join external Docker network `nginx-proxy`.
- Set `VIRTUAL_HOST`, `VIRTUAL_PORT`, and `LETSENCRYPT_HOST`.
- Use `penkra.com` as the production host.
- GitHub Actions deploys with the repo runner labeled `self-hosted`, `Linux`, `ARM64`, `penkra`,
  and `website`.
- CI validates `main`; production deployment requires an explicit workflow dispatch
  so coordinated backend and website changes cannot roll out in the wrong order.

The GitHub production environment URL is `https://penkra.com`.
The browser auth client talks directly to `https://api.penkra.com/auth`; the
website does not proxy Better Auth routes.

## Smoke Checks

The deploy workflow checks the container locally for:

- `/`
- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`

The `Smoke` workflow also runs every 6 hours against `https://penkra.com` and can be dispatched
manually when DNS, deployment, or metadata changes need a public verification pass.

For a manual public smoke check after deployment:

```bash
curl -fsS https://penkra.com >/dev/null
curl -fsS https://penkra.com/sitemap.xml | grep -F "https://penkra.com"
curl -fsS https://penkra.com/robots.txt | grep -F "Sitemap: https://penkra.com/sitemap.xml"
curl -fsS https://penkra.com/manifest.webmanifest | grep -F '"name":"Penkra"'
```
