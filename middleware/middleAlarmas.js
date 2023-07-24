import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {Alarmas} from "../controller/Alarmas.js"


const middleAlarmas = (req, res, next) => {
    try{
        if(req.method === 'GET'){
            return next();
        }
        let data = plainToClass(Alarmas, req.body);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch(Error){
        res.send("Error");
    }  
}

export default middleAlarmas;