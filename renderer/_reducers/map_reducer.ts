import { LOADED, CHANGED_CENTER } from '../_actions';

const initialState = {
    PAINT: true,
    COUNT: 0,
};

export default function map(state = initialState, action: any) {
    switch (action.type) {
        case LOADED:
            return { ...state, PAINT: action.payload };
        case CHANGED_CENTER:
            return { ...state, COUNT: action.COUNT };
        default:
            return state;
    }
}
