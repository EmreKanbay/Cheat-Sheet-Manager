### Installation and Basic Commands

- **Install Apache**:

  ```bash
  sudo apt-get update
  sudo apt-get install apache2
  ```

  _Updates package lists and installs Apache._

- **Start/Stop/Restart Apache**:

  ```bash
  sudo systemctl start apache2
  sudo systemctl stop apache2
  sudo systemctl restart apache2
  ```

  _Manages the Apache service._

- **Check Apache Version**:

  ```bash
  apache2 -v
  ```

  _Displays the installed version of Apache._

- **Test Configuration**:
  ```bash
  apache2ctl -t
  ```
  _Tests the configuration file for syntax errors._

### Configuration File Locations

- **Main Configuration File**: `/etc/apache2/apache2.conf`
- **Virtual Host Configuration**: `/etc/apache2/sites-available/`
- **Enabled Virtual Host Symlink**: `/etc/apache2/sites-enabled/`

### Virtual Hosts

- **Basic Virtual Host Structure**:

  ```apache
  <VirtualHost *:80>
      ServerAdmin webmaster@localhost
      DocumentRoot /var/www/html
      ServerName example.com
      ErrorLog ${APACHE_LOG_DIR}/error.log
      CustomLog ${APACHE_LOG_DIR}/access.log combined
  </VirtualHost>
  ```

  _Defines a virtual host listening on port 80._

- **Redirect HTTP to HTTPS**:
  ```apache
  <VirtualHost *:80>
      ServerName example.com
      Redirect permanent / https://example.com/
  </VirtualHost>
  ```
  _Redirects all HTTP requests to HTTPS._

### Directives and Modules

- **DocumentRoot Directive**:

  ```apache
  DocumentRoot "/var/www/html"
  ```

  _Specifies the directory out of which you will serve your documents._

- **LoadModule Directive**:

  ```apache
  LoadModule rewrite_module modules/mod_rewrite.so
  ```

  _Loads a specific module, in this case, the rewrite module._

- **Rewrite Rule**:
  ```apache
  RewriteEngine On
  RewriteRule ^/oldpage$ /newpage [R=301,L]
  ```
  _Redirects requests from `/oldpage` to `/newpage`._

### SSL Configuration

- **SSL Certificate**:

  ```apache
  SSLCertificateFile /path/to/your/certificate.crt
  SSLCertificateKeyFile /path/to/your/private.key
  ```

  _Specifies the SSL certificate and key files._

- **Enable SSL**:
  ```apache
  <VirtualHost *:443>
      ServerName example.com
      SSLEngine on
      SSLCertificateFile /path/to/your/certificate.crt
      SSLCertificateKeyFile /path/to/your/private.key
  </VirtualHost>
  ```
  _Enables SSL for the virtual host._

### Managing Apache

- **View Apache Service Status**:

  ```bash
  sudo systemctl status apache2
  ```

  _Displays the status of the Apache service._

- **Enable Apache to Start on Boot**:

  ```bash
  sudo systemctl enable apache2
  ```

  _Ensures Apache starts on system boot._

- **Reload Apache**:
  ```bash
  sudo systemctl reload apache2
  ```
  _Reloads the Apache service without restarting._
