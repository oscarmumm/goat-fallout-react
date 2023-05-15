import {useState} from "react";
import goatlogo from './assets/img/goat-main.webp'
import "./App.css";
import { cuestionario } from "./Questions";

function App() {

    return (
        <>
            <div className="linea-animada"></div>
            <h1>Welcome to the G.O.A.T.!!</h1>
            <img src={goatlogo} alt="" />
            <div>
                {cuestionario.map((el) => (
                    <p><span>Pregunta N° {el.id}: </span>{el.pregunta}</p>
                ))}
            </div>
        </>
    );
}

export default App;
