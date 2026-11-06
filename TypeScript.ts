// Tema 1: ¿Qué es TypeScript? codigo

interface User {
    name: string;
    age: number;
}

function describe(user: User): string {
    return `${user.name} is ${user.age} years old`;
}

const ada: User = { name: "Ada", age: 36 };
console.log(describe(ada));

const scores: number[] = [90, 72, 85];
const total = scores.reduce((sum, s) => sum + s, 0); // El total se infiere como número
console.log(total / scores.length);