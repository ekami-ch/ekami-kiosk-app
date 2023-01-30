import{G as E,S as $,_ as F}from"./ekami128x128.88646b6f.js";import{$ as m,_ as B,Q as M}from"./QrCode.6aaa7f57.js";import{d as S,i as f,r as h,o as n,c as r,a as o,h as y,n as C,F as p,e as _,j as q,t as k,g,k as L,b as v,f as w}from"./index.a479a3c5.js";import{D as P}from"./DownloadableCanvasTicket.b3764349.js";const A=S({name:"FormNavigation",data(){return{recap:[],eventBus:f("eventBus")}},props:{formId:String,formClass:String,groupFields:Object,colors:Object,endMessage:String,thanksMessage:String,datepickerOptions:Object},computed:{cssProps(){var e,t,s,i;return{"--primary-color":(e=this.colors)==null?void 0:e.primary,"--secondary-color":(t=this.colors)==null?void 0:t.secondary,"--tertiary-color":(s=this.colors)==null?void 0:s.tertiary,"--quaternary-color":(i=this.colors)==null?void 0:i.quaternary}}},components:{GeneratorInputGroup:E},methods:{checkItem:function(){var t=m("#carouselForm");m(".carousel-inner .carousel-item:first").hasClass("active")?(t.children(".carousel-control-prev").hide(),t.children(".carousel-control-next").show()):m(".carousel-inner .carousel-item:last").hasClass("active")?(t.children(".carousel-control-next").hide(),t.children(".carousel-control-prev").show()):(t.children(".carousel-control-next").show(),t.children(".carousel-control-prev").show())},writeToRecap:function(){this.recap=[],document.querySelectorAll(".carousel-inner label").forEach(t=>{let s=document.querySelector("#"+t.htmlFor),i=s.value==""?t.innerText+" ?":s.value;this.recap.push(i)}),this.eventBus.emit("updateRecap",this.recap)},returnToBeggining:function(){var t;(t=document.getElementById("indicator0"))==null||t.click()}},mounted(){var e;this.eventBus=f("eventBus"),this.eventBus.on("returnToBeginning",this.returnToBeggining),document.querySelectorAll("input, select").forEach(t=>{["change","focus"].forEach(s=>{t.addEventListener(s,()=>{this.writeToRecap()})})}),this.checkItem(),(e=document.querySelector("#carouselForm"))==null||e.addEventListener("slid.bs.carousel",this.checkItem),m(".datepicker").datepicker(this.datepickerOptions)}}),I={class:"row"},O={class:"col-sm h-100",id:"form-div"},j=["id"],Q={id:"carouselForm",class:"carousel carousel-dark slide","data-bs-interval":"false","data-bs-wrap":"false"},N={class:"carousel-indicators mt-4"},G=["id","data-bs-slide-to","aria-label"],D=["id","data-bs-slide-to","aria-label"],V=["id","data-bs-slide-to","aria-label"],R={class:"carousel-inner"},x=["id"],z={id:"carousel-end",class:"carousel-item"},H={class:"container"},U={key:0,class:"fs-2 m-4 text-center"},Y={key:1,class:"fs-2 m-4 text-center"},J={class:"row d-flex justify-content-center"},W=o("button",{type:"button",class:"col-3 print-button m-2 fw-bold btn btn-kiosk ml-auto gx-1 btn-lg btn-success"},[o("span",{class:"fs-3"},[o("i",{class:"bi bi-person-check-fill"}),g(" Termin\xE9")])],-1),X=o("span",{class:"fs-3"},[o("i",{class:"fs-1bi bi-person-plus-fill"}),g(" Autre personne")],-1),Z=[X],K={key:0,class:"fs-3 m-4 text-center"},ee={key:1,class:"fs-3 m-4 text-center"},te=g(' Pour imprimer votre ticket, cliquez sur "Termin\xE9". '),oe=o("br",null,null,-1),se=g(` Pour d\xE9marrer la saisie d'une autre personne de votre famille (adresse identique), cliquez sur "Autre Personne". `),ne=[te,oe,se],re=L('<button class="carousel-control-prev" type="button" data-bs-target="#carouselForm" data-bs-slide="prev"><span class="text-dark" aria-hidden="true">\u279C</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselForm" data-bs-slide="next"><span class="text-dark" aria-hidden="true">\u279C</span></button><button type="button" class="fs-3 m-4 cancel-button fw-bold btn btn-kiosk btn-danger"><i class="bi bi-trash-fill"></i></button>',3);function ae(e,t,s,i,a,T){var d,u;const b=h("GeneratorInputGroup");return n(),r("div",I,[o("div",O,[o("form",{id:e.formId,class:y(e.formClass),style:C(e.cssProps)},[o("div",Q,[o("div",N,[(n(!0),r(p,null,_(e.groupFields,(l,c)=>(n(),r(p,{key:c},[c==0?(n(),r("button",{key:0,id:"indicator"+c,type:"button","data-bs-target":"#carouselForm","data-bs-slide-to":c,"aria-current":"true",class:"active","aria-label":"Part"+c},null,8,G)):(n(),r("button",{key:1,id:"indicator"+c,type:"button","data-bs-target":"#carouselForm","data-bs-slide-to":c,"aria-current":"true","aria-label":"Part"+c},null,8,D))],64))),128)),o("button",{id:"indicator"+Object.keys(e.groupFields).length,type:"button","data-bs-target":"#carouselForm","data-bs-slide-to":Object.keys(e.groupFields).length,"aria-current":"true","aria-label":"Part"+Object.keys(e.groupFields).length},null,8,V)]),o("div",R,[(n(!0),r(p,null,_(e.groupFields,(l,c)=>(n(),r("div",{key:c,id:l.id,class:y(l.class)},[q(b,{inputGroups:l.fields},null,8,["inputGroups"])],10,x))),128)),o("div",z,[o("div",H,[e.thanksMessage?(n(),r("p",U,k(e.thanksMessage),1)):(n(),r("p",Y,"Merci !")),o("div",J,[W,o("button",{type:"button",class:"col-3 print-add-button m-2 fw-bold btn btn-kiosk ml-auto gx-1 btn-lg",style:C({color:(d=e.colors)==null?void 0:d.secondary,backgroundColor:(u=e.colors)==null?void 0:u.primary}),onClick:t[0]||(t[0]=l=>e.returnToBeggining())},Z,4),e.endMessage?(n(),r("p",K,k(e.endMessage),1)):(n(),r("p",ee,ne))])])])]),re])],14,j)])])}var ie=B(A,[["render",ae]]);const ce=S({components:{FormNavigationMobile:ie,QrCode:M,DownloadableCanvasTicket:P},data(){return{eventBus:f("eventBus"),config:{},recap:[],isLoaded:!1}},methods:{downloadCanvas:function(){console.log("download");let t=document.querySelector("#lastname").value+" "+document.querySelector("#firstname").value+" "+document.querySelector("#birthdate").value,s=document.querySelector("#lastname").value+" "+document.querySelector("#firstname").value;this.eventBus.emit("generateAndDownloadQrCode",[t,s])},addAnotherPerson:function(){this.eventBus.emit("updateQrCode"),setTimeout(()=>{this.eventBus.emit("downloadQrCodeCanvas"),document.querySelectorAll("input").forEach(t=>{t.hasAttribute("resettable")&&(t.value="")})},1e3)},redirectToPlatform:function(t){switch(t.toLocaleLowerCase()){case"mobile":this.$router.push({name:"Mobile"});break;case"kiosk":this.$router.push({name:"Kiosk"});break;case"demo":this.$router.push({name:"Demo"});break}},printTicket:function(){this.eventBus.emit("updateQrCode"),setTimeout(()=>{this.eventBus.emit("downloadQrCodeCanvas"),window.location.reload()},1e3)},fetchConfigFile:function(t){fetch(t).then(s=>s.json()).then(s=>{this.config=s}).catch(s=>{var a;this.isLoaded=!0;let i=document.createElement("div");i.id="error_config",i.innerHTML="Invalid or Config File not found. Please check configuration file.",(a=document.querySelector("body"))==null||a.appendChild(i)})}},created(){this.fetchConfigFile("/config.json")},mounted(){this.eventBus=f("eventBus")},updated(){var e=this;if(!e.isLoaded){e.eventBus.on("updateRecap",function(a){e.recap=a});let s=new URLSearchParams(document.location.search.substring(1)),i=s.has("platform")?s.get("platform"):"mobile";this.redirectToPlatform(i),document.querySelectorAll(".print-button").forEach(function(a){a.addEventListener("click",function(){e.printTicket()})}),document.querySelectorAll(".print-add-button").forEach(function(a){a.addEventListener("click",function(){e.addAnotherPerson(),e.eventBus.emit("returnToBeginning")})}),document.querySelectorAll(".cancel-button").forEach(function(a){a.addEventListener("click",function(){window.location.reload()})});var t=document.querySelector(e.config.form.id);t==null||t.addEventListener("change",()=>{e.eventBus.emit("updateQrCode","test")}),t==null||t.addEventListener("keyup",()=>{e.eventBus.emit("updateQrCode","test")}),document.querySelectorAll(".slim-select").forEach(a=>{new $({select:"#"+a.id,showSearch:!1})}),e.isLoaded=!0}}}),le={class:"container-fluid vh-100",id:"main_container"},de={class:"nav justify-content-center"},ue=["src"],me={class:"bg-light align-items-center position-relative text-center",id:"utility_container"},he={class:"w-100 p-2",id:"recap_div"},pe=o("h4",{class:"fw-bold"},"Your information",-1),fe=o("div",{class:"w-100 text-muted align-items-center position-fixed text-center",id:"copyright"},[o("img",{height:"32",width:"32",src:F,id:"copyright_logo"}),o("a",null," EKAMI SA (Gen\xE8ve)")],-1);function ge(e,t,s,i,a,T){const b=h("FormNavigationMobile"),d=h("QrCode"),u=h("DownloadableCanvasTicket");return n(),r("main",null,[o("div",le,[o("div",de,[e.config.companyLogo!=""?(n(),r("img",{key:0,class:"img-fluid pt-5 mt-5",id:"company_logo",src:e.config.companyLogo},null,8,ue)):v("",!0)]),o("div",me,[o("div",he,[pe,(n(!0),r(p,null,_(e.recap,(l,c)=>(n(),r("p",{key:c},k(l),1))),128))])]),e.config.form?(n(),w(b,{key:0,formId:e.config.form.id,formClass:e.config.form.class,groupFields:e.config.form.fieldGroups,colors:e.config.colors,thanksMessage:e.config.form.thanksMessage,endMessage:e.config.form.endMessage,datepickerOptions:e.config.datepickerOptions},null,8,["formId","formClass","groupFields","colors","thanksMessage","endMessage","datepickerOptions"])):v("",!0),e.config.qrOptions?(n(),w(d,{key:1,qrOptions:e.config.qrOptions,context:e.config.context,qrCodeId:"qrcode"},null,8,["qrOptions","context"])):v("",!0),q(u),fe])])}var ye=B(ce,[["render",ge]]);export{ye as default};
