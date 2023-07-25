import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsString, IsEmail, IsUrl } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Empresas{

    /** @internal 
    ** Variables de entrada:
    ** nombre, direccion, telefono, email, sitio_web
    */

    @Expose({name: "nombre"})
    @IsString({message: ()=> "El nombre debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro nombre es obligatorio"}}})
    NAME: string

    @Expose({name: "direccion"})
    @Transform(({ value }) => { if(/^[a-z A-Z 0-9]+$/.test(value)) return (value) ? value : "direccion_empresa" ; else throw {status: 406, message: "El formato del parametro direccion  no es correcto"};}, { toClassOnly: true })
    ADDRESS: string

    @Expose({name: "telefono"})
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return value ; else throw {status: 400, message: "El parametro telefono  no cumple con el formato solicitado"};}, { toClassOnly: true })
    PHONE: string

    @Expose({name: "email"})
    @IsEmail({}, { message: "El correo electrónico no es válido" })
    EMAIL: string

    @Expose({name: "sitio_web"})
    @IsUrl({}, { message: "La URL no es válida" })
    SITE_WEB: string

    constructor(p1:string, p2:string, p3:string, p4:string, p5:string){
        this.NAME = p1;
        this.ADDRESS = p2;
        this.PHONE = p3;
        this.EMAIL = p4;
        this.SITE_WEB = p5;
    }

    get guardar(){
        conexion.query(/*sql*/`SELECT * FROM empresa`, 
        (err, data, fields)=>{
         console.log(data);
        });
        return "";
    }
    
}