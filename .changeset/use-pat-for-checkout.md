---
---

**🐛 Fixes**

- Pass `CHANGESETS_TOKEN` to `actions/checkout` in `.github/workflows/release.yml`,
  so the git push that updates the Version PR (`changeset-release/main`) is
  also authenticated as the PAT user rather than `github-actions[bot]`.
  Without this, the initial PR creation triggered CI correctly (because the
  GitHub API call used the PAT), but subsequent force-push updates skipped
  workflow runs — leaving the Version PR's required checks stuck in
  "Expected — Waiting for status to be reported".
