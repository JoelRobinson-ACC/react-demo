import NavBar from "./components/Navbar";
import { useState, useEffect, useReducer } from "react";
import useFetch from "./hooks/useFetch";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import Create from "./pages/Create";

const BlogReducer = (state, action) => {

  switch (action.type) {
    case "SET":
      return action.payload;

    case "CREATE":
      state.push(action.payload);

    case "DELETE":
      let filteredBlogs = state.filter((b) => b.id != action.id)
      return filteredBlogs;

    default:
      return state;
  }

}

const App = () => {

  const [blogs, dispatch] = useReducer(BlogReducer, null);
  
  const {data, isPending, isError} = useFetch("https://dummyjson.com/posts?limit=5");

  useEffect(() => {
    try{
      dispatch({type: "SET", payload: data.posts})
    } 
    catch (e) {
      console.log(e);
    }
  }, [data])

  function deleteBlog(blogId) {
    dispatch({type: "DELETE", id: blogId})
  }

  function createBlog(newBlog){
    dispatch({type: "CREATE", payload: newBlog})
  }


  return ( 
    <BrowserRouter>
      <div className="bg-slate-500">
        <NavBar />
        <Routes>
          {/* Home route */}
          <Route exact path="/" element={<Home data={blogs} isPending={isPending} isError={isError} handleDelete={deleteBlog} />} />

          {/* About route */}
          <Route exact path="/about" element={<About />} />

          {/* Create route */}
          <Route exact path="/create" element={<Create handleCreate={createBlog} />} />

          {/* Blog details */}
          <Route exact path="/blog/:id" element={<BlogDetails />} />

          <Route path="*" element={<h1>Error page not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
   );
}
 
export default App;