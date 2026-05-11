import { equal } from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { test } from 'node:test';

import config from '../index.js';

import { format } from 'prettier';

const FIXTURES = resolve(import.meta.dirname, 'fixtures');

const collectInputs = async dir => {
	const results = [];

	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const fullPath = join(dir, entry.name);

		if (entry.isDirectory()) {
			results.push(...(await collectInputs(fullPath)));
		} else if (entry.name.includes('.input.')) {
			results.push(fullPath);
		}
	}

	return results;
};

for (const inputPath of await collectInputs(FIXTURES)) {
	const expectedPath = inputPath.replace('.input.', '.expected.');
	const label = relative(FIXTURES, dirname(inputPath));

	test(label, async () => {
		const [input, expected] = await Promise.all([readFile(inputPath, 'utf8'), readFile(expectedPath, 'utf8')]);

		const formatted = await format(input, { ...config, filepath: inputPath });

		equal(formatted, expected);
	});
}
