## Summary

<!-- 2–5 high-level bullets: main outcome, motivation, what reviewers should look at first. -->

-

## Changes

<!-- 4–12 bullets grouped by logical area. Prefer concrete verbs: Added, Updated, Refactored, Fixed, Removed. -->

-

## Checklist

- [ ] `.changeset/*.md` added — `npx changeset` for user-facing changes, `npx changeset --empty` for internal-only PRs.
- [ ] `npm test` passes locally.
- [ ] `npm run format` is clean.
- [ ] If a config rule in `index.js` changed: ran `npm run test:update-snapshots` and reviewed `git diff tests/fixtures/` before committing.
- [ ] If `engines.node` or `peerDependencies.prettier` changed: changeset is **major** (breaking for consumers).

## Related _(optional)_

- Closes:
- Refs:

<!--
Tip: run the `/pull-request-information` skill against this branch to generate
the Summary + Changes sections automatically from the diff.
-->
