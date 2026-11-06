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
//  "compilerOptions": {
        // A qué versión de JavaScript se compila
        //         "target": "ES2022",
        // Sistema de módulos: sigue lo que indique "type" en package.json
        //          "module": "nodenext",
        // Dónde está el código fuente y dónde va el JavaScript generado
        //          "rootDir": "./src",
        //          "outDir": "./dist",
        // Tipos globales a incluir (process, fs, etc.)
        //          "types": ["node"],
        // Verificación estricta de tipos
        //          "strict": true,
        // No generar archivos si hay errores de tipos
        //          "noEmitOnError": true,
        // Mejor compatibilidad al importar librerías CommonJS
        //          "esModuleInterop": true,
        // No revisar los tipos dentro de node_modules (más rápido)
        //          "skipLibCheck": true,
        // Error si un import no respeta mayúsculas/minúsculas del archivo
        //          "forceConsistentCasingInFileNames": true,
        // Mapas para que los errores en ejecución apunten al .ts original
        //          "sourceMap": true
//  },
        // Archivos que forman parte del proyecto
        // "include": ["src"]
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
