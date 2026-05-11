import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';

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
	const input = await readFile(inputPath, 'utf8');
	const formatted = await format(input, { ...config, filepath: inputPath });

	await writeFile(expectedPath, formatted);
	console.log(`✓ ${relative(FIXTURES, dirname(inputPath))}`);
}
