import { Type, Transform, Expose } from "class-transformer";

export class Empresas{

    /** @internal 
    ** Variables de entrada:
    ** nombre, direccion
    */

    @Expose({name: "nombre"})
    NAME: string
    @Expose({name: "direccion"})
    ADDRESS: string
    
}