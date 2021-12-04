import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamHeader from "./components/TeamHeader";
import Home from "./pages/Homepage";
import Insights from "./pages/Insights"
import Careers from "./pages/Careers";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import DataSubmitted from './pages/DataSubmitted'
import Admin from './pages/Admin'
import Footer from "./components/Footer";
import { CssBaseline } from "@material-ui/core";
import './assets/style.css';
import InsightsA from "./pages/InsightsA";
import InsightsB from "./pages/InsightsB";
import InsightsC from "./pages/InsightsC";

function App() {
  return (
    <Router>
      <CssBaseline />
      <TeamHeader />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/insights" element={<Insights />}></Route>
        <Route exact path="/careers" element={<Careers />}></Route>
        <Route exact path="/team" element={<OurTeam />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/submitted" element={<DataSubmitted />}></Route>
        <Route exact path="/admin-page" element={<Admin />}></Route>
        <Route exact path="/insights1" element={<InsightsA />}></Route>
        <Route exact path="/insights2" element={<InsightsB />}></Route>
        <Route exact path="/insights3" element={<InsightsC />}></Route>
        
      </Routes>
      <Footer />
      </Router>
  );
}

export default App;
