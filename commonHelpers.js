import{i as f,S as d}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const o=document.querySelector(".loader"),y="42824124-ce8ae3b73b3abf1692b179272",g="https://pixabay.com/api/";function h(i){o.style.display="flex";const s=`${g}?key=${y}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>(t.hits.length===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!"}),o.style.display="none",t)).catch(t=>{console.log(t)})}function b(i){const t=i.hits.map(({webformatURL:a,largeImageURL:e,tags:r,likes:l,views:m,comments:u,downloads:p})=>`<li class="list-link">
                        
                            <a href="${e}">
                            <img class="gallery-links" src="${a}" alt="${r}"></a>
                        
                            <div class="parameters">
                                <ul class="parameters-list">
                                    <li class="parameters-list-item">likes:</li>
                                    <li class="parameters-list-item">${l}</li>
                                </ul>
                                <ul class="parameters-list">
                                    <li class="parameters-list-item">views:</li>
                                    <li class="parameters-list-item">${m}</li>
                                </ul>
                                <ul class="parameters-list">
                                    <li class="parameters-list-item">comments:</li>
                                    <li class="parameters-list-item">${u}</li>
                                </ul>
                                <ul class="parameters-list">
                                    <li class="parameters-list-item">downloads:</li>
                                    <li class="parameters-list-item">${p}</li>
                                </ul>
                        </div>
                        </li>`).join("");c.innerHTML=t,L.refresh("https://github.com/andreknieriem/simplelightbox#public-methods")}const c=document.querySelector(".gallery"),L=new d(".gallery a",{captionPosition:"bottom",captionDelay:"250",captionsData:"alt",close:!0,animationSpeed:200,preloading:!0,loop:!0,scaleImageToRatio:!0,scrollZoomFactor:.9,overlay:!0,overlayOpacity:1,spinner:!0}),n=document.querySelector("form");n.addEventListener("submit",i=>{i.preventDefault(),c.innerHTML="",i.target.elements.serchfield.value.trim().length>0&&(h().then(t=>b(t)),n.reset())});
//# sourceMappingURL=commonHelpers.js.map
