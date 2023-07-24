import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {Proveedores} from "../controller/Proveedores.js"


const middleProveedores = (req, res, next) => {
    try{
        let data = plainToClass(Proveedores, req.body);
        req.body = JSON.parse(JSON.stringify(data));
        
        next();
    } catch(Error){
        res.send("Error");
    }  
}

export default middleProveedores;