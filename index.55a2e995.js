!function(){var n,c=["/posts","/comments","/albums","/photos","/todos","/users"],o=document.querySelector(".json-container");(n="https://jsonplaceholder.typicode.com",console.log(fetch("".concat(n).concat(c[5]))),fetch("".concat(n).concat(c[5])).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))).then((function(n){console.log(n),o.innerHTML=n.map((function(n){var c=n.id,o=n.name,t=n.username,e=n.email,s=n.address,a=s.city,r=s.street,l=s.suite;return'<li>\n          <p class="id">'.concat(c,'</p>\n          <p class="name">').concat(o,'</p>\n          <p class="username">').concat(t,'</p>\n          <p class="email">').concat(e,'</p>\n          <p class="address">address: ').concat(a,", ").concat(r,", ").concat(l,"</p>\n        </li>")})).join("")})).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.55a2e995.js.map
