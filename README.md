# prettier-config

[![npm version](https://img.shields.io/npm/v/prettier-config?logo=npm&logoColor=fff)](https://www.npmjs.com/package/prettier-config)
[![Build Status](https://img.shields.io/github/actions/workflow/status/kiforks/prettier-config/cd.yml?query=workflow%3Adeploys&logo=github)](https://github.com/kiforks/prettier-config/actions/workflows/cd.yml?query=workflow%3Adeploy)
[![Downloads per month](https://img.shields.io/npm/dm/prettier-config)](https://npmcharts.com/compare/prettier-config)

## Usage

You first need to install your published configuration, for example:

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->

```bash
npm install --save-dev prettier prettier-config
```

<!--yarn-->

```bash
yarn add --dev prettier prettier-config
```

<!--pnpm-->

```bash
pnpm add --save-dev prettier prettier-config
```

<!--bun-->

```bash
bun add --dev prettier prettier-config
```

<!--END_DOCUSAURUS_CODE_TABS-->

Then, you can reference it in your `package.json`:

```json
{
  "name": "my-cool-library",
  "version": "1.0.0",
  "prettier": "prettier-config"
}
```

If you don’t want to use `package.json`, you can use any of the supported extensions to export a string, e.g. `.prettierrc`:

```json
"prettier-config"
```

### Extending

To _extend_ the configuration to overwrite some properties from the configuration, import the file in a `.prettierrc.mjs` file and export the modifications, e.g:

```js
import kiforPrettierConfig from "prettier-config";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...kiforPrettierConfig,
  semi: false,
};

export default config;
```