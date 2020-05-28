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

  //get a food summary for specific date
  app.get("/api/food-summary/:date", function (req, res) {
    db.FoodSummary.findAll({
      where: { createdDate: req.params.date },
      include: [db.Meal, db.Food],
    }).then(function (dbFoodSummary) {
      console.log(dbFoodSummary);
      res.json(dbFoodSummary);
    });
  });

  //create new Food summary
  app.post("/api/food-summary", function (req, res) {
    db.FoodSummary.create(req.body).then(function (dbFoodSummary) {
      res.json(dbFoodSummary);
    });
  });
};
