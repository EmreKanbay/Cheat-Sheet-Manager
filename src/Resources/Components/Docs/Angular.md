### **Creating an Angular App**

1. **Install Node.js and npm**:

   - Ensure you have Node.js and npm installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

2. **Install Angular CLI**:

   - Open your terminal and run the following command to install Angular CLI globally:
     ```bash
     npm install -g @angular/cli
     ```

3. **Create a New Angular App**:

   - Run the following command to create a new Angular project:
     ```bash
     ng new my-app
     ```
   - Follow the prompts to set up your project. For default settings, you can press Enter.

4. **Navigate to the Project Directory**:

   ```bash
   cd my-app
   ```

5. **Start the Development Server**:
   ```bash
   ng serve
   ```
   - This will start the development server and open your new Angular app in the browser at `http://localhost:4200`.

### **Angular Cheat Sheet**

#### **1. Modules**

- **Creating a Module**:
  ```bash
  ng generate module my-module
  ```

#### **2. Components**

- **Creating a Component**:
  ```bash
  ng generate component my-component
  ```
- **Component Template**:
  ```html
  <h1>{{ title }}</h1>
  ```
- **Component Class**:

  ```typescript
  import { Component } from "@angular/core";

  @Component({
  	selector: "app-my-component",
  	templateUrl: "./my-component.component.html",
  	styleUrls: ["./my-component.component.css"],
  })
  export class MyComponent {
  	title = "Hello, Angular!";
  }
  ```

#### **3. Data Binding**

- **Interpolation**:
  ```html
  <p>{{ message }}</p>
  ```
- **Property Binding**:
  ```html
  <img [src]='"imageUrl"' />
  ```
- **Event Binding**:
  ```html
  <button (click)='"onClick()"'>Click me</button>
  ```
- **Two-Way Binding**:
  ```html
  <input [(ngModel)]='"name"' />
  ```

#### **4. Directives**

- **Structural Directives**:
  ```html
  <div *ngIf='"isVisible"'>Visible</div>
  <div
  	*ngFor='"let'
  	item
  	of
  	items">
  	{{ item }}
  </div>
  ```
- **Attribute Directives**:
  ```html
  <div [ngClass]="{ 'active': isActive }"></div>
  ```

#### **5. Services and Dependency Injection**

- **Creating a Service**:
  ```bash
  ng generate service my-service
  ```
- **Injecting a Service**:

  ```typescript
  import { Injectable } from "@angular/core";

  @Injectable({
  	providedIn: "root",
  })
  export class MyService {
  	getData() {
  		return "Hello from service!";
  	}
  }
  ```

#### **6. Routing**

- **Setting Up Routes**:

  ```typescript
  import { NgModule } from "@angular/core";
  import { RouterModule, Routes } from "@angular/router";
  import { HomeComponent } from "./home/home.component";
  import { AboutComponent } from "./about/about.component";

  const routes: Routes = [
  	{ path: "", component: HomeComponent },
  	{ path: "about", component: AboutComponent },
  ];

  @NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule],
  })
  export class AppRoutingModule {}
  ```

#### **7. Forms**

- **Template-Driven Forms**:
  ```html
  <form
  	#myForm='"ngForm"'
  	(ngSubmit)='"onSubmit(myForm)"'>
  	<input
  		name='"name"'
  		ngModel />
  	<button type='"submit"'>Submit</button>
  </form>
  ```
- **Reactive Forms**:

  ```typescript
  import { Component } from "@angular/core";
  import { FormGroup, FormControl } from "@angular/forms";

  @Component({
  	selector: "app-my-form",
  	template: `
  		<form
  			[formGroup]="'form'"
  			(ngSubmit)="('onSubmit()')">
  			<input formControlName='"name"' />
  			<button type='"submit"'>Submit</button>
  		</form>
  	`,
  })
  export class MyFormComponent {
  	form = new FormGroup({
  		name: new FormControl(""),
  	});

  	onSubmit() {
  		console.log(this.form.value);
  	}
  }
  ```

#### **8. Pipes**

- **Using Built-in Pipes**:
  ```html
  <p>{{ birthday | date }}</p>
  ```
- **Creating a Custom Pipe**:

  ```bash
  ng generate pipe my-pipe
  ```

  ```typescript
  import { Pipe, PipeTransform } from "@angular/core";

  @Pipe({
  	name: "myPipe",
  })
  export class MyPipe implements PipeTransform {
  	transform(value: string): string {
  		return value.toUpperCase();
  	}
  }
  ```
