import { SurverModel } from "../model/survey.model.js";

const surveyController = async (req, res, next) => {
  try {
    const { title } = req.body;
    const question = await SurverModel.getSurvey(title);
    if (!question) {
      return res.status(404).send("Question not found");
    }
    return res.json({ question: question });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default surveyController;
