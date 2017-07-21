import React from 'react';
import propTypes from 'prop-types';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const FormSelectField = ({ label, data, handler }) => {
    return (
        <SelectField
            floatingLabelText={ label }
            value={1}
            onChange={ handler }>
            {
                data.map((cur, i) => {
                    return (
                        <MenuItem
                            value={ i + 1 }
                            primaryText={ cur }
                            key={ cur + i }/>
                    );
                })
            }
        </SelectField>
    );
};

FormSelectField.propTypes = {
    data: propTypes.array,
    label: propTypes.string,
    handler: propTypes.func,
};

export default FormSelectField;
