### **Creating a React App**

1. **Install Node.js and npm**:

   - Ensure you have Node.js and npm installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

2. **Create a New React App**:

   - Open your terminal and run the following command:
     ```bash
     npx create-react-app my-app
     ```
   - This command creates a new directory called `my-app` with all the necessary files and dependencies.

3. **Navigate to the Project Directory**:

   ```bash
   cd my-app
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```
   - This will start the development server and open your new React app in the browser at `http://localhost:3000`.

### **React.js Cheat Sheet**

#### **1. JSX**

- **JSX Syntax**: Combines JavaScript and HTML.
  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```
- **Attributes**: Use camelCase for attributes.
  ```jsx
  const element = <div className="container"></div>;
  ```

#### **2. Components**

- **Functional Components**:
  ```jsx
  function Welcome(props) {
  	return <h1>Hello, {props.name}</h1>;
  }
  ```
- **Class Components**:
  ```jsx
  class Welcome extends React.Component {
  	render() {
  		return <h1>Hello, {this.props.name}</h1>;
  	}
  }
  ```

#### **3. Props**

- **Passing Props**:
  ```jsx
  const element = <Welcome name="Sara" />;
  ```

#### **4. State and Lifecycle**

- **State in Class Components**:
  ```jsx
  class Clock extends React.Component {
  	constructor(props) {
  		super(props);
  		this.state = { date: new Date() };
  	}
  	componentDidMount() {
  		this.timerID = setInterval(() => this.tick(), 1000);
  	}
  	componentWillUnmount() {
  		clearInterval(this.timerID);
  	}
  	tick() {
  		this.setState({ date: new Date() });
  	}
  	render() {
  		return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
  	}
  }
  ```

#### **5. Hooks**

- **useState**:
  ```jsx
  import React, { useState } from "react";
  function Example() {
  	const [count, setCount] = useState(0);
  	return (
  		<div>
  			<p>You clicked {count} times</p>
  			<button onClick={() => setCount(count + 1)}>Click me</button>
  		</div>
  	);
  }
  ```
- **useEffect**:
  ```jsx
  import React, { useEffect } from "react";
  function Example() {
  	useEffect(() => {
  		document.title = `You clicked ${count} times`;
  	});
  }
  ```

#### **6. Conditional Rendering**

- **Using if-else**:
  ```jsx
  function Greeting(props) {
  	const isLoggedIn = props.isLoggedIn;
  	if (isLoggedIn) {
  		return <h1>Welcome back!</h1>;
  	}
  	return <h1>Please sign up.</h1>;
  }
  ```

#### **7. Lists and Keys**

- **Rendering Lists**:
  ```jsx
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>);
  ```

#### **8. Forms**

- **Handling Form Inputs**:
  ```jsx
  class NameForm extends React.Component {
  	constructor(props) {
  		super(props);
  		this.state = { value: "" };
  		this.handleChange = this.handleChange.bind(this);
  		this.handleSubmit = this.handleSubmit.bind(this);
  	}
  	handleChange(event) {
  		this.setState({ value: event.target.value });
  	}
  	handleSubmit(event) {
  		alert("A name was submitted: " + this.state.value);
  		event.preventDefault();
  	}
  	render() {
  		return (
  			<form onSubmit={this.handleSubmit}>
  				<label>
  					Name:
  					<input
  						type="text"
  						value={this.state.value}
  						onChange={this.handleChange}
  					/>
  				</label>
  				<input
  					type="submit"
  					value="Submit"
  				/>
  			</form>
  		);
  	}
  }
  ```

#### **9. Context**

- **Creating Context**:
  ```jsx
  const MyContext = React.createContext(defaultValue);
  ```

#### **10. Error Boundaries**

- **Catching Errors**:
  ```jsx
  class ErrorBoundary extends React.Component {
  	constructor(props) {
  		super(props);
  		this.state = { hasError: false };
  	}
  	static getDerivedStateFromError(error) {
  		return { hasError: true };
  	}
  	componentDidCatch(error, errorInfo) {
  		// Log error
  	}
  	render() {
  		if (this.state.hasError) {
  			return <h1>Something went wrong.</h1>;
  		}
  		return this.props.children;
  	}
  }
  ```
