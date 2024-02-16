import{a as L,S as v,i as c}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function w(s){try{return await L.get(s)}catch(t){throw new Error(t)}}const m=document.createDocumentFragment(),S=document.querySelector(".gallery");function b(s){s.forEach(({webformatURL:t,largeImageURL:a,tags:l,likes:e,views:r,comments:n,downloads:f})=>{const d=document.createElement("li");d.classList.add("gallery-items"),d.insertAdjacentHTML("beforeend",`<a class='gallery-link' href='${a}'>
        <img class='gallery-image' src='${t}' alt='${l}' />
        <ul class='gallery-ul'>
          <li class='gallery-item'><h3 class='gallery-title'>Likes</h3><p class='gallery-value'>${e}</p></li>
          <li class='gallery-item'><h3 class='gallery-title'>Views</h3><p class='gallery-value'>${r}</p></li>
          <li class='gallery-item'><h3 class='gallery-title'>Comments</h3><p class='gallery-value'>${n}</p></li>
          <li class='gallery-item'><h3 class='gallery-title'>Downloads</h3><p class='gallery-value'>${f}</p></li>
        </ul>
      </a>`),m.appendChild(d)}),S.appendChild(m)}const q=document.querySelector(".form"),$=document.querySelector(".gallery"),g=document.querySelector(".loader"),i=document.querySelector(".load-more"),y="https://pixabay.com/api/?",o={key:"42159131-e2480a23f0f5c24b1f6f03d93",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};let p=0;const E={overlayOpacity:.8,captionsData:"alt",captionDelay:250},O=new v(".gallery a",E);q.addEventListener("submit",s=>{s.preventDefault(),$.innerHTML="",o.page=1;const t=document.querySelector("input"),a=t.value.trim();if(!a)c.warning({message:"You forgot to enter your details"});else{u(),o.q=a;const l=y+new URLSearchParams(o);h(l)}t.value=""});const h=async(s,t)=>{await w(s).then(({data:a})=>{const l=a.hits;p=a.totalHits,l.length>0?(P(l),window.scrollBy({top:t,behavior:"smooth"})):(u(),c.warning({message:"Sorry, there are no images matching your search query. Please try again!",color:"#f83d04"}))}).catch(a=>{c.warning({message:a})})};function P(s){b(s),u(),i.classList.remove("hide"),O.refresh(),I()}i.addEventListener("click",()=>{o.page+=1;const s=y+new URLSearchParams(o);u(),i.classList.add("hide");const t=document.querySelector(".gallery-items").getBoundingClientRect().height*2+26;h(s,t)});function u(){g.classList.contains("hide")?g.classList.remove("hide"):(g.classList.add("hide"),i.classList.add("hide"))}function I(){p<o.page*o.per_page&&!i.classList.contains("hide")&&(i.classList.add("hide"),c.info({message:"We're sorry, but you've reached the end of search results."}))}
//# sourceMappingURL=commonHelpers.js.map