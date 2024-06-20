import { createContext, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const fetchAdditionalQuestions = async (topic) => {
    try {
      const response = await fetch("http://localhost:8000/api/survey", {
        mode: "cors",
        method: "GET",
        body: JSON.stringify({ title: topic }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch additional questions");
      }
      const data = await response.json();
      setAdditionalQuestions(data);
    } catch (error) {
      console.error("Error fetching additional questions", error);
    }
  };

  return (
    <ApiContext.Provider
      value={{ additionalQuestions, fetchAdditionalQuestions }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
