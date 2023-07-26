import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Modelos} from '../controller/Modelos.js'
import {validate} from 'class-validator';
const middleModelos = express();

middleModelos.use(async(req,res,next)=>{

    try {
        if(req.method=="GET"){
            var data = plainToClass(Modelos, req.data.interfaceData, { excludeExtraneousValues: true });
        }
        else{
            var data = plainToClass(Modelos, req.body, { excludeExtraneousValues: true });
        }
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleModelos}