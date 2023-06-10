import * as toolkitRaw from '@reduxjs/toolkit';

const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

type AccessTarget = 'post' | 'comment';

const initialState = {
    SUBJECT: '',
    NICKNAME: '',
    TITLE: '',
    CONTENT: '',
    image: {
        FILE_INFO: [],
        RANDOM_NAME: [],
    },
    post: {
        TOTAL: 0,
        CURRENT_PAGE: 1,
    },
    KEYWORD: '',
    BOUNDARY: 'tc',
    ORDERBY: 'latest',
    editDeleteNotifyModalOn: false,
    sameUserOwner: false,
    postId: '',
    commentId: '',
    editMode: false,
    accessTarget: 'post',
    editCommentMode: false,
    txtComment: '',
};
const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {
        SUBJECT_STATE: (state, action: any) => {
            state.SUBJECT = action.SUBJECT;
        },
        OWNER_STATE: (state, action: any) => {
            state.NICKNAME = action.NICKNAME;
        },
        TITLE_STATE: (state, action: any) => {
            state.TITLE = action.TITLE;
        },
        CONTENT_STATE: (state, action: any) => {
            state.CONTENT = action.CONTENT;
        },
        IMAGE_STATE: (state, action: any) => {
            state.image.FILE_INFO = action.FILE_INFO;
            state.image.RANDOM_NAME = action.RANDOM_NAME;
        },
        POST_IN_PAGE: (state, action: any) => {
            state.post.TOTAL = action.TOTAL;
            state.post.CURRENT_PAGE = action.CURRENT_PAGE;
        },
        SEARCH: (state, action: any) => {
            state.KEYWORD = action.KEYWORD;
        },
        SEARCH_POOL: (state, action: any) => {
            state.BOUNDARY = action.BOUNDARY;
        },
        SEARCH_ORDER: (state, action: any) => {
            state.ORDERBY = action.ORDERBY;
        },
        EDIT_DELETE_NOTIFY_MODAL: (state, action: toolkitRaw.PayloadAction<boolean>) => {
            state.editDeleteNotifyModalOn = action.payload;
        },
        SAME_USER_OWNER: (state, action: toolkitRaw.PayloadAction<boolean>) => {
            state.sameUserOwner = action.payload;
        },
        SET_POST_ID: (state, action: toolkitRaw.PayloadAction<string>) => {
            state.postId = action.payload;
        },
        SET_COMMENT_ID: (state, action: toolkitRaw.PayloadAction<string>) => {
            state.commentId = action.payload;
        },
        EDIT_MODE: (state, action: toolkitRaw.PayloadAction<boolean>) => {
            state.editMode = action.payload;
        },
        SET_ACCESS_TARGET: (state, action: toolkitRaw.PayloadAction<AccessTarget>) => {
            // 게시글쪽 더보기 버튼인지 댓글쪽 더보기 버튼인지 구분
            state.accessTarget = action.payload;
        },
        SET_EDIT_COMMENT_MODE: (state, action: toolkitRaw.PayloadAction<boolean>) => {
            // 댓글 수정 UI 용
            state.editCommentMode = action.payload;
        },
        SET_COMMENT_CONTENT: (state, action: toolkitRaw.PayloadAction<string>) => {
            // 댓글 수정 텍스트
            state.txtComment = action.payload;
        },
    },
});

export const {
    EDIT_DELETE_NOTIFY_MODAL,
    SAME_USER_OWNER,
    SET_POST_ID,
    SET_COMMENT_ID,
    EDIT_MODE,
    SET_ACCESS_TARGET,
    SET_EDIT_COMMENT_MODE,
    SET_COMMENT_CONTENT,
} = postSlice.actions;

export default postSlice.reducer;
