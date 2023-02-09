import "./Footer.css"
import linkedin from "../../images/linkedin2.svg"
import github from "../../images/github2.svg"

function Footer(){
    return(
        <footer id="footer" className="container-fluid">
            <div className="row">
                <div className="col emailDivFooter">
                    <h3 className="h3Footer">Email</h3>
                    <p className="pFooter">cristofer50056@gmail.com</p>
                </div>
                <div className="col">
                    <ul className="listaIcons listaIcons2">
                        <li><a href="https://www.linkedin.com/in/cristofer-cabrera-672192221/" target="_blank" className="linkFooter"><img className="iconoL" src={linkedin}/> Linkedin</a></li>
                        <li><a href="https://github.com/eLgalgo" target="_blank"className="linkFooter"><img className="iconoL" src={github}/> GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p className="col pFooter">Copyright © 2022 Cristofer Cabrera. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;