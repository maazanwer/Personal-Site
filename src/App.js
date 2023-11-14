import Home from "./pages/Home"
import About from "./pages/About-me"
import CV from "./pages/CV"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/navbar";
import Footer from "./components/Lowerpart";
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
