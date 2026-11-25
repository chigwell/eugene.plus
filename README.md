# Eugene Evstafev — CTO / Systems Architect

Professional profile at [eugene.plus](https://eugene.plus/), built with React and Vite. Content lives in `src/Schemas/Data.js`; the site includes light/dark themes and a printable CV. Use **Download CV as PDF** or the browser's Print command, then choose **Save as PDF**. Print styles include the complete employment history and product URLs.

## Local development

Use Node.js 22.12+ (or a supported newer LTS release) and npm.

```sh
npm ci
npm run dev
```

Before release:

```sh
npm run lint:source
npm run build
npm run deploy:check
```

Check the desktop and mobile layouts, both themes, contact/product links, and every page of the A4 print preview. Keep the initial HTML title and description in `index.html` aligned with the profile and summary in `Data.js`.

`npm run lint` also scans the archived minified bundle in `docs/assets/`, which has existing lint errors. `lint:source` checks the maintained source without changing the legacy lint command or suppressing its rules.

## Production: manual Cloudflare Worker deployment

The existing Worker is `eugene-plus` in account `2b1f8c4c716d2aa53e68800810c5ebb0`. Its custom domains are `eugene.plus` and `www.eugene.plus`. `wrangler.jsonc` preserves the current assets-first SPA routing; `src/worker.js` forwards requests to the `ASSETS` binding. The published assets come exclusively from `dist/`. Workers.dev and preview URLs remain disabled.

Authenticate locally when needed. Do not commit OAuth credentials, API tokens, `.env` or `.dev.vars` files.

```sh
npx wrangler whoami
# Only if authentication is needed:
npx wrangler login
```

Release from a reviewed, tested revision:

1. Check `git status` and run the checks above.
2. Commit all intended changes with a conventional commit message and push to `origin/master`.
3. Check for unexpected Worker changes after the push. Cloudflare Build triggers could not be inspected with the available OAuth scope during setup; absence of a GitHub workflow does not prove that no external integration exists.
4. Record the currently active version as the rollback target:

   ```sh
   npx wrangler deployments status
   git rev-parse HEAD
   ```

5. From a clean checkout of that commit, build and publish:

   ```sh
   npm ci
   npm run deploy
   npx wrangler deployments status
   ```

6. Record the release commit SHA and new Worker version ID. Verify the new headline, summary, experience, product links, metadata, images and styles on both [eugene.plus](https://eugene.plus/) and [www.eugene.plus](https://www.eugene.plus/). A successful upload alone is not a complete production check.

If the new version causes a confirmed regression, restore the version recorded before release:

```sh
npx wrangler rollback <PREVIOUS_VERSION_ID>
npx wrangler deployments status
```

Verify both domains again after rollback. Keep credentials local and separate release evidence from public assets.

## Legacy GitHub Pages

`docs/` is an older committed build. GitHub Pages was configured to publish `master:/docs`; it is retained unchanged for historical compatibility. It is not the source of the current Worker deployment. This project does not add a GitHub Actions deployment workflow or change the existing Pages settings.

## Planning and provenance

OpenSpec changes are under `openspec/changes/`. The CTO update preserves content previously present only on the live site: the Global Talent/ILR paragraph, research and academic service, SkillDock and the PDF action. T Plus store links are intentionally omitted at the owner's request because of regional restrictions. Project and employer claims should be edited only from owner-confirmed facts or verified sources.

Originally based on [Maaato/react-resume](https://github.com/Maaato/react-resume).
