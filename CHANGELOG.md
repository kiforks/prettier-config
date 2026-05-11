# 📝 Changelog

## 2.0.0

### Major Changes

- [#8](https://github.com/kiforks/prettier-config/pull/8) [`40b26d8`](https://github.com/kiforks/prettier-config/commit/40b26d8da89a848b27be6da4a3341ba1625e68a2) Thanks [@kiforks](https://github.com/kiforks)! - Modernize the package — bump dependencies to latest, drop Node 20 support,
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

## 1.0.4

**📦 Dependencies**

- Updated Prettier and related plugins to their latest versions for improved compatibility and performance. [#8](https://github.com/kiforks/prettier-config/pull/8) by [@kiforks](https://github.com/kiforks)

## 1.0.3

**🐛 Fixes**

- Fixed import ordering by removing duplicate values for better maintainability. [#7](https://github.com/kiforks/prettier-config/pull/7) by [@kiforks](https://github.com/kiforks)

## 1.0.2

**🚀 Features**

- Updated the `quoteProps` rule to use the `as-needed` setting for improved consistency in object property quoting. [#5](https://github.com/kiforks/prettier-config/pull/5) by [@kiforks](https://github.com/kiforks)

## 1.0.1

**📝 Docs**

- Updated the changelog format and pull request template to follow best practices for clarity and consistency. [#2](https://github.com/kiforks/prettier-config/pull/2) by [@kiforks](https://github.com/kiforks)

## 1.0.0

**🚀 Features**

- Initial release of the shareable Prettier configuration.
