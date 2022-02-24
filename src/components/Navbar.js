import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default Navbar

function Navbar() {
    return(
        <nav className='navbar'>
            <h1><FontAwesomeIcon icon="fa-solid fa-paw" /> Cec Pet</h1>
            <ul className='menu'>
                <li><FontAwesomeIcon icon="fa-solid fa-house" /> Home</li>
                <li><FontAwesomeIcon icon="fa-solid fa-money-bill-1-wave" /> Vendas</li>
                <li><FontAwesomeIcon icon="fa-solid fa-boxes-stacked" /> Produtos</li>
                <li><FontAwesomeIcon icon="fa-solid fa-wallet" /> Financeiro</li>
            </ul>
        </nav>
    )
}