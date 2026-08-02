import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Resources from "./pages/Resources";
import DeveloperSetup from "./pages/DeveloperSetup";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="site-header">
          <h1>Jasmail Singh Portfolio</h1>
          <Navigation />
        </header>

        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/developer-setup" element={<DeveloperSetup />} />
          </Routes>
        </div>

        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} Jasmail Singh Dhaliwal. Built with
            React and TypeScript.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
