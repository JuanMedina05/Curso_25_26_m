// primitivos en TypeScript

// 1.- Strings
let nombre:string="Juan";
let cp:string="18014";
let mensaje:string=`Bienvenido D.${nombre} -> cp: ${cp}`

function procesarTexto(texto:string):string{
    return texto.trim().toUpperCase();
}

console.log(procesarTexto(mensaje));


// 2.- Numbre
// calcularPrecioFinal(precio, impuesto, descuento){}
function calcularPrecioFinal(precio:number, impuesto:number, descuento:number):number{
    return precio*(1+(impuesto/100))*(1-(descuento/100));
}

console.log(calcularPrecioFinal(12,21,3));


// cualquier tipo any (No usar)
// función que verifique que lo que pase como parámetro es un número.
// Cuando: no es infinito, !isNaN
function esNumero(numero:any):boolean{
    return typeof numero === "number" && isFinite(numero) && !isNaN(numero);
}
esNumero(7);

// calcular el promedio de los elementos de un array de números
function calcularPromedio(numeros:number[]):number{
    if(numeros.length===0){
        throw new Error("No se puede calcular el promedio de un array vacio");
    }
    const suma:number = numeros.reduce((acc,numero)=>acc+=numero,0);
    return suma/numeros.length;
}

function calcularExtremos(numeros:number[]):{max:number,min:number}{
    if(numeros.length===0){
        throw new Error("No se puede calcular el extremo de un array vacio");
    }
    const min:number = Math.max(...numeros);
    const max:number = Math.min(...numeros);

    return  {max,min};
}



// comprobar si un email es correcto o no.
function esEmailValido(email:string):boolean{

    // Expresiones regulares. El . y el eespacio son caracteres especiales y hay que escaparlos: \. y \s
    const emailRegex:RegExp=/^[^\s@]+@+[^\s@]\.[^\s@]+$/;
    return emailRegex.test(email);
}
esEmailValido("lomoqueso@lomo.que");



// interface -> tipo de dato generado por el usuario para una determinada situación
interface permisosUsuario{
    puedeLeer:boolean;
    puedeEscribir:boolean;
    puedeBorrar:boolean;
}

// Crear una función llamada obtener permisos que dependiendo de si el usuario es administrador, invitado o usuario cambie los permisos de la interfa
type tipoUsuario= "inivtado" | "usuario" | "administrador";

// type permite crear un tipo de dato entre unos valores dados.

function obtenerPermisos(usuario:tipoUsuario):permisosUsuario{
    switch(usuario){
        case "administrador" : return {puedeLeer:true,puedeEscribir:true,puedeBorrar:true};
        case "usuario" : return {puedeLeer:true,puedeEscribir:true,puedeBorrar:false}; 
        case "inivtado": return {puedeLeer:true,puedeEscribir:false,puedeBorrar:false}; 
        default : return{puedeLeer:false,puedeEscribir:false,puedeBorrar:false};
    }
}

obtenerPermisos("usuario");


// NULL y UNDEFINED
let posibleNombre:string | null ="invitado";
let posibleNombreIndefinido:string | undefined = undefined;


// arrow function
const duplicar =(numero:number):number => {
    return numero*2;
}

//Crear un array de objetos y me devuelva los arrays que son mayores de edad
const usuarios=[
    {nombre:"Jose",edad:19},
    {nombre:"Manuel",edad:15},
    {nombre:"María",edad:20},
    {nombre:"Marta",edad:17},
]


const misNumeros:number[] = [1,-3,4,43,5,-9,32,2,0,6];

// función procesarNumeros que devuelva un array de números sólo positivos, multiplicados por 2 y ordenados de menor a mayor

/*const procesarNumeros(numeros:number[]):number[]=>{
    return numeros
        .filter(numero => numero>0)
        .map(numero=>numero*2)
        .sort((a,b)=>b-a);
}*/


// ejercicio

interface Cliente{
    id:number;
    nombre:string;
    emain:string;
    telefono:string;
}

// Crear una función que genere un MAP
// {
//      idUsuario:{
//          nombre:string,
//          emain:string,
//          telefono:string,
//      }
// }
function generarMapaClientes(clientes:Cliente[]):Map<number,{nombre:string,emain:string,telefono:string}>{
    const mapaClientes:Map<number,{nombre:string,emain:string,telefono:string}> = new Map();

    clientes.forEach(cliente=>{
        mapaClientes.set(cliente.id,{
            nombre:cliente.nombre,
            emain:cliente.emain,
            telefono:cliente.telefono,
        });
    });
    return mapaClientes;
}


// Ejercicio calculadora simple: crear una calculadora tipada que realice operaciones básicas, para ello creamos una interfaz llamada operacion que tiene tipo con cutro valores
//  (suma resta, multiplicacion y division) 
// operando uno y operación
// crear una función llamada calculadora que me devuelva el calculo de los dos operandos. Probarlo con 10,5 y 10,0.
// ¿Se podría ampliar a otras operaciones?



// Map:
const edades = new Map<string,number>();

edades.set("Juan",25);
edades.has("Juan"); // devuelve si existe Juan

interface Datos{
   nombre:string; 
   email:string;
   cp:number;
}
const misUsuarios = new Map<string,Datos>();
misUsuarios.set("Antonio",{
    nombre:"Antonio García",
    email:"antonio@gmail.com",
    cp:28014,
});


// Set:
const mySet = new Set<number>();
mySet.add(5);

// Crear un sistema de categorías:
// crear una variable llamada catálogo que tenga dentro un set de productos.
// crear las siguientes funciones:
// agregarProducto():boolean
// mostrarCatalogo():Catalogo
// Adicionalmente crear una función llamada buscar producto que le pase un string (nombre del producto) o que busque por nombre de producto.
// Nota: cuidado con el get que a veces devuelve undefined

const catalogo = new Map<string,Set<string>>();

