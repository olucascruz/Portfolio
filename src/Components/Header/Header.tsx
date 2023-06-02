import { useContext, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import MyContext from '../../Context';
import {BsMoon, BsSun} from 'react-icons/bs'

function Header(){

    const [ isDark, setIsDark ] = useState(true)
    const {switchThemeHandler, theme} = useContext(MyContext)
    const onClickSwitchTheme = () =>{
        switchThemeHandler()
        setIsDark(!isDark)
    }
    return(
        <header className={`App-header ${theme}`}>
            <Link to={"/"} className="Name"><h1>Lucas Cruz</h1></Link>

            <nav className="Categories">
                <Link to={"/"} className="CategoryProject"><p>Web</p></Link>
                <Link to={"/"} className="CategoryProject"><p>Mobile</p></Link>
                <Link to={"/"} className="CategoryProject"><p>Game</p></Link>
            </nav>
            <button className={`BtSwitchTheme ${theme}`} onClick={onClickSwitchTheme}>
                {isDark ?<BsMoon size={50}></BsMoon>:<BsSun size={50}></BsSun>}
            </button>
        </header>
        )
}

export default Header;