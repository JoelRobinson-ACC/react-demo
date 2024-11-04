import { Link } from "react-router-dom";

const BlogPreview = ({lesson, handleDelete}) => {


    return ( 
        <>
          <section className="mb-4 p-4 bg-slate-200 rounded-lg">
            <h2 className="text-2xl font-bold">{lesson.title}</h2>
            {/* <div className="flex justify-end gap-2">
              <p>Views: {lesson.views}</p>
              <p>Likes: {lesson.reactions.likes}</p>
              <p>Dislikes: {lesson.reactions.dislikes}</p>
            </div> */}
            <button className="bg-red-500" onClick={() => handleDelete(lesson.id)}>Delete</button>
            <Link to={"/blog/" + lesson.id}>View</Link>
          </section>
        </>
     );
}
 
export default BlogPreview;