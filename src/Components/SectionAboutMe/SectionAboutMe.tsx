import './SectionAboutMe.css'

import iconComputer from './img/computer.png'
import iconMobile from './img/mobile-website-icon.jpg'
import iconGame from './img/games-icon.jpg'
import iconWeb from './img/web-png-icon-10.jpg'
import {FaLinkedin, FaGithub} from 'react-icons/fa';

function SectionAboutMe(){
    const LINKGITHUB = "https://github.com/olucascruz"
    const LINKLINKEDIN = "https://www.linkedin.com/in/olucas-cruz/"
    const LINKITCHIO = "https://olucas8.itch.io/"
    return(
        <section className="AboutMe" id="AboutMe">
                <h2>Sobre mim</h2>
                <ul className="listAboutMe">
                    <li>
                        <img className="IconAboutMe" src={iconComputer} alt="Icone Computador" />
                        <span className="TextAboutMe">Graduando em Sistemas de Informação 6 periodo</span>
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
                    <li className="TextAboutMe" >RPA - Robotic process automation</li>
                    <li className="TextAboutMe" >Machine learning</li>
                    <li className="TextAboutMe">Engenharia de Software</li>
                </ul>
                <h3>Links</h3>
                <ul>
                    
                    <li>
                        <a href={LINKGITHUB}>
                            <FaGithub /> 
                            <span className="TextAboutMe">
                                Github
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href={LINKLINKEDIN}>
                            <FaLinkedin/>
                            <span className="TextAboutMe">
                                Linkedin
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href={LINKITCHIO}>
                            <img className="IconLink" src={iconGame} alt="Icone Videogame" />
                            <span className="TextAboutMe">
                                Portifolio de GameDev
                            </span>
                        </a>
                    </li>
                </ul>
            </section>
        
        )
}


export default SectionAboutMe