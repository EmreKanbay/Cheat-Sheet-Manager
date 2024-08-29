Sent by Copilot: Sure! Here's a cheat sheet for **SSH (Secure Shell)** with brief explanations on how to use it and what each command does:

### **Basic Commands**

- **Connect to a Remote Server**:

  ```sh
  ssh user@hostname
  ```

  This command connects to a remote server as the specified user.

- **Connect to a Remote Server on a Non-Standard Port**:

  ```sh
  ssh -p 2222 user@hostname
  ```

  This command connects to a remote server on port 2222.

- **Use a Specific Private Key**:

  ```sh
  ssh -i /path/to/private_key user@hostname
  ```

  This command connects to a remote server using a specific private key file.

- **Run a Command on a Remote Server**:
  ```sh
  ssh user@hostname 'command'
  ```
  This command runs the specified command on the remote server.

### **File Transfer Commands**

- **Copy a File from Local to Remote**:

  ```sh
  scp /path/to/local_file user@hostname:/path/to/remote_directory
  ```

  This command copies a file from the local machine to the remote server.

- **Copy a File from Remote to Local**:

  ```sh
  scp user@hostname:/path/to/remote_file /path/to/local_directory
  ```

  This command copies a file from the remote server to the local machine.

- **Copy a Directory Recursively**:
  ```sh
  scp -r /path/to/local_directory user@hostname:/path/to/remote_directory
  ```
  This command copies a directory and its contents recursively from the local machine to the remote server.

### **Tunneling and Port Forwarding**

- **Local Port Forwarding**:

  ```sh
  ssh -L local_port:remote_address:remote_port user@hostname
  ```

  This command forwards a local port to a remote address and port.

- **Remote Port Forwarding**:

  ```sh
  ssh -R remote_port:local_address:local_port user@hostname
  ```

  This command forwards a remote port to a local address and port.

- **Dynamic Port Forwarding**:
  ```sh
  ssh -D local_port user@hostname
  ```
  This command sets up a SOCKS proxy on the local machine.

### **Key Management**

- **Generate a New SSH Key Pair**:

  ```sh
  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

  This command generates a new SSH key pair with RSA encryption.

- **Add SSH Key to SSH Agent**:

  ```sh
  ssh-add /path/to/private_key
  ```

  This command adds a private key to the SSH agent for easier authentication.

- **Copy SSH Key to Remote Server**:
  ```sh
  ssh-copy-id user@hostname
  ```
  This command copies your public key to the remote server for passwordless login.

### **Advanced Commands**

- **Enable X11 Forwarding**:

  ```sh
  ssh -X user@hostname
  ```

  This command enables X11 forwarding, allowing you to run graphical applications on the remote server.

- **Enable Compression**:

  ```sh
  ssh -C user@hostname
  ```

  This command enables compression, which can speed up the transfer of data over slow networks.

- **Force Pseudo-Terminal Allocation**:
  ```sh
  ssh -t user@hostname
  ```
  This command forces pseudo-terminal allocation, useful for running screen-based programs on the remote server.

### **Configuration**

- **Edit SSH Configuration File**:

  ```sh
  nano ~/.ssh/config
  ```

  This command opens the SSH configuration file for editing. You can add host-specific configurations here.

- **Example Configuration**:
  ```sh
  Host example
      HostName example.com
      User your_username
      Port 2222
      IdentityFile ~/.ssh/id_rsa
  ```
  This configuration allows you to connect to `example.com` using `ssh example` with the specified settings.

This should cover the basics and some advanced features of SSH. For more detailed information, you can refer to the [SSH documentation](https://www.openssh.com/manual.html) [^1^][^2^][^3^].

Is there anything specific you would like to know more about?
