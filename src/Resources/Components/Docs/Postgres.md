### Connection and Database Management

- **Connect to PostgreSQL**:

  ```sh
  psql -h hostname -U username -d dbname
  ```

  Connect to a PostgreSQL database.

- **List Databases**:

  ```sql
  \l
  ```

  Show all databases.

- **Create Database**:

  ```sql
  CREATE DATABASE dbname;
  ```

  Create a new database.

- **Drop Database**:
  ```sql
  DROP DATABASE dbname;
  ```
  Delete a database.

### Table Management

- **Create Table**:

  ```sql
  CREATE TABLE tablename (
    column1 datatype,
    column2 datatype,
    ...
  );
  ```

  Create a new table with specified columns and data types.

- **Drop Table**:

  ```sql
  DROP TABLE tablename;
  ```

  Delete a table.

- **Alter Table**:
  ```sql
  ALTER TABLE tablename
  ADD column datatype;
  ```
  Add a new column to an existing table.

### Data Manipulation

- **Insert Data**:

  ```sql
  INSERT INTO tablename (column1, column2, ...)
  VALUES (value1, value2, ...);
  ```

  Insert a new row into a table.

- **Update Data**:

  ```sql
  UPDATE tablename
  SET column1 = value1, column2 = value2, ...
  WHERE condition;
  ```

  Update existing rows in a table.

- **Delete Data**:
  ```sql
  DELETE FROM tablename
  WHERE condition;
  ```
  Delete rows from a table.

### Querying Data

- **Select Data**:

  ```sql
  SELECT column1, column2, ...
  FROM tablename
  WHERE condition;
  ```

  Retrieve specific columns from a table.

- **Join Tables**:
  ```sql
  SELECT a.column1, b.column2, ...
  FROM table1 a
  JOIN table2 b ON a.common_column = b.common_column;
  ```
  Combine rows from two or more tables based on a related column.

### Indexes and Constraints

- **Create Index**:

  ```sql
  CREATE INDEX indexname
  ON tablename (column);
  ```

  Create an index on a column to improve query performance.

- **Add Primary Key**:

  ```sql
  ALTER TABLE tablename
  ADD PRIMARY KEY (column);
  ```

  Add a primary key constraint to a column.

- **Add Foreign Key**:
  ```sql
  ALTER TABLE tablename
  ADD FOREIGN KEY (column)
  REFERENCES other_table (column);
  ```
  Add a foreign key constraint to a column.

### User Management

- **Create User**:

  ```sql
  CREATE USER username WITH PASSWORD 'password';
  ```

  Create a new user with a password.

- **Grant Privileges**:

  ```sql
  GRANT ALL PRIVILEGES ON DATABASE dbname TO username;
  ```

  Grant all privileges on a database to a user.

- **Revoke Privileges**:
  ```sql
  REVOKE ALL PRIVILEGES ON DATABASE dbname FROM username;
  ```
  Revoke all privileges on a database from a user.
