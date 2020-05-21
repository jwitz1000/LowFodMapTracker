module.exports = function (sequelize, DataTypes) {
  var HealthSummary = sequelize.define("HealthSummary", {
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment
          .tz(this.getDataValue("createdAt"), "America/Los_Angeles")
          .format("MMMM Do YYYY, h:mm a");
      },
    },
    bowelMovements: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    stress: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    bloating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    pain: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    blood: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    diahrrea: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });

  HealthSummary.associate = function (models) {
    HealthSummary.belongsTo(models.User, {
      onDelete: "cascade",
    });
  };
  return HealthSummary;
};
