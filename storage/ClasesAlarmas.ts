import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString} from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class ClasesAlarmas{
    /**
    ** Variables de entrada:
    ** nombre, descripcion, id_mantenimiento
    */
   @Expose({name: "nombre"})
   @IsString({message: ()=> "El nombre debe ser una cadena de texto" })
   @IsDefined({message: ()=>{ throw {status:422, message: "El parametro nombre es obligatorio"}}})
   NAME: string

   @Expose({name: "descripcion"})
   @IsString({message: ()=> "La descripcion debe ser una cadena de texto" })
   @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id_vehiculo es obligatorio"}}})
   DESCRIPTION: string

   @Expose({name: "id_mantenimiento"})
   @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro id_mantenimiento no es correcto"}}})
   MANTENIMIENTO_ID: number

   constructor(p1:string, p2:string, p3:number){
    this.NAME = p1;
    this.DESCRIPTION = p2;
    this.MANTENIMIENTO_ID = p3;
    }

    get guardar(){
        conexion.query(/*sql*/`SELECT * FROM clase_alarma`, 
        (err, data, fields)=>{
         console.log(data);
        });
        return "";
    }
}