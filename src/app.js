import express from "express";
import main from "../scripts/userLendingInform";
// const { main } = require("../scripts/userLendingInform");

const app = express();

app.get("/", async function (req, res) {
  res.send(await main());
});

export default app;
