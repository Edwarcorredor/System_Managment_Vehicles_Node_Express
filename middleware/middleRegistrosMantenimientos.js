import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {RegistrosMantenimientos} from "../controller/RegistrosMantenimientos.js"


const middleRegistrosMantenimientos = (req, res, next) => {
    try{
        if(req.method === 'GET'){
            return next();
        }
        let data = plainToClass(RegistrosMantenimientos, req.body);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch(Error){
        res.send("Error");
    }  
}

export default middleRegistrosMantenimientos;