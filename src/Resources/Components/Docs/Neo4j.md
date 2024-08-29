### Basic Commands

- **CREATE**: Adds nodes and relationships.

  ```cypher
  CREATE (n:Person {name: 'Alice', age: 30});
  CREATE (n:Person {name: 'Bob'})-[:KNOWS]->(m:Person {name: 'Charlie'});
  ```

- **MATCH**: Finds nodes and relationships.

  ```cypher
  MATCH (n:Person) RETURN n;
  MATCH (n:Person)-[:KNOWS]->(m:Person) RETURN n, m;
  ```

- **MERGE**: Ensures that a pattern exists in the graph.
  ```cypher
  MERGE (n:Person {name: 'Alice'})-[:KNOWS]->(m:Person {name: 'Bob'});
  ```

### Updating Data

- **SET**: Updates properties on nodes or relationships.

  ```cypher
  MATCH (n:Person {name: 'Alice'}) SET n.age = 31;
  ```

- **REMOVE**: Removes properties or labels.

  ```cypher
  MATCH (n:Person {name: 'Alice'}) REMOVE n.age;
  ```

- **DELETE**: Deletes nodes or relationships.
  ```cypher
  MATCH (n:Person {name: 'Alice'}) DELETE n;
  ```

### Querying Data

- **RETURN**: Retrieves data from the database.

  ```cypher
  MATCH (n:Person) RETURN n.name, n.age;
  ```

- **WHERE**: Adds conditions to queries.

  ```cypher
  MATCH (n:Person) WHERE n.age > 25 RETURN n;
  ```

- **ORDER BY**: Sorts the results.

  ```cypher
  MATCH (n:Person) RETURN n ORDER BY n.age DESC;
  ```

- **LIMIT**: Limits the number of results.
  ```cypher
  MATCH (n:Person) RETURN n LIMIT 10;
  ```

### Advanced Commands

- **CREATE INDEX**: Creates an index on a property.

  ```cypher
  CREATE INDEX FOR (n:Person) ON (n.name);
  ```

- **DROP INDEX**: Deletes an index.

  ```cypher
  DROP INDEX index_name;
  ```

- **USING PERIODIC COMMIT**: Optimizes large data imports.
  ```cypher
  USING PERIODIC COMMIT 500
  LOAD CSV WITH HEADERS FROM 'file:///data.csv' AS row
  CREATE (:Person {name: row.name, age: toInteger(row.age)});
  ```

### Aggregation

- **COUNT**: Counts the number of matching nodes or relationships.

  ```cypher
  MATCH (n:Person) RETURN COUNT(n);
  ```

- **SUM, AVG, MIN, MAX**: Performs aggregation on numeric properties.
  ```cypher
  MATCH (n:Person) RETURN SUM(n.age), AVG(n.age), MIN(n.age), MAX(n.age);
  ```

### Relationships

- **CREATE RELATIONSHIP**: Adds a relationship between nodes.

  ```cypher
  MATCH (a:Person {name: 'Alice'}), (b:Person {name: 'Bob'})
  CREATE (a)-[:KNOWS]->(b);
  ```

- **DELETE RELATIONSHIP**: Removes a relationship.
  ```cypher
  MATCH (a:Person {name: 'Alice'})-[r:KNOWS]->(b:Person {name: 'Bob'})
  DELETE r;
  ```
