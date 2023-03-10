'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
    start_date: DataTypes.DATEONLY
  }, {});
  Classes.associate = function(models) {
    Classes.hasMany(models.Registration, {foreignKey: 'class_id'});
    Classes.belongsTo(models.Peoples, {foreignKey: 'subject_id'});
    Classes.belongsTo(models.Levels, {foreignKey: 'level_id'});
  };
  return Classes;
};