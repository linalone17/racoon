const t={all:"Все",kitchen:"Кухня",hall:"Зал",lights:"Лампочки",cameras:"Камеры"},e={expanded:!1,toggled:!1,activeTab:function(t){return["all","kitchen","hall","lights","cameras"].includes(t)?t:"all"}(new URLSearchParams(location.search).get("tab"))};function i(t,...e){let n=document.createElement(t);return n.classList.add(...e),n}function n(t,e){for(let i in e)t.setAttribute(i,e[i])}function a(t){let e=i("li","event");t.slim&&e.classList.add("event_slim");let n=i("button","event__button");e.appendChild(n);let a=i("span","event__icon","event__icon_"+t.icon),l=i("h4","event__title");if(l.textContent=t.title,n.append(a,l),t.subtitle){let e=i("span","event__subtitle");e.textContent=t.subtitle,n.appendChild(e)}return e}const l=i("div","main"),o=i("section","section","main__general"),s=i("h2","section__title","section__title-header","section__main-title");s.textContent="Главное";const c=i("div","hero-dashboard"),d=i("div","hero-dashboard__primary"),r=i("h3","hero-dashboard__title");r.textContent="Привет, Геннадий!";const h=i("p","hero-dashboard__subtitle");h.textContent="Двери и окна закрыты, сигнализация включена.";const p=i("ul","hero-dashboard__info"),b=i("span","a11y-hidden");b.textContent="\xb0";const u=i("li","hero-dashboard__item"),_=i("div","hero-dashboard__item-title");_.textContent="Дома";const m=i("div","hero-dashboard__item-details");m.textContent="+23",m.append(b),u.append(_,m);const v=u.cloneNode(),g=i("div","hero-dashboard__item-title");g.textContent="За окном";const L=i("div","hero-dashboard__item-details");L.textContent="+19";const C=i("div","hero-dashboard__icon","hero-dashboard__icon_rain");C.setAttribute("role","img"),C.setAttribute("aria-label","Дождь"),L.append(b,C),v.append(g,L),p.append(u,v);const f=i("ul","hero-dashboard__schedule");f.appendChild(a({icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"})),f.appendChild(a({icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})),f.appendChild(a({icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})),c.append(d,f),d.append(r,h,p),o.append(s,c);const x=i("section","section","main__scripts"),A=i("h2","section__title","section__title-header");A.textContent="Избранные сценарии";const k=i("ul","event-grid");k.appendChild(a({slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"})),k.appendChild(a({slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"})),k.appendChild(a({slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"})),k.appendChild(a({slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"})),k.appendChild(a({slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"})),x.append(A,k);const E=i("section","section","main__devices"),T=i("div","section__title"),D=i("h2","section__title-header");D.textContent="Избранные устройства";const P=i("select","section__select");P.setAttribute("defaultValue",e.activeTab);const X=document.createElement("option");X.setAttribute("value","all"),X.textContent="Все";const S=document.createElement("option");S.setAttribute("value","kitchen"),S.textContent="Кухня";const y=document.createElement("option");y.setAttribute("value","hall"),y.textContent="Зал";const M=document.createElement("option");M.setAttribute("value","lights"),M.textContent="Лампочки";const N=document.createElement("option");N.setAttribute("value","cameras"),N.textContent="Камеры",P.append(X,S,y,M,N);const B=i("ul","section__tabs");function Y(a){let l=i("li","section__tab");return e.activeTab===a&&l.classList.add("section__tab_active"),n(l,{role:"tab","aria-selected":e.activeTab===a?"true":"false",tabindex:"0",id:"tab_"+a,"aria-controls":"panel_"+l}),l.textContent=t[a],l}B.setAttribute("role","tablist");const Z={all:Y("all"),kitchen:Y("kitchen"),hall:Y("hall"),lights:Y("lights"),cameras:Y("cameras")};B.append(Z.all,Z.kitchen,Z.hall,Z.lights,Z.cameras),T.append(D,P,B);const w=i("div","section__panel-wrapper"),F={all:function(t){let e=Array(512);for(let i=0;i<512;i++)e[i]=a(t[i%8]);return e}([{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]),kitchen:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}].map(a),hall:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}].map(a),lights:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}].map(a),cameras:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}].map(a)};function I(t){let a=i("div","section__panel","section__panel_hidden");n(a,{role:"tabpanel","aria-hidden":t===e.activeTab?"false":"true","aria-labelledby":"tabs_"+t,id:"panel_"+t});let l=i("ul","section__panel-list");return a.appendChild(l),t===e.activeTab&&(a.classList.remove("section__panel_hidden"),l.append(...F[t])),[a,l]}const O={all:I("all"),kitchen:I("kitchen"),hall:I("hall"),lights:I("lights"),cameras:I("cameras")},W=i("div","section__arrow");function H(t){let e=O[t][1];return e.scrollWidth>w.offsetWidth}function R(t){if(t===e.activeTab)return;let i=Z[e.activeTab];i.setAttribute("aria-selected","false"),i.removeAttribute("tab-index"),i.classList.remove("section__tab_active");let n=Z[t];n.setAttribute("aria-selected","true"),n.setAttribute("tab-index","0"),n.classList.add("section__tab_active");let[a,l]=O[e.activeTab];a.setAttribute("class","section__panel section__panel_hidden"),a.setAttribute("aria-hidden","true"),l.innerHTML="";let[o,s]=O[t];o.setAttribute("class","section__panel"),o.setAttribute("aria-hidden","false"),s.append(...F[t]);let c=H(t);!W.parentNode&&c?w.appendChild(W):c||W.remove(),e.activeTab=t}W.onclick=function(){let t=O[e.activeTab][0];t.scrollTo({left:t.scrollLeft+400,behavior:"smooth"})},w.append(O.all[0],O.kitchen[0],O.hall[0],O.lights[0],O.cameras[0]),H(e.activeTab)&&w.append(W),P.oninput=t=>{R(t.target.value)},document.addEventListener("click",t=>{for(let e in Z)if(t.target===Z[e]){R(e);return}}),E.append(T,w),l.append(o,x,E);const U=document.createElement("div");U.id="app",U.append(function(){let t=i("header","header"),n=i("a","header__logo");n.setAttribute("href","/"),n.setAttribute("aria-label","Яндекс.Дом");let a=i("button","header__menu");a.setAttribute("aria-expanded","false");let l=i("span","header__menu-text","a11y-hidden");l.textContent="Открыть меню",a.appendChild(l);let o=i("ul","header__links"),s=i("li","header__item"),c=s.cloneNode(),d=s.cloneNode(),r=i("a","header__link"),h=r.cloneNode();h.setAttribute("href","/devices"),h.textContent="Устройства";let p=r.cloneNode();return p.setAttribute("href","/scripts"),p.textContent="Сценарии",r.classList.add("header__link_current"),r.textContent="Сводка",r.setAttribute("aria-current","page"),r.setAttribute("href","/"),s.appendChild(r),c.appendChild(h),d.appendChild(p),o.append(s,c,d),t.append(n,a,o),a.onclick=()=>{e.toggled||(o.classList.add("header__links-toggled"),e.toggled=!0),(e.expanded=!e.expanded)?(o.classList.add("header__links_opened"),l.textContent="Закрыть меню"):(o.classList.remove("header__links_opened"),l.textContent="Открыть меню")},t}(),l),document.body.prepend(U),H(e.activeTab)&&w.append(W);
//# sourceMappingURL=index.b1c8dbc3.js.map