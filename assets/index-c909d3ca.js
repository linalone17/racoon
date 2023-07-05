(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();function $(e){const t=document.createElement("header");return t.setAttribute("class","header"),t.innerHTML=`
        <a href="/" class="header__logo" aria-label="Яндекс.Дом"></a>
        <button 
            class="header__menu"
            aria-expanded="${e.expanded?"true":"false"}" 
        >
            <span class="header__menu-text a11y-hidden">${e.expanded?"Закрыть меню":"Открыть меню"}</span>
        </button>
        <ul class="${"header__links"+(e.expanded?" header__links_opened":"")+(e.toggled?" header__links-toggled":"")}">
            <li class="header__item">
                <a class="header__link header__link_current" href="/" aria-current="page">Сводка</a>
            </li>
            <li class="header__item">
                <a class="header__link" href="/devices">Устройства</a>
            </li>
            <li class="header__item">
                <a class="header__link" href="/scripts">Сценарии</a>
            </li>
        </ul>
    `,t}const h={expanded:!1,toggled:!1};function S(e){const t=e.querySelector(".header__links");function s(){toggled||(h.toggled=!0),h.expanded=!h.expanded,t.setAttribute("class","header__links"+(props.expanded?" header__links_opened":"")+(props.toggled?" header__links-toggled":""))}e.querySelector(".header__menu").addEventListener("click",s)}function E(e){const t=$(h);return e.appendChild(t),S(t),t}function y(e){const t=document.createElement("li");return t.setAttribute("class","event"+(e.slim?" event_slim":"")),t.innerHTML=`
        <button class="event__button">
            <span 
                class="${`event__icon event__icon_${e.icon}`}"
                role="img" 
                aria-label="${e.iconLabel}"
            ></span>
            <h4 class="event__title">${e.title}</h4>
            ${e.subtitle?`<span class="event__subtitle">${e.subtitle}</span>`:""}
        </button>
    `,t}function b(e){return y(e)}const r={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let e=0;e<6;++e)r.all.items=[...r.all.items,...r.all.items];const p=Object.keys(r);function A(e){const{activeTab:t}=e,s=document.createElement("main");s.setAttribute("class","main"),s.innerHTML=`
    <section class="section main__general">
        <h2 class="section__title section__title-header section__main-title">Главное</h2>
        <div class="hero-dashboard">
            <div class="hero-dashboard__primary">
                <h3 class="hero-dashboard__title">Привет, Геннадий!</h3>
                <p class="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p>
                <ul class="hero-dashboard__info">
                    <li class="hero-dashboard__item">
                        <div class="hero-dashboard__item-title">Дома</div>
                        <div class="hero-dashboard__item-details">
                            +23
                            <span class="a11y-hidden">°</span>
                        </div>
                    </li>
                    <li class="hero-dashboard__item">
                        <div class="hero-dashboard__item-title">За окном</div>
                        <div class="hero-dashboard__item-details">
                            +19
                            <span class="a11y-hidden">°</span>

                            <div
                                class="hero-dashboard__icon hero-dashboard__icon_rain"
                                role="img"
                                aria-label="Дождь"
                            ></div>
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="hero-dashboard__schedule"></ul>
        </div>
    </section>

    <section class="section main__scripts">
        <h2 class="section__title section__title-header">Избранные сценарии</h2>

        <ul class="event-grid"></ul>
    </section>

    <section class="section main__devices">
        <div class="section__title">
            <h2 class="section__title-header">
                Избранные устройства
            </h2>

            <select class="section__select" defaultvalue="all">
                ${p.map(l=>`<option data-key="${l}" value="${l}">
                        ${r[l].title}
                    </option>`).join("")}
            </select>

            <ul role="tablist" class="section__tabs">
                ${p.map(l=>`<li
                        data-key="${l}"
                        role="tab"
                        aria-selected="${l===t?"true":"false"}"
                        tabindex="${l===t?"0":void 0}"
                        class="${"section__tab"+(l===t?" section__tab_active":"")}"
                        id="${`tab_${l}`}"
                        aria-controls="${`panel_${l}`}">
                        ${r[l].title}
                    </li>`).join("")}
            </ul>
        </div>

        <div class="section__panel-wrapper">
            ${p.map(l=>`<div 
                    data-key="${l}" 
                    role="tabpanel" 
                    class="${"section__panel"+(l===t?"":" section__panel_hidden")}" 
                    aria-hidden="${l===t?"false":"true"}" 
                    id="${`panel_${l}`}" 
                    aria-labelledby="${`tab_${l}`}">
                    <ul class="section__panel-list"></ul>
                </div>`).join("")}
            
        </div>
    </section>
    `;const n=s.querySelector("ul.hero-dashboard__schedule");[{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"},{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}].forEach(l=>{n.appendChild(b(l))});const a=s.querySelector(".main__scripts .event-grid");[{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"},{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"},{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"},{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"},{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"}].forEach(l=>{a.appendChild(b(l))});const d=s.querySelector(`#panel_${t} .section__panel-list`);return r[t].items.map(l=>{d.appendChild(b(l))}),s}const o={activeTab:null,hasRightScroll:null};function P(){const e=new URLSearchParams(location.search).get("tab");o.activeTab=p.includes(e)?e:"all",o.hasRightScroll=!1}function T(e){const t=e.querySelector(".section__tabs");function s(i){if(i===o.activeTab)return;const a=t.querySelector(`#tab_${o.activeTab}`);a.setAttribute("aria-selected","false"),a.removeAttribute("tab-index"),a.classList.remove("section__tab_active");const c=t.querySelector(`#tab_${i}`);c.setAttribute("aria-selected","true"),c.setAttribute("tab-index","0"),c.classList.add("section__tab_active");const d=e.querySelector(`#panel_${o.activeTab}`);d.setAttribute("class","section__panel section__panel_hidden"),d.setAttribute("aria-hidden","true");const l=d.querySelector(".section__panel-list");l.innerHTML="";const u=e.querySelector(`#panel_${i}`);u.setAttribute("class","section__panel"),u.setAttribute("aria-hidden","false");const v=u.querySelector(".section__panel-list");r[i].items.forEach(_=>{v.appendChild(b(_))});const m=e.querySelector(".section__panel-wrapper"),f=m.querySelector(".section__arrow"),g=v.scrollWidth>m.offsetWidth;if(!f&&g){const _=document.createElement("div");_.setAttribute("class","section__arrow"),_.onclick=()=>{u.scrollTo({left:u.scrollLeft+400,behavior:"smooth"})},m.appendChild(_)}else f&&!g&&f.remove();o.activeTab=i}t.childNodes.forEach(i=>{i.addEventListener("click",a=>{s(a.currentTarget.dataset.key)})});const n=e.querySelector(".section__select");n.oninput=i=>{s(i.target.value)}}function q(e){const t=e.querySelector(`#panel_${o.activeTab}`),s=t.querySelector(".section__panel-list"),n=e.querySelector(".section__panel-wrapper");if(s.scrollWidth>n.offsetWidth){const i=document.createElement("div");i.setAttribute("class","section__arrow"),i.onclick=()=>{t.scrollTo({left:t.scrollLeft+400,behavior:"smooth"})},n.appendChild(i)}}function M(e){P();const t=A(o);e.appendChild(t),q(t),T(t)}const L=document.querySelector("#app");E(L);M(L);
