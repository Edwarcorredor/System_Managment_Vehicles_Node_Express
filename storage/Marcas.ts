import { Type, Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber } from 'class-validator';
import {conexion} from '../db/conexion_db.js'

export class Marcas{

    /**
    ** Variables de entrada:
    ** nombre, pais_origen, sitio_web
    */

    @Expose({name: "nombre"})
    NAME: string
    @Expose({name: "pais_origen"})
    ORIGEN_PAIS: string
    @Expose({name: "sitio_web"})
    WEB_SITE: string

    constructor(p1:string, p2:string, p3:string){
        this.NAME = p1;
        this.ORIGEN_PAIS = p2;
        this.WEB_SITE = p3;
    }
}