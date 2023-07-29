import express from 'express';
import 'reflect-metadata';
import {plainToInstance} from 'class-transformer';
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
import {validate} from 'class-validator';
const middlewareTablas = express();

const tablasController = {
    "alarmas" : Alarmas,
    "clases_alarmas" : ClasesAlarmas,
    "mantenimientos" : Mantenimientos,
    "empresas" : Empresas,
    "marcas" : Marcas,
    "modelos" : Modelos,
    "proveedores" : Proveedores,
    "registros_mantenimientos" : RegistrosMantenimientos,
    "sucursales_proveedores" : SucursalesProveedores,
    "vehiculos" : Vehiculos
}

middlewareTablas.use(async(req,res,next)=>{

    try {
        let data;
        if(req.method=="GET" || req.method=="DELETE"){
            data = plainToInstance(tablasController[req.baseUrl.split('/')[1]], {}, { ignoreDecorators: true })
        }
        else{
            data = plainToInstance(tablasController[req.baseUrl.split('/')[1]], req.body, { excludeExtraneousValues: true });
        }
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middlewareTablas}