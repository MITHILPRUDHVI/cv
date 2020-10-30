const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const app = express();

app.get("/" , function (req,res) {
  res.send("server is up and working");
})
app.listen(3000,function () {
  console.log("server is running on port 3000");
})
