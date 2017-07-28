import { fork } from 'redux-saga/effects';

import { getAutoMakersSaga, getAutoModelsSaga } from './demandsForm.sagas';
import { getUserSaga } from './user.sagas';

export default function* rootSaga() {
    yield [
        fork(getAutoMakersSaga),
        fork(getAutoModelsSaga),
        fork(getUserSaga),
    ];
}
