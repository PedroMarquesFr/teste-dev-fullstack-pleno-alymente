// 'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.hasMany(models.Posts, { foreignKey: 'id', as: 'posts' });
      this.belongsTo(models.Roles, {
        foreignKey: 'roleId',
        as: 'role',
      });
    }
  }
  Users.init(
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
      timestamps: false,
    },
  );
  return Users;
};
