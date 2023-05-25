import './Home.css'
import DropDownMenu from '../../Components/DropDownMenu/DropDownMenu'
import CardProject from '../../Components/CardProject/CardProject'
function Home(){
    return(
        <div className="App-home">
            <section className="FirstSection">
                <div className="Home-description">
                    <p>Ola sou um desenvolvedor de software.</p>    
                
                </div>
            </section>
            <section className="AboutMe">
                <h2>Sobre mim</h2>
                <p>hey bro sou um dev web, mobile, unity</p>
            </section>

            <section className="SectionWeb SectionCategory">
                <h3>Projetos Web</h3>
                <CardProject 
                titleCard={"Casa dos Jogos"} 
                tech = {["aaa"]}
                description={"Um site para upar jogos de desenvolvedores indie"}
                />
            </section>
            
            <section className="SectionMobile SectionCategory">

            </section>
            
            <section className="SectionGame SectionCategory">

            </section>
        </div>
         
    )
}

export default Home