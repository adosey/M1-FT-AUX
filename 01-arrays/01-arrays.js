
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
//     let newArray = [];
//     for(let i=0;i<array.length;i++){
//         if(array[i]<10){
//             newArray.unshift(array[i]);
//         }
//     }
//  return newArray;
//-------------------------------------------------------------------------
// let newArray = [];
// for(let i=array.length - 1;i>=0;i--){
//     if(array[i]<10)
//     newArray.push(array[i]);
// }
// return newArray;
//-------------------------------------------------------------------------
// let newArray = [];
// array.forEach(element => {
//     if(element < 10) newArray.unshift(element);
// });
// return newArray;
//-------------------------------------------------------------------------
let newArray = [];
for(let element of array){
    if(element <10) newArray.unshift(element);
}
return newArray;

};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    //observar consola de git para otros requerimientos
    let comun ;
    let min = array1[0] ;
    array1.forEach(element => {
        if(element < min) min = element;
        for (const value of array2) {
            if(element === value)
                comun = element;
            if(value < min) min = value
        }
    });
    if (comun === undefined)
        return min;
    else 
       return comun;
   
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
let newArray = [];
let suma;
for (const element of array) {
    if(Array.isArray(element)){
        suma = 0;
        for (let index = 0; index < element.length; index++) {
            
            suma = suma + element[index];  
        }
    }else{
        suma = element;
    }
newArray.push(suma);   
}
return newArray;  
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    let array = new Array(divisor);
    for (let index = 0; index < array.length; index++) {
        if(numero%divisor === 0) 
        array[index] = numero/divisor;
        else return false    
    }
    return array 
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};