(()=>{"use strict";const t=[{id:1,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/1.jpg",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:2,title:"Motivation Is The First Step To Success",urlToImage:"./src/img/strategies/2.jpg",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:3,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./src/img/strategies/3.jpg",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"}];window.onload=function(){t&&a(),e()};const e=()=>{document.querySelector(".strategies__tags").addEventListener("click",(t=>{if(t.target.classList.contains("tag")){let e=t.target;o(),s(e),"All"===e.innerText?r():i(e.innerText)}}))},o=()=>{let t=document.querySelectorAll(".strategies__tags .tag");console.log(t),t.forEach((t=>{t.classList.remove("tag_selected"),t.classList.add("tag_bordered")}))},s=t=>{t.classList.add("tag_selected"),t.classList.remove("tag_bordered")},r=()=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((t=>{t.classList.remove("strategy_hidden")}))},i=t=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((e=>{e.classList.add("strategy_hidden"),e.querySelectorAll(".tag").forEach((o=>{o.innerText===t&&e.classList.remove("strategy_hidden")}))}))},a=()=>{n()},n=()=>{const t=document.querySelector(".strategy-wrapper");return t.innerHTML="",t}})();