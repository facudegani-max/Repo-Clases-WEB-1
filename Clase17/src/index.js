// Importaciones nombradas (deben coincidir con las exportaciones de cada archivo)
import { productosMascotas } from "./productos.js";
import { renderizarCatalogo } from "./funciones.js";

// Referenciamos el elemento HTML
const contenedorProducto = document.getElementById("contenedor-productos");

// Renderizamos la lista de productos
renderizarCatalogo(contenedorProducto, productosMascotas);