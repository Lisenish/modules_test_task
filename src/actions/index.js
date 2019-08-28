import { getModules } from '../api/modules';
import * as types from '../constants/ActionTypes';

//TODO: add error handling here
export const loadModules = () => (dispatch) => {
    getModules().then((modules) => dispatch(loadModulesSuccess(modules)));
}

const loadModulesSuccess = (modules) => ({
    type: types.LOAD_MODULES_SUCCESS,
    payload: modules
});

export const toggleModuleExpand = (id) => ({
    type: types.TOGGLE_MODULE_EXPAND,
    id: id
});