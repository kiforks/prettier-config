---
---

**🧹 Internal**

- Rewrote `.github/labeler.yml` with semantic PR categories.

  - Removed the `root` label (matched every PR touching repo root — pure noise).
  - Removed the `configuration` label that pointed at a non-existent
    `.prettierrc.json`.
  - Narrowed `docs` to actual documentation files instead of every `*.md`
    (changesets and the auto-generated CHANGELOG are now correctly excluded).
  - Added `config`, `dependencies`, `tests`, `changesets`, `tooling`.
  - Added a `release` label that auto-applies to the Version Packages PR via
    a `head-branch: '^changeset-release/.*'` rule.
