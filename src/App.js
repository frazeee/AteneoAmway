import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage/landingPage";
import BusinessOwner from "./pages/businessOwner/businessOwner";
import LoginPage from "./pages/loginPage/loginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/businessowners" element={<BusinessOwner />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
