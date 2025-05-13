import './SectionProjects.css'
import { useContext } from 'react'
import CardProject from '../../Components/CardProject/CardProject'
import MyContext from '../../Context'
import { SiAngular, SiCss3, SiFastapi, SiHtml5, SiKotlin, SiPostgresql} from 'react-icons/si'
import { BsAndroid } from 'react-icons/bs'
import { DiDjango } from 'react-icons/di'


function SectionProjects(){
    const casaDosJogos = "https://github.com/olucascruz/casa_dos_jogos"
    const site_food = "https://olucascruz.github.io/hamburguer/"
    const notes =  "https://github.com/olucascruz/LoginProject"
    const organyze = "https://github.com/olucascruz/Organyze"
    const {theme} = useContext(MyContext)
    return(
        <section className={`SectionProjects ${theme}`}>
            <h3>Projetos Web</h3>

            <section className="SectionWeb SectionCategory" id="Web">
                
                <CardProject 
                titleCard={"Notes - Sistema de Notas"} 
                tech = {[SiAngular, SiFastapi, SiPostgresql]}
                description={"Um sistema para gerenciar notas pessoais. \n Funcionalidades: autenticação \n visualizar notas, criar notas, editar notas, excluir notas"}
                link = {notes}
                hasDeploy = {false}
                />

                <CardProject 
                titleCard={"Landing page - Lanchonete"} 
                tech = {[SiAngular, SiHtml5, SiCss3]}
                description={"Uma landing page para uma lanchonete fictícia - Desenvolvida com Angular"}
                link = {site_food}
                hasDeploy = {true}
                />

                <CardProject 
                titleCard={"Casa dos Jogos"} 
                tech = {[DiDjango, SiHtml5, SiCss3]}
                description={"Um site para desenvolvedores indie divulgarem seus jogos"}
                link = {casaDosJogos}
                hasDeploy = {false}
                />

                
                
            </section>
            <h3>Projetos Mobile</h3>
          
            <section className="SectionMobile SectionCategory" id="Mobile">
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