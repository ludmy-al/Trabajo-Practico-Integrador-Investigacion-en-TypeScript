// Tema 5: Interfaces y type / codigo

// 1. INTERFAZ (interface)
// Define la estructura que debe tener un objeto.

interface Persona {
    nombre: string;
    edad: number;
    apellido?: string;
    readonly dni: number;
}

const persona: Persona = {
    nombre: "Ludmila",
    edad: 20,
    dni: 12345678
};

console.log(persona);


// 2. TYPE
// Permite crear alias de tipos, uniones y otros tipos.

type Rol = "ADMIN" | "USER";

let usuario: Rol = "ADMIN";

console.log(usuario);


// 3. PROPIEDAD OPCIONAL
// El signo ? permite que una propiedad pueda omitirse.

interface Producto {
    nombre: string;
    precio: number;
    descripcion?: string;
}

const producto: Producto = {
    nombre: "Notebook",
    precio: 500000
};

console.log(producto);


// 4. CUÁNDO USAR INTERFACE Y TYPE

// Interface: ideal para estructuras de objetos.
interface Animal {
    nombre: string;
}

interface Perro extends Animal {
    raza: string;
}

const perro: Perro = {
    nombre: "Toby",
    raza: "Caniche"
};

// Type: ideal para uniones de tipos.
type Identificador = string | number;

let id: Identificador = 123;

console.log(perro);
console.log(id);
