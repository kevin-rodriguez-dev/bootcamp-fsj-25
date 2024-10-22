import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MusicPlayer } from "./components/MusicPlayer";
import { Home } from "./pages/Home";
import { Discover } from "./pages/Discover";
import "./assets/css/App.css";

export default function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/radio" element={<h2>Radio</h2>} />
                </Routes>
                <MusicPlayer />
                <Footer />
            </div>
        </Router>
    );
}
