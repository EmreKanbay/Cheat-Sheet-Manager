const Components = require("../Resources/Components");
const env = require("../../env.json");
const Index = require("#Index");
const fs = require("fs");
const path = require("path");

const database = Index.express.Router();

database.post("/initialize", Index.express.json(), async (req, res) => {

 	
		var data = await fs.readFileSync(path.join(Index.__rootDir, "..", "env.json"), { encoding: "utf8", flag: "r" });
		
		data = JSON.parse(data)
	
	 if(data.initialized == true){
		res.status(401).send(await Components.public.ErrorBox.html({message: "Already Initialized"}));

	}else{
		const client = new Index.Client({ connectionString: data.PG_CONNECTION_STRING });	
		client
		.connect()
		.then(async e => {


				try {

					await client.query(`DROP TABLE IF EXISTS "ossk_users"`)
					await client.query(`CREATE TABLE IF NOT EXISTS "ossk_users" (id serial primary key, login_name text, password_hash text) `)
					data.initialized = true;

					await fs.writeFileSync(path.join(Index.__rootDir, "..", "env.json"), JSON.stringify(data));
					res.status(200).send();
					await client.end()
					return
				} catch (error) {
					console.log(error)
					
					res.status(501).send(await Components.public.ErrorBox.html({message: "Initialization Failed"}));
					await client.end()
 				
				}
			
		})
		.catch(async e => {
			 await client.end();
			 res.status(400).send(await Components.public.ErrorBox.html({message: "Connection Failed"}));
		});
	}




})


database.post("/connect", Index.express.json(), async (req, res) => {
	try {
	
			var data =  fs.readFileSync(path.join(Index.__rootDir, "..", "env.json"), { encoding: "utf8", flag: "r" });
			
			data = JSON.parse(data)
 
 
			const client = new Index.Client({ connectionString: req.body.db_string });	
			client
			.connect()
			.then(async e => {
 

					try {
						data.PG_CONNECTION_STRING = req.body.db_string;
						data.initialized = true;

						await client.query(`DROP TABLE IF EXISTS "ossk_users"`)
						await client.query(`CREATE TABLE IF NOT EXISTS "ossk_users" (id serial primary key, login_name text, password_hash text) `)

						await fs.writeFileSync(path.join(Index.__rootDir, "..", "env.json"),await JSON.stringify(data));
						
						res.status(200).send();
						
						return
					} catch (error) {
						console.log(error)
						
						res.status(501).send(await Components.public.ErrorBox.html({message: "Initialization Failed"}));
					}
				
				await client.end();
			})
			.catch(async e => {
 				await client.end();
 				res.status(400).send(await Components.public.ErrorBox.html({message: "Connection Failed"}));
			});
 




	} catch (error) {
		console.log("error");
		res.status(500).send(await Components.public.ErrorBox.html({message: "Internal Server Error"}));
	}
});


database.post("/register", Index.upload.none(), async (req, res, next) => {
	var data = await fs.readFileSync(path.join(Index.__rootDir, "..", "env.json"), { encoding: "utf8", flag: "r" });
	data = JSON.parse(data);



		const client = await new Index.Client({ connectionString: data.PG_CONNECTION_STRING });

		try{

			await client.connect();

			await client.query(
				`INSERT INTO "ossk_users" (login_name, password_hash) VALUES ('${req?.body.login_name}','${Index.sha256(req?.body.login_password)}')`,
			);
	
			res.cookie("login_name", req.body.login_name, { expires: new Date(Date.now() + 900000), httpOnly: true });
			res.cookie("password_hash", Index.sha256(req?.body.login_password), {
				expires: new Date(Date.now() + 900000),
				httpOnly: true,
			});
	
			res.status(200).send();
	
			await client.end();

		}
		catch(e){
			console.log(e)

			res.status(400).send(await Components.public.ErrorBox.html({message: "Registration Failed"}))
		}

	
});



root.post("/login", upload.none(), async (req, res) => {

	const data = await fs.readFileSync(path.join(Index.__rootDir, "..", "env.json"), { encoding: "utf8", flag: "r" });

	data = await JSON.parse(data)


	const client = new Client({ connectionString: data.PG_CONNECTION_STRING });


	console.log(req.body)


	res.send(5001)
	// try {

	// 	await client.connect();


	// 	const record = await client.query(
	// 		`SELECT login_name, password_hash FROM "ossk_users" WHERE login_name='${req.body["login_name"]}'`,
	// 	);
	// } catch (error) {
	// 	console.log(error);
	// 	res.statusCode = 500;
	// 	res.send();
	// }

	// try {
	// 	if (record.rowCount == 0) {
	// 		res.statusCode = 404;
	// 		res.send();
	// 	} else if (record.rowCount == 1) {
	// 		if (record.rows[0]["password_hash"] == sha256(req.body["login_password"])) {
	// 			res.cookie("login_name", record.rows[0]["login_name"]);
	// 			res.cookie("password_hash", record.rows[0]["password_hash"]);
	// 			res.statusCode = 202;
	// 			res.send();
	// 			// res.redirect(new URL(`/admin/${record.rows[0]["id"]}`, req.protocol + "://" + req.get("host")));
	// 		} else {
	// 			res.statusCode = 401;
	// 			res.send();
	// 		}
	// 	} else {
	// 		res.statusCode = 500;
	// 		res.send();
	// 	}
	// } catch (error) {
	// 	res.statusCode = 500;
	// 	res.send();
	// }




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
