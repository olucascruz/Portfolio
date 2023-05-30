import './Home.css'
import iconCode from './img/icon-code.jpg'
import CardProject from '../../Components/CardProject/CardProject'
import SectionAboutMe from '../../Components/SectionAboutMe/SectionAboutMe';
import SectionMyStack from '../../Components/SectionMyStack/SectionMyStack';
function Home(){
    

    return(
        <div className="App-home">
            <section className="FirstSection">
                <div className="Home-description">
                    <p>Ola sou um desenvolvedor de software.</p>    
                    <img className='ImageCode' src={iconCode} alt="" />
                </div>
            </section>
            <SectionAboutMe/>
            <SectionMyStack/>
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