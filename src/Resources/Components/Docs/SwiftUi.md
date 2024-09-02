### **Installing SwiftUI**

1. **Download Xcode**:

   - Go to the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and download Xcode.
   - Ensure you have the latest version of macOS that supports the latest Xcode.

2. **Install Xcode**:

   - Open the downloaded Xcode app and follow the on-screen instructions to complete the installation.

3. **Create a New SwiftUI Project**:
   - Open Xcode.
   - Select "Create a new Xcode project."
   - Choose "App" under the iOS tab and click "Next."
   - Enter your project details (e.g., Product Name, Team, Organization Identifier).
   - Ensure "Swift" is selected as the language and "SwiftUI" is selected as the User Interface.
   - Click "Next" and choose a location to save your project.

### **SwiftUI Cheat Sheet**

#### **Basic Structure**

```swift
import SwiftUI

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
            .padding()
    }
}
```

#### **Common Views**

- **Text**: Displays a string of text.

  ```swift
  Text("Hello, SwiftUI!")
  ```

- **Image**: Displays an image.

  ```swift
  Image(systemName: "star.fill")
  ```

- **Button**: A tappable button.

  ```swift
  Button(action: {
      print("Button tapped!")
  }) {
      Text("Tap me!")
  }
  ```

- **TextField**: A text input field.

  ```swift
  @State private var name: String = ""

  TextField("Enter your name", text: $name)
  ```

#### **Layout Containers**

- **VStack**: Vertically stacks views.

  ```swift
  VStack {
      Text("Top")
      Text("Bottom")
  }
  ```

- **HStack**: Horizontally stacks views.

  ```swift
  HStack {
      Text("Left")
      Text("Right")
  }
  ```

- **ZStack**: Overlays views on top of each other.
  ```swift
  ZStack {
      Text("Back")
      Text("Front")
  }
  ```

#### **Modifiers**

- **Padding**: Adds padding around a view.

  ```swift
  Text("Hello, SwiftUI!")
      .padding()
  ```

- **ForegroundColor**: Changes the color of text or images.

  ```swift
  Text("Hello, SwiftUI!")
      .foregroundColor(.blue)
  ```

- **Background**: Adds a background color or view.

  ```swift
  Text("Hello, SwiftUI!")
      .background(Color.yellow)
  ```

- **CornerRadius**: Rounds the corners of a view.
  ```swift
  Image(systemName: "star.fill")
      .cornerRadius(10)
  ```

#### **State Management**

- **@State**: A property wrapper to manage state in a view.

  ```swift
  @State private var isOn: Bool = false

  Toggle(isOn: $isOn) {
      Text("Toggle switch")
  }
  ```

- **@Binding**: A property wrapper to create a two-way binding between a parent and child view.

  ```swift
  struct ParentView: View {
      @State private var name: String = ""

      var body: some View {
          ChildView(name: $name)
      }
  }

  struct ChildView: View {
      @Binding var name: String

      var body: some View {
          TextField("Enter your name", text: $name)
      }
  }
  ```

#### **Navigation**

- **NavigationView**: A container for managing navigation.

  ```swift
  NavigationView {
      Text("Home")
          .navigationTitle("Home")
  }
  ```

- **NavigationLink**: A link to navigate to another view.
  ```swift
  NavigationLink(destination: DetailView()) {
      Text("Go to Detail")
  }
  ```
