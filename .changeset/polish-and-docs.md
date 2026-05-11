---
---

**🧹 Internal**

- Simplified `.prettierrc.js` — removed redundant spread (`{ ...kiforConfig }`)
  in favour of a direct re-export.
- Added inline section comments to `index.js` explaining what each
  `importOrder` and `attributeGroups` group matches.

**🔒 Security**

- Enabled npm provenance on publish (`NPM_CONFIG_PROVENANCE=true` in
  `release.yml`). Future releases will carry a sigstore attestation, so
  consumers can verify on npmjs.com that the package was built from this
  exact GitHub Actions workflow.

**📝 Docs**

- Rewrote `.github/PULL_REQUEST_TEMPLATE.md` to mirror the
  `/pull-request-information` skill output (`## Summary` + `## Changes`)
  plus a repo-specific checklist (changeset, tests, snapshot regeneration).
- Normalized legacy `CHANGELOG.md` entries (1.0.0 – 1.0.4) to the new
  category-header style so the file reads consistently after the 2.0.0
  release lands.
