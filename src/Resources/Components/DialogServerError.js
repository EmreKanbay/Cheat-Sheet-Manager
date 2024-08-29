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
			class="AzToA7-dialog"
			open>
			<h3 class="AzToA7-dialog-title">Internal Server Error</h3>
			<form class="AzToA7-form">
				<p>
					An unexpected error occurred on the server.
					<br />
					Please try again later. If the issue persists, create an issue on github
				</p>

				<div class="AzToA7-loading loading-inline"></div>
			</form>
		</dialog>

		${() => {
			return typeof script == "string" ? `<script>${script}</script>` : "";
		}}

		<style>
			.AzToA7-dialog {
				box-sizing: border-box;
				padding: 0;
				top: 50%;
				transform: translateY(-50%);
				background: white;
				border-radius: 0.35rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				border: none;
				z-index: 1;
			}

			.AzToA7-dialog-title {
				padding: 1rem;
				width: 100%;
				text-align: center;
				color: rgba(28, 43, 51, 1);
				font-family: "Optimistic Display", system-ui, sans-serif !important;
				margin: 0;
				border-bottom: 1px solid rgb(218, 221, 225);
				box-sizing: border-box;
			}

			.AzToA7-form {
				padding: 1rem;

				display: flex;
				flex-direction: column;
				justify-content: center;
				margin: 0;
				width: max-content;
				font-family: "Roboto" sans-serif;
			}

			.AzToA7-form > p {
				margin-top: 0;
				font-family: "Roboto", sans-serif;
			}
		</style>
	`,
	js: clientData => js``,
};
