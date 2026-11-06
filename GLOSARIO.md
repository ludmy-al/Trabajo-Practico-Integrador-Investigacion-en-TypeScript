GLOSARIO
---------------------------------------------------------------------------
BigInt:
Definición: Es un tipo de dato que permite trabajar con números enteros muy grandes, que superan el límite seguro de number.

Ejemplo en TypeScript:
let numero: bigint = 9007199254740993n;

console.log(numero);


Readonly:
Definición: Es una propiedad que no permite modificar su valor después de asignarlo al objeto.

Ejemplo en TypeScript:

interface Persona {
    readonly nombre: string;
}

const persona: Persona = {
    nombre: "Ludmila"
};

console.log(persona.nombre);

FUENTES
---------------------------------------------------------------------------
●https://codica.la/blog/todo-lo-que-debe-saber-el-principiante-sobre-typescript
●https://coddy.tech/docs/es/typescript/functions
●https://www.explainthis.io/en/swe/typescript/09-enums-literals
●https://www.dominikbuilds.com/posts/stop-using-typescript-enums
●el material del profe :D
