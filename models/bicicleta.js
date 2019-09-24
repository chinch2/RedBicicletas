var Bicicleta = function(id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString = function() {
  return (
    "id: " +
    this.id +
    " | color: " +
    this.color +
    " | modelo: " +
    this.modelo +
    " | ubicacion: " +
    this.ubicacion
  );
};

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici) {
  Bicicleta.allBicis.push(aBici);
};

var a = new Bicicleta(1, "rojo", "urbana", [10.48801, -66.87919]);
var b = new Bicicleta(2, "blanco", "urbana", [10.48901, -66.88019]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;
