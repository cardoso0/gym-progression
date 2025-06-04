import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Trainings from "./pages/Trainings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<Exercise />} />
        <Route path="/trainings" element={<Trainings />} />
      </Routes>
    </Router>
  );
}

export default App;
