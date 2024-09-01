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
 
		<label>Change User Name:</label>
		<input
			id="change-user-name-input"
			placeholder="New User Name"
			type="text" />
		<button id="change-user-name-input-submit">Save New User Name</button>		
		
		<br />
		
		<div style="position:fixed" class="username-loading loading-block"></div>

		<div id="error-box-for-user-name"></div>
		
		
		<br />
		<br />
		<br />

		<label>Current Password:</label>

		<input
			id="current-password"
			placeholder="Current Password"
			type="text" />
<br>
		<label>New Password:</label>

		<input
			id="new-password"
			placeholder="New User Name"
			type="text" />
		<button id="change-password-input-submit" >Save New Login Password</button>
		
		<div id="error-box-for-password"></div>
		
		<br />
		<br />
	`,
	js: clientData => js`
document.querySelector("#change-password-input-submit").addEventListener("click", async () => {
	
	const formData = new FormData()

		formData.append("currentPassword", document.querySelector("#current-password").value)
		formData.append("newPassword", document.querySelector("#new-password").value)

	document.querySelector(".username-loading").classList.add("active")

 		const res = await fetch("/database/change-user-password", {
		method:"POST",
		body: formData
		
		})


	document.querySelector(".username-loading").classList.remove("active")


		if(res.ok){
	document.querySelector("#error-box-for-password").innerHTML = await res.text();

 	}else {
	document.querySelector("#error-box-for-password").innerHTML = await res.text();
 	
	}


	})



	document.querySelector(".page-title").innerHTML = "Settings"


	document.querySelector("#change-user-name-input-submit").addEventListener("click", async () =>{
		

		const formData = new FormData()

		formData.append("newUsername", document.querySelector("#change-user-name-input").value)



	document.querySelector(".username-loading").classList.add("active")


 		const res = await fetch("/database/change-user-name", {
		method:"POST",
		body: formData
		
		})

	document.querySelector(".username-loading").classList.remove("active")

		
	if(res.ok){
	document.querySelector("#error-box-for-user-name").innerHTML = await res.text();

	}else {
	document.querySelector("#error-box-for-user-name").innerHTML = await res.text();
	
	}

		})
    
    `,
};
