import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginSreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);


    const [values, handleInputChange] = useForm({
        email: 'felipe@gmail.com',
        password: '123456',


    });

    const { email, password } = values;


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(startLoginEmailPassword(email, password));

    }

    const handleLoginGoogle = () => {

        dispatch(startGoogleLogin());

    }




    return (
        <>
            <h3 className="auth__title">Login</h3>
            <br />



            <form onSubmit={handleSubmit}>
                <input
                    className="auth__input"
                    autoComplete="off"
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />


                <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
                    Login
                </button>
                <div className="auth__social-networks">
                    <p>Ingresa con tus Redes Sociales</p>
                    <div
                        className="google-btn"
                        onClick={handleLoginGoogle}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/register">
                    Crear Cuenta
                </Link>

            </form>

        </>
    )
}
