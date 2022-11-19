import React, { Fragment, useEffect } from 'react'
import MetaData from "../layout/MetaData"
import { MDBDataTable } from "mdbreact"
import { useAlert } from "react-alert"
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, myOrders } from '../../actions/orderActions'
import { Link } from "react-router-dom"
import Titulo from '../admin/Titulo'
import Sidebar from '../admin/Sidebar'



export const ListOrder = () => {
    const { loading, error, orders } = useSelector(state => state.myOrders)
    const alert = useAlert();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(myOrders())

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error])

    const setOrders = () => {
        const data = {
            columns: [
                {
                    label: "Fecha",
                    field: "fecha",
                    sort: "asc"
                },
                {
                    label: "Id del Pedido",
                    field: "id",
                    sort: "asc"
                },
                {
                    label: "Cantidad de Items",
                    field: "cantidadItems",
                    sort: "asc"
                },
                {
                    label: "Costo",
                    field: "costo",
                    sort: "asc"
                },
                {
                    label: "Estado",
                    field: "estado",
                    sort: "asc"
                },
                {
                    label: "Acciones",
                    field: "acciones",
                    sort: "asc"
                },
            ],
            rows: []
        }


        orders.forEach(order => {
            var fecha = new Date(order.fechaCreacion).toLocaleDateString()
            data.rows.push({
                fecha: fecha,
                id: order._id,
                cantidadItems: order.items.length,
                costo: `$${order.precioTotal}`,
                estado: order.estado && String(order.estado).includes("Entregado")
                    ? <p style={{ color: "green" }}>{order.estado}</p>
                    : <p style={{ color: "red" }}>{order.estado}</p>,
                acciones:
                    <Link to={`/order/${order._id}`} className="btn btn-primary">
                        <i className='fa fa-eye'></i></Link>
            })
        })
        return data;
    }

    return (
        <Fragment>
            <MetaData title={'Lista de Juegos'} />
            <Titulo />
            <div className="row" style={{ color: '#ff7a21' }}>
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">Juegos Registrados</h1>


                        {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                            <MDBDataTable
                                style={{ color: 'white' }}
                                data={setOrders()}
                                className="px-3"
                                bordered
                                // striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>
        </Fragment>
    )
}