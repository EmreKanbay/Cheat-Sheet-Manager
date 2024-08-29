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
			class="HZjHbp-dialog"
			open>
			<h3 class="HZjHbp-dialog-title">Neon Database</h3>
			<form class="HZjHbp-form">
				<p class="HZjHbp-form-detail">${clientData}</p>

				<p class="HZjHbp-form-string">Conenction String</p>
				<input
					placeholder="postgresql://user:password@host/database"
					class="HZjHbp-neon-string-input"
					type="password" />
				<a
					class="HZjHbp-dialog-how-to-video"
					href="">
					how to get connection string for free under 3 minutes
				</a>

				<input
					type="submit"
					value="Connect Neon Database" />

				<div class="HZjHbp-login-error"></div>

				<div class="HZjHbp-loading loading-inline"></div>

				<p class="HZjHbp-login-enter-after-db">Enter To Admin Panel</p>
				<p></p>
				<p class="HZjHbp-login-enter-after-register">Click To Register</p>
				<p></p>
			</form>
		</dialog>

		${() => {
			return typeof script == "string" ? `<script>${script}</script>` : "";
		}}

		<style>
			.HZjHbp-login-enter-after-db {
				display: none;
				text-decoration: underline;
				cursor: pointer;
				text-align: center;
				font-size: 1.2rem;
			}
			.HZjHbp-login-enter-after-register {
				text-decoration: underline;
				display: none;
				cursor: pointer;
				text-align: center;
				font-size: 1.2rem;
			}

			.HZjHbp-form-detail {
				margin: 0 0 1rem 0 !important;
				font-size: 1.2rem;
			}

			.HZjHbp-form-string-later {
				text-align: center;
				font-size: 0.8rem;
				cursor: pointer;
				text-decoration: underline;
			}
			.HZjHbp-form-string-later:hover {
				filter: invert(1) brightness(35%);
			}

			.HZjHbp-form-string-later:active {
				filter: invert(1) brightness(50%);
			}

			.HZjHbp-form-string {
				margin-top: 0;
			}
			.HZjHbp-dialog-how-to-video {
				margin: 0.4rem 1rem 1rem 1rem;
				font-size: 0.8rem;
				position: relative;
			}
			.HZjHbp-dialog-how-to-video::before {
				width: 1rem;
				height: 1rem;
				content: "";
				position: absolute;
				mask-image: url("../Assets/external-link.svg");
				background-color: rgb(0, 0, 0, 0.8);

				mask-size: contain;
				right: 100%;
			}

			.HZjHbp-dialog {
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

			.HZjHbp-dialog-title {
				padding: 1rem;
				width: 100%;
				text-align: center;
				color: rgba(28, 43, 51, 1);
				font-family: "Optimistic Display", system-ui, sans-serif !important;
				margin: 0;
				border-bottom: 1px solid rgb(218, 221, 225);
				box-sizing: border-box;
			}

			.HZjHbp-warning-text {
				font-size: 1rem;
				color: crimson;
				text-align: center;
			}
			.HZjHbp-form {
				padding: 1rem;

				display: flex;
				flex-direction: column;
				justify-content: center;
				margin: 0;
				width: max-content;
				font-family: "Roboto" sans-serif;
			}

			.HZjHbp-form h1 {
				font-family: "Roboto", sans-serif;
			}

			.HZjHbp-form > p {
				margin-bottom: 0;
				font-family: "Roboto", sans-serif;
			}

			.HZjHbp-form [type="text"],
			.HZjHbp-form [type="password"] {
				padding: 1rem;

				border-radius: 0.5rem;
				border: 1px solid rgb(33, 33, 33, 0.7);
			}

			.HZjHbp-form [type="submit"] {
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
	
 
	document.querySelector(".HZjHbp-login-enter-after-db").addEventListener("click",async (e) => {
		
		e.target.parentNode.parentNode.nextElementSibling.remove()
		e.target.parentNode.parentNode.nextElementSibling.remove()
		e.target.parentNode.parentNode.remove()
		
		})
	
			document.querySelector(".HZjHbp-login-enter-after-register").addEventListener("click",async (e) => {
		

				try {
								fetch("/get-component/public/DialogRegister", {
  									method: "POST",
									body: JSON.stringify({ message: "Database Connection Failed" }),
									headers: {"Content-Type":"application/json"}
								})
									.then(e => e.json())
									.then(e => {
										document.querySelector(".HZjHbp-loading").classList.remove("active");
										console.log(e)
										document.querySelector(".HZjHbp-dialog").nextElementSibling.remove()
										document.querySelector(".HZjHbp-dialog").nextElementSibling.remove()
										document.querySelector(".HZjHbp-dialog").remove()
		

										const div = document.createElement("div")
											div.innerHTML = e.html;
										
											document.querySelector("body").prepend(div.children[1])
											document.querySelector("body").prepend(div.children[0])

											var eaa = document.createElement("script");
											eaa.innerHTML = e.js;
											document.querySelector("body").prepend(eaa);
										
									
											
									});
							} catch {}



	
		})


	document.querySelector(".HZjHbp-form").addEventListener("submit",async (e) => {
	e.preventDefault()



try {

						document.querySelector(".HZjHbp-loading").classList.add("active");
						document.querySelector(".HZjHbp-login-error").innerHTML = "";

						const res = await fetch("/database/connect", {
							body: JSON.stringify({ db_string: document.querySelector(".HZjHbp-neon-string-input").value }),
							headers: {"Content-Type":"application/json"},
							method: "POST",
						});


						if (res.status == 400) {
							try {
								fetch("/get-component/public/ErrorBox", {
  									method: "POST",
									body: JSON.stringify({ message: "Database Connection Failed" }),
									headers: {"Content-Type":"application/json"}
								})
									.then(e => e.json())
									.then(e => {
										document.querySelector(".HZjHbp-loading").classList.remove("active");
										document.querySelector(".HZjHbp-login-error").innerHTML = e.html;
									});
							} catch {}
						} else if (res.status == 501) {
							try {
								fetch("/get-component/public/ErrorBox", {
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({ message: "Database Connected but initilasition failed" }),
									method: "POST",
								})
									.then(e => e.json())
									.then(e => {
										document.querySelector(".HZjHbp-loading").classList.remove("active");
										document.querySelector(".HZjHbp-login-error").innerHTML = e.html;
									});
							} catch {}
						} else if (res.status == 500) {
							try {
								fetch("/get-component/public/ErrorBox", {
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({ message: "Internal Server Error" }),
									method: "POST",
								})
									.then(e => e.json())
									.then(e => {
										document.querySelector(".HZjHbp-loading").classList.remove("active");
										document.querySelector(".HZjHbp-login-error").innerHTML = e.html;
									});
							} catch {}
						}else if (!res.ok) {
							try {
								fetch("/get-component/public/ErrorBox", {
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({ message: "Unknown Error" }),
									method: "POST",
								})
									.then(e => e.json())
									.then(e => {
										document.querySelector(".HZjHbp-loading").classList.remove("active");
										document.querySelector(".HZjHbp-login-error").innerHTML = e.html;
									});
							} catch {}
						}else if (res.status == 204) {
							try {
								fetch("/get-component/public/SuccessBox", {
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({ message: "Database Changed Succesfully, It already initialized before. <br>in order to log in, you need to copy previous DB into<br> new one manually " }),
									method: "POST",
								})
									.then(e => e.json())
									.then(e => {
										document.querySelector(".HZjHbp-login-enter-after-db").style.display = "block";
										document.querySelector(".HZjHbp-login-enter-after-register").style.display = "none";


										document.querySelector(".HZjHbp-loading").classList.remove("active");
										document.querySelector(".HZjHbp-login-error").innerHTML = e.html;
									});
							} catch {}
						}else if (res.status == 202) {
							try {
								fetch("/get-component/public/SuccessBox", {
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({ message: "Database Connected Succesfully" }),
									method: "POST",
								})
									.then(e => e.json())
									.then(e => {
										document.querySelector(".HZjHbp-login-enter-after-register").style.display = "block";
										document.querySelector(".HZjHbp-login-enter-after-db").style.display = "none''WW";



										document.querySelector(".HZjHbp-loading").classList.remove("active");
										document.querySelector(".HZjHbp-login-error").innerHTML = e.html;
									});
							} catch {}
}
					} catch (error) {
						document.querySelector(".HZjHbp-loading").classList.remove("active");
						document.querySelector(".HZjHbp-login-error").innerHTML = \` <h1>Network Error</h1>\`;
					}



 
 
		})
	
`,
};
