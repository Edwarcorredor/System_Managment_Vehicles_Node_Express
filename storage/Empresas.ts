import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsString, IsEmail, IsUrl } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Empresas{

    /** @internal 
    ** Variables de entrada:
    ** nombre, direccion, telefono, email, sitio_web
    */

    @Expose({name: "NAME"})
    @IsString({message: ()=> "El NAME debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro NAME es obligatorio"}}})
    nombre: string

    @Expose({name: "ADDRESS"})
    @Transform(({ value }) => { if(/^[a-z A-Z 0-9]+$/.test(value)) return (value) ? value : "direccion_empresa" ; else throw {status: 406, message: "El formato del parametro ADDRESS  no es correcto"};}, { toClassOnly: true })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro ADDRESS es obligatorio"}}})
    direccion: string

    @Expose({name: "PHONE"})
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return value ; else throw {status: 400, message: "El parametro PHONE  no cumple con el formato solicitado"};}, { toClassOnly: true })
    telefono: string

    @Expose({name: "EMAIL"})
    @IsEmail({}, { message: "El correo electrónico no es válido" })
    email: string

    @Expose({name: "SITE_WEB"})
    @IsUrl({}, { message: "La URL no es válida" })
    sitio_web: string

    constructor(p1:string ="", p2:string ="calle1", p3:string, p4:string, p5:string){
        this.nombre = p1;
        this.direccion = p2;
        this.telefono = p3;
        this.email = p4;
        this.sitio_web = p5;
    }

    set guardar(body:object){
        conexion.query(/*sql*/`INSERT INTO empresa SET ?`,
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
          SELECT * FROM empresa
          `);
          return rows;
        })();
    }
    
}