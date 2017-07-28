import { takeEvery, put, call } from 'redux-saga/effects';

import { REQUEST_USER } from '../constants/user.constants';
import { userRequestComplete } from '../actions/user.actions';
import { getUser } from '../services/user.services';
// Promise.resolve({ name: 'Nikita', avatarUrl: 'https://avatars2.githubusercontent.com/u/22273972?v=4&s=400' });
function* getUserExec() {
    try {
        const { data: user } = yield call(getUser);
        yield put(userRequestComplete(user));
    } catch (e) {
        yield put({ type: 'USER_REQUEST_COMPLETE_FAILED', payload: e });
    }
}

export function* getUserSaga() {
    yield takeEvery(REQUEST_USER, getUserExec);
}
