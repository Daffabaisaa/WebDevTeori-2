CREATE TABLE public.customers ( 
	id SERIAL PRIMARY KEY, 
	name VARCHAR(100), 
	email VARCHAR(100), 
	created_at TIMESTAMP 
);

INSERT INTO public.customers (name, email, created_at)
VALUES ('Alice', 'alice@example.com', NOW()), 
     ('Bob', 'bob@example.com', NOW());

CREATE PUBLICATION my_publication FOR TABLE public.customers;

SELECT * FROM pg_publication_tables WHERE pubname = 'my_publication';


INSERT INTO public.customers (name, email, created_at)
VALUES ('Charlie', 'charlie@example.com', NOW());

SELECT * FROM pg_publication;

SELECT * FROM pg_publication_tables;

SELECT * FROM pg_stat_replication;

SHOW listen_addresses;



