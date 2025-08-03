import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Practitionner from "./components/Practitionner";
import Score from "./components/Score";
import AnswersReview from "./components/AnswersReview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Practitionner />} />
        <Route path="/score" element={<Score />} />
        <Route path="/answers" element={<AnswersReview />} />
        <Route path="/Practitionner" element={<Practitionner />} />
      </Routes>
    </Router>
  );
}

export default App;
