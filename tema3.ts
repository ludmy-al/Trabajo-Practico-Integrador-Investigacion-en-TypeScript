// Tema 3: Tipos básicos / codigo

let title: string = "TypeScript";
let version: number = 7;
let isStrict: boolean = true;
let big: bigint = 9007199254740993n;
let id: symbol = Symbol("id");
let nothing: null = null;
let notSet: undefined = undefined;

let scores: number[] = [90, 72, 85];
let user: { name: string; age: number } = { name: "Ada", age: 36 };

console.log(title, version, isStrict, big, id);
console.log(nothing, notSet);
console.log(scores, user);