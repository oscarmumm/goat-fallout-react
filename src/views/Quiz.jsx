import { useState, useEffect } from "react";
import { cuestionario } from "../data/questions";
import '../styles/Quiz.css'

const Quiz = () => {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    return (
        <div className="question-div">
            <div>
                <h3>{cuestionario[preguntaActual].pregunta}</h3>
            </div>
            <ul className="answers-div">
                {cuestionario[preguntaActual].opciones.map((respuesta) => (
                    <li key={respuesta.textoRespuesta}>
                        <button className="answer-btn">
                            - {respuesta.textoRespuesta}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;
