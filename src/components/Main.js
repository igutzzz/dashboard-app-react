import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { InfoCards } from './InfoCards'
import MainChart from './MainChart'
import { Sales } from './Sales'


export default Main

function Main() {
    return(
        <main className='main'> 
            <h1>Olá, Igor</h1>
            <InfoCards />
            <MainChart />
            <Sales />
        </main>
    )
}