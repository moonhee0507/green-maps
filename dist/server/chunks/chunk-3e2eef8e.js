import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const initialState = {
  SUBJECT: "",
  NICKNAME: "",
  TITLE: "",
  CONTENT: "",
  image: {
    FILE_INFO: [],
    RANDOM_NAME: []
  },
  post: {
    TOTAL: 0,
    CURRENT_PAGE: 1
  },
  KEYWORD: "",
  BOUNDARY: "tc",
  ORDERBY: "latest",
  editDeleteNotifyModalOn: false,
  sameUserOwner: false,
  postId: "",
  commentId: "",
  editMode: false,
  accessTarget: "post",
  editCommentMode: false,
  txtComment: ""
};
const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    SUBJECT_STATE: (state, action) => {
      state.SUBJECT = action.SUBJECT;
    },
    OWNER_STATE: (state, action) => {
      state.NICKNAME = action.NICKNAME;
    },
    TITLE_STATE: (state, action) => {
      state.TITLE = action.TITLE;
    },
    CONTENT_STATE: (state, action) => {
      state.CONTENT = action.CONTENT;
    },
    IMAGE_STATE: (state, action) => {
      state.image.FILE_INFO = action.FILE_INFO;
      state.image.RANDOM_NAME = action.RANDOM_NAME;
    },
    POST_IN_PAGE: (state, action) => {
      state.post.TOTAL = action.TOTAL;
      state.post.CURRENT_PAGE = action.CURRENT_PAGE;
    },
    SEARCH: (state, action) => {
      state.KEYWORD = action.KEYWORD;
    },
    SEARCH_POOL: (state, action) => {
      state.BOUNDARY = action.BOUNDARY;
    },
    SEARCH_ORDER: (state, action) => {
      state.ORDERBY = action.ORDERBY;
    },
    EDIT_DELETE_NOTIFY_MODAL: (state, action) => {
      state.editDeleteNotifyModalOn = action.payload;
    },
    SAME_USER_OWNER: (state, action) => {
      state.sameUserOwner = action.payload;
    },
    SET_POST_ID: (state, action) => {
      state.postId = action.payload;
    },
    SET_COMMENT_ID: (state, action) => {
      state.commentId = action.payload;
    },
    EDIT_MODE: (state, action) => {
      state.editMode = action.payload;
    },
    SET_ACCESS_TARGET: (state, action) => {
      state.accessTarget = action.payload;
    },
    SET_EDIT_COMMENT_MODE: (state, action) => {
      state.editCommentMode = action.payload;
    },
    SET_COMMENT_CONTENT: (state, action) => {
      state.txtComment = action.payload;
    }
  }
});
const {
  EDIT_DELETE_NOTIFY_MODAL,
  SAME_USER_OWNER,
  SET_POST_ID,
  SET_COMMENT_ID,
  EDIT_MODE,
  SET_ACCESS_TARGET,
  SET_EDIT_COMMENT_MODE,
  SET_COMMENT_CONTENT
} = postSlice.actions;
const postSlice$1 = postSlice.reducer;
export {
  EDIT_MODE as E,
  SAME_USER_OWNER as S,
  EDIT_DELETE_NOTIFY_MODAL as a,
  SET_POST_ID as b,
  SET_ACCESS_TARGET as c,
  SET_COMMENT_ID as d,
  SET_EDIT_COMMENT_MODE as e,
  postSlice$1 as p
};
//# sourceMappingURL=chunk-3e2eef8e.js.map
