var db = require("../models");

module.exports = function (app) {
  // get specific HealthSummary by id
  app.get("/api/health/id/:id", function (req, res) {
    db.HealthSummary.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.User],
    }).then(function (dbHealthSummary) {
      res.json(dbHealthSummary);
    });
  });

  // get specific HealthSummary by user
  app.get("/api/health/user/:userId", function (req, res) {
    db.HealthSummary.findAll({
      where: {
        UserId: req.params.UserId,
      },
      include: [db.User],
    }).then(function (dbHealthSummary) {
      res.json(dbHealthSummary);
    });
  });

  // update HealthSummary
  app.put("/api/health/:id", function (req, res) {
    db.HealthSummary.update(req.body, { where: { id: req.params.id } }).then(
      (dbHealthSummary) => {
        res.json(dbHealthSummary);
      }
    );
  });

  //create new HealthSummary
  app.post("/api/health", function (req, res) {
    db.HealthSummary.create(req.body).then(function (dbHealthSummary) {
      res.json(dbHealthSummary);
    });
  });

  // delete HealthSummary
  app.delete("/api/health/:id", function (req, res) {
    db.HealthSummary.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbHealthSummary) {
      res.json(dbHealthSummary);
    });
  });
};
