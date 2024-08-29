### Installation

1. **Install Node.js**

   - Download and install from [nodejs.org](https://nodejs.org/).

2. **Install Expo CLI**

   ```bash
   npm install -g expo-cli
   ```

3. **Create a New Expo Project**

   ```bash
   expo init MyNewProject
   ```

4. **Navigate to Your Project Directory**

   ```bash
   cd MyNewProject
   ```

5. **Start the Development Server**

   ```bash
   expo start
   ```

6. **Run the Project**
   - **iOS**: Use the Expo Go app from the App Store.
   - **Android**: Use the Expo Go app from the Google Play Store.

### React Native with Expo Cheat Sheet

#### Core Components

- **View**: The most fundamental component for building a UI.

  ```jsx
  import { View } from "react-native";
  ```

- **Text**: Used for displaying text.

  ```jsx
  import { Text } from "react-native";
  ```

- **Image**: Displays images.

  ```jsx
  import { Image } from "react-native";
  ```

- **ScrollView**: A scrollable container.

  ```jsx
  import { ScrollView } from "react-native";
  ```

- **TextInput**: A basic input field.

  ```jsx
  import { TextInput } from "react-native";
  ```

- **Button**: A basic button component.
  ```jsx
  import { Button } from "react-native";
  ```

#### Styling

- **Stylesheet**: Used to create styles.

  ```jsx
  import { StyleSheet } from "react-native";

  const styles = StyleSheet.create({
  	container: {
  		flex: 1,
  		justifyContent: "center",
  		alignItems: "center",
  	},
  });
  ```

- **Flexbox**: Used for layout.
  ```jsx
  const styles = StyleSheet.create({
  	container: {
  		flex: 1,
  		flexDirection: "row",
  		justifyContent: "space-between",
  	},
  });
  ```

#### Navigation

- **React Navigation**: A popular library for navigation.

  ```bash
  npm install @react-navigation/native
  npm install @react-navigation/stack
  ```

  ```jsx
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';

  const Stack = createStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=&quot;Home&quot; component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  ```

#### State Management

- **useState**: A Hook for state management.

  ```jsx
  import React, { useState } from 'react';

  function App() {
    const [count, setCount] = useState(0);

    return (
      <View>
        <Text>{count}</Text>
        <Button onPress={() => setCount(count + 1)} title=&quot;Increment&quot; />
      </View>
    );
  }
  ```

- **useEffect**: A Hook for side effects.

  ```jsx
  import React, { useEffect } from "react";

  function App() {
  	useEffect(() => {
  		// Side effect code here
  	}, []);

  	return <View />;
  }
  ```

#### Networking

- **Fetch API**: Used for making network requests.
  ```jsx
  useEffect(() => {
  	fetch("https://api.example.com/data")
  		.then(response => response.json())
  		.then(data => console.log(data));
  }, []);
  ```
