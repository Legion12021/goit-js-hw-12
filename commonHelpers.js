import{a as S,S as C,i as d}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function m(r,s=1){const o="https://pixabay.com/api/",n="42600049-cf2a2f9bce39b2068dfff6d8c",e=new URLSearchParams({key:n,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}),t=`${o}?${e}`;return(await S.get(t)).data}function p(r){return r.map(({webformatURL:s,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:w})=>`<li class ='gallery-item'>
        <a class="gallery-link" href="${o}">
            <img class="gallery-image"
                src="${s}"
                alt="${n}"
                width="360"/>
        </a>
        <div class='image-info'>
            <div class="info">
                <h3 class = "info-likes">Likes</h3>
                <p>${e}</p>
            </div>
            <div class="info">
                <h3 class = "info-views">Views</h3>
                <p>${t}</p>
            </div>
            <div class="info">
                <h3 class = "info-comments">Comments</h3>
                <p>${i}</p>
            </div>
            <div class="info">
                <h3 class = "info-downloads">Downloads</h3>
                <p>${w}</p>
            </div>
        </div>
    </li>`).join("")}const y=new C(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".form"),q=document.querySelector('input[name="search"]'),f=document.querySelector(".gallery"),b=document.querySelector(".loader"),h=document.querySelector(".js-load-btn");let l=1,a="";g.addEventListener("submit",r=>{if(r.preventDefault(),l=1,f.innerHTML="",a=q.value.trim(),console.log(a),a.length===0||a==="")c(),$();else{L();async function s(){try{const o=await m(a,l);return o.hits.length===0&&(c(),P()),console.log(o),o}catch(o){c(),console.log(o)}finally{u(),g.reset()}}s().then(o=>{console.log(o),f.innerHTML=p(o.hits),y.refresh(),o.hits.length>=15&&v()})}});h.addEventListener("click",I);async function I(){try{c(),L(),l+=1;const r=await m(a,l);f.insertAdjacentHTML("beforeend",p(r.hits)),y.refresh(),v(),O(),u(),r.hits.length<15&&(k(),c(),u())}catch{c()}}function O(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}function P(r){console.log(r),d.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3})}function $(){d.warning({message:"Please enter a search query",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3})}function k(){d.info({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"We're sorry, but you've reached the end of search results.",closeOnEscape:!0,position:"topRight",backgroundColor:"#34c0eb"})}function v(){h.classList.remove("is-hidden")}function c(){h.classList.add("is-hidden")}function L(){b.style.display="block"}function u(){b.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
