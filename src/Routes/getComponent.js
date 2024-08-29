const Components = require("../Resources/Components");
const fs = require("fs");
const path = require("path");

const Index = require("#Index");

const getComponent = Index.express.Router();

getComponent.post("/private/:component_name", Index.express.json(), async (req, res) => {
	var record;

	const data = fs.readFileSync(path.join(Index.__rootDir, "..", "env.json"), { encoding: "utf8", flag: "r" });

	const client = new Index.Client({ connectionString: JSON.parse(data).PG_CONNECTION_STRING });

	client.connect();

	try {
		if (typeof req.cookies?.login_name != "undefined" && typeof req.cookies?.password_hash != "undefined") {
			record = await client.query(
				`SELECT login_name, password_hash FROM "users" WHERE login_name='${req.cookies?.login_name}' AND password_hash='${req.cookies?.password_hash}'`,
			);

			if (record.rows.length == 1) {
			} else {
				res.send(
					JSON.stringify({
						html: "<h1>Unauthorized Access</h1>",
						js: null,
					}),
				);
				client.end();
				return;
			}

			if (typeof Components.private[req.params.component_name] != "undefined") {
				res.send(
					JSON.stringify({
						html: await Components.private[req.params.component_name].html(
							(clientData = typeof req.body == "object" ? req.body : null),
						),
						js: await Components.private[req.params.component_name].js(
							(clientData = typeof req.body == "object" ? req.body : null),
						),
					}),
				);
			} else {
				res.send(
					JSON.stringify({
						html: "<h1>Component Not Found</h1>",
						js: null,
					}),
				);
			}
		} else {
			res.send(
				JSON.stringify({
					html: "<h1>Unauthorized Access</h1>",
					js: null,
				}),
			);
		}
		client.end();
	} catch (error) {
		console.log(error);
		res.send(
			JSON.stringify({
				html: "<h1>Internel Server Error</h1>",
				js: null,
			}),
		);
		client.end();
	}
});

getComponent.post("/public/:component_name", Index.express.json(), async (req, res) => {
	if (typeof Components.public[req.params.component_name] != "undefined") {
		res.send(
			JSON.stringify({
				html: await Components.public[req.params.component_name].html((clientData = req?.body)),
				js: await Components.public[req.params.component_name].js((clientData = req?.body)),
			}),
		);
	} else {
		res.send(
			JSON.stringify({
				html: "<h1>Component Not Found</h1>",
				js: null,
			}),
		);
	}
});

getComponent.post("/docs/:component_name", Index.express.json(), async (req, res) => {
	if (typeof Components.docs[req.params.component_name] != "undefined") {
		res.send(
			JSON.stringify({
				html: await Components.docs[req.params.component_name].html((clientData = req?.body)),
				js: await Components.docs[req.params.component_name].js((clientData = req?.body)),
			}),
		);
	} else {
		res.send(
			JSON.stringify({
				html: "<h1>Component Not Found</h1>",
				js: null,
			}),
		);
	}
});

module.exports = getComponent;
