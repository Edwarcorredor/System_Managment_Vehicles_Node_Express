import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {SurcursalesProveedores} from "../controller/SucursalesProveedores.js"


const middleSucursalesProveedores = (req, res, next) => {
    try{
        if(req.method === 'GET'){
            return next();
        }
        let data = plainToClass(SurcursalesProveedores, req.body);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch(Error){
        res.send("Error");
    }  
}

export default middleSucursalesProveedores