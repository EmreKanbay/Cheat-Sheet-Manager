### How to Install Vue

1. **Install Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Create a new Vue project**:

   ```bash
   npm create vue@latest
   cd my-vue-app
   npm install
   npm run dev
   ```

3. **Open your project**: Open the project folder in your preferred code editor (e.g., Visual Studio Code).

### Vue Cheat Sheet

#### Basic Component Structure

```vue
<template>
	<div>
		<h1>Hello {{ name }}!</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "world",
		};
	},
};
</script>

<style scoped>
h1 {
	color: purple;
}
</style>
```

#### Reactive Data

```vue
<template>
	<div>
		<p>{{ count }} doubled is {{ doubled }}</p>
		<button @click=""increment";">Increment</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 0,
		};
	},
	computed: {
		doubled() {
			return this.count * 2;
		},
	},
	methods: {
		increment() {
			this.count += 1;
		},
	},
};
</script>
```

#### Props

```vue
<!-- ParentComponent.vue -->
<template>
	<ChildComponent :message="'message'" />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
	data() {
		return {
			message: "Hello from Parent!",
		};
	},
	components: {
		ChildComponent,
	},
};
</script>

<!-- ChildComponent.vue -->
<template>
	<p>{{ message }}</p>
</template>

<script>
export default {
	props: {
		message: String,
	},
};
</script>
```

#### Event Handling

```vue
<template>
	<button @click=""handleClick";">Click me</button>
</template>

<script>
export default {
	methods: {
		handleClick() {
			alert("Button clicked!");
		},
	},
};
</script>
```

#### Two-Way Binding

```vue
<template>
	<div>
		<input v-model="'name'" />
		<p>Your name is: {{ name }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "",
		};
	},
};
</script>
```

#### Conditional Rendering

```vue
<template>
	<div>
		<p v-if="'loggedIn'">Welcome back!</p>
		<p v-else>Please log in.</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loggedIn: false,
		};
	},
};
</script>
```

#### Looping

```vue
<template>
	<ul>
		<li
			v-for='"item'
			in
			items"
			:key="'item'">
			{{ item }}
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			items: ["apple", "banana", "cherry"],
		};
	},
};
</script>
```

#### Lifecycle Hooks

```vue
<template>
	<div>
		<p>Check the console for lifecycle hook messages.</p>
	</div>
</template>

<script>
export default {
	mounted() {
		console.log("Component mounted");
	},
};
</script>
```

#### Vuex Store (State Management)

```javascript
// store.js
import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    }
  }
});

// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store';

createApp(App).use(store).mount('#app');

// App.vue
<template>
  <div>
    <button @click="increment">Increment</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['increment'])
  }
};
</script>
```
