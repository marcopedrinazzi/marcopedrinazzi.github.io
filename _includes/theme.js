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
		const picker = document.getElementById("theme-select");
		picker.value = theme;
		picker.addEventListener("change", () => {
			if (picker.value === "system") {
				delete root.dataset.theme;
			} else {
				root.dataset.theme = picker.value;
			}
			try {
				if (picker.value === "system") {
					localStorage.removeItem("theme");
				} else {
					localStorage.setItem("theme", picker.value);
				}
			} catch {
				// Keep the selection usable when it cannot be saved.
			}
		});
		document.getElementById("theme-control").hidden = false;
	});
})();
