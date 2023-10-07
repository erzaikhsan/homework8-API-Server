const { Router } = require("express");
const { filmControllers } = require("../controllers");

const router = Router();

router.get("/", (req, res) => {
    filmControllers.getFilm(req, res);
});

router.get("/:id", (req, res) => {
    filmControllers.getFilmById(req, res);
});

router.get("/category/:catId", (req, res) => {
    filmControllers.getFilmByCategoryId(req, res);
});

module.exports = router;