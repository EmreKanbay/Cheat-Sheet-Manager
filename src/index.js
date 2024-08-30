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
const { error } = require("console");

// Setup Middlewares
root.use(cors());
root.use(cookieParser());

// db Connection check

var DB_CHECK = async (req, res, data) => {
	const client = new Client({ connectionString: data.PG_CONNECTION_STRING });

	try {
		//db connected
		await client.connect();

		await TestDB(req, res, data, client);

		// DB_INIT_CHECK(req, res, data)
	} catch (e) {
		//connection failed
		if (data.initialized) {
			res.send(
				await AdminLayout.html(
					(initialPage = await Components.private.PageHome.html((script = await Components.private.PageHome.js()))),
					(script = await AdminLayout.js()),
					(modal = await Components.public.DialogAlert.html(
						(script = await Components.public.DialogAlert.js()),
						(clientData =
							"DB is initialized before but unable to connect now, reloading the page may solve the error "),
					)),
				),
			);
			client.end();
		} else {
			res.send(
				await AdminLayout.html(
					(initialPage = await Components.private.PageHome.html((script = await Components.private.PageHome.js()))),
					(script = await AdminLayout.js()),
					(modal = await Components.public.DialogConfig.html(
						(script = await Components.public.DialogConfig.js()),
						(clientData = "Initialize Neon Database"),
					)),
				),
			);
			client.end();
		}

		// if(data?.initialized){
		// 	//connection failed
		// 	res.send("DB connection failed and it already initialized")

		// }else{
		// 	//CONFİGURE DB
		// 	res.send(
		// 	await AdminLayout.html(
		// 		(initialPage = await Components.private.PageHome.html(
		// 			(script = await Components.private.PageHome.js()),
		// 		)),
		// 		(script = await AdminLayout.js()),
		// 		(modal = await Components.public.DialogConfig.html(
		// 			(script = await Components.public.DialogConfig.js()),
		// 			(clientData = "Initialize Neon Database"),
		// 		)),
		// 	),
		// );
		// }
	}
};

const TestDB = async (req, res, data, client) => {
	try {
		//is database healty

		var response = await client.query(`SELECT * FROM "ossk_users" `);
		DBUserData(req, res, data, client, response);
	} catch (e) {
		data.initialized = false;

		await fs.writeFileSync(path.join(__dirname, "..", "env.json"), JSON.stringify(data));

		//INITIALIZE NEON DATABASE MODAL
		res.send(
			await AdminLayout.html(
				(initialPage = await Components.private.PageHome.html((script = await Components.private.PageHome.js()))),
				(script = await AdminLayout.js()),
				(modal = await Components.public.DialogIntializeDB.html(
					(script = await Components.public.DialogIntializeDB.js()),
				)),
			),
		);
		client.end();
	}
};

const DBUserData = async (req, res, data, client, response) => {
	switch (response.rows.length) {
		case 0:
			res.send(
				await AdminLayout.html(
					(initialPage = await Components.private.PageHome.html((script = await Components.private.PageHome.js()))),
					(script = await await AdminLayout.js()),
					(modal = await Components.public.DialogRegister.html((script = await Components.public.DialogRegister.js()))),
				),
			);
			client.end();

			break;
		case 1:
			await ChekedIfLoggedIn(req, res, data, client);

			break;

		default:
			res.send(
				await AdminLayout.html(
					(initialPage = await Components.private.PageHome.html((script = await Components.private.PageHome.js()))),
					(script = await AdminLayout.js()),
					(modal = await Components.public.DialogAlert.html(
						(script = await Components.public.DialogAlert.js()),
						(clientData = "Multiple Users Found In DB  and Thats a problem"),
					)),
				),
			);
			client.end();

			break;
	}
};

const ChekedIfLoggedIn = async (req, res, data, client) => {
	try {
		var response = await client.query(
			`SELECT login_name, password_hash FROM "ossk_users" WHERE login_name='${req.cookies?.login_name}' AND password_hash='${req.cookies?.password_hash}'`,
		);

		if (response.rows.length == 1) {
			res.send(
				await AdminLayout.html(
					(initialPage = await Components.private.PageHome.html((script = await Components.private.PageHome.js()))),
					(script = await AdminLayout.js()),
				),
			);
			client.end();
		} else {
			res.clearCookie("login_name");
			res.clearCookie("password_hash");

			res.send(
				await AdminLayout.html(
					(initialPage = await Components.private.PageHome.html((script = await Components.private.PageHome.js()))),
					(script = await AdminLayout.js()),
					(modal = await Components.public.DialogLogin.html((script = await Components.public.DialogLogin.js()))),
				),
			);
			client.end();
		}
	} catch (e) {
		console.log(error);
		res.send(
			await AdminLayout.html(
				(initialPage = await Components.private.PageHome.html((script = await Components.private.PageHome.js()))),
				(script = await AdminLayout.js()),
				(modal = await Components.public.DialogAlert.html(
					(script = await Components.public.DialogAlert.js()),
					(clientData = "Internal server error" + error),
				)),
			),
		);
		client.end();
	}
};

