import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {Mantenimientos} from "../controller/Mantenimientos.js"


const middleMantenimientos = (req, res, next) => {
    try{
        let data = plainToClass(Mantenimientos, req.body);
        req.body = JSON.parse(JSON.stringify(data));
        
        next();
    } catch(Error){
        res.send("Error");
    }  
}

export default middleMantenimientos;