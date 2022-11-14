import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="table-responsive cart_box" >
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li className='cart_box'>
                        <Link to="/Dashboard"><i className="fa-solid fa-gauge-max"></i> Dashboard</Link>
                    </li>

                    <li className='cart_box'>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa-solid fa-gamepad-modern"></i> Juegos</a>
                        <ul className="collapse list-unstyled" id="productSubmenu" style={{marginLeft: '20px'}}>
                            <li>
                                <Link to="/ProductList"><i className="fa-solid fa-clipboard"></i> Todos</Link>
                            </li>

                            <li>
                                <Link to="/nuevoJuego"><i className="fa-solid fa-plus"></i> Crear</Link>
                            </li>
                        </ul>
                    </li>

                    <li className='cart_box'>
                        <Link to="/admin/orders"><i className="fa-solid fa-basket-shopping-simple"></i> Pedidos</Link>
                    </li>

                    <li className='cart_box'>
                        <Link to="/admin/users"><i className="fa-regular fa-users"></i> Usuarios</Link>
                    </li>

                    <li className='cart_box'>
                        <Link to="/admin/reviews"><i className="fa-solid fa-star-sharp"></i> Opiniones</Link>
                    </li>

                </ul>
            </nav>
        </div>
  )
}
export default Sidebar