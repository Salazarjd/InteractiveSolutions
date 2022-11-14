import React, { Fragment } from 'react'

export const Login = () => {
  return (
    <Fragment>
        <div class="page-404 section--full-bg" style={{backgroundImage: `url(/loginBg.jpg)`}}>
         <div class="container">
            <div class="row">
               <div class="col-12">
                  <div class="page-404__wrap">
                     <div class="login-wrapper">
                        <img class="login_user" src="/login-avatar.png" alt="login user" />
                        <h3>Iniciar Sesion</h3>
                        <form>
                           <div class="form-row">
                              <input type="text" placeholder="Digita tu E-mail" />
                           </div>
                           <div class="form-row">
                              <input type="password" placeholder="Digita tu Contraseña" />
                           </div>
                           <div class="form-row"></div>
                           <div class="form-row">
                              <button class="fag-btn" type="submit">Ingresar!</button>
                           </div>
                        </form>
                        <div class="socials-wrapper">
                           <p>No tienes cuenta? - Registrarse</p>
                           <ul>
                              <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                              <li><a href="#" class="twitter"><i class="fab fa-twitter"></i></a></li>
                              <li><a href="#" class="twitch"><i class="fab fa-twitch"></i></a></li>
                              <li><a href="#" class="youtube"><i class="fab fa-youtube"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </Fragment>
  )
}
export default Login