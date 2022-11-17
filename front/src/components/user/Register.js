import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../layout/MetaData'
import { register, clearErrors } from "../../actions/userActions"
import { Link, useNavigate } from "react-router-dom"

export const Register = () => {
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    const { nombre, email, password } = user;
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg")
    const alert = useAlert();
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error, alert])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("nombre", nombre);
        formData.set("email", email);
        formData.set("password", password);
        formData.set("avatar", avatar)

        dispatch(register(formData))
    }

    const onChange = e => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
        else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

    return (
        <Fragment>
            <MetaData title={'Registrar Usuario'} />
            <div class="page-404 section--full-bg" style={{ backgroundImage: `url(/loginBg.jpg)` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="page-404__wrap">
                                <div class="login-wrapper">
                                    <h3>Registrarse</h3>
                                    <form onSubmit={submitHandler} encType='multipart/form-data'>
                                        <div class="form-row">
                                            <input
                                                placeholder='Ingresa tu nombre'
                                                type="name"
                                                id="name_field"
                                                name='nombre'
                                                value={nombre}
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div class="form-row">
                                            <input
                                                placeholder='Ingresa tu correo'
                                                type="email"
                                                id="email_field"
                                                className="form-control"
                                                name='email'
                                                value={email}
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div class="form-row">
                                            <input
                                                placeholder='Ingresa tu contraseña'
                                                type="password"
                                                id="password_field"
                                                className="form-control"
                                                name='password'
                                                value={password}
                                                onChange={onChange}
                                            />
                                        </div>

                                        <div class="form-row">
                                            <label htmlFor='avatar_upload'>Avatar</label>
                                            <div className='d-flex align-items-center'>
                                                <div>
                                                    <figure className='avatar mr-3 item-rtl'>
                                                        <img
                                                            src={avatarPreview}
                                                            className="rounded-circle"
                                                            alt="Vistar Previa del Avatar"></img>
                                                    </figure>
                                                </div>
                                                <div className='custom-file'>
                                                    <input
                                                        type='file'
                                                        name='avatar'
                                                        className='custom-file-input'
                                                        id='customFile'
                                                        accept="images/*"
                                                        onChange={onChange}
                                                    />
                                                    <label className='custom-file-label' htmlFor='customFile'>
                                                        Escoger Avatar
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <button class="fag-btn" type="submit">Crear Cuenta!</button>
                                        </div>
                                    </form>
                                    <div class="socials-wrapper">
                                        <p>Ya tienes Cuenta? - Iniciar Sesion</p>
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
        </Fragment>
    )
}