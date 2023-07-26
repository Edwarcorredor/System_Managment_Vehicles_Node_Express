import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Marcas} from '../controller/Marcas.js'
import {validate} from 'class-validator';
const middleMarcas = express();

middleMarcas.use(async(req,res,next)=>{

    try {
        if(req.method=="GET"){
            var data = plainToClass(Marcas, req.data.interfaceData, { excludeExtraneousValues: true });
        }
        else{
            var data = plainToClass(Marcas, req.body, { excludeExtraneousValues: true });
        }
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleMarcas}