const s=["/posts","/comments","/albums","/photos","/todos","/users"],e=document.querySelector(".json-container");var n;(n="https://jsonplaceholder.typicode.com",fetch(`${n}${s[5]}`).then((s=>{if(!s.ok)throw new Error(s.statusText);return s.json()}))).then((s=>{e.innerHTML=s.map((({id:s,name:e,username:n,email:t,address:{city:o,street:a,suite:r}})=>`<li>\n          <p class="id">${s}</p>\n          <p class="name">${e}</p>\n          <p class="username">${n}</p>\n          <p class="email">${t}</p>\n          <p class="address">address: ${o}, ${a}, ${r}</p>\n        </li>`)).join("")})).catch((s=>console.log(s)));
//# sourceMappingURL=index.3380ec13.js.map