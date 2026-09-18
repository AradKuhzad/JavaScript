client.query(
    "INSERT INTO users (name, age) VALUES ($1, $2)",
    ["Arad", 16]
);
client.query(
    "INSERT INTO users (name, age) VALUES ($1, $2)",
    ["Sam", 20]
);



-- ================================
-- E-Commerce Database
-- ================================

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(30) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,

    FOREIGN KEY (order_id)
        REFERENCES orders(id),

    FOREIGN KEY (product_id)
        REFERENCES products(id)
);

-- ================================
-- Users
-- ================================

INSERT INTO users (username, email, age)
VALUES
    ('Arad', 'arad@example.com', 16),
    ('Sam', 'sam@example.com', 20),
    ('Alex', 'alex@example.com', 24),
    ('John', 'john@example.com', 28);

-- ================================
-- Products
-- ================================

INSERT INTO products (name, description, price, stock)
VALUES
    ('Laptop', 'A powerful laptop for programming', 999.99, 10),
    ('Keyboard', 'Mechanical keyboard', 89.99, 25),
    ('Mouse', 'Wireless gaming mouse', 49.99, 40),
    ('Monitor', '27 inch Full HD monitor', 249.99, 15),
    ('Headphones', 'Wireless headphones', 129.99, 20);

-- ================================
-- Orders
-- ================================

INSERT INTO orders (user_id, total_price, status)
VALUES
    (1, 1089.98, 'completed'),
    (2, 249.99, 'pending'),
    (3, 179.98, 'shipped');

-- ================================
-- Order Items
-- ================================

INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES
    (1, 1, 1, 999.99),
    (1, 2, 1, 89.99),
    (2, 4, 1, 249.99),
    (3, 3, 1, 49.99),
    (3, 5, 1, 129.99);

-- ================================
-- Queries
-- ================================

SELECT * FROM users;

SELECT * FROM products;

SELECT * FROM orders;

SELECT
    users.username,
    orders.id AS order_id,
    orders.total_price,
    orders.status
FROM users
JOIN orders
    ON users.id = orders.user_id;

SELECT
    products.name,
    order_items.quantity,
    order_items.price
FROM order_items
JOIN products
    ON order_items.product_id = products.id;

-- ================================
-- Update Examples
-- ================================

UPDATE products
SET stock = stock - 1
WHERE id = 1;

UPDATE orders
SET status = 'completed'
WHERE id = 2;

-- ================================
-- Delete Examples
-- ================================

DELETE FROM users
WHERE id = 4;

-- ================================
-- Useful Queries
-- ================================

SELECT *
FROM products
WHERE price > 100;

SELECT *
FROM products
WHERE stock > 10;

SELECT COUNT(*) AS total_users
FROM users;

SELECT AVG(price) AS average_product_price
FROM products;

SELECT MAX(price) AS most_expensive_product
FROM products;