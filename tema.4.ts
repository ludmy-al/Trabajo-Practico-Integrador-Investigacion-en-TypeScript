// Tema 4: Funciones / codigo


// 1. TIPOS DE LOS PARÁMETROS
function saludar(nombre: string, edad: number): void {
    console.log(`Hola ${nombre}, tenés ${edad} años.`);
}

saludar("Ludmila", 20);


// 2. TIPO DE RETORNO
function sumar(a: number, b: number): number {
    return a + b;
}

console.log(sumar(5, 10));


// 3. PARÁMETRO OPCIONAL
function presentar(nombre: string, apellido?: string): string {
    return apellido
        ? `Hola ${nombre} ${apellido}`
        : `Hola ${nombre}`;
}

console.log(presentar("Ludmila"));
console.log(presentar("Ludmila", "Alcaraz"));


// 4. PARÁMETRO POR DEFECTO
function despedir(nombre: string = "invitado"): string {
    return `¡Hasta luego, ${nombre}!`;
}

console.log(despedir());
console.log(despedir("Ludmila"));
