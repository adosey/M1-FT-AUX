// EJERCICIO 6
// Implementar la función controlAcces: 
//a partir de una Queue que 
//va a recibir como parámetro 
// en cada posición un objeto que va a 
//representar a una persona 
//y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primera persona de la cola
// tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). 
//Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas 
//que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar 
//deben ser removidos de la cola 

var controlAcces = function(queue, event){
    // Tu código aca:
    //Lo primero que obtengo es el tamaño de la cola debo verificar cuantas personas hay 
    //verifico si hay una funcion predefinida de la cola 
    //*in order to queue has functions of class Queue then need call tha constructor function
    //but if I look at the test there is the called then it is no neccesary 
   let entraron = [];
   let noEntraron = [];
   let number = [];
   queue.array.forEach(elem =>{
    number.unshift(elem.ticket.number);
    //console.log(number);
    for (let index = 1; index < queue.size(); index++) {
        if (elem.ticket.number === number[index]) 
             elem.ticket.number = undefined;
            
    }   
    
    if(elem.age > 18 && elem.ticket.event === event && elem.ticket.number !== undefined ){
         entraron.push(elem.fullname);
    }
    else noEntraron.push(elem.fullname);
    
 });
  return entraron;

  };
      
  

  module.exports = {
    controlAcces,
   
}