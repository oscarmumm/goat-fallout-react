
import { NavLink } from "react-router-dom";
import goatMainImg from "../assets/img/goat-main.webp";
import '../styles/Home.css';

function Home() {

    return (
        <main className="main-welcome-container">
            <img className="main-pic" src={goatMainImg} alt="" />
            <p className="welcome-msg">Hola morador del refugio! Bienvenido a la Prueba de Aptitud Ocupacional Generalizada de Vault-Tec. Este examen nos orientará acerca de cual será tu oficio dentro del refugio.</p>
            <NavLink className="start-quiz-btn" to='/quiz'> [ Comenzar prueba ] </NavLink>
        </main>
    );
}

export default Home;