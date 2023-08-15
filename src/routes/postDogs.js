const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("../db");

router.post('/', async (req, res) => {
    try {
        const {
            nombre,
            altura,
            peso,
            anos_de_vida,
            imagen,
            temperaments,
            alturaMax,
            alturaMin,
            pesoMax,
            pesoMin
        } = req.body;

        const crearDog = await Dog.create({
            nombre,
            peso,
            altura,
            alturaMax,
            alturaMin,
            pesoMax,
            pesoMin,
            anos_de_vida,
            imagen,
        });

        if (Array.isArray(temperaments)) {
            for (const nombre of temperaments) {
                const agregar = await Temperament.findAll({
                    where: { nombre: nombre }
                });
                if (agregar.length > 0) {
                    await crearDog.addTemperament(agregar[0]);
                }
            }
        } else {
            throw new Error("no se pudo crear");
        }
        res.status(201).json(crearDog); 
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = router;

