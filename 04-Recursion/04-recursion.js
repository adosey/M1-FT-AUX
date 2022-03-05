// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10
// producto([7, 2, 5]) devuelve 70
const producto = function (array) {
  //escribe aqui tu codigo
  if(array.length === 1) return array[0]
  let element = array.pop();
  return element*producto(array)

};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "''Albus''",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }
// }
const isThere = function (obj, value) {
  //escribe aqui tu codigo
  for(const props in obj){
    if(typeof obj[props] === 'object') 
      return isThere(obj[props],value)
    else if(obj[props] === value)
    return true
  }

  return false
};
module.exports = { producto, isThere };
