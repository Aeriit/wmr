import render from 'preact-iso/prerender';
import { toStatic } from 'hoofd/preact';

let initialized = false;
// install a fetch+DOMParser "polyfills" for Node (used by content & <Markup>)
async function init() {
	const fs = (await eval('u=>import(u)')('fs')).promises;
	globalThis.fetch = async url => {
		const text = () => fs.readFile('dist/' + String(url).replace(/^\//, ''), 'utf-8');
		return { text, json: () => text().then(JSON.parse) };
	};

	globalThis.DOMParser = new (require('jsdom').JSDOM)('').window.DOMParser;
}

export async function prerender(vnode) {
	if (!initialized) {
		initialized = true;
		await init();
	}
	const res = await render(vnode);
	return { ...res, head: toStatic() };
}
