(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds");let r=0;r=setInterval((()=>{const e=(()=>{const e=(new Date("23 january 2024").getTime()-(new Date).getTime())/1e3;let t=Math.floor(e/60/60),n=Math.floor(e/60%60),l=Math.floor(e%60);return l<10&&(l="0"+l),n<10&&(n="0"+n),t<10&&(t="0"+t),{timeRemaning:e,hours:t,minutes:n,seconds:l}})();t.textContent=e.hours,n.textContent=e.minutes,l.textContent=e.seconds,e.timeRemaning<0&&(clearInterval(r),t.textContent="00",n.textContent="00",l.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),n.addEventListener("click",r),l.forEach((e=>e.addEventListener("click",r)))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close"),l=t.querySelector(".popup-content"),r=window.screen.width;console.log(r);const o=()=>{if(r>768){const e=Date.now(),n=e=>{l.style.left=e/5+"px"},r=setInterval((()=>{const t=Date.now()-e;t>=4e3?clearInterval(r):n(t)}),20);t.style.display="block"}else t.style.display="block"};e.forEach((e=>e.addEventListener("click",o))),n.addEventListener("click",(()=>{t.style.display="none"}))})(),(()=>{const e=document.querySelector(".calc-block"),t=document.querySelectorAll(".form-email"),n=document.querySelectorAll('[name="user_name"]'),l=document.querySelectorAll(".form-phone"),r=document.querySelector(".mess");n.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яё -]/gi,"")})))),l.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9-()]/gi,"")})))),t.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z@-_.!~*0-9]/gi,"")})))),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яё -]/gi,"")})),e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^.\d]/g,"")}))})()})();