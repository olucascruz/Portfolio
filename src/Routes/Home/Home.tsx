import './Home.css'
import iconCode from './img/icon-code.jpg'

import { FaHtml5, FaCss3, FaReact, 
        FaNodeJs, FaPython, FaAndroid, FaJava,
        FaUnity} from 'react-icons/fa';

import {DiDjango, DiMongodb, DiMysql, DiSqllite, DiPhotoshop} from 'react-icons/di';        
import {SiKotlin, SiCsharp} from 'react-icons/si'
import CardProject from '../../Components/CardProject/CardProject'
import CardTechnologies from '../../Components/CardTechnologies/CardTechnologies'
import SectionAboutMe from '../../Components/SectionAboutMe/SectionAboutMe';

function Home(){
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
        <div className="App-home">
            <section className="FirstSection">
                <div className="Home-description">
                    <p>Ola sou um desenvolvedor de software.</p>    
                    <img className='ImageCode' src={iconCode} alt="" />
                </div>
            </section>
            <SectionAboutMe/>
            <section className="Stack">
                <h3>Tecnologias</h3>
                <div className="CardsTech">
                    <CardTechnologies title='Web' icons={webIcons} />
                    <CardTechnologies title='Mobile' icons={mobileIcons} />
                    <CardTechnologies title='Game' icons={gameIcons} />
                </div>
            </section>
            <section className="SectionWeb SectionCategory">
                <h3>Projetos Web</h3>
                <CardProject 
                titleCard={"Casa dos Jogos"} 
                tech = {["aaa"]}
                description={"Um site para desenvolvedores indie divulgarem seus jogos"}
                link = {""}
                hasDeploy = {false}
                />
            </section>
            <section className="SectionMobile SectionCategory">
                <h3>Projetos Mobile</h3>
                <CardProject 
                titleCard={"Organyze"} 
                tech = {["aaa"]}
                description={"Um aplicativo para te ajudar a organizar os estudos "}
                link = {""}
                hasDeploy = {false}
                />
            </section>
            
            <section className="SectionGame SectionCategory">
                <h3>Projetos de Game</h3>
                <CardProject 
                titleCard={"Boss Batle Loop"} 
                tech = {["aaa"]}
                description={"Um jogo shooter de batalha de chefes"}
                link = {""}
                hasDeploy = {true}
                />
            </section>
        </div>
         
    )
}

export default Home