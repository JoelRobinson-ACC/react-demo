import BlogPreview from "./components/BlogPreview";
import NavBar from "./components/Navbar";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {

  const {data, isPending, isError} = useFetch("https://dummyjson.com/posts");
  

  return ( 
    <div className="bg-slate-500">
      <NavBar />
      <div className="content p-2">

        {/* <div className="flex gap-8 justify-center p-8">
          <div className="bg-blue-500 w-1/6 aspect-square animate-spin-slow"></div>
          <div className="bg-red-500 w-1/6 aspect-square animate-ping-easy">
          </div>
          <div className="bg-green-500 w-1/6 aspect-square animate-pulse"></div>
          <div className="bg-yellow-500 w-1/6 aspect-square hover:animate-wiggle"></div>
        </div> */}

        {isPending && <p>Loading...</p>}

        {data && data.posts.map((p) => (
            <BlogPreview lesson={p} key={p.id} />
          ))
        }

        {isError && <p>Soemthing went wrong</p>}

      </div>
    </div>
   );
}
 
export default App;