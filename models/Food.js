module.exports = function (sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60],
      },
    },
    allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    calories: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    protein: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    carb: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fat: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    safe: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Food.associate = function (models) {
    Food.belongsTo(models.Meal, {
      onDelete: "cascade",
    });
  };
  return Food;
};
