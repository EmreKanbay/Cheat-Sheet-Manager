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

module.exports = {
	html: (script, clientData) => html`
		<dialog
			class="zpEVFE-dialog"
			open>
			<h3 class="zpEVFE-dialog-title">Unauthorized Access</h3>
			<form class="zpEVFE-form">
				<p>You are not authorized to access this resource. Please log in to continue</p>

				<input
					type="submit"
					value="Login" />

				<div class="zpEVFE-loading loading-inline"></div>
			</form>
		</dialog>

		${() => {
			return typeof script == "string" ? `<script>${script}</script>` : "";
		}}

		<style>
			.zpEVFE-dialog {
				box-sizing: border-box;
				padding: 0;
				top: 50%;
				transform: translateY(-50%);
				background: white;
				border-radius: 0.35rem;
				flex-direction: column;
				align-items: center;
				border: none;
				z-index: 1;
			}

			.zpEVFE-dialog-title {
				padding: 1rem;
				width: 100%;
				text-align: center;
				color: rgba(28, 43, 51, 1);
				font-family: "Optimistic Display", system-ui, sans-serif !important;
				margin: 0;
				border-bottom: 1px solid rgb(218, 221, 225);
				box-sizing: border-box;
			}

			.zpEVFE-form {
				padding: 1rem;

				display: flex;
				flex-direction: column;
				justify-content: center;
				margin: 0;
				width: max-content;
				font-family: "Roboto" sans-serif;
			}

			.zpEVFE-form > p {
				margin-top: 0;
				font-family: "Roboto", sans-serif;
			}

			.zpEVFE-form [type="submit"] {
				cursor: pointer;
				padding: 0.7rem 1.5rem;
				border: none;
				background-color: black;
				color: white;
				border-radius: 0.5rem;
				width: 100%;
			}
		</style>
	`,
	js: clientData => js`document.querySelector(".zpEVFE-form").addEventListener("submit", (e)=> {
		e.preventDefault()
		fetch("/get-component/public/DialogLogin", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
 
})
	.then( e => e.json())
	.then(e => {

		console.log(e.html)
  		document.querySelector(".zpEVFE-dialog").nextElementSibling.remove()
  		document.querySelector(".zpEVFE-dialog").nextElementSibling.remove()
  		document.querySelector(".zpEVFE-dialog").remove()

		const div = document.createElement("div")
		div.innerHTML = e.html;
	
 		document.querySelector("body").prepend(div.children[1])
		document.querySelector("body").prepend(div.children[0])

		var eaa = document.createElement("script");
		eaa.innerHTML = e.js;
		document.querySelector("body").prepend(eaa);
  	
	}).catch(e => {alert("Authentication Failed"+ e)})

		})`,
};
