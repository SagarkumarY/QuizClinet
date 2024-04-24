import { Route, Routes ,useLocation} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

function App() {
  const location = useLocation();

  // Check if the current location is the home page ("/")
  const isHomePage = location.pathname === "/";
  return (
    <>
      {/* <Navbar /> */}
      {isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </>
  );
}

export default App;
