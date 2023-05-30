import CardProject from '../../Components/CardProject/CardProject'


function SectionProjects(){

    return(
        <section className="SectionProjects">
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
        </section>
            )
}


export default SectionProjects