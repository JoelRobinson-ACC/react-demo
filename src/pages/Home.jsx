import useFetch from "../hooks/useFetch";
import BlogPreview from "../components/BlogPreview";

const Home = () => {

    const {data, isPending, isError} = useFetch("https://dummyjson.com/posts");

    return ( 
        <div className="content p-2">

        {isPending && <p>Loading...</p>}

        {data && data.posts.map((p) => (
            <BlogPreview lesson={p} key={p.id} />
          ))
        }

        {isError && <p>Soemthing went wrong</p>}

      </div>
     );
}
 
export default Home;