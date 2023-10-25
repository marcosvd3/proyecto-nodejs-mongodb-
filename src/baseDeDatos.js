import { connect } from "mongoose"; //Conexión con base datos
import { MONGODB_URI } from "./config.js"; // Tiene la configuración de la base de Datos

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("Base de datos Conectada a", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
