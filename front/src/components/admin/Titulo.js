import React from 'react'
import {Link } from "react-router-dom"

export const Titulo = () => {
  return (
    <section class="fag-breadcrumb-area" style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(/admBg.jpg)`
    }}>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcromb-box">
                        <h3>Administrador</h3>
                        <ul>
                            <li><i class="fa-solid fa-house"></i></li>
                            <li><Link to="/home">Inicio</Link></li>
                            <li><i class="fa-solid fa-angle-right"></i></li>
                            <li>Administrador</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Titulo