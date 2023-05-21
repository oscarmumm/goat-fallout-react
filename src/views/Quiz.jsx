import { useState, useEffect } from "react";
import { cuestionario } from "../data/questions";
import '../styles/Quiz.css'

const Quiz = () => {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState([]);
    const [isFinished, setIsFinished] = useState(false);

    const handleClick = (respuesta) => {
        if(preguntaActual < 9) {
            setPuntuacion([...puntuacion, respuesta.skill]);
            console.log(puntuacion);
            console.log('preguntaActual:', preguntaActual)
            setPreguntaActual(preguntaActual + 1);
        } else {
            console.log('fin quiz')
            console.log(puntuacion);
        }

    }

    return (
        <div className="question-div">
            <div>
                <h3>{cuestionario[preguntaActual].pregunta}</h3>
            </div>
            <ul className="answers-div">
                {cuestionario[preguntaActual].opciones.map((respuesta, index) => (
                    <li key={index}>
                        <button className="answer-btn" onClick={() => handleClick(respuesta)}>
                            {respuesta.textoRespuesta}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;
