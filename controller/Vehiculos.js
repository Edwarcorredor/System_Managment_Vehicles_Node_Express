var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString } from 'class-validator';
import { conexion } from '../db/conexion_db.js';
export class Vehiculos {
    constructor(p1, p2, p3, p4, p5) {
        this.EMPRESA_ID = p1;
        this.MODELO_ID = p2;
        this.SERIE_NUMERO = p3;
        this.PLATE = p4;
        this.STATE = p5;
    }
    get guardar() {
        conexion.query(/*sql*/ `SELECT * FROM empresa`, (err, data, fields) => {
            console.log(data);
        });
        return "";
    }
}
__decorate([
    Expose({ name: "id_empresa" }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id_empresa no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id_empresa es obligatorio" }; } }),
    __metadata("design:type", Number)
], Vehiculos.prototype, "EMPRESA_ID", void 0);
__decorate([
    Expose({ name: "id_modelo" }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id_modelo no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id_modelo es obligatorio" }; } }),
    __metadata("design:type", Number)
], Vehiculos.prototype, "MODELO_ID", void 0);
__decorate([
    Expose({ name: "numero_serie" }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "El parametro numero_serie  no cumple con el formato solicitado" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Vehiculos.prototype, "SERIE_NUMERO", void 0);
__decorate([
    Expose({ name: "placa" }),
    IsString({ message: () => "La placa debe ser una cadena de texto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro placa es obligatorio" }; } }),
    __metadata("design:type", String)
], Vehiculos.prototype, "PLATE", void 0);
__decorate([
    Expose({ name: "estado" }),
    IsString({ message: () => "El estado debe ser una cadena de texto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro estado es obligatorio" }; } }),
    __metadata("design:type", String)
], Vehiculos.prototype, "STATE", void 0);
