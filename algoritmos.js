//ejercicio1: funcion que tome como parametro un arreglo de numeros
function calcularPromedio(arreglo){

    if(arreglo.length === 0){
        return 0;
    }
    let suma = arreglo.reduce((acumulador,valor) => acumulador + valor, 0);
    let promedio = suma / arreglo.length;
    return promedio;
}
let numeros = [2,6,1,8];
let resultado = calcularPromedio(numeros);

console.log("Promedio:", resultado);

/*---------------------------------------*/

//ejercicio2: funcion que retorne el ultimo elemento del arreglo

function ultimoElemento(arr){
return arr[arr.length - 1];

}

console.log(ultimoElemento([4, 8, 5, 3]))  

/*---------------------------------------*/

//ejercicio3: suma de numeros pares

function sumarNumerosPares(num) {
    
    let suma = 0;

    
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            suma += num[i];
        }
    }
    
    return suma;

}

let num = [1, 2, 5, 8, 9, 12, 2, 3];
console.log(sumarNumerosPares(numeros));

/*---------------------------------------*/

//ejercicio4: suma de numeros pares

function calcularFactorial(numero) {
    let factorial = 1;

    for (let i = numero; i > 0; i--) {
        factorial *= i;
    }

    return factorial;
}


let numero = 6;
console.log(calcularFactorial(numero)); 


/*---------------------------------------*/

//ejercicio5 :

function verificarParImpar() {

    for (let i = 1; i <= 15; i++) {

        if (i % 2 === 0) {
            console.log(i + " es par");
        } else {
            console.log(i + " es impar");
        }
    }
}


verificarParImpar();

/*---------------------------------------*/

//ejercicio6

function loteria(numero1, numero2) {
    
    for (let i = 1; i <= 50; i++) {
    
        if (i === numero1 || i === numero2) {
            console.log("¡Lotería!");
        } else {
            console.log(i);
        }
    }
}


let numero1 = 4;
let numero2 = 33;
loteria(numero1, numero2);

/*---------------------------------------*/

//ejercicio7

function fizzBuzz() {
    
    for (let i = 1; i <= 100; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Ejemplo de uso:
fizzBuzz();

/*---------------------------------------*/

//ejercicio 8

function costoHelado(topping) {
    let precioBase = 50;
    let precioTopping = 0;

    
    switch(topping) {
        case "oreo":
            precioTopping = 10;
            break;
        case "kitkat":
            precioTopping = 15;
            break;
        case "brownie":
            precioTopping = 20;
            break;
        default:
            console.log("No tenemos este topping, lo sentimos.");
            break;
    }

    
    let precioTotal = precioBase + precioTopping;
    console.log("El precio total es: " + precioTotal + " MXN");
}


let topping = "oreo";
costoHelado(topping);

/*---------------------------------------*/

// ejercicio9

function calcularCostoCurso(tipoCurso, beca) {
    let costoMensual;
    let duracion;

    
    switch(tipoCurso) {
        case "Course":
            costoMensual = 4999;
            duracion = 2;
            break;
        case "Carrera":
            costoMensual = 3999;
            duracion = 6;
            break;
        case "Master":
            costoMensual = 2999;
            duracion = 12;
            break;
        default:
            console.log("Tipo de curso no válido.");
            return;
    }

    
    let descuento = 0;
    switch(beca) {
        case "Facebook":
            descuento = 0.20;
            break;
        case "Google":
            descuento = 0.15;
            break;
        case "Jesua":
            descuento = 0.50;
            break;
        default:
            console.log("No se aplica ninguna beca.");
            break;
    }

    
    let costoFinalMensual = costoMensual * (1 - descuento);
    let costoTotal = costoFinalMensual * duracion;

    console.log("Costo mensual con descuento: " + costoFinalMensual + " MXN");
    console.log("Costo total del curso: " + costoTotal + " MXN");
}


let tipoCurso = "Carrera";
let beca = "Google";
calcularCostoCurso(tipoCurso, beca);

/*---------------------------------------*/

//ejercicio 10 

function calcularTotalAPagar(tipoVehiculo, kmsRecorridos, litrosConsumidos) {
    let precioKilometro;

    
    switch(tipoVehiculo) {
        case "coche":
            precioKilometro = 0.20;
            break;
        case "moto":
            precioKilometro = 0.10;
            break;
        case "autobus":
            precioKilometro = 0.50;
            break;
        default:
            console.log("Tipo de vehículo no válido.");
            return;
    }

    
    let costoAdicional = litrosConsumidos > 100 ? 10 : 5;

    
    let totalAPagar = (precioKilometro * kmsRecorridos) + costoAdicional;
    console.log("Total a pagar: " + totalAPagar + " MXN");
}


let tipoVehiculo = "coche";
let kmsRecorridos = 150;
let litrosConsumidos = 120;
calcularTotalAPagar(tipoVehiculo, kmsRecorridos, litrosConsumidos);
