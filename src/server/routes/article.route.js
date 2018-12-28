module.exports = app => {
  const articleController = require("../controllers/article.controller.js");

  // Create
  app.post("/api/articles/create", articleController.create);

  app.get("/api/articles/new", articleController.renderNew);

  // Show all
  app.get("/api/articles", articleController.findAll);

  // Show id
  app.get("/api/article/detail/:id", articleController.findOne);

  // Update with id
  app.put("/api/article/update/:id", articleController.update);

  // Delete with id
  app.get("/api/article/delete/:id", articleController.delete);
};
