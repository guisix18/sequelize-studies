'use strict';
module.exports = (sequelize, DataTypes) => {
  const Levels = sequelize.define('Levels', {
    descr_level: DataTypes.STRING
  }, {});
  Levels.associate = function(models) {
    // associations can be defined here
  };
  return Levels;
};