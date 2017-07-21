import { combineReducers } from 'redux';

import demandsFormReducer from './demandsFormReducer';

const reducer = combineReducers({
    demandsForm: demandsFormReducer,
});

export default reducer;
