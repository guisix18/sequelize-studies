'use strict';
module.exports = (sequelize, DataTypes) => {
  const Peoples = sequelize.define(
    'Peoples',
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {},
  );
  Peoples.associate = function (models) {
    Peoples.hasMany(models.Classes, {foreignKey: 'subject_id'});
    Peoples.hasMany(models.Registration, {foreignKey: 'student_id'});
  };
  return Peoples;
};
