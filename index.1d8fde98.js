!function(){var e,n,t,o,c,i,r;e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),o=document.querySelector(".burger-menu-btn"),c=function(){e.classList.remove("menu-open"),o.classList.remove("active"),document.removeEventListener("click",r)},i=function(){e.classList.contains("menu-open")?c():(e.classList.add("menu-open"),o.classList.add("active"),document.addEventListener("click",r))},r=function(t){e.contains(t.target)||t.target===n||t.target===o||c()},n.addEventListener("click",(function(e){e.stopPropagation(),i()})),t.addEventListener("click",(function(e){e.stopPropagation(),i()})),o.addEventListener("click",(function(e){e.stopPropagation(),i()}));var s=0,u=document.querySelector(".header"),a=document.querySelector(".navigation"),d=document.querySelector(".burger-menu-btn"),l=function(){return window.scrollY||document.documentElement.scrollTop},m=function(){return u.classList.contains("hide")},v=function(){return window.innerWidth||document.documentElement.clientWidth},L=function(){l()>s&&!m()&&l()>200?(u.classList.add("hide"),a.classList.remove("menu-open"),d.classList.remove("active")):l()<s&&m()&&u.classList.remove("hide"),s=l()};window.addEventListener("scroll",(function(){v()<=1024&&L()})),v()<=1024&&L()}();
//# sourceMappingURL=index.1d8fde98.js.map
