const cors = require("cors");
const express = require("express");

const restaurantes = require("./routes/restaurantes");
const bares = require("./routes/bares");

const PORT = process.env.port || 8080;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", restaurantes);
app.use("/api", bares);

app.listen(PORT, () => {
    console.log("Server running on port 8080");
  });