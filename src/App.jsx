import NavBar from "./components/Navbar";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  

  return ( 
    <BrowserRouter>
      <div className="bg-slate-500">
        <NavBar />
        <Routes>
          {/* Home route */}
          <Route exact path="/" element={<Home />} />
          {/* About route */}
          <Route exact path="/about" element={<About />} />
          {/* Blog details */}
          <Route exact path="/blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<h1>Error page not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
   );
}
 
export default App;