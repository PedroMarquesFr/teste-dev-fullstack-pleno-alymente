// 'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {
      this.hasMany(models.Users, { foreignKey: 'id', as: 'users' });
    }
  }
  Roles.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Roles',
      timestamps: false,
    },
  );
  return Roles;
};
