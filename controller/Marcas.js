var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Expose } from "class-transformer";
import { IsDefined, IsString, IsUrl } from 'class-validator';
import { conexion } from '../db/conexion_db.js';
export class Marcas {
    constructor(p1 = "", p2, p3) {
        this.nombre = p1;
        this.pais_origen = p2;
        this.sitio_web = p3;
    }
    set guardar(body) {
        conexion.query(/*sql*/ `INSERT INTO marca SET ?`, body, (err, data, fields) => {
            console.log(err);
            console.log(data);
            console.log(fields);
        });
    }
    get allTabla() {
        const cox = conexion.promise();
        return (() => __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield cox.execute(/*sql*/ `
          SELECT * FROM marca
          `);
            return rows;
        }))();
    }
}
__decorate([
    Expose({ name: "NAME" }),
    IsString({ message: () => "El NAME debe ser una cadena de texto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro NAME es obligatorio" }; } }),
    __metadata("design:type", String)
], Marcas.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "ORIGEN_PAIS" }),
    IsString({ message: () => "El ORIGEN_PAIS debe ser una cadena de texto" }),
    __metadata("design:type", String)
], Marcas.prototype, "pais_origen", void 0);
__decorate([
    Expose({ name: "WEB_SITE" }),
    IsUrl({}, { message: "La URL no es válida" }),
    __metadata("design:type", String)
], Marcas.prototype, "sitio_web", void 0);
