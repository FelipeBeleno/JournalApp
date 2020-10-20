import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Proptypes from 'prop-types';

export const PrivateRoute = (
    {
        isLoggedIn,
        component: Component,
        ...rest
    }) => {


    return (
        <Route {...rest}
            component={(props) => {
                return (
                    (isLoggedIn)
                        ? <Component {...props} />
                        : <Redirect to='/auth/login' />
                )

            }
            }





        />


    )
}

PrivateRoute.propTypes = {
    isLoggedIn: Proptypes.bool.isRequired,
    component: Proptypes.func.isRequired,

}