import dotenv from 'dotenv'
import { SignJWT, jwtVerify } from 'jose';
import express from 'express';
import 'reflect-metadata';
import {plainToClass, classToPlain } from 'class-transformer';
import {Alarmas} from '../controller/Alarmas.js'
import {ClasesAlarmas} from '../controller/ClasesAlarmas.js'
import {Empresas} from '../controller/Empresas.js'
import {Mantenimientos} from '../controller/Mantenimientos.js'
import {Marcas} from '../controller/Marcas.js'
import {Modelos} from '../controller/Modelos.js'
import {Proveedores} from '../controller/Proveedores.js'
import {RegistrosMantenimientos} from '../controller/RegistrosMantenimientos.js'
import {SucursalesProveedores} from '../controller/SucursalesProveedores.js'
import {Vehiculos} from '../controller/Vehiculos.js'

const tokenJWT = express();
const validateJWT = express();
dotenv.config("../");

tokenJWT.use(async(req,res,next)=>{
    let inst;
    switch (req.query.tabla) {
        case 'alarmas':
            inst = plainToClass(Alarmas, {}, { ignoreDecorators: true })
            break;
        
        case 'clases_alarmas':
            inst = plainToClass(ClasesAlarmas, {}, { ignoreDecorators: true })
            break;
        
        case 'empresas':
            inst = plainToClass(Empresas, {}, { ignoreDecorators: true })
            break;

        case 'mantenimientos':
            inst = plainToClass(Mantenimientos, {}, { ignoreDecorators: true })
            break;
        
        case 'marcas':
            inst = plainToClass(Marcas, {}, { ignoreDecorators: true })
            break;
        
        case 'modelos':
            inst = plainToClass(Modelos, {}, { ignoreDecorators: true })
            break;

        case 'proveedores':
            inst = plainToClass(Proveedores, {}, { ignoreDecorators: true })
            break;

        case 'registros_mantenimientos':
            inst = plainToClass(RegistrosMantenimientos, {}, { ignoreDecorators: true })
            break;

        case 'sucursales_proveedores':
            inst = plainToClass(SucursalesProveedores, {}, { ignoreDecorators: true })
            break;

        case 'vehiculos':
            inst = plainToClass(Vehiculos, {}, { ignoreDecorators: true })
            break;

        default:
            res.json({status: 406, message: "No se puede generar el token"});
            break;
    }
   
    let interfaceData = classToPlain(inst);
    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({interfaceData});
    
    const jwt = await jwtconstructor
    .setProtectedHeader({alg:"HS256", typ: "JWT"})
    .setIssuedAt()
    .setExpirationTime("25m")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    req.data = jwt;
    next();
})
validateJWT.use(async(req,res,next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.json({status: 401, message: "Token no enviado"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData.payload;
        next();
    } catch (error) {
        res.json({status: 401, message: "Token caducado"});
    }
})
export {
    tokenJWT,
    validateJWT
};