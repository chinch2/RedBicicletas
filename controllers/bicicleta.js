var Bicicleta = require("../models/bicicleta");

exports.Bicicletas_list = function(req, res) {
  res.render("bicicletas/index", { bicis: Bicicleta.allBicis });
};

exports.Bicicletas_create_get = function(req, res) {
  res.render("bicicletas/create");
};

exports.Bicicletas_create_post = function(req, res) {
  var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
  bici.ubicacion = [req.body.lat, req.body.lng];
  Bicicleta.add(bici);

  res.redirect("/bicicletas");
};

exports.Bicicleta_delete_post = function(req, res) {
  Bicicleta.removeById(req.body.id);

  res.redirect("/bicicletas");
};
