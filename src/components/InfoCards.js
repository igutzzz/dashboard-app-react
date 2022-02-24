import React from "react";
import '../styles/InfoCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

export const InfoCards = () => {
    return(
        <div className="InfoCards">
            <div className="card" id="gastos">
                <h3><FontAwesomeIcon icon="fa-solid fa-hand-holding-dollar" /> Gastos</h3>
                <h2>R$3.782,50</h2>
            </div>
            <div className="card" id="ganhos">
                <h3><FontAwesomeIcon icon="fa-solid fa-dollar-sign" /> Ganhos</h3>
                <h2>R$ 5.932,75</h2>
            </div>
            <div className="card" id="lucros">
                <h3><FontAwesomeIcon icon="fa-solid fa-chart-line" /> Lucros</h3>
                <h2>R$3.849,75</h2>
            </div>
        </div>
    )
}