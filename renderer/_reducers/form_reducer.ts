import { OWNER_STATE, PICTURE_STATE, WRITE_STATE } from '../_actions';

const initialState = {
    ID: '',
    LIST: [],
    CONTENT: '',
};

export function reviewForm(state = initialState, action: any) {
    switch (action.type) {
        case OWNER_STATE:
            return { ...state, ID: action.ID };
        case PICTURE_STATE:
            return { ...state, LIST: action.LIST };
        case WRITE_STATE:
            return { ...state, CONTENT: action.CONTENT };
        default:
            return state;
    }
}
