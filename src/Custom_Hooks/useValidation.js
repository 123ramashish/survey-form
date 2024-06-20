import { useState, useEffect } from "react";

const useValidation = (initialState) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialState);

  const validateForm = (data) => {
    let validationErrors = {};
    if (!data.fullName.trim()) {
      validationErrors.fullName = "Full Name is required";
    }
    if (!data.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!data.surveyTopic) {
      validationErrors.surveyTopic = "Survey Topic is required";
    }
    if (data.surveyTopic === "Technology") {
      if (!data.favoriteLanguage) {
        validationErrors.favoriteLanguage =
          "Favorite Programming Language is required";
      }
      if (Number(data.yearsOfExperience) <= 0) {
        validationErrors.yearsOfExperience =
          "Years of Experience must be greater than 0";
      }
    }
    if (data.surveyTopic === "Health") {
      if (!data.exerciseFrequency) {
        validationErrors.exerciseFrequency = "Exercise Frequency is required";
      }
      if (!data.dietPreference) {
        validationErrors.dietPreference = "Diet Preference is required";
      }
    }
    if (data.surveyTopic === "Education") {
      if (!data.highestQualification) {
        validationErrors.highestQualification =
          "Highest Qualification is required";
      }
      if (!data.fieldOfStudy.trim()) {
        validationErrors.fieldOfStudy = "Field of Study is required";
      }
    }
    if (!data.feedback.trim() || data.feedback.length < 50) {
      validationErrors.feedback =
        "Feedback is required and must be at least 50 characters";
    }
    return validationErrors;
  };

  useEffect(() => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
  }, [formData]);

  return { errors, setErrors, formData, setFormData, validateForm };
};

export default useValidation;
