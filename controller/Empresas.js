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
import { conexion } from '../db/conexion_db.js';
export class Empresas {
    constructor(p1, p2, p3, p4, p5) {
        this.NAME = p1;
        this.ADDRESS = p2;
        this.PHONE = p3;
        this.EMAIL = p4;
        this.SITE_WEB = p5;
    }
    get guardar() {
        conexion.query(/*sql*/ `SELECT * FROM empresa`, (err, data, fields) => {
            console.log(data);
        });
        return "";
    }
}
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => { if (/^[a-z A-Z 0-9]+$/.test(value))
        return (value) ? value : "nombre_empresa";
    else
        throw { status: 406, message: "El formato del parametro nombre  no es correcto" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Empresas.prototype, "NAME", void 0);
__decorate([
    Expose({ name: "direccion" }),
    Transform(({ value }) => { if (/^[a-z A-Z 0-9]+$/.test(value))
        return (value) ? value : "nombre_alarma";
    else
        throw { status: 406, message: "El formato del parametro nombre  no es correcto" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Empresas.prototype, "ADDRESS", void 0);
__decorate([
    Expose({ name: "telefono" }),
    __metadata("design:type", String)
], Empresas.prototype, "PHONE", void 0);
__decorate([
    Expose({ name: "email" }),
    __metadata("design:type", String)
], Empresas.prototype, "EMAIL", void 0);
__decorate([
    Expose({ name: "sitio_web" }),
    __metadata("design:type", String)
], Empresas.prototype, "SITE_WEB", void 0);
