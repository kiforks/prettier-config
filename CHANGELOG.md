# 📝 Changelog

## 2.0.2

### Patch Changes

- [#19](https://github.com/kiforks/prettier-config/pull/19) [`1d8f2d8`](https://github.com/kiforks/prettier-config/commit/1d8f2d87b3f0a3dc13af433005f1f56f60464a77) Thanks [@kiforks](https://github.com/kiforks)! - **🧹 Internal**
  - Opt the CI and release workflows in to running JavaScript-based GitHub
    Actions on Node 24 via `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true`. Silences
    the deprecation warning that `actions/checkout@v4` and
    `actions/setup-node@v4` print on every run about Node 20 being phased out
    in September 2026. No package consumer behaviour changes — purely a build
    pipeline hygiene patch.

## 2.0.1

### Patch Changes

- [#15](https://github.com/kiforks/prettier-config/pull/15) [`34c3b98`](https://github.com/kiforks/prettier-config/commit/34c3b983efb2249c5677081453db8cc1a0d6d138) Thanks [@kiforks](https://github.com/kiforks)! - **🔒 Security**
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
