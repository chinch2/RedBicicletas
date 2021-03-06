var Bicicleta = require("../../models/bicicleta");

exports.bicicleta_list = function(req, res) {
  Bicicleta.find({}, function(err, bicicletas) {
    res.status(200).json({
      bicicletas: bicicletas
    });
  });
};

// exports.usuarios_create = function(req, res) {
//   var usuario = new Usuario({ nombre: req.body.nombre });

//   usuario.save(function(err) {
//     res.status(200).json(usuario);
//   });
// };
exports.bicicleta_create = function(req, res) {
  var bici = new Bicicleta({
    id: req.body.id,
    color: req.body.color,
    modelo: req.body.modelo
  });
  bici.ubicacion = [req.body.lat, req.body.lng];

  Bicicleta.add(bici);

  res.status(200).json({
    bicicleta: bici
  });
};

exports.bicicleta_delete = function(req, res) {
  Bicicleta.removeById(req.body.id);
  res.status(204).send();
};

exports.bicicleta_update = function(req, res) {
  var bici = Bicicleta.findbyId(req.body.id);

  bici.id = req.body.id;
  bici.color = req.body.color;
  bici.modelo = req.body.modelo;
  bici.ubicacion = [req.body.lat, req.body.lng];

  res.status(200).json({
    bicicleta: bici
  });
};
