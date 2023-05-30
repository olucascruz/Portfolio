import './Home.css'
import iconCode from './img/icon-code.jpg'
import SectionAboutMe from '../../Components/SectionAboutMe/SectionAboutMe';
import SectionMyStack from '../../Components/SectionMyStack/SectionMyStack';
import SectionProjects from '../../Components/SectionProjects/SectionProjects';
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
            <SectionProjects/>
        </div>
         
    )
}

export default Home