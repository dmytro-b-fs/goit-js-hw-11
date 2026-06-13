import{s as p,a as u,i as s}from"./assets/vendor-B97AjPRt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function m(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=m(e);fetch(e.href,a)}})();const f=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new p(".gallery .gallery-item a",{captionsData:"alt"});function g(t){return`
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
      `}function h(t){f.innerHTML=t.map(r=>g(r)).join(""),y.refresh()}function l(){f.innerHTML=""}function b(){d.style.display=""}function i(){d.style.display="none"}const L="56294512-5f18cb7c37608f5e527f32564",w=u.create({baseURL:"https://pixabay.com/api/",params:{key:L}});function v(t){l(),b(),w.get("",{params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{i(),r.data.hits.length===0?s.error({title:"Error",message:"There are no images for the specified query"}):h(r.data.hits)}).catch(r=>{i(),s.error({title:"Error",message:"Failed to fetch images"}),l()})}const c=document.querySelector(".form");document.addEventListener("DOMContentLoaded",()=>{i()});c.addEventListener("submit",t=>{t.preventDefault(),s.destroy();const r=new FormData(c);if(r.get("search-text").trim()===""){s.error({title:"Error",message:"Empty search query",position:"topRight",timeout:3e3});return}v(r.get("search-text"))});
//# sourceMappingURL=index.js.map
