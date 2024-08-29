### Keyspace Commands

- **CREATE KEYSPACE**: Defines a new keyspace.

  ```sql
  CREATE KEYSPACE keyspace_name WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};
  ```

- **ALTER KEYSPACE**: Modifies the properties of an existing keyspace.

  ```sql
  ALTER KEYSPACE keyspace_name WITH replication = {'class': 'NetworkTopologyStrategy', 'datacenter1': 3};
  ```

- **DROP KEYSPACE**: Deletes a keyspace and all its data.
  ```sql
  DROP KEYSPACE keyspace_name;
  ```

### Table Commands

- **CREATE TABLE**: Creates a new table.

  ```sql
  CREATE TABLE keyspace_name.table_name (
      id UUID PRIMARY KEY,
      name text,
      age int
  );
  ```

- **ALTER TABLE**: Modifies the structure of an existing table.

  ```sql
  ALTER TABLE keyspace_name.table_name ADD email text;
  ```

- **DROP TABLE**: Deletes a table.
  ```sql
  DROP TABLE keyspace_name.table_name;
  ```

### Data Manipulation Commands

- **INSERT**: Adds a new row or updates an existing row.

  ```sql
  INSERT INTO keyspace_name.table_name (id, name, age) VALUES (uuid(), 'John Doe', 30);
  ```

- **UPDATE**: Modifies one or more columns in a row.

  ```sql
  UPDATE keyspace_name.table_name SET age = 31 WHERE id = some_uuid;
  ```

- **DELETE**: Removes data from one or more columns or deletes the entire row.
  ```sql
  DELETE FROM keyspace_name.table_name WHERE id = some_uuid;
  ```

### Query Commands

- **SELECT**: Retrieves data from a table.

  ```sql
  SELECT * FROM keyspace_name.table_name WHERE id = some_uuid;
  ```

- **TRUNCATE**: Removes all data from a table.
  ```sql
  TRUNCATE keyspace_name.table_name;
  ```

### User and Role Management

- **CREATE ROLE**: Creates a new role.

  ```sql
  CREATE ROLE role_name WITH PASSWORD = 'password' AND LOGIN = true;
  ```

- **ALTER ROLE**: Modifies an existing role.

  ```sql
  ALTER ROLE role_name WITH PASSWORD = 'new_password';
  ```

- **DROP ROLE**: Deletes a role.
  ```sql
  DROP ROLE role_name;
  ```

### Index Commands

- **CREATE INDEX**: Creates an index on a column.

  ```sql
  CREATE INDEX ON keyspace_name.table_name (column_name);
  ```

- **DROP INDEX**: Deletes an index.
  ```sql
  DROP INDEX keyspace_name.index_name;
  ```

### Batch Commands

- **BEGIN BATCH**: Groups multiple commands into a single batch.
  ```sql
  BEGIN BATCH
  INSERT INTO keyspace_name.table_name (id, name, age) VALUES (uuid(), 'Jane Doe', 25);
  UPDATE keyspace_name.table_name SET age = 26 WHERE id = some_uuid;
  APPLY BATCH;
  ```
