import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Proptypes from 'prop-types';

export const PublicRoute = (
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
                        ? <Redirect to='/' />
                        : <Component {...props} />
                )

            }
            }





        />


    )
}

PublicRoute.propTypes = {
    isLoggedIn: Proptypes.bool.isRequired,
    component: Proptypes.func.isRequired,

}