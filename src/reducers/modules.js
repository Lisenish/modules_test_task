import { LOAD_MODULES_SUCCESS, TOGGLE_MODULE_EXPAND } from '../constants/ActionTypes';

const initialState = [];

const modules = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MODULES_SUCCESS:
            return action.payload.modules.sort((left, right) => left.order - right.order);
        case TOGGLE_MODULE_EXPAND:
            const newState = [...state];
            const targetIndex = newState.findIndex((m) => m.id === action.id);

            let targetModule = newState[targetIndex];
            targetModule.isExpanded = !targetModule.isExpanded;

            newState.splice(targetIndex, 1, targetModule);

            return newState;
        default:
            return state;
    }
}

export default modules;