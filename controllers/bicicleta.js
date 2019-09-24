var Bicicleta = require("../models/bicicleta");

exports.Bicicleta_list = function(req, res) {
  res.render("bicicletas/index", { bicis: Bicicleta.allBicis });
};
