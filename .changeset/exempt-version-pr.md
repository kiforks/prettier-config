---
---

**🐛 Fixes**

- The `changeset-status` CI job now skips the bot-opened Version PR
  (`changeset-release/main`). That PR is created by `changesets/action`
  specifically to consume pending changesets instead of adding new ones, so
  the existing check would fail on every Version PR by design (as it just
  did on PR #16). With this exact-branch-match skip, Version PRs pass all
  required CI checks without manual bypass, while every other PR still has
  to carry a changeset.
