### **Installing .NET**

1. **Download .NET SDK**:

   - Visit the [.NET download page](https://dotnet.microsoft.com/download/dotnet) and download the latest SDK for your operating system.

2. **Install .NET SDK**:

   - **Windows**: Run the downloaded installer and follow the on-screen instructions.
   - **macOS**: Open the downloaded `.pkg` file and follow the installation steps.
   - **Linux**: Follow the instructions on the download page for your specific distribution.

3. **Verify Installation**:
   - Open a terminal or command prompt.
   - Run the command:
     ```sh
     dotnet --version
     ```
   - You should see the installed version of .NET.

### **.NET Cheat Sheet**

#### **Basic Structure**

```csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(&quot;Hello, World!&quot;);
        }
    }
}
```

#### **Common Commands**

- **Create a new project**:

  ```sh
  dotnet new console -n MyApp
  ```

- **Build the project**:

  ```sh
  dotnet build
  ```

- **Run the project**:

  ```sh
  dotnet run
  ```

- **Add a package**:
  ```sh
  dotnet add package <package-name>
  ```

#### **Data Types**

- **Primitive Types**:

  ```csharp
  int myInt = 5;
  double myDouble = 5.99;
  char myChar = 'D';
  bool myBool = true;
  string myString = &quot;Hello&quot;;
  ```

- **Arrays**:
  ```csharp
  int[] myArray = {1, 2, 3, 4, 5};
  ```

#### **Control Structures**

- **If-Else**:

  ```csharp
  if (condition)
  {
      // code block
  }
  else
  {
      // code block
  }
  ```

- **Switch**:

  ```csharp
  switch (expression)
  {
      case x:
          // code block
          break;
      case y:
          // code block
          break;
      default:
          // code block
          break;
  }
  ```

- **Loops**:
  - **For Loop**:
    ```csharp
    for (int i = 0; i < 5; i++)
    {
        Console.WriteLine(i);
    }
    ```
  - **While Loop**:
    ```csharp
    int i = 0;
    while (i < 5)
    {
        Console.WriteLine(i);
        i++;
    }
    ```

#### **Classes and Objects**

- **Class Definition**:

  ```csharp
  class Car
  {
      public string color = &quot;red&quot;;
  }
  ```

- **Create an Object**:
  ```csharp
  Car myObj = new Car();
  Console.WriteLine(myObj.color);
  ```

#### **Methods**

- **Method Definition**:

  ```csharp
  class Program
  {
      static void MyMethod()
      {
          Console.WriteLine(&quot;I just got executed!&quot;);
      }
  }
  ```

- **Calling a Method**:
  ```csharp
  MyMethod();
  ```

#### **Exception Handling**

- **Try-Catch**:
  ```csharp
  try
  {
      // code that may throw an exception
  }
  catch (Exception e)
  {
      Console.WriteLine(e.Message);
  }
  ```

#### **LINQ Queries**

- **Basic LINQ Query**:
  ```csharp
  int[] numbers = { 2, 3, 4, 5 };
  var result = from n in numbers
               where n % 2 == 0
               select n;
  ```
