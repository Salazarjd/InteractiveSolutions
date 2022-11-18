import React, { Fragment, useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Titulo from './Titulo'
import MetaData from '../layout/MetaData'
import { useNavigate } from 'react-router-dom'
import { newgame, clearErrors } from '../../actions/productActions'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'




export const NewGame = () => {

    const navigate= useNavigate()
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [inventario, setInventario] = useState(0);
    const [vendedor, setVendedor] = useState('');
    const [imagen, setImagen] = useState([]);
    const [imagenPreview, setImagenPreview] = useState([])

    const categorias = [
        "Deportes",
        "Accion",
        "Simulacion"
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector(state => state.newgame);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            //navigate('/dashboard');
            alert.success('Product created successfully');
            dispatch({ type: NEW_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, success])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('nombre', nombre);
        formData.set('precio', precio);
        formData.set('descripcion', descripcion);
        formData.set('categoria', categoria);
        formData.set('inventario', inventario);
        formData.set('vendedor', vendedor);

        imagen.forEach(img => {
            formData.append('imagen', img)
        })

        dispatch(newgame(formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagenPreview([]);
        setImagen([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagenPreview(oldArray => [...oldArray, reader.result])
                    setImagen(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }


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
                        <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <div class="form-row">
                                    <label htmlFor="name_field" style={{color: 'rgb(255, 122, 33)'}}>Nombre del Juego</label>
                                    <input type="text"
                                    id="name_field" 
                                    placeholder="Digita el nombre del Juego" 
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                                <div class="form-row">
                                    <label htmlFor="price_field" style={{color: 'rgb(255, 122, 33)'}}>Precio</label>
                                    <input type="text"
                                     id="price_field"
                                     placeholder="Digita el precio $" 
                                     value={precio}
                                     onChange={(e) => setPrecio(e.target.value)}
                                     />
                                </div>
                                <div class="form-row">
                                    <label htmlFor="description_field" style={{color: 'rgb(255, 122, 33)'}}>Descripcion</label>
                                    <textarea className="form-control" 
                                    id="description_field" 
                                    rows="8" 
                                    placeholder='Dejanos aca la descipcion del juego'
                                    value={descripcion} 
                                    onChange={(e) => setDescripcion(e.target.value)}>                                    >
                                    </textarea>
                                </div>
                                <div class="form-row">
                                    <label htmlFor="category_field" style={{color: 'rgb(255, 122, 33)'}}>Categoria</label>
                                    <select type="text" className="form-control" placeholder="Digita la categoria"
                                     id="category_field"
                                     value={categoria} onChange={(e) => setCategoria(e.target.value)}                                                                       >
                                        {categorias.map(categoria => (
                                            <option key={categoria} value={categoria} >{categoria}</option>
                                        ))}

                                    </select>
                                </div>
                                <div class="form-row">
                                    <label htmlFor="stock_field" style={{color: 'rgb(255, 122, 33)'}}>Inventario</label>
                                    <input type="number" 
                                    placeholder="Digita las unidades disponibles" 
                                    id="stock_field"
                                    value={inventario}
                                    onChange={(e) => setInventario(e.target.value)}
                                    />
                                </div>
                                <div class="form-row">
                                    <label htmlFor="seller_field" style={{color: 'rgb(255, 122, 33)'}}>Vendedor</label>
                                    <input 
                                    type="text" 
                                    placeholder="Digita el vendedor" 
                                    id="seller_field"
                                    value={vendedor}
                                    onChange={(e) => setVendedor(e.target.value)}
                                    />
                                </div>
                                <div class="form-row">
                                <label htmlFor="imagenes" style={{color: 'rgb(255, 122, 33)'}}>Imagenes</label>
                                <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Seleccione Imagenes
                                     </label>
                                    </div>

                                    {imagenPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}
                                    
                                </div>


                                <div class="form-row" style={{ justifyContent: 'center' }}>
                                    <button class="fag-btn" 
                                    type="submit" style={{ width: '50%' }}>                                                                        
                                     Registrar Juego</button>
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