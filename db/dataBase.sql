-- Creación de la base de datos
CREATE DATABASE IF NO EXISTS vehiculos_autonomos;

-- Usar la base de datos creada
USE vehiculos_autonomos;

-- Creación de la tabla EMPRESA
CREATE TABLE IF NO EXISTS empresa(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Creación de la tabla MARCAS
CREATE TABLE IF NO EXISTS marca(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- Creación de la tabla MODELOS
CREATE TABLE IF NO EXISTS modelo(
  id INT NOT NULL AUTO_INCREMENT,
  id_marca INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_marca) REFERENCES marca (id)
);

-- Creación de la tabla PROVEEDOR
CREATE TABLE IF NO EXISTS proveedor(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Creación de la tabla SUCURSALES_PROVEEDOR
CREATE TABLE IF NO EXISTS sucursal_proveedor(
  id INT NOT NULL AUTO_INCREMENT,
  id_proveedor INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_proveedor) REFERENCES proveedor (id)
);

-- Creación de la tabla MANTENIMIENTO
CREATE TABLE IF NO EXISTS mantenimiento(
  id INT NOT NULL AUTO_INCREMENT,
  id_proveedor INT NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_proveedor) REFERENCES proveedor (id)
);

-- Creación de la tabla VEHICULOS
CREATE TABLE IF NO EXISTS vehiculo(
  id INT NOT NULL AUTO_INCREMENT,
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
CREATE TABLE IF NO EXISTS clase_alarma(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Creación de la tabla ALARMAS
CREATE TABLE IF NO EXISTS alarma(
  id INT NOT NULL AUTO_INCREMENT,
  id_vehiculo INT NOT NULL,
  id_clase_alarma INT NOT NULL,
  fecha DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_vehiculo) REFERENCES vehiculo (id),
  FOREIGN KEY (id_clase_alarma) REFERENCES clase_alarma (id)
);

-- Creación de la tabla REGISTRO_MANTENIMIENTO
CREATE TABLE IF NO EXISTS registro_mantenimiento(
  id INT NOT NULL AUTO_INCREMENT,
  id_alarma INT NOT NULL,
  fecha DATE NOT NULL,
  costo DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_alarma) REFERENCES alarma (id)
);

