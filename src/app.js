import express from "express";
import routerProductos from "./rutas/productos.rutas.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors()); // permite todos los orígenes

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Aquí montas las rutas de productos
app.use("/productos", routerProductos);

export default app;
