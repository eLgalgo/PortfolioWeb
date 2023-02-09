import "./MyWork.css"
import imgProy1 from "../../images/imgProy1.svg"
import imgProy2 from "../../images/imgProy2.svg"
import arrow from '../../images/arrow.svg'
function MyWork(){
    return(
        <aside id="myWork" className="container-fluid">
            <h2 className="h2Work">Mi trabajo</h2>
            <div className="row proyect container-fluid">
                <div className="col-1 arrow1 ">
                    <  img className="arrow" src={arrow}/>
                </div>
                <div className="col container-fluid">
                    <h2>Namas</h2>
                    <h4>Ecoglamping</h4>
                    <p>Gracias al equipo de talento de CoderHouse y al entrar en el top 10 de estudiantes mas destacados de mi cursada en Desarrollo Web, logramos junto con mi compañero de equipo desarrollar este sitio web estatico para un emprendimiento en Argentina - Namas, siendo simplmente un sitio web informativo sobre el mismo.</p>
                    <a href="https://namasecoglamping.000webhostapp.com/" target="_blank" className="btnWL">Ver Proyecto <span className="spanWorkL">➤</span> </a>
                </div>
                <div className="col container-fluid">
                    <img className="imgWork" src={imgProy1}/>
                </div>
            </div>
            
        </aside>
    );
}

export default MyWork;