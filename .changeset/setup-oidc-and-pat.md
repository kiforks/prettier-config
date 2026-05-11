---
---

**🔒 Security**

- Switched npm publishing from long-lived `NPM_ACCESS_TOKEN` (which required
  the "Bypass 2FA" checkbox) to **npm Trusted Publishing** via OIDC. The
  publish credential is now exchanged at workflow runtime from the GitHub
  Actions OIDC token, so no static token lives in repo secrets. Provenance
  is signed automatically and verifiable on npmjs.com against the trusted
  publisher configuration.

**🧹 Internal**

- Wired `changesets/action` to use a Personal Access Token
  (`CHANGESETS_TOKEN`) instead of the default `GITHUB_TOKEN`. PRs opened with
  `GITHUB_TOKEN` do not trigger CI workflows by design — using a PAT makes
  the Version Packages PR run lint + tests + changeset-status like any human
  PR, so required checks resolve instead of hanging on "Expected".
- Configured the bot's release commit / PR title as
  `chore [REL-0]: Release packages` so it follows the repo's
  `<type> [TASK-ID]: <Message>` convention. Extended `.husky/commit-msg`
  regex to accept `[REL-N]` alongside `[DEV-N]` / `[GEN-N]` — `REL` is
  reserved for the automated release commits.
