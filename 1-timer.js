import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as h}from"./assets/vendor-BbbuE1sJ.js";const c=document.querySelector("#datetime-picker"),o=document.querySelector("button"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");let a;o.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],a<=new Date?(h.error({position:"topRight",color:"#EF4040",message:"Please choose a date in the future",messageColor:"#fff",iconUrl:"./src/img/icon-error.svg",displayMode:2,timeout:5e3,progressBar:!1}),o.disabled=!0):o.disabled=!1}};f("#datetime-picker",b);o.addEventListener("click",C);function C(){console.log(a),o.disabled=!0,c.disabled=!0;const e=setInterval(()=>{const n=Date.now();let t=a-n;if(t<=0){clearInterval(e),d({days:0,hours:0,minutes:0,seconds:0}),c.disabled=!1;return}const r=k(t);d(r)},1e3)}function d({days:e,hours:n,minutes:t,seconds:r}){y.textContent=s(e),p.textContent=s(n),g.textContent=s(t),S.textContent=s(r)}function s(e){return String(e).padStart(2,"0")}function k(e){const i=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:u,minutes:l,seconds:m}}
//# sourceMappingURL=1-timer.js.map
