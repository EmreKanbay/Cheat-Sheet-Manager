### Connection and Server Management

- **Start Redis Server**:

  ```sh
  redis-server
  ```

  Start the Redis server.

- **Connect to Redis CLI**:
  ```sh
  redis-cli
  ```
  Connect to the Redis command-line interface.

### Basic Commands

- **Ping Server**:

  ```sh
  PING
  ```

  Check if the server is running.

- **Set Key-Value**:

  ```sh
  SET key value
  ```

  Set a key to hold the string value.

- **Get Value**:

  ```sh
  GET key
  ```

  Get the value of a key.

- **Delete Key**:
  ```sh
  DEL key
  ```
  Delete a key.

### Data Types

- **Strings**:

  ```sh
  SET key value
  GET key
  ```

  Store and retrieve a string value.

- **Lists**:

  ```sh
  LPUSH key value
  LRANGE key start stop
  ```

  Add a value to a list and retrieve elements from a list.

- **Sets**:

  ```sh
  SADD key value
  SMEMBERS key
  ```

  Add a value to a set and get all members of a set.

- **Hashes**:

  ```sh
  HSET key field value
  HGET key field
  ```

  Set a field in a hash and get the value of a field in a hash.

- **Sorted Sets**:
  ```sh
  ZADD key score value
  ZRANGE key start stop
  ```
  Add a value to a sorted set with a score and retrieve elements from a sorted set.

### Advanced Commands

- **Increment Value**:

  ```sh
  INCR key
  ```

  Increment the integer value of a key by one.

- **Expire Key**:

  ```sh
  EXPIRE key seconds
  ```

  Set a timeout on a key.

- **Persist Key**:
  ```sh
  PERSIST key
  ```
  Remove the expiration from a key.

### Transactions

- **Start Transaction**:

  ```sh
  MULTI
  ```

  Start a transaction.

- **Execute Transaction**:

  ```sh
  EXEC
  ```

  Execute all commands issued after MULTI.

- **Discard Transaction**:
  ```sh
  DISCARD
  ```
  Discard all commands issued after MULTI.

### Pub/Sub

- **Subscribe to Channel**:

  ```sh
  SUBSCRIBE channel
  ```

  Subscribe to a channel.

- **Publish to Channel**:
  ```sh
  PUBLISH channel message
  ```
  Publish a message to a channel.

### Backup and Restore

- **Save Data**:

  ```sh
  SAVE
  ```

  Synchronously save the dataset to disk.

- **Background Save**:

  ```sh
  BGSAVE
  ```

  Save the dataset to disk in the background.

- **Restore Data**:
  ```sh
  RESTORE key ttl serialized-value
  ```
  Create a key using the provided serialized value.
