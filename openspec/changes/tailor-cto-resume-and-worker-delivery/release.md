# Release verification — 2026-11-25

## Delivery

- Runtime release commit: `7f63c8e3a96a522fe57632ee5811bea977d6e34a`, pushed to `origin/master`.
- Worker: `eugene-plus`, account `2b1f8c4c716d2aa53e68800810c5ebb0`.
- Active version: `954ad49f-c38b-4e22-a041-c00e24d1310a`, 100% of traffic; deployment created at `2026-11-25T11:10:34.674Z`.
- Previous version / rollback target: `37e37d29-f284-4104-b652-f39e17ff6c73`.
- Published manually using pinned Wrangler 4.160.1 from a clean detached worktree at the release commit.
- Both https://eugene.plus/ and https://www.eugene.plus/ verified in the browser after deployment.
- This report and the completed task checklist are planning-only follow-up changes; they do not change the published runtime.

## Verification

- Clean `npm ci`, source lint, production build, Wrangler dry run and strict OpenSpec validation passed.
- Release assets matched the tested local build byte for byte. Production serves `index-2d3f6546.js` and `index-0c3c1245.css`.
- Both domains show the CTO / Systems Architect title, English metadata, Senior UIS role, T Plus mobile experience for 50,000 internal users, Cordova/Swift and paid LLM7 with peak 28M+ tokens/min. Removed activity metrics and free/anonymous LLM7 claims are absent from current source and rendered content.
- Desktop (1280 px) and mobile (375 px), both themes, navigation, project links and visible layout checked. Production images and styled layout verified; no browser console errors observed on either domain.
- A4 PDF generated with user-authorized headless Chrome. All three pages visually inspected: complete experience including T Plus, skills, product URLs and research are readable, without clipping or overlaps.
- Existing live-only content preserved: Global Talent/ILR paragraph, research and academic service, SkillDock, telegram-mcp star count and the PDF action.
- Worker assets settings, compatibility date, custom domains and disabled workers.dev/previews preserved. No rollback was necessary.

## Limits and follow-up

- Full legacy `npm run lint` still reports 126 pre-existing errors in the unchanged generated `docs/assets/index-16801c0a.js`. The three source errors found at baseline were fixed; `npm run lint:source` passes.
- Existing dependencies still emit peer/deprecation warnings. A broad dependency upgrade was outside this content and delivery change.
- Cloudflare Build triggers could not be inspected with the available OAuth scopes. The Worker remained on the recorded previous version after the Git push; the completed deployment was manual. No claim is made that every external Git integration is disabled.
- GitHub Pages settings and the historical `docs/` build were preserved; that archived content is not the current Worker release.
- T Plus store links are omitted at the owner's request because of regional restrictions. Findora was excluded after a DNS failure. LLM/MCP/package links are not presented as mobile-store release evidence.
- Personal store release operations, staged rollouts/rollbacks, child-data privacy/COPPA, encryption/retention/deletion practices and B2 English were not confirmed and were not added as claims. Existing employment dates and overlapping periods were preserved.
- No further action is required to publish the site. OpenSpec archival is a separate optional follow-up after review.
