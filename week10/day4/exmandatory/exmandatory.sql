-- Exercise 1 : Items And Customers

-- 1:

SELECT price
FROM public.items ORDER BY price;

-- 2:
SELECT price
FROM public.items  WHERE price >= 80 ORDER BY price DESC
-- 3:
select f_name , customer_id  
FROM public.customers ORDER BY f_name LIMIT 3;

-- 4:
SELECT l_name 
FROM public.customers ORDER BY l_name DESC

-- Exercise 2 : Dvdrental Database

-- 1:
SELECT *
FROM public.customer;

-- 2:
SELECT (first_name, last_name)  AS full_name
FROM public.customer;

-- 3:
SELECT DISTINCT create_date 
FROM public.customer;

-- 4:
SELECT * 
FROM public.customer ORDER BY first_name DESC;

-- 5:
SELECT film_id, title, release_year, description, rental_rate
FROM public.film ORDER BY rental_rate ASC

-- 6:
SELECT address, phone
FROM public.address WHERE district = 'Texas'

-- 7:
SELECT *
FROM public.film WHERE film_id = 15 OR film_id = 150

-- 8:
SELECT film_id, title, description, length, rental_rate
FROM public.film WHERE title='High School Musical'

-- 9:
SELECT film_id, title, description, length, rental_rate
FROM public.film WHERE title LIKE 'Hi%'

-- 10:
SELECT * 
FROM public.payment ORDER BY amount ASC LIMIT 10

-- 11:
-- SELECT * 
-- FROM public.payment ORDER BY amount ASC OFFSET 10;

-- 12:
SELECT amount, payment_date, customer.customer_id
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id ORDER BY customer.customer_id;

-- 13:
-- SELECT * FROM film
-- INNER JOIN inventory
-- ON film.film_id = inventory.film_id
-- WHERE inventory_id is NULL

-- 14:
SELECT city, country
FROM city
INNER JOIN country
ON city.country_id = country.country_id;

-- 15:
SELECT amount, payment_date, customer.customer_id, customer.first_name, customer.last_name
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id ORDER BY payment.staff_id;




