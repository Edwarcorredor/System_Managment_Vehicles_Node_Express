import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {RegistrosMantenimientos} from '../controller/RegistrosMantenimientos.js'
import {validate} from 'class-validator';
const middleRegistrosMantenimientos = express();

middleRegistrosMantenimientos.use(async(req,res,next)=>{
    try {
        let data = plainToClass(RegistrosMantenimientos, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleRegistrosMantenimientos}