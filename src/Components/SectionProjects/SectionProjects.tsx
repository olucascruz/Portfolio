import './SectionProjects.css'
import { useContext } from 'react'
import CardProject from '../../Components/CardProject/CardProject'
import MyContext from '../../Context'
import { SiCss3, SiHtml5, SiKotlin} from 'react-icons/si'
import { BsAndroid } from 'react-icons/bs'
import { DiDjango } from 'react-icons/di'


function SectionProjects(){
    const casaDosJogos = "https://github.com/olucascruz/casa_dos_jogos"
    const organyze = "https://github.com/olucascruz/Organyze"

    const {theme} = useContext(MyContext)
    return(
        <section className={`SectionProjects ${theme}`}>
            <section className="SectionWeb SectionCategory" id="Web">
                <h3>Projetos Web</h3>
                <CardProject 
                titleCard={"Casa dos Jogos"} 
                tech = {[DiDjango, SiHtml5, SiCss3]}
                description={"Um site para desenvolvedores indie divulgarem seus jogos"}
                link = {casaDosJogos}
                hasDeploy = {false}
                />
            </section>
          
            <section className="SectionMobile SectionCategory" id="Mobile">
                <h3>Projetos Mobile</h3>
                <CardProject 
                titleCard={"Organyze"} 
                tech = {[SiKotlin, BsAndroid]}
                description={"Um aplicativo para te ajudar a organizar os estudos "}
                link = {organyze}
                hasDeploy = {false}
                />
            </section>
            
            
        </section>
            )
}


export default SectionProjects