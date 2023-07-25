import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Mantenimientos} from '../controller/Mantenimientos.js'
import {validate} from 'class-validator';
const middleMantenimientos = express();

middleMantenimientos.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Mantenimientos, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleMantenimientos}