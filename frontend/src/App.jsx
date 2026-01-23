import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RenewableImpactSimulator from "./pages/RenewableImpactSimulator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/simulator" element={<RenewableImpactSimulator />} />
      </Routes>
    </Router>
  );
}

export default App;
