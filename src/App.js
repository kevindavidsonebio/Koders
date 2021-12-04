import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamHeader from "./components/TeamHeader";
import Home from "./pages/Homepage";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Team from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import '././assets/style.css';

function App() {
  return (
    <Router>
      <TeamHeader />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/insights" element={<Insights />}></Route>
        <Route exact path="/careers" element={<Careers />}></Route>
        <Route exact path="/team" element={<Team />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
      </Router>
  );
}

export default App;
