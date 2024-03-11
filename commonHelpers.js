import{i as c,S as h}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="41875605-6b47be3c8e074a549a6d5f149",f="https://pixabay.com/api",g=document.querySelector("form"),a=document.querySelector(".gallery-container");g.addEventListener("submit",p);function p(n){n.preventDefault();const t=n.currentTarget,o=t.querySelector("input").value.trim();o?(a.innerHTML="",q(),y(o).then(s=>{s.length===0?c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",color:"red"}):L(s)}).catch(w).finally(()=>{b(),t.reset()})):(c.show({message:"Please enter a search query!",messageColor:"white",position:"topRight",color:"red"}),a.innerHTML="")}function y(n){const t=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}/?${t}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json().then(s=>s.hits)})}function L(n){a.innerHTML="";const t=({webformatURL:s,largeImageURL:e,tags:r,likes:i,views:l,comments:u,downloads:d})=>`
  
    <li class="gallery">
      <a href="${e}">
        <img class="image-preview" src="${s}" alt="${r}">
      </a>
      <div class="image-description">
      <p>Likes ${i}</p>
      <p>Views ${l}</p>
      <p>Comments ${u}</p>
      <p>Downloads ${d}</p>
      </div>
    </li>
  
  `,o=n.map(t).join("");a.insertAdjacentHTML("beforeend",o),S.refresh()}const S=new h(".gallery a",{captionsData:"alt",captionDelay:250});function w(){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",color:"red"})}function q(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
