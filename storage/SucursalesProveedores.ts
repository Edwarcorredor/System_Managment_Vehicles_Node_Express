import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString, IsEmail } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class SucursalesProveedores{
    /**
    ** Variables de entradas:
    ** id_proveedor, nombre, direccion, telefono, email
    */

    @Expose({name: "id_proveedor"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro id_proveedor no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id_proveedor es obligatorio"}}})
    PROVEEDOR_ID: number

    @Expose({name: "nombre"})
    @IsString({message: ()=> "El nombre debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro nombre es obligatorio"}}})
    NAME: string

    @Expose({name: "direccion"})
    @Transform(({ value }) => { if(/^[a-z A-Z 0-9]+$/.test(value)) return (value) ? value : "direccion_sucursal" ; else throw {status: 406, message: "El formato del parametro direccion  no es correcto"};}, { toClassOnly: true })
    ADDRESS: string

    @Expose({name: "telefono"})
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return value ; else throw {status: 400, message: "El parametro telefono  no cumple con el formato solicitado"};}, { toClassOnly: true })
    PHONE: string

    @Expose({name: "email"})
    @IsEmail({}, { message: "El correo electrónico no es válido" })
    EMAIL: string

    constructor(p1:number, p2:string, p3:string, p4:string, p5:string){
        this.PROVEEDOR_ID = p1;
        this.NAME = p2;
        this.ADDRESS = p3;
        this.PHONE = p4;
        this.EMAIL = p5;
    }

    get guardar(){
        conexion.query(/*sql*/`SELECT * FROM empresa`, 
        (err, data, fields)=>{
         console.log(data);
        });
        return "";
    }
}