import React, { Fragment } from 'react'

export const Footer = () => {
    return (
        <Fragment>
            <footer className="py-1">
            <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="footer-bottom-inn">
                            <div class="footer-logo">
                                <a href="index.html">
                                    <img src="../imagenes/logo_prueba.png" alt="site logo"/>
                                </a>
                            </div>
                            <div class="footer-social">
                                <ul>
                                    <li><a href="#"><span class="fa-brands fa-facebook"></span></a></li>
                                    <li><a href="#"><span class="fa-brands fa-twitter"></span></a></li>
                                    <li><a href="#"><span class="fa-brands fa-youtube"></span></a></li>
                                    <li><a href="#"><span class="fa-brands fa-instagram"></span></a></li>
                                </ul>
                            </div>
                            <div class="copyright">
                                <p>&copy; The Box Game Company - 2022 - Todos los derechos reservados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </footer>

        </Fragment>
    )
}