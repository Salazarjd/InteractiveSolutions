import React, { Fragment, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import Titulo from './Titulo'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmingames } from '../../actions/productActions'
import {Link } from "react-router-dom"

export const ProductList = () => {
    const { error , games } = useSelector(state => state.games)
    const alert = useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getAdmingames());
    }, [dispatch])

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'Nombre',
                    field: 'nombre',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'precio',
                    sort: 'asc'
                },
                {
                    label: 'Inventario',
                    field: 'inventario',
                    sort: 'asc'
                },
                {
                    label: 'Vendedor',
                    field: 'vendedor',
                    sort: 'asc'
                },
                {
                    label: 'Acciones',
                    field: 'actions',
                },
            ],
            rows: []
        }

        games.forEach(product => {
            data.rows.push({
                nombre: product.nombre,
                precio: `$${product.precio}`,
                inventario: product.inventario,
                vendedor: product.vendedor,
                actions: <Fragment>
                    <Link to={`/game/${product._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa-solid fa-eye"></i>
                    </Link><Link to="/" className="btn btn-warning py-1 px-2">
                    <i class="fa-solid fa-pencil"></i>
                    </Link>

                    <Link to="/" className="btn btn-danger py-1 px-2">
                        <i className="fa-solid fa-trash"></i>
                    </Link>
                    

                </Fragment>
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

                        
                            <MDBDataTable
                                style={{ color: 'white' }}
                                data={setProducts()}
                                className="px-3"
                                bordered
                                // striped
                                hover
                                
                            />

                    </Fragment>
                </div>
            </div>
    </Fragment>
  )
}
export default ProductList