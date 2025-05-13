import './SectionMyStack.css'
import { FaHtml5, FaCss3, FaReact, 
    FaNodeJs, FaAndroid, FaJava,
    FaUnity} from 'react-icons/fa';
import {DiDjango, DiMongodb, DiSqllite, DiPostgresql} from 'react-icons/di';        
import {SiKotlin, SiCsharp, SiFastapi, SiGimp} from 'react-icons/si'
import CardTechnologies from '../../Components/CardTechnologies/CardTechnologies'
import MyContext from '../../Context';
import { useContext } from 'react';

function SectionMyStack(){
    const {theme} = useContext(MyContext)

    const webIcons = [
        {icon:FaHtml5, name:"HTML5"}, {icon:FaCss3, name:"CSS"},
        {icon:FaReact, name:"ReactJs"}, {icon:FaNodeJs, name:"NodeJs"}, 
        {icon:SiFastapi, name:"FastAPI"}, {icon: DiDjango, name:"Django"}, 
        {icon:DiMongodb, name:"Mongodb"}, {icon:DiPostgresql, name:"Postgresql"}
    ]
    const mobileIcons = [
        {icon:FaAndroid, name: "Android Nativo"}, {icon:SiKotlin, name:"Kotlin"}, 
        {icon:FaJava, name:"Java"}, {icon:DiSqllite, name:"Sqlite"}
    ]
    const gameIcons = [
        {icon:FaUnity, name:"Unity"}, {icon:SiCsharp, name:"C#"}, 
        {icon:SiGimp, name:"Gimp"}
    ]
    
    return(
        <section className={`Stack ${theme}`}>
                <h3>Tecnologias que uso</h3>
                <div className="CardsTech">
                    <CardTechnologies title='Web' icons={webIcons} />
                    <CardTechnologies title='Mobile' icons={mobileIcons} />
                    <CardTechnologies title='Game' icons={gameIcons} />
                </div>
        </section>
        )

}

export default SectionMyStack