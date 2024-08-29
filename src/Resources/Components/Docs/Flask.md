### How to Install Flask

1. **Install Python**:

   - Ensure you have Python installed. You can download it from [python.org](https://www.python.org/).
   - Verify the installation by running:
     ```bash
     python --version
     ```

2. **Set Up a Virtual Environment**:

   - Create a project directory and navigate into it:
     ```bash
     mkdir myproject
     cd myproject
     ```
   - Create a virtual environment:
     ```bash
     python -m venv venv
     ```
   - Activate the virtual environment:
     - On Windows:
       ```bash
       venv\Scripts\activate
       ```
     - On macOS/Linux:
       ```bash
       source venv/bin/activate
       ```

3. **Install Flask**:
   - With the virtual environment activated, install Flask using pip:
     ```bash
     pip install Flask
     ```

### Flask Cheat Sheet

#### Basic App Setup

- **Creating a Simple App**:

  ```python
  from flask import Flask

  app = Flask(__name__)

  @app.route('/')
  def hello():
      return 'Hello, World!'

  if __name__ == '__main__':
      app.run(debug=True)
  ```

#### Routing

- **Basic Route**:

  ```python
  @app.route('/hello')
  def hello():
      return 'Hello, World!'
  ```

- **Dynamic Route**:

  ```python
  @app.route('/hello/<name>')
  def hello_name(name):
      return f'Hello, {name}!'
  ```

- **Allowed Request Methods**:
  ```python
  @app.route('/submit', methods=['GET', 'POST'])
  def submit():
      if request.method == 'POST':
          return 'Form Submitted!'
      return 'Submit Form'
  ```

#### Templates

- **Rendering Templates**:

  ```python
  from flask import render_template

  @app.route('/')
  def index():
      return render_template('index.html')
  ```

- **Template Example (index.html)**:
  ```html
  <!doctype html>
  <html>
  	<head>
  		<title>Hello</title>
  	</head>
  	<body>
  		<h1>Hello, {{ name }}!</h1>
  	</body>
  </html>
  ```

#### Handling Forms

- **Form Handling**:

  ```python
  from flask import request

  @app.route('/login', methods=['GET', 'POST'])
  def login():
      if request.method == 'POST':
          username = request.form['username']
          return f'Logged in as {username}'
      return '''
          <form method=&quot;post&quot;>
              <p><input type=text name=username>
              <p><input type=submit value=Login>
          </form>
      '''
  ```

#### JSON Responses

- **Returning JSON**:

  ```python
  from flask import jsonify

  @app.route('/data')
  def data():
      return jsonify({'key': 'value'})
  ```

#### Redirects and Errors

- **Redirecting**:

  ```python
  from flask import redirect, url_for

  @app.route('/home')
  def home():
      return redirect(url_for('index'))
  ```

- **Handling Errors**:

  ```python
  from flask import abort

  @app.route('/error')
  def error():
      abort(404)
  ```

#### Sessions

- **Using Sessions**:

  ```python
  from flask import session

  app.config['SECRET_KEY'] = 'supersecretkey'

  @app.route('/set_session')
  def set_session():
      session['key'] = 'value'
      return 'Session set!'

  @app.route('/get_session')
  def get_session():
      return session.get('key', 'Not set')
  ```

#### Database Integration

- **Using SQLAlchemy**:

  ```python
  from flask_sqlalchemy import SQLAlchemy

  app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
  db = SQLAlchemy(app)

  class User(db.Model):
      id = db.Column(db.Integer, primary_key=True)
      username = db.Column(db.String(80), unique=True, nullable=False)

      def __repr__(self):
          return f'<User {self.username}>'
  ```

#### Useful Commands

- **Run the Development Server**:

  ```bash
  flask run
  ```

- **Set Environment Variables**:
  ```bash
  export FLASK_APP=app.py
  export FLASK_ENV=development
  ```
