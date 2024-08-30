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
			class="ku3uKC-dialog"
			open>
			<h3 class="ku3uKC-dialog-title">Create Admin Account</h3>
			<form class="ku3uKC-form">
				<p>Username</p>
				<input
					type="text"
					class="ku3uKC-username-input" />
				<br />
				<p>Password</p>
				<input
					class="ku3uKC-password-input"
					type="password" />
				<br />
				<p>Verify</p>
				<input
					class="ku3uKC-password-input-verify"
					type="password" />
				<br />

				<input
					type="submit"
					value="Login" />

				<div class="ku3uKC-loading loading-inline"></div>
				<div class="ku3uKC-login-error"></div>

			</form>
		</dialog>

		${() => {
			return typeof script == "string" ? `<script>${script}</script>` : "";
		}}

		<style>
			.ku3uKC-login-registered {
				display: none;
				text-align: center;
				cursor: pointer;
				font-size: 1.2rem;
				text-decoration: underline;
			}
			.ku3uKC-dialog {
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

			.ku3uKC-dialog-title {
				padding: 1rem;
				width: 100%;
				text-align: center;
				color: rgba(28, 43, 51, 1);
				font-family: "Optimistic Display", system-ui, sans-serif !important;
				margin: 0;
				border-bottom: 1px solid rgb(218, 221, 225);
				box-sizing: border-box;
			}

			.ku3uKC-warning-text {
				font-size: 1rem;
				color: crimson;
				text-align: center;
			}
			.ku3uKC-form {
				padding: 0.5rem;

				display: flex;
				flex-direction: column;
				justify-content: center;
				margin: 0;
				width: max-content;
				font-family: "Roboto" sans-serif;
			}

			.ku3uKC-form h1 {
				font-family: "Roboto", sans-serif;
			}

			.ku3uKC-form > p {
				margin-bottom: 0;
				font-family: "Roboto", sans-serif;
			}

			.ku3uKC-form [type="text"],
			.ku3uKC-form [type="password"] {
				padding: 1rem;

				border-radius: 0.5rem;
				border: 1px solid rgb(33, 33, 33, 0.7);
			}

			.ku3uKC-form [type="submit"] {
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



	document.querySelector(".ku3uKC-form").addEventListener("submit", async e => {
		e.preventDefault();
	
	
	
	
	document.querySelector(".ku3uKC-loading").classList.add("active");
	document.querySelector(".ku3uKC-login-error").innerHTML = "";
	
	
	
	if( document.querySelector(".ku3uKC-password-input").value == document.querySelector(".ku3uKC-password-input-verify").value){
	
	if(document.querySelector(".ku3uKC-username-input").value != ""){
	
	if( document.querySelector(".ku3uKC-password-input").value != ""){
	
	
	const formData = new FormData();
	formData.append("login_name", document.querySelector(".ku3uKC-username-input").value);
	formData.append("login_password", document.querySelector(".ku3uKC-password-input").value);
	
	
	try {
	
	const res = await fetch("/database/register", {
	body: formData,
	method: "POST",
	});
	
 	if (res.ok){
	
	
	window.location.href = "/"
	
	} else if(!res.ok){
	
		document.querySelector(".ku3uKC-loading").classList.remove("active");
		document.querySelector(".ku3uKC-login-error").innerHTML = await res.text();
		
	
	}
	
	
	
	
	} catch (error) {
	 console.log(error)
	document.querySelector(".ku3uKC-loading").classList.remove("active");
	document.querySelector(".ku3uKC-login-error").innerHTML = "<h1>Network Error</h1>";
	}
	
	
	}else{
	
	
	try {
	fetch("/get-component/public/ErrorBox", {
	method: "POST",
	body: JSON.stringify({ message: "Passwords cant be empty" }),
	headers: {"Content-Type":"application/json"}
	})
	.then(e => e.json())
	.then(e => {
	document.querySelector(".ku3uKC-loading").classList.remove("active");
	document.querySelector(".ku3uKC-login-error").innerHTML = e.html;
	});
	} catch {}
	
	
	}
	
	
	
	
	
	}else{
	
	try {
	fetch("/get-component/public/ErrorBox", {
	method: "POST",
	body: JSON.stringify({ message: "Username cant be empty" }),
	headers: {"Content-Type":"application/json"}
	})
	.then(e => e.json())
	.then(e => {
	document.querySelector(".ku3uKC-loading").classList.remove("active");
	document.querySelector(".ku3uKC-login-error").innerHTML = e.html;
	});
	} catch {}
	
	}
	}else{
	try {
	fetch("/get-component/public/ErrorBox", {
	method: "POST",
	body: JSON.stringify({ message: "Passwords does not match" }),
	headers: {"Content-Type":"application/json"}
	})
	.then(e => e.json())
	.then(e => {
	document.querySelector(".ku3uKC-loading").classList.remove("active");
	document.querySelector(".ku3uKC-login-error").innerHTML = e.html;
	});
	} catch {}
	
	}
	
	
		 
	
	});
	

	
`,
};
