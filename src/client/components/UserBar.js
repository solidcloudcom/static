import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';

import { requestUser } from '../actions/user.actions';

import './UserBar.css';

class UserBar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestUser();
    }

    render() {
        return (
            <div className="user-bar">
                <Avatar src={ this.props.user.avatar } />
                <span>{ this.props.user.name }</span>
            </div>
        );
    }
}

UserBar.propTypes = {
    user: propTypes.object,
    requestUser: propTypes.func,
};

export default connect(
    state => ({ user: state.user }),
    { requestUser }
)(UserBar);
