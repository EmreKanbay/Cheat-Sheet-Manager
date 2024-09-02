### How to Install UIKit

1. **Install Xcode**:

   - Download and install Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12).

2. **Create a New Project**:

   - Open Xcode and select "Create a new Xcode project."
   - Choose a template for your project (e.g., App) and click "Next."
   - Enter your project details and click "Next."
   - Choose a location to save your project and click "Create."

3. **Import UIKit**:
   - UIKit is automatically included in your project when you create a new iOS app in Xcode.
   - To use UIKit in your Swift files, add `import UIKit` at the top of your file.

### UIKit Cheat Sheet

#### Basic Components

- **UIView**: The base class for all UI elements.

  ```swift
  let view = UIView()
  view.backgroundColor = .red
  ```

- **UILabel**: Displays a static text string.

  ```swift
  let label = UILabel()
  label.text = "Hello, World!"
  label.textColor = .black
  ```

- **UIButton**: A button that triggers an action when tapped.

  ```swift
  let button = UIButton(type: .system)
  button.setTitle("Tap me", for: .normal)
  button.addTarget(self, action: #selector(buttonTapped), for: .touchUpInside)
  ```

- **UIImageView**: Displays an image.
  ```swift
  let imageView = UIImageView(image: UIImage(named: "example.png"))
  ```

#### Layout

- **Auto Layout**: Define constraints for your views.

  ```swift
  view.translatesAutoresizingMaskIntoConstraints = false
  NSLayoutConstraint.activate([
      view.leadingAnchor.constraint(equalTo: self.view.leadingAnchor, constant: 20),
      view.trailingAnchor.constraint(equalTo: self.view.trailingAnchor, constant: -20),
      view.topAnchor.constraint(equalTo: self.view.topAnchor, constant: 20),
      view.bottomAnchor.constraint(equalTo: self.view.bottomAnchor, constant: -20)
  ])
  ```

- **Stack Views**: Arrange views in a horizontal or vertical stack.
  ```swift
  let stackView = UIStackView(arrangedSubviews: [label, button])
  stackView.axis = .vertical
  stackView.spacing = 10
  ```

#### Navigation

- **UINavigationController**: Manages a stack of view controllers.

  ```swift
  let navigationController = UINavigationController(rootViewController: yourViewController)
  ```

- **Presenting View Controllers**:
  ```swift
  present(yourViewController, animated: true, completion: nil)
  ```

#### Table and Collection Views

- **UITableView**: Displays a list of items in a single column.

  ```swift
  let tableView = UITableView()
  tableView.dataSource = self
  tableView.delegate = self
  ```

- **UICollectionView**: Displays a grid of items.
  ```swift
  let collectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
  collectionView.dataSource = self
  collectionView.delegate = self
  ```

#### Animations

- **Basic Animation**:

  ```swift
  UIView.animate(withDuration: 0.5) {
      self.view.alpha = 0
  }
  ```

- **Spring Animation**:
  ```swift
  UIView.animate(withDuration: 0.5, delay: 0, usingSpringWithDamping: 0.5, initialSpringVelocity: 1, options: [], animations: {
      self.view.transform = CGAffineTransform(scaleX: 1.5, y: 1.5)
  }, completion: nil)
  ```
