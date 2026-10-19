
// 1. FUNCIONES COMUNES

function suma() {
  console.log(5 + 1);
}

suma(); 

// 2. FUNCIONES FLECHA

// Sintaxis básica con cuerpo de función
const multiplicar = (a, b) => {
  return a * b;
};

// Sintaxis simplificada (retorno implícito)
const duplicar = numero => numero * 2;

console.log(multiplicar(3, 4)); // Imprime: 12
console.log(duplicar(5));        // Imprime: 10


// 3. FUNCIONES CALLBACKS

function procesarUsuario(nombre, callback) {
  console.log(`Procesando a ${nombre}...`);
  callback(); // Ejecutamos la función recibida como argumento
}

function saludar() {
  console.log("¡Hola! Proceso completado.");
}

procesarUsuario("Carlos", saludar);


// 4. OPERACIONES Y FUNCIONES CON ARREGLOS


// --- .forEach ---
const numeros = [1, 2, 3, 4, 5];

console.log("--- Recorriendo con .forEach ---");
numeros.forEach(numero => {
  console.log(`El número es: ${numero}`);
});

// --- .map ---
const dobles = numeros.map(numero => numero * 2);
console.log("--- Resultado de .map ---");
console.log(dobles); // Imprime: [2, 4, 6, 8, 10]

// --- .filter y .find ---
const productos = [
  { nombre: "Teclado", precio: 25 },
  { nombre: "Mouse", precio: 15 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "Mousepad", precio: 10 }
];

// .filter(): Devuelve UN ARREGLO con todos los que cumplen la condición
const baratos = productos.filter(producto => producto.precio < 30);
console.log("--- Resultado de .filter (< 30) ---");
console.log(baratos);

// .find(): Devuelve SOLO EL PRIMER elemento que coincide
const productoEncontrado = productos.find(producto => producto.nombre === "Mouse");
console.log("--- Resultado de .find ('Mouse') ---");
console.log(productoEncontrado);