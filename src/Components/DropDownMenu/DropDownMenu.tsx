import { useState } from "react"
import { Link } from "react-router-dom"
import './DropDownMenu.css'

function DropDownMenu(){
    const [open, setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(!open)
    }

    return (
        <div className="DropDownMenu">
            <button onClick={handleOpen}>Projetos</button>
            {open ? 
            <ul className="ListCategoryProjects">
                <li><Link to={"#"} className="linkProjects">Game</Link></li>
                <li><Link to={"#"} className="linkProjects">Web</Link></li>
                <li><Link to={"#"} className="linkProjects">Mobile</Link></li>
            </ul>: null}
        </div>
        )

}

export default DropDownMenu