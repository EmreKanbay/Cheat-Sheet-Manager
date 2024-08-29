### **Installation**

1. **Download ngrok**:

   - **Windows**: `choco install ngrok`
   - **Mac**: `brew install ngrok/ngrok/ngrok`
   - **Linux**: `snap install ngrok`

2. **Sign up and get an authtoken**:

   - Visit the [ngrok dashboard](https://dashboard.ngrok.com/signup) to sign up and get your authtoken.

3. **Add the authtoken to the ngrok agent**:
   ```sh
   ngrok config add-authtoken <YOUR_AUTHTOKEN>
   ```

### **Basic Commands**

- **Expose a local web server** (default port 8080):

  ```sh
  ngrok http 8080
  ```

  This command creates a public URL for your local web server running on port 8080.

- **Expose a specific file or folder**:

  ```sh
  ngrok http "file:///C:\path\to\your\file_or_folder"
  ```

  This command serves a specific file or folder over HTTP.

- **Expose an SSH server** (port 22):

  ```sh
  ngrok tcp 22
  ```

  This command creates a public TCP tunnel to your local SSH server.

- **Expose a Postgres server** (port 5432):

  ```sh
  ngrok tcp 5432
  ```

  This command creates a public TCP tunnel to your local Postgres server.

- **Expose a server on a different machine**:
  ```sh
  ngrok http 10.0.0.2:8080
  ```
  This command creates a public URL for a web server running on a different machine in your network.

### **Advanced Features**

- **Add Social Login**:

  - **Facebook**:
    ```sh
    ngrok http 8080 --oauth=facebook
    ```
  - **Google for specific email domains**:
    ```sh
    ngrok http 8080 --oauth=google --oauth-allow-domain=example.com
    ```
  - **GitHub with repository management consent**:
    ```sh
    ngrok http 8080 --oauth=github --oauth-scope=repo
    ```

- **Add Webhook Verification**:

  - **Slack**:
    ```sh
    ngrok http 8080 --verify-webhook=slack --verify-webhook-secret=secret-token
    ```
  - **Shopify**:
    ```sh
    ngrok http 8080 --verify-webhook=shopify --verify-webhook-secret=secret-token
    ```
  - **Stripe**:
    ```sh
    ngrok http 8080 --verify-webhook=stripe --verify-webhook-secret=secret-token
    ```

- **Other Cool Features**:
  - **Allow access only to your IP**:
    ```sh
    ngrok http 8080 --cidr-allow $(curl http://ifconfig.me/ip)/32
    ```
  - **Deny access to any IPv6 requesters**:
    ```sh
    ngrok http 8080 --cidr-deny ::/0
    ```
  - **Add Circuit Breaking** (reject requests when 5XX responses exceed a 15% ratio):
    ```sh
    ngrok http 8080 --circuit-breaker 0.15
    ```
  - **Add HTTP Compression** (gzip compress HTTP responses):
    ```sh
    ngrok http 8080 --compression
    ```
