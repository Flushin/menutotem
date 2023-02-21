const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.post("/items", (req, res) => {
  res.json("Got a POST request");
});

app.put("/items", (req, res) => {
  res.json("Got a PUT request");
});

app.delete("/items", (req, res) => {
  res.json("Got a delete request");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
