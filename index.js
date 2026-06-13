import{s as p,a as u,i as o}from"./assets/vendor-DSZPjvyT.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=new p(".gallery .gallery-item a",{captionsData:"alt"});function g(t){return`
        <li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
          <img src="${t.webformatURL}" width="360" height="200" alt="${t.tags}" class="gallery-image" /></a>
          <div class="gallery-info">
            <p class="gallery-info-item">
              <b>Likes</b>
              <span class="gallery-info-item-data">${t.likes}</span>
            </p>
            <p class="gallery-info-item">
              <b>Views</b>
              <span class="gallery-info-item-data">${t.views}</span>
            </p>
            <p class="gallery-info-item">
              <b>Comments</b>
              <span class="gallery-info-item-data">${t.comments}</span>
            </p>
            <p class="gallery-info-item">
              <b>Downloads</b>
              <span class="gallery-info-item-data">${t.downloads}</span>
            </p>
            </div>
        </li>
      `}function h(t){d.innerHTML=t.map(a=>g(a)).join(""),y.refresh()}function c(){d.innerHTML=""}function b(){m.style.display=""}function n(){m.style.display="none"}const L="56294512-5f18cb7c37608f5e527f32564",w=u.create({baseURL:"https://pixabay.com/api/",params:{key:L}});function v(t){return w.get("",{params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const f=document.querySelector(".form");document.addEventListener("DOMContentLoaded",()=>{n()});f.addEventListener("submit",t=>{t.preventDefault(),c(),b(),o.destroy();const a=new FormData(f);if(a.get("search-text").trim()===""){o.error({title:"Error",message:"Empty search query",position:"topRight",timeout:3e3});return}v(a.get("search-text")).then(s=>{n(),s.data.hits.length===0?o.error({title:"Error",message:"There are no images for the specified query"}):h(s.data.hits)}).catch(s=>{n(),o.error({title:"Error",message:"Failed to fetch images"}),c()})});
//# sourceMappingURL=index.js.map
