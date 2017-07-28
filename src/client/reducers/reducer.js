import { combineReducers } from 'redux';

import demandsFormReducer from './demandsFormReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
    demandsForm: demandsFormReducer,
    user: userReducer,
});

export default reducer;
