import "./Contact.css"
import linkedin from "../../images/linkedin.svg"
import github from "../../images/github.svg"

function Contact(){
    return(
        <aside id="contact" className="contact container-fluid">
            <h2 className="text-center">¡Contacto!</h2>
            <form>
                <input type="text" className="m-2 itemForm" placeholder="Nombre"/>
                <input type="email" className="m-2 itemForm" placeholder="Email"/>
                <input type="text" className="m-2 itemForm" placeholder="Asunto"/>
                <textarea type="text" className="m-2 itemForm2" placeholder="Mensaje"/>
                <div className="row divForm1">
                    <button className="btnContact2 col">Enviar</button>
                    <div className="col divForm">
                        <a href="https://www.linkedin.com/in/cristofer-cabrera-672192221/" target="_blank"><img className="iconoL" src={linkedin}/></a>
                        <a href="https://github.com/eLgalgo" target="_blank"><img className="iconoL" src={github}/></a>
                    </div>
                </div>
            </form>
        </aside>
    )
}

export default Contact;