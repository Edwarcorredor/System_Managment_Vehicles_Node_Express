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
import { Transform, Expose } from "class-transformer";
import { IsDefined, IsString } from 'class-validator';
import { conexion } from '../db/conexion_db.js';
export class Vehiculos {
    constructor(p1, p2, p3, p4, p5) {
        this.id_empresa = p1;
        this.id_modelo = p2;
        this.numero_serie = p3;
        this.placa = p4;
        this.estado = p5;
    }
    set guardar(body) {
        conexion.query(/*sql*/ `INSERT INTO vehiculo SET ?`, body, (err, data, fields) => {
            console.log(err);
            console.log(data);
            console.log(fields);
        });
    }
    get allTabla() {
        const cox = conexion.promise();
        return (() => __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield cox.execute(/*sql*/ `
          SELECT * FROM vehiculo
          `);
            return rows;
        }))();
    }
}
__decorate([
    Expose({ name: "EMPRESA_ID" }),
    Transform(({ value }) => {
        let data = /^\d+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el EMPRESA_ID" };
        }
    }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro EMPRESA_ID es obligatorio" }; } }),
    __metadata("design:type", Number)
], Vehiculos.prototype, "id_empresa", void 0);
__decorate([
    Expose({ name: "MODELO_ID" }),
    Transform(({ value }) => {
        let data = /^\d+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el EMPRESA_ID" };
        }
    }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro MODELO_ID es obligatorio" }; } }),
    __metadata("design:type", Number)
], Vehiculos.prototype, "id_modelo", void 0);
__decorate([
    Expose({ name: "SERIE_NUMERO" }),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "El parametro SERIE_NUMERO  no cumple con el formato solicitado" }; }, { toClassOnly: true }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro SERIE_NUMERO es obligatorio" }; } }),
    __metadata("design:type", String)
], Vehiculos.prototype, "numero_serie", void 0);
__decorate([
    Expose({ name: "PLATE" }),
    IsString({ message: () => "La placa debe ser una cadena de texto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro PLATE es obligatorio" }; } }),
    __metadata("design:type", String)
], Vehiculos.prototype, "placa", void 0);
__decorate([
    Expose({ name: "STATE" }),
    IsString({ message: () => "El STATE debe ser una cadena de texto" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro STATE es obligatorio" }; } }),
    __metadata("design:type", String)
], Vehiculos.prototype, "estado", void 0);
