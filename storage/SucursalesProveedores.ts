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
        let data = /^([1-9]\d*)$/g.test(value);
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

    @Expose({name: "ADDRESS"})
    @Transform(({value}) => {
        let data = /^[a-zA-Z0-9\s.,#-]+$/i.test(value);
        if ( data && typeof value == "string"){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el ADDRESS"};
        }    
    })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro ADDRESS es obligatorio"}}})
    direccion: string

    @Expose({name: "PHONE"})
    @Transform(({value}) => {
        let data = /^(?:[1-9]\d*|undefined)$/g.test(value);
        if (data){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el PHONE"};
        }    
    })
    telefono: string

    @Expose({name: "EMAIL"})
    @Transform(({value}) => {
        let data = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|undefined+$/g.test(value);
        if (data){ 
            return String(value);
        } 
        else{
            throw {status:401, message:"Error en el EMAIL"};
        }    
    })
    email: string

    constructor(p1:number = 1, p2:string ="nombre", p3:string ="direccion", p4:string, p5:string){
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

    actualizar(id:number, body:object){
        conexion.query(/*sql*/`UPDATE sucursal_proveedor SET ? WHERE id = ?`,
        [body, id],
        (err, data, fields)=>{
         console.log(err)
         console.log(data)
         console.log(fields)
        }); 
    }

    eliminar(id:number){
        conexion.query(/*sql*/`DELETE FROM sucursal_proveedor WHERE id = ?`,
        [id],
        (err, data, fields)=>{
         console.log(err)
         console.log(data)
         console.log(fields)
        }); 
    }
}