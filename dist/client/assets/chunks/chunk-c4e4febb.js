import{r as a,j as u}from"./chunk-0ad0329c.js";import{A as l}from"./chunk-0fac4abb.js";function f(e){if(e<1e3){let t=e.toLocaleString("ko-KR").split("");return t.pop(),t.join("")+"m"}else{let t=(e/1e3).toLocaleString("ko-KR").split("");return t.pop(),t.join("")+"km"}}function g({location:e}){const[t,r]=a.useState(null),[i,c]=a.useState(0);return a.useEffect(()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(o=>{const n=o.coords.latitude,s=o.coords.longitude;r([s,n])})},[]),a.useEffect(()=>{t!==null&&e.every(n=>n!==0)&&o().then(n=>{c(n.distance)});async function o(){return await(await fetch(`${l}/map/distance`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentLocation:t,targetLocation:e})})).json()}},[t,e]),u.jsx("span",{className:"txt-distance",children:f(i)})}export{g as D};
