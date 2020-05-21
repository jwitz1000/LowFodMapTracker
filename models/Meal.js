module.exports = function (sequelize, DataTypes) {
  var moment = require("moment");
  var moment = require("moment-timezone");

  var Meal = sequelize.define("Meal", {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60],
      },
    },
    calorieTotal: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment
          .tz(this.getDataValue("createdAt"), "America/Los_Angeles")
          .format("MMMM Do YYYY, h:mm a");
      },
    },
  });

  Meal.associate = function (models) {
    Meal.belongsTo(models.User, {
      onDelete: "cascade",
    });
    Meal.hasMany(models.Food, {
      onDelete: "cascade",
    });
  };
  return Meal;
};
