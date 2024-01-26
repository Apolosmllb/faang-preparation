CREATE DATABASE IF NOT EXISTS `test`;

USE `test`;

CREATE TABLE IF NOT EXISTS employees(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  age INT
);

SELECT * FROM employees;

