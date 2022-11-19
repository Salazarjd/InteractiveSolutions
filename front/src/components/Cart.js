import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from './layout/MetaData'
import { addItemToCart, removeItemFromCart } from '../actions/cartActions'
import { Link, useNavigate } from 'react-router-dom'


export const Cart = () => {

   const navigate=useNavigate()
   const dispatch = useDispatch();
   const { cartItems } = useSelector(state => state.cart)
   const {user} =useSelector(state => state.auth)

   const increaseQty = (id, quantity, inventario) => {
      const newQty = quantity + 1;
      if (newQty > inventario) return;
      dispatch(addItemToCart(id, newQty))
   }

   const decreaseQty = (id, quantity) => {
      const newQty = quantity - 1;
      if (newQty <= 0) return;
      dispatch(addItemToCart(id, newQty))
   }

   const checkOutHandler = () =>{
      if (user){
          navigate("/shipping")
      }
      else{
          navigate("/login")
      }
 }

   const removeCartItemHandler = (id) => {
      dispatch(removeItemFromCart(id))
   }
   return (
      <Fragment>
         <MetaData title="Carrito de Compra"></MetaData>
         <section class="fag-breadcrumb-area" style={{
            backgroundImage: `url(/cartBg.jpg)`
         }}>
            <div class="container">
               <div class="row">
                  <div class="col-12">
                     <div class="breadcromb-box">
                        <h3 >Carrito de Compra</h3>
                        <ul>
                           <li><i class="fa-solid fa-house"></i></li>
                           <li><Link to="/home">Inicio</Link></li>
                           <li><i class="fa-solid fa-angle-right"></i></li>
                           <li>Carrito de Compra</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section class="fag-cart-page-area section_100">
            <div class="container">
               <div class="row">
                  <div class="col-lg-8">
                     <div class="cart-table-left">
                        <h3 style={{ color: '#ff7a21' }}>Carrito de Compra</h3>
                        <h4>Total items: {cartItems.length}</h4>
                        <div class="table-responsive cart_box">
                           <table class="table">
                              <thead>
                                 <tr>
                                    <th>Juego</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th>Eliminar</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {cartItems && cartItems.map(item => (
                                    <tr class="shop-cart-item" key={item.nombre}>
                                       <td class="fag-cart-preview">
                                          <Link to={`/game/${item.product}`}>
                                             <img src={item.imagen} alt={item.nombre} />
                                          </Link>
                                       </td>
                                       <td class="fag-cart-product">
                                          <Link to={`/game/${item.product}`}>
                                             <p>{item.nombre}</p>
                                          </Link>
                                       </td>
                                       <td class="fag-cart-price">
                                          <p>${item.precio}</p>
                                       </td>
                                       <td class="fag-cart-quantity">
                                          <div class="quantity">
                                             
                                             <div className="num-block skin-2">
                                                <div className="num-in">
                                                   <span className="minus" onClick={() => decreaseQty(item.product, item.quantity)}></span>
                                                   <input
                                                      type="number"
                                                      className="count"
                                                      value={item.quantity}
                                                      readOnly
                                                      style={{ padding: 0 }}
                                                   />
                                                   <span className="plus" onClick={() => increaseQty(item.product, item.quantity, item.inventario)}></span>
                                                </div>
                                             </div>
                                          </div>
                                       </td>
                                       <td class="fag-cart-total">
                                          <p>${(item.precio) * (item.quantity)}</p>
                                       </td>
                                       <td class="fag-cart-close">
                                          <Link><i class="fa-solid fa-xmark" onClick={() => removeCartItemHandler(item.product)} style={{color: 'white'}}></i></Link>
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                        <div class="cart-clear">
                           <Link to="#">Limpiar Carrito</Link>
                           <Link to="#">Actualizar</Link>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4">
                     <div class="order-summury-box">
                        <h3>Resumen del Pedido</h3>
                        <div class="summury-inn">
                           <table>
                              <tbody>
                                 <tr>
                                    <td>Total Unidades: </td>
                                    <td>{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)}</td>
                                 </tr>
                                 <tr>
                                    <td>Envio: </td>
                                    <td>Codigo enviado al E-mail</td>
                                 </tr>
                                 <tr>
                                    <td>Total</td>
                                    <td>${cartItems.reduce((acc, item) => acc + (item.quantity * item.precio), 0).toFixed(2)}</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="checkout-action">
                     <button id="checkout_btn" className="btn btn-primary btn-block" onClick={checkOutHandler}>PROCEDER CON EL PAGO!</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </Fragment>
   )
}
export default Cart
