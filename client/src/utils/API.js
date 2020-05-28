import axios from "axios";

export default {
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets all foods
  getFoods: function () {
    return axios.get("/api/food");
  },
  // add a food
  addFood: function (postData) {
    return axios.post("/api/food", postData);
  },
  // create food Summary
  createFoodSummary: function (postData) {
    return axios.post("/api/food-summary", postData);
  },
  // Gets food summary with specific date
  getFoodSummary: function (date) {
    return axios.get("/api/food-summary/" + date);
  },
  // Gets health summary with specific date
  getHealthSummary: function (date) {
    return axios.get("/api/health/date/" + date);
  },
  // create health Summary
  createHealthSummary: function (postData) {
    return axios.post("/api/health", postData);
  },
  // create health Summary
  updateHealthSummary: function (userId, postData) {
    return axios.put("/api/health/" + userId, postData);
  },
};
