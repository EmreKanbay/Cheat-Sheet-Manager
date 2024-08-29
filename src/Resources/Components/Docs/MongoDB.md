### Connection and Database Management

- **Connect to MongoDB**:

  ```sh
  mongosh --host <host> --port <port> --authenticationDatabase admin -u <user> -p <pwd>
  ```

  Connect to a MongoDB instance.

- **Show Databases**:

  ```sh
  show dbs
  ```

  List all databases.

- **Switch Database**:

  ```sh
  use <database_name>
  ```

  Switch to a specific database.

- **Create Database**:

  ```sh
  use <database_name>
  ```

  Create and switch to a new database.

- **Drop Database**:
  ```sh
  db.dropDatabase()
  ```
  Delete the current database.

### Collection Management

- **Show Collections**:

  ```sh
  show collections
  ```

  List all collections in the current database.

- **Create Collection**:

  ```sh
  db.createCollection("<collection_name>")
  ```

  Create a new collection.

- **Drop Collection**:
  ```sh
  db.<collection_name>.drop()
  ```
  Delete a collection.

### CRUD Operations

- **Insert Document**:

  ```sh
  db.<collection_name>.insertOne({ key: "value" })
  ```

  Insert a single document into a collection.

- **Insert Multiple Documents**:

  ```sh
  db.<collection_name>.insertMany([{ key1: "value1" }, { key2: "value2" }])
  ```

  Insert multiple documents into a collection.

- **Find Documents**:

  ```sh
  db.<collection_name>.find({ key: "value" })
  ```

  Retrieve documents matching a query.

- **Update Document**:

  ```sh
  db.<collection_name>.updateOne({ key: "value" }, { $set: { key: "new_value" } })
  ```

  Update a single document.

- **Update Multiple Documents**:

  ```sh
  db.<collection_name>.updateMany({ key: "value" }, { $set: { key: "new_value" } })
  ```

  Update multiple documents.

- **Delete Document**:

  ```sh
  db.<collection_name>.deleteOne({ key: "value" })
  ```

  Delete a single document.

- **Delete Multiple Documents**:
  ```sh
  db.<collection_name>.deleteMany({ key: "value" })
  ```
  Delete multiple documents.

### Indexing

- **Create Index**:

  ```sh
  db.<collection_name>.createIndex({ key: 1 })
  ```

  Create an index on a field.

- **Drop Index**:
  ```sh
  db.<collection_name>.dropIndex({ key: 1 })
  ```
  Delete an index on a field.

### Aggregation

- **Aggregation Pipeline**:
  ```sh
  db.<collection_name>.aggregate([
    { $match: { key: "value" } },
    { $group: { _id: "$key", total: { $sum: "$amount" } } }
  ])
  ```
  Perform aggregation operations on documents.

### User Management

- **Create User**:

  ```sh
  db.createUser({
    user: "username",
    pwd: "password",
    roles: [{ role: "readWrite", db: "database_name" }]
  })
  ```

  Create a new user with specified roles.

- **Grant Role to User**:

  ```sh
  db.grantRolesToUser("username", [{ role: "role", db: "database_name" }])
  ```

  Grant a role to an existing user.

- **Revoke Role from User**:
  ```sh
  db.revokeRolesFromUser("username", [{ role: "role", db: "database_name" }])
  ```
  Revoke a role from an existing user.
