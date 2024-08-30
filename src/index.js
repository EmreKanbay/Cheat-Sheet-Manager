/* TODO
birden çok aynı isimli user bulunursa db de hata veriyor, kullanıcı adı kontrol edilmeli


*/

//Import libraries
const express = require("express");
var cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const pg = require("pg");
const path = require("path");
const cookieParser = require("cookie-parser");
const AdminLayout = require("./Resources/Components/AdminLayout");
const sha256 = require("js-sha256");
const Components = require("./Resources/Components");

//Initalize libraries
const { Client } = pg;
const upload = multer();

//Global variables
module.exports = {
	__rootDir: __dirname,
	Client,
	upload,
	express,
	sha256,
};

// Setup Routes
const root = express();
const getComponents = require("./Routes/getComponent");
const database = require("./Routes/database");

// Setup Middlewares
root.use(cors());
root.use(cookieParser());


// db check
root.use("/", (req, res, next), ()=> {
try{

	const data = fs.readFileSync(path.join(__dirname, "..", "env.json"), { encoding: "utf8", flag: "r" });
	const client = new Client({ connectionString: JSON.parse(data).PG_CONNECTION_STRING });
	client.connect().then(() => {next()}).catch((e) => {console.log(e); res.status(500).send('<h1>Internal Server Error</h1>')})

}catch(error){


	console.log(error)
	res.status(500).send('<h1>Internal Server Error</h1>')

}
	

})



// User Check 







root.use("/assets", express.static(path.join(__dirname, "Assets")));
root.use("/get-component", getComponents);
root.use("/database", database);

root.post("/login", upload.none(), async (req, res) => {
	var record;

	const data = fs.readFileSync(path.join(__dirname, "..", "env.json"), { encoding: "utf8", flag: "r" });

	const client = new Client({ connectionString: JSON.parse(data).PG_CONNECTION_STRING });

	await client.connect();

	try {
		record = await client.query(
			`SELECT login_name, password_hash FROM "users" WHERE login_name='${req.body["login_name"]}'`,
		);
	} catch (error) {
		console.log(error);
		res.statusCode = 500;
		res.send();
	}

	try {
		if (record.rowCount == 0) {
			res.statusCode = 404;
			res.send();
		} else if (record.rowCount == 1) {
			if (record.rows[0]["password_hash"] == sha256(req.body["login_password"])) {
				res.cookie("login_name", record.rows[0]["login_name"]);
				res.cookie("password_hash", record.rows[0]["password_hash"]);
				res.statusCode = 202;
				res.send();
				// res.redirect(new URL(`/admin/${record.rows[0]["id"]}`, req.protocol + "://" + req.get("host")));
			} else {
				res.statusCode = 401;
				res.send();
			}
		} else {
			res.statusCode = 500;
			res.send();
		}
	} catch (error) {
		res.statusCode = 500;
		res.send();
	}
});




root.use("/",
	(req, res, next) => {
		if (req.path == "/") next();
		else if (String(req.path).split("/")[1] == "assets") next();
		else if (String(req.path).split("/")[1] == "get-component") next();
		else if (req.path == "/login" && req.method == "POST") return next();
		else if (req.path == "/database" && req.method == "POST") return next();
		else res.redirect(new URL("/", req.protocol + "://" + req.get("host")));
	},

	async (req, res, next) => {
		var record;
		try {
			const data = fs.readFileSync(path.join(__dirname, "..", "env.json"), { encoding: "utf8", flag: "r" });

			const client = new Client({ connectionString: JSON.parse(data).PG_CONNECTION_STRING });

			client
				.connect()
				.then(async e => {
					console.log("client connected");

					if (typeof req.cookies?.login_name != "undefined" && typeof req.cookies?.password_hash != "undefined") {
						record = await client.query(
							`SELECT login_name, password_hash FROM "users" WHERE login_name='${req.cookies?.login_name}' AND password_hash='${req.cookies?.password_hash}'`,
						);

						console.log("credentials are correct");

						if (record.rows.length == 1) {
							res.send(
								await AdminLayout.html(
									(initialPage = await Components.private.PageHome.html(
										(script = await Components.private.PageHome.js()),
									)),
									(script = await AdminLayout.js()),
								),
							);
							client.end();
							return;
						} else {
							res.send(
								await AdminLayout.html(
									(initialPage = await Components.private.PageHome.html(
										(script = await Components.private.PageHome.js()),
									)),
									(script = await AdminLayout.js()),
									(modal = await Components.public.DialogUnauthorized.html()),
								),
							);
							client.end();

							return;
						}
					} else {
						if (!JSON.parse(data)?.registered) {
							res.send(
								await AdminLayout.html(
									(initialPage = await Components.private.PageHome.html(
										(script = await Components.private.PageHome.js()),
									)),
									(script = await await AdminLayout.js()),
									(modal = await Components.public.DialogRegister.html(
										(script = await Components.public.DialogRegister.js()),
									)),
								),
							);
							await client.end();
						} else {
							res.send(
								await AdminLayout.html(
									(initialPage = await Components.private.PageHome.html(
										(script = await Components.private.PageHome.js()),
									)),
									(script = await AdminLayout.js()),
									(modal = await Components.public.DialogUnauthorized.html(
										(script = await Components.public.DialogUnauthorized.js()),
									)),
								),
							);
							await client.end();
						}
					}
				})
				.catch(async e => {
  					console.log("client not  connected");

					if (JSON.parse(data).PG_CONNECTION_STRING == "") {
						res.send(
							await AdminLayout.html(
								(initialPage = await Components.private.PageHome.html(
									(script = await Components.private.PageHome.js()),
								)),
								(script = await AdminLayout.js()),
								(modal = await Components.public.DialogConfig.html(
									(script = await Components.public.DialogConfig.js()),
									(clientData = "Initialize Neon Database"),
								)),
							),
						);
					} else {
						res.send(
							await AdminLayout.html(
								(initialPage = await Components.private.PageHome.html(
									(script = await Components.private.PageHome.js()),
								)),
								(script = await AdminLayout.js()),
								(modal = await Components.public.DialogConfig.html(
									(script = await Components.public.DialogConfig.js()),
									(clientData = "Database Connection Failed"),
								)),
							),
						);
					}

					await client.end();
				});
		} catch (error) {
			console.log(error);
			// res.redirect(new URL(`/`, req.protocol + "://" + req.get("host")));
			res.send(
				await AdminLayout.html(
					(initialPage = "initialPage"),
					(script = await AdminLayout.js()),
					(modal = await Components.public.DialogServerError.html()),
				),
			);
			await client.end();
		}
	},
);

// start server
root.listen(3000, () => {
	console.log("Server Connected");
});
