import pluginSortImports from '@ianvs/prettier-plugin-sort-imports';

import pluginOrganizeAttributes from 'prettier-plugin-organize-attributes';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	plugins: [pluginOrganizeAttributes, pluginSortImports],

	// ─── Core Prettier options ────────────────────────────────────────────
	trailingComma: 'es5',
	tabWidth: 2,
	singleQuote: true,
	useTabs: true,
	printWidth: 120,
	htmlWhitespaceSensitivity: 'ignore',
	arrowParens: 'avoid',
	quoteProps: 'as-needed',

	// ─── Angular HTML attribute ordering ──────────────────────────────────
	// Lower index = earlier in the rendered tag. Tests in
	// tests/fixtures/attributes/ pin every group below.
	attributeSort: 'ASC',
	attributeGroups: [
		'$ANGULAR_STRUCTURAL_DIRECTIVE', // *ngIf, *ngFor, *ngSwitchCase
		'$ANGULAR_ANIMATION', // @fadeIn
		'$ANGULAR_ANIMATION_INPUT', // [@fadeIn]="x"
		'$ANGULAR_ELEMENT_REF', // #templateRef, #ref
		'^btn', // btn-primary, btn-link
		'^link', // link-blue
		'$ID', // id="…"
		'$CLASS', // class="…", [class.x]="…"
		'^i18n-alt', // i18n-alt (then alt= below)
		'^alt',
		'^i18n-label',
		'^label',
		'^i18n-placeholder',
		'^placeholder',
		'^i18n-title',
		'^title',
		'^i18n-tooltip',
		'^tooltip',
		'$DEFAULT', // anything not matched explicitly (src, type, …)
		'^\\[(?!\\(|@|attr\\.data-)', // property bindings [hidden]="…" — exclude two-way, animation, data-attr
		'$ANGULAR_TWO_WAY_BINDING', // [(ngModel)]
		'$ANGULAR_OUTPUT', // (click), (input)
		'^\\[attr\\.data-', // [attr.data-id]="…"
		'^data-', // data-id="…"
	],

	// ─── TypeScript import sorting (@ianvs/prettier-plugin-sort-imports) ──
	// Each '' inserts a blank line between groups in the output.
	// Tests in tests/fixtures/imports/ pin every group below.
	importOrderParserPlugins: ['typescript', 'classProperties', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.0.0',
	importOrder: [
		// Test-only utilities (mocks, fakes) — must come first
		'^@ngneat/?.*$',
		'^@faker/?.*$',
		'^ng-mocks$',
		'',
		// Angular framework — in canonical layering order
		'^@angular/core/?.*$',
		'^@angular/common/?.*$',
		'^@angular/platform-browser/?.*$',
		'^@angular/router/?.*$',
		'^@angular/forms/?.*$',
		'^@angular/animations/?.*$',
		'^@angular/material/?.*$',
		'^@angular/cdk/?.*$',
		'^@angular/fire/?.*$',
		'^@angular/?.*$', // any other @angular/*
		'',
		// Workspace path aliases
		'^@env/(.*)$', // @env/environment
		'',
		'^@nx/?.*$', // Nx workspace tooling
		'',
		// Angular community ecosystem
		'^@ngx-?.*$',
		'^@ng-?.*$',
		'',
		// Any other scoped packages
		'^@.*$',
		'',
		// Reactive / utility libraries
		'^rxjs.*$',
		'^lodash$',
		'',
		// All other third-party packages
		'<THIRD_PARTY_MODULES>',
		'',
		// App-level modules and configs
		'^.*(\\.module)/?.*$',
		'^.*(\\.config)/?.*$',
		'',
		// App-level features — split by Angular concept
		'^.*(/services|\\.service|/api|\\.api|/dto|\\.dto)/?.*$',
		'^.*(/guards|\\.guard|/helpers|\\.helper)/?.*$',
		'^.*(/components|\\.component|/pages|/modals|/directives|\\.directive|/pipes|\\.pipe)/?.*$',
		'^.*(/resolvers|\\.resolver|/factories|\\.factory|/adapters|\\.adapter|/validators|\\.validator)/?.*$',
		'^.*(/mixins|\\.mixin|/mappers|\\.mapper|/states|\\.state|/stores|\\.store)/?.*$',
		'^.*(/interfaces|\\.interface|/enums|\\.enum|/models|\\.model|/types|\\.type|/routes|\\.route|/classes)/?.*$',
		'^.*(/i18n|\\.i18n|/constants|/utils|\\.util|/utilities)/?.*$',
		'',
		// Relative imports (./sibling, ../parent)
		'^[./]',
		'',
		// Catch-all — anything left over
		'.*',
	],

	// ─── File-type parser overrides ────────────────────────────────────────
	// .html files use Angular's template parser instead of plain HTML.
	overrides: [
		{
			files: '*.html',
			options: {
				parser: 'angular',
			},
		},
	],
};

export default config;
