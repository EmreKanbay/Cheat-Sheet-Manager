#### Why is Webpack Useful?

- **Organizes Your Code**: It helps you keep your code neat and tidy.
- **Bundles Files**: Combines all your files into one or a few files, making your project faster.
- **Handles Different File Types**: Can work with JavaScript, CSS, images, and more.
- **Optimizes Your Project**: Makes your project smaller and faster by removing unnecessary parts.

#### Basic Setup

1. **Install Webpack**:

   ```bash
   npm install --save-dev webpack webpack-cli
   ```

   This installs Webpack and its command-line interface (CLI) as development dependencies.

2. **Create a Configuration File**:
   Create a file named `webpack.config.js` in your project root:

   ```javascript
   const path = require("path");

   module.exports = {
   	entry: "./src/index.js", // The starting point of your application
   	output: {
   		filename: "bundle.js", // The name of the output file
   		path: path.resolve(__dirname, "dist"), // The output directory
   	},
   	mode: "development", // Mode can be 'development' or 'production'
   };
   ```

3. **Run Webpack**:
   ```bash
   npx webpack
   ```
   This command tells Webpack to use the configuration file and bundle your project.

#### Common Commands and Options

- **Entry Point**:

  ```javascript
  entry: "./src/index.js";
  ```

  The main file where Webpack starts bundling.

- **Output**:

  ```javascript
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
  ```

  Specifies the name and location of the bundled file.

- **Loaders**:
  Loaders help Webpack understand different file types.

  ```javascript
  module: {
    rules: [
      {
        test: /\.css$/, // Files ending in .css
        use: ['style-loader', 'css-loader'], // Use these loaders
      },
    ],
  }
  ```

- **Plugins**:
  Plugins perform specific tasks like optimizing your bundle.

  ```javascript
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = {
  	plugins: [
  		new HtmlWebpackPlugin({
  			template: "./src/index.html", // Use this HTML file as a template
  		}),
  	],
  };
  ```

#### Example Configuration

Here's a simple example combining everything:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};
```

#### Running Webpack

- **Build Your Project**:

  ```bash
  npx webpack
  ```

  This command bundles your project according to the configuration file.

- **Watch Mode**:

  ```bash
  npx webpack --watch
  ```

  Automatically rebuilds your project when files change.

- **Development Server**:
  ```bash
  npx webpack serve
  ```
  Starts a local server to preview your project.
