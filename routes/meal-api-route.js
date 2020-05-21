var db = require("../models");

module.exports = function (app) {
  //get all meal
  app.get("/api/meal", function (req, res) {
    db.Meal.findAll({ include: [db.Food, db.User] }).then(function (dbMeal) {
      res.json(dbMeal);
    });
  });

  // get meal and sort
  app.get("/api/meal/userId/:userId/by/:by/type/:type", function (req, res) {
    db.Meal.findAll({
      where: {
        UserId: req.params.userId,
      },
      include: [db.Food, db.User],
      order: [[req.params.by, req.params.type]],
    }).then(function (dbMeal) {
      res.json(dbMeal);
    });
  });

  //get all meal for a user
  app.get("/api/meal/userId/:userId", function (req, res) {
    db.Meal.findAll({
      where: {
        UserId: req.params.userId,
      },
      include: [db.Food, db.User],
    }).then(function (dbMeal) {
      res.json(dbMeal);
    });
  });

  // get specific Meal by id
  app.get("/api/meal/id/:id", function (req, res) {
    db.Meal.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Food, db.User],
    }).then(function (dbMeal) {
      res.json(dbMeal);
    });
  });

  // get specific Meal of a user by label
  app.get("/api/meal/userId/:userId/label/:label", function (req, res) {
    db.Meal.findOne({
      where: {
        label: req.params.label,
        UserId: req.params.userId,
      },
      include: [db.Food, db.User],
    }).then(function (dbMeal) {
      res.json(dbMeal);
    });
  });

  //create new Meal
  app.post("/api/meal", function (req, res) {
    db.Meal.create(req.body).then(function (dbMeal) {
      res.json(dbMeal);
    });
  });

  //update Meal
  app.put("/api/meal/:id", function (req, res) {
    db.Meal.update(req.body, {
      where: { id: req.params.id },
    }).then((dbMeal) => res.json(dbMeal));
  });

  // delete Meal
  app.delete("/api/meal/:id", function (req, res) {
    db.Meal.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbMeal) {
      res.json(dbMeal);
    });
  });
};
