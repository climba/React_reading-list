const sequelize = require("sequelize");


module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    synopsis:DataTypes.STRING
  });
  return Book;
};
