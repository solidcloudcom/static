import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import { requestAutoMakers, requestAutoModels } from '../actions/demandsForm.actions';

import FormSelectField from './FormSelectField';

import './Form.css';

class Form extends Component {

    componentDidMount() {
        this.props.requestAutoMakers();
    }

    render() {
        return (
            <Paper className='demands-form' zDepth={3}>
                <FormSelectField
                    label='Auto Makers'
                    data={ this.props.autoMakers }
                    handler={ console.log } />
                <FormSelectField
                    label='Auto Models'
                    data={ this.props.autoModels }
                    handler={ console.log } />
            </Paper>
        );
    }
}

Form.propTypes = {
    requestAutoMakers: propTypes.func,
    autoMakers: propTypes.array,
    autoModels: propTypes.array,
};

export default connect(
    state => ({
        autoMakers: state.demandsForm.autoMakers,
        autoModels: state.demandsForm.autoModels,
    }),
    {
        requestAutoMakers,
    }
)(Form);
