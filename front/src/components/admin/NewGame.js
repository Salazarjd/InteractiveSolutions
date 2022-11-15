import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import Titulo from './Titulo'
import MetaData from '../layout/MetaData'

export const NewGame = () => {
    return (
        <Fragment>
            <MetaData title={'Lista de Juegos'} />
            <Titulo />
            <div className="row" style={{ color: '#ff7a21' }}>
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10" >
                    <h1 className="my-4">Ingresar Juego</h1>
                    <div class="page-404__wrap" style={{ alignItems: 'start', padding: '0' }}>
                        <div class="login-wrapper" style={{ width: '80%', paddingTop: '0' }}>
                            <form>
                                <div class="form-row">
                                    <label htmlFor="name_field" style={{color: 'rgb(255, 122, 33)'}}>Nombre del Juego</label>
                                    <input type="text" placeholder="Digita el nombre del Juego" />
                                </div>
                                <div class="form-row">
                                    <label htmlFor="price_field" style={{color: 'rgb(255, 122, 33)'}}>Precio</label>
                                    <input type="text" placeholder="Digita el precio $" />
                                </div>
                                <div class="form-row">
                                    <label htmlFor="description_field" style={{color: 'rgb(255, 122, 33)'}}>Descripcion</label>
                                    <textarea className="form-control" id="description_field" rows="8" placeholder='Dejanos aca la descipcion del juego' ></textarea>
                                </div>
                                <div class="form-row">
                                    <label htmlFor="category_field" style={{color: 'rgb(255, 122, 33)'}}>Categoria</label>
                                    <select type="text" className="form-control" placeholder="Digita la categoria">
                                        <option type="text" className='opcion'>Deportes</option>
                                        <option type="text" className='opcion'>Accion</option>
                                        <option type="text" className='opcion'>Simulacion</option>
                                    </select>
                                </div>
                                <div class="form-row">
                                    <label htmlFor="stock_field" style={{color: 'rgb(255, 122, 33)'}}>Inventario</label>
                                    <input type="text" placeholder="Digita las unidades disponibles" />
                                </div>
                                <div class="form-row">
                                    <label htmlFor="seller_field" style={{color: 'rgb(255, 122, 33)'}}>Vendedor</label>
                                    <input type="text" placeholder="Digita el vendedor" />
                                </div>
                                <div class="form-row">
                                <label htmlFor="imagenes" style={{color: 'rgb(255, 122, 33)'}}>Imagenes</label>
                                <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='form-control'
                                            id='customFile'
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Seleccione Imagen
                                     </label>
                                    </div>
                                </div>


                                <div class="form-row" style={{ justifyContent: 'center' }}>
                                    <button class="fag-btn" type="submit" style={{ width: '50%' }}>Registrar Juego</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default NewGame