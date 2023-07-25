import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Marcas} from '../controller/Marcas.js'
import {validate} from 'class-validator';
const middleMarcas = express();

middleMarcas.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Marcas, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleMarcas}