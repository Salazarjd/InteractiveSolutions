import React, { Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom';
import { logout } from "../../actions/userActions"

const Header = () => {
  const { cartItems } = useSelector(state => state.cart)

  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth)

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("LogOut exitoso")
  }
  return (
    <Fragment>
      <nav className="fag-header navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="../imagenes/logo_prueba.png" alt="site logo" id="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="menu-toggle"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="header_menu  mr-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Inicio
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="localhost:3000"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Novedades
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="news.html">Novedades</a>
                  </li>
                  <li>
                    <a href="news-single.html">News Single</a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="localhost:3000"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tienda
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/games">Productos</Link>
                  </li>
                  <li>
                    <a href="product-single.html">Product Single</a>
                  </li>
                  <li>
                    <Link to="/cart">Carrito</Link>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contactanos
                </a>
              </li>
            </ul>
            <div className="header-right  my-2 my-lg-0">
              <div className="header-search">
                <a href="localhost:3000" id="search-trigger">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>

              <div className="search-block">
                <a href="localhost:3000" className="search-toggle">
                  <i className="bi bi-x-circle"></i>
                </a>
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Que estas buscando?"
                  />
                  <span className="bi bi-search"></span>
                </form>
              </div>

              <div className="header-cart">
                <Link to="/cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                  {cartItems.length}
                </Link>
              </div>
              {user ? (
                <div className="header-auth  nav-item dropdown">
                  <Link
                    className="lang-btn nav-link dropdown-toggle"
                    to="/"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <figure className="avatar avatar-nav">
                      <img
                        src={user.avatar && user.avatar.url}
                        alt={user && user.nombre}
                        className='rounded-circle'></img>
                    </figure>
                    <span>{user && user.nombre}</span>
                  </Link>
                  <ul className="user_menu dropdown-menu">
                    <li>
                      {user && user.role === 'admin' && (
                        <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>)}
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">Pedidos</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/yo">Mi Cuenta</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar sesion</Link>
                    </li>
                  </ul>
                </div>
              ) : !loading && <Link to='/login' className='btn ml-4' id='login_btn'>login</Link>}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
