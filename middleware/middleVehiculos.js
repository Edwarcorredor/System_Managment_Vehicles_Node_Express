import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {Vehiculos} from "../controller/Vehiculos.js"


const middleVehiculos = (req, res, next) => {
    try{
        let data = plainToClass(Vehiculos, req.body);
        req.body = JSON.parse(JSON.stringify(data));
        
        next();
    } catch(Error){
        res.send("Error");
    }  
}

export default middleVehiculos;