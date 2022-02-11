import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import QuotePage from "./pages/QuotePage";
import Upload from "./pages/Upload";
import Game from "./pages/Game";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
