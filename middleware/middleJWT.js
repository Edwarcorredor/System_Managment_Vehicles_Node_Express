import dotenv from 'dotenv'
import { SignJWT, jwtVerify } from 'jose';
import express from 'express';
import 'reflect-metadata';


const tokenJWT = express();
const validateJWT = express();
dotenv.config("../");

const tablas = {
    "alarmas": "alarmas",
    "clases_alarmas": "clases_alarmas",
    "empresas": "empresas",
    "mantenimientos":"mantenimientos",
    "marcas":"marcas",
    "modelos":"modelos",
    "proveedores":"proveedores",
    "registros_mantenimientos":"registros_mantenimientos",
    "sucursales_proveedores":"sucursales_proveedores",
    "vehiculos":"vehiculos"
}

tokenJWT.use(async(req,res)=>{
    if (tablas[req.query.tabla] === undefined){
        return res.status(406).send('Error al generar token, especifique una tabla válida')
    } 
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT({ TablaCreada: tablas[req.query.tabla] })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

    res.send(jwtConstructor);
})

validateJWT.use(async(req,res,next)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(404).send('Falta el token de autorización');
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        if (!(jwtData.payload.TablaCreada === req.baseUrl.split('/')[1])) return res.status(401).send('Token incorrecto para esta tabla');
        req.payloadJWT = jwtData.payload; 
        next();
    } catch (error) {
        res.status(401).send('No autorizado');
        console.log(error);
    }
})
export {
    tokenJWT,
    validateJWT
};

