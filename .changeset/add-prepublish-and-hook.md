---
'@kiforks/prettier-config': patch
---

**🔒 Security**

- Added a `prepublishOnly` npm script that runs `npm run format && npm test`.
  Because npm fires `prepublishOnly` automatically before `npm publish`, this
  guarantees that a broken or unformatted build can never reach the registry,
  even if all earlier checks somehow slipped past.

**🧹 Internal**

- The `pre-push` husky hook now also runs `npm run format` after validating
  the branch name. Pre-commit lint-staged only covers staged files, so this
  catches stray unformatted files that were committed without staging or via
  `--no-verify`. Combined with the existing CI job and the new
  `prepublishOnly`, the project has three independent layers of formatting
  validation.
