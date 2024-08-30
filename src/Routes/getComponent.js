const Components = require("../Resources/Components");
const fs = require("fs");
const path = require("path");

const Index = require("#Index");

const getComponent = Index.express.Router();

getComponent.post("/private/:component_name", Index.express.json(), async (req, res) => {
	var record;

	const data = await fs.readFileSync(path.join(Index.__rootDir, "..", "env.json"), { encoding: "utf8", flag: "r" });

	const client = new Index.Client({ connectionString: JSON.parse(data).PG_CONNECTION_STRING });

	client.connect().then(async () => {

		try {
 				record = await client.query(
					`SELECT login_name, password_hash FROM "ossk_users" WHERE login_name='${req.cookies?.login_name}' AND password_hash='${req.cookies?.password_hash}'`,
				);
	

				if (record.rows.length == 1) {
	

								
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
			 
				await client.end()
				return
				} else {
					res.send(
						JSON.stringify({
							html: "<h1>Unauthorized Access</h1>",
							js: null,
						}),
					);
					await client.end();
					return;
				}
	





	
	
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
	}).catch(async (e) => {

		res.send(
			JSON.stringify({
				html: "<h1>Unauthorized Access</h1>",
				js: null,
			}),
		);
	})


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
	var data = await fs.readFileSync(path.join(Index.__rootDir, "..", "env.json"), { encoding: "utf8", flag: "r" });
	data = await JSON.parse(data)
	
	if(data.initialized == true){
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

	}else{
		res.send(
			JSON.stringify({
				html: "<h1>Unauthorized Access</h1>",
				js: null,
			}),
		);
	}

});

module.exports = getComponent;
