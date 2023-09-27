import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Homepage from "./pages/home/Home";
import Review from "./pages/review/Review";
import Services from "./pages/services/Services";
import Team from "./pages/team/Team";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="*" element="404 page" />
          <Route exact path="/" element={<Homepage />} />
          <Route path="/the-team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
