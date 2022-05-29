
-- Exercise XP
-- Exercise 1 : Items And Customers

-- 1:
CREATE TABLE students ( 
	id SERIAL PRIMARY KEY,
	first_name TEXT,
	last_name TEXT,
	birth_date DATE
);

-- 2:
INSERT INTO public.customers(
	id, first_name, last_name)
	VALUES (1, 'Grag', 'Jones');
	INSERT INTO public.customers(
	id, first_name, last_name)
	VALUES (2, 'Sandra', 'Jones');
	INSERT INTO public.customers(
	id, first_name, last_name)
	VALUES (3, 'Scott', 'Scott');
	INSERT INTO public.customers(
	id, first_name, last_name)
	VALUES (4, 'Trevor', 'Green');
	INSERT INTO public.customers(
	id, first_name, last_name)
	VALUES (5, 'Melanie', 'Johnson');

-- 3:
SELECT *
	FROM public.customers
	WHERE last_name='Smith';
	SELECT *
	FROM public.customers
	WHERE last_name='Jones';
	SELECT *
	FROM public.customers
	WHERE last_name='Smith';
	
	SELECT *
	FROM public.customers
	WHERE first_name != 'Scott';

SELECT * FROM public.items WHERE price > 80;

SELECT * FROM public.items WHERE price < 300;

-- Exercise XP +
SELECT *
	FROM public.students;
	
-- 	Fetch the student which id is equal to 2.
	SELECT * FROM public.students
	WHERE id=2;
	
-- 	Fetch the student whose last_name is Benichou AND first_name is Marc.
	SELECT * FROM public.students
	WHERE last_name='Benichou' AND first_name='Marc';
	
-- 	Fetch the students whose last_names are Benichou OR first_names are Marc.
	SELECT * FROM public.students
	WHERE last_name='Benichou' OR first_name='Marc';
	
-- 	Fetch the students whose first_names contain the letter a
	SELECT * FROM public.students
	WHERE first_name LIKE '%a%';
	
-- 	Fetch the students whose first_names start with the letter a.
	SELECT * FROM public.students
	WHERE first_name LIKE 'a%';
	
-- 	Fetch the students whose first_names end with the letter a.
	SELECT * FROM public.students
	WHERE first_name LIKE '%a';
	
-- 	Fetch the students whose second to last letter of their first_names are a
--  	SELECT FROM public.students
--  	WHERE SUBSTRING(first_name, 2, LENGTH(first_name)) = 'a';
	
-- 	Fetch the students whose id’s are equal to 1 AND 3
    SELECT * FROM public.students
	WHERE id=1 OR id=3;
	
-- -- 	Fetch the students whose birth_dates are equal to or come after 1/01/2000
    SELECT * FROM public.students
	WHERE birth_date= '1/01/2000' OR  birth_date > '1/01/2000';
	
-- 	Exercise XP Gold

-- Fetch the first four students. You have to order the four students alphabetically by last_name
SELECT * FROM public.students ORDER BY first_name ASC LIMIT 4;

-- Fetch the details of the youngest student.
--  select * from public.students
--   where dob = (select max(birth_date) from public.students)

-- Fetch three students skipping the first two students.
SELECT * FROM students LIMIT 3 OFFSET 2;



	
	
	
	
	
	
	