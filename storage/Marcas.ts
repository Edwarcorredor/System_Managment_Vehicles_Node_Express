import { Type, Transform, Expose } from "class-transformer";

export class Marcas{

    /**
    ** Variables de entrada:
    ** nombre 
    */

    @Expose({name: "nombre"})
    NAME: string

    
}