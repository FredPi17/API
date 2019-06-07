'use strict';
module.exports = (sequelize, DataTypes) => {
  const Piece = sequelize.define('Piece', {
    temp: {
      type: DataTypes.INTEGER,
      allowNull: true
    } ,
    hum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE
    },
    fenetre: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    chauffage: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {});
  Piece.associate = function(models) {
    // associations can be defined here
  };
  return Piece;
};