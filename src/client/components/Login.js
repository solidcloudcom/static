import React, { Component } from 'react';
import propTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { login, password } = this.state;
        console.info(login, password);
    }

    handleLoginChange({ target: input }) {
        this.setState({ login: input.value });
    }

    handlePasswordChange({ target: input }) {
        this.setState({ password: input.value });
    }

    render() {
        return (
            <section className="login-form-container">
                <form onSubmit={ this.handleSubmit }>
                    <Paper className="login-form" zDepth={3}>
                        <TextField
                            floatingLabelText="Login"
                            hintText="Enter your login"
                            onChange={ this.handleLoginChange }
                        />
                        <TextField
                            floatingLabelText="Password"
                            hintText="Enter your password"
                            type="password"
                            onChange={ this.handlePasswordChange }
                        />
                        <RaisedButton
                            type="submit"
                            label='submit'
                        />
                        <a href="/auth/vkontakte">Sign up with VK</a>
                        <a href="/auth/facebook">Sign up with FB</a>
                    </Paper>
                </form>
            </section>
        );
    }
}

Login.propTypes = {};

export default Login;
