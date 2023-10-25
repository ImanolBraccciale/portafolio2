import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills";
import Home from "./Home/Home"
import About from "./About/About";

 const App : React.FC<{}>=()=> {
  
  return (
    <div >
   <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;