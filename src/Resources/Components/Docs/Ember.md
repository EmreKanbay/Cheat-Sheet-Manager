### How to Install Ember.js

1. **Install Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Install Ember CLI**: Open your terminal and run:

   ```bash
   npm install -g ember-cli
   ```

3. **Create a new Ember project**:

   ```bash
   ember new my-ember-app
   cd my-ember-app
   ember serve
   ```

4. **Open your project**: Open the project folder in your preferred code editor (e.g., Visual Studio Code).

5. **View your app**: Navigate to `http://localhost:4200` in your browser to see your new app in action.

### Ember.js Cheat Sheet

#### Basic Component Structure

```javascript
// app/components/my-component.js
import Component from "@glimmer/component";

export default class MyComponent extends Component {
	// Component logic here
}
```

```html
<!-- app/templates/components/my-component.hbs -->
<div>
	<h1>Hello, Ember!</h1>
</div>
```

#### Reactive Data with Tracked Properties

```javascript
import { tracked } from "@glimmer/tracking";
import Component from "@glimmer/component";

export default class MyComponent extends Component {
	@tracked count = 0;

	increment() {
		this.count++;
	}
}
```

```html
<button
	{{on
	&quot;click&quot;
	this.increment}}>
	Increment
</button>
<p>Count: {{this.count}}</p>
```

#### Passing Arguments to Components

```javascript
// app/components/child-component.js
import Component from "@glimmer/component";

export default class ChildComponent extends Component {
	// Access passed arguments with this.args
}
```

```html
<!-- app/templates/components/child-component.hbs -->
<p>{{this.args.message}}</p>

<!-- app/templates/application.hbs -->
<ChildComponent
	@message='"Hello'
	from
	Parent!&quot; />
```

#### Event Handling

```javascript
import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class MyComponent extends Component {
	@action
	handleClick() {
		alert("Button clicked!");
	}
}
```

```html
<button
	{{on
	&quot;click&quot;
	this.handleClick}}>
	Click me
</button>
```

#### Two-Way Binding with Input Helpers

```javascript
import { tracked } from "@glimmer/tracking";
import Component from "@glimmer/component";

export default class MyComponent extends Component {
	@tracked name = "";
}
```

```html
<input
	type='"text"'
	{{on
	&quot;input&quot;
	(pick
	&quot;target.value&quot;
	this.updateName)}} />
<p>Your name is: {{this.name}}</p>
```

#### Conditional Rendering

```javascript
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class MyComponent extends Component {
	@tracked loggedIn = false;
}
```

```html
{{#if this.loggedIn}}
<p>Welcome back!</p>
{{else}}
<p>Please log in.</p>
{{/if}}
```

#### Looping with Each Helper

```javascript
import Component from "@glimmer/component";

export default class MyComponent extends Component {
	items = ["apple", "banana", "cherry"];
}
```

```html
<ul>
	{{#each this.items as |item|}}
	<li>{{item}}</li>
	{{/each}}
</ul>
```

#### Lifecycle Hooks

```javascript
import Component from "@glimmer/component";
import { on } from "@ember/modifier";

export default class MyComponent extends Component {
	@on("didInsertElement")
	setup() {
		console.log("Component mounted");
	}
}
```

#### Ember Data (Models)

```javascript
// app/models/person.js
import Model, { attr } from "@ember-data/model";

export default class PersonModel extends Model {
	@attr("string") name;
	@attr("number") age;
}
```

```javascript
// app/routes/application.js
import Route from "@ember/routing/route";

export default class ApplicationRoute extends Route {
	model() {
		return this.store.findAll("person");
	}
}
```
