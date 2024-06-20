const survey = [
  { title: "Technology", question: "How many projects have you completed?" },
  { title: "Health", question: "How often do you exercise?" },
  { title: "Education", question: "How many hours do you spend learning?" },
];

export class SurverModel {
  static async getSurvey(title) {
    const surveyData = survey.find((survey) => survey.title === title);
    return surveyData ? surveyData.question : null;
  }
}
