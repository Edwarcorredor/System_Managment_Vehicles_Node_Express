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
  costo DECIMAL(12, 2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_alarma) REFERENCES alarma (id)
);


INSERT INTO empresa (nombre, direccion, telefono, email, sitio_web) VALUES
('Empresa A', 'Calle Principal 123', '+1234567890', 'contacto@empresaA.com', 'www.empresaA.com'),
('Empresa B', 'Avenida Central 456', '+9876543210', 'contacto@empresaB.com', 'www.empresaB.com'),
('Empresa C', 'Plaza Mayor 789', '+5555555555', 'contacto@empresaC.com', 'www.empresaC.com'),
('Empresa D', 'Boulevard Libertad 321', '+1111111111', 'contacto@empresaD.com', 'www.empresaD.com'),
('Empresa E', 'Paseo de la Victoria 654', '+2222222222', 'contacto@empresaE.com', 'www.empresaE.com'),
('Empresa F', 'Avenida Revolución 987', '+3333333333', 'contacto@empresaF.com', 'www.empresaF.com'),
('Empresa G', 'Calle Independencia 456', '+4444444444', 'contacto@empresaG.com', 'www.empresaG.com'),
('Empresa H', 'Plaza del Sol 789', '+6666666666', 'contacto@empresaH.com', 'www.empresaH.com'),
('Empresa I', 'Boulevard Reforma 987', '+7777777777', 'contacto@empresaI.com', 'www.empresaI.com'),
('Empresa J', 'Paseo de los Leones 654', '+8888888888', 'contacto@empresaJ.com', 'www.empresaJ.com');

INSERT INTO marca (nombre, pais_origen, sitio_web) VALUES
('Marca 1', 'País 1', 'www.marca1.com'),
('Marca 2', 'País 2', 'www.marca2.com'),
('Marca 3', 'País 3', 'www.marca3.com'),
('Marca 4', 'País 4', 'www.marca4.com'),
('Marca 5', 'País 5', 'www.marca5.com'),
('Marca 6', 'País 6', 'www.marca6.com'),
('Marca 7', 'País 7', 'www.marca7.com'),
('Marca 8', 'País 8', 'www.marca8.com'),
('Marca 9', 'País 9', 'www.marca9.com'),
('Marca 10', 'País 10', 'www.marca10.com');

INSERT INTO modelo (id_marca, nombre, anio_lanzamiento) VALUES
(1, 'Modelo A1', 2020),
(1, 'Modelo A2', 2019),
(2, 'Modelo B1', 2018),
(2, 'Modelo B2', 2021),
(3, 'Modelo C1', 2022),
(3, 'Modelo C2', 2017),
(4, 'Modelo D1', 2016),
(4, 'Modelo D2', 2015),
(5, 'Modelo E1', 2020),
(5, 'Modelo E2', 2021);


-- Inserción de datos en la tabla PROVEEDOR
INSERT INTO proveedor (nombre, direccion, telefono, email, sitio_web) VALUES
('Proveedor 1', 'Calle Principal 123', '+1234567890', 'proveedor1@empresaA.com', 'www.proveedor1.com'),
('Proveedor 2', 'Avenida Central 456', '+9876543210', 'proveedor2@empresaB.com', 'www.proveedor2.com'),
('Proveedor 3', 'Plaza Mayor 789', '+5555555555', 'proveedor3@empresaC.com', 'www.proveedor3.com'),
('Proveedor 4', 'Boulevard Libertad 321', '+1111111111', 'proveedor4@empresaD.com', 'www.proveedor4.com'),
('Proveedor 5', 'Paseo de la Victoria 654', '+2222222222', 'proveedor5@empresaE.com', 'www.proveedor5.com'),
('Proveedor 6', 'Avenida Revolución 987', '+3333333333', 'proveedor6@empresaF.com', 'www.proveedor6.com'),
('Proveedor 7', 'Calle Independencia 456', '+4444444444', 'proveedor7@empresaG.com', 'www.proveedor7.com'),
('Proveedor 8', 'Plaza del Sol 789', '+6666666666', 'proveedor8@empresaH.com', 'www.proveedor8.com'),
('Proveedor 9', 'Boulevard Reforma 987', '+7777777777', 'proveedor9@empresaI.com', 'www.proveedor9.com'),
('Proveedor 10', 'Paseo de los Leones 654', '+8888888888', 'proveedor10@empresaJ.com', 'www.proveedor10.com');


