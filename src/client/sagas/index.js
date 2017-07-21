import { fork } from 'redux-saga/effects';

import { getAutoMakersSaga, getAutoModelsSaga } from './demandsForm';

export default function* rootSaga() {
    yield [
        fork(getAutoMakersSaga),
        fork(getAutoModelsSaga),
    ];
}
