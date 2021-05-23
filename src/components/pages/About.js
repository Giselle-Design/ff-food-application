import React from 'react'
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="container" style={{marginTop: '50px', textAlign: 'center'}}>
            <h1>About This Application</h1>
            <p>Application to Search Favourit Food</p>
            <p>Version: 1.0.0 | Design by: <strong style={{ color: "#890bf0"}}>Giselle</strong></p>
            <p><i className="fas fa-envelope"/> gh.saadati63@gmail.com</p>  
            <div>
            <Link to="/" className="btn btn-dark" style={{ marginTop: "15px", justifyContent:"start"}}>Back</Link>
          </div>      
        </div>
    )
}

export default About
