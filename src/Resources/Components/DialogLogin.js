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
			class="ED323G-dialog"
			open>
			<h3 class="ED323G-dialog-title">Admin Panel Login</h3>
			<form class="ED323G-form">
				<p>Username</p>
				<input
					type="text"
					class="ED323G-username-input" />
				<br />
				<p>Password</p>
				<input
					class="ED323G-password-input"
					type="password" />
				<br />
				<input
					type="submit"
					value="Login" />

				<div class="ED323G-login-error"></div>

				<div class="ED323G-loading loading-inline"></div>
			</form>
		</dialog>

		${() => {
			return typeof script == "string" ? `<script>${script}</script>` : "";
		}}

		<style>
			.ED323G-dialog {
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

			.ED323G-dialog-title {
				padding: 1rem;
				width: 100%;
				text-align: center;
				color: rgba(28, 43, 51, 1);
				font-family: "Optimistic Display", system-ui, sans-serif !important;
				margin: 0;
				border-bottom: 1px solid rgb(218, 221, 225);
				box-sizing: border-box;
			}

			.ED323G-warning-text {
				font-size: 1rem;
				color: crimson;
				text-align: center;
			}
			.ED323G-form {
				padding: 1rem;

				display: flex;
				flex-direction: column;
				justify-content: center;
				margin: 0;
				width: max-content;
				font-family: "Roboto" sans-serif;
			}

			.ED323G-form h1 {
				font-family: "Roboto", sans-serif;
			}

			.ED323G-form > p {
				margin-bottom: 0;
				font-family: "Roboto", sans-serif;
			}

			.ED323G-form [type="text"],
			.ED323G-form [type="password"] {
				padding: 1rem;

				border-radius: 0.5rem;
				border: 1px solid rgb(33, 33, 33, 0.7);
			}

			.ED323G-form [type="submit"] {
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
	js: clientData => js`
	
	document.querySelector(".ED323G-form").addEventListener("submit", async e => {
					e.preventDefault();

 					const formData = new FormData();
					formData.append("login_name", document.querySelector(".ED323G-username-input").value);
					formData.append("login_password", document.querySelector(".ED323G-password-input").value);
					
					
					try {
						document.querySelector(".ED323G-loading").classList.add("active");
						document.querySelector(".ED323G-login-error").innerHTML = "";

						const res = await fetch("/database/login", {
							body: formData,
							method: "POST",
						});

						// if (res.redirected) {
						// 	window.location.replace(res.url);
						// }

						if (res.ok) {
						
						document.querySelector(".ED323G-dialog").nextElementSibling.remove()
						document.querySelector(".ED323G-dialog").previousElementSibling.remove()
						document.querySelector(".ED323G-dialog").remove()
						
						}
 						 else if (!res.ok) {
							try {
								fetch("/get-component/public/ErrorBox", {
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({ message: "Unknown Error" }),
									method: "POST",
								})
									.then(e => e.json())
									.then(e => {
										document.querySelector(".ED323G-loading").classList.remove("active");
										document.querySelector(".ED323G-login-error").innerHTML = e.html;
									});
							} catch {}
						}



						
					} catch (error) {
						document.querySelector(".ED323G-loading").classList.remove("active");
						document.querySelector(".ED323G-login-error").innerHTML = \` <h1>Network Error</h1>\`;
					}
				});
`,
};
