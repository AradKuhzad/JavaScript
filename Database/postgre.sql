client.query(
    "INSERT INTO users (name, age) VALUES ($1, $2)",
    ["Arad", 16]
);
client.query(
    "INSERT INTO users (name, age) VALUES ($1, $2)",
    ["Sam", 20]
);


