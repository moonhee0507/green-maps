!function(){function t(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,c,l,o,i=[],s=!0,a=!1;try{if(l=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=l.call(r)).done)&&(i.push(n.value),i.length!==e);s=!0);}catch(u){a=!0,c=u}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(a)throw c}}return i}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./chunk-202ebce4-legacy.js","./chunk-dc7c2e3c-legacy.js","./chunk-967a8d53-legacy.js","./chunk-19a5c1b3-legacy.js"],(function(e,r){"use strict";var n,c,l,o,i,s,a,u,f;return{setters:[function(t){n=t.r,c=t.j},function(t){l=t.S,o=t.T,i=t.P,s=t.a,a=t.u},null,function(t){u=t.c,f=t.a}],execute:function(){e("P",(function(e){var l=e.posts,o=e.limit,i=n.useRef(null),s=u(),p=f(),h=t(a((function(){var t=Math.ceil(s.getState().postSlice.post.TOTAL/o);s.getState().postSlice.post.CURRENT_PAGE<t&&p({type:"postSlice/POST_IN_PAGE",TOTAL:s.getState().postSlice.post.TOTAL,CURRENT_PAGE:s.getState().postSlice.post.CURRENT_PAGE+1})})),2),d=h[0],y=h[1];return n.useEffect((function(){var t=Math.ceil(s.getState().postSlice.post.TOTAL/o),e=s.getState().postSlice.post.CURRENT_PAGE;e===t?y(i.current):e<t&&d(i.current)}),[d,y,i]),c.jsx("ul",{className:"wrapper-posts",children:l.map((function(t,e){return e===l.length-1?c.jsx(r,{postInfo:t,ref:i},t._id):c.jsx(r,{postInfo:t},t._id)}))})}));var r=n.forwardRef((function(t,e){var r=t.postInfo,n=r._id,a=r.subject,u=r.owner,f=r.title,p=r.content,h=r.photo,d=r.like,y=r.registeredAt,g=r.comments,j=(S=p,S.replaceAll(/<[^>]*>/g,"").replaceAll(/&[a-zA-Z0-9]*;/g,"")),m="80px";var S;return c.jsx("li",{ref:e,children:c.jsxs("a",{href:"/community/".concat(n),style:{width:"100%",display:"flex",padding:"20px"},children:[c.jsxs("dl",{style:{width:"calc(100% - ".concat(h&&h.length>0?m:"0px",")")},children:[c.jsx(l,{subject:a}),c.jsx(o,{title:f}),c.jsx(i,{content:j}),c.jsx(s,{owner:u,like:d,registeredAt:y,comments:g})]}),h&&h.length>0?c.jsx("dd",{children:c.jsx("img",{src:h[0].src,alt:"",style:{width:m,height:m,objectFit:"cover"}})}):null]})})}))}}}))}();