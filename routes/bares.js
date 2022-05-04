const router = require("express").Router();
const controller = require("../controllers/baresController");
router.get("/bares", controller.getBares);
router.get("/bares/:id", controller.getBaresHora);
router.get("/bares/detalle/:id", controller.getBaresDescripcion);
module.exports = router;