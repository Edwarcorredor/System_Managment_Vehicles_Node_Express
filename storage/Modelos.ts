import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Modelos{

    /**
    ** Variables de entrada:
    ** id_marca, nombre, anio_lanzamiento
    */

    @Expose({name: "MARCA_ID"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro MARCA_ID no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro MARCA_ID es obligatorio"}}})
    id_marca: number

    @Expose({name: "NAME"})
    @IsString({message: ()=> "El NAME debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro NAME es obligatorio"}}})
    nombre: string

    @Expose({name: "LANZAMIENTO_ANIO"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro LANZAMIENTO_ANIO no es correcto"}}})
    anio_lanzamiento: number

    constructor(p1:number = 1, p2:string = "", p3:number){
        this.id_marca = p1;
        this.nombre = p2;
        this.anio_lanzamiento = p3;
    }

    set guardar(body:object){
        conexion.query(/*sql*/`INSERT INTO modelo SET ?`,
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
          SELECT * FROM modelo
          `);
          return rows;
        })();
    }
}