### Installation

1. **Prerequisites**:

   - **Node.js**: Ensure you have Node.js installed (v18.0.0 or newer).
   - **Text Editor**: Recommended - Visual Studio Code with the Vue extension.
   - **Terminal**: Use your preferred terminal.

2. **Create a New Nuxt Project**:

   ```bash
   npx nuxi@latest init <project-name>
   cd <project-name>
   ```

3. **Start the Development Server**:
   ```bash
   yarn dev --open
   ```

### Nuxt.js Cheat Sheet

#### Project Structure

- **`assets/`**: Uncompiled assets like LESS, SASS, or JavaScript.
- **`components/`**: Vue.js components.
- **`layouts/`**: Layouts for your pages.
- **`pages/`**: Vue components for each route.
- **`plugins/`**: JavaScript plugins to run before mounting the root Vue.js application.
- **`static/`**: Static files directly accessible via the root URL.
- **`store/`**: Vuex store files.

#### Basic Commands

- **Start Development Server**:
  ```bash
  yarn dev
  ```
- **Build for Production**:
  ```bash
  yarn build
  ```
- **Generate Static Project**:
  ```bash
  yarn generate
  ```
- **Start Production Server**:
  ```bash
  yarn start
  ```

#### Configuration (`nuxt.config.js`)

- **Global Page Headers**:

  ```javascript
  export default {
  	head: {
  		title: "My Nuxt App",
  		meta: [
  			{ charset: "utf-8" },
  			{ name: "viewport", content: "width=device-width, initial-scale=1" },
  			{ hid: "description", name: "description", content: "My Nuxt.js project" },
  		],
  		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  	},
  };
  ```

- **CSS Configuration**:

  ```javascript
  export default {
  	css: ["@/assets/css/main.css"],
  };
  ```

- **Plugins**:
  ```javascript
  export default {
  	plugins: ["~/plugins/axios.js"],
  };
  ```

#### Pages and Routing

- **Creating a Page**:
  Create a `.vue` file in the `pages/` directory:

  ```vue
  <template>
  	<div>
  		<h1>Home Page</h1>
  	</div>
  </template>
  ```

- **Dynamic Routes**:
  Create a file with an underscore in the `pages/` directory:

  ```bash
  pages/
  └── _slug.vue
  ```

  Access the dynamic route in the component:

  ```vue
  <template>
  	<div>
  		<h1>{{ $route.params.slug }}</h1>
  	</div>
  </template>
  ```

#### Fetching Data

- **Using `asyncData`**:

  ```javascript
  export default {
  	async asyncData({ $axios }) {
  		const data = await $axios.$get("https://api.example.com/data");
  		return { data };
  	},
  };
  ```

- **Using `fetch`**:
  ```javascript
  export default {
  	data() {
  		return {
  			data: null,
  		};
  	},
  	async fetch() {
  		this.data = await this.$axios.$get("https://api.example.com/data");
  	},
  };
  ```

#### Middleware

- **Creating Middleware**:
  Create a file in the `middleware/` directory:

  ```javascript
  export default function ({ store, redirect }) {
  	if (!store.state.authenticated) {
  		return redirect("/login");
  	}
  }
  ```

- **Using Middleware**:
  ```javascript
  export default {
  	middleware: "auth",
  };
  ```

#### Store (Vuex)

- **State Management**:

  ```javascript
  export const state = () => ({
  	counter: 0,
  });

  export const mutations = {
  	increment(state) {
  		state.counter++;
  	},
  };
  ```

- **Accessing Store in Components**:
  ```vue
  <template>
    <div>
      <button @click="$store.commit('increment')">Increment</button>
      <p>{{ $store.state.counter }}</p>
    </div>
  </template>
  ```
