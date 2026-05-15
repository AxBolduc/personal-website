# Personal Site

Astro personal website for Alex Bolduc, prepared for deployment to Cloudflare Workers.

## Tech stack

- Astro
- Cloudflare Workers via `@astrojs/cloudflare`
- pnpm

## Commands

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the Astro dev server |
| `pnpm build` | Build the site into `dist/` |
| `pnpm preview` | Build and preview locally with Wrangler |
| `pnpm deploy` | Build and deploy to Cloudflare Workers |
| `pnpm astro ...` | Run Astro CLI commands |

## Deploying

Log in to Cloudflare once:

```sh
pnpm exec wrangler login
```

Then deploy:

```sh
pnpm deploy
```

The Astro Cloudflare adapter generates the final Wrangler config at `dist/server/wrangler.json`, so the deploy script builds first and then deploys using that generated config.
