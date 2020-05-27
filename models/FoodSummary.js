module.exports = function (sequelize, DataTypes) {
  var FoodSummary = sequelize.define("FoodSummary", {
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment
          .tz(this.getDataValue("createdAt"), "America/Los_Angeles")
          .format("MMMM Do YYYY, h:mm a");
      },
    },
  });

  FoodSummary.associate = function (models) {
    FoodSummary.belongsTo(models.User, {
      onDelete: "cascade",
    });
  };
  return FoodSummary;
};
