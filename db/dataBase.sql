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



