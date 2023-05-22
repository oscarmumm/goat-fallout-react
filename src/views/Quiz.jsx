import { useState } from "react";
import { cuestionario } from "../data/questions";
import { results } from "../data/results";
import { NavLink } from "react-router-dom";
import "../styles/Quiz.css";

const Quiz = () => {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState([]);
    const [isFinished, setIsFinished] = useState(false);
    const [resultado, setResultado] = useState('')

    const handleClick = (respuesta) => {
        if (preguntaActual < 9) {
            setPuntuacion([...puntuacion, ...respuesta.skill]);
            console.log('puntuacion actual: ', puntuacion)
            setPreguntaActual(preguntaActual + 1);
        } else {
            console.log('puntuacion final: ', puntuacion)
            console.log(puntuacion.sort())
            calcularResultado(puntuacion);
            setIsFinished(true)
        }
    };

    const calcularResultado = (arr) => {
        const duplicates = arr.filter(
            (elem, index) => arr.indexOf(elem) != index
        );
        const resultado = duplicates[0];
        setResultado(resultado)
    };

    return (
        <>
            {isFinished ? (
                <div className="results-container">
                    <h2>¡Enhorabuena! Has concluído el examen! Tu tarea dentro del refugio será: </h2>
                    <h2>{results[resultado]}</h2>
                    <NavLink className='restart-test-btn' to='/'>[ Re-hacer el examen ]</NavLink>
                </div>
            ) : (
                <div className="question-div">
                    <div>
                        <h3>{cuestionario[preguntaActual].pregunta}</h3>
                    </div>
                    <ul className="answers-div">
                        {cuestionario[preguntaActual].opciones.map(
                            (respuesta, index) => (
                                <li key={index}>
                                    <button
                                        className="answer-btn"
                                        onClick={() => handleClick(respuesta)}
                                    >
                                        {respuesta.textoRespuesta}
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Quiz;
