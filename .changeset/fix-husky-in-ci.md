---
---

**🐛 Fixes**

- Set `HUSKY=0` at the workflow level in `.github/workflows/release.yml`.
  Without it, the local `commit-msg` hook (which enforces our
  `<type> [DEV-XXX]: <Message>` convention) rejected the
  `changesets/action`-bot commit `chore: release packages`, blocking the
  Version PR from being created. The hook is a local dev-tool — disabling
  it for CI is the standard fix.
