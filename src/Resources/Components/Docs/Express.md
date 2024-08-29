### Installation

1. **Prerequisites**:

   - **Node.js**: Ensure you have Node.js installed (v18.0.0 or newer).
   - **Text Editor**: Recommended - Visual Studio Code.

2. **Create a New Express Project**:

   ```bash
   mkdir myapp
   cd myapp
   npm init -y
   npm install express
   ```

3. **Create a Basic Server**:
   Create a file named `app.js` and add the following code:

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
   	res.send("Hello World!");
   });

   app.listen(port, () => {
   	console.log(`Server running at http://localhost:${port}/`);
   });
   ```

4. **Start the Server**:
   ```bash
   node app.js
   ```

### Express.js Cheat Sheet

#### Basic Commands

- **Install Express**:
  ```bash
  npm install express
  ```
- **Run the Server**:
  ```bash
  node app.js
  ```

#### Middleware

- **Using Middleware**:

  ```javascript
  app.use(express.json()); // Parse JSON bodies
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
  ```

- **Custom Middleware**:
  ```javascript
  app.use((req, res, next) => {
  	console.log("Time:", Date.now());
  	next();
  });
  ```

#### Routing

- **Basic Route**:

  ```javascript
  app.get("/", (req, res) => {
  	res.send("Hello World!");
  });
  ```

- **Route with Parameters**:

  ```javascript
  app.get("/user/:id", (req, res) => {
  	res.send(`User ID: ${req.params.id}`);
  });
  ```

- **Route with Query Parameters**:
  ```javascript
  app.get("/search", (req, res) => {
  	res.send(`Search Query: ${req.query.q}`);
  });
  ```

#### Handling Different HTTP Methods

- **GET Request**:

  ```javascript
  app.get("/path", (req, res) => {
  	res.send("GET request to the homepage");
  });
  ```

- **POST Request**:

  ```javascript
  app.post("/path", (req, res) => {
  	res.send("POST request to the homepage");
  });
  ```

- **PUT Request**:

  ```javascript
  app.put("/path", (req, res) => {
  	res.send("PUT request to the homepage");
  });
  ```

- **DELETE Request**:
  ```javascript
  app.delete("/path", (req, res) => {
  	res.send("DELETE request to the homepage");
  });
  ```

#### Static Files

- **Serving Static Files**:
  ```javascript
  app.use(express.static("public"));
  ```

#### Error Handling

- **Basic Error Handling**:
  ```javascript
  app.use((err, req, res, next) => {
  	console.error(err.stack);
  	res.status(500).send("Something broke!");
  });
  ```

#### Template Engines

- **Setting Up EJS**:

  ```bash
  npm install ejs
  ```

  ```javascript
  app.set("view engine", "ejs");
  ```

  Create a file named `index.ejs` in the `views` directory:

  ```html
  <!doctype html>
  <html>
  	<head>
  		<title>My App</title>
  	</head>
  	<body>
  		<h1>Hello, <%= name %>!</h1>
  	</body>
  </html>
  ```

  Render the view in a route:

  ```javascript
  app.get("/", (req, res) => {
  	res.render("index", { name: "World" });
  });
  ```

#### Environment Variables

- **Using Environment Variables**:

  ```bash
  npm install dotenv
  ```

  Create a `.env` file:

  ```env
  PORT=3000
  ```

  Load environment variables in your app:

  ```javascript
  require("dotenv").config();
  const port = process.env.PORT || 3000;
  ```
