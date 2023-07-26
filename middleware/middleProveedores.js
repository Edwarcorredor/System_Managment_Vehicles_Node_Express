import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Proveedores} from '../controller/Proveedores.js'
import {validate} from 'class-validator';
const middleProveedores = express();

middleProveedores.use(async(req,res,next)=>{

    try {
        if(req.method=="GET" || req.method=="DELETE"){
            var data = plainToClass(Proveedores, req.data.interfaceData, { excludeExtraneousValues: true });
        }
        else{
            var data = plainToClass(Proveedores, req.body, { excludeExtraneousValues: true });
        }
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleProveedores}