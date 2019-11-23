const express = require("express");

const app = express();
const news = require("./routes");

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use("/news", news);
app.get("/error", (req, res) => {
  throw new Error("error");
});
app.get("/", (req, res) => {
  res.send('Add "/news" to get all news, or /news/1 to get one news');
});

app.use((err, req, res, next) => {
  res.render("error", { title: "Error", message: "This is an error message" });
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000!");
});
