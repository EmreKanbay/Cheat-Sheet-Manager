### Installation

1. **Install Analog JS**:

   ```bash
   npm install @analogjs/platform --save-dev
   ```

2. **Set up Vite configuration**:

   ```bash
   npx analog setup
   ```

3. **Update build/serve targets**:

   - Modify your `angular.json` to update the build and serve targets to use Vite.

4. **Move necessary files**:

   - Move any necessary files as per the migration guide.

5. **Optional: Set up Vitest for unit testing**:
   ```bash
   npm install vitest --save-dev
   ```

### Cheat Sheet

#### File-based Routing

- **Creating Routes**:

  - Analog JS uses a file-based routing system. To create a new route, simply add a new file in the `src/pages` directory. For example, to create an &quot;About&quot; page:

    ```typescript
    // src/pages/about.ts
    import { Component } from "@angular/core";

    @Component({
    	selector: "app-about",
    	template: `
    		<h1>About Us</h1>
    	`,
    })
    export class AboutComponent {}
    ```

- **Dynamic Routes**:

  - You can create dynamic routes by using square brackets in the filename. For example, to create a user profile page:

    ```typescript
    // src/pages/user/[id].ts
    import { Component } from "@angular/core";
    import { ActivatedRoute } from "@angular/router";

    @Component({
    	selector: "app-user",
    	template: `
    		<h1>User ID: {{ userId }}</h1>
    	`,
    })
    export class UserComponent {
    	userId: string;

    	constructor(private route: ActivatedRoute) {
    		this.userId = this.route.snapshot.paramMap.get("id")!;
    	}
    }
    ```

#### API Routes

- **Creating API Endpoints**:
  - Analog JS allows you to create API routes by adding files in the `src/api` directory. For example, to create a simple API endpoint:
    ```typescript
    // src/api/hello.ts
    export default function handler(req, res) {
    	res.status(200).json({ message: "Hello, Analog!" });
    }
    ```

#### State Management

- **Using Services for State Management**:

  - Analog JS leverages Angular's service system for state management. Here's an example of a simple service:

    ```typescript
    // src/app/services/counter.service.ts
    import { Injectable } from "@angular/core";

    @Injectable({
    	providedIn: "root",
    })
    export class CounterService {
    	private count = 0;

    	increment() {
    		this.count++;
    	}

    	getCount() {
    		return this.count;
    	}
    }
    ```

- **Using the Service in a Component**:

  ```typescript
  // src/app/components/counter.component.ts
  import { Component } from "@angular/core";
  import { CounterService } from "../services/counter.service";

  @Component({
  	selector: "app-counter",
  	template: `
  		<button (click)="('increment()')">Increment</button>
  		<p>Count: {{ count }}</p>
  	`,
  })
  export class CounterComponent {
  	count: number;

  	constructor(private counterService: CounterService) {
  		this.count = this.counterService.getCount();
  	}

  	increment() {
  		this.counterService.increment();
  		this.count = this.counterService.getCount();
  	}
  }
  ```

#### Styling

- **Global Styles**:

  - You can define global styles in the `src/styles` directory and import them in your components:
    ```scss
    // src/styles/global.scss
    body {
    	font-family: Arial, sans-serif;
    }
    ```

- **Component Styles**:

  - You can also define styles specific to a component:

    ```typescript
    // src/app/components/hello.component.ts
    import { Component } from "@angular/core";

    @Component({
    	selector: "app-hello",
    	template: `
    		<h1>Hello, Analog!</h1>
    	`,
    	styles: [
    		`
    			h1 {
    				color: blue;
    			}
    		`,
    	],
    })
    export class HelloComponent {}
    ```

#### Testing

- **Writing Unit Tests**:

  - Analog JS supports unit testing with Vitest. Here's an example of a simple test:

    ```typescript
    // src/app/components/hello.component.spec.ts
    import { describe, it, expect } from "vitest";
    import { HelloComponent } from "./hello.component";

    describe("HelloComponent", () => {
    	it("should create the component", () => {
    		const component = new HelloComponent();
    		expect(component).toBeTruthy();
    	});
    });
    ```
