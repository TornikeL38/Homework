import {Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import About from "./Components/About";
import { MyContext } from "./MyContext";


function App() {
  return (
    <div>
    <MyContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </MyContext>
    </div>
  );
}

export default App;
