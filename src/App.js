import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import QuotePage from "./pages/QuotePage";
import Upload from "./pages/Upload";
import Game from "./pages/Game";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  function PrivateRoute({ children }) {
    const auth = useContext(AuthContext);
    return auth.user.accessToken ? children : <Navigate to="/signin" />;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
