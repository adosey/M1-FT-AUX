// Actividad 1
function crearClaseLibro() {
  class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
      this.titulo = titulo;
      this.autor = autor;
      this.traducciones = traducciones;
      
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      return this.titulo;
    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      return this.autor;
    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      //this.traducciones[idioma] = idioma;
      //this.traducciones[editorial] = editorial;
      this.traducciones.push({idioma,editorial})
      
    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:

      // creamo un arreglo
      let arr = []
      // this.traducciones.array.forEach(element => {
      //   arr.push(elem.idioma)
      // });
      // this.traducciones.forEach(element => 
      //   arr.push(elem.idioma)
      // );
      for (let index = 0; index < this.traducciones.length; index++) {
        arr.push(this.traducciones[index].idioma)
      }
      //for of es en menos reglones
    


      return arr
      

    }

    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
      // let idiomas = new Set() un set vacio,es una estructura de datos que no es un arreglo

      // let idiomas = new Set(this.getTraducciones());
      // //console.log("idiomas",idiomas)
      // return idiomas.size //notese que no hay parentesis ya que no es un metodo sino una propiedad del set 
      //________________________________________________________________________________*/
      // let arr = []
      // this.traducciones.forEach(element =>{
      //   arr.push(element.idioma)
      // })
      // return arr.length
      //__________________________________________________________________________________
      return this.getTraducciones().length  //error mio poner this.traducciones
    
    
    

    }
  }

  return Libro;
}

//Objeto de ejemplo:
// const hogwarts = {
//   staff: {
//     headmaster: {
//       name: "Albus Percival Wulfric Brian Dumbledore",
//     },
//     keeperOfKeys: {
//       name: "Rubeus Hagrid",
//     },
//    potionsMaster: {
//       name: "Severus Snape",
//     },
//   },
// };
const printStaff = function (objeto) {
  // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
  // de esta forma "The headmaster is Albus Percival Wulfric Brian Dumbledore" 
  // el arreglo debe mantener el orden que posee el staff del objeto.
  let props = Object.keys(objeto.staff) 
  let arr = [];
  props.forEach(elem =>{
    //arr.push(`The ${elem} is ${objeto.staff.elem.name}`) estaria mal
    arr.push(`The ${elem} is ${objeto.staff[elem].name}`);
  })
  return arr;
};

module.exports = { crearClaseLibro, printStaff };
