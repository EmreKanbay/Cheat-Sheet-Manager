### Installation

1. **Install Python**:

   - Ensure you have Python installed. You can download it from the [official Python website](https://www.python.org/downloads/).

2. **Install Django**:

   - It's recommended to use a virtual environment to manage your project dependencies. First, install `virtualenv` if you don't have it:
     ```bash
     pip install virtualenv
     ```
   - Create a virtual environment:
     ```bash
     virtualenv myenv
     ```
   - Activate the virtual environment:
     - On Windows:
       ```bash
       myenv\Scripts\activate
       ```
     - On macOS/Linux:
       ```bash
       source myenv/bin/activate
       ```
   - Install Django:
     ```bash
     pip install django
     ```

3. **Create a Django Project**:

   ```bash
   django-admin startproject myproject
   cd myproject
   ```

4. **Run the Development Server**:
   ```bash
   python manage.py runserver
   ```

### Cheat Sheet

#### Project Structure

- **Create a new app**:

  ```bash
  python manage.py startapp myapp
  ```

- **Project Directory Layout**:
  ```
  myproject/
      manage.py
      myproject/
          __init__.py
          settings.py
          urls.py
          wsgi.py
      myapp/
          migrations/
          __init__.py
          admin.py
          apps.py
          models.py
          tests.py
          views.py
  ```

#### Models

- **Define a Model**:

  ```python
  from django.db import models

  class MyModel(models.Model):
      name = models.CharField(max_length=100)
      description = models.TextField()

      def __str__(self):
          return self.name
  ```

- **Run Migrations**:
  ```bash
  python manage.py makemigrations
  python manage.py migrate
  ```

#### Admin

- **Register a Model in Admin**:

  ```python
  from django.contrib import admin
  from .models import MyModel

  admin.site.register(MyModel)
  ```

- **Create a Superuser**:
  ```bash
  python manage.py createsuperuser
  ```

#### Views

- **Function-based View**:

  ```python
  from django.http import HttpResponse

  def my_view(request):
      return HttpResponse("Hello, world!")
  ```

- **Class-based View**:

  ```python
  from django.views import View
  from django.http import HttpResponse

  class MyView(View):
      def get(self, request):
          return HttpResponse("Hello, world!")
  ```

#### URLs

- **URL Configuration**:

  ```python
  from django.urls import path
  from . import views

  urlpatterns = [
      path('', views.my_view, name='home'),
  ]
  ```

- **Include App URLs in Project**:

  ```python
  from django.urls import include, path

  urlpatterns = [
      path('myapp/', include('myapp.urls')),
      path('admin/', admin.site.urls),
  ]
  ```

#### Templates

- **Create a Template**:

  - Create a directory named `templates` in your app directory and add your HTML files there.
  - Example: `myapp/templates/myapp/home.html`

  ```html
  <!doctype html>
  <html>
  	<head>
  		<title>Home</title>
  	</head>
  	<body>
  		<h1>Welcome to My App</h1>
  	</body>
  </html>
  ```

- **Render a Template in a View**:

  ```python
  from django.shortcuts import render

  def my_view(request):
      return render(request, 'myapp/home.html')
  ```

#### Forms

- **Create a Form**:

  ```python
  from django import forms

  class MyForm(forms.Form):
      name = forms.CharField(label='Your name', max_length=100)
  ```

- **Handle Form in a View**:

  ```python
  from django.shortcuts import render
  from .forms import MyForm

  def my_view(request):
      if request.method == 'POST':
          form = MyForm(request.POST)
          if form.is_valid():
              # process form data
              pass
      else:
          form = MyForm()

      return render(request, 'myapp/form.html', {'form': form})
  ```

#### Static Files

- **Serving Static Files**:
  - Add the following to your `settings.py`:
    ```python
    STATIC_URL = '/static/'
    ```
  - Create a directory named `static` in your app directory and add your static files there.
  - Example: `myapp/static/myapp/style.css`

#### Deployment

- **Collect Static Files**:

  ```bash
  python manage.py collectstatic
  ```

- **Run the Server in Production**:
  ```bash
  python manage.py runserver 0.0.0.0:8000
  ```
