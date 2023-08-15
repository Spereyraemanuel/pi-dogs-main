const { Router } = require("express");
const { getAllDogs } = require("../controllers/dogsControllers")
const router = Router();



router.get("/", async (req, res) => {
    try {
        const dogs = await getAllDogs();
        res.status(200).json(dogs)
    } catch (error) {
        res.status(400).json(`el error esta en: ${error.message}`);
    }
})

module.exports = router;