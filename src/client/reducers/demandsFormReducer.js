import { CHANGE_AUTO_MAKERS, CHANGE_AUTO_MODELS } from '../constants/demandsForm.constants';

const initialState = {
    autoMakers: ['audi', 'bmw', 'nissan', 'toyota', 'mazda', 'reno'],
    autoModels: ['1', '2', '3', '4', '5', '6'],
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AUTO_MAKERS:
            return { ...state, autoMakers: action.payload };
        case CHANGE_AUTO_MODELS:
            return { ...state, autoModels: action.payload };
        default:
            return state;
    }
};

export default formReducer;