INSERT INTO sucursal_proveedor (id_proveedor, nombre, direccion, telefono, email) VALUES
(1, 'Sucursal 1', 'Calle Principal 123', '+1234567890', 'sucursal1@proveedor1.com'),
(1, 'Sucursal 2', 'Avenida Central 456', '+9876543210', 'sucursal2@proveedor1.com'),
(2, 'Sucursal 1', 'Plaza Mayor 789', '+5555555555', 'sucursal1@proveedor2.com'),
(2, 'Sucursal 2', 'Boulevard Libertad 321', '+1111111111', 'sucursal2@proveedor2.com'),
(3, 'Sucursal 1', 'Paseo de la Victoria 654', '+2222222222', 'sucursal1@proveedor3.com'),
(4, 'Sucursal 1', 'Avenida Revolución 987', '+3333333333', 'sucursal1@proveedor4.com'),
(5, 'Sucursal 1', 'Calle Independencia 456', '+4444444444', 'sucursal1@proveedor5.com'),
(6, 'Sucursal 1', 'Plaza del Sol 789', '+6666666666', 'sucursal1@proveedor6.com'),
(7, 'Sucursal 1', 'Boulevard Reforma 987', '+7777777777', 'sucursal1@proveedor7.com'),
(8, 'Sucursal 1', 'Paseo de los Leones 654', '+8888888888', 'sucursal1@proveedor8.com');


INSERT INTO mantenimiento (id_sucursal_proveedor, descripcion) VALUES
(1, 'Mantenimiento 1'),
(2, 'Mantenimiento 2'),
(3, 'Mantenimiento 3'),
(4, 'Mantenimiento 4'),
(5, 'Mantenimiento 5'),
(6, 'Mantenimiento 6'),
(7, 'Mantenimiento 7'),
(8, 'Mantenimiento 8'),
(9, 'Mantenimiento 9'),
(10, 'Mantenimiento 10');


INSERT INTO vehiculo (id_empresa, id_modelo, numero_serie, placa, estado) VALUES
(1, 1, '123ABC', 'XYZ123', 'Activo'),
(2, 2, '456DEF', 'ABC456', 'Inactivo'),
(3, 3, '789GHI', 'DEF789', 'Activo'),
(4, 4, 'ABC123', 'GHIABC', 'Inactivo'),
(5, 5, 'DEF456', 'JKL456', 'Activo'),
(6, 6, 'GHI789', 'MNO789', 'Activo'),
(7, 7, 'JKL123', 'PQR123', 'Inactivo'),
(8, 8, 'MNO456', 'STU456', 'Activo'),
(9, 9, 'PQR789', 'VWX789', 'Inactivo'),
(10, 10, 'STU123', 'YZA123', 'Activo');


INSERT INTO clase_alarma (nombre, descripcion, id_mantenimiento) VALUES
('Alarma 1', 'Alarma de seguridad 1', 1),
('Alarma 2', 'Alarma de seguridad 2', 2),
('Alarma 3', 'Alarma de seguridad 3', 3),
('Alarma 4', 'Alarma de seguridad 4', 4),
('Alarma 5', 'Alarma de seguridad 5', 5),
('Alarma 6', 'Alarma de seguridad 6', 6),
('Alarma 7', 'Alarma de seguridad 7', 7),
('Alarma 8', 'Alarma de seguridad 8', 8),
('Alarma 9', 'Alarma de seguridad 9', 9),
('Alarma 10', 'Alarma de seguridad 10', 10);


INSERT INTO alarma (id_vehiculo, id_clase_alarma, fecha) VALUES
(1, 1, '2023-07-10 08:00:00'),
(2, 2, '2023-07-11 10:30:00'),
(3, 3, '2023-07-12 14:45:00'),
(4, 4, '2023-07-13 09:20:00'),
(5, 5, '2023-07-14 11:05:00'),
(6, 6, '2023-07-15 16:30:00'),
(7, 7, '2023-07-16 13:10:00'),
(8, 8, '2023-07-17 08:45:00'),
(9, 9, '2023-07-18 17:20:00'),
(10, 10, '2023-07-19 12:00:00');


INSERT INTO registro_mantenimiento (id_alarma, fecha, costo) VALUES
(1, '2023-07-10 08:30:00', 100.50),
(2, '2023-07-11 11:00:00', 150.75),
(3, '2023-07-12 15:30:00', 120.25),
(4, '2023-07-13 10:00:00', 80.00),
(5, '2023-07-14 11:30:00', 90.50),
(6, '2023-07-15 17:00:00', 200.00),
(7, '2023-07-16 13:30:00', 130.75),
(8, '2023-07-17 09:15:00', 180.25),
(9, '2023-07-18 18:00:00', 95.50),
(10, '2023-07-19 12:30:00', 150.00);



