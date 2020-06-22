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
        UserId: req.params.userId,
      },
      include: [db.User],
    }).then(function (dbHealthSummary) {
      res.json(dbHealthSummary);
    });
  });

  // get specific HealthSummary by date
  app.get("/api/health/date/:date", function (req, res) {
    db.HealthSummary.findAll({
      where: {
        createdDate: req.params.date,
      },
      include: [db.User],
    }).then(function (dbHealthSummary) {
      res.json(dbHealthSummary);
    });
  });

  // update HealthSummary
  app.put("/api/health/:id", function (req, res) {
    db.HealthSummary.update(req.body, {
      returning: true,
      where: { id: req.params.id },
    }).then(function (hi) {
      db.HealthSummary.findOne({
        where: {
          id: req.params.id,
        },
        include: [db.User],
      }).then(function (dbHealthSummary) {
        res.json(dbHealthSummary);
      });
    });
  });

  //create new HealthSummary
  app.post("/api/health", function (req, res) {
    db.HealthSummary.create(req.body).then(function (dbHealthSummary) {
      res.json(dbHealthSummary);
    });
  });
};
