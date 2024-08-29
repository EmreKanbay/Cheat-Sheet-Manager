const Components = require("../Components");

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
	html: (initialPage, script, modal, clientData) => html`
		<!doctype html>
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/assets/favicon.svg" />
				<link
					rel="icon"
					type="image/svg+xml"
					href="/assets/favicon.svg" />

				<link
					rel="stylesheet"
					href="/assets/globals.css" />

				<title>Neon Open Source Starter Kit</title>
			</head>

			<body>
				${() => {
					return typeof modal == "string" ? modal : "";
				}}

				<div class="main-container sidebar-is-reduced">
					<header class="l-header">
						<div class="l-header__inner clearfix">
							<div class="c-header-icon js-hamburger">
								<div class="hamburger-toggle">
									<span class="bar-top"></span>
									<span class="bar-mid"></span>
									<span class="bar-bot"></span>
								</div>
							</div>

							<div class="c-search">
								Ultimate Open Source Starter Kit | For&nbsp;
								<a href="https://neon.tech">Neon</a>
								&nbsp;Challange
							</div>
							<div class="header-icons-group">
								<div
									onclick="ChangeContent('PageSettings')"
									class="c-header-icon settings-button"></div>
								<a
									target="_blank"
									href="https://github.com/EmreKanbay/Open-Source-Starter-Kit/blob/master/README.md"
									class="c-header-icon github-link"></a>
							</div>
						</div>
					</header>

					<div class="l-sidebar">
						<div class="logo">
							<div class="logo__txt"></div>
						</div>
						<div class="l-sidebar__content">
							<nav class="c-menu js-menu">
								<ul class="u-list">
									<li
										onclick="ChangeContent('PageHome')"
										class="c-menu__item is-active homePage"
										data-toggle="tooltip"
										title="Modules">
										<div class="c-menu__item__inner">
											<img
												style="filter:invert(1)"
												src="/assets/home.svg"
												class="sidebar-menu-icons" />
											<div class="c-menu-item__title"><span>Home</span></div>
										</div>
									</li>

									<li
										onclick="ChangeContent('PageProjects')"
										class="c-menu__item  projectPage"
										data-toggle="tooltip"
										title="Flights">
										<div class="c-menu__item__inner">
											<img
												style="filter:invert(1)"
												src="/assets/directory.svg"
												class="sidebar-menu-icons" />
											<div class="c-menu-item__title"><span>Projects</span></div>
										</div>
									</li>

									<li
										onclick="ChangeContent('PageHelp')"
										class="c-menu__item"
										data-toggle="tooltip"
										title="Gifts">
										<div class="c-menu__item__inner">
											<img
												style="filter:invert(1)"
												src="/assets/help.svg"
												class="sidebar-menu-icons" />
											<div class="c-menu-item__title"><span>Help</span></div>
										</div>
									</li>
								</ul>
							</nav>
						</div>
					</div>

					<main class="l-main">
						<div class="content-wrapper content-wrapper--with-bg">
							<div
								style="position:fixed"
								class="MGqm9l-loading loading-block"></div>

							<h1 class="page-title"></h1>
							<div class="page-content">
								${() => {
									return typeof initialPage == "string" ? initialPage : "";
								}}
							</div>
						</div>
					</main>
				</div>
			</body>

			<style>
				@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700&subset=latin-ext");

				dialog[open] ~ .main-container {
					pointer-events: none;
					filter: brightness(50%) blur(5px) grayscale(50%);
					transform: scale(0.9);
				}
				.main-container {
					transition:
						filter 0.3s ease,
						transform 0.3s ease;
					background: black;
					background-color: #f3f3f3;
					height: 100%;
				}

				html,
				body {
					height: 100%;
					width: 100%;
				}
				body {
					margin: 0;
					padding: 0;
					font-family: "Open Sans";
					font-size: 14px;
					font-weight: 400;
					overflow: hidden;
					background-color: black;
					color: #102c58;
				}
				* {
					-webkit-box-sizing: border-box;
					-moz-box-sizing: border-box;
					box-sizing: border-box;
				}
				::-webkit-input-placeholder {
					color: #c3c3c3;
				}

				.github-link {
					background-image: url("/assets/github.svg");
					background-repeat: no-repeat;
					background-size: 70%;
					background-position: center;
					filter: invert("");
				}

				.settings-button {
					background-image: url("/assets/settings.svg");
					background-repeat: no-repeat;
					background-size: 90%;
					background-position: center;
				}
				.sidebar-menu-icons {
					background-image: "";
					place-self: center;

					height: 2rem;
				}
				.sidebar-menu-icons + div {
					display: flex;
					align-items: center;
				}

				h1 {
					font-size: 24px;
				}
				h2 {
					font-size: 20px;
				}
				h3 {
					font-size: 18px;
				}
				.u-list {
					margin: 0;
					padding: 0;
					list-style: none;
				}
				.u-input {
					outline: 0;
					border: 1px solid #d0d0d0;
					padding: 5px 10px;
					height: 35px;
					font-size: 12px;
					-webkit-border-radius: 10px;
					border-radius: 10px;
					background-clip: padding-box;
				}
				.c-badge {
					font-size: 10px;
					font-weight: 700;
					min-width: 20px;
					padding: 5px;
					border-radius: 4px;
					display: block;
					line-height: 0.7;
					color: #fff;
					text-align: center;
					white-space: nowrap;
					background-color: #102c58;
					border: 1px solid #0c2142;
				}
				.c-badge--red {
					background-color: #f91605;
					border: 1px solid #e01404;
				}
				.c-badge--blue {
					background-color: #5f9cfd;
					border: 1px solid #468cfd;
				}
				.c-badge--header-icon {
					position: absolute;
					bottom: -9px;
				}
				.tooltip {
					width: 120px;
				}
				.tooltip-inner {
					padding: 8px 10px;
					color: #fff;
					text-align: center;
					background-color: #051835;
					font-size: 12px;
					border-radius: 3px;
				}
				.tooltip-arrow {
					border-right-color: #051835 !important;
				}
				.hamburger-toggle {
					position: relative;
					padding: 0;
					background: transparent;
					border: 1px solid transparent;
					cursor: pointer;
					order: 1;
				}
				.hamburger-toggle [class*="bar-"] {
					display: block;
					background: #102c58;
					-webkit-transform: rotate(0deg);
					transform: rotate(0deg);
					-webkit-transition: 0.2s ease all;
					transition: 0.2s ease all;
					border-radius: 2px;
					height: 2px;
					width: 24px;
					margin-bottom: 4px;
				}
				.hamburger-toggle [class*="bar-"]:nth-child(2) {
					width: 18px;
				}
				.hamburger-toggle [class*="bar-"]:last-child {
					margin-bottom: 0;
					width: 12px;
				}
				.hamburger-toggle.is-opened {
					left: 3px;
				}
				.hamburger-toggle.is-opened [class*="bar-"] {
					background: #102c58;
				}
				.hamburger-toggle.is-opened .bar-top {
					-webkit-transform: rotate(45deg);
					transform: rotate(45deg);
					-webkit-transform-origin: 15% 15%;
					transform-origin: 15% 15%;
				}
				.hamburger-toggle.is-opened .bar-mid {
					opacity: 0;
				}
				.hamburger-toggle.is-opened .bar-bot {
					-webkit-transform: rotate(45deg);
					transform: rotate(-45deg);
					-webkit-transform-origin: 15% 95%;
					transform-origin: 15% 95%;
					width: 24px;
				}
				.hamburger-toggle:focus {
					outline-width: 0;
				}
				.header-icons-group {
					display: flex;
					order: 3;
					margin-left: auto;
					height: 100%;
					border-left: 1px solid #ccc;
				}
				.header-icons-group .c-header-icon:last-child {
					border-right: 0;
				}
				.c-header-icon {
					position: relative;
					display: flex;
					flex-shrink: 0;
					float: left;
					width: 70px;
					height: 100%;
					align-items: center;
					justify-content: center;
					line-height: 1;
					cursor: pointer;
					border-right: 1px solid #ccc;
				}
				.c-header-icon svg {
					font-size: 18px;
					line-height: 40px;
				}
				.c-header-icon--in-circle {
					border: 1px solid #d0d0d0;
					border-radius: 100%;
				}
				.c-header-icon:hover svg {
					color: #f5642d;
				}
				.c-header-icon:hover [class*="bar-"] {
					background: #f5642d;
				}
				.l-header {
					padding-left: 70px;
					position: fixed;
					top: 0;
					right: 0;
					z-index: 10;
					width: 100%;
					background: #fff;
					-webkit-transition: padding 0.5s ease-in-out;
					-moz-transition: padding 0.5s ease-in-out;
					-ms-transition: padding 0.5s ease-in-out;
					-o-transition: padding 0.5s ease-in-out;
					transition: padding 0.5s ease-in-out;
				}
				.l-header__inner {
					height: 100%;
					width: 100%;
					display: flex;
					height: 70px;
					align-items: center;
					justify-content: stretch;
					border-bottom: 1px solid;
					border-color: #ccc;
				}
				.sidebar-is-expanded .l-header {
					padding-left: 220px;
				}
				.c-search {
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 1.3rem;
					flex-grow: 1;
					height: 100%;
				}

				.c-dropdown {
					opacity: 0;
					text-align: left;
					position: absolute;
					flex-direction: column;
					display: none;
					width: 300px;
					top: 30px;
					right: -40px;
					background-color: #fff;
					overflow: hidden;
					min-height: 300px;
					border: 1px solid #d0d0d0;
					-webkit-border-radius: 10px;
					border-radius: 10px;
					background-clip: padding-box;
					-webkit-box-shadow: 0px 5px 14px -1px #cecece;
					-moz-box-shadow: 0px 5px 14px -1px #cecece;
					box-shadow: 0px 5px 14px -1px #cecece;
					-webkit-transition: all 0.3s ease-in-out;
					-moz-transition: all 0.3s ease-in-out;
					-ms-transition: all 0.3s ease-in-out;
					-o-transition: all 0.3s ease-in-out;
					transition: all 0.3s ease-in-out;
				}
				.l-sidebar {
					width: 70px;
					position: absolute;
					z-index: 10;
					left: 0;
					top: 0;
					bottom: 0;
					background: #102c58;
					-webkit-transition: width 0.5s ease-in-out;
					-moz-transition: width 0.5s ease-in-out;
					-ms-transition: width 0.5s ease-in-out;
					-o-transition: width 0.5s ease-in-out;
					transition: width 0.5s ease-in-out;
				}
				.l-sidebar .logo {
					width: 100%;

					height: 70px;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #051835;
				}
				.l-sidebar .logo .logo__txt {
					width: 100px;
					height: 80%;
					background-image: url("../../Assets/favicon.svg");
					background-size: contain;

					background-repeat: no-repeat;
					background-position: center;
					font-size: 26px;
					line-height: 1;
					color: #fff;
					text-align: center;
					font-weight: 700;
				}
				.l-sidebar__content {
					position: relative;
				}
				.sidebar-is-expanded .l-sidebar {
					width: 220px;
				}
				.c-menu > ul {
					display: flex;
					flex-direction: column;
				}
				.c-menu > ul .c-menu__item {
					color: #184a98;
					max-width: 100%;
					overflow: hidden;
				}
				.c-menu > ul .c-menu__item__inner {
					display: grid;
					grid-template-columns: 70px auto;
					grid-template-areas: "a b";
					min-height: 60px;
					position: relative;
					cursor: pointer;
					-webkit-transition: background-color 0.5s ease-in-out;
					-moz-transition: background-color 0.5s ease-in-out;
					-ms-transition: background-color 0.5s ease-in-out;
					-o-transition: background-color 0.5s ease-in-out;
					transition: background-color 0.5s ease-in-out;
				}
				.c-menu > ul .c-menu__item__inner:before {
					position: absolute;
					content: " ";
					height: 0;
					width: 2px;
					left: 0;
					top: 50%;
					margin-top: -18px;
					background-color: #5f9cfd;
					opacity: 0;
					-webkit-transition: all 0.5s ease-in-out;
					-moz-transition: all 0.5s ease-in-out;
					-ms-transition: all 0.5s ease-in-out;
					-o-transition: all 0.5s ease-in-out;
					transition: all 0.5s ease-in-out;
				}
				.c-menu > ul .c-menu__item.is-active {
					color: #fff;
				}
				.c-menu > ul .c-menu__item.is-active .c-menu__item__inner {
					border-left-color: #fff;
					background-color: #1e3e6f;
				}
				.c-menu > ul .c-menu__item.is-active .c-menu__item__inner svg {
					color: #fff;
				}
				.c-menu > ul .c-menu__item.is-active .c-menu__item__inner .c-menu-item__title span {
					color: #fff;
				}
				.c-menu > ul .c-menu__item.is-active .c-menu__item__inner:before {
					height: 36px;
					opacity: 1;
				}
				.c-menu > ul .c-menu__item:not(.is-active):hover {
					color: #fff;
				}
				.c-menu > ul .c-menu__item:not(.is-active):hover .c-menu__item__inner {
					background-color: #f5642d;
					border-left-color: #f5642d;
				}
				.c-menu > ul .c-menu__item svg {
					flex: 0 0 70px;
					font-size: 16px;
					font-weight: normal;
					text-align: center;
					-webkit-transition: all 0.5s ease-in-out;
					-moz-transition: all 0.5s ease-in-out;
					-ms-transition: all 0.5s ease-in-out;
					-o-transition: all 0.5s ease-in-out;
					transition: all 0.5s ease-in-out;
				}
				.c-menu > ul .c-menu__item .c-menu-item__expand {
					position: relative;
					left: 100px;
					padding-right: 20px;
					color: #fff;
					margin-left: auto;
					-webkit-transition: left 1s ease-in-out;
					-moz-transition: left 1s ease-in-out;
					-ms-transition: left 1s ease-in-out;
					-o-transition: left 1s ease-in-out;
					transition: left 1s ease-in-out;
				}
				.sidebar-is-expanded .c-menu > ul .c-menu__item .c-menu-item__expand {
					left: 0px;
				}
				.c-menu > ul .c-menu__item .c-menu-item__title {
					flex-basis: 100%;
					padding-right: 10px;
					position: relative;
					color: #fff;
					left: 220px;
					opacity: 0;
					-webkit-transition: all 0.7s ease-in-out;
					-moz-transition: all 0.7s ease-in-out;
					-ms-transition: all 0.7s ease-in-out;
					-o-transition: all 0.7s ease-in-out;
					transition: all 0.7s ease-in-out;
				}
				.c-menu > ul .c-menu__item .c-menu-item__title span {
					font-weight: 400;
					font-size: 14px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-transition: left 0.5s ease-in-out;
					-moz-transition: left 0.5s ease-in-out;
					-ms-transition: left 0.5s ease-in-out;
					-o-transition: left 0.5s ease-in-out;
					transition: left 0.5s ease-in-out;
				}
				.sidebar-is-expanded .c-menu > ul .c-menu__item .c-menu-item__title {
					left: 0px;
					opacity: 1;
				}
				.c-menu > ul .c-menu__item .c-menu__submenu {
					background-color: #051835;
					padding: 15px;
					font-size: 12px;
					display: none;
				}
				.c-menu > ul .c-menu__item .c-menu__submenu li {
					padding-bottom: 15px;
					margin-bottom: 15px;
					border-bottom: 1px solid;
					border-color: #072048;
					color: #5f9cfd;
				}
				.c-menu > ul .c-menu__item .c-menu__submenu li:last-child {
					margin: 0;
					padding: 0;
					border: 0;
				}
				main.l-main {
					width: 100%;
					height: 100%;
					padding: 70px 0 0 70px;
					-webkit-transition: padding 0.5s ease-in-out;
					-moz-transition: padding 0.5s ease-in-out;
					-ms-transition: padding 0.5s ease-in-out;
					-o-transition: padding 0.5s ease-in-out;
					transition: padding 0.5s ease-in-out;
				}
				main.l-main .content-wrapper {
					position: relative;
					padding: 25px;
					height: 100%;
					overflow: auto;
				}
				main.l-main .content-wrapper .page-content {
					border-top: 1px solid #d0d0d0;
					padding-top: 25px;
					color: black;
				}
				main.l-main .content-wrapper--with-bg .page-content {
					background: #fff;
					border-radius: 3px;
					border: 1px solid #d0d0d0;
					padding: 25px;
				}
				main.l-main .page-title {
					font-weight: 400;
					margin-top: 0;
					margin-bottom: 25px;
				}
				.sidebar-is-expanded main.l-main {
					padding-left: 220px;
				}
			</style>

			${() => {
				return typeof script == "string" ? `<script>${script}</script>` : "";
			}}
		</html>
	`,
	js: clientData => js`

	



const ChangeContent = (t, cas) => {
	
										document.querySelector(".MGqm9l-loading").classList.add("active");
	try {
								fetch("/get-component/private/" + t, {
  									method: "POST",
									body: JSON.stringify({}),
									headers: {"Content-Type":"application/json"}
								})
									.then(e => e.json())
									.then(e => {
										document.querySelector(".page-content").classList.remove("markdown-body")

										document.querySelector(".MGqm9l-loading").classList.remove("active");
										document.querySelector(".page-content").innerHTML=e.html
									
									
											var eaa = document.createElement("script");
											eaa.innerHTML = e.js;
											document.querySelector(".page-content").prepend(eaa);

										cas()

										});
							} catch {}
	
	}







const ChangeToDocs = (t) => {
	
										document.querySelector(".MGqm9l-loading").classList.add("active");
	try {
								fetch("/get-component/docs/" + t, {
  									method: "POST",
									body: JSON.stringify({}),
									headers: {"Content-Type":"application/json"}
								})
									.then(e => e.json())
									.then(e => {
										document.querySelector(".page-title").innerHTML =  t
										document.querySelector(".page-content").classList.add("markdown-body")
										document.querySelector(".MGqm9l-loading").classList.remove("active");
										document.querySelector(".page-content").innerHTML=e.html
									
									
											var eaa = document.createElement("script");
											eaa.innerHTML = e.js;
											document.querySelector(".page-content").prepend(eaa);
										});
							} catch {}
	
	}
















	const Dashboard = (() => {

		const global = {
		tooltipOptions: {
			placement: "right"
		},
		menuClass: ".c-menu"
		};
		
		const menuChangeActive = (el) => {
 		
		document.querySelector(".c-menu .is-active")?.classList.remove("is-active");
		
		
		el.classList.add("is-active");
		};
		
		const sidebarChangeWidth = () => {
 		const body = document.querySelector(".main-container");
		const menuItemsTitle = document.querySelectorAll("li .menu-item__title");
		const hamburgerToggle = document.querySelector(".hamburger-toggle");
		
		body.classList.toggle("sidebar-is-reduced");
		body.classList.toggle("sidebar-is-expanded");
		hamburgerToggle.classList.toggle("is-opened");
		
		if (body.classList.contains("sidebar-is-expanded")) {
			document.querySelectorAll('[data-toggle="tooltip"]').forEach(el => {
				el.removeAttribute("title");
			});
		} else {
			document.querySelectorAll('[data-toggle="tooltip"]').forEach(el => {
				el.setAttribute("title", global.tooltipOptions.placement);
			});
		}
		};
		
		return {
		init: () => {

			document.querySelector(".js-hamburger").addEventListener("click", sidebarChangeWidth);

			document.querySelectorAll(".js-menu li").forEach(el => {
				el.addEventListener("click", (e) => {
					menuChangeActive(e.currentTarget);
				});
			});
		
			document.querySelectorAll('[data-toggle="tooltip"]').forEach(el => {
				el.setAttribute("title", global.tooltipOptions.placement);
			});
		}
		};
		})();
		
		
		Dashboard.init();
`,
};
