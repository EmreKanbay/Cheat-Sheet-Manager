### Prettier Cheat Sheet

#### **Installation**

- **Global Installation**:

  ```bash
  npm install -g prettier
  ```

  Installs Prettier globally on your system.

- **Project Installation**:
  ```bash
  npm install --save-dev prettier
  ```
  Installs Prettier as a development dependency in your project.

#### **Basic Usage**

- **Format a File**:

  ```bash
  prettier [options] [file/dir/glob]
  ```

  Formats the specified file(s) or directory.

- **Format and Overwrite**:

  ```bash
  prettier --write [file/dir/glob]
  ```

  Formats the specified file(s) and overwrites them with the formatted output.

- **Format All Files in a Directory**:
  ```bash
  prettier --write .
  ```
  Formats all files in the current directory.

#### **Using `npx`**

- **Format a File**:

  ```bash
  npx prettier [options] [file/dir/glob]
  ```

  Runs Prettier without needing a global installation.

- **Format and Overwrite**:
  ```bash
  npx prettier --write [file/dir/glob]
  ```
  Formats and overwrites the specified file(s).

#### **Configuration**

- **Using `.prettierrc` File**:
  Create a `.prettierrc` file in your project root to configure Prettier:
  ```json
  {
  	"printWidth": 80,
  	"tabWidth": 2,
  	"useTabs": false,
  	"semi": true,
  	"singleQuote": true,
  	"trailingComma": "es5",
  	"bracketSpacing": true,
  	"jsxBracketSameLine": false,
  	"arrowParens": "always"
  }
  ```

#### **Common Options**

- **`--write` or `-w`**: Overwrite the input files with the formatted output.
- **`--config` or `-c`**: Specify the path to the configuration file.
- **`--ignore-path`**: Specify the path to a file containing patterns that should be ignored.
- **`--list-different` or `-l`**: List files that are different from Prettier formatting.
- **`--check` or `-l`**: Check if files are formatted without modifying them.
- **`--stdin` or `-s`**: Read input from stdin instead of a file.

#### **Editor Integrations**

- **Visual Studio Code**: Install the Prettier extension and enable "Format On Save" in settings.
- **ESLint**: Use the `eslint-plugin-prettier` plugin to format code using Prettier rules.
- **Webpack**: Use the `prettier-webpack-plugin` to format code during the build process.

#### **Editor-specific Configuration**

- **Visual Studio Code**: Create a `.vscode/settings.json` file with Prettier settings specific to that project.
