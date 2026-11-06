// Tema 2: Crear y ejecutar un proyecto / codigo

// 1. Función con tipos
function add(a: number, b: number): number {
    return a + b;
}

console.log(`2 + 3 = ${add(2, 3)}`);


// 2. Variable con tipo
let nombre: string = "Ludmila";

console.log(`Hola ${nombre}`);


// 3. Ejemplo de configuración del proyecto
// El archivo tsconfig.json configura la compilación.
// Ejemplo de opciones que puede contener:
//
// {
//     "compilerOptions": {
//         "strict": true,
//         "outDir": "./dist"
//     }
// }


// 4. Comandos para trabajar con TypeScript

// Instalar TypeScript:
// npm i -D typescript

// Compilar el archivo:
// npx tsc

// Ejecutar con tsx:
// npx tsx index.ts

// Ejecutar con Node:
// node index.js
