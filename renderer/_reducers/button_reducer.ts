import { HAS_BOOKMARK_LIST, HAS_LIKE_LIST } from '../_actions';

export function bookmark(state = { ON: false }, action: any) {
    switch (action.type) {
        case HAS_BOOKMARK_LIST:
            return { ...state, ON: action.ON };
        default:
            return state;
    }
}

export function like(state = { ON: false }, action: any) {
    switch (action.type) {
        case HAS_LIKE_LIST:
            return { ...state, ON: action.ON };
        default:
            return state;
    }
}
