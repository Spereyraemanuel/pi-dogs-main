const { Router } = require("express");
const { getAllDogs } = require("../controllers/dogsControllers")
const router = Router();

router.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        const dogs = await getAllDogs(name);
        if (name) {
            const resultFind = await dogs.filter((dog) => dog.nombre.toLowerCase().includes(name.toLowerCase()));
        if (resultFind.length === 0) {
          return res.status(404).json({ message: 'no se encontro la raza' });
        }
        return res.status(200).json(resultFind);
      } else {
        return res.status(200).json(dogs);
      }
    } catch (error) {
      res.status(400).json(`no se encontro porque ${error.message}`)
    }
  });
  

module.exports = router;