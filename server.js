const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("./public/index.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running");
});
