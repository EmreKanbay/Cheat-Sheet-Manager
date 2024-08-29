const Index = require("#Index");

const html = async (x, ...values) => {
	var rendered = "";
	for (let u = 0; u < x.length; u++) {
		rendered = rendered.concat(x[u]);
		if (u < x.length - 1) {
			if (typeof values[u] == "function") {
				rendered = rendered.concat(await values[u]());
			} else {
				rendered = rendered.concat(values[u]);
			}
		}
	}

	return rendered;
};

const js = async (x, ...values) => {
	var rendered = "";
	for (let u = 0; u < x.length; u++) {
		rendered = rendered.concat(x[u]);
		if (u < x.length - 1) {
			if (typeof values[u] == "function") {
				rendered = rendered.concat(await values[u]());
			} else {
				rendered = rendered.concat(values[u]);
			}
		}
	}

	return rendered;
};
// ${()=> {return typeof script == "string" ? `<script>${script}</script>` : ""}}

module.exports = {
	html: (script, clientData) => html`
		<h1>Not Functional yet</h1>

		<label>Change User Name:</label>
		<input
			placeholder="New User Name"
			type="text" />
		<button>Save New User Name</button>
		<br />
		<br />

		<label>Change Login Password:</label>
		<input
			placeholder="New User Name"
			type="text" />
		<button>Save New Login Password</button>
		<br />
		<br />
	`,
	js: clientData => js`
	document.querySelector(".page-title").innerHTML = "Settings"
    
    `,
};
