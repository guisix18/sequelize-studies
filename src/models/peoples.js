'use strict';
module.exports = (sequelize, DataTypes) => {
  const Peoples = sequelize.define('Peoples', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Peoples.associate = function(models) {
    // associations can be defined here
  };
  return Peoples;
};