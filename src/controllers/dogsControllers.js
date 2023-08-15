const axios = require("axios");
const { Dog, Temperament } = require("../db");
const db = require("../db");
const { API_KEY } = process.env;


const getApiInfo = async () => {
   try {
     const dogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    
     const dataDog = dogs.data.map((dog) => ({
        id: dog.id,
        nombre: dog.name,
        altura: dog.height.metric,
        peso: dog.weight.metric,
        anos_de_vida: dog.life_span,
        imagen: dog.reference_image_id,
        temperament: dog.temperament 
    }));
    return dataDog;
} catch (error) {
    throw new Error(`el error esta en: ${error.message}`);
  }
}


const getDbInfo = async () => {
  return await Dog.findAll({
      include: {
          model: Temperament,
          attributes: ['nombre'],
          through: { attributes: [] }
      },
      // raw: true
  });
};


const getAllDogs = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = {
  getAllDogs,
};