# Changesets

This folder is used by [changesets](https://github.com/changesets/changesets)
to track version bumps and generate the CHANGELOG.

## How to add a changeset

After making changes that affect users of `@kiforks/prettier-config`:

1. Run `npx changeset` in the repo root
2. Pick the bump type:
   - **patch** — bug fix, dependency update
   - **minor** — new feature, non-breaking config change
   - **major** — breaking change (e.g. removed option)
3. Write a short description (it goes into the CHANGELOG and GitHub Release)
4. Commit the generated `.changeset/*.md` file with your PR

## Description format

To keep release notes scannable, structure the body with these category
headers (use only the ones that apply). Each lives on its own line in **bold**
so changesets renders them as inline sub-headings, not as nested list items.

| Header | Use for |
|--------|---------|
| `**💥 Breaking changes**` | Removed/renamed options, raised `engines.node`, narrowed peer ranges |
| `**🚀 Features**` | New config options or behavior toggles |
| `**🐛 Fixes**` | Bug fixes (rare here — usually a dep bump fixes it instead) |
| `**📦 Dependencies**` | Prettier or plugin version bumps |
| `**🔒 Security**` | Patched CVEs (often via `npm audit fix`) |
| `**🧪 Quality**` | Tests, CI coverage improvements |
| `**🧹 Internal**` | Tooling, dead code removal, refactors (no consumer impact) |
| `**📝 Docs**` | README, CHANGELOG, README in `.changeset/` |

Open with a one-sentence summary, then the relevant sections. Example:

```md
---
'@kiforks/prettier-config': minor
---

Add support for the new Prettier 3.9 `objectWrap` option.

**🚀 Features**

- Expose `objectWrap: 'preserve'` so wrapped multi-line objects stay wrapped.

**📦 Dependencies**

- Prettier → 3.9.0
```

## What happens after merge

When your PR is merged into `main`:

- a "Version Packages" PR is created automatically
- merging that PR bumps `package.json`, updates `CHANGELOG.md`,
  tags the release, and publishes to npm

## Internal-only changes

If a PR doesn't affect package consumers (CI tweaks, internal refactor,
docs), add an empty changeset to satisfy the CI check:

```bash
npx changeset --empty
```
