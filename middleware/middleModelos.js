import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {Modelos} from "../controller/Modelos.js"


const middleModelos = (req, res, next) => {
    try{
        let data = plainToClass(Modelos, req.body);
        req.body = JSON.parse(JSON.stringify(data));
        
        next();
    } catch(Error){
        res.send("Error");
    }  
}

export default middleModelos;