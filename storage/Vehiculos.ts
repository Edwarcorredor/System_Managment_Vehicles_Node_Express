import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Vehiculos{

    /**
    ** Variables de entrada:
    ** id_empresa, id_modelo, numero_serie, placa, estado 
    */

    @Expose({name: "id_empresa"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro id_empresa no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id_empresa es obligatorio"}}})
    EMPRESA_ID: number

    @Expose({name: "id_modelo"})
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro id_modelo no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id_modelo es obligatorio"}}})
    MODELO_ID: number

    @Expose({name: "numero_serie"})
    @Transform(({ value }) => { if(/^[0-9]+$/.test(value)) return value ; else throw {status: 400, message: "El parametro numero_serie  no cumple con el formato solicitado"};}, { toClassOnly: true })
    SERIE_NUMERO: string

    @Expose({name: "placa"})
    @IsString({message: ()=> "La placa debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro placa es obligatorio"}}})
    PLATE: string

    @Expose({name: "estado"})
    @IsString({message: ()=> "El estado debe ser una cadena de texto" })
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro estado es obligatorio"}}})
    STATE: string

    constructor(p1:number, p2:number, p3:string, p4:string, p5:string){
        this.EMPRESA_ID = p1;
        this.MODELO_ID = p2;
        this.SERIE_NUMERO = p3;
        this.PLATE = p4;
        this.STATE = p5;
    }

    get guardar(){
        conexion.query(/*sql*/`SELECT * FROM empresa`, 
        (err, data, fields)=>{
         console.log(data);
        });
        return "";
    }
}