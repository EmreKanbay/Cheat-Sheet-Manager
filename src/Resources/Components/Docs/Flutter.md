### Installation

1. **Download the Flutter SDK:**

   - Go to the [Flutter installation page](https://docs.flutter.dev/get-started/install) and download the SDK for your operating system (Windows, macOS, Linux, or ChromeOS).

2. **Extract the SDK:**

   - Extract the downloaded zip file to a desired location on your system.

3. **Update your PATH:**

   - Add the Flutter SDK path to your system's PATH environment variable.
   - For example, on Windows, add `C:\path\to\flutter\bin` to your PATH.

4. **Run `flutter doctor`:**

   - Open a terminal and run:
     ```bash
     flutter doctor
     ```
   - This command checks your environment and displays a report of the status of your Flutter installation.

5. **Install an IDE:**
   - Install an Integrated Development Environment (IDE) like Android Studio, IntelliJ, or Visual Studio Code, and add the Flutter and Dart plugins.

### Flutter Cheat Sheet

#### 1. Basic Structure

- **Main Function:**

  ```dart
  void main() {
    runApp(MyApp());
  }
  ```

- **Stateless Widget:**

  ```dart
  class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        home: Scaffold(
          appBar: AppBar(title: Text('Hello Flutter')),
          body: Center(child: Text('Hello World')),
        ),
      );
    }
  }
  ```

- **Stateful Widget:**

  ```dart
  class MyStatefulWidget extends StatefulWidget {
    @override
    _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
  }

  class _MyStatefulWidgetState extends State<MyStatefulWidget> {
    @override
    Widget build(BuildContext context) {
      return Container();
    }
  }
  ```

#### 2. Common Widgets

- **Container:**

  ```dart
  Container(
    width: 100,
    height: 100,
    color: Colors.blue,
  );
  ```

- **Row and Column:**

  ```dart
  Row(
    children: <Widget>[
      Text('Item 1'),
      Text('Item 2'),
    ],
  );

  Column(
    children: <Widget>[
      Text('Item 1'),
      Text('Item 2'),
    ],
  );
  ```

- **ListView:**

  ```dart
  ListView(
    children: <Widget>[
      ListTile(title: Text('Item 1')),
      ListTile(title: Text('Item 2')),
    ],
  );
  ```

- **GridView:**
  ```dart
  GridView.count(
    crossAxisCount: 2,
    children: <Widget>[
      Text('Item 1'),
      Text('Item 2'),
    ],
  );
  ```

#### 3. Navigation

- **Basic Navigation:**

  ```dart
  Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => SecondScreen()),
  );
  ```

- **Returning Data:**
  ```dart
  Navigator.pop(context, 'Data to return');
  ```

#### 4. Forms and Input

- **TextField:**

  ```dart
  TextField(
    decoration: InputDecoration(
      border: OutlineInputBorder(),
      labelText: 'Enter your name',
    ),
  );
  ```

- **Form Validation:**

  ```dart
  final _formKey = GlobalKey<FormState>();

  Form(
    key: _formKey,
    child: Column(
      children: <Widget>[
        TextFormField(
          validator: (value) {
            if (value.isEmpty) {
              return 'Please enter some text';
            }
            return null;
          },
        ),
        ElevatedButton(
          onPressed: () {
            if (_formKey.currentState.validate()) {
              // Process data
            }
          },
          child: Text('Submit'),
        ),
      ],
    ),
  );
  ```

#### 5. State Management

- **setState:**

  ```dart
  setState(() {
    // Update state
  });
  ```

- **Provider (example):**

  ```dart
  class MyModel with ChangeNotifier {
    int _counter = 0;

    int get counter => _counter;

    void increment() {
      _counter++;
      notifyListeners();
    }
  }
  ```

#### 6. Networking

- **HTTP Request:**

  ```dart
  import 'package:http/http.dart' as http;

  Future<http.Response> fetchPost() {
    return http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
  ```

#### 7. Animations

- **Basic Animation:**

  ```dart
  class MyAnimatedWidget extends StatefulWidget {
    @override
    _MyAnimatedWidgetState createState() => _MyAnimatedWidgetState();
  }

  class _MyAnimatedWidgetState extends State<MyAnimatedWidget> with SingleTickerProviderStateMixin {
    AnimationController _controller;

    @override
    void initState() {
      super.initState();
      _controller = AnimationController(
        duration: const Duration(seconds: 2),
        vsync: this,
      )..repeat(reverse: true);
    }

    @override
    void dispose() {
      _controller.dispose();
      super.dispose();
    }

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        body: Center(
          child: FadeTransition(
            opacity: _controller,
            child: FlutterLogo(size: 100),
          ),
        ),
      );
    }
  }
  ```
