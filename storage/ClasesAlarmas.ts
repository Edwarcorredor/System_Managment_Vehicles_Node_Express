import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class ClasesAlarmas{
    /**
    ** Variables de entrada:
    ** nombre, descripcion, id_mantenimiento
    */
   @Expose({name: "nombre"})
   @Transform(({ value }) => { if(/^[a-z A-Z 0-9]+$/.test(value)) return (value) ? value : "nombre_alarma" ; else throw {status: 406, message: "El formato del parametro nombre  no es correcto"};}, { toClassOnly: true })
   NAME: string

   @Expose({name: "descripcion"})
   @Transform(({ value }) => { if(/^[a-z A-Z 0-9]+$/.test(value)) return (value) ? value : "descripcion_alarma" ; else throw {status: 406, message: "El formato del parametro descripcion  no es correcto"};}, { toClassOnly: true })
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
         console.log(data)
        });
        return "";
    }
}