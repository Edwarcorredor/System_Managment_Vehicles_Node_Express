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
import { IsDefined, IsNumber, IsString, IsEmail } from 'class-validator';
import { conexion } from '../db/conexion_db.js';
export class SucursalesProveedores {
    constructor(p1, p2, p3, p4, p5) {
        this.PROVEEDOR_ID = p1;
        this.NAME = p2;
        this.ADDRESS = p3;
        this.PHONE = p4;
        this.EMAIL = p5;
    }
    get guardar() {
        conexion.query(/*sql*/ `SELECT * FROM empresa`, (err, data, fields) => {
            console.log(data);
        });
        return "";
    }
}
__decorate([
    Expose({ name: "id_proveedor" }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id_proveedor no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id_proveedor es obligatorio" }; } }),
    __metadata("design:type", Number)
], SucursalesProveedores.prototype, "PROVEEDOR_ID", void 0);
__decorate([
    Expose({ name: "nombre" }),
    IsString({ message: () => "El nombre debe ser una cadena de texto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro nombre es obligatorio" }; } }),
    __metadata("design:type", String)
], SucursalesProveedores.prototype, "NAME", void 0);
__decorate([
    Expose({ name: "direccion" }),
    Transform(({ value }) => { if (/^[a-z A-Z 0-9]+$/.test(value))
        return (value) ? value : "direccion_sucursal";
    else
        throw { status: 406, message: "El formato del parametro direccion  no es correcto" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], SucursalesProveedores.prototype, "ADDRESS", void 0);
__decorate([
    Expose({ name: "telefono" }),
    Transform(({ value }) => { if (/^[0-9]|undefined+$/.test(value))
        return value;
    else
        throw { status: 400, message: "El parametro telefono  no cumple con el formato solicitado" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], SucursalesProveedores.prototype, "PHONE", void 0);
__decorate([
    Expose({ name: "email" }),
    IsEmail({}, { message: "El correo electrónico no es válido" }),
    __metadata("design:type", String)
], SucursalesProveedores.prototype, "EMAIL", void 0);
