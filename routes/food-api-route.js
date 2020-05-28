var db = require("../models");

module.exports = function (app) {
  //get all food
  app.get("/api/food", function (req, res) {
    db.Food.findAll({ include: [db.Meal] }).then(function (dbFood) {
      res.json(dbFood);
    });
  });

  // get specific Food by id
  app.get("/api/food/id/:id", function (req, res) {
    db.Food.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Meal],
    }).then(function (dbFood) {
      res.json(dbFood);
    });
  });

  // get specific Food by label
  app.get("/api/food/label/:label", function (req, res) {
    db.Food.findOne({
      where: {
        label: req.params.label,
      },
      include: [db.Meal],
    }).then(function (dbFood) {
      res.json(dbFood);
    });
  });

  //create new Food
  app.post("/api/food", function (req, res) {
    db.Food.create(req.body).then(function (dbFood) {
      res.json(dbFood);
    });
  });

  // update Food
  app.put("/api/food/:id", function (req, res) {
    db.Food.update(req.body, { where: { id: req.params.id } }).then(
      (dbFood) => {
        res.json(dbFood);
      }
    );
  });

  // get foods for specific meal
  app.get("/api/food/meal/:mealId", function (req, res) {
    db.Food.findAll({
      where: {
        MealId: req.params.mealId,
      },
      include: [db.Meal],
    }).then(function (dbFood) {
      res.json(dbFood);
    });
  });

  // delete Food
  app.delete("/api/food/:id", function (req, res) {
    db.Food.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbFood) {
      res.json(dbFood);
    });
  });
};
