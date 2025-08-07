// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Practitionner from "./components/Practitionner";
import Score from "./components/Score";
import AnswersReview from "./components/AnswersReview";
import TestPersonaliser from "./components/TestPersonaliser";
import RoleSelector from "./components/RoleSelector";
import Accueil from "./components/Accueil";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* route racine redirige vers /login */}
       {/* <Route path="/" element={<Navigate to="/login" replace />} />*/}

        {/* routes principales (utilise des chemins en minuscules) */}
        
       {/* <Route path="/login" element={<Login />} />*/}
        {/*<Route path="/register" element={<Register />} />*/}
        <Route path="/" element={<Accueil />} />
        <Route path="/roles" element={<RoleSelector />} />
        <Route path="/test-personalise" element={<TestPersonaliser />} />
        <Route path="/practitionner" element={<Practitionner />} />
        <Route path="/score" element={<Score />} />
        <Route path="/answers" element={<AnswersReview />} />

        {/* route 404 simple */}
        <Route
          path="*"
          element={
            <div style={{ padding: 20 }}>
              <h2>404 — Page non trouvée</h2>
              <p>
                Retourner à la <a href="/login">page de connexion</a>.
              </p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
