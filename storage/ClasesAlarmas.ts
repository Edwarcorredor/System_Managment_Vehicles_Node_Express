import { Type, Transform, Expose } from "class-transformer";

export class ClasesAlarmas{
    /**
    ** Variables de entrada:
    ** nombre, descripcion, id_mantenimiento
    */
   @Expose({name: "nombre"})
   NAME: string
   @Expose({name: "descripcion"})
   DESCRIPTION: string
   @Expose({name: "id_mantenimiento"})
   @Transform(({value}) => {
    let data = /^[0-9]+$/g.test(value);
    if (data && typeof value == "number"){ 
        return Number(value);
    } 
    else{
        throw {status:401, message:"Error en el id_mantenimiento"};
    }    
    })
   MANTENIMIENTO_ID: number

   constructor(p1:string, p2:string, p3:number){
    this.NAME = p1;
    this.DESCRIPTION = p2;
    this.MANTENIMIENTO_ID = p3;
    }
}