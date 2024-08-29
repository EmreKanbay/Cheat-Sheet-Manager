### Installation

1. **Create a new SvelteKit project:**
   ```bash
   npm create svelte@latest my-app
   ```
2. **Navigate to your project directory:**
   ```bash
   cd my-app
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev -- --open
   ```

### SvelteKit Cheat Sheet

#### Basic Structure

- **Project Structure:**
  ```
  my-app/
  ├── src/
  │   ├── routes/
  │   │   └── index.svelte
  │   ├── lib/
  │   └── app.html
  ├── static/
  ├── package.json
  └── svelte.config.js
  ```

#### Components

- **Creating a Component:**

  ```svelte
  <!-- src/routes/index.svelte -->
  <script>
    let name = 'world';
  </script>

  <style>
    h1 {
      color: purple;
    }
  </style>

  <h1>Hello {name}!</h1>
  ```

- **Props:**

  ```svelte
  <!-- src/lib/Hello.svelte -->
  <script>
    export let name;
  </script>

  <h1>Hello {name}!</h1>
  ```

  ```svelte
  <!-- src/routes/index.svelte -->
  <script>
    import Hello from '$lib/Hello.svelte';
  </script>

  <Hello name=&quot;world&quot; />
  ```

#### Stores

- **Writable Store:**

  ```svelte
  <!-- src/stores.js -->
  import { writable } from 'svelte/store';

  export const count = writable(0);
  ```

  ```svelte
  <!-- src/routes/index.svelte -->
  <script>
    import { count } from '../stores.js';
  </script>

  <button on:click={() => $count += 1}>
    Count is {$count}
  </button>
  ```

#### Routing

- **Creating Routes:**

  - Files in `src/routes` correspond to routes in your app.
  - `src/routes/index.svelte` -> `/`
  - `src/routes/about.svelte` -> `/about`

- **Dynamic Routes:**

  ```svelte
  <!-- src/routes/[slug].svelte -->
  <script context=&quot;module&quot;>
    export async function load({ params }) {
      return {
        props: {
          slug: params.slug
        }
      };
    }
  </script>

  <script>
    export let slug;
  </script>

  <h1>Post: {slug}</h1>
  ```

#### API Routes

- **Creating an API Route:**
  ```javascript
  // src/routes/api/data.js
  export async function get() {
  	return {
  		body: {
  			message: "Hello from the API!",
  		},
  	};
  }
  ```

#### Styling

- **Global Styles:**

  ```css
  /* src/app.css */
  body {
  	font-family: Arial, sans-serif;
  }
  ```

- **Component Styles:**
  ```svelte
  <style>
    h1 {
      color: blue;
    }
  </style>
  ```

#### Deployment

- **Build for Production:**

  ```bash
  npm run build
  ```

- **Preview the Build:**
  ```bash
  npm run preview
  ```
