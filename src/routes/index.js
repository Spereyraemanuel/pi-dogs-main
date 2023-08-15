const { Router } = require('express');
const dogsRoutes = require("./dogsRoutes")
const dogsByid = require("./dogsByid")
const getTemperaments = require("./getTemperaments")
const dogsByname = require("./dogsByname")
const postDogs = require("./postDogs")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogsByid);
router.use("/dogs", dogsByname);
router.use("/dogs", dogsRoutes);
router.use("/dogs", postDogs )
router.use("/temperaments", getTemperaments);



module.exports = router;
