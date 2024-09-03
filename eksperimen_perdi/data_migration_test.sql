-- Pembuatan Tabel Database untuk uji coba

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE transactions (
    transaction_id SERIAL PRIMARY KEY,
    order_id INT,
    amount NUMERIC(10, 2),
    transaction_date DATE,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

-- Data baru untuk uji coba 

INSERT INTO customers (name) VALUES ('John Doe'), ('Jane Smith');
INSERT INTO orders (customer_id, order_date) VALUES (1, '2024-08-27'), (2, '2024-08-28');
INSERT INTO transactions (order_id, amount, transaction_date) VALUES (1, 150.00, '2024-08-27'), (2, 200.00, '2024-08-28');


-- Data baru untuk uji coba transaksi aktif
BEGIN;
INSERT INTO orders (customer_id, order_date) VALUES (1, '2024-08-29');
INSERT INTO transactions (order_id, amount, transaction_date) VALUES (currval('orders_order_id_seq'), 300.00, '2024-08-29');
-- Biarkan transaksi ini tetap aktif tanpa COMMIT
