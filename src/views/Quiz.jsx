import { useState } from "react";
import { cuestionario } from "../data/questions";
import { results } from "../data/results";
import { NavLink } from "react-router-dom";
import "../styles/Quiz.css";
import { images } from "../assets/img/images";

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
            calcularResultado(puntuacion);
            setIsFinished(true)
        }
    };

    const calcularResultado = (arr) => {
        const duplicates = arr.filter(
            (elem, index) => arr.indexOf(elem) != index
        );
        console.log(duplicates)
        duplicates.length >= 1 ? setResultado(duplicates[0]) : setResultado(arr[0]);
        console.log(resultado)
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
                        <img className="question-img" src={images[(cuestionario[preguntaActual].id) -1 ]} alt="question-img" />
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
