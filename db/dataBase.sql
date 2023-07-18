CREATE DATABASE vehiculos_autonomos

USE vehiculos_autonomos

CREATE TABLE vehiculos{
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero_serie VARCHAR NOT NULL,
    placa VARCHAR NOT NULL,
    estado VARCHAR,
    modelo VARCHAR NOT NULL,
    marca VARCHAR NOT NULL
};

CREATE TABLE proveedores{
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono INT,
    email VARCHAR(255) NOT NULL,
}

CREATE TABLE repuestos{
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255),
    precio_unitario FLOAT NOT NULL,
    id proveedor INT
};

CREATE TABLE mantenimiento{
    id INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(255) NOT NULL,
    id_repuestos INT NOT NULL
};

CREATE TABLE clase_alarmas{
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR,
    id_mantenimiento INT NOT NULL
};

CREATE TABLE alarmas{
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_vehiculo INT NOT NULL,
    id_clases_alarmas INT NOT NULL,
    fecha TIMESTAMP
};

CREATE TABLE registro_mantenimiento{
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_alarma INT NOT NULL,
    fecha TIMESTAMP,
    costo FLOAT INT NOT NULL
};