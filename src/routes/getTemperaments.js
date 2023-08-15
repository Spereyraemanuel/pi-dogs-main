require("dotenv").config();
const { Temperament } = require("../db");
const {Router} = require("express")
const {getAllDogs} = require("../controllers/dogsControllers");
const router = Router()

router.get('/', async (req, res) => {
    try {
        const dogs = await getAllDogs()

        const temperaments = [] 

        for (let dog of dogs) { 
            if (dog.temperament) {
                const tempArray = dog.temperament.split(',')
                tempArray.forEach(temperament => temperaments.push(temperament.trim()))
            }
        };
        const temperamentsUnics = new Set(temperaments.flat()) 
        const temperamentsFinal = [] 
        for (let temperament of temperamentsUnics) {
            const tempsAdded = await Temperament.create({ nombre: temperament }); 
            temperamentsFinal.push(tempsAdded) 
        };
        res.status(200).json(temperamentsFinal);
    } catch (error) {
        res.status(500).send('Error interno del servidor'); 
    }
});


module.exports = router;