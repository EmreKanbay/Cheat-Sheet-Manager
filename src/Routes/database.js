const Components = require("../Resources/Components");
const env = require("../../env.json");
const Index = require("#Index");
const fs = require("fs");
const path = require("path");

const database = Index.express.Router();

database.post("/connect", Index.express.json(), async (req, res) => {
	try {
		var data = fs.readFileSync(path.join(Index.__rootDir, "..", "env.json"), { encoding: "utf8", flag: "r" });

		data = JSON.parse(data);
		data.PG_CONNECTION_STRING = req.body.db_string;

		fs.writeFileSync(path.join(Index.__rootDir, "..", "env.json"), JSON.stringify(data));

		const client = new Index.Client({ connectionString: data.PG_CONNECTION_STRING });

		client
			.connect()
			.then(async e => {
				console.log("client connected");
				if (data?.initialized) {
					res.status(204).send();
				} else {
					try {
						var t = await client.query(
							`CREATE TABLE IF NOT EXISTS "users" (id SERIAL PRIMARY KEY,login_name text, password_hash text)`,
						);

						data.initialized = true;

						fs.writeFileSync(path.join(Index.__rootDir, "..", "env.json"), JSON.stringify(data));
						res.status(202).send();
					} catch (error) {
						console.log(error);
						res.status(501).send();
					}
				}
				await client.end();
			})
			.catch(async e => {
				console.log("client not  connected");
				await client.end();
				res.status(400).send();
			});
	} catch (error) {
		console.log(error);
		res.status(500).send();
	}
});

database.post("/register", Index.upload.none(), async (req, res, next) => {
	var data = fs.readFileSync(path.join(Index.__rootDir, "..", "env.json"), { encoding: "utf8", flag: "r" });
	data = JSON.parse(data);

	if (data?.registered) {
		res.status(401).send();
	} else {
		const client = await new Index.Client({ connectionString: data.PG_CONNECTION_STRING });

		await client.connect();

		data.registered = true;

		fs.writeFileSync(path.join(Index.__rootDir, "..", "env.json"), JSON.stringify(data));

		await client.query(
			`INSERT INTO "users" (login_name, password_hash) VALUES ('${req?.body.login_name}','${Index.sha256(req?.body.login_password)}')`,
		);

		res.cookie("login_name", req.body.login_name, { expires: new Date(Date.now() + 900000), httpOnly: true });
		res.cookie("password_hash", Index.sha256(req?.body.login_password), {
			expires: new Date(Date.now() + 900000),
			httpOnly: true,
		});

		res.status(200).send();

		await client.end();
	}
});

// database.post("/", Index.express.json(), async (req, res) => {
// 	var record;
// 	try {
// 		if (typeof req.cookies?.login_name != "undefined" && typeof req.cookies?.password_hash != "undefined") {
// 			record = await Index.pool.query(
// 				`SELECT login_name, password_hash, id FROM "users" WHERE login_name='${req.cookies?.login_name}' AND password_hash='${req.cookies?.password_hash}'`,
// 			);

// 			if (record.rows.length == 1) {
// 			} else {
// 				res.send(
// 					JSON.stringify({
// 						html: "<h1>Unauthorized Access</h1>",
// 						js: null,
// 					}),
// 				);
// 				return;
// 			}

// 			if (typeof Components[req.params.component_name] != "undefined") {
// 				res.send(
// 					JSON.stringify({
// 						html: await Components.private[req.params.component_name].html(clientData = typeof req.body == "object" ? req.body : null ),
// 						js: await Components.private[req.params.component_name].js(clientData = typeof req.body == "object" ? req.body : null),
// 					}),
// 				);
// 			} else {
// 				res.send(
// 					JSON.stringify({
// 						html: "<h1>Component Not Found</h1>",
// 						js: null,
// 					}),
// 				);			}
// 		} else {
// 			res.send(
// 				JSON.stringify({
// 					html: "<h1>Unauthorized Access</h1>",
// 					js: null,
// 				}),
// 			);
// 		}
// 	} catch (error) {
// 		console.log(error);
// 		res.send(
// 			JSON.stringify({
// 				html: "<h1>Internel Server Error</h1>",
// 				js: null,
// 			}),
// 		);
// 	}
// });

module.exports = database;
