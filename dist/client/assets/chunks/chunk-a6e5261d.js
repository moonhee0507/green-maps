import{t,f as a,p as r}from"./chunk-41308c4f.js";import{o as c}from"./chunk-b82d406b.js";import{r as s}from"./chunk-2b326172.js";import{p as l}from"./chunk-f3107ac8.js";import{m as n}from"./chunk-87bfa915.js";import{p as S}from"./chunk-91c16fc8.js";import{l as d}from"./chunk-63b910cd.js";import{s as m}from"./chunk-370f01b3.js";const{createSlice:p}=t,u=p({name:"buttonSlice",initialState:{bookmark:{ON:!1},like:{ON:!1}},reducers:{HAS_BOOKMARK_LIST:(e,o)=>{e.bookmark.ON=o.ON},HAS_LIKE_LIST:(e,o)=>{e.like.ON=o.ON}}}),f=u.reducer,{createSlice:E}=t,i=E({name:"authSlice",initialState:{isLoggedIn:!1,userId:"",nickName:"",host:"",role:""},reducers:{LOGIN(e,o){e.isLoggedIn=o.payload},SET_USERID(e,o){e.userId=o.payload},SET_NICKNAME(e,o){e.nickName=o.payload},SET_HOST(e,o){e.host=o.payload},SET_ROLE(e,o){e.role=o.payload}}});i.actions;const _=i.reducer,O=a({buttonSlice:f,mapSlice:c,reviewSlice:s,paginationSlice:l,postSlice:r,authSlice:_,myListSlice:n,profileSlice:S,loginSlice:d,signupSlice:m}),{configureStore:T}=t,N=typeof window<"u"?window.__PRELOADED_STATE__:void 0,h=T({reducer:O,devTools:!1,preloadedState:N});export{h as s};
//# sourceMappingURL=chunk-a6e5261d.js.map