root.get("/", async (req, res, next) => {
	var data = await fs.readFileSync(path.join(__dirname, "..", "env.json"), { encoding: "utf8", flag: "r" });
	data = await JSON.parse(data);

	await DB_CHECK(req, res, data);
});

root.use("/assets", express.static(path.join(__dirname, "Assets")));
root.use("/get-component", getComponents);
root.use("/database", database);

// root.use("/",
// 	(req, res, next) => {
// 		if (req.path == "/") next();
// 		else if (String(req.path).split("/")[1] == "assets") next();
// 		else if (String(req.path).split("/")[1] == "get-component") next();
// 		else if (req.path == "/login" && req.method == "POST") return next();
// 		else if (req.path == "/database" && req.method == "POST") return next();
// 		else res.redirect(new URL("/", req.protocol + "://" + req.get("host")));
// 	},

// 	async (req, res, next) => {
// 		var record;
// 		try {
// 			const data = fs.readFileSync(path.join(__dirname, "..", "env.json"), { encoding: "utf8", flag: "r" });

// 			const client = new Client({ connectionString: JSON.parse(data).PG_CONNECTION_STRING });

// 			client
// 				.connect()
// 				.then(async e => {
// 					console.log("client connected");

// 					if (typeof req.cookies?.login_name != "undefined" && typeof req.cookies?.password_hash != "undefined") {
// 						record = await client.query(
// 							`SELECT login_name, password_hash FROM "users" WHERE login_name='${req.cookies?.login_name}' AND password_hash='${req.cookies?.password_hash}'`,
// 						);

// 						console.log("credentials are correct");

// 						if (record.rows.length == 1) {
// 							res.send(
// 								await AdminLayout.html(
// 									(initialPage = await Components.private.PageHome.html(
// 										(script = await Components.private.PageHome.js()),
// 									)),
// 									(script = await AdminLayout.js()),
// 								),
// 							);
// 							client.end();
// 							return;
// 						} else {
// 							res.send(
// 								await AdminLayout.html(
// 									(initialPage = await Components.private.PageHome.html(
// 										(script = await Components.private.PageHome.js()),
// 									)),
// 									(script = await AdminLayout.js()),
// 									(modal = await Components.public.DialogUnauthorized.html()),
// 								),
// 							);
// 							client.end();

// 							return;
// 						}
// 					} else {
// 						if (!JSON.parse(data)?.registered) {
// 							res.send(
// 								await AdminLayout.html(
// 									(initialPage = await Components.private.PageHome.html(
// 										(script = await Components.private.PageHome.js()),
// 									)),
// 									(script = await await AdminLayout.js()),
// 									(modal = await Components.public.DialogRegister.html(
// 										(script = await Components.public.DialogRegister.js()),
// 									)),
// 								),
// 							);
// 							await client.end();
// 						} else {
// 							res.send(
// 								await AdminLayout.html(
// 									(initialPage = await Components.private.PageHome.html(
// 										(script = await Components.private.PageHome.js()),
// 									)),
// 									(script = await AdminLayout.js()),
// 									(modal = await Components.public.DialogUnauthorized.html(
// 										(script = await Components.public.DialogUnauthorized.js()),
// 									)),
// 								),
// 							);
// 							await client.end();
// 						}
// 					}
// 				})
// 				.catch(async e => {
//   					console.log("client not  connected");

// 					if (JSON.parse(data).PG_CONNECTION_STRING == "") {
// 						res.send(
// 							await AdminLayout.html(
// 								(initialPage = await Components.private.PageHome.html(
// 									(script = await Components.private.PageHome.js()),
// 								)),
// 								(script = await AdminLayout.js()),
// 								(modal = await Components.public.DialogConfig.html(
// 									(script = await Components.public.DialogConfig.js()),
// 									(clientData = "Initialize Neon Database"),
// 								)),
// 							),
// 						);
// 					} else {
// 						res.send(
// 							await AdminLayout.html(
// 								(initialPage = await Components.private.PageHome.html(
// 									(script = await Components.private.PageHome.js()),
// 								)),
// 								(script = await AdminLayout.js()),
// 								(modal = await Components.public.DialogConfig.html(
// 									(script = await Components.public.DialogConfig.js()),
// 									(clientData = "Database Connection Failed"),
// 								)),
// 							),
// 						);
// 					}

// 					await client.end();
// 				});
// 		} catch (error) {
// 			console.log(error);
// 			// res.redirect(new URL(`/`, req.protocol + "://" + req.get("host")));
// 			res.send(
// 				await AdminLayout.html(
// 					(initialPage = "initialPage"),
// 					(script = await AdminLayout.js()),
// 					(modal = await Components.public.DialogServerError.html()),
// 				),
// 			);
// 			await client.end();
// 		}
// 	},
// );

// start server
root.listen(3000, () => {
	console.log("Server Connected");
});
