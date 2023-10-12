import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Home from "./Home/Home"

export const App : React.FC<{}>=()=> {
  
  return (
    <div >
   <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

