import { OWNER_STATE, PICTURE_STATE, TXT_REVIEW_STATE, FILE_STATE } from '../_actions';

const initialState = {
    ID: '',
    INFO: { ObjectURL: '', Type: '' },
    CONTENT: '',
    NAME: '',
};

export function reviewForm(state = initialState, action: any) {
    switch (action.type) {
        case OWNER_STATE:
            return { ...state, ID: action.ID };
        case PICTURE_STATE:
            return { ...state, INFO: action.INFO };
        case TXT_REVIEW_STATE:
            return { ...state, CONTENT: action.CONTENT };
        case FILE_STATE:
            return { ...state, NAME: action.NAME };
        default:
            return state;
    }
}
