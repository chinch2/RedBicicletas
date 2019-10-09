var Bicicleta = require("../models/bicicleta");

exports.Bicicletas_list = function(req, res, next) {
  Bicicleta.find({}, (err, bicis) => {
    res.render("bicicletas/index", { bicis: bicis });
  });
};

exports.Bicicletas_create_get = function(req, res, next) {
  res.render("bicicletas/create", { errors: {}, bici: new Bicicleta() });
};

exports.Bicicletas_create_post = function(req, res) {
  var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
  bici.ubicacion = [req.body.lat, req.body.lng];
  Bicicleta.create(bici);
  res.redirect("/bicicletas");
};

exports.Bicicletas_update_get = function(req, res, next) {
  Bicicleta.findById(req.params.id, function(err, bici) {
    res.render("bicicletas/update", { errors: {}, bici: bici });
  });
};

exports.Bicicletas_update_post = function(req, res) {
  var bici = Bicicleta.findByCode(req.params.id);
  bici.id = req.body.id;
  bici.color = req.body.color;
  bici.modelo = req.body.modelo;
  bici.ubicacion = [req.body.lat, req.body.lng];

  res.redirect("/bicicletas");
};

exports.Bicicleta_delete_post = function(req, res, next) {
  Bicicleta.findByIdAndDelete(req.body.id, function(err) {
    if (err) next(err);
    else res.redirect("/bicicletas");
  });
};
