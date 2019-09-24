var express = require("express");
var router = express.Router();
var bicicletaController = require("../controllers/bicicleta");

router.get("/", bicicletaController.Bicicletas_list);
router.get("/create", bicicletaController.Bicicletas_create_get);
router.post("/create", bicicletaController.Bicicletas_create_post);

module.exports = router;
