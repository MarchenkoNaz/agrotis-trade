(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),s=document.querySelector(".burger-menu-btn"),i=()=>{e.classList.remove("menu-open"),s.classList.remove("active"),document.removeEventListener("click",n)},o=()=>{e.classList.contains("menu-open")?i():(e.classList.add("menu-open"),s.classList.add("active"),document.addEventListener("click",n))},n=c=>{e.contains(c.target)||c.target===t||c.target===s||i()};t.addEventListener("click",(e=>{e.stopPropagation(),o()})),c.addEventListener("click",(e=>{e.stopPropagation(),o()})),s.addEventListener("click",(e=>{e.stopPropagation(),o()}))})();let e=0;const t=document.querySelector(".header"),c=document.querySelector(".navigation"),s=document.querySelector(".burger-menu-btn"),i=()=>window.scrollY||document.documentElement.scrollTop,o=()=>t.classList.contains("hide"),n=()=>window.innerWidth||document.documentElement.clientWidth,r=()=>{i()>e&&!o()&&i()>200?(t.classList.add("hide"),c.classList.remove("menu-open"),s.classList.remove("active")):i()<e&&o()&&t.classList.remove("hide"),e=i()};window.addEventListener("scroll",(()=>{n()<=1024&&r()})),n()<=1024&&r();const l=document.querySelectorAll(".services-list-item");l.forEach((e=>{let t=e.querySelector(".services-list-item__title"),c=e.querySelector(".services-list-item__text");t.addEventListener("click",(()=>{e.classList.toggle("services-list-item--active"),e.classList.contains("services-list-item--active")?c.style.height=`${c.scrollHeight}px`:c.style.height="0px",l.forEach((t=>{if(t!==e){t.classList.remove("services-list-item--active"),t.querySelector(".services-list-item__text").style.height="0px"}}))}))}));const a=document.querySelector(".backdrop-wrapper"),d=document.querySelector(".modal");function m(){a.classList.add("active"),d.classList.add("active"),document.body.style.overflow="hidden"}function u(){a.classList.remove("active"),d.classList.remove("active"),document.body.style.overflow=""}document.querySelectorAll(".data-open-modal").forEach((e=>e.addEventListener("click",m)));d.querySelector(".close-form").addEventListener("click",u),a.addEventListener("click",(e=>{e.target===a&&u()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&u()}));
//# sourceMappingURL=index.4ac30628.js.map
