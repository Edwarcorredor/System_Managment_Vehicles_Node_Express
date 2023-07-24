import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {Marcas} from "../controller/Marcas.js"


const middleMarcas = (req, res, next) => {
    try{
        let data = plainToClass(Marcas, req.body);
        req.body = JSON.parse(JSON.stringify(data));
        
        next();
    } catch(Error){
        res.send("Error");
    }  
}

export default middleMarcas;