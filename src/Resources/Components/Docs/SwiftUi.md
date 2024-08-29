### **Installing SwiftUI**

1. **Download Xcode**:

   - Go to the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and download Xcode.
   - Ensure you have the latest version of macOS that supports the latest Xcode.

2. **Install Xcode**:

   - Open the downloaded Xcode app and follow the on-screen instructions to complete the installation.

3. **Create a New SwiftUI Project**:
   - Open Xcode.
   - Select &quot;Create a new Xcode project.&quot;
   - Choose &quot;App&quot; under the iOS tab and click &quot;Next.&quot;
   - Enter your project details (e.g., Product Name, Team, Organization Identifier).
   - Ensure &quot;Swift&quot; is selected as the language and &quot;SwiftUI&quot; is selected as the User Interface.
   - Click &quot;Next&quot; and choose a location to save your project.

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
        Text(&quot;Hello, World!&quot;)
            .padding()
    }
}
```

#### **Common Views**

- **Text**: Displays a string of text.

  ```swift
  Text(&quot;Hello, SwiftUI!&quot;)
  ```

- **Image**: Displays an image.

  ```swift
  Image(systemName: &quot;star.fill&quot;)
  ```

- **Button**: A tappable button.

  ```swift
  Button(action: {
      print(&quot;Button tapped!&quot;)
  }) {
      Text(&quot;Tap me!&quot;)
  }
  ```

- **TextField**: A text input field.

  ```swift
  @State private var name: String = &quot;&quot;

  TextField(&quot;Enter your name&quot;, text: $name)
  ```

#### **Layout Containers**

- **VStack**: Vertically stacks views.

  ```swift
  VStack {
      Text(&quot;Top&quot;)
      Text(&quot;Bottom&quot;)
  }
  ```

- **HStack**: Horizontally stacks views.

  ```swift
  HStack {
      Text(&quot;Left&quot;)
      Text(&quot;Right&quot;)
  }
  ```

- **ZStack**: Overlays views on top of each other.
  ```swift
  ZStack {
      Text(&quot;Back&quot;)
      Text(&quot;Front&quot;)
  }
  ```

#### **Modifiers**

- **Padding**: Adds padding around a view.

  ```swift
  Text(&quot;Hello, SwiftUI!&quot;)
      .padding()
  ```

- **ForegroundColor**: Changes the color of text or images.

  ```swift
  Text(&quot;Hello, SwiftUI!&quot;)
      .foregroundColor(.blue)
  ```

- **Background**: Adds a background color or view.

  ```swift
  Text(&quot;Hello, SwiftUI!&quot;)
      .background(Color.yellow)
  ```

- **CornerRadius**: Rounds the corners of a view.
  ```swift
  Image(systemName: &quot;star.fill&quot;)
      .cornerRadius(10)
  ```

#### **State Management**

- **@State**: A property wrapper to manage state in a view.

  ```swift
  @State private var isOn: Bool = false

  Toggle(isOn: $isOn) {
      Text(&quot;Toggle switch&quot;)
  }
  ```

- **@Binding**: A property wrapper to create a two-way binding between a parent and child view.

  ```swift
  struct ParentView: View {
      @State private var name: String = &quot;&quot;

      var body: some View {
          ChildView(name: $name)
      }
  }

  struct ChildView: View {
      @Binding var name: String

      var body: some View {
          TextField(&quot;Enter your name&quot;, text: $name)
      }
  }
  ```

#### **Navigation**

- **NavigationView**: A container for managing navigation.

  ```swift
  NavigationView {
      Text(&quot;Home&quot;)
          .navigationTitle(&quot;Home&quot;)
  }
  ```

- **NavigationLink**: A link to navigate to another view.
  ```swift
  NavigationLink(destination: DetailView()) {
      Text(&quot;Go to Detail&quot;)
  }
  ```
