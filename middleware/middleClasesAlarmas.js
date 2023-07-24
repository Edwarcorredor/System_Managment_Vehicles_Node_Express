import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {ClasesAlarmas} from "../controller/ClasesAlarmas.js"


const middleClasesAlarmas = (req, res, next) => {
    try{
        if(req.method === 'GET'){
            return next();
        }
        let data = plainToClass(ClasesAlarmas, req.body);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch(Error){
        res.send("Error");
    }  
}

export default middleClasesAlarmas;