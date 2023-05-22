
import { NavLink } from "react-router-dom";
import goatMainImg from "../assets/img/goat-main.webp";
import '../styles/Home.css';

function Home() {

    return (
        <main className="main-welcome-container">
            <img className="main-pic" src={goatMainImg} alt="" />
            <p className="welcome-msg">Bienvenido a la Prueba de Aptitud Ocupacional Generalizada de Vault-Tec.</p>
            <NavLink className="start-quiz-btn" to='/quiz'> [ Comenzar prueba ] </NavLink>
        </main>
    );
}

export default Home;