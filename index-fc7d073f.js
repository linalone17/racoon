window.store=[!1,!1,function(o){return o==="all"?0:o==="kitchen"?1:o==="hall"?2:o==="lights"?3:o==="cameras"?4:0}(new URLSearchParams(location.search).get("tab")),(o,a)=>{a.onclick=null;const[l,h,c]=a.children;console.log("init");const n=()=>{console.log("click"),store[1]||(c.classList.add("header__links-toggled"),store[1]=!0),(store[0]=!store[0])?(c.classList.add("header__links_opened"),h.children[0].textContent="Закрыть меню"):(c.classList.remove("header__links_opened"),h.children[0].textContent="Открыть меню")};h.contains(o.target)&&n(),h.onclick=n}];const D=["Все","Кухня","Зал","Лампочки","Камеры"],C=["all","kitchen","hall","lights","cameras"];function e(o,...a){const l=document.createElement(o);return l.classList.add(...a),l}function I(o,a){for(let l in a)o.setAttribute(l,a[l])}function d(o){const a=e("li","event");o.slim&&a.classList.add("event_slim");const l=e("button","event__button");a.appendChild(l);const h=e("span","event__icon","event__icon_"+o.icon),c=e("h4","event__title");if(c.textContent=o.title,l.append(h,c),o.subtitle){const n=e("span","event__subtitle");n.textContent=o.subtitle,l.appendChild(n)}return a}const E=()=>{const o=()=>{const n=e("h2","section__title","section__title-header","section__main-title");return n.textContent="Главное",n},a=()=>{const n=()=>{const r=e("h3","hero-dashboard__title");return r.textContent="Привет, Геннадий!",r},p=()=>{const r=e("p","hero-dashboard__subtitle");return r.textContent="Двери и окна закрыты, сигнализация включена.",r},f=r=>{const m=e("div","hero-dashboard__item-title");m.textContent="Дома";const u=e("div","hero-dashboard__item-details");u.textContent="+23",u.append(r());const t=e("li","hero-dashboard__item");return t.append(m,u),t},L=r=>{const m=()=>{const s=e("div","hero-dashboard__item-title");return s.textContent="За окном",s},u=()=>{const s=e("div","hero-dashboard__icon","hero-dashboard__icon_rain");return s.setAttribute("role","img"),s.setAttribute("aria-label","Дождь"),s},t=(s,g)=>{const v=e("div","hero-dashboard__item-details");return v.textContent="+19",v.append(s(),g()),v},i=e("li","hero-dashboard__item");return i.append(m(),t(r,u)),i},b=(r,m)=>{const u=()=>{const i=e("span","a11y-hidden");return i.textContent="°",i},t=e("ul","hero-dashboard__info");return t.append(r(u),m(u)),t},_=e("div","hero-dashboard__primary");return _.append(n(),p(),b(f,L)),_},l=()=>{const n=e("ul","hero-dashboard__schedule");return n.appendChild(d({icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"})),n.appendChild(d({icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})),n.appendChild(d({icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})),n},h=(n,p)=>{const f=e("div","hero-dashboard");return f.append(n(),p()),f},c=e("section","section","main__general");return c.append(o(),h(a,l)),c},P=()=>{const o=e("h2","section__title","section__title-header");o.textContent="Избранные сценарии";const a=e("ul","event-grid");a.appendChild(d({slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"})),a.appendChild(d({slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"})),a.appendChild(d({slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"})),a.appendChild(d({slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"})),a.appendChild(d({slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"}));const l=e("section","section","main__scripts");return l.append(o,a),l},M=()=>{const o=e("div","section__title"),a=e("h2","section__title-header");a.textContent="Избранные устройства";const l=(()=>{const t=e("select","section__select");t.setAttribute("defaultValue",store[2]);for(let i=0;i<5;i++){const s=document.createElement("option");s.setAttribute("value",i),s.textContent=D[i],t.append(s)}return t})(),h=e("ul","section__tabs");h.setAttribute("role","tablist");function c(t){const i=e("li","section__tab");return store[2]===t&&i.classList.add("section__tab_active"),I(i,{role:"tab","aria-selected":store[2]===t?"true":"false",tabindex:"0",id:"tab_"+C[t],"aria-controls":"panel_"+C[t]}),i.textContent=D[t],i}const n=[c(0),c(1),c(2),c(3),c(4)];h.append(n[0],n[1],n[2],n[3],n[4]),o.append(a,l,h);const p=e("div","section__panel-wrapper"),f=[()=>function(t){const i=new Array(512);for(let s=0;s<512;s++)i[s]=d(t[s%8]);return i}([{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]),()=>[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}].map(d),()=>[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}].map(d),()=>[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}].map(d),()=>[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}].map(d)];function L(t){const i=e("div","section__panel","section__panel_hidden");I(i,{role:"tabpanel","aria-hidden":t===store[2]?"false":"true","aria-labelledby":"tabs_"+C[t],id:"panel_"+C[t]});const s=e("ul","section__panel-list");return i.appendChild(s),t===store[2]&&(i.classList.remove("section__panel_hidden"),s.append(...f[t]())),[i,s]}const b=[L(0),L(1),L(2),L(3),L(4)],_=e("div","section__arrow");_.onclick=function(){const t=b[store[2]][0];t.scrollTo({left:t.scrollLeft+400,behavior:"smooth"})};function r(t){return b[t][1].scrollWidth>p.offsetWidth}p.append(b[0][0],b[1][0],b[2][0],b[3][0],b[4][0]),r(store[2])&&p.append(_);function m(t){if(t===store[2])return;const i=n[store[2]];i.setAttribute("aria-selected","false"),i.removeAttribute("tab-index"),i.classList.remove("section__tab_active");const s=n[t];s.setAttribute("aria-selected","true"),s.setAttribute("tab-index","0"),s.classList.add("section__tab_active");const[g,v]=b[store[2]];g.setAttribute("class","section__panel section__panel_hidden"),g.setAttribute("aria-hidden","true"),v.innerHTML="";const[A,x]=b[t];A.setAttribute("class","section__panel"),A.setAttribute("aria-hidden","false"),x.append(...f[t]());const S=r(t);!_.parentNode&&S?p.appendChild(_):S||_.remove(),store[2]=t}l.oninput=t=>{m(t.target.value)},document.addEventListener("click",t=>{for(let i in n)if(t.target===n[i]){m(i);return}});const u=e("section","section","main__devices");return u.append(o,p),[u,r,_,p]},[X,w,B,k]=M(),T=e("div","main");T.append(E(),P(),X);const W=document.getElementById("app");W.appendChild(T);setTimeout(()=>{w(store[2])&&k.append(B)});
