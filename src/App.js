import {Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import About from "./Components/About";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
