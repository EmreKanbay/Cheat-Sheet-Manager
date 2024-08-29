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
		<h1
			id="web-dev"
			class="container-headings">
			Web Developement Frameworks
		</h1>
		<hr />

		<h2 class="container-headings">Frontend</h2>

		<div class="container-list-container-for-element">
			<div
				onclick="ChangeToDocs('React')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/react.svg" />
				<div class="list-container-for-element-text">
					<p>React</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Angular')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/angular.svg" />
				<div class="list-container-for-element-text">
					<p>Angular</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Svelte')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/svelte.svg" />
				<div class="list-container-for-element-text">
					<p>Svelte</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Vue')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/vue.svg" />
				<div class="list-container-for-element-text">
					<p>Vue</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Ember')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/ember.svg" />
				<div class="list-container-for-element-text">
					<p>Ember</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Jquery')"
				class="list-container-for-element">
				<img
					style="height:17%"
					class="list-container-for-element-image"
					src="/assets/jquery.svg" />
				<div class="list-container-for-element-text">
					<p>jQuery</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Backbone')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/backbone.svg" />
				<div class="list-container-for-element-text">
					<p>Backbone</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Preact')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/preact.svg" />
				<div class="list-container-for-element-text">
					<p>Preact</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('ReactNative')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/react-native.svg" />
				<div class="list-container-for-element-text">
					<p>React Native</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Flutter')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/flutter.svg" />
				<div class="list-container-for-element-text">
					<p>Flutter</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Ionic')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/ionic.svg" />
				<div class="list-container-for-element-text">
					<p>Ionic</p>
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

		<h2 class="container-headings">Full Stack</h2>

		<div class="container-list-container-for-element">
			<div
				onclick="ChangeToDocs('Next')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/nextjs.svg" />
				<div class="list-container-for-element-text">
					<p>Next JS</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('SvelteKit')"
				class="list-container-for-element">
				<img
					style="height:40%"
					class="list-container-for-element-image"
					src="/assets/sveltekit.svg" />
				<div class="list-container-for-element-text">
					<p>Svelte Kit</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Remix')"
				class="list-container-for-element">
				<img
					style="height:20%"
					class="list-container-for-element-image"
					src="/assets/remix.svg" />
				<div class="list-container-for-element-text">
					<p>Remix</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Nuxt')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/nuxt.svg" />
				<div class="list-container-for-element-text">
					<p>Nuxt</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Analog')"
				class="list-container-for-element">
				<img
					style="height:60%"
					class="list-container-for-element-image"
					src="/assets/analog.svg" />
				<div class="list-container-for-element-text">
					<p>Analog</p>
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

		<h1
			id="mobile-dev"
			class="container-headings">
			Mobile Developement Frameworks
		</h1>

		<hr />

		<h2 class="container-headings">IOS</h2>

		<div class="container-list-container-for-element">
			<div
				onclick="ChangeToDocs('SwiftUi')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/swift-ui.svg" />
				<div class="list-container-for-element-text">
					<p>Swift UI</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('UiKit')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/ui-kit.png" />
				<div class="list-container-for-element-text">
					<p>UI Kit</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('ReactNative')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/react-native.svg" />
				<div class="list-container-for-element-text">
					<p>React Native</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Flutter')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/flutter.svg" />
				<div class="list-container-for-element-text">
					<p>Flutter</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Ionic')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/ionic.svg" />
				<div class="list-container-for-element-text">
					<p>Ionic</p>
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

		<h2 class="container-headings">Android</h2>

		<div class="container-list-container-for-element">
			<div
				onclick="ChangeToDocs('AndroidSdk')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/android-studio.svg" />
				<div class="list-container-for-element-text">
					<p>Android SDK</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Flutter')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/flutter.svg" />
				<div class="list-container-for-element-text">
					<p>Flutter</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('ReactNative')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/react-native.svg" />
				<div class="list-container-for-element-text">
					<p>React Native</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Ionic')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/ionic.svg" />
				<div class="list-container-for-element-text">
					<p>Ionic</p>
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

		<h1
			id="api-dev"
			class="container-headings">
			Backend/API Development Framework
		</h1>
		<hr />

		<div class="container-list-container-for-element">
			<div
				onclick="ChangeToDocs('Laravel')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/laravel.svg" />
				<div class="list-container-for-element-text">
					<p>Laravel</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Django')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/django.svg" />
				<div class="list-container-for-element-text">
					<p>Django</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('DotNet')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/dot-net.svg" />
				<div class="list-container-for-element-text">
					<p>.Net</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('RubyOnRails')"
				class="list-container-for-element">
				<img
					style="height:30%"
					class="list-container-for-element-image"
					src="/assets/rails.svg" />
				<div class="list-container-for-element-text">
					<p>Ruby on Rails</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Spring')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/spring.svg" />
				<div class="list-container-for-element-text">
					<p>Spring</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Flask')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/flask.svg" />
				<div class="list-container-for-element-text">
					<p>Flask</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Express')"
				class="list-container-for-element">
				<img
					style="height:40%"
					class="list-container-for-element-image"
					src="/assets/express.svg" />
				<div class="list-container-for-element-text">
					<p>Express JS</p>
				</div>
			</div>

			<div
				onclick="ChangeToDocs('Phoneix')"
				class="list-container-for-element">
				<img
					class="list-container-for-element-image"
					src="/assets/phoneix.svg" />
				<div class="list-container-for-element-text">
					<p>Phoneix</p>
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

		<div class="markdown prose w-full break-words dark:prose-invert dark">
			<h3>Differences Between Frameworks and Programming Languages</h3>
			<p><strong>Programming Languages:</strong></p>
			<ul>
				<li>
					<strong>Definition:</strong>
					Programming languages are the foundational tools developers use to write software. Examples include Python,
					Java, JavaScript, C++, and Ruby.
				</li>
				<li>
					<strong>Purpose:</strong>
					Each language has its syntax, semantics, and idioms. They are designed to solve different types of problems,
					whether it's web development, system programming, data analysis, or mobile app development.
				</li>
				<li>
					<strong>Performance:</strong>
					Different languages have different performance characteristics. For example, C++ is known for its speed and
					efficiency, while Python is praised for its simplicity and ease of use but might not be as fast as C++.
				</li>
				<li>
					<strong>Ecosystem:</strong>
					The ecosystem around a language includes its standard library, third-party libraries, and community support.
					Some languages have extensive libraries and frameworks that make certain types of development easier.
				</li>
			</ul>
			<p><strong>Frameworks:</strong></p>
			<ul>
				<li>
					<strong>Definition:</strong>
					Frameworks are collections of libraries, tools, and best practices that provide a structure to develop
					applications. They are built on top of programming languages and provide a more specific environment tailored
					to a particular kind of task.
				</li>
				<li>
					<strong>Purpose:</strong>
					Frameworks are often focused on a specific type of application, like web development, mobile app development,
					or data science. Examples include Django (Python), React (JavaScript), Spring (Java), and Ruby on Rails
					(Ruby).
				</li>
				<li>
					<strong>Abstraction:</strong>
					Frameworks offer a higher level of abstraction, simplifying many tasks (like handling HTTP requests, database
					connections, etc.) that you would otherwise need to write from scratch in a language.
				</li>
				<li>
					<strong>Opinionated vs. Unopinionated:</strong>
					Some frameworks are "opinionated" (e.g., Ruby on Rails), meaning they enforce certain design patterns and
					structures, while others are "unopinionated" (e.g., Flask in Python), giving developers more freedom.
				</li>
			</ul>
			<h3>Can You Make the Same Project with All?</h3>
			<p><strong>Theoretical Possibility:</strong></p>
			<ul>
				<li>
					Yes, in theory, you can develop the same project in different programming languages and frameworks. The core
					functionality can be replicated across various platforms.
				</li>
			</ul>
			<p><strong>Practical Considerations:</strong></p>
			<ul>
				<li>
					<strong>Effort &amp; Complexity:</strong>
					The effort required can vary significantly. Some languages and frameworks are better suited for specific types
					of projects, making development easier or more difficult.
				</li>
				<li>
					<strong>Performance:</strong>
					The performance of the final product may differ depending on the language and framework chosen. For example, a
					web application written in JavaScript using Node.js may have different performance characteristics than the
					same application written in Python with Django.
				</li>
				<li>
					<strong>Ecosystem &amp; Libraries:</strong>
					Some projects might rely heavily on third-party libraries or frameworks available in one language but not
					another. This can make it easier or harder to replicate the project in a different language.
				</li>
				<li>
					<strong>Maintenance &amp; Scaling:</strong>
					Long-term maintenance, ease of scaling, and community support are other factors that might differ based on the
					language and framework used.
				</li>
			</ul>
			<p><strong>Example:</strong></p>
			<ul>
				<li>
					A simple web application could be developed using Flask (Python), Express.js (Node.js), or Spring (Java). Each
					framework would offer different tools, libraries, and methodologies to accomplish the same task, but the final
					product could be quite similar.
				</li>
			</ul>
			<p>
				<strong>Conclusion:</strong>
				While you can theoretically build the same project using different programming languages and frameworks, the
				choice of tools will impact the development process, performance, and maintenance of the project. Selecting the
				right language and framework often depends on the specific requirements of the project and the strengths of each
				tool.
			</p>
		</div>

		<style>
			h1.container-headings {
				margin: 0;
				font-size: 3rem;
			}

			h2.container-headings {
				margin: 0;
				font-size: 1.5rem;
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
	
		document.querySelector(".page-title").innerHTML = "Projects"

	
	`,
};
