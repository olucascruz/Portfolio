import './SectionAboutMe.css'

import iconComputer from './img/computer.png'
import iconMobile from './img/mobile-website-icon.jpg'
import iconGame from './img/games-icon.jpg'
import iconWeb from './img/web-png-icon-10.jpg'

function SectionAboutMe(){

    return(
        <section className="AboutMe">
                <h2>Sobre mim</h2>
                <ul className="listAboutMe">
                    <li>
                        <img className="IconAboutMe" src={iconComputer} alt="Icone Computador" />
                        <span className="TextAboutMe">Graduando em Sistemas de Informação 5 periodo</span>
                    </li>
                    <li>
                        <img className="IconAboutMe" src={iconWeb} alt="Icone Web" />
                        <span className="TextAboutMe">Desenvolvedor Web</span>
                    </li>
                    <li>
                        <img className="IconAboutMe" src={iconMobile} alt="Icone Celular" />
                        <span className="TextAboutMe">Desenvolvedor Mobile</span>
                    </li>
                    <li>
                        <img className="IconAboutMe" src={iconGame} alt="Icone Videogame" />
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
        
        )
}


export default SectionAboutMe