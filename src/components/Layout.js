import React from "react";
import Navbar from './Navbar'
import Main from './Main'
import Side from './Side'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

//styles
import '../styles/Layout.css'
import '../styles/Navbar.css'
import '../styles/Main.css'
import '../styles/InfoCards.css'

export default Layout


function Layout() {
    return(
        <div className="layout"> 
            <Navbar />
            <Main />
            <Side />
        </div>
    )
}