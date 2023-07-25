import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Alarmas} from '../controller/Alarmas.js'
import {validate} from 'class-validator';
const middleAlarmas = express();

middleAlarmas.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Alarmas, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {middleAlarmas}