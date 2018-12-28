const articleModel = require("../models/article.model.js");

// Create and Save a new data
exports.create = (req, res) => {
  // Create a data
  const Data = new articleModel({
    title: req.body.title,
    content: req.body.content,
    picture: req.body.picture
  });

  // Save data in the database
  Data.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      return res.send({
        message: err.message || "Some error occurred while creating the data."
      });
    });
};

// Retrieve and return all datas from the database.
exports.findAll = (req, res) => {
  articleModel
    .find()
    .then(data => {
      res.send(data);
      // res.render("article/", { data });
    })
    .catch(err => {
      return res.send({
        message: err.message || "Some error occurred while retrieving datas."
      });
    });
};

// Find a single data with a dataId
exports.findOne = (req, res) => {
  articleModel
    .findById(req.params.id)
    .then(data => {
      if (!data) {
        return res.send({
          message: "data not found with id " + req.params.dataId
        });
      }
      res.send(data);
    })
    .catch(err => {
      return res.send({
        message: "Error retrieving data with id " + req.params.dataId
      });
    });
};

// Update a data identified by the dataId in the request
exports.update = (req, res) => {
  // Find data and update it with the request body
  articleModel
    .findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        content: req.body.content,
        picture: req.body.picture
      },
      { new: true }
    )
    .then(data => {
      if (!data) {
        return res.send({
          message: "data not found with id " + req.params.dataId
        });
      }
      res.send(data);
    })
    .catch(err => {
      return res.send({
        message: "Error updating data with id " + req.params.dataId
      });
    });
};

// Delete a data with the specified dataId in the request
exports.delete = (req, res) => {
  articleModel
    .findByIdAndRemove(req.params.id)
    .then(data => {
      if (!data) {
        return res.send({
          message: "data not found with id " + req.params.dataId
        });
      }
      return res.send({ message: "data deleted successfully!" });
    })
    .catch(err => {
      return res.send({
        message: "Could not delete data with id " + req.params.dataId
      });
    });
};

// RENDER
exports.renderNew = (req, res) => {
  res.render("article/new");
};
