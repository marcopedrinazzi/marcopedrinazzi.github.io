(() => {
	const root = document.documentElement;
	let theme = "system";
	try {
		const saved = localStorage.getItem("theme");
		if (saved === "light" || saved === "dark") {
			theme = saved;
			root.dataset.theme = saved;
		}
	} catch {
		// Storage may be blocked; the system theme still works.
	}

	document.addEventListener("DOMContentLoaded", () => {
		const button = document.getElementById("theme-toggle");
		const nextTheme = { system: "light", light: "dark", dark: "system" };
		function updateLabel() {
			button.textContent = `Theme: ${theme}`;
			button.setAttribute("aria-label", `Theme: ${theme}. Switch to ${nextTheme[theme]} theme.`);
		}
		updateLabel();
		button.addEventListener("click", () => {
			theme = nextTheme[theme];
			if (theme === "system") {
				delete root.dataset.theme;
			} else {
				root.dataset.theme = theme;
			}
			updateLabel();
			try {
				if (theme === "system") {
					localStorage.removeItem("theme");
				} else {
					localStorage.setItem("theme", theme);
				}
			} catch {
				// Keep the selection usable when it cannot be saved.
			}
		});
		button.hidden = false;
	});
})();
