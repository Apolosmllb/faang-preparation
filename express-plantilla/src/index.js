import express, { json } from "express";
import morgan from "morgan";
import employeesRoutes from "./routes/employees.routes.js";
//Inizialitations
const app = express();

//Settings
app.set("port", process.env.PORT || 5800);

//Middlewares
app.use(morgan("dev"));
app.use(json());

//Routes
app.use("/api/v1/employees", employeesRoutes);

//Run server
app.listen(app.get("port"), () => {
  console.log("🚀Server on port", app.get("port"));
});
