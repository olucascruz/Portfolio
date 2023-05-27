import './Home.css'
import iconCode from './img/icon-code.jpg'
import iconComputer from './img/computer.png'
import iconMobile from './img/mobile-website-icon.jpg'
import iconGame from './img/games-icon.jpg'
import iconWeb from './img/web-png-icon-10.jpg'

import CardProject from '../../Components/CardProject/CardProject'
import CardTechnologies from '../../Components/CardTechnologies/CardTechnologies'

function Home(){
    return(
        <div className="App-home">
            <section className="FirstSection">
                <div className="Home-description">
                    <p>Ola sou um desenvolvedor de software.</p>    
                    <img className='ImageCode' src={iconCode} alt="" />
                </div>
            </section>
            <section className="AboutMe">
                <h2>Sobre mim</h2>
                <ul className="listAboutMe">
                    <li>
                        <img className="IconAboutMe" src={iconComputer} alt="" />
                        <span className="TextAboutMe">Graduando em Sistemas de Informação 5 periodo</span>
                    </li>
                    <li>
                        <img className="IconAboutMe" src={iconWeb} alt="" />
                        <span className="TextAboutMe">Desenvolvedor Web</span>
                    </li>
                    <li>
                        <img className="IconAboutMe" src={iconMobile} alt="" />
                        <span className="TextAboutMe">Desenvolvedor Mobile</span>
                    </li>
                    <li>
                        <img className="IconAboutMe" src={iconGame} alt="" />
                        <span className="TextAboutMe">Desenvolvedor de Jogos</span>
                    </li>
                </ul>
                <h3>Aprendendo</h3>
                <ul>
                    <li className="TextAboutMe" >Kotlin</li>
                    <li className="TextAboutMe" >Design de interação</li>
                    <li className="TextAboutMe">Engenharia de Software</li>
                </ul>
            </section>
            <section className="Stack">
                <h3>Tecnologias</h3>
                <CardTechnologies></CardTechnologies>
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