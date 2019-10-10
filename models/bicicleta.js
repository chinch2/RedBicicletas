var mongoose = require("mongoose");
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var bicicletaSchema = new Schema({
  color: String,
  modelo: String,
  ubicacion: {
    type: [Number],
    index: { type: "2dsphere", sparse: true }
  }
});

//------Sin Persistencia con DB (con un arreglo se hacia esto)---------

// bicicletaSchema.statics.createInstance = function(
//   color,
//   modelo,
//   ubicacion
// ) {
//   return new this({
//     color: color,
//     modelo: modelo,
//     ubicacion: ubicacion
//   });
// };

// bicicletaSchema.methods.toString = function() {
//   return " id: " + this.id + " | color: " + this.color;
// };

// bicicletaSchema.statics.allBicis = function(cb) {
//   return this.find({}, cb);
// };

// bicicletaSchema.statics.add = function(bici, cb) {
//   this.create(bici, cb);
// };

// bicicletaSchema.statics.findByCode = function(code, cb) {
//   return this.findOne({ code: code }, cb);
// };

// bicicletaSchema.statics.removeByCode = function(code, cb) {
//   return this.deleteOne(code, cb);
// };

module.exports = mongoose.model("Bicicleta", bicicletaSchema);
