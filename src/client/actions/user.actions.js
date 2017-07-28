import { REQUEST_USER, USER_REQUEST_COMPLETE } from '../constants/user.constants';

export const requestUser = () => ({
    type: REQUEST_USER,
});

export const userRequestComplete = user => ({
    type: USER_REQUEST_COMPLETE,
    payload: user,
});
