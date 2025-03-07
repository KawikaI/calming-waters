import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule"; // Import Schedule Page
import About from "./pages/About";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/schedule" element={<Schedule />} /> {/* New Page */}
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;