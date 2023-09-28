import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Homepage from "./pages/home/Home";
import Review from "./pages/review/Review";
import Services from "./pages/services/Services";
import Team from "./pages/team/Team";
import ScrollToTop from "./helpers/ScrollToTop";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="*" element="404 page" />
          <Route exact path="/" element={<Homepage />} />
          <Route path="/the-team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
