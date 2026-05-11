---
'@kiforks/prettier-config': patch
---

**🧹 Internal**

- Opt the CI and release workflows in to running JavaScript-based GitHub
  Actions on Node 24 via `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true`. Silences
  the deprecation warning that `actions/checkout@v4` and
  `actions/setup-node@v4` print on every run about Node 20 being phased out
  in September 2026. No package consumer behaviour changes — purely a build
  pipeline hygiene patch.
