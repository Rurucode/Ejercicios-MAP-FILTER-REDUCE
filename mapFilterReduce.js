// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo

// // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
let elevar = numbers.map((elemento) => {return elemento**});
console.log(elevar)

// ------------------------------------------------------------------------------------------

// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

let resultado = foodList.map((comida, i) => {
    let paises = ["Italia", "Japon", "Valencia"]
     return i <= 2 ? `Como soy de ${paises[i]}, amo comer ${comida},` : `Aunque no como carne, el ${comida} es sabroso.`;
})

resultado

//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/


// ------------------------------------------------------------------------------


// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];
  
  let frases = staff.map(({name, role, hobbies}) => {return `${name} es ${role} y le gusta el ${hobbies[0]} y ${hobbies[1]}`})
  
  frases
  

// Resultado esperado
/*
  [
    'Pepe es TheBoss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/


// FILTER FILTER FILTER---------------------------------------------
// FILTER FILTER FILTER---------------------------------------------------------


// Crea un segundo array con que devuelva los impares

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let impares = numbers.filter((n) =>{ return n % 2 > 0})

impares





// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: "TV Samsung",
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];



let mayorTrescientos = inventory.filter(({price}) => { return price > 300}).map(({name}) =>{return name})

mayorTrescientos
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/

// --------------------------------------
// --------------------------------------
// 3. Ejercicios reduce


// Dado el siguiente array, obten la multiplicación de todos los elementos del array

const numeros = [39, 2, 4, 25, 62];

let multipli = numeros.reduce((anterior, cumulo) => {return anterior * cumulo})
// Salida--> 483600
multipli


// Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  "Ruru",
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

let reducir = sentenceElements.reduce((a, b) =>{return `${a} ${b}`})

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'



// Obtener el monto total de los elementos que pertenecen a catergory "code"

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

let elCodigo = books.filter(({category}) => { return category == "code"}).map(({price})=>{return price}).reduce((a, b)=>{return a + b})

elCodigo