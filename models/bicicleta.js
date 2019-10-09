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

bicicletaSchema.statics.createInstance = function(color, modelo, ubicacion) {
  return new this({
    color: color,
    modelo: modelo,
    ubicacion: ubicacion
  });
};

bicicletaSchema.methods.toString = function() {
  return " | color: " + this.color + " | modelo: " + this.modelo;
};

bicicletaSchema.statics.allBicis = function(cb) {
  return this.find({}, cb);
};

bicicletaSchema.statics.add = function(aBici, cb) {
  this.createInstance(aBici, cb);
};

bicicletaSchema.statics.findByCode = function(aCode, cb) {
  return this.findOne({ code: aCode }, cb);
};

bicicletaSchema.statics.removeByCode = function(aCode, cb) {
  return this.deleteOne({ code: aCode }, cb);
};

module.exports = mongoose.model("Bicicleta", bicicletaSchema);
