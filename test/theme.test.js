import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const script = readFileSync(new URL("../_includes/theme.js", import.meta.url), "utf8");

function page(storage = new Map()) {
	const root = { dataset: {} };
	const button = {
		hidden: true,
		textContent: "",
		attributes: {},
		setAttribute(name, value) { this.attributes[name] = value; },
		addEventListener(event, handler) { this[event] = handler; },
	};
	let ready;
	runInNewContext(script, {
		document: {
			documentElement: root,
			addEventListener: (_, handler) => { ready = handler; },
			getElementById: () => button,
		},
		localStorage: {
			getItem: key => storage.get(key),
			setItem: (key, value) => storage.set(key, value),
			removeItem: key => storage.delete(key),
		},
	});
	return { root, button, ready };
}

test("restores light and dark before the page is ready", () => {
	for (const theme of ["light", "dark"]) {
		const view = page(new Map([["theme", theme]]));
		assert.equal(view.root.dataset.theme, theme);
		view.ready();
		assert.equal(view.button.textContent, `Theme: ${theme}`);
		assert.equal(view.button.hidden, false);
	}
});

test("missing or invalid preferences follow the system", () => {
	for (const theme of [undefined, "invalid"]) {
		const view = page(new Map([["theme", theme]]));
		view.ready();
		assert.equal(view.root.dataset.theme, undefined);
		assert.equal(view.button.textContent, "Theme: system");
	}
});

test("switching persists across pages and System clears the override", () => {
	const storage = new Map();
	const view = page(storage);
	view.ready();
	for (const theme of ["light", "dark", "system"]) {
		view.button.click();
		assert.equal(view.button.textContent, `Theme: ${theme}`);
		const expected = theme === "system" ? undefined : theme;
		assert.equal(view.root.dataset.theme, expected);
		assert.equal(storage.get("theme"), expected);
		assert.equal(page(storage).root.dataset.theme, expected);
	}
});

test("switching still works when browser storage is blocked", () => {
	const blocked = () => { throw new Error("Storage blocked"); };
	const view = page({ get: blocked, set: blocked, delete: blocked });
	view.ready();
	for (const theme of ["light", "dark", "system"]) {
		assert.doesNotThrow(() => view.button.click());
		assert.equal(view.root.dataset.theme, theme === "system" ? undefined : theme);
	}
});


test("the button explains its next action and cycles from a saved preference", () => {
	for (const [current, next] of [["system", "light"], ["light", "dark"], ["dark", "system"]]) {
		const view = page(new Map([["theme", current]]));
		view.ready();
		assert.equal(view.button.attributes["aria-label"], `Theme: ${current}. Switch to ${next} theme.`);
		view.button.click();
		assert.equal(view.root.dataset.theme, next === "system" ? undefined : next);
	}
});
