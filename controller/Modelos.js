var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString } from 'class-validator';
import { conexion } from '../db/conexion_db.js';
export class Modelos {
    constructor(p1, p2, p3) {
        this.MARCA_ID = p1;
        this.NAME = p2;
        this.LANZAMIENTO = p3;
    }
    get guardar() {
        conexion.query(/*sql*/ `SELECT * FROM empresa`, (err, data, fields) => {
            console.log(data);
        });
        return "";
    }
}
__decorate([
    Expose({ name: "id_marca" }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id_marca no es correcto" }; } }),
    __metadata("design:type", Number)
], Modelos.prototype, "MARCA_ID", void 0);
__decorate([
    Expose({ name: "nombre" }),
    IsString({ message: () => "El nombre debe ser una cadena de texto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro nombre es obligatorio" }; } }),
    __metadata("design:type", String)
], Modelos.prototype, "NAME", void 0);
__decorate([
    Expose({ name: "anio_lanzamiento" }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro anio_lanzamiento no es correcto" }; } }),
    __metadata("design:type", Number)
], Modelos.prototype, "LANZAMIENTO", void 0);
