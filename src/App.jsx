import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Practitionner from "./components/Practitionner";
import Score from "./components/Score";
import AnswersReview from "./components/AnswersReview";
import TestPersonaliser from "./components/TestPersonaliser";
import RoleSelector from "./components/RoleSelector";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/RoleSelector" element={<RoleSelector />} />
         <Route path="/TestPersonaliser" element={<TestPersonaliser />} />
        <Route path="/Practitionner " element={<Practitionner />} />
        <Route path="/score" element={<Score />} />
        <Route path="/answers" element={<AnswersReview />} />
        <Route path="/Practitionner" element={<Practitionner />} />
      </Routes>
    </Router>
  );
}

export default App;
