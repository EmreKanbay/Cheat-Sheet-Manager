const Index = require("#Index");
const markdownit = require("markdown-it");
const md = markdownit();

const fs = require("fs");
const path = require("path");

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

var message;

// ${()=> {return typeof script == "string" ? `<script>${script}</script>` : ""}}

module.exports = {
	html: (script, clientData) => html`
		${() => {
			return typeof script == "string" ? `<script>${script}</script>` : "";
		}}
		${async () => {
			try {
				const res = await fetch(
					"https://raw.githubusercontent.com/EmreKanbay/Open-Source-Starter-Kit/master/README.md",
					{
						method: "GET",
					},
				);

				return await md.render(await res.text());
			} catch {
				console.log("e");
			}
		}}
	`,
	js: clientData => js`
	
	
	
	document.querySelector(".page-title").innerHTML = "README.md"



	`,
};
