import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Form from './components/Form';
import Login from './components/Login';
import store from './store';

import './index.css';

render(
    <Provider store={ store }>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' render={ () => <h1>ROOOOOOT</h1> } />
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/form' component={ Form } />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
