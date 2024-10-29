import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Empresa from "./Pages/Empresa";
import Contato from "./Pages/Contato";
import ImcCalculator from "./Pages/Calculadora";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/calculator" element={<ImcCalculator />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
