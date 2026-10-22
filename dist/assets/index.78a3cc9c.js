var ge=Object.defineProperty;var ve=(e,t,s)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var q=(e,t,s)=>(ve(e,typeof t!="symbol"?t+"":t,s),s),ee=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var i=(e,t,s)=>(ee(e,t,"read from private field"),s?s.call(e):t.get(e)),u=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},c=(e,t,s,n)=>(ee(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();var D,N,_,j,H;class he{constructor(t){u(this,D,void 0);u(this,N,void 0);u(this,_,void 0);u(this,j,void 0);u(this,H,void 0);c(this,D,t.developer),c(this,N,t.name),c(this,j,t.organization),c(this,_,t.title),c(this,H,t.version)}close(){document.getElementById("about-modal").remove()}current_year(){return new Date().getFullYear()}show(){document.getElementById("app").insertAdjacentHTML("beforeend",this.render()),document.getElementById("about-modal-close").addEventListener("click",this.close)}render(){return`
            <div class="modal is-active" id="about-modal">
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">${i(this,_)}</p>
                        <button
                            class="delete"
                            aria-label="close"
                            id="about-modal-close">
                        </button>
                    </header>
                    <section class="modal-card-body has-text-centered">
                        <h3 class="title is-3 has-text-link">${i(this,N)}</h3>
                        <h5 class="subtitle is-5">Version ${i(this,H)}</h5>
                        <h6 class="subtitle is-6">
                            <span class="has-text-link">
                                - Created using -
                            </span>
                            <br>
                            Html \u2726 Css \u2726 Javascript \u2726 Bulma
                        </h6>
                        <h6 class="subtitle is-6">
                            <span class="has-text-link">
                                - Developer -
                            </span>
                            <br>
                            ${i(this,D)}
                        </h6>
                    </section>
                    <footer
                        class="modal-card-foot is-flex is-justify-content-center">
                        <h6 class="subtitle is-6">
                            All rights reserved &copy;
                            ${i(this,j)} ${this.current_year()}
                        </h6>
                    </footer>
                </div>
            </div>
        `}}D=new WeakMap,N=new WeakMap,_=new WeakMap,j=new WeakMap,H=new WeakMap;class ke{static render(){return`
            <div class="columns p-0 m-0">
                <div
                    class="column no-padding-right is-5-tablet
                        is-4-desktop is-3-widescreen">
                    <nav id="groups-panel" class="panel is-shadowless">
                        <p class="panel-heading is-radiusless
                                is-flex is-justify-content-space-between">
                            <span class="is-flex is-align-items-center">
                                <span>Groups</span>
                                <span class="material-icons arrow
                                            ml-1 has-text-weight-bold">
                                    expand_less
                                </span>
                            </span>
                            <span
                                id="groups-count"
                                class="tag is-dark is-pulled-right">
                                0
                            </span>
                        </p>
                    </nav>
                </div>
                <div class="column">
                    <nav id="tasks-panel" class="panel is-shadowless">
                        <p class="panel-heading is-radiusless
                                is-flex is-justify-content-space-between">
                            <span class="is-flex is-align-items-center">
                                <span>Tasks</span>
                                <span class="material-icons arrow ml-1
                                            has-text-weight-bold">
                                    expand_less
                                </span>
                            </span>
                            <span
                                id="tasks-count"
                                class="tag is-dark is-pulled-right">
                                0
                            </span>
                        </p>
                    </nav>
                </div>
            </div>
        `}}let O;const be=new Uint8Array(16);function fe(){if(!O&&(O=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!O))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return O(be)}const m=[];for(let e=0;e<256;++e)m.push((e+256).toString(16).slice(1));function ye(e,t=0){return(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase()}const Ee=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),te={randomUUID:Ee};function ae(e,t,s){if(te.randomUUID&&!t&&!e)return te.randomUUID();e=e||{};const n=e.random||(e.rng||fe)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){s=s||0;for(let a=0;a<16;++a)t[s+a]=n[a];return t}return ye(n)}var f,y,C,T;class we{constructor(t){u(this,f,void 0);u(this,y,void 0);u(this,C,void 0);u(this,T,void 0);c(this,f,!1),c(this,y,t),c(this,C,[]),c(this,T,"group-"+ae())}get active(){return i(this,f)}set active(t){c(this,f,t)}get name(){return i(this,y)}set name(t){c(this,y,t)}get tasks(){return i(this,C)}get uuid(){return i(this,T)}toJSON(){return{uuid:i(this,T),name:i(this,y),tasks:i(this,C),active:i(this,f)}}}f=new WeakMap,y=new WeakMap,C=new WeakMap,T=new WeakMap;class h{constructor(){q(this,"message");q(this,"timout");q(this,"timer");q(this,"type")}static close(){document.getElementById("notify-box").remove()}static show(t,s="success"){this.message=t,this.timeout=2e3,this.type=s,document.getElementById("app").insertAdjacentHTML("beforeend",this.render()),document.getElementById("notify-box-close").addEventListener("click",()=>{clearTimeout(this.timer),this.close()}),this.timer=setTimeout(()=>{this.close()},this.timeout)}static render(){return`
            <div
                class="notification is-${this.type}"
                id="notify-box">
                <button 
                    class="delete"
                    id="notify-box-close">
                </button>
                ${this.message}
            </div>
        `}}var b,E,A;class ne{constructor(t,s){u(this,b,void 0);u(this,E,void 0);u(this,A,void 0);c(this,b,s),c(this,E,t),i(this,E)?c(this,A,"Edit group"):c(this,A,"Add group")}apply(t){const s=document.getElementById("group-modal-input"),n=s.value.trim();if(n)if(Te(n))h.show("There is a group with the same name.","warning");else{const a=document.getElementById("groups-panel"),l=document.getElementById("groups-count");if(t)i(this,b)[U(p().uuid)].name=n,h.show("The group name has been modified.");else{const r=new we(n);i(this,b).length===0&&(r.active=!0,K()),i(this,b).push(r),h.show("A new group has been added.")}k(),de(),pe(),a.insertAdjacentHTML("beforeend",ue()),z(p().uuid),l.textContent=i(this,b).length,re(),this.close()}else s.value="",s.focus(),h.show("Fill in the group name.","danger")}close(){document.getElementById("group-modal").remove()}show(){document.getElementById("app").insertAdjacentHTML("beforeend",this.render());const s=document.querySelectorAll(".group-modal-close"),n=document.getElementById("group-modal-apply"),a=document.getElementById("group-modal-input");if(s.forEach(l=>{l.addEventListener("click",this.close)}),n.addEventListener("click",()=>{this.apply(i(this,E))}),a.addEventListener("keyup",l=>{l.key==="Enter"&&(l.preventDefault(),n.click())}),i(this,E)){const l=p();a.value=l.name}a.focus()}render(){return`
            <div class="modal is-active" id="group-modal">
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">${i(this,A)}</p>
                        <button
                            class="delete group-modal-close"
                            aria-label="close">
                        </button>
                    </header>
                    <section class="modal-card-body">
                        <div class="field">
                            <label class="label">Group name:</label>
                            <div class="control">
                                <input
                                    id="group-modal-input"
                                    class="input"
                                    type="text">
                            </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button
                            id="group-modal-apply"
                            class="button is-link">
                            Apply
                        </button>
                        <button class="button group-modal-close">Cancel</button>
                    </footer>
                </div>
            </div>
        `}}b=new WeakMap,E=new WeakMap,A=new WeakMap;class xe{static render(t){return`
            <nav
                class="navbar is-fixed-top is-link"
                role="navigation"
                aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <span class="material-icons mr-3 md-36">
                            add_task
                        </span>
                        <h4 class="has-text-weight-bold is-size-4">
                            ${t}
                        </h4>
                    </a>
                    <a
                        role="button"
                        class="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarMain">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarMain" class="navbar-menu">
                    <div class="navbar-start">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                <span class="material-icons mr-2">
                                    view_agenda
                                </span>
                                <span>Group</span>
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">Add new group</a>
                                <a class="navbar-item is-disable">
                                    Edit current group
                                </a>
                                <a class="navbar-item is-disable">
                                    Delete current group
                                </a>
                                <hr class="navbar-divider">
                                <a class="navbar-item is-disable">
                                    Clear all groups
                                </a>
                            </div>
                        </div>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                <span class="material-icons mr-2">
                                    task
                                </span>
                                <span>Task</span>
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item is-disable">
                                    Add new task
                                </a>
                                <a class="navbar-item is-disable">
                                    Edit current task
                                </a>
                                <a class="navbar-item is-disable">
                                    Delete current task
                                </a>
                                <hr class="navbar-divider">
                                <a class="navbar-item is-disable">
                                    Clear all tasks
                                </a>
                            </div>
                        </div>
                        <a
                            class="navbar-item navbar-item-one"
                            id="settings-button">
                            <span class="material-icons mr-2">
                                settings
                            </span>
                            <span>Settings</span>
                        </a>
                        <a
                            class="navbar-item navbar-item-one"
                            id="about-button">
                            <span class="material-icons mr-2">
                                help
                            </span>
                            <span>About</span>
                        </a>
                    </div>
                    <div class="navbar-end">
                        <a
                            class="navbar-item has-tooltip-left is-disable"
                            data-tooltip="First page">
                            <span class="material-icons">first_page</span>
                        </a>
                        <a
                            class="navbar-item has-tooltip-left is-disable"
                            data-tooltip="Previous page">
                            <span class="material-icons">navigate_before</span>
                        </a>
                        <span
                            id="pagination"
                            class="navbar-item has-text-white
                                has-background-link is-medium is-disable">
                            0 of 0
                        </span>
                        <a
                            class="navbar-item has-tooltip-left is-disable"
                            data-tooltip="Next page">
                            <span class="material-icons">navigate_next</span>
                        </a>
                        <a
                            class="navbar-item has-tooltip-left is-disable"
                            data-tooltip="Last page">
                            <span class="material-icons">last_page</span>
                        </a>
                    </div>
                </div>
            </nav>
        `}}var w;class Ie{constructor(t){u(this,w,void 0);c(this,w,t)}apply(){const t=document.getElementById("pages-number");t.value>0&&t.value<51?(i(this,w).tasksPerPage=Number(t.value),k(),M(),this.close(),h.show("Settings have been saved.")):(t.value=i(this,w).tasksPerPage,t.focus(),h.show("Enter a value from 1 to 50.","danger"))}close(){document.getElementById("settings-modal").remove()}show(){document.getElementById("app").insertAdjacentHTML("beforeend",this.render());const s=document.querySelectorAll(".settings-modal-close"),n=document.getElementById("settings-modal-apply");s.forEach(a=>{a.addEventListener("click",this.close)}),n.addEventListener("click",()=>{this.apply()})}render(){return`
            <div class="modal is-active" id="settings-modal">
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Settings</p>
                        <button
                            class="delete settings-modal-close"
                            aria-label="close">
                        </button>
                    </header>
                    <section class="modal-card-body">
                        <div class="field">
                            <label
                                class="label">
                                Number of tasks per page (maximum 50):
                            </label>
                            <div class="control">
                                <input
                                    id="pages-number"
                                    class="input"
                                    type="number"
                                    min="0"
                                    max="50"
                                    step="5"
                                    value="${i(this,w).tasksPerPage}">
                            </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button
                            id="settings-modal-apply"
                            class="button is-link">
                            Apply
                        </button>
                        <button
                            class="button settings-modal-close">
                            Cancel
                        </button>
                    </footer>
                </div>
            </div>
        `}}w=new WeakMap;var x,B,I,L,S;class Le{constructor(t,s){u(this,x,void 0);u(this,B,void 0);u(this,I,void 0);u(this,L,void 0);u(this,S,void 0);c(this,x,!1),c(this,B,new Date().toLocaleString()),c(this,I,s),c(this,L,t),c(this,S,"task-"+ae())}get active(){return i(this,x)}set active(t){c(this,x,t)}get created(){return i(this,B)}get message(){return i(this,I)}set message(t){c(this,I,t)}get title(){return i(this,L)}set title(t){c(this,L,t)}get uuid(){return i(this,S)}toJSON(){return{uuid:i(this,S),title:i(this,L),message:i(this,I),created:i(this,B),active:i(this,x)}}}x=new WeakMap,B=new WeakMap,I=new WeakMap,L=new WeakMap,S=new WeakMap;var P,G;class oe{constructor(t){u(this,P,void 0);u(this,G,void 0);c(this,P,t),i(this,P)?c(this,G,"Edit task"):c(this,G,"Add task")}apply(t){const s=document.getElementById("task-modal-input"),n=document.getElementById("task-modal-textarea"),a=s.value.trim(),l=n.value.trim();if(a&&l){if(t){const r=$(),v=p(),X=J(r.uuid);v.tasks[X].title=a,v.tasks[X].message=l,k(),document.querySelector(`#${r.uuid} .title`).textContent=a,document.querySelector(`#${r.uuid} .content`).textContent=l,h.show("The task has been modified.")}else{const r=new Le(a,l);document.getElementById("tasks-panel"),document.getElementById("tasks-count");const v=p();v.tasks.length===0&&(r.active=!0),v.tasks.push(r),k(),R(),h.show("A new task has been added.")}this.close()}else!a&&l?(s.value="",s.focus()):a&&!l?(n.value="",n.focus()):(n.value="",s.value="",s.focus()),h.show("Fill in all the required fields.","danger")}close(){document.getElementById("task-modal").remove()}show(){document.getElementById("app").insertAdjacentHTML("beforeend",this.render());const s=document.querySelectorAll(".task-modal-close"),n=document.getElementById("task-modal-apply"),a=document.getElementById("task-modal-input"),l=document.getElementById("task-modal-textarea");if(a.value="",l.value="",s.forEach(r=>{r.addEventListener("click",this.close)}),n.addEventListener("click",()=>{this.apply(i(this,P))}),a.addEventListener("keyup",r=>{r.key==="Enter"&&(r.preventDefault(),n.click())}),i(this,P)){const r=$();a.value=r.title,l.value=r.message}a.focus()}render(){return`
            <div class="modal is-active" id="task-modal">
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">${i(this,G)}</p>
                        <button
                            class="delete task-modal-close"
                            aria-label="close">
                        </button>
                    </header>
                    <section class="modal-card-body">
                        <div class="field">
                            <label class="label">Task title:</label>
                            <div class="control">
                                <input
                                    id="task-modal-input"
                                    class="input"
                                    type="text">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Task message:</label>
                            <div class="control">
                                <textarea
                                    id="task-modal-textarea"
                                    class="textarea">
                                </textarea>
                            </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button
                            id="task-modal-apply"
                            class="button is-link">
                            Apply
                        </button>
                        <button class="button task-modal-close">Cancel</button>
                    </footer>
                </div>
            </div>
        `}}P=new WeakMap,G=new WeakMap;let d=[];const o={pagesCount:0,currentPage:0,tasksPerPage:5},ie={developer:"Zagirov Abdul Askerovich",name:"MyTasks",organization:"NETCON",title:"About",version:"0.5.5"},V={add:0,edit:1};Ce();const le=document.getElementById("app");le.insertAdjacentHTML("beforeend",xe.render(ie.name));le.insertAdjacentHTML("beforeend",ke.render());const ce=document.getElementById("groups-panel"),Y=document.querySelector("#groups-panel .arrow"),Pe=document.getElementById("tasks-panel"),Z=document.querySelector("#tasks-panel .arrow");ce.addEventListener("click",e=>{e.stopPropagation(),Se(),Y.textContent.trim()==="expand_less"?Y.textContent="expand_more":Y.textContent="expand_less"});Pe.addEventListener("click",e=>{e.stopPropagation(),Me(),Z.textContent.trim()==="expand_less"?Z.textContent="expand_more":Z.textContent="expand_less"});if(d.length>0){const e=document.getElementById("groups-count"),t=p();de(),ce.insertAdjacentHTML("beforeend",ue()),z(t.uuid),e.textContent=d.length,re(),t.tasks.length>0&&M(),K()}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".navbar-burger"),t=document.getElementById("settings-button"),s=document.getElementById("about-button"),n=Array.from(document.querySelectorAll("a.navbar-item"));e.addEventListener("click",()=>{const a=document.getElementById(e.dataset.target);e.classList.toggle("is-active"),a.classList.toggle("is-active")}),t.addEventListener("click",Je),s.addEventListener("click",Fe),n.forEach(a=>{switch(a.textContent.trim()){case"Add new group":a.addEventListener("click",qe);break;case"Edit current group":a.addEventListener("click",De);break;case"Delete current group":a.addEventListener("click",Ne);break;case"Clear all groups":a.addEventListener("click",_e);break;case"Add new task":a.addEventListener("click",je);break;case"Edit current task":a.addEventListener("click",He);break;case"Delete current task":a.addEventListener("click",Oe);break;case"Clear all tasks":a.addEventListener("click",Ue);break;case"first_page":a.addEventListener("click",Ve);break;case"navigate_before":a.addEventListener("click",ze);break;case"navigate_next":a.addEventListener("click",Re);break;case"last_page":a.addEventListener("click",Ke);break}})});function Ce(){d=JSON.parse(localStorage.getItem("localDB"))||[];const e=JSON.parse(localStorage.getItem("tasksPerPage"))||0;e>0&&(o.tasksPerPage=e)}function k(){localStorage.setItem("localDB",JSON.stringify(d)),localStorage.setItem("tasksPerPage",JSON.stringify(o.tasksPerPage))}function re(){d.forEach(e=>{document.getElementById(e.uuid).addEventListener("click",t=>{t.stopPropagation(),Q(e.uuid)})})}function Te(e){return d.filter(s=>s.name===e).length>0}function de(){d=d.sort((e,t)=>{const s=e.name.toLowerCase(),n=t.name.toLowerCase();return s<n?-1:s>n?1:0})}function ue(){return d.reduce((e,t)=>(e+=`
            <a
                id="${t.uuid}"
                class="panel-block is-radiusless">
                ${t.name}
            </a>
        `,e),"")}function p(){const e=d.filter(t=>t.active);return e.length>0?e[0]:!1}function U(e){for(let t=0;t<d.length;t++)if(d[t].uuid===e)return t;return-1}function z(e){const t=document.getElementById(e)||null;t&&t.classList.add("has-background-link","has-text-white")}function Ae(){const e=document.getElementById(p().uuid)||null;e&&e.classList.remove("has-background-link","has-text-white")}function Be(e){d[U(p().uuid)].active=!1,d[U(e)].active=!0}function Q(e){o.currentPage=0,o.pagesCount=0,Ae(),z(e),Be(e),R(),k()}function Se(){Array.from(document.querySelectorAll("#groups-panel a")).forEach(t=>{t.style.display=="block"||t.style.display==""?t.style.display="none":t.style.display="block"})}function pe(){const e=document.querySelector("#groups-panel .panel-heading");[...e.parentElement.children].filter(s=>s!==e).forEach(s=>{s.remove()}),document.getElementById("groups-count").textContent="0"}function $(){const e=p();if(e&&e.tasks.length>0){for(const t of e.tasks)if(t.active)return t}return!1}function J(e){const t=p();if(t&&t.tasks.length>0){for(let s=0;s<t.tasks.length;s++)if(t.tasks[s].uuid===e)return s}return-1}function Ge(e){const t=document.getElementById(e),s=document.querySelector(`#${e} .card-content`),n=document.querySelector(`#${e} .title`),a=document.querySelector(`#${e} .subtitle`),l=document.querySelector(`#${e} .content`);t.classList.add("has-background-link"),s.classList.add("has-background-link"),n.classList.add("has-text-white"),a.classList.add("has-text-white"),l.classList.add("has-text-white")}function $e(){const e=$(),t=document.getElementById(e.uuid)||null;if(t){const s=document.querySelector(`#${e.uuid} .card-content`),n=document.querySelector(`#${e.uuid} .title`),a=document.querySelector(`#${e.uuid} .subtitle`),l=document.querySelector(`#${e.uuid} .content`);t.classList.remove("has-background-link"),s.classList.remove("has-background-link"),n.classList.remove("has-text-white"),a.classList.remove("has-text-white"),l.classList.remove("has-text-white")}}function F(e){const t=p();t.tasks[J($().uuid)].active=!1,t.tasks[J(e)].active=!0}function se(e){$e(),Ge(e),F(e),k()}function Me(){Array.from(document.querySelectorAll("#tasks-panel a")).forEach(t=>{t.style.display=="block"||t.style.display==""?t.style.display="none":t.style.display="block"})}function W(){const e=document.querySelector("#tasks-panel .panel-heading");[...e.parentElement.children].filter(s=>s!==e).forEach(s=>{s.remove()}),document.getElementById("tasks-count").textContent="0"}function me(){const e=p();if(e){e.tasks.length<=o.tasksPerPage?(o.pagesCount=1,o.currentPage=1):(o.pagesCount=Math.ceil(e.tasks.length/o.tasksPerPage),o.currentPage>o.pagesCount&&(o.currentPage=o.pagesCount)),o.currentPage===0&&(o.currentPage=1);const t=o.currentPage*o.tasksPerPage-o.tasksPerPage,s=t+o.tasksPerPage;return e.tasks.slice(t,s)}return[]}function M(){const e=me();e.length>0&&(F(e[0].uuid),R())}function R(){const e=p(),t=document.getElementById("pagination");if(e){if(W(),e.tasks.length>0){const s=document.getElementById("tasks-panel"),n=document.getElementById("tasks-count"),a=me(),l=a.reduce((r,v)=>(r+=`
                    <a id="${v.uuid}" class="panel-block is-radiusless">
                        <div class="card is-shadowless">
                            <div class="card-content is-radiusless">
                                <div class="media">
                                    <div class="media-content">
                                        <p
                                            class="title is-4">
                                            ${v.title}
                                        </p>
                                        <p class="subtitle is-6">
                                            <time
                                                datetime="${v.created}">
                                                ${v.created}
                                            </time>
                                        </p>
                                    </div>
                                </div>
                                <div class="content">${v.message}</div>
                            </div>
                        </div>
                    </a>
                `,r),"");s.insertAdjacentHTML("beforeend",l),se(a[0].uuid),n.textContent=e.tasks.length,a.forEach(r=>{document.getElementById(r.uuid).addEventListener("click",v=>{v.stopPropagation(),se(r.uuid)})})}else o.currentPage=0,o.pagesCount=0;t.textContent=`
            ${o.currentPage} of ${o.pagesCount}
        `}}function g(){document.querySelector(".navbar-burger").click()}function qe(){g(),new ne(V.add,d).show()}function De(){g(),p()&&new ne(V.edit,d).show()}function Ne(){if(g(),p()){const e=p().uuid,t=U(e),s=document.getElementById("groups-count");d.length>1?d[t-1]?Q(d[t-1].uuid):Q(d[t+1].uuid):K(),d.splice(t,1),k(),document.getElementById(e).remove(),s.textContent=d.length,z(p().uuid),h.show("The group has been deleted.")}}function _e(){if(g(),d.length>0){const e=document.getElementById("pagination");localStorage.clear(),d=[],pe(),W(),o.currentPage=0,o.pagesCount=0,e.textContent=`
            ${o.currentPage} of ${o.pagesCount}
        `,K(),h.show("All groups have been deleted.")}}function je(){g(),p()&&new oe(V.add).show()}function He(){g(),$()&&new oe(V.edit).show()}function Oe(){g();const e=p();if(e&&e.tasks.length>0){const t=$().uuid,s=J(t),n=document.getElementById("tasks-count");e.tasks.length>1&&(e.tasks[s-1]?F(e.tasks[s-1].uuid):F(e.tasks[s+1].uuid)),e.tasks.splice(s,1),k(),document.getElementById(t).remove(),n.textContent=e.tasks.length,R(),h.show("The task has been deleted.")}}function Ue(){g();const e=p();if(e&&e.tasks.length>0){const t=document.getElementById("pagination");e.tasks.length=0,k(),W(),o.currentPage=0,o.pagesCount=0,t.textContent=`
            ${o.currentPage} of ${o.pagesCount}
        `,h.show("All tasks have been deleted.")}}function Je(){g(),new Ie(o).show()}function Fe(){g(),new he(ie).show()}function Ve(){g(),o.pagesCount>0&&(o.currentPage=1,M())}function ze(){g(),o.currentPage>1&&(o.currentPage-=1,M())}function Re(){g(),o.currentPage<o.pagesCount&&(o.currentPage+=1,M())}function Ke(){g(),o.pagesCount>0&&(o.currentPage=o.pagesCount,M())}function K(){const e=document.querySelectorAll(".navbar-start .navbar-dropdown .navbar-item"),t=document.querySelectorAll(".navbar-end .navbar-item");[...e,...t].forEach(n=>{n.textContent.trim()!=="Add new group"&&(n.classList.contains("is-disable")?n.classList.remove("is-disable"):n.classList.add("is-disable"))})}
