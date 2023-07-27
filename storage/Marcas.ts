import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsString, IsUrl } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Marcas{

    /**
    ** Variables de entrada:
    ** nombre, pais_origen, sitio_web
    */

    @Expose({name: "NAME"})
    @Transform(({value}) => {
        let data = /^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$/g.test(value);
        if ( data && typeof value == "string"){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el NAME"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro NAME es obligatorio"}}})
    nombre: string

    @Expose({name: "ORIGEN_PAIS"})
    @Transform(({value}) => {
        let data = /^[a-zA-Z ]*$|^undefined$/g.test(value);
        if ( data){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el ORIGEN_PAIS"};
        }    
    })
    pais_origen: string

    @Expose({name: "SITE_WEB"})
    @Transform(({value}) => {
        let data = /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9._%+-]*)*|undefined+$/g.test(value);
        if (data){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el WEB_SITE"};
        }    
    })
    sitio_web: string

    constructor(p1:string ="Hola", p2:string, p3:string){
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

    actualizar(id:number, body:object){
        conexion.query(/*sql*/`UPDATE marca SET ? WHERE id = ?`,
        [body, id],
        (err, data, fields)=>{
         console.log(err)
         console.log(data)
         console.log(fields)
        }); 
    }
}