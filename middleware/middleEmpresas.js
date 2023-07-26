import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Empresas} from '../controller/Empresas.js'
import {validate} from 'class-validator';
const middleEmpresas = express();

middleEmpresas.use(async(req,res,next)=>{

    try {
        if(req.method=="GET"){
            var data = plainToClass(Empresas, req.data.interfaceData, { excludeExtraneousValues: true });
        }
        else{
            var data = plainToClass(Empresas, req.body, { excludeExtraneousValues: true });
        }
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleEmpresas}