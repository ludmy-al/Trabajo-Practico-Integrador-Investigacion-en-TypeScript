// Tema 6: Enums y tipos literales / codigo


// 1. ENUM
// Define un conjunto de constantes con nombre.

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let direccion: Direction = Direction.Up;

console.log(direccion);


// 2. TIPO LITERAL
// Permite aceptar solamente valores específicos.

type Estado = "activo" | "inactivo" | "pendiente";

let usuario: Estado = "activo";

console.log(usuario);


// 3. ENUM Y TIPO LITERAL
// Ambos permiten limitar los valores posibles.

// Usando ENUM
enum Rol {
    Admin = "ADMIN",
    User = "USER"
}

let rolUsuario: Rol = Rol.Admin;


// Usando TYPE (tipo literal)
type Prioridad = "alta" | "media" | "baja";

let prioridadTarea: Prioridad = "alta";

console.log(rolUsuario);
console.log(prioridadTarea);
