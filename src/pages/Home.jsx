import useFetch from "../hooks/useFetch";
import BlogPreview from "../components/BlogPreview";

const Home = ({data, isPending, isError, handleDelete}) => {

    

    return ( 
        <div className="content p-2">

        {isPending && <p>Loading...</p>}

        {data && data.map((p) => (
            <BlogPreview lesson={p} key={p.id} handleDelete={handleDelete} />
          ))
        }

        {isError && <p>Soemthing went wrong</p>}

      </div>
     );
}
 
export default Home;