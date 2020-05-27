var db = require("../models");

// USERS
let users = [
  {
    user_name: "Arman_user",
    password: "password",
    first_name: "Arman",
    last_name: "Riahi",
  },
  {
    user_name: "Chris_user",
    password: "password",
    first_name: "Chris",
    last_name: "Melby",
  },
  {
    user_name: "JDawg",
    password: "password",
    first_name: "Jerome",
    last_name: "Chenette",
  },
];
function userGenerate(users) {
  for (var i = 0; i < users.length; i++) {
    db.User.create(users[i]);
  }
}

userGenerate(users);

// Food summaries
let foodSummary = [{ UserId: 1 }, { UserId: 2 }, { UserId: 3 }];
function foodSummaryGenerate(foodSummary) {
  for (var i = 0; i < foodSummary.length; i++) {
    db.FoodSummary.create(foodSummary[i]);
  }
}

foodSummaryGenerate(foodSummary);

// Meals
let meal = [
  { label: "eggs and toast", UserId: 1 },
  { label: "steak and lboster", UserId: 1 },
  { label: "chips and cola", UserId: 1 },
];
function mealGenerate(meal) {
  for (var i = 0; i < meal.length; i++) {
    db.Meal.create(meal[i]);
  }
}

mealGenerate(meal);

// foods
let foods = [
  {
    label: "Apple",
    allowed: true,
    FoodSummaryId: 3,
  },
  {
    label: "banana",
    allowed: false,
    FoodSummaryId: 3,
  },
  {
    label: "burger",
    allowed: false,
    FoodSummaryId: 3,
  },
];
function foodGenerate(foods) {
  for (var i = 0; i < foods.length; i++) {
    db.Food.create(foods[i]);
  }
}

foodGenerate(foods);
