import dotenv from 'dotenv'
import mysql from 'mysql2';
dotenv.config("../");
export const conexion = mysql.createPool(JSON.parse(process.env.MY_DATABASE));