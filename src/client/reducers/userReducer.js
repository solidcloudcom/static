import { USER_REQUEST_COMPLETE } from '../constants/user.constants';

const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REQUEST_COMPLETE:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
