import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {ClasesAlarmas} from '../controller/ClasesAlarmas.js'
import {validate} from 'class-validator';
const middleClasesAlarmas = express();

middleClasesAlarmas.use(async(req,res,next)=>{

    try {
        if(req.method=="GET" || req.method=="DELETE"){
            var data = plainToClass(ClasesAlarmas, req.data.interfaceData, { excludeExtraneousValues: true });
        }
        else{
            var data = plainToClass(ClasesAlarmas, req.body, { excludeExtraneousValues: true });
        }
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleClasesAlarmas}