(()=>{const e=document.getElementById("app"),t=localStorage,n=e=>{const t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("class","h-5 w-5"),t.setAttribute("viewBox","0 0 20 20"),t.setAttribute("fill","currentColor"),t.appendChild(document.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",e),t},o=(e,t={},n=[])=>{const a=document.createElement(e);return Object.entries(t).forEach(([e,t])=>"className"===e?a.className=t:e.startsWith("on")?a.addEventListener(e.slice(2).toLowerCase(),t):a.setAttribute(e,t)),n.forEach(e=>a.appendChild(e)),a},a=o("div",{className:"w-16 bg-black flex flex-col items-center py-4 fixed h-full"},[o("sl-button",{variant:"text",size:"large",className:"text-primary mb-8"},[n("M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z")]),o("sl-button",{variant:"text",size:"large",className:"text-gray-400 mb-8"},[n("M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z")])]),s=o("header",{className:"bg-gray-800 text-white p-4 flex justify-between items-center ml-16"},[o("h1",{className:"text-2xl font-bold"},[document.createTextNode("PrizVideo")]),o("div",{className:"flex items-center"},[o("input",{type:"search",placeholder:"Search",className:"bg-gray-700 text-white px-4 py-2 rounded-l-full"}),o("sl-button",{variant:"primary",size:"medium",className:"rounded-r-full !bg-gray-700 !border-gray-700"},[n("M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z")])]),o("div",{className:"flex items-center"},[o("sl-button",{variant:"neutral",size:"medium",className:"mr-2 !bg-transparent !border-gray-700"},[n("M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z")]),o("div",{id:"user-container",className:"flex items-center"},[o("sl-button",{id:"user-button",variant:"neutral",size:"medium",className:"!bg-transparent !border-gray-700"},[n("M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z")])])])]),i=o("main",{className:"flex-1 overflow-y-auto bg-gray-900 p-4 ml-16"},[o("h2",{className:"text-white text-xl font-semibold mb-4"},[document.createTextNode("Hi! Welcome to PrizVideo! :D")]),o("div",{id:"video-grid",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"})]);e.append(a,s,i);const r=e=>{const t=o("sl-dialog",{label:"Log in to PrizVideo",className:"login-popup"},[o("form",{id:"login-form"},[o("sl-input",{label:"Username",required:!0,className:"mb-4"}),o("sl-input",{label:"Password",type:"password",required:!0,className:"mb-4"}),o("sl-button",{type:"submit",variant:"primary"},[document.createTextNode("Log In")]),o("sl-button",{type:"button",variant:"neutral",className:"ml-2"},[document.createTextNode("Create Account")])])]);return document.body.appendChild(t),t},c=()=>{const e=t.getItem("currentUser");return e?JSON.parse(e):null},l=(e,n)=>{t.setItem("currentUser",JSON.stringify({username:e}));const a=document.getElementById("user-container");a.innerHTML="",a.appendChild(o("sl-dropdown",{},[o("sl-button",{slot:"trigger",caret:!0,className:"!bg-transparent !border-gray-700"},[document.createTextNode(e)]),o("sl-menu",{},[o("sl-menu-item",{},[document.createTextNode("Profile")]),o("sl-menu-item",{},[document.createTextNode("User Settings")]),o("sl-menu-item",{},[document.createTextNode("Libraries")]),o("sl-menu-item",{onClick:d},[document.createTextNode("Log Out")])])]))},d=()=>{t.removeItem("currentUser");const e=document.getElementById("user-container");e.innerHTML="",e.appendChild(o("sl-button",{id:"user-button",variant:"neutral",size:"medium",className:"!bg-transparent !border-gray-700"},[n("M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z")]))},u=e=>{window.location.href=`/watch?id=${e}`};document.getElementById("user-button");const m=r();document.getElementById("user-container").addEventListener("click",e=>{c()||m.show()}),document.getElementById("login-form").addEventListener("submit",e=>{e.preventDefault();const t=e.target.querySelector('sl-input[label="Username"]').value,n=e.target.querySelector('sl-input[label="Password"]').value;l(t,n),m.hide()}),function(){const e=document.getElementById("video-grid");e.innerHTML="";for(let t=0;t<8;t++){const t=o("sl-skeleton",{effect:"sheen",className:"w-full h-60"});e.appendChild(t)}setTimeout(()=>{const n=t.getItem("videos"),a=n?JSON.parse(n):[];e.innerHTML="",a.forEach(t=>{e.appendChild(function(e){return o("div",{className:"bg-gray-800 rounded-lg overflow-hidden shadow-lg"},[o("img",{src:e.thumbnail||"https://placehold.co/320x180",alt:e.title,className:"w-full h-40 object-cover cursor-pointer",onClick:()=>u(e.id)}),o("div",{className:"p-4"},[o("h3",{className:"text-white font-semibold mb-2"},[document.createTextNode(e.title)]),o("div",{className:"flex justify-between"},[o("sl-button",{variant:"primary",size:"small",className:"!bg-transparent !border-gray-700",onClick:()=>u(e.id)},[n("M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z")]),o("sl-button",{variant:"neutral",size:"small",className:"!bg-transparent !border-gray-700"},[n("M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z")])])])])}(t))})},2e3)}()})();
