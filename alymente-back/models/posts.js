// 'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Posts.init(
    {
      name: DataTypes.STRING,
      size: DataTypes.INTEGER,
      key: DataTypes.STRING,
      url: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: { type: DataTypes.DATE, defaultValue: Date.now() },
      updated: { type: DataTypes.DATE, defaultValue: Date.now() },
    },
    {
      sequelize,
      modelName: 'Posts',
      timestamps: false,
    },
  );
  return Posts;
};
