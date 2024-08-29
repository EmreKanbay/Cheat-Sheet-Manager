### Installation

To get started with Preact, you can use the following command to create a new Preact application using Vite:

```bash
npm init preact@latest
```

This command will guide you through setting up a new Preact project.

### Preact Cheat Sheet

#### Basic Concepts

- **Preact**: A fast 3kB alternative to React with the same modern API.
- **JSX**: A syntax extension that allows writing HTML-like code in JavaScript.

#### Core Functions

- **h() / createElement()**: Functions to create virtual DOM elements.

  ```javascript
  import { h } from "preact";
  const element = h("div", { class: "foo" }, "Hello World");
  ```

- **render()**: Renders a Preact component into the DOM.

  ```javascript
  import { render } from "preact";
  render(<App />, document.getElementById("root"));
  ```

- **Component**: Base class for creating stateful components.

  ```javascript
  import { Component } from "preact";
  class MyComponent extends Component {
  	render() {
  		return <div>Hello, {this.props.name}!</div>;
  	}
  }
  ```

- **useState()**: Hook to add state to functional components.

  ```javascript
  import { useState } from "preact/hooks";
  function Counter() {
  	const [count, setCount] = useState(0);
  	return (
  		<div>
  			<p>{count}</p>
  			<button onClick={() => setCount(count + 1)}>Increment</button>
  		</div>
  	);
  }
  ```

- **useEffect()**: Hook to perform side effects in functional components.
  ```javascript
  import { useEffect } from "preact/hooks";
  function Timer() {
  	useEffect(() => {
  		const timer = setInterval(() => console.log("Tick"), 1000);
  		return () => clearInterval(timer);
  	}, []);
  	return <div>Check the console for ticks</div>;
  }
  ```

#### Advanced Concepts

- **Context**: Provides a way to pass data through the component tree without having to pass props down manually at every level.

  ```javascript
  import { createContext } from "preact";
  const MyContext = createContext("defaultValue");
  ```

- **Refs**: Provides a way to access DOM nodes or React elements created in the render method.

  ```javascript
  import { createRef } from "preact";
  const myRef = createRef();
  ```

- **Fragments**: Allows grouping a list of children without adding extra nodes to the DOM.
  ```javascript
  import { Fragment } from "preact";
  function App() {
  	return (
  		<Fragment>
  			<div>First</div>
  			<div>Second</div>
  		</Fragment>
  	);
  }
  ```
