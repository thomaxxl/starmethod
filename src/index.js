import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css?v=1.2.0";

var history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            {
                indexRoutes.map((prop, key) => {
                    if(prop.path === "/") return <Route exact path={prop.path} key={key} component={prop.component} />
                    return <Route path={prop.path} key={key} component={prop.component} />
                })
            }
        </Switch>
    </Router>
    ,document.getElementById('root'));
registerServiceWorker();
