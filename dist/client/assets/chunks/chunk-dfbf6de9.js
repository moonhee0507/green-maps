function r(e){const i=e.split(". ");i.pop();const a=new Intl.DateTimeFormat("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date).split(". ");for(let t=0;t<=2;t++)if(a[t]!==i[t])return!1;return!0}export{r as i};
//# sourceMappingURL=chunk-dfbf6de9.js.map
