module.exports = function (sequelize, DataTypes) {
  var moment = require("moment");
  var moment = require("moment-timezone");

  var HealthSummary = sequelize.define("HealthSummary", {
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment
          .tz(this.getDataValue("createdAt"), "America/Los_Angeles")
          .format("MMMM Do YYYY, h:mm a");
      },
    },
    createdDate: {
      type: DataTypes.DATE,
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
    sleep: {
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
    other: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 250],
      },
    },
  });

  HealthSummary.associate = function (models) {
    HealthSummary.belongsTo(models.User, {
      onDelete: "cascade",
    });
  };
  return HealthSummary;
};
