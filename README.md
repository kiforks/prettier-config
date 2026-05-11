# @kiforks/prettier-config

[![npm version](https://img.shields.io/npm/v/@kiforks/prettier-config?logo=npm&logoColor=fff)](https://www.npmjs.com/package/@kiforks/prettier-config)
[![Build Status](https://img.shields.io/github/actions/workflow/status/kiforks/prettier-config/ci.yml?branch=main&logo=github)](https://github.com/kiforks/prettier-config/actions/workflows/ci.yml)
[![Downloads per month](https://img.shields.io/npm/dm/@kiforks/prettier-config?logo=npm)](https://npmcharts.com/compare/@kiforks/prettier-config)
[![License: MIT](https://img.shields.io/npm/l/@kiforks/prettier-config?logo=opensourceinitiative&logoColor=fff)](./LICENSE.md)

Shareable [Prettier](https://prettier.io) configuration tuned for **Angular** projects — opinionated import grouping, attribute ordering, and sensible defaults.

## Features

- 🎯 **Angular template attribute ordering** — 24 priority groups (structural directives → animations → element refs → `^btn` / `^link` / `id` / `class` → `i18n-*` pairs → bindings → outputs → `[attr.data-*]` → `data-*`).
- 📚 **22-group import sort** — `@angular/*` first, then env / workspace / `@ngx-*` / `@ng-*` / scoped / `rxjs` / third-party / local layers (`.module`, `.service`, components, guards, …).
- 🅰️ **Angular parser for HTML** — `*.html` files use Prettier's angular parser automatically via an override.
- 🔧 **Sensible defaults** — tabs, single quotes, ES5 trailing commas, `arrowParens: 'avoid'`, `printWidth: 120`, `quoteProps: 'as-needed'`.
- ✅ **Snapshot-tested** — every rule is locked in by a fixture-based test suite running on Node 22.x and 24.x.

## Requirements

- Node **>= 22.22.1**
- Prettier **>= 3.8.0**

## Install

```bash
npm install --save-dev prettier @kiforks/prettier-config
```

> Or the equivalent: `yarn add -D`, `pnpm add -D`, `bun add -d`.

## Usage

Simplest setup — reference it directly from `package.json`:

```json
{
  "prettier": "@kiforks/prettier-config"
}
```

Or use a dedicated config file (`.prettierrc`):

```json
"@kiforks/prettier-config"
```

## Extending

Spread the config and override what you need. Works in `.prettierrc.js` (CJS) or `.prettierrc.mjs` (ESM):

```js
import kiforksConfig from '@kiforks/prettier-config';

/** @type {import('prettier').Config} */
export default {
  ...kiforksConfig,
  semi: false, // override an option
  printWidth: 100, // narrow lines

  // Append a custom file-type override (preserve ours)
  overrides: [...(kiforksConfig.overrides ?? []), { files: '*.svg', options: { parser: 'html' } }],
};
```

## What's inside

The full rule set lives in [`index.js`](./index.js). Release history: [`CHANGELOG.md`](./CHANGELOG.md).

## License

[MIT](./LICENSE.md) © [Kifor Kostiantyn](https://github.com/kiforks)
