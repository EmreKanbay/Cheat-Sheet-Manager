### How to Install Next.js

1. **Install Node.js and npm**:

   - Ensure you have Node.js and npm installed. You can download Node.js from [nodejs.org](https://nodejs.org/).
   - Verify the installation by running:
     ```bash
     node -v
     npm -v
     ```

2. **Create a new Next.js project**:

   - Use the following command to create a new Next.js project:
     ```bash
     npx create-next-app@latest
     ```
   - Follow the prompts to set up your project.

3. **Navigate to your project directory**:

   ```bash
   cd your-project-name
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

### Next.js Cheat Sheet

#### Project Structure

- **pages/**: Contains all your page components.
- **public/**: Static files like images.
- **styles/**: CSS files.
- **components/**: Reusable components.

#### Routing

- **Basic Route**:

  ```jsx
  // pages/index.js
  export default function Home() {
  	return <h1>Welcome to Next.js!</h1>;
  }
  ```

- **Dynamic Route**:

  ```jsx
  // pages/posts/[id].js
  import { useRouter } from "next/router";

  export default function Post() {
  	const router = useRouter();
  	const { id } = router.query;
  	return <h1>Post: {id}</h1>;
  }
  ```

#### API Routes

- **Creating an API Route**:
  ```jsx
  // pages/api/hello.js
  export default function handler(req, res) {
  	res.status(200).json({ message: "Hello, Next.js!" });
  }
  ```

#### Fetching Data

- **getStaticProps**:

  ```jsx
  // pages/index.js
  export async function getStaticProps() {
  	const res = await fetch("https://api.example.com/data");
  	const data = await res.json();
  	return { props: { data } };
  }

  export default function Home({ data }) {
  	return <div>{JSON.stringify(data)}</div>;
  }
  ```

- **getServerSideProps**:

  ```jsx
  // pages/index.js
  export async function getServerSideProps() {
  	const res = await fetch("https://api.example.com/data");
  	const data = await res.json();
  	return { props: { data } };
  }

  export default function Home({ data }) {
  	return <div>{JSON.stringify(data)}</div>;
  }
  ```

#### Styling

- **Using CSS Modules**:

  ```jsx
  // styles/Home.module.css
  .title {
    color: blue;
  }

  // pages/index.js
  import styles from '../styles/Home.module.css';

  export default function Home() {
    return <h1 className={styles.title}>Welcome to Next.js!</h1>;
  }
  ```

#### API Routes

- **Creating an API Route**:
  ```jsx
  // pages/api/hello.js
  export default function handler(req, res) {
  	res.status(200).json({ message: "Hello, Next.js!" });
  }
  ```

#### Image Optimization

- **Using the Image Component**:

  ```jsx
  // pages/index.js
  import Image from 'next/image';

  export default function Home() {
    return (
      <div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
    );
  }
  ```

#### Environment Variables

- **Using Environment Variables**:

  ```jsx
  // .env.local
  NEXT_PUBLIC_API_URL=https://api.example.com

  // pages/index.js
  export default function Home() {
    return <div>{process.env.NEXT_PUBLIC_API_URL}</div>;
  }
  ```
