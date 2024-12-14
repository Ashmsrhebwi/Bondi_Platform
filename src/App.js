import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import About from "./pages/about";
import Landing from "./components/Landing";
import Features from "./components/Features";
import OurWork from "./components/OurWork";
import StuffAboutUs from "./components/Stuff";
import Team from "./components/team";
import Techs from "./components/techs";
import ProjectNow from "./components/ProjectNow";
import OurBlog from "./components/Blog";
import Subscribe from "./components/Subscribe";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar/> {/* Sabit Olan NavBar */}   

      <Routes> {/* Ana Sayfa Tum Bolumler */}  
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Features />
              <OurWork />
              <StuffAboutUs />
              <Team />
              <Techs />
              <ProjectNow />
              <OurBlog />
              <Subscribe />
            </>
          } 
        />
      </Routes>
      
      <Routes>
        <Route path="/Services" element={< Services/>}></Route>
        <Route path="/Portfolio" element={< Portfolio/>}></Route>
        <Route path="/Contact" element={< Contact/>}></Route>
        <Route path="/About" element={< About/>}></Route>
      </Routes>
      
      <Footer /> {/* Sabit Olan Footer */}
    </Router>
  )
}


export default App;
