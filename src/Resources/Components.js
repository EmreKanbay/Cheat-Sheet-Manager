const ErrorBox = require("./Components/ErrorBox");
const SuccessBox = require("./Components/SuccessBox");
const DialogLogin = require("./Components/DialogLogin");
const DialogUnauthorized = require("./Components/DialogUnauthorized");
const DialogServerError = require("./Components/DialogServerError");
const DialogConfig = require("./Components/DialogConfig");
const DialogRegister = require("./Components/DialogRegister");
const PageHome = require("./Components/PageHome");
const PageSettings = require("./Components/PageSettings");
const PageHelp = require("./Components/PageHelp");
const PageProjects = require("./Components/PageProjects");
const Git = require("./Components/Docs/Git");
const Docker = require("./Components/Docs/Docker");
const Markdown = require("./Components/Docs/Markdown");
const Lisances = require("./Components/Docs/Lisances");
const Nginx = require("./Components/Docs/Nginx");
const Apache = require("./Components/Docs/Apache");
const Ngrok = require("./Components/Docs/Ngrok");
const Certbot = require("./Components/Docs/Certbot");
const SSH = require("./Components/Docs/SSH");
const Prettier = require("./Components/Docs/Prettier");
const Eslint = require("./Components/Docs/Eslint");
const Webpack = require("./Components/Docs/Webpack");
const Redis = require("./Components/Docs/Redis");
const Postgres = require("./Components/Docs/Postgres");
const MongoDB = require("./Components/Docs/MongoDB");
const MySQL = require("./Components/Docs/MySQL");
const Cassandra = require("./Components/Docs/Cassandra");
const Neo4j = require("./Components/Docs/Neo4j");
const Angular = require("./Components/Docs/Angular");
const Svelte = require("./Components/Docs/Svelte");
const React = require("./Components/Docs/React");
const Vue = require("./Components/Docs/Vue");
const Ember = require("./Components/Docs/Ember");
const Jquery = require("./Components/Docs/Jquery");
const Backbone = require("./Components/Docs/Backbone");
const Preact = require("./Components/Docs/Preact");
const ReactNative = require("./Components/Docs/ReactNative");
const Ionic = require("./Components/Docs/Ionic");
const Flutter = require("./Components/Docs/Flutter");
const Next = require("./Components/Docs/Next");
const SvelteKit = require("./Components/Docs/SvelteKit");
const Remix = require("./Components/Docs/Remix");
const Nuxt = require("./Components/Docs/Nuxt");
const Analog = require("./Components/Docs/Analog");
const SwiftUi = require("./Components/Docs/SwiftUi");
const UiKit = require("./Components/Docs/UiKit");
const AndroidSdk = require("./Components/Docs/AndroidSdk");
const Laravel = require("./Components/Docs/Laravel");
const Django = require("./Components/Docs/Django");
const DotNet = require("./Components/Docs/DotNet");
const RubyOnRails = require("./Components/Docs/RubyOnRails");
const Spring = require("./Components/Docs/Spring");
const Flask = require("./Components/Docs/Flask");
const Express = require("./Components/Docs/Express");
const Phoneix = require("./Components/Docs/Phoneix");

module.exports = {
	docs: {
		Git,
		Vue,
		Docker,
		Markdown,
		Lisances,
		Nginx,
		Apache,
		Ngrok,
		Certbot,
		SSH,
		Prettier,
		Eslint,
		Webpack,
		Redis,
		Postgres,
		MongoDB,
		MySQL,
		Cassandra,
		Neo4j,
		React,
		Angular,
		Svelte,
		Ember,
		Jquery,
		Backbone,
		Preact,
		ReactNative,
		Ionic,
		Flutter,
		Next,
		SvelteKit,
		Remix,
		Nuxt,
		Analog,
		SwiftUi,
		UiKit,
		AndroidSdk,
		Laravel,
		Django,
		DotNet,
		RubyOnRails,
		Spring,
		Flask,
		Express,
		Phoneix,
	},
	public: {
		DialogLogin,
		DialogUnauthorized,
		DialogServerError,
		SuccessBox,
		ErrorBox,
		DialogConfig,
		DialogRegister,
	},
	private: {
		PageHome,
		PageHelp,
		PageProjects,
		PageSettings,
	},
};
