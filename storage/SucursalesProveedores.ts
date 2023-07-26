import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString, IsEmail } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class SucursalesProveedores{
    /**
    ** Variables de entradas:
    ** id_proveedor, nombre, direccion, telefono, email
    */

    @Expose({name: "PROVEEDOR_ID"})
    @Transform(({value}) => {
        let data = /^\d+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el PROVEEDOR_ID"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro PROVEEDOR_ID es obligatorio"}}})
    id_proveedor: number

    @Expose({name: "NAME"})
    @IsString({message: ()=> "El NAME debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro NAME es obligatorio"}}})
    nombre: string

    @Expose({name: "ADDRESS"})
    @Transform(({ value }) => { if(/^[a-z A-Z 0-9]+$/.test(value)) return (value) ? value : "direccion_sucursal" ; else throw {status: 406, message: "El formato del parametro ADDRESS  no es correcto"};}, { toClassOnly: true })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro ADDRESS es obligatorio"}}})
    direccion: string

    @Expose({name: "PHONE"})
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return value ; else throw {status: 400, message: "El parametro PHONE  no cumple con el formato solicitado"};}, { toClassOnly: true })
    telefono: string

    @Expose({name: "EMAIL"})
    @IsEmail({}, { message: "El correo electrónico no es válido" })
    email: string

    constructor(p1:number, p2:string, p3:string, p4:string, p5:string){
        this.id_proveedor = p1;
        this.nombre = p2;
        this.direccion = p3;
        this.telefono = p4;
        this.email = p5;
    }

    set guardar(body:object){
        conexion.query(/*sql*/`INSERT INTO sucursal_proveedor SET ?`,
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
          SELECT * FROM sucursal_proveedor
          `);
          return rows;
        })();
    }
}