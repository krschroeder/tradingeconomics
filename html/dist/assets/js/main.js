(()=>{let r={isDate:/^\d{4}\-\d{2}\-\d{2}/,isTELink:/^\/[a-z0-9]/i},s=(e,t={})=>Object.assign(document.createElement(e),t),m=e=>{var t=document.createElement("tr");return t.append(...e),t};document.getElementById("app"),fetch("https://api.tradingeconomics.com/markets/currency?c=guest:guest&cross=EUR").then(e=>e.json()).then(e=>{var t,a,n=document.getElementById("app"),c=(e=e,t="currencies",a=s("div",{className:t+"-wrap"}),t=s("table",{className:t}),c=Object.keys(e[0]).map(e=>s("th",{textContent:(/[A-Z]/.test(e=e)?(e.match(/[A-Z][a-z]+/g)||[]).join(" "):e)||e})),e=e.map(e=>{e=Object.values(e).map(e=>{var t=document.createElement("td");return t.append((e=e,r.isDate.test(e)?new Date(e).toLocaleDateString():r.isTELink.test(e)?s("a",{href:"https://tradingeconomics.com"+e,textContent:e,target:"_blank"}):e)),t});return m(e)}),t.append(m(c),...e),a.append(t),a);n.append(c)}).catch(e=>console.error(e))})();