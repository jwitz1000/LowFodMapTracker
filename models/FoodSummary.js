module.exports = function (sequelize, DataTypes) {
  var moment = require("moment");
  var moment = require("moment-timezone");

  var FoodSummary = sequelize.define("FoodSummary", {
    createdDate: {
      type: DataTypes.DATE,
    },
  });

  FoodSummary.associate = function (models) {
    FoodSummary.belongsTo(models.User, {
      onDelete: "cascade",
    });
    FoodSummary.hasMany(models.Meal, {
      onDelete: "cascade",
    });
    FoodSummary.hasMany(models.Food, {
      onDelete: "cascade",
    });
  };
  return FoodSummary;
};
