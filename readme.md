1. Investigación
Responder en README.md las preguntas de todos los temas e indicar las fuentes consultadas.

Tema 1: ¿Qué es TypeScript?
---------------------------------------------------------------------------
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

Tema 2: Crear y ejecutar un proyecto
---------------------------------------------------------------------------
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

Tema 3: Tipos básicos
---------------------------------------------------------------------------
● ¿Qué son los tipos string, number y boolean?
string: Un string de TypeScript es un string de JavaScript con el tipo “string". Para interpolar, escribe un template literal: backticks con marcadores “${expression}”. Las comillas simples y dobles crean strings normales sin interpolación.

number: JavaScript guarda todos los números como valores de coma flotante de 64 bits, así que TypeScript tiene un único tipo “number”. Los enteros son exactos hasta “Number.MAX_SAFE_INTEGER (2 ** 53 - 1)”. A partir de ahí, usa “bigint".

boolean: boolean tiene exactamente dos valores,” true” y “false". Los valores que solo son “truthy (1, "yes")” no son booleanos, así que conviértelos con “Boolean(x) o x !== 0”. 

● ¿Cómo se declara un array con tipo?
Un tipo array en TypeScript es el tipo de los elementos seguido de “[ ]: string[ ]” es un array de strings,” number[ ]” un array de números. La forma genérica “Array<string>” es el mismo tipo. Una vez tipado el array, cada elemento que añades y cada elemento que lees tiene ese tipo. 

● ¿Qué es un tipo unión?
Un tipo unión enumera alternativas con “ | “ un valor de tipo “ string | number “ es o un string o un número. Las uniones son la forma en que TypeScript describe valores que pueden tener legítimamente más de una forma, y el compilador te obliga a comprobar cuál tienes antes de usar nada específico de ella. 

● ¿Por qué se recomienda evitar any?
se recomienda evitar any porque any te deja hacer cualquier cosa y no comprueba nada, acepta a ciegas. El compilador acepta errores, tipos incorrectos y propiedades que faltan, y los errores aparecen en tiempo de ejecución. Se revomienda solo usarlo en los siguientes casos:
    ● Migrar un proyecto de JavaScript, donde any marca lo que todavía no está tipado.
    ● Código que el sistema de tipos no puede expresar bien, pequeño y detrás de una firma de función tipada.
    ● Código de tests que pasa datos incorrectos a propósito.

Tema 4: Funciones
---------------------------------------------------------------------------
● ¿Cómo se indican los tipos de los parámetros?
se escriben “name: Type” con “strict” que en TypeScript 7 un parametro sin anotación y sin contexto deel que inferir es un error.(ejemplo: “Parameter 'x' implicitly has an 'any' type”) 

● ¿Cómo se indica el tipo de retorno?
se indican por anotar o inferir, van despues de “function f(): Type” aunque es opcional, sin este TypeScript infiere el tipo aa partir de cada return del cuerpo. Una anotación vale la pena cuando la función se exporta, cuando tiene varios caminos de retorno o cuando es recursiva 

● ¿Qué es un parámetro opcional?
un parámetro opcional es darle un valor por defecto o tomar cualquier número de argumentos con un parámetro”  rest “. Incluye las reglas de orden, omitido frente a undefined, objetos de opciones y parámetros opcionales en tipos de función. Añadiendo un “ ? “ después del nombre de un parámetro, va a hacerlo opcional. Quien llama puede omitirlo, y dentro de la función su tipo incluye " undefined “. 

● ¿Qué es un parámetro por defecto?
un parámetro por defecto es un valor que logra que el parámetro sea opcional para quien llama, y le da un tipo sin “ undefined “  dentro de la función. El tipo se infiere a partir del valor por defecto, así que la anotación a menudo sobra. 

