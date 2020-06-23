var express = require("express");
var session = require("express-session");
var path = require("path");

var PORT = process.env.PORT || 3001;
var db = require("./models");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("uploads"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/food-summary-api-route.js")(app);
require("./routes/food-api-route.js")(app);
require("./routes/user-api-route.js")(app);
require("./routes/meal-api-route.js")(app);
require("./routes/health-api-route.js")(app);

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
