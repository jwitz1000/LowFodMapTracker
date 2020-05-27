var db = require("../models");

module.exports = function (app) {
  //get all food summaries
  app.get("/api/food-summary", function (req, res) {
    db.FoodSummary.findAll({ include: [db.Meal, db.Food] }).then(function (
      dbFoodSummary
    ) {
      res.json(dbFoodSummary);
    });
  });
};
