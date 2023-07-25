import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Alarmas{
    /**
    ** Variables de entrada:
    ** id_vehiculo, id_clase_alarma
    */
    @Expose({name: "id_vehiculo",})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro id_vehiculo no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id_vehiculo es obligatorio"}}})
    VEHICULO_ID: number

    @Expose({name: "id_clase_alarma"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro id_clase_alarma no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id_clase_alarma es obligatorio"}}})
    CLASE_ALARMA_ID: number

    constructor(p1:number, p2:number){
        this.VEHICULO_ID = p1;
        this.CLASE_ALARMA_ID = p2;
    }

    get guardar(){
        conexion.query(/*sql*/`SELECT * FROM alarma`, 
        (err, data, fields)=>{
         console.log(data)
        });
        return "";
    }
}