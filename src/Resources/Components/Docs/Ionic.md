### Installation

To get started with Ionic, you can use the following commands:

1. **Install Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Install Ionic CLI**: Use npm to install the Ionic CLI globally.

   ```bash
   npm install -g @ionic/cli
   ```

3. **Create a New Ionic App**: Use the Ionic CLI to create a new app.

   ```bash
   ionic start myApp
   ```

4. **Run the App**: Navigate to your app directory and start the development server.
   ```bash
   cd myApp
   ionic serve
   ```

### Ionic Cheat Sheet

#### Basic Concepts

- **Ionic**: An open-source UI toolkit for building high-quality mobile and desktop apps using web technologies like HTML, CSS, and JavaScript.
- **Capacitor**: A cross-platform native runtime that makes it easy to build web apps that run natively on iOS, Android, and the web.

#### Core Functions

- **Creating Components**: Use Ionic's component library to create UI elements.

  ```javascript
  import { IonButton } from "@ionic/react";
  const MyButton = () => <IonButton>Click Me</IonButton>;
  ```

- **Routing**: Use Ionic's routing to navigate between pages.

  ```javascript
  import { IonReactRouter } from '@ionic/react-router';
  import { Route } from 'react-router-dom';
  const App = () => (
    <IonReactRouter>
      <Route path=&quot;/home&quot; component={Home} />
    </IonReactRouter>
  );
  ```

- **State Management**: Manage state using hooks like `useState` and `useEffect`.

  ```javascript
  import { useState, useEffect } from "react";
  const MyComponent = () => {
  	const [count, setCount] = useState(0);
  	useEffect(() => {
  		console.log("Component mounted");
  	}, []);
  	return <div>{count}</div>;
  };
  ```

- **HTTP Requests**: Use `fetch` or libraries like Axios to make HTTP requests.
  ```javascript
  import axios from "axios";
  const fetchData = async () => {
  	const response = await axios.get("https://api.example.com/data");
  	console.log(response.data);
  };
  ```

#### Advanced Concepts

- **Native Plugins**: Use Capacitor plugins to access native device features.

  ```javascript
  import { Camera, CameraResultType } from "@capacitor/camera";
  const takePhoto = async () => {
  	const photo = await Camera.getPhoto({
  		resultType: CameraResultType.Uri,
  	});
  	console.log(photo);
  };
  ```

- **Theming**: Customize the look and feel of your app using Ionic's theming capabilities.

  ```css
  :root {
  	--ion-color-primary: #3880ff;
  	--ion-color-secondary: #3dc2ff;
  }
  ```

- **Animations**: Use Ionic's animation utilities to add animations to your app.
  ```javascript
  import { createAnimation } from "@ionic/react";
  const animation = createAnimation()
  	.addElement(document.querySelector(".my-element"))
  	.duration(1500)
  	.fromTo("opacity", "1", "0.5");
  animation.play();
  ```
