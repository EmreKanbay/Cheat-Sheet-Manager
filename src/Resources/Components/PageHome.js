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
		${() => {
			return typeof script == "string" ? `<script>${script}</script>` : "";
		}}

		<h1 class="container-headings">Must Use</h1>

		<div class="container-list-container-for-element">
			<div
				onclick="ChangeToDocs('Git')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/git.svg" />
				<div class="list-container-for-element-text">
					<p>Git</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Docker')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/docker.svg" />
				<div class="list-container-for-element-text">
					<p>Docker</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Markdown')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/markdown.svg" />
				<div class="list-container-for-element-text">
					<p>Markdown</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Lisances')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/lisances.svg" />
				<div class="list-container-for-element-text">
					<p>Lisances</p>
				</div>
			</div>

			${String(
				[
					2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1, 2, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1,
					2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
				].map(t => {
					return `
<div class="list-container-for-element" style="pointer-events:none;border-top:0;border-bottom:0;;opacity:0;height:0;margin:0rem;padding:0">
	<img style="height:0" class="list-container-for-element-image" src="/assets/react.svg"   />
	<div style="height:0" class="list-container-for-element-text">
		<p style="height:0">React JS</p>	
	</div>
</div>
			`;
				}),
			).replaceAll(",", "\n")}
		</div>

		<h1 class="container-headings">Self Hosted</h1>

		<div class="container-list-container-for-element">
			<div
				onclick="ChangeToDocs('Nginx')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/nginx.svg" />
				<div class="list-container-for-element-text">
					<p>NGINX</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Apache')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/apache.svg" />
				<div class="list-container-for-element-text">
					<p>Apache</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Ngrok')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/ngrok.svg" />
				<div class="list-container-for-element-text">
					<p>Ngrok</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Certbot')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/certbot.svg" />
				<div class="list-container-for-element-text">
					<p>Certbot</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('SSH')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/ssh.svg" />
				<div class="list-container-for-element-text">
					<p>SSH</p>
				</div>
			</div>

			${String(
				[
					2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1, 2, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1,
					2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
				].map(t => {
					return `
<div class="list-container-for-element" style="pointer-events:none;border-top:0;border-bottom:0;;opacity:0;height:0;margin:0rem;padding:0">
	<img style="height:0" class="list-container-for-element-image" src="/assets/react.svg"   />
	<div style="height:0" class="list-container-for-element-text">
		<p style="height:0">React JS</p>	
	</div>
</div>
			`;
				}),
			).replaceAll(",", "\n")}
		</div>

		<h1 class="container-headings">Useful</h1>

		<div class="container-list-container-for-element">
			<div
				onclick="ChangeToDocs('Prettier')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/prettier.svg" />
				<div class="list-container-for-element-text">
					<p>Prettier</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Eslint')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/eslint.svg" />
				<div class="list-container-for-element-text">
					<p>Eslint</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Webpack')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/webpack.svg" />
				<div class="list-container-for-element-text">
					<p>Webpack</p>
				</div>
			</div>

			${String(
				[
					2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1, 2, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1,
					2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
				].map(t => {
					return `
<div class="list-container-for-element" style="pointer-events:none;border-top:0;border-bottom:0;;opacity:0;height:0;margin:0rem;padding:0">
	<img style="height:0" class="list-container-for-element-image" src="/assets/react.svg"   />
	<div style="height:0" class="list-container-for-element-text">
		<p style="height:0">React JS</p>	
	</div>
</div>
			`;
				}),
			).replaceAll(",", "\n")}
		</div>

		<h1 class="container-headings">Database</h1>

		<div class="container-list-container-for-element">
			<div
				onclick="ChangeToDocs('Postgres')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/postgres.svg" />
				<div class="list-container-for-element-text">
					<p>Postgres</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('MongoDB')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/mongodb.svg" />
				<div class="list-container-for-element-text">
					<p>MongoDB</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('MySQL')"
				class="list-container-for-element">
				<img
					style="height:50%"
					class="list-container-for-element-image"
					src="/assets/mysql.svg" />
				<div class="list-container-for-element-text">
					<p>MySQL</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Redis')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/redis.svg" />
				<div class="list-container-for-element-text">
					<p>Redis</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Cassandra')"
				class="list-container-for-element">
				<img
					style="height:50%"
					class="list-container-for-element-image"
					src="/assets/apacheCassandra.svg" />
				<div class="list-container-for-element-text">
					<p>Cassandra</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Neo4j')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/neo4j.svg" />
				<div class="list-container-for-element-text">
					<p>Neo4j</p>
				</div>
			</div>

			${String(
				[
					2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1, 2, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1,
					2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
				].map(t => {
					return `
<div class="list-container-for-element" style="pointer-events:none;border-top:0;border-bottom:0;;opacity:0;height:0;margin:0rem;padding:0">
	<img style="height:0" class="list-container-for-element-image" src="/assets/react.svg"   />
	<div style="height:0" class="list-container-for-element-text">
		<p style="height:0">React JS</p>	
	</div>
</div>
			`;
				}),
			).replaceAll(",", "\n")}
		</div>

		<h1 class="container-headings">Frameworks</h1>

		<div class="container-list-container-for-element">
			<div
				onclick="ChangeContent('PageProjects', ()=>{document.querySelector('#web-dev').scrollIntoView()})"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/web-dev.svg" />
				<div class="list-container-for-element-text">
					<p>Web</p>
				</div>
			</div>

			<div
				onclick="ChangeContent('PageProjects', ()=>{document.querySelector('#mobile-dev').scrollIntoView()})"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/mobile-dev.svg" />
				<div class="list-container-for-element-text">
					<p>Mobile</p>
				</div>
			</div>

			<div
				onclick="ChangeContent('PageProjects', ()=>{document.querySelector('#api-dev').scrollIntoView()})"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/backend-api-dev.svg" />
				<div class="list-container-for-element-text">
					<p>Backend/API</p>
				</div>
			</div>

			${String(
				[
					2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1, 2, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1,
					2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
				].map(t => {
					return `
<div class="list-container-for-element" style="pointer-events:none;border-top:0;border-bottom:0;;opacity:0;height:0;margin:0rem;padding:0">
	<img style="height:0" class="list-container-for-element-image" src="/assets/react.svg"   />
	<div style="height:0" class="list-container-for-element-text">
		<p style="height:0">React JS</p>	
	</div>
</div>
			`;
				}),
			).replaceAll(",", "\n")}
		</div>

		<style>
			.container-headings {
				margin: 0;
				font-size: 3rem;
			}

			.container-list-container-for-element {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
			.list-container-for-element {
				cursor: pointer;
				margin: 1rem 0;
				min-width: 150px;
				max-width: 250;

				display: grid;
				border: 1px solid #d0d0d0;

				grid-template-rows: 150px 50px;
				border-radius: 0.5rem;
			}

			.list-container-for-element-text > p {
				color: black;
				margin: 0;
				display: inline;

				font-size: 1.4rem;
			}

			.list-container-for-element-text {
				display: grid;
				place-items: center;
				border-top: 1px solid #d0d0d0;
			}

			.list-container-for-element-image {
				place-self: center;
				height: 80%;
			}
		</style>
	`,
	js: clientData => js`
	
	
	document.querySelector(".page-title").innerHTML = "Home"`,
};
