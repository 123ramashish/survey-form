import SurveyForm from "./components/SurveyForm";
import { ApiProvider } from "./context/ApiContext";

function App() {
  return (
    <ApiProvider>
      <SurveyForm />
    </ApiProvider>
  );
}

export default App;
