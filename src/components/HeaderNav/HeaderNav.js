
import "./HeaderNav.css"
import burgerIcon from "../../images/burgerIcon.png"
import myProfolio from "../../images/Curriculum Desarrollador Java.pdf"
function HeaderNav(){
    function changeHambu(){
        let div = document.getElementById("hambu");
        let main = document.getElementById("main");
        let listNav = document.getElementById("listaHead");
        div.classList.toggle("active");
        listNav.classList.toggle("active");
    }
    return(
        <header>
            <nav className="container-fluid">
                <ul className="container-fluid">
                    <li className="letraNav">Portfolio</li>
                    <ul id="listaHead" className="listaHeader">
                        <li><a href="#contact" className="letraNav2">Contacto</a></li>
                        <li><a href="#about" className="letraNav2">Sobre mi</a></li>
                        <li><a href="#myWork" className="letraNav2">Mi trabajo</a></li>
                        <li><button className="btnButton" ><a download="Curriculum Cristofer Cabrera" href={myProfolio} className="btnCV" >Descargar CV</a></button></li>
                    </ul>
                    <li className="burgerIcon"><a href="#">
                        <div id="hambu" onClick={(e)=>{changeHambu(); e.preventDefault();}} href="#" className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderNav;