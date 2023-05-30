import { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import MyContext from '../../Context';


function Header(){
    const {switchThemeHandler, theme} = useContext(MyContext)
    return(
        <header className={`App-header ${theme}`}>
            <Link to={"/"} className="Name"><h1>Lucas Cruz</h1></Link>

            <nav className="Categories">
                <Link to={"/"} className="CategoryProject"><p>Web</p></Link>
                <Link to={"/"} className="CategoryProject"><p>Mobile</p></Link>
                <Link to={"/"} className="CategoryProject"><p>Game</p></Link>
            </nav>
            <button onClick={switchThemeHandler}>Trocar cor</button>
        </header>
        )
}

export default Header;