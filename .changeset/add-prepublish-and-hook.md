---
'@kiforks/prettier-config': patch
---

**🔒 Security**

- Added a `verify` npm script (`npm run format && npm test`) and called it
  explicitly from `.github/workflows/release.yml` right before the release
  step. If formatting or tests regressed on main between PR merge and the
  release run, the publish step never starts — the registry can't see a
  broken build.

**🧹 Internal**

- The `pre-push` husky hook now also runs `npm run format` after validating
  the branch name. Pre-commit lint-staged only covers staged files, so this
  catches stray unformatted files that were committed without staging or via
  `--no-verify`. Combined with the existing CI job and the new release-time
  verify step, the project has three independent layers of formatting
  validation.
- Resynced `package-lock.json` version field from `1.0.4` to `2.0.0` — the
  v2 publish bumped `package.json` but `changesets/action` doesn't run
  `npm install` after `changeset version`, so the lockfile was stuck on the
  old version.
