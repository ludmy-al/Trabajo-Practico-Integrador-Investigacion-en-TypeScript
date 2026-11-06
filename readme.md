1. Investigación
Responder en README.md las preguntas de todos los temas e indicar las fuentes consultadas.

Tema 1: ¿Qué es TypeScript?
● ¿Qué es TypeScript y quién lo desarrolla?
TypeScript es un lenguaje de programación de tipado estático gradual basado en JavaScript, para crear programas más confiables y mantenibles, detectando errores en tiempo de desarrollo, fue desarrollado por Anders Hejlsberg y lanzado inicialmente en 2012.

● ¿Qué diferencias tiene con JavaScript?
TIPADO:
TypeScript a diferencia de JavaScript tiene un tipado estático gradual, indica el tipo de variables los parámetros de las funciones y otros elementos del código, el compilador los verifica antes de ejecutar el programa, y con tsconfig.json las verificaciones se vuelven más exigentes.

COMPILACIÓN:
TypeScript requiere una etapa de tiempo de compilación, en esta, el código fuente en TypeScript se compila a JavaScript estándar y también se verifican los tipos de datos, y lo que queda de JavaScript se ejecuta en el navegador o servidor

● ¿Qué ventajas ofrece?
las ventajas que tiene son que gracias a su tipado, ayuda a mejorar la productividad de los desarrolladores. Proporciona autocompletado de código, verificaciones estáticas de tipos, documentación integrada y otras funciones que facilitan el desarrollo y el mantenimiento del código. 

● ¿Cuál es su versión actual?
su versión actual es TypeScript 7
---------------------------------------------------------------------------
Tema 2: Crear y ejecutar un proyecto
● ¿Cómo se instala TypeScript en un proyecto?
se instala con el comando npm i -D typescript 

● ¿Para qué sirve el archivo tsconfig.json?
le indica a TypeScript que archivos forman parte del proyecto, que tan estricto debe ser al verificar los tipos y como generar el JavaScript, sin estos no sabe que compilar

● ¿Qué hace el comando tsc?
al ser el compilador, cuando es ejecutado verifica tipos y genera los .js en dist/

● ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
tsc: verifica los tipos y genera JavaScript, se lo llama “compilador”
tsx: Genera JavaScript sin verificar sus tipos, tambien llamado “transpilador”
node: solo borra las anotaciones de tipos, llamado Type stripping
---------------------------------------------------------------------------
