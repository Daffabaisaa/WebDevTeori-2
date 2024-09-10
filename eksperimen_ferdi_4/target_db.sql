CREATE TABLE public.customers ( 
	id SERIAL PRIMARY KEY, 
	name VARCHAR(100), 
	email VARCHAR(100), 
	created_at TIMESTAMP 
);

INSERT INTO public.customers (name, email, created_at)
VALUES ('Alice', 'alice@example.com', NOW()), 
     ('Bob', 'bob@example.com', NOW());

CREATE SUBSCRIPTION my_subscription
CONNECTION 'host=127.0.0.1 dbname=source_db user=postgres password=postgres'
PUBLICATION my_publication;

SELECT * FROM pg_stat_subscription;

SELECT * FROM public.customers;

SELECT * FROM pg_stat_wal_receiver;

ALTER SUBSCRIPTION my_subscription REFRESH PUBLICATION;

SELECT * FROM pg_subscription;

SELECT * FROM pg_subscription_rel;

SELECT * FROM pg_stat_wal_receiver;

SHOW listen_addresses;










