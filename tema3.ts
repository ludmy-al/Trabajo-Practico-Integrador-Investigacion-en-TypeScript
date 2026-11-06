// Tema 3: Tipos básicos / codigo

// 1. STRING, NUMBER Y BOOLEAN
let title: string = "TypeScript";
let version: number = 7;
let isStrict: boolean = true;

// Interpolación de strings
console.log(`Estamos usando ${title} versión ${version}`);


// 2. BIGINT
let big: bigint = 9007199254740993n;


// 3. ARRAYS CON TIPO
let scores: number[] = [90, 72, 85];
let names: string[] = ["Ana", "Pedro", "Lucía"];

console.log(scores, names);


// 4. TIPO UNIÓN
let id: string | number;

id = "ABC123";
console.log(id);

id = 123;
console.log(id);


// 5. CONVERSIÓN A BOOLEAN
let value: number = 1;
let active: boolean = Boolean(value);

console.log(active);

// 6. EVITAR ANY
// Es mejor indicar el tipo correcto para evitar errores.
let username: string = "Ada";

console.log(username);


// 7. OTROS TIPOS
let nothing: null = null;
let notSet: undefined = undefined;
let symbolId: symbol = Symbol("id");

console.log(big, nothing, notSet, symbolId);
