---
'@kiforks/prettier-config': major
---

Modernize the package — bump dependencies to latest, drop Node 20 support,
and add a snapshot test suite.

**💥 Breaking changes**

- **Node 20 no longer supported.** `engines.node` raised from `>=20.8.1` to `>=22.22.1`.
- **Prettier 3.4–3.7 no longer supported.** Peer dependency `prettier` narrowed from `^3.4.0` to `^3.8.0`.

**📦 Dependencies**

- Prettier → 3.8.3
- `@ianvs/prettier-plugin-sort-imports` → 4.7.1
- `@prettier/plugin-oxc` → 0.1.4 (required transitively by the sort-imports plugin's parser getters even when unused)
- `prettier-plugin-ember-template-tag` → 2.1.5 (same reason)

**🔒 Security**

- Patched transitive vulnerabilities in `brace-expansion`, `minimatch`, and `picomatch`.

**🧪 Quality**

- Added a fixture-based snapshot test suite using the native Node test runner (zero deps, no Vitest/Jest). Each test case lives in its own folder following `tests/fixtures/{category}/{category}-{rule}/{category}-{rule}.{input,expected}.{ext}`. Coverage targets every rule declared in `index.js`: all eight base Prettier options, every one of the ~22 `importOrder` groups, every one of the 24 `attributeGroups`, and the HTML → Angular parser override. CI runs the suite on a Node 22.x / 24.x matrix.
- Two new npm scripts: `npm test` and `npm run test:update-snapshots` (regenerates `expected.*` files when the config is intentionally changed).

**🧹 Internal**

- Removed dead `lodash`, `@types/lodash`, and `npm-run-all` devDependencies.
- Dropped the unused `prerelease` npm script.
- Modernized the husky 9 pre-commit hook.
