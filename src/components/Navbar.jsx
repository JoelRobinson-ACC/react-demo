import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

    const title = "hello"

    return ( 
        <header className="app-header flex">
            <h1 className='font-bold text-5xl grow'>{title}</h1>
            <Link to={"/create"} className='text-3xl font-bold'>+</Link>
        </header>
     );
}
 
export default NavBar;