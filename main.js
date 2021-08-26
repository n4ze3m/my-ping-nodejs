require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Ping working....");
});

readdirSync("./routes").map((f) => app.use("/api", require(`./routes/${f}`)));

app.use("*", (_, res, __) => {
  return res.status(404).send({ error: "Invalid route 🗺️" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
