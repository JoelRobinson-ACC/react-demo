import { Link } from "react-router-dom";

const BlogPreview = ({lesson, handleDelete}) => {


    return ( 
        <>
        <Link to={"/blog/" + lesson.id}>
          <section className="mb-4 p-4 bg-slate-200 rounded-lg">
            <h2 className="text-2xl font-bold">{lesson.title}</h2>
            <div className="flex justify-end gap-2">
              <p>Views: {lesson.views}</p>
              <p>Likes: {lesson.reactions.likes}</p>
              <p>Dislikes: {lesson.reactions.dislikes}</p>
            </div>
          </section>
        </Link>
        </>
     );
}
 
export default BlogPreview;