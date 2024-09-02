### Installation

1. **Using npm:**

   ```bash
   npm install backbone
   ```

2. **Using a CDN:**
   Add the following script tag to your HTML file:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min.js"></script>
   ```

### Backbone.js Cheat Sheet

#### 1. Models

- **Define a model:**
  ```javascript
  var MyModel = Backbone.Model.extend({});
  ```
- **Set default attributes:**
  ```javascript
  var MyModel = Backbone.Model.extend({
  	defaults: {
  		name: "Default Name",
  		age: 0,
  	},
  });
  ```
- **Access attributes:**
  ```javascript
  var name = model.get("name");
  ```
- **Set attributes:**
  ```javascript
  model.set("name", "New Name");
  ```
- **Listen for changes:**
  ```javascript
  model.on("change:name", function () {
  	console.log("Name changed!");
  });
  ```
- **Save to server:**
  ```javascript
  model.save();
  ```

#### 2. Collections

- **Define a collection:**
  ```javascript
  var MyCollection = Backbone.Collection.extend({
  	model: MyModel,
  });
  ```
- **Add a model:**
  ```javascript
  collection.add(new MyModel({ name: "John" }));
  ```
- **Remove a model:**
  ```javascript
  collection.remove(model);
  ```
- **Access models:**
  ```javascript
  var firstModel = collection.at(0);
  var modelById = collection.get(id);
  ```
- **Listen for events:**
  ```javascript
  collection.on("add", function (model) {
  	console.log("Model added:", model);
  });
  ```

#### 3. Views

- **Define a view:**
  ```javascript
  var MyView = Backbone.View.extend({
  	el: "#myElement",
  	render: function () {
  		this.$el.html("Hello, Backbone!");
  		return this;
  	},
  });
  ```
- **Bind events:**
  ```javascript
  var MyView = Backbone.View.extend({
  	events: {
  		"click .button": "doSomething",
  	},
  	doSomething: function () {
  		alert("Button clicked!");
  	},
  });
  ```
- **Listen to model changes:**
  ```javascript
  var MyView = Backbone.View.extend({
  	initialize: function () {
  		this.listenTo(this.model, "change", this.render);
  	},
  	render: function () {
  		this.$el.html(this.model.get("name"));
  		return this;
  	},
  });
  ```

#### 4. Routers

- **Define a router:**
  ```javascript
  var MyRouter = Backbone.Router.extend({
  	routes: {
  		home: "homeRoute",
  		about: "aboutRoute",
  	},
  	homeRoute: function () {
  		console.log("Home route");
  	},
  	aboutRoute: function () {
  		console.log("About route");
  	},
  });
  ```
- **Start the router:**
  ```javascript
  var router = new MyRouter();
  Backbone.history.start();
  ```
- **Navigate to a route:**
  ```javascript
  router.navigate("home", { trigger: true });
  ```

#### 5. Events

- **Trigger custom events:**
  ```javascript
  model.trigger("customEvent");
  ```
- **Listen for custom events:**
  ```javascript
  model.on("customEvent", function () {
  	console.log("Custom event triggered");
  });
  ```
- **Remove event listeners:**
  ```javascript
  model.off("customEvent");
  ```

#### 6. Syncing with the Server

- **Configure server URL:**
  ```javascript
  var MyModel = Backbone.Model.extend({
  	urlRoot: "/api/mymodel",
  });
  ```
- **Fetch data:**
  ```javascript
  model.fetch();
  ```
- **Save changes:**
  ```javascript
  model.save();
  ```
