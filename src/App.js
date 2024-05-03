import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage/landingPage";
import BusinessOwner from "./pages/businessOwner/businessOwner";
import LoginPage from "./pages/loginPage/loginPage";
import DashboardCc from "./pages/dashboard/dashboardCc"
import AboutUs from "./pages/aboutUs/aboutUs";
import EducationPage from "./pages/educationPage/educationPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/businessowners" element={<BusinessOwner />} />
          <Route path="/dashboard" element={<DashboardCc />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/educationPage" element={<EducationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
