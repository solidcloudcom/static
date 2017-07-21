import { takeEvery, put, call, throttle } from 'redux-saga/effects';

import { REQUEST_AUTO_MAKERS, REQUEST_AUTO_MODELS } from '../constants/demandsForm';
import { changeAutoMakers, changeAutoModels } from '../actions/demandsForm';

function* getAutoMakersExec(action) {
    try {
        const makers = yield Promise.resolve(['a', 'b', 'c']);
        yield put(changeAutoMakers(makers));
    } catch (e) {
        console.error(e);
        yield put({ type: 'CHANGE_AUTO_MAKERS_FAILED', payload: e });
    }
}

function* getAutoModelsExec(action) {
    try {
        const models = yield Promise.resolve(['a', 'b', 'c']);
        yield put(changeAutoModels(models));
    } catch (e) {
        console.error(e);
        yield put({ type: 'CHANGE_AUTO_MODELS_FAILED', payload: e });
    }
}

export function* getAutoMakersSaga() {
    yield takeEvery(REQUEST_AUTO_MAKERS, getAutoMakersExec);
}

export function* getAutoModelsSaga() {
    yield throttle(200, REQUEST_AUTO_MODELS, getAutoModelsExec);
}
