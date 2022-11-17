import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

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
                                <Link href="index.html">
                                    <img src="../imagenes/logo_prueba.png" alt="site logo"/>
                                </Link>
                            </div>
                            <div class="footer-social">
                                <ul>
                                    <li><Link href="#"><span class="fa-brands fa-facebook"></span></Link></li>
                                    <li><Link href="#"><span class="fa-brands fa-twitter"></span></Link></li>
                                    <li><Link href="#"><span class="fa-brands fa-youtube"></span></Link></li>
                                    <li><Link href="#"><span class="fa-brands fa-instagram"></span></Link></li>
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