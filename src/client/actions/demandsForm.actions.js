import {
    CHANGE_AUTO_MAKERS,
    CHANGE_AUTO_MODELS,
    REQUEST_AUTO_MAKERS,
    REQUEST_AUTO_MODELS,
} from '../constants/demandsForm.constants';

export const changeAutoMakers = maker => ({
    type: CHANGE_AUTO_MAKERS,
    payload: maker,
});

export const changeAutoModels = models => ({
    type: CHANGE_AUTO_MODELS,
    payload: models,
});

export const requestAutoModels = () => ({
    type: REQUEST_AUTO_MODELS,
});

export const requestAutoMakers = () => ({
    type: REQUEST_AUTO_MAKERS,
});
