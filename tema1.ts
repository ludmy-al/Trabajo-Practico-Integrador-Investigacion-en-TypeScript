// Tema 1: ¿Qué es TypeScript? /codigo

// 1. INTERFAZ Y TIPADO ESTÁTICO
interface User {
    name: string;
    age: number;
}

// 2. FUNCIÓN CON TIPOS
function describe(user: User): string {
    return `${user.name} is ${user.age} years old`;
}

// 3. OBJETO QUE CUMPLE CON LA INTERFAZ
const ada: User = { 
    name: "Ada", 
    age: 36 
};

console.log(describe(ada));

// 4. ARRAY CON TIPO
const scores: number[] = [90, 72, 85];

// 5. INFERENCIA DE TIPOS
const total = scores.reduce((sum, s) => sum + s, 0); // El total se infiere como número
console.log(total / scores.length);