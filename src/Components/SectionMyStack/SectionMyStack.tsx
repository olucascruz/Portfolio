import { FaHtml5, FaCss3, FaReact, 
    FaNodeJs, FaPython, FaAndroid, FaJava,
    FaUnity} from 'react-icons/fa';

import {DiDjango, DiMongodb, DiMysql, DiSqllite, DiPhotoshop} from 'react-icons/di';        
import {SiKotlin, SiCsharp} from 'react-icons/si'
import CardTechnologies from '../../Components/CardTechnologies/CardTechnologies'

function SectionMyStack(){
    const webIcons = [
        {icon:FaHtml5, name:"HTML5"}, {icon:FaCss3, name:"CSS"},
        {icon:FaReact, name:"ReactJs"}, {icon:FaNodeJs, name:"NodeJs"}, 
        {icon:FaPython, name:"Python"}, {icon: DiDjango, name:"Django"}, 
        {icon:DiMongodb, name:"Mongodb"}, {icon:DiMysql, name:"MySQL"}
    ]
    const mobileIcons = [
        {icon:FaAndroid, name: "Android Nativo"}, {icon:SiKotlin, name:"Kotlin"}, 
        {icon:FaJava, name:"Java"}, {icon:DiSqllite, name:"Sqlite"}
    ]
    const gameIcons = [
        {icon:FaUnity, name:"Unity"}, {icon:SiCsharp, name:"C#"}, 
        {icon:DiPhotoshop, name:"Photoshop"}
    ]
    
    return(
        <section className="Stack">
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