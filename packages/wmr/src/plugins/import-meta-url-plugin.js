/**
 * @param {object} options
 * @param {string} options.root
 * @returns {import('rollup').Plugin}
 */
export function importMetaUrl({ root }) {
	return {
		name: 'import-meta-url',
		transform(code, id) {
			if (!/\.([tj]sx?|[mc]js)$/.test(id)) return;

			//
		}
	};
}
