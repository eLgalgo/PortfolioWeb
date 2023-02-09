import "./AboutMe.css"
import retrato from "../../images/skateMe.jpg";
import logo1 from "../../images/developerIcon.png"
import logo2 from "../../images/skateIcon.png"
import logo3 from "../../images/musicIcon.png"

function AboutMe(){
    return(
        <main id="about" className="container-fluid mainAbout">
            <h2 className="h2Work">
                ¡Espera!. ¿Quién soy?
            </h2>
            <div className="row divAbout">
                <div className="col caja2">
                    <img className="skateImg img-fluid" src={retrato} />
                </div>
                <div className="col">
                    <p className="pAbout">
                        Estudiante de Licenciatura en Tecnologias de la informacion, amante de deportes extremos (skateboarding) y de cualquier genero musical.
                        Curioso y apasionado por aprender cosas nuevas relacionadas con la tecnologia en general. Me considero una persona que da todo de si mismo, sin rendirse, para lograr un objetivo. <br/><br/>
                        Estoy siempre actualizado sobre las herramientas de trabajo que manejo para poder sacarle el mayor provecho a las mismas.

                    </p>
                    <ul className="listTecn container-fluid">
                        <li className="liTecn">
                            <img src={logo1}/>
                            <p className="pTecn">Dev</p>
                        </li>
                        <li className="liTecn">
                            <img src={logo3}/>
                            <p className="pTecn">MusicLover</p>
                        </li>
                        <li className="liTecn">
                            <img src={logo2}/>
                            <p className="pTecn">¡Skateboarding!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default AboutMe;