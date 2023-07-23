import { Type, Transform, Expose } from "class-transformer";

export class Proveedores{

    /**
    ** Variables de entrada: 
    ** nombre, direccion
    */

    @Expose({name: "nombre"})
    NAME: string
    @Expose({name: "direccion"})
    ADDRESS: string
}