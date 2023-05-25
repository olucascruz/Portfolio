import './Header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="App-header">
            <Link to={"/"} className="Name"><h1>Lucas Cruz</h1></Link>

            <nav className="Categories">
                <Link to={"/"} className="CategoryProject"><p>Web</p></Link>
                <Link to={"/"} className="CategoryProject"><p>Mobile</p></Link>
                <Link to={"/"} className="CategoryProject"><p>Game</p></Link>
            </nav>
        </header>
        )
}

export default Header;