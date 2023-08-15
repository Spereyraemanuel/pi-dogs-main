const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.FLOAT,
    },
    peso: {
      type: DataTypes.FLOAT,
    },
    anos_de_vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alturaMax: {
      type: DataTypes.INTEGER,
    },
    alturaMin: {
      type: DataTypes.INTEGER,
    },
    pesoMax: {
      type: DataTypes.INTEGER,
    },
    pesoMin: {
      type: DataTypes.INTEGER,
    },
  });
};
