CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE IF NOT EXISTS authors (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    middle_name VARCHAR(100)
);

INSERT INTO 
  authors (first_name, last_name, middle_name)
VALUES 
  ('Rodrigo', 'Tamar', 'Matheus'),
  ('Jorge', 'Martin', 'Rolando');


CREATE TABLE IF NOT EXISTS books (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    book_name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS contacts (
  author_id INT NOT NULL,
  contact VARCHAR(15),
  FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO 
  books (book_name)
VALUES 
  ('Seu Sergio e Capitu'),
  ('Destro e Canhoto');

