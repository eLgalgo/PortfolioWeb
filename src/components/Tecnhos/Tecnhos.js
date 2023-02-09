import "./Tecnhos.css"
import logo1 from "../../images/icons8-css3.svg"
import logo2 from "../../images/icons8-git.svg"
import logo3 from "../../images/icons8-html-5.svg"
import logo4 from "../../images/icons8-javascript.svg"
import logo5 from "../../images/icons8-logotipo-de-java-coffee-cup.svg"
import logo6 from "../../images/icons8-nodejs.svg"
import logo7 from "../../images/icons8-oreja.svg"
import logo8 from "../../images/icons8-sass.svg"
import logo9 from "../../images/icons8-reaccionar.svg"
function Tecnhos(){
    return(
        <div>
            <ul className="listTecn container-fluid">
                <li className="liTecn">
                    <img src={logo1}/>
                    <p className="pTecn">CSS3</p>
                </li>
                <li className="liTecn">
                    <img src={logo3}/>
                    <p className="pTecn">HTML5</p>
                </li>
                <li className="liTecn">
                    <img src={logo2}/>
                    <p className="pTecn">GIT</p>
                </li>
                <li className="liTecn">
                    <img src={logo8}/>
                    <p className="pTecn">SASS</p>
                </li>
                <li className="liTecn">
                    <img src={logo9}/>
                    <p className="pTecn">ReactJs</p>
                </li>
                <li className="liTecn">
                    <img src={logo6}/>
                    <p className="pTecn">NodeJs</p>
                </li>
                <li className="liTecn">
                    <img src={logo4}/>
                    <p className="pTecn">JavaScript</p>
                </li>
                <li className="liTecn">
                    <img src={logo7}/>
                    <p className="pTecn">Bootstrap</p>
                </li>
                <li className="liTecn">
                    <img src={logo5}/>
                    <p className="pTecn">Java</p>
                </li>
            </ul>
        </div>
    )
}

export default Tecnhos;