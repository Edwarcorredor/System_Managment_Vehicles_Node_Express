-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS vehiculos_autonomos;

-- Usar la base de datos creada
USE vehiculos_autonomos;

-- Creación de la tabla EMPRESA
CREATE TABLE IF NOT EXISTS empresa(
  id INT AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  telefono VARCHAR(20),
  email VARCHAR(100),
  sitio_web VARCHAR(100),
  PRIMARY KEY (id)
);

-- Creación de la tabla MARCAS
CREATE TABLE IF NOT EXISTS marca(
  id INT AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  pais_origen VARCHAR(100),
  sitio_web VARCHAR(100),
  PRIMARY KEY (id)
);

-- Creación de la tabla MODELOS
CREATE TABLE IF NOT EXISTS modelo(
  id INT AUTO_INCREMENT,
  id_marca INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  anio_lanzamiento INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_marca) REFERENCES marca (id)
);

-- Creación de la tabla PROVEEDOR
CREATE TABLE IF NOT EXISTS proveedor(
  id INT AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  telefono VARCHAR(20),
  email VARCHAR(100),
  sitio_web VARCHAR(100),
  PRIMARY KEY (id)
);

-- Creación de la tabla SUCURSALES_PROVEEDOR
CREATE TABLE IF NOT EXISTS sucursal_proveedor(
  id INT AUTO_INCREMENT,
  id_proveedor INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  telefono VARCHAR(20),
  email VARCHAR(100),
  PRIMARY KEY (id),
  FOREIGN KEY (id_proveedor) REFERENCES proveedor (id)
);

-- Creación de la tabla MANTENIMIENTO
CREATE TABLE IF NOT EXISTS mantenimiento(
  id INT AUTO_INCREMENT,
  id_sucursal_proveedor INT NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_sucursal_proveedor) REFERENCES sucursal_proveedor (id)
);

-- Creación de la tabla VEHICULOS
CREATE TABLE IF NOT EXISTS vehiculo(
  id INT AUTO_INCREMENT,
  id_empresa INT NOT NULL,
  id_modelo INT NOT NULL,
  numero_serie VARCHAR(30) NOT NULL,
  placa VARCHAR(20) NOT NULL,
  estado VARCHAR(50) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_empresa) REFERENCES empresa (id),
  FOREIGN KEY (id_modelo) REFERENCES modelo (id)
);

-- Creación de la tabla CLASES_ALARMAS
CREATE TABLE IF NOT EXISTS clase_alarma(
  id INT AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  id_mantenimiento INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_mantenimiento) REFERENCES mantenimiento (id)
);

-- Creación de la tabla ALARMAS
CREATE TABLE IF NOT EXISTS alarma(
  id INT AUTO_INCREMENT,
  id_vehiculo INT NOT NULL,
  id_clase_alarma INT NOT NULL,
  fecha TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (id_vehiculo) REFERENCES vehiculo (id),
  FOREIGN KEY (id_clase_alarma) REFERENCES clase_alarma (id)
);

-- Creación de la tabla REGISTRO_MANTENIMIENTO
CREATE TABLE IF NOT EXISTS registro_mantenimiento(
  id INT NOT NULL AUTO_INCREMENT,
  id_alarma INT NOT NULL,
  fecha TIMESTAMP,
  costo DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_alarma) REFERENCES alarma (id)
);


-- Inserción de datos en la tabla EMPRESA
INSERT INTO empresa (nombre, direccion, telefono, email, sitio_web)
VALUES ('Empresa A', 'Calle 123, Ciudad', '123456789', 'empresaA@example.com', 'www.empresaA.com');

-- Inserción de datos en la tabla MARCAS
INSERT INTO marca (nombre, pais_origen, sitio_web)
VALUES ('Marca X', 'País X', 'www.marcaX.com');

-- Inserción de datos en la tabla MODELOS
INSERT INTO modelo (id_marca, nombre, anio_lanzamiento)
VALUES (1, 'Modelo 1', 2022);

-- Inserción de datos en la tabla PROVEEDOR
INSERT INTO proveedor (nombre, direccion, telefono, email, sitio_web)
VALUES ('Proveedor A', 'Av. Principal, Ciudad', '987654321', 'proveedorA@example.com', 'www.proveedorA.com');

-- Inserción de datos en la tabla SUCURSALES_PROVEEDOR
INSERT INTO sucursal_proveedor (id_proveedor, nombre, direccion, telefono, email)
VALUES (1, 'Sucursal 1', 'Av. Sucursal 123, Ciudad', '987654321', 'sucursal1@example.com');

-- Inserción de datos en la tabla MANTENIMIENTO
INSERT INTO mantenimiento (id_sucursal_proveedor, descripcion)
VALUES (1, 'Mantenimiento Preventivo');

-- Inserción de datos en la tabla VEHICULOS
INSERT INTO vehiculo (id_empresa, id_modelo, numero_serie, placa, estado)
VALUES (1, 1, '1234567890', 'ABC123', 'Activo');

-- Inserción de datos en la tabla CLASES_ALARMAS
INSERT INTO clase_alarma (nombre, descripcion, id_mantenimiento)
VALUES ('Alarma Tipo A', 'Descripción de alarma Tipo A', 1);

-- Inserción de datos en la tabla ALARMAS
INSERT INTO alarma (id_vehiculo, id_clase_alarma, fecha)
VALUES (1, 1, NOW());

-- Inserción de datos en la tabla REGISTRO_MANTENIMIENTO
INSERT INTO registro_mantenimiento (id_alarma, fecha, costo)
VALUES (1, NOW(), 150.00);


