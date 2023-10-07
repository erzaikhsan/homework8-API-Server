const { Router } = require("express");
const filmRoutes = require("./film.routes");
const categoryRoutes = require("./category.routes");

const router = Router();

router.use("/film", filmRoutes);
router.use("/category", categoryRoutes);

module.exports = router;