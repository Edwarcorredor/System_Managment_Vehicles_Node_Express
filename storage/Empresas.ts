import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Empresas{

    /** @internal 
    ** Variables de entrada:
    ** nombre, direccion, telefono, email, sitio_web
    */

    @Expose({name: "nombre"})
    @Transform(({ value }) => { if(/^[a-z A-Z 0-9]+$/.test(value)) return (value) ? value : "nombre_empresa" ; else throw {status: 406, message: "El formato del parametro nombre  no es correcto"};}, { toClassOnly: true })
    NAME: string

    @Expose({name: "direccion"})
    @Transform(({ value }) => { if(/^[a-z A-Z 0-9]+$/.test(value)) return (value) ? value : "nombre_alarma" ; else throw {status: 406, message: "El formato del parametro nombre  no es correcto"};}, { toClassOnly: true })
    ADDRESS: string

    @Expose({name: "telefono"})
    PHONE: string
    @Expose({name: "email"})
    EMAIL: string
    @Expose({name: "sitio_web"})
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
         console.log(data)
        });
        return "";
    }
    
}