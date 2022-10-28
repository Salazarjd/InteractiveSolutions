import React, { Fragment } from "react";


const Header = () => {
  return (
    <Fragment>
      <nav className="fag-header navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="../imagenes/logo_prueba.png" alt="site logo" id="logo"/>
          </a>
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
                <a href="index.html" className="nav-link">
                  Inicio
                </a>
              </li>
             
              <li className="nav-item dropdown">
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
              </li>
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
                    <a href="product.html">Productos</a>
                  </li>
                  <li>
                    <a href="product-single.html">Product Single</a>
                  </li>
                  <li>
                    <a href="cart.html">Carrito</a>
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
                <a href="cart.html">
                  <i class="fa-solid fa-cart-shopping"></i>
                  $120.000
                </a>
              </div>

              <div className="header-auth  nav-item dropdown">
                <a
                  className="lang-btn nav-link dropdown-toggle"
                  href="localhost:3000"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="../imagenes/admin.jpg"
                    alt="admin"
                  />
                  Cristhian Riveros
                </a>
                <ul className="user_menu dropdown-menu">
                  <li>
                    <a href="localhost:3000">Perfil</a>
                  </li>
                  <li>
                    <a href="localhost:3000">Foros</a>
                  </li>
                  <li>
                    <a href="localhost:3000">Mensages</a>
                  </li>
                  <li>
                    <a href="localhost:3000">Retos</a>
                  </li>
                  <li>
                    <a href="localhost:3000">Opciones</a>
                  </li>
                  <li>
                    <a href="localhost:3000">Cerrar Sesion</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
