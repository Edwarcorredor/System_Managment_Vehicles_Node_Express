import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Proveedores} from '../controller/Proveedores.js'
import {validate} from 'class-validator';
const middleProveedores = express();

middleProveedores.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Proveedores, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleProveedores}