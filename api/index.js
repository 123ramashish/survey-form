import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import surveyController from "./controller/survey.controller.js";

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

app.get("api/survey", surveyController);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
