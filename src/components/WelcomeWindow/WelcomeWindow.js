
import retrato from "../../images/retrato3.svg";
import flecha from "../../images/flecha.png"
import linkedin from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import "./WelcomeWindow.css"
function WelcomeWindow(){
    return(
        <main id="main" className="container-fluid">
            <div className="row principalContainer">
                <div className="col divWelcome row">
                    <div className="col caja12">
                        <ul className="listaIcons listaIcons4">
                            <li><a href="https://www.linkedin.com/in/cristofer-cabrera-672192221/" target="_blank"><img className="iconoL" src={linkedin}/></a></li>
                            <li><a href="https://github.com/eLgalgo" target="_blank"><img className="iconoL" src={github}/></a></li>
                        </ul>
                    </div>
                    <div className="col caja11">
                        <h1>
                            Hola, soy Cristofer<br/>
                        </h1>
                        <h4 className="titleHome">
                            Front-End Developer
                        </h4>
                        <p>
                            Amante de lo que hago y como lo hago. Detallista, comprometido y responsable con el trabajo que ofrezco. <br/>
                            ¿Te gusta lo que ves? <br/>
                            ¡Trabajemos juntos!
                        </p>
                        <button href="#contact" className="btnContact"><a href="#contact" id="contactoHome">Contáctame</a><span className="arrowText">➤</span></button>
                    </div>
                </div>
                <div className="col caja2">
                    <img className="myImg" src={retrato} />
                </div>
            </div>
        </main>
    );
}

export default WelcomeWindow;