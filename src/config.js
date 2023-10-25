import { config } from "dotenv"; // configuracion de la base de datos

config();
export const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI);
