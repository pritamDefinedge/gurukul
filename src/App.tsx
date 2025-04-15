import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useSmoothScroll from "./hooks/useSmoothScroll";

import Home from "./page/Home";
import About from "./page/About";
import Courses from "./page/Courses";
import CourseDetails from "./page/CourseDetails"; 
import Contact  from "./page/Contact";
import Login  from "./page/Login";
import NotFound from "./page/NotFound"; // optional 404 page

function App() {
  // Apply smooth scrolling globally
  useSmoothScroll();
  
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Optional 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
