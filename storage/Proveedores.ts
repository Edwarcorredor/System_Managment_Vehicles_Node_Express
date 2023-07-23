import { Type, Transform, Expose } from "class-transformer";

export class Proveedores{

    /**
    ** Variables de entrada: 
    ** nombre, direccion, telefono, email, sitio_web
    */

    @Expose({name: "nombre"})
    NAME: string
    @Expose({name: "direccion"})
    ADDRESS: string
    @Expose({name: "telefono"})
    PHONE: string
    @Expose ({name: "email"})
    EMAIL: string
    @Expose({name: "sitio_web"})
    WEB_SITE: string

    constructor(p1:string, p2:string, p3:string, p4:string, p5:string){
        this.NAME = p1;
        this.ADDRESS = p2;
        this.PHONE = p3;
        this.EMAIL = p4;
        this.WEB_SITE = p5;
    }
}