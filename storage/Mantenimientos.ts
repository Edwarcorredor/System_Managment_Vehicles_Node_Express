import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Mantenimientos{

    /**
    ** Variables de entrada:
    ** id_sucursal_proveedor, descripcion 
    */

    @Expose({ name: "SUCURSAL_ID"})
    @Transform(({value}) => {
        let data = /^\d+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el SUCURSAL_ID"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro SUCURSAL_ID es obligatorio"}}})
    id_sucursal_proveedor: number

    @Expose({ name: "DESCRIPTION"})
    @IsString({message: ()=> "La DESCRIPTION debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro DESCRIPTION es obligatorio"}}})
    descripcion: string

    constructor(p1:number = 1, p2:string = ""){
        this.id_sucursal_proveedor = p1;
        this.descripcion = p2;
    }

    set guardar(body:object){
        conexion.query(/*sql*/`INSERT INTO mantenimiento SET ?`,
        body,
        (err, data, fields)=>{
         console.log(err)
         console.log(data)
         console.log(fields)
        });
    }

    get allTabla(){
        const cox = conexion.promise();
        return (async()=>{
          const [rows, fields] = await cox.execute(/*sql*/`
          SELECT * FROM mantenimiento
          `);
          return rows;
        })();
    }
}