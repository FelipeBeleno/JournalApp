import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginSreen } from '../components/auth/LoginSreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth_box-container">
                <Switch>
                    <Route exact path="/auth/login" component={LoginSreen} />
                    <Route exact path="/auth/register" component={RegisterScreen} />
                    <Redirect to="/auth/register" />
                </Switch>
            </div>
        </div>
    )
}
