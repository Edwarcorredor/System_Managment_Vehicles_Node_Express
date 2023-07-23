import { Type, Transform, Expose } from "class-transformer";

export class ClasesAlarmas{
    /**
    ** Variables de entrada:
    ** nombre, descripcion
    */
   @Expose({name: "nombre"})
   NAME: string
   @Expose({name: "descripcion"})
   DESCRIPTION: string
}