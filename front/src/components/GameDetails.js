import React, { Fragment, useEffect, useState } from "react";
import MetaData from "./layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetails, clearErrors } from "../actions/productActions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { addItemToCart } from '../actions/cartActions';

export const GameDetails = () => {
  const { game, error } = useSelector((state) => state.gameDetails);
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getGameDetails(id));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, id]);

  const increaseQty = () => {
    const contador = document.querySelector(".count");

    if (contador.valueAsNumber >= game.inventario) return;

    const qty = contador.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreaseQty = () => {
    const contador = document.querySelector(".count");

    if (contador.valueAsNumber <= 1) return;

    const qty = contador.valueAsNumber - 1;
    setQuantity(qty);
  };
  const addToCart = () => {
    dispatch(addItemToCart(id, quantity));
    alert.success('Producto agregado al carro')
  };

  return (
    <Fragment>
      <MetaData title={game.nombre}></MetaData>
      <section
        className="fag-breadcrumb-area"
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(../imagenes/games/fifaBg.jpg)`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcromb-box">
                <h3>Detalles del Juego</h3>
                <ul>
                  <li>
                    <i className="fa-solid fa-house"></i>
                  </li>
                  <li>
                    <Link to={"/Home"}>Inicio</Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                  </li>
                  <li>{game.nombre}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fag-product-details section_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-details-image">
                {/* <img src={game.imagen[0].url} alt="game" /> */}
                {game.imagen &&
                  game.imagen.map((img) => (
                    <img key={img.public_id} src={img.url} alt="img"></img>
                  ))}
                {/* <h1>{game.nombre}</h1> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-details-text">
                <h1>{game.nombre}</h1>
                <p>{game.categoria}</p>
                <div className="tour-rating">
                  <div className="stars-outer">
                    <div
                      className="stars-inner"
                      style={{ width: `${(game.calificacion / 5) * 100}%` }}
                    ></div>
                  </div>
                  <p>{game.numCalificaciones} calificaciones</p>
                </div>
                <div className="single-pro-page-para">
                  <p>{game.descripcion}</p>
                </div>
                <div className="single-shop-price">
                  <p>
                    Precio: <span>${game.precio}</span>
                  </p>
                  <p>
                    Disponible:<span>{game.inventario >0 ? "Disponible": "Agotado :("}</span>
                  </p>
                </div>
                <div className="quantity">
                  <p>Cantidad: </p>
                  <div className="num-block skin-2">
                    <div className="num-in">
                      <span className="minus" onClick={decreaseQty}></span>
                      <input
                        type="number"
                        className="count"
                        value={quantity}
                        readOnly
                        style={{padding: 0}}
                      />
                      <span className="plus" onClick={increaseQty}></span>
                    </div>
                  </div>
                </div>
                <div className="single-shop-page-btn">
                  <Link className="fag-btn" disabled={game.inventario === 0} onClick={addToCart}>
                    <i className="fa-solid fa-cart-shopping" ></i> Añadir al
                    Carrito <span></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-pinterest"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-panel-list">
                <div className="product-tab">
                  <ul
                    className="nav nav-pills product-tab-switch"
                    id="pills-tab"
                    role="tablist"
                  >
                    {/* <li className="nav-item">
                      <a
                        className="nav-link active show"
                        id="description-tab"
                        data-bs-toggle="pill"
                        href="#description"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        description
                      </a>
                    </li> */}
                    <li className="nav-item active show">
                      <a
                        className="nav-link"
                        id="pro-reviews-tab"
                        data-bs-toggle="pill"
                        href="#pro-reviews"
                        role="tab"
                        aria-controls="pro-reviews"
                        aria-selected="false"
                      >
                        Comentarios
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  {/* <div
                    className="tab-pane fade"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    <div className="tab-gamess-details">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="tab-body">
                            <h3>Detalles del Juego</h3>
                            <p>{game.descripcion}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    className="tab-pane fade active show"
                    id="pro-reviews"
                    role="tabpanel"
                    aria-labelledby="pro-reviews-tab"
                  >
                    <div className="tab-gamess-details">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="tab-body">
                            <div className="fag-comment-list">
                              <div className="single-comment-item">
                                <div className="single-comment-box">
                                  <div className="main-comment">
                                    <div className="author-image">
                                      <img
                                        src="/chat.png"
                                        alt="author"
                                      />
                                    </div>
                                    <div className="comment-text">
                                      <div className="comment-info">
                                        <h4>david kamal &nbsp;</h4>
                                        <div className="stars-outer">
                                          <div
                                            className="stars-inner"
                                            style={{ width: `${(game.calificacion / 5) * 100}%` }}
                                          ></div>
                                        </div>
                                        <p>&nbsp;4 minutes ago</p>
                                      </div>
                                      <div className="comment-text-inner">
                                        <p>
                                          El juego es increible, tiene buenos graficos aunque unos cuantos bugs, de todas formas no quita el hecho de ser un juegazo. No puedo dejar de jugarlo !!!
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="single-comment-box comment_reply">
                                  <div className="main-comment">
                                    <div className="author-image">
                                      <img
                                        src="/chat.png"
                                        alt="author"
                                      />
                                    </div>
                                    <div className="comment-text">
                                      <div className="comment-info">
                                        <h4>Jerix Ablin &nbsp;</h4>
                                        <div className="stars-outer">
                                          <div
                                            className="stars-inner"
                                            style={{ width: `${(game.calificacion / 5) * 100}%` }}
                                          ></div>
                                        </div>
                                        <p>&nbsp;12 minutes ago</p>
                                      </div>
                                      <div className="comment-text-inner">
                                        <p>
                                          Uno de los mejores juegos que he probado en toda mi vida, ultra recomendado :P
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="fag-leave-comment">
                              <form>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="comment-field">
                                      <textarea
                                        className="comment"
                                        placeholder="Deja aca tu comentario :)"
                                        name="comment"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="comment-field">
                                      <button type="submit" className="fag-btn">
                                        Comentar <span></span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default GameDetails;