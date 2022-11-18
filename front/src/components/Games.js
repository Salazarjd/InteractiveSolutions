import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getGames } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export const Games = () => {
    const { games, error } = useSelector(state => state.games)
    const alert = useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getGames());
    }, [dispatch])
    return (
        <Fragment>
            <MetaData title="Lo mejor del mundo Gamer"></MetaData>
            <section className="fag-breadcrumb-area" style={{backgroundImage: "linear-gradient(0deg,rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/gamesBg.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcromb-box">
                                <h3>Nuestros <span>Juegos</span></h3>
                                <ul>
                                    <li><i className="fa-solid fa-house"></i></li>
                                    <li><Link to="/Home">Inicio</Link></li>
                                    <li><i className="fa-solid fa-angle-right"></i></li>
                                    <li>Todos los juegos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="col-lg-12">
                <div className="games-category">
                    <div className="row">
                        {games && games.map(game => (
                            <div className="col-lg-3 col-sm-6">
                                <div className="games-single-item img-contain-isotope">
                                    <div className="games-thumb">
                                        <div className="games-thumb-image">
                                            <img src={game.imagen[0].url} alt="game" />
                                        </div>
                                        <div className="game-overlay">
                                            <Link to={`/game/${game._id}`} className="popup-youtube">
                                                <i className="fa-solid fa-play"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="games-desc">
                                        <h3><Link to={`/games/${game._id}`}>{game.nombre}</Link></h3>
                                        <p className="game-meta">{game.categoria}</p>
                                        <p className="game-meta">Release date:<span>{game.fechaCreacion}</span></p>
                                        <div className="game-rating">
                                            <h4>{game.calificacion}</h4>
                                            <div className="stars-outer">
                                                <div
                                                    className="stars-inner"
                                                    style={{ width: `${(game.calificacion / 5) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="game-action">
                                            <div className="game-price">
                                                <h4>$ {game.precio}</h4>
                                                <p className="off">50% OFF</p>
                                            </div>
                                            {/* <div className="game-buy">
                                                <Link to="#" className="fag-btn-outline">Comprar!</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Games