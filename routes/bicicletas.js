var express = require("express");
var router = express.Router();
var bicicletaController = require("../controllers/bicicleta");

router.get("/", bicicletaController.Bicicletas_list);
router.get("/create", bicicletaController.Bicicletas_create_get);
router.post("/create", bicicletaController.Bicicletas_create_post);
router.get("/:id/update", bicicletaController.Bicicletas_update_get);
router.post("/:id/update", bicicletaController.Bicicletas_update_post);
router.post("/:id/delete", bicicletaController.Bicicleta_delete_post);

module.exports = router;
