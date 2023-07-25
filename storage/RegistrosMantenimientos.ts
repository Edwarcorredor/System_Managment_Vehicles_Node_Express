import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class RegistrosMantenimientos{

    /**
    ** Variables de entrada:
    ** id_alarma, costo 
    */

    @Expose({name: "id_alarma"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro id_alarma no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id_alarma es obligatorio"}}})
    ALARMA_ID: number

    @Expose({name: "costo"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro costo no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro costo es obligatorio"}}})
    COST: number

    constructor(p1:number, p2:number){
        this.ALARMA_ID = p1;
        this.COST = p2;
    }

    get guardar(){
        conexion.query(/*sql*/`SELECT * FROM empresa`, 
        (err, data, fields)=>{
         console.log(data);
        });
        return "";
    }
}