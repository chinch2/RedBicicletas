var Bicicleta = require("../models/bicicleta");

exports.Bicicletas_list = function(req, res, next) {
  Bicicleta.find({}, (err, bicis) => {
    if (err) return res.status(500).send(err);
    res.render("bicicletas/index", { bicis: bicis });
  });
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

exports.Bicicletas_update_get = function(req, res) {
  var bici = Bicicleta.findById(req.params.id);

  res.render("bicicletas/update", { bici });
};

exports.Bicicletas_update_post = function(req, res) {
  var bici = Bicicleta.findById(req.params.id);
  bici.id = req.body.id;
  bici.color = req.body.color;
  bici.modelo = req.body.modelo;
  bici.ubicacion = [req.body.lat, req.body.lng];

  res.redirect("/bicicletas");
};

exports.Bicicleta_delete_post = function(req, res) {
  Bicicleta.removeById(req.body.id);
  res.redirect("/bicicletas");
};
