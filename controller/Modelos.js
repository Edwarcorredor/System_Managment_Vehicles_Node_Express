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
import { IsDefined } from 'class-validator';
import { conexion } from '../db/conexion_db.js';
export class Modelos {
    constructor(p1 = 1, p2 = "hola", p3) {
        this.id_marca = p1;
        this.nombre = p2;
        this.anio_lanzamiento = p3;
    }
    set guardar(body) {
        conexion.query(/*sql*/ `INSERT INTO modelo SET ?`, body, (err, data, fields) => {
            console.log(err);
            console.log(data);
            console.log(fields);
        });
    }
    get allTabla() {
        const cox = conexion.promise();
        return (() => __awaiter(this, void 0, void 0, function* () {
            const [rows, fields] = yield cox.execute(/*sql*/ `
          SELECT * FROM modelo
          `);
            return rows;
        }))();
    }
    actualizar(id, body) {
        conexion.query(/*sql*/ `UPDATE modelo SET ? WHERE id = ?`, [body, id], (err, data, fields) => {
            console.log(err);
            console.log(data);
            console.log(fields);
        });
    }
    eliminar(id) {
        conexion.query(/*sql*/ `DELETE FROM modelo WHERE id = ?`, [id], (err, data, fields) => {
            console.log(err);
            console.log(data);
            console.log(fields);
        });
    }
}
__decorate([
    Expose({ name: "MARCA_ID" }),
    Transform(({ value }) => {
        let data = /^([1-9]\d*)$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 401, message: "Error en el MARCA_ID" };
        }
    }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro MARCA_ID es obligatorio" }; } }),
    __metadata("design:type", Number)
], Modelos.prototype, "id_marca", void 0);
__decorate([
    Expose({ name: "NAME" }),
    Transform(({ value }) => {
        let data = /^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$/g.test(value);
        if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 401, message: "Error en el NAME" };
        }
    }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro NAME es obligatorio" }; } }),
    __metadata("design:type", String)
], Modelos.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "LANZAMIENTO_ANIO" }),
    Transform(({ value }) => {
        let data = /^(?:[1-9]\d*|undefined)$/g.test(value);
        if (data) {
            return value;
        }
        else {
            throw { status: 401, message: "Error en el LANZAMIENTO_ANIO" };
        }
    }),
    __metadata("design:type", Number)
], Modelos.prototype, "anio_lanzamiento", void 0);
