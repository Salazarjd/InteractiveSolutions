import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getGames } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export const Home = () => {
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
            <section className="fag-games-area section_140">
                <div className="bottom-layer"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="site-heading">
                                <h2 className="heading_animation">
                                    Juegos <span>Recomendados</span>
                                </h2>
                                <p>
                                    Mira nuestras recomendaciones o busca el juego que deseas!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="games-masonary">

                                <div className="clearfix gamesContainer">
                                    {games && games.map(game => (
                                        <div key={game._id} className="games-item console">
                                            <div className="games-single-item img-contain-isotope">
                                                <div className="games-thumb">
                                                    <div className="games-thumb-image">
                                                        <a href="localhost:3000">
                                                            <img src={game.imagen[0].url} alt="games" />
                                                        </a>
                                                    </div>
                                                    <div className="game-overlay">
                                                        <Link
                                                            className="popup-youtube"
                                                            to={`/game/${game._id}`}
                                                        >
                                                            <i className="fa-solid fa-play"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="games-desc">
                                                    <h3>
                                                        <Link to={`/games/${game._id}`}>{game.nombre}</Link>
                                                    </h3>
                                                    <p className="game-meta">{game.categoria}</p>
                                                    <p className="game-meta">
                                                        Release date:<span>{game.fechaCreacion}</span>
                                                    </p>
                                                    <div className="game-rating">
                                                        <h4>{game.calificacion}</h4>
                                                        <div className="stars-outer">
                                                            <div
                                                                className="stars-inner"
                                                                style={{width: `${(game.calificacion/5)*100}%`}}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="game-action">
                                                        <div className="game-price">
                                                            <h4>${game.precio}</h4>
                                                            <p className="off">50% OFF</p>
                                                        </div>

                                                        {/* <div className="game-buy">
                                                            <Link to={""} className="fag-btn-outline">
                                                                Comprar
                                                            </Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="preorder-box text-center">
                                    <Link to={"/games"} className=" fag-btn-outline">
                                        Ver Todos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;