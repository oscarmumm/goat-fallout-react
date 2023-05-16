import {useState, useEffect} from "react";
import goatlogo from './assets/img/goat-main.webp'
import "./App.css";
import { cuestionario } from "./Questions";

function App() {

    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    return (
        <>
            <div className="linea-animada"></div>
            <h1>Bienvenido a la G.O.A.T.</h1>
            <div className="question-div">
                <div>
                    <h3>Pregunta 1: 'Un científico del refugio se dirige a ti histérico y grita "¡Voy a poner el harmonizador de Quántum en tu cámara de resonancia fotónica!" ¿Tú qué respondes?'</h3>
                </div>
                <ul className="answers-div">
                    <li>
                        <button className="answer-btn">['Pero doctor, ¿eso no provocaría una desestabilización parabólica de la singularidad de la fisión?']</button>
                    </li>
                    <li>
                        <button className="answer-btn">['¿Sí? ¡Pues tú mismo con tu mecanismo!']</button>
                    </li>
                    <li>
                        <button className="answer-btn">['No digas nada, en lugar de eso, coge un tubo que tengas a mano y golpea al científico en la cabeza para dejarlo fuera de combate. Por lo que sabes, planeaba hacer estallar el refugio.']</button>
                    </li>
                    <li>
                        <button className="answer-btn">['En lugar de contestarle, escabúllete antes de que el científico continúe con su discurso']</button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default App;
