import { Type, Transform, Expose } from "class-transformer";

export class SurcursalesProveedores{
    /**
    ** Variables de entradas:
    ** id_proveedor, nombre, direccion, telefono, email
    */

    @Expose({name: "id_proveedor"})
    @Transform(({value}) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number"){ 
            return Number(value);
        } 
        else{
            throw {status:401, message:"Error en el id_proveedor"};
        }    
    })
    PROVEEDOR_ID: number
    @Expose({name: "nombre"})
    NAME: string
    @Expose({name: "direccion"})
    ADDRESS: string
    @Expose({name: "telefono"})
    PHONE: string
    @Expose({name: "email"})
    EMAIL: string

    constructor(p1:number, p2:string, p3:string, p4:string, p5:string){
        this.PROVEEDOR_ID = p1;
        this.NAME = p2;
        this.ADDRESS = p3;
        this.PHONE = p4;
        this.EMAIL = p5;
    }
}