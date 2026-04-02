CREATE DATABASE shop;
USE shop;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10,2)
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    quantity INT,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO products (name, price) VALUES
('Laptop', 1200.00),
('Headphones', 150.00),
('Keyboard', 80.00),
('Mouse', 125.00),
('Pen', 500.00),
('IPhone', 1500.00),
('Airpods', 200.00),
('Charger', 300.00);