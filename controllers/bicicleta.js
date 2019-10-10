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
  Bicicleta.create(
    {
      color: req.body.color,
      modelo: req.body.modelo,
      ubicacion: [req.body.lat, req.body.lng]
    },
    function(err, nuevaBici) {
      if (err) {
        res.render("bicicletas/create", {
          errors: err.errors,
          bici: new Bicicleta({
            color: req.body.color,
            modelo: req.body.modelo,
            ubicacion: [req.body.lat, req.body.lng]
          })
        });
      } else {
        res.redirect("/bicicletas");
      }
    }
  );
};

exports.Bicicletas_update_get = function(req, res, next) {
  Bicicleta.findById(req.params.id, function(err, bici) {
    res.render("bicicletas/update", { errors: {}, bici: bici });
  });
};

exports.Bicicletas_update_post = function(req, res) {
  var update_values = {
    color: req.body.color,
    modelo: req.body.modelo,
    ubicacion: [req.body.lat, req.body.lng]
  };
  Bicicleta.findByIdAndUpdate(req.params.id, update_values, function(
    err,
    bici
  ) {
    if (err) {
      console.log(err);
      res.render("bicicletas/update", {
        errors: err.errors,
        bicicleta: new Bicicleta({
          color: req.body.color,
          modelo: req.body.modelo,
          ubicacion: [req.body.lat, req.body.lng]
        })
      });
    } else {
      res.redirect("/bicicletas");
      return;
    }
  });
};

exports.Bicicleta_delete_post = function(req, res, next) {
  Bicicleta.findByIdAndDelete(req.body.id, function(err) {
    if (err) next(err);
    else res.redirect("/bicicletas");
  });
};
