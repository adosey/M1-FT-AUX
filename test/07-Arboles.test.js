const { expect } = require("chai");
const { BinarySearchTree } = require("../07-Arboles/07-Arboles")




xdescribe("Search", function () {
    var tree = new BinarySearchTree(1)
    tree.insert(2)
    tree.insert(3)
    tree.insert(4)
    tree.insert(5)
    tree.insert(6);
       
    it("Search debe retornar el nodo cuando se encuentra", function () {
      expect(tree.search(3)).to.equal(3);      
    });
  

  it("Search debe retornar 'no se encontró el valor' si el valor no existe en el arbol", function () {
    expect(tree.search(100)).to.equal("no se encontró el valor");      
  });
});


xdescribe("Height", function () {
     tree = new BinarySearchTree(1)
     tree.insert(2)
     tree.insert(3)
     tree.insert(4)
     tree.insert(5)
     tree.insert(6);
       
    it("Height debe retornar el nivel maximo del arbol", function () {
      expect(tree.height()).to.equal(2);         
    });
  
    tree=new BinarySearchTree(6)
    tree.insert(4)
    tree.insert(3)
    tree.insert(5)
    tree.insert(8)
    tree.insert(7)
    tree.insert(9);
  it("Search debe retornar 'no se encontró el valor' si el valor no existe en el arbol", function () {
    expect(tree.height()).to.equal(2);       
  });
});


