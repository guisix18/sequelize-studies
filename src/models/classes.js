'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
    start_date: DataTypes.DATEONLY
  }, {});
  Classes.associate = function(models) {
    // associations can be defined here
  };
  return Classes;
};