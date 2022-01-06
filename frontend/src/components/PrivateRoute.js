import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {Route} from "react-router";

export function PrivateRoute ({component: Component, authed, initializing, ...rest}) {

    if (initializing) return null;
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
        />
    )
}