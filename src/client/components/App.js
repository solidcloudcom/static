import React, { Component } from 'react';
import propTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import UserBar from './UserBar';

import './App.css';

injectTapEventPlugin();

class App extends Component {
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return (
            <main>
                <AppBar
                    className="app-bar"
                    title="TARARARAM"
                    iconElementRight={ <UserBar /> }
                />
                { this.props.children }
            </main>
        );
    }
}

App.childContextTypes = {
    muiTheme: propTypes.object.isRequired,
};

App.propTypes = {
    children: propTypes.object,
};

export default App;
