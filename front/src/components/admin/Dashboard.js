import React, { Fragment} from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import Titulo from './Titulo'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    
    return (
        <Fragment>
            <MetaData title={'Administracion'} />
            <Titulo />
            <div className="row" style={{ color: '#ff7a21' }}>
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                {/* tabla */}
                <div className="col-12 col-md-10" >
                    <h1 className="my-4">Dashboard</h1>

                    <Fragment>


                        <div className="row pr-4" >
                            <div className="col-xl-12 col-sm-12 mb-3" >
                                <div className="">
                                    <div className="cart_box" >
                                        <div className="text-center card-font-size" >Monto Total<br /> <b style={{ color: 'white' }}>$2.000.000</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pr-4" >
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="cart_box">
                                    <div className="cart_box">
                                        <div className="text-center card-font-size">Juegos<br /> <b style={{ color: 'white' }}>24</b></div>
                                    </div>
                                    <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                                        <span className="float-left">Ver Detalles</span>
                                        <span className="float-right">
                                            <i class="fa-solid fa-angle-right" style={{ color: '#ff7a21' }}></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="cart_box">
                                    <div className="cart_box">
                                        <div className="text-center card-font-size">Pedidos<br /> <b style={{ color: 'white' }}>34</b></div>
                                    </div>
                                    <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                                        <span className="float-left">Ver Detalles</span>
                                        <span className="float-right">
                                            <i class="fa-solid fa-angle-right" style={{ color: '#ff7a21' }}></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="cart_box">
                                    <div className="cart_box">
                                        <div className="text-center card-font-size">Usuarios<br /> <b style={{ color: 'white' }}>12</b></div>
                                    </div>
                                    <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                                        <span className="float-left">Ver Detalles</span>
                                        <span className="float-right">
                                            <i class="fa-solid fa-angle-right" style={{ color: '#ff7a21' }}></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="cart_box">
                                    <div className="cart_box">
                                        <div className="text-center card-font-size">Agotados<br /> <b style={{ color: 'white' }}>20</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>


                </div>
            </div>
        </Fragment>
    )
}
export default Dashboard