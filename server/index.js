const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there on MainPage");
});

const server = app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
