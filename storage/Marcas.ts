import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsString, IsUrl } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Marcas{

    /**
    ** Variables de entrada:
    ** nombre, pais_origen, sitio_web
    */

    @Expose({name: "NAME"})
    @IsString({message: ()=> "El NAME debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro NAME es obligatorio"}}})
    nombre: string

    @Expose({name: "ORIGEN_PAIS"})
    @IsString({message: ()=> "El ORIGEN_PAIS debe ser una cadena de texto" })
    pais_origen: string

    @Expose({name: "WEB_SITE"})
    @IsUrl({}, { message: "La URL no es válida" })
    sitio_web: string

    constructor(p1:string ="", p2:string, p3:string){
        this.nombre = p1;
        this.pais_origen = p2;
        this.sitio_web = p3;
    }

    set guardar(body:object){
        conexion.query(/*sql*/`INSERT INTO marca SET ?`,
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
          SELECT * FROM marca
          `);
          return rows;
        })();
    }
}