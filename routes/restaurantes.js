const router = require("express").Router();
const controller = require("../controllers/restaurantesController");
router.get("/restaurantes", controller.getRestaurantes);
router.get("/restaurantes/:id", controller.getRestaurantesHora);
router.get("/restaurantes/detalle/:id", controller.getRestaurantesDescripcion);
module.exports = router;