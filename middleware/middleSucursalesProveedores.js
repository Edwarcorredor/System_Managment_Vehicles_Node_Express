import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {SucursalesProveedores} from '../controller/SucursalesProveedores.js'
import {validate} from 'class-validator';
const middleSucursalesProveedores = express();

middleSucursalesProveedores.use(async(req,res,next)=>{

    try {
        if(req.method=="GET" || req.method=="DELETE"){
            var data = plainToClass(SucursalesProveedores, req.data.interfaceData, { excludeExtraneousValues: true });
        }
        else{
            var data = plainToClass(SucursalesProveedores, req.body, { excludeExtraneousValues: true });
        }
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleSucursalesProveedores}