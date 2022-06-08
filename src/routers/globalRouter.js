import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", function () {
  console.log("Hello");
});

export default globalRouter;
