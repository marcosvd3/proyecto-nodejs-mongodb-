import express from "express"; //configuracion de las rutas
import { create } from "express-handlebars"; // Permite manejar ciclos y la funciones if dentro de codigo html
import indexRoutes from "./routes/index.routes.js"; // Importa las rutas desde la carpeta routs
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

const xphbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", xphbs.engine);

app.set("view engine", ".hbs");

//middelware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use(indexRoutes);

export default app;
