const express = require("express");
const router = express.Router();

const articles = require("../mock-data/news");

router.get("/", (req, res) => {
  res.send(articles);
});

router.get("/:id", (req, res) => {
  const result = articles.find(
    article => `${article.source.id}` === req.params.id
  );
  if (result) {
    res.send(result);
  }
});

router.post("/", (req, res) => {
  res.send("New article has been added");
});

router.put("/:id", (req, res) => {
  res.send("New article has been changed");
});

router.delete("/:id", (req, res) => {
  res.send("New article has been deleted");
});

module.exports = router;
