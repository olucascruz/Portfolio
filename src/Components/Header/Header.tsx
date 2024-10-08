import { useContext, useState } from 'react';
import './Header.css'
import MyContext from '../../Context';
import {BsMoon, BsSun} from 'react-icons/bs'
import { HashLink as Link } from 'react-router-hash-link';


function Header(){

    const [ isDark, setIsDark ] = useState(true)
    const {switchThemeHandler, theme} = useContext(MyContext)
    const onClickSwitchTheme = () =>{
        switchThemeHandler()
        setIsDark(!isDark)
    }
    const LINKITCHIO = "https://olucas8.itch.io/"
    return(
        <header className={`App-header ${theme}`}>
            <Link to={"#FirstSection"} smooth className="Name"><h1>Lucas Cruz</h1></Link>

            <nav className="Categories">
                <Link to={"#Web"} smooth className="CategoryProject"><p>Web</p></Link>
                <Link to={"#Mobile"} smooth className="CategoryProject"><p>Mobile</p></Link>
                {/* <a href={LINKITCHIO} target="_blank" rel="noopener noreferrer" className="CategoryProject"><p>Game</p></a> */}
            </nav>
            <button className={`BtSwitchTheme ${theme}`} onClick={onClickSwitchTheme}>
                {isDark ?<BsMoon size={40}></BsMoon>:<BsSun size={40}></BsSun>}
            </button>
        </header>
        )
}

export default Header;