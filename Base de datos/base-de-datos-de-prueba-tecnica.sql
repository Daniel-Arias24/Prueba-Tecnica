CREATE DATABASE pruebaTecnica;
USE pruebaTecnica;

CREATE TABLE tipo_identificacion (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
);

CREATE TABLE pais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS tipo_identificacion;

DROP TABLE IF EXISTS pais;

SHOW TABLES;

CREATE TABLE cliente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo_identificacion VARCHAR(50) NOT NULL,
  numero_identificacion VARCHAR(50) NOT NULL,
  nombres VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  direccion VARCHAR(200),
  ciudad VARCHAR(100) NOT NULL,
  departamento VARCHAR(100) NOT NULL,
  pais VARCHAR(100) NOT NULL,
  marca VARCHAR(50) NOT NULL
);
show tables;

SELECT * FROM cliente















