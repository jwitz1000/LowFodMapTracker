module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20],
      },
    },
    first_name: { type: DataTypes.STRING, allowNull: true },
    last_name: { type: DataTypes.STRING, allowNull: true },
  });

  User.associate = function (models) {
    User.hasMany(models.FoodSummary, {
      onDelete: "cascade",
    });
    User.hasMany(models.Meal, {
      onDelete: "cascade",
    });
    User.hasMany(models.HealthSummary, {
      onDelete: "cascade",
    });
  };
  return User;
};
