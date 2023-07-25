import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Modelos{

    /**
    ** Variables de entrada:
    ** id_marca, nombre, anio_lanzamiento
    */

    @Expose({name: "id_marca"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro id_marca no es correcto"}}})
    MARCA_ID: number

    @Expose({name: "nombre"})
    @IsString({message: ()=> "El nombre debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro nombre es obligatorio"}}})
    NAME: string

    @Expose({name: "anio_lanzamiento"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro anio_lanzamiento no es correcto"}}})
    LANZAMIENTO: number

    constructor(p1:number, p2:string, p3:number){
        this.MARCA_ID = p1;
        this.NAME = p2;
        this.LANZAMIENTO = p3;
    }

    get guardar(){
        conexion.query(/*sql*/`SELECT * FROM empresa`, 
        (err, data, fields)=>{
         console.log(data);
        });
        return "";
    }
}