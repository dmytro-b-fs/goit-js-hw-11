import{s as p,a as d,i as s}from"./assets/vendor-B97AjPRt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function m(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=m(e);fetch(e.href,a)}})();const i=document.querySelector(".gallery"),u=new p(".gallery .gallery-item a",{captionsData:"alt"});function y(t){return`
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
      `}function g(t){i.innerHTML=t.map(r=>y(r)).join(""),u.refresh()}function l(){i.innerHTML=""}function h(){i.innerHTML='<div class="loader"></div>'}function c(){i.innerHTML=""}const b="56294512-5f18cb7c37608f5e527f32564",L=d.create({baseURL:"https://pixabay.com/api/",params:{key:b}});function w(t){l(),h(),L.get("",{params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{c(),r.data.hits.length===0?s.error({title:"Error",message:"There are no images for the specified query"}):g(r.data.hits)}).catch(r=>{c(),s.error({title:"Error",message:"Failed to fetch images"}),l()})}const f=document.querySelector(".form");f.addEventListener("submit",t=>{t.preventDefault(),s.destroy();const r=new FormData(f);if(r.get("search-text").trim()===""){s.error({title:"Error",message:"Empty search query",position:"topRight",timeout:3e3});return}w(r.get("search-text"))});
//# sourceMappingURL=index.js.map
