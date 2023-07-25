import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Mantenimientos{

    /**
    ** Variables de entrada:
    ** id_sucursal_proveedor, descripcion 
    */

    @Expose({ name: "id_sucursal_proveedor"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro id_sucursal_proveedor no es correcto"}}})
    SUCURSAL_ID: number

    @Expose({ name: "descripcion"})
    @IsString({message: ()=> "La descripcion debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id_vehiculo es obligatorio"}}})
    DESCRIPTION: string

    constructor(p1:number, p2:string){
        this.SUCURSAL_ID = p1;
        this.DESCRIPTION = p2;
    }

    get guardar(){
        conexion.query(/*sql*/`SELECT * FROM empresa`, 
        (err, data, fields)=>{
         console.log(data);
        });
        return "";
    }
}