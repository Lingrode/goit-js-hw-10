import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector(".form");o.addEventListener("submit",m);const i=s.settings({titleColor:"#fff",titleSize:16,messageColor:"#fff",messageSize:16,progressBar:!1,position:"topRight"});function m(l){l.preventDefault();const t=o.delay.value,r=o.state.value;new Promise((e,n)=>{setTimeout(()=>{r==="fulfilled"&&e(`Fulfilled promise in ${t}ms`),r==="rejected"&&n(`Rejected promise in ${t}ms`)},t)}).then(e=>{s.show({messageDefaultSettings:i,title:"OK",message:`${e}`,iconUrl:"src/img/icon-ok.svg",backgroundColor:"rgb(89, 161, 13)"})}).catch(e=>{s.error({messageDefaultSettings:i,title:"Error",message:`${e}`,iconUrl:"src/img/icon-error.svg",backgroundColor:"rgb(239, 64, 64)"})}),o.reset()}
//# sourceMappingURL=2-snackbar.js.map
