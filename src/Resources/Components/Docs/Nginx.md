### Installation and Basic Commands

- **Install NGINX**:

  ```bash
  sudo apt-get update
  sudo apt-get install nginx
  ```

  _Updates package lists and installs NGINX._

- **Start/Stop/Restart NGINX**:

  ```bash
  sudo service nginx start
  sudo service nginx stop
  sudo service nginx restart
  ```

  _Manages the NGINX service._

- **Check NGINX Configuration**:
  ```bash
  nginx -t
  ```
  _Tests the configuration file for syntax errors._

### Configuration File Locations

- **Main Configuration File**: `/etc/nginx/nginx.conf`
- **Server Block Configuration**: `/etc/nginx/sites-available/`
- **Enabled Server Block Symlink**: `/etc/nginx/sites-enabled/`

### Server Blocks

- **Basic Server Block Structure**:

  ```nginx
  server {
      listen 80;
      server_name example.com www.example.com;
      location / {
          # Configuration for handling requests
      }
  }
  ```

  _Defines a server block listening on port 80 for the specified domain._

- **Redirect HTTP to HTTPS**:
  ```nginx
  server {
      listen 80;
      server_name example.com www.example.com;
      return 301 https://$host$request_uri;
  }
  ```
  _Redirects all HTTP requests to HTTPS._

### Locations and Directives

- **Root Directive**:

  ```nginx
  location / {
      root /path/to/your/files;
      index index.html;
  }
  ```

  _Specifies the root directory and default index file._

- **Proxy Pass**:

  ```nginx
  location /app {
      proxy_pass http://backend_server;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
  }
  ```

  _Forwards requests to a backend server._

- **URL Rewriting**:
  ```nginx
  location /blog {
      rewrite ^/blog/(.*)$ /$1 break;
  }
  ```
  _Rewrites URLs for specific locations._

### SSL Configuration

- **SSL Certificate**:

  ```nginx
  ssl_certificate /path/to/your/certificate.crt;
  ssl_certificate_key /path/to/your/private.key;
  ```

  _Specifies the SSL certificate and key files._

- **Enable SSL**:

  ```nginx
  server {
      listen 443 ssl;
      server_name example.com;
      # SSL configuration here
  }
  ```

  _Enables SSL for the server block._

- **SSL Redirect**:
  ```nginx
  server {
      listen 80;
      server_name example.com;
      return 301 https://$host$request_uri;
  }
  ```
  _Redirects HTTP traffic to HTTPS._

### Load Balancing

- **Round Robin Load Balancing**:
  ```nginx
  upstream backend {
      server backend1.example.com;
      server backend2.example.com;
  }
  server {
      location / {
          proxy_pass http://backend;
      }
  }
  ```
  _Distributes requests across multiple backend servers._
