import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Empresas} from '../controller/Empresas.js'
import {validate} from 'class-validator';
const middleEmpresas = express();

middleEmpresas.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Empresas, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleEmpresas}