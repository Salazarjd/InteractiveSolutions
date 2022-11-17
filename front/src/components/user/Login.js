import React, { useEffect, useState } from 'react'
import MetaData from '../layout/MetaData';
import { Link, useNavigate } from 'react-router-dom';
import { clearErrors, login } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }


    return (
        <>
            {loading ? <i className='fa fa-refresh fa-spin fa-3x fa-fw'></i> : (
                <>
                    <MetaData title={'Inicie Sesión'} />
                    <div class="page-404 section--full-bg" style={{ backgroundImage: `url(/loginBg.jpg)` }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="page-404__wrap">
                                        <div class="login-wrapper">
                                            <img class="login_user" src="/login-avatar.png" alt="login user" />
                                            <h3>Iniciar Sesion</h3>
                                            <form onSubmit={submitHandler}>
                                                <div class="form-row">
                                                    <input type='email'
                                                        id='email_field'
                                                        className='form-control'
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div class="form-row">
                                                    <input type='password'
                                                        id='password_field'
                                                        className='form-control'
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div class="form-row"></div>
                                                <div class="form-row">
                                                    <button class="fag-btn" type="submit">Ingresar!</button>
                                                </div>
                                            </form>
                                            <div class="socials-wrapper">
                                                <p>No tienes cuenta? - Registrarse</p>
                                                <ul>
                                                    <li><Link to="#" class="facebook"><i class="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link to="#" class="twitter"><i class="fab fa-twitter"></i></Link></li>
                                                    <li><Link to="#" class="twitch"><i class="fab fa-twitch"></i></Link></li>
                                                    <li><Link to="#" class="youtube"><i class="fab fa-youtube"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>

    )
}
