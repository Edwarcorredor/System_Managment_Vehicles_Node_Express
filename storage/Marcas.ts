import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsString, IsUrl } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Marcas{

    /**
    ** Variables de entrada:
    ** nombre, pais_origen, sitio_web
    */

    @Expose({name: "nombre"})
    @IsString({message: ()=> "El nombre debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro nombre es obligatorio"}}})
    NAME: string

    @Expose({name: "pais_origen"})
    @IsString({message: ()=> "El pais_origen debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro pais_origen es obligatorio"}}})
    ORIGEN_PAIS: string

    @Expose({name: "sitio_web"})
    @IsUrl({}, { message: "La URL no es válida" })
    WEB_SITE: string

    constructor(p1:string, p2:string, p3:string){
        this.NAME = p1;
        this.ORIGEN_PAIS = p2;
        this.WEB_SITE = p3;
    }

    get guardar(){
        conexion.query(/*sql*/`SELECT * FROM empresa`, 
        (err, data, fields)=>{
         console.log(data);
        });
        return "";
    }
}