import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TeamProfiles from "./pages/TeamProfiles.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/team" element={<TeamProfiles />} />
      </Routes>
    </Router>
  );
}

export default App;
