!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(s){u=!0,o=s}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t,o){return n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},n.apply(null,arguments)}function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./chunk-202ebce4-legacy.js"],(function(r,i){"use strict";var l;return{setters:[function(e){e.c,l=e.g}],execute:function(){var i,c={exports:{}};/*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE */function u(){return i||(i=1,function(r,i){r.exports=function(){var r=Object.entries,i=Object.setPrototypeOf,l=Object.isFrozen,c=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,s=Object.freeze,f=Object.seal,m=Object.create,p="undefined"!=typeof Reflect&&Reflect,d=p.apply,h=p.construct;d||(d=function(e,t,n){return e.apply(t,n)}),s||(s=function(e){return e}),f||(f=function(e){return e}),h||(h=function(e,t){return n(e,o(t))});var y=R(Array.prototype.forEach),g=R(Array.prototype.pop),T=R(Array.prototype.push),b=R(String.prototype.toLowerCase),v=R(String.prototype.toString),E=R(String.prototype.match),A=R(String.prototype.replace),_=R(String.prototype.indexOf),N=R(String.prototype.trim),S=R(RegExp.prototype.test),w=O(TypeError);function R(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return d(e,t,r)}}function O(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(e,n)}}function D(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:b,i&&i(e,null);for(var o=t.length;o--;){var a=t[o];if("string"==typeof a){var c=n(a);c!==a&&(l(t)||(t[o]=c),a=c)}e[a]=!0}return e}function x(e){var n,o=m(null),i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}(r(e));try{for(i.s();!(n=i.n()).done;){var l=t(n.value,2),c=l[0],u=l[1];o[c]=u}}catch(s){i.e(s)}finally{i.f()}return o}function L(e,t){for(;null!==e;){var n=u(e,t);if(n){if(n.get)return R(n.get);if("function"==typeof n.value)return R(n.value)}e=c(e)}function r(e){return console.warn("fallback value for",e),null}return r}var C=s(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),k=s(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),I=s(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),M=s(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),P=s(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),U=s(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),F=s(["#text"]),H=s(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),z=s(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),j=s(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),B=s(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),W=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),G=f(/<%[\w\W]*|[\w\W]*%>/gm),Y=f(/\${[\w\W]*}/gm),q=f(/^data-[\-\w.\u00B7-\uFFFF]/),X=f(/^aria-[\-\w]+$/),$=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),K=f(/^(?:\w+script|data):/i),V=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Z=f(/^html$/i),J=Object.freeze({__proto__:null,MUSTACHE_EXPR:W,ERB_EXPR:G,TMPLIT_EXPR:Y,DATA_ATTR:q,ARIA_ATTR:X,IS_ALLOWED_URI:$,IS_SCRIPT_OR_DATA:K,ATTR_WHITESPACE:V,DOCTYPE_NAME:Z}),Q=function(){return"undefined"==typeof window?null:window},ee=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function te(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q(),n=function(e){return te(e)};if(n.version="3.0.3",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var a,i=t.document,l=i.currentScript,c=t.document,u=t.DocumentFragment,f=t.HTMLTemplateElement,m=t.Node,p=t.Element,d=t.NodeFilter,h=t.NamedNodeMap,R=void 0===h?t.NamedNodeMap||t.MozNamedAttrMap:h,O=t.HTMLFormElement,W=t.DOMParser,G=t.trustedTypes,Y=p.prototype,q=L(Y,"cloneNode"),X=L(Y,"nextSibling"),K=L(Y,"childNodes"),V=L(Y,"parentNode");if("function"==typeof f){var ne=c.createElement("template");ne.content&&ne.content.ownerDocument&&(c=ne.content.ownerDocument)}var re="",oe=c,ae=oe.implementation,ie=oe.createNodeIterator,le=oe.createDocumentFragment,ce=oe.getElementsByTagName,ue=i.importNode,se={};n.isSupported="function"==typeof r&&"function"==typeof V&&ae&&void 0!==ae.createHTMLDocument;var fe,me,pe=J.MUSTACHE_EXPR,de=J.ERB_EXPR,he=J.TMPLIT_EXPR,ye=J.DATA_ATTR,ge=J.ARIA_ATTR,Te=J.IS_SCRIPT_OR_DATA,be=J.ATTR_WHITESPACE,ve=J.IS_ALLOWED_URI,Ee=null,Ae=D({},[].concat(o(C),o(k),o(I),o(P),o(F))),_e=null,Ne=D({},[].concat(o(H),o(z),o(j),o(B))),Se=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),we=null,Re=null,Oe=!0,De=!0,xe=!1,Le=!0,Ce=!1,ke=!1,Ie=!1,Me=!1,Pe=!1,Ue=!1,Fe=!1,He=!0,ze=!1,je="user-content-",Be=!0,We=!1,Ge={},Ye=null,qe=D({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Xe=null,$e=D({},["audio","video","img","source","image","track"]),Ke=null,Ve=D({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ze="http://www.w3.org/1998/Math/MathML",Je="http://www.w3.org/2000/svg",Qe="http://www.w3.org/1999/xhtml",et=Qe,tt=!1,nt=null,rt=D({},[Ze,Je,Qe],v),ot=["application/xhtml+xml","text/html"],at="text/html",it=null,lt=c.createElement("form"),ct=function(e){return e instanceof RegExp||e instanceof Function},ut=function(t){if(!it||it!==t){if(t&&"object"===e(t)||(t={}),t=x(t),fe=fe=-1===ot.indexOf(t.PARSER_MEDIA_TYPE)?at:t.PARSER_MEDIA_TYPE,me="application/xhtml+xml"===fe?v:b,Ee="ALLOWED_TAGS"in t?D({},t.ALLOWED_TAGS,me):Ae,_e="ALLOWED_ATTR"in t?D({},t.ALLOWED_ATTR,me):Ne,nt="ALLOWED_NAMESPACES"in t?D({},t.ALLOWED_NAMESPACES,v):rt,Ke="ADD_URI_SAFE_ATTR"in t?D(x(Ve),t.ADD_URI_SAFE_ATTR,me):Ve,Xe="ADD_DATA_URI_TAGS"in t?D(x($e),t.ADD_DATA_URI_TAGS,me):$e,Ye="FORBID_CONTENTS"in t?D({},t.FORBID_CONTENTS,me):qe,we="FORBID_TAGS"in t?D({},t.FORBID_TAGS,me):{},Re="FORBID_ATTR"in t?D({},t.FORBID_ATTR,me):{},Ge="USE_PROFILES"in t&&t.USE_PROFILES,Oe=!1!==t.ALLOW_ARIA_ATTR,De=!1!==t.ALLOW_DATA_ATTR,xe=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Ce=t.SAFE_FOR_TEMPLATES||!1,ke=t.WHOLE_DOCUMENT||!1,Pe=t.RETURN_DOM||!1,Ue=t.RETURN_DOM_FRAGMENT||!1,Fe=t.RETURN_TRUSTED_TYPE||!1,Me=t.FORCE_BODY||!1,He=!1!==t.SANITIZE_DOM,ze=t.SANITIZE_NAMED_PROPS||!1,Be=!1!==t.KEEP_CONTENT,We=t.IN_PLACE||!1,ve=t.ALLOWED_URI_REGEXP||$,et=t.NAMESPACE||Qe,Se=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&ct(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Se.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ct(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Se.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Se.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ce&&(De=!1),Ue&&(Pe=!0),Ge&&(Ee=D({},o(F)),_e=[],!0===Ge.html&&(D(Ee,C),D(_e,H)),!0===Ge.svg&&(D(Ee,k),D(_e,z),D(_e,B)),!0===Ge.svgFilters&&(D(Ee,I),D(_e,z),D(_e,B)),!0===Ge.mathMl&&(D(Ee,P),D(_e,j),D(_e,B))),t.ADD_TAGS&&(Ee===Ae&&(Ee=x(Ee)),D(Ee,t.ADD_TAGS,me)),t.ADD_ATTR&&(_e===Ne&&(_e=x(_e)),D(_e,t.ADD_ATTR,me)),t.ADD_URI_SAFE_ATTR&&D(Ke,t.ADD_URI_SAFE_ATTR,me),t.FORBID_CONTENTS&&(Ye===qe&&(Ye=x(Ye)),D(Ye,t.FORBID_CONTENTS,me)),Be&&(Ee["#text"]=!0),ke&&D(Ee,["html","head","body"]),Ee.table&&(D(Ee,["tbody"]),delete we.tbody),t.TRUSTED_TYPES_POLICY){if("function"!=typeof t.TRUSTED_TYPES_POLICY.createHTML)throw w('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof t.TRUSTED_TYPES_POLICY.createScriptURL)throw w('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');a=t.TRUSTED_TYPES_POLICY,re=a.createHTML("")}else void 0===a&&(a=ee(G,l)),null!==a&&"string"==typeof re&&(re=a.createHTML(""));s&&s(t),it=t}},st=D({},["mi","mo","mn","ms","mtext"]),ft=D({},["foreignobject","desc","title","annotation-xml"]),mt=D({},["title","style","font","a","script"]),pt=D({},k);D(pt,I),D(pt,M);var dt=D({},P);D(dt,U);var ht=function(e){var t=V(e);t&&t.tagName||(t={namespaceURI:et,tagName:"template"});var n=b(e.tagName),r=b(t.tagName);return!!nt[e.namespaceURI]&&(e.namespaceURI===Je?t.namespaceURI===Qe?"svg"===n:t.namespaceURI===Ze?"svg"===n&&("annotation-xml"===r||st[r]):Boolean(pt[n]):e.namespaceURI===Ze?t.namespaceURI===Qe?"math"===n:t.namespaceURI===Je?"math"===n&&ft[r]:Boolean(dt[n]):e.namespaceURI===Qe?!(t.namespaceURI===Je&&!ft[r])&&!(t.namespaceURI===Ze&&!st[r])&&!dt[n]&&(mt[n]||!pt[n]):!("application/xhtml+xml"!==fe||!nt[e.namespaceURI]))},yt=function(e){T(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},gt=function(e,t){try{T(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(r){T(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(Pe||Ue)try{yt(t)}catch(r){}else try{t.setAttribute(e,"")}catch(r){}},Tt=function(e){var t,n;if(Me)e="<remove></remove>"+e;else{var r=E(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===fe&&et===Qe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=a?a.createHTML(e):e;if(et===Qe)try{t=(new W).parseFromString(o,fe)}catch(l){}if(!t||!t.documentElement){t=ae.createDocument(et,"template",null);try{t.documentElement.innerHTML=tt?re:o}catch(l){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(c.createTextNode(n),i.childNodes[0]||null),et===Qe?ce.call(t,ke?"html":"body")[0]:ke?t.documentElement:i},bt=function(e){return ie.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT,null,!1)},vt=function(e){return e instanceof O&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof R)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Et=function(t){return"object"===e(m)?t instanceof m:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},At=function(e,t,r){se[e]&&y(se[e],(function(e){e.call(n,t,r,it)}))},_t=function(e){var t;if(At("beforeSanitizeElements",e,null),vt(e))return yt(e),!0;var r=me(e.nodeName);if(At("uponSanitizeElement",e,{tagName:r,allowedTags:Ee}),e.hasChildNodes()&&!Et(e.firstElementChild)&&(!Et(e.content)||!Et(e.content.firstElementChild))&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return yt(e),!0;if(!Ee[r]||we[r]){if(!we[r]&&St(r)){if(Se.tagNameCheck instanceof RegExp&&S(Se.tagNameCheck,r))return!1;if(Se.tagNameCheck instanceof Function&&Se.tagNameCheck(r))return!1}if(Be&&!Ye[r]){var o=V(e)||e.parentNode,a=K(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(q(a[i],!0),X(e))}return yt(e),!0}return e instanceof p&&!ht(e)?(yt(e),!0):"noscript"!==r&&"noembed"!==r||!S(/<\/no(script|embed)/i,e.innerHTML)?(Ce&&3===e.nodeType&&(t=e.textContent,t=A(t,pe," "),t=A(t,de," "),t=A(t,he," "),e.textContent!==t&&(T(n.removed,{element:e.cloneNode()}),e.textContent=t)),At("afterSanitizeElements",e,null),!1):(yt(e),!0)},Nt=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in c||n in lt))return!1;if(De&&!Re[t]&&S(ye,t));else if(Oe&&S(ge,t));else if(!_e[t]||Re[t]){if(!(St(e)&&(Se.tagNameCheck instanceof RegExp&&S(Se.tagNameCheck,e)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(e))&&(Se.attributeNameCheck instanceof RegExp&&S(Se.attributeNameCheck,t)||Se.attributeNameCheck instanceof Function&&Se.attributeNameCheck(t))||"is"===t&&Se.allowCustomizedBuiltInElements&&(Se.tagNameCheck instanceof RegExp&&S(Se.tagNameCheck,n)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(n))))return!1}else if(Ke[t]);else if(S(ve,A(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==_(n,"data:")||!Xe[e])if(xe&&!S(Te,A(n,be,"")));else if(n)return!1;return!0},St=function(e){return e.indexOf("-")>0},wt=function(t){var r,o,i,l;At("beforeSanitizeAttributes",t,null);var c=t.attributes;if(c){var u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(l=c.length;l--;){var s=r=c[l],f=s.name,m=s.namespaceURI;if(o="value"===f?r.value:N(r.value),i=me(f),u.attrName=i,u.attrValue=o,u.keepAttr=!0,u.forceKeepAttr=void 0,At("uponSanitizeAttribute",t,u),o=u.attrValue,!u.forceKeepAttr&&(gt(f,t),u.keepAttr))if(Le||!S(/\/>/i,o)){Ce&&(o=A(o,pe," "),o=A(o,de," "),o=A(o,he," "));var p=me(t.nodeName);if(Nt(p,i,o)){if(!ze||"id"!==i&&"name"!==i||(gt(f,t),o=je+o),a&&"object"===e(G)&&"function"==typeof G.getAttributeType)if(m);else switch(G.getAttributeType(p,i)){case"TrustedHTML":o=a.createHTML(o);break;case"TrustedScriptURL":o=a.createScriptURL(o)}try{m?t.setAttributeNS(m,f,o):t.setAttribute(f,o),g(n.removed)}catch(d){}}}else gt(f,t)}At("afterSanitizeAttributes",t,null)}},Rt=function e(t){var n,r=bt(t);for(At("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)At("uponSanitizeShadowNode",n,null),_t(n)||(n.content instanceof u&&e(n.content),wt(n));At("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var t,r,o,l,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((tt=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Et(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Ie||ut(c),n.removed=[],"string"==typeof e&&(We=!1),We){if(e.nodeName){var s=me(e.nodeName);if(!Ee[s]||we[s])throw w("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof m)1===(r=(t=Tt("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName||"HTML"===r.nodeName?t=r:t.appendChild(r);else{if(!Pe&&!Ce&&!ke&&-1===e.indexOf("<"))return a&&Fe?a.createHTML(e):e;if(!(t=Tt(e)))return Pe?null:Fe?re:""}t&&Me&&yt(t.firstChild);for(var f=bt(We?e:t);o=f.nextNode();)_t(o)||(o.content instanceof u&&Rt(o.content),wt(o));if(We)return e;if(Pe){if(Ue)for(l=le.call(t.ownerDocument);t.firstChild;)l.appendChild(t.firstChild);else l=t;return(_e.shadowroot||_e.shadowrootmod)&&(l=ue.call(i,l,!0)),l}var p=ke?t.outerHTML:t.innerHTML;return ke&&Ee["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&S(Z,t.ownerDocument.doctype.name)&&(p="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+p),Ce&&(p=A(p,pe," "),p=A(p,de," "),p=A(p,he," ")),a&&Fe?a.createHTML(p):p},n.setConfig=function(e){ut(e),Ie=!0},n.clearConfig=function(){it=null,Ie=!1},n.isValidAttribute=function(e,t,n){it||ut({});var r=me(e),o=me(t);return Nt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(se[e]=se[e]||[],T(se[e],t))},n.removeHook=function(e){if(se[e])return g(se[e])},n.removeHooks=function(e){se[e]&&(se[e]=[])},n.removeAllHooks=function(){se={}},n}var ne=te();return ne}()}(c)),c.exports}var s=window.DOMPurify||(window.DOMPurify=u().default||u());r("D",l(s))}}}))}();
