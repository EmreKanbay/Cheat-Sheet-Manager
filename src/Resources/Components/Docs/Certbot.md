### **Installation**

1. **Install Certbot**:
   - **Ubuntu/Debian**:
     ```sh
     sudo apt-get update
     sudo apt-get install certbot
     ```
   - **CentOS/RHEL**:
     ```sh
     sudo yum install epel-release
     sudo yum install certbot
     ```

### **Basic Commands**

- **Obtain and Install a Certificate for Apache**:

  ```sh
  sudo certbot --apache
  ```

  This command obtains and installs a certificate for your Apache server automatically.

- **Obtain and Install a Certificate for Nginx**:

  ```sh
  sudo certbot --nginx
  ```

  This command obtains and installs a certificate for your Nginx server automatically.

- **Obtain a Certificate Without Installing**:

  ```sh
  sudo certbot certonly --standalone
  ```

  This command obtains a certificate but does not install it, useful for custom setups.

- **Renew All Certificates**:
  ```sh
  sudo certbot renew
  ```
  This command renews all certificates that are near expiry.

### **Advanced Commands**

- **Specify Domains**:

  ```sh
  sudo certbot --apache -d example.com -d www.example.com
  ```

  This command obtains a certificate for the specified domains using Apache.

- **Use Webroot for Authentication**:

  ```sh
  sudo certbot certonly --webroot -w /var/www/html -d example.com
  ```

  This command uses the webroot plugin for authentication.

- **Test Certificate from Staging Server**:

  ```sh
  sudo certbot --nginx --staging
  ```

  This command obtains a test certificate from the staging server using Nginx.

- **Dry Run Renewal**:
  ```sh
  sudo certbot renew --dry-run
  ```
  This command tests the renewal process without actually renewing the certificates.

### **Managing Certificates**

- **List Certificates**:

  ```sh
  sudo certbot certificates
  ```

  This command displays information about the certificates you have.

- **Revoke a Certificate**:

  ```sh
  sudo certbot revoke --cert-name example.com
  ```

  This command revokes a specified certificate.

- **Delete a Certificate**:
  ```sh
  sudo certbot delete --cert-name example.com
  ```
  This command deletes a specified certificate.

### **Account Management**

- **Register an Account**:

  ```sh
  sudo certbot register --email your-email@example.com --agree-tos
  ```

  This command creates an ACME account with your email and agrees to the terms of service.

- **Update Account Information**:
  ```sh
  sudo certbot update_account --email new-email@example.com
  ```
  This command updates your ACME account information.

### **Options**

- **Help**:

  ```sh
  sudo certbot --help
  ```

  This command shows the help message and exits.

- **Verbose Output**:
  ```sh
  sudo certbot -v
  ```
  This command increases the verbosity of the output.
