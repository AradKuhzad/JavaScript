const { Client } = require('pg');
const client = new Client({
    user: "postgres",
    password: "aradkuhzad2026Pgre",
    host: "localhost",
    port: 5432,
    database: "mydb"
})


async function main() {
    try {
        await client.connect();

        console.log("Connected to PostgreSQL database");

        await client.query(
            "INSERT INTO users (name, age) VALUES ($1, $2)",
            ["Arad", 16]
        );

        await client.query(
            "INSERT INTO users (name, age) VALUES ($1, $2)",
            ["Sam", 20]
        );

        console.log("Data inserted successfully");

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.end();
    }
}

main();