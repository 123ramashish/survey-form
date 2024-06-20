import React, { useContext } from "react";
import useValidation from "../Custom_Hooks/useValidation";
import { ApiContext } from "../context/ApiContext.js";
import formImage from "../assets/formImage.png";
const initialState = {
  fullName: "",
  email: "",
  surveyTopic: "",
  favoriteLanguage: "",
  yearsOfExperience: "",
  exerciseFrequency: "",
  dietPreference: "",
  highestQualification: "",
  fieldOfStudy: "",
  feedback: "",
};

export default function SurveyForm() {
  const { errors, setErrors, formData, setFormData, validateForm } =
    useValidation(initialState);
  const { additionalQuestions, fetchAdditionalQuestions } =
    useContext(ApiContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      await fetchAdditionalQuestions(formData.surveyTopic);
      console.log("Form data:", formData);
      alert("Form submitted successfully! Check the console for the data.");
    }
  };

  return (
    <div className="p-8 flex justify-center bg-gradient-to-r from-stone-400 to-stone-600 rounded-md shadow-md h-auto ">
      <div className="">
        <img src={formImage} alt="" className=" w-auto h-full" />
      </div>
      <div className="bg-white p-4">
        <h1 className="text-3xl font-bold text-center pb-4">Survey Form</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-wrap gap-4 mt-4"
        >
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="font-medium text-xl mr-2 font-sans"
            >
              Full Name:
            </label>
            <input
              className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-medium text-xl mr-2 font-sans"
            >
              Email:
            </label>
            <input
              className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="surveyTopic"
              className="font-medium text-xl mr-2 font-sans"
            >
              Survey Topic:
            </label>
            <select
              className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
              id="surveyTopic"
              name="surveyTopic"
              value={formData.surveyTopic}
              onChange={handleChange}
              required
            >
              <option value="">Select a topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && (
              <span className="text-red-500">{errors.surveyTopic}</span>
            )}
          </div>

          {formData.surveyTopic === "Technology" && (
            <div className="technology-section">
              <div className="flex flex-col">
                <label
                  htmlFor="favoriteLanguage"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Favorite Programming Language:
                </label>
                <select
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md "
                  id="favoriteLanguage"
                  name="favoriteLanguage"
                  value={formData.favoriteLanguage}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a language</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </select>
                {errors.favoriteLanguage && (
                  <span className="text-red-500">
                    {errors.favoriteLanguage}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="yearsOfExperience"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Years of Experience:
                </label>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="number"
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  required
                />
                {errors.yearsOfExperience && (
                  <span className="text-red-500">
                    {errors.yearsOfExperience}
                  </span>
                )}
              </div>
            </div>
          )}

          {formData.surveyTopic === "Health" && (
            <div className="health-section">
              <div className="flex flex-col">
                <label
                  htmlFor="exerciseFrequency"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Exercise Frequency:
                </label>
                <select
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  id="exerciseFrequency"
                  name="exerciseFrequency"
                  value={formData.exerciseFrequency}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
                {errors.exerciseFrequency && (
                  <span className="text-red-500">
                    {errors.exerciseFrequency}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="dietPreference"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Diet Preference:
                </label>
                <select
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  id="dietPreference"
                  name="dietPreference"
                  value={formData.dietPreference}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a preference</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
                {errors.dietPreference && (
                  <span className="text-red-500">{errors.dietPreference}</span>
                )}
              </div>
            </div>
          )}

          {formData.surveyTopic === "Education" && (
            <div className="education-section">
              <div className="flex flex-col">
                <label
                  htmlFor="highestQualification"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Highest Qualification:
                </label>
                <select
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  id="highestQualification"
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.highestQualification && (
                  <span className="text-red-500">
                    {errors.highestQualification}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="fieldOfStudy"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Field of Study:
                </label>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="text"
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                  required
                />
                {errors.fieldOfStudy && (
                  <span className="text-red-500">{errors.fieldOfStudy}</span>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col">
            <label
              htmlFor="feedback"
              className="font-medium text-xl mr-2 font-sans"
            >
              Feedback:
            </label>
            <textarea
              className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
            {errors.feedback && (
              <span className="text-red-500">{errors.feedback}</span>
            )}
          </div>

          {additionalQuestions.length > 0 && (
            <div className="additional-questions">
              <h2 className="text-xl font-bold mt-4">Additional Questions:</h2>
              {additionalQuestions.map((question, index) => (
                <div key={index} className="additional-question mt-2">
                  <label className="font-medium text-xl mr-2 font-sans">
                    {question.question}
                  </label>
                  <input
                    className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                    type="text"
                    name={`additionalQuestion${index}`}
                    value={formData[`additionalQuestion${index}`] || ""}
                    onChange={(e) =>
                      handleChange(e, `additionalQuestion${index}`)
                    }
                  />
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="hover:bg-emerald-400 bg-green-400 text-white text-xl p-2 rounded-md border-none shadow-md mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
