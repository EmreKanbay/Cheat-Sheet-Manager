### How to Install Svelte

1. **Install Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Create a new Svelte project**:

   ```bash
   npx degit sveltejs/template my-svelte-app
   cd my-svelte-app
   npm install
   npm run dev
   ```

3. **Open your project**: Open the project folder in your preferred code editor (e.g., Visual Studio Code).

### Svelte Cheat Sheet

#### Basic Component Structure

```svelte
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

#### Reactive Declarations

```svelte
<script>
  let count = 0;
  $: doubled = count * 2;
</script>

<p>{count} doubled is {doubled}</p>
<button on:click={() => count += 1}>Increment</button>
```

#### Props

```svelte
<!-- Parent.svelte -->
<script>
  import Child from './Child.svelte';
  let message = 'Hello from Parent!';
</script>

<Child {message} />

<!-- Child.svelte -->
<script>
  export let message;
</script>

<p>{message}</p>
```

#### Event Handling

```svelte
<script>
  function handleClick() {
    alert('Button clicked!');
  }
</script>

<button on:click={handleClick}>Click me</button>
```

#### Two-Way Binding

```svelte
<script>
  let name = '';
</script>

<input bind:value={name} />
<p>Your name is: {name}</p>
```

#### Conditional Rendering

```svelte
<script>
  let loggedIn = false;
</script>

{#if loggedIn}
  <p>Welcome back!</p>
{:else}
  <p>Please log in.</p>
{/if}
```

#### Looping

```svelte
<script>
  let items = ['apple', 'banana', 'cherry'];
</script>

<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
```

#### Lifecycle Methods

```svelte
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Component mounted');
  });
</script>
```

#### Stores

```svelte
<!-- store.js -->
import { writable } from 'svelte/store';

export const count = writable(0);

<!-- App.svelte -->
<script>
  import { count } from './store.js';
</script>

<button on:click={() => $count += 1}>Increment</button>
<p>{ $count }</p>
```
