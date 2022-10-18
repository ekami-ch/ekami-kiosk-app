import{G as E,_ as F}from"./ekami128x128.e66be43a.js";import{$ as u,_ as B,Q as M}from"./QrCode.51241902.js";import{d as q,i as m,r as b,o as n,c as r,a as o,n as _,b as k,F as f,e as y,f as T,t as w,g as p,h as L,j as g,k as C}from"./index.f0887af9.js";const $=q({name:"FormNavigation",data(){return{recap:[],eventBus:m("eventBus")}},props:{formId:String,formClass:String,groupFields:Object,colors:Object,endMessage:String,thanksMessage:String,datepickerOptions:Object},computed:{cssProps(){var e,t,s,i;return{"--primary-color":(e=this.colors)==null?void 0:e.primary,"--secondary-color":(t=this.colors)==null?void 0:t.secondary,"--tertiary-color":(s=this.colors)==null?void 0:s.tertiary,"--quaternary-color":(i=this.colors)==null?void 0:i.quaternary}}},components:{GeneratorInputGroup:E},methods:{checkItem:function(){var t=u("#carouselForm");u(".carousel-inner .carousel-item:first").hasClass("active")?(t.children(".carousel-control-prev").hide(),t.children(".carousel-control-next").show()):u(".carousel-inner .carousel-item:last").hasClass("active")?(t.children(".carousel-control-next").hide(),t.children(".carousel-control-prev").show()):(t.children(".carousel-control-next").show(),t.children(".carousel-control-prev").show())},writeToRecap:function(){this.recap=[],document.querySelectorAll(".carousel-inner label").forEach(t=>{let s=document.querySelector("#"+t.htmlFor),i=s.value==""?t.innerText+" ?":s.value;this.recap.push(i)}),this.eventBus.emit("updateRecap",this.recap)},returnToBeggining:function(){var t;(t=document.getElementById("indicator0"))==null||t.click()}},mounted(){var e;this.eventBus=m("eventBus"),this.eventBus.on("returnToBeginning",this.returnToBeggining),document.querySelectorAll("input, select").forEach(t=>{["change","focus"].forEach(s=>{t.addEventListener(s,()=>{this.writeToRecap()})})}),this.checkItem(),(e=document.querySelector("#carouselForm"))==null||e.addEventListener("slid.bs.carousel",this.checkItem),u(".datepicker").datepicker(this.datepickerOptions)}}),P={class:"row"},A={class:"col-sm h-100",id:"form-div"},I=["id"],O={id:"carouselForm",class:"carousel carousel-dark slide","data-bs-interval":"false","data-bs-wrap":"false"},j={class:"carousel-indicators mt-4"},N=["id","data-bs-slide-to","aria-label"],G=["id","data-bs-slide-to","aria-label"],Q=["id","data-bs-slide-to","aria-label"],V={class:"carousel-inner"},R=["id"],x={id:"carousel-end",class:"carousel-item"},z={class:"container"},D={key:0,class:"fs-2 m-4 text-center"},H={key:1,class:"fs-2 m-4 text-center"},U={class:"row d-flex justify-content-center"},J=o("button",{type:"button",class:"col-3 print-button m-2 fw-bold btn btn-kiosk ml-auto gx-1 btn-lg btn-success"},[o("span",{class:"fs-3"},[o("i",{class:"bi bi-person-check-fill"}),p(" Termin\xE9")])],-1),W=o("span",{class:"fs-3"},[o("i",{class:"fs-1bi bi-person-plus-fill"}),p(" Autre personne")],-1),X=[W],Y={key:0,class:"fs-3 m-4 text-center"},Z={key:1,class:"fs-3 m-4 text-center"},K=p(' Pour imprimer votre ticket, cliquez sur "Termin\xE9". '),ee=o("br",null,null,-1),te=p(` Pour d\xE9marrer la saisie d'une autre personne de votre famille (adresse identique), cliquez sur "Autre Personne". `),oe=[K,ee,te],se=L('<button class="carousel-control-prev" type="button" data-bs-target="#carouselForm" data-bs-slide="prev"><span class="text-dark" aria-hidden="true">\u279C</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselForm" data-bs-slide="next"><span class="text-dark" aria-hidden="true">\u279C</span></button><button type="button" class="fs-3 m-4 cancel-button fw-bold btn btn-kiosk btn-danger"><i class="bi bi-trash-fill"></i></button>',3);function ne(e,t,s,i,a,S){var d,v;const h=b("GeneratorInputGroup");return n(),r("div",P,[o("div",A,[o("form",{id:e.formId,class:_(e.formClass),style:k(e.cssProps)},[o("div",O,[o("div",j,[(n(!0),r(f,null,y(e.groupFields,(l,c)=>(n(),r(f,{key:c},[c==0?(n(),r("button",{key:0,id:"indicator"+c,type:"button","data-bs-target":"#carouselForm","data-bs-slide-to":c,"aria-current":"true",class:"active","aria-label":"Part"+c},null,8,N)):(n(),r("button",{key:1,id:"indicator"+c,type:"button","data-bs-target":"#carouselForm","data-bs-slide-to":c,"aria-current":"true","aria-label":"Part"+c},null,8,G))],64))),128)),o("button",{id:"indicator"+Object.keys(e.groupFields).length,type:"button","data-bs-target":"#carouselForm","data-bs-slide-to":Object.keys(e.groupFields).length,"aria-current":"true","aria-label":"Part"+Object.keys(e.groupFields).length},null,8,Q)]),o("div",V,[(n(!0),r(f,null,y(e.groupFields,(l,c)=>(n(),r("div",{key:c,id:l.id,class:_(l.class)},[T(h,{inputGroups:l.fields},null,8,["inputGroups"])],10,R))),128)),o("div",x,[o("div",z,[e.thanksMessage?(n(),r("p",D,w(e.thanksMessage),1)):(n(),r("p",H,"Merci !")),o("div",U,[J,o("button",{type:"button",class:"col-3 print-add-button m-2 fw-bold btn btn-kiosk ml-auto gx-1 btn-lg",style:k({color:(d=e.colors)==null?void 0:d.secondary,backgroundColor:(v=e.colors)==null?void 0:v.primary}),onClick:t[0]||(t[0]=l=>e.returnToBeggining())},X,4),e.endMessage?(n(),r("p",Y,w(e.endMessage),1)):(n(),r("p",Z,oe))])])])]),se])],14,I)])])}var re=B($,[["render",ne]]);const ie=q({components:{FormNavigationMobile:re,QrCode:M},data(){return{eventBus:m("eventBus"),config:{},recap:[],isLoaded:!1}},methods:{downloadCanvas:function(){console.log("download");let t=document.querySelector("#lastname").value+" "+document.querySelector("#firstname").value+" "+document.querySelector("#birthdate").value,s=document.querySelector("#lastname").value+" "+document.querySelector("#firstname").value;this.eventBus.emit("generateAndDownloadQrCode",[t,s])},addAnotherPerson:function(){this.eventBus.emit("updateQrCode"),setTimeout(function(){window.print(),document.querySelectorAll("input").forEach(t=>{t.hasAttribute("resettable")&&(t.value="")})},1e3)},redirectToPlatform:function(t){t.toLocaleLowerCase()=="mobile"?this.$router.push({name:"Mobile"}):t.toLocaleLowerCase()=="kiosk"&&this.$router.push({name:"Kiosk"})},printTicket:function(){this.eventBus.emit("updateQrCode"),setTimeout(function(){window.print(),window.location.reload()},1e3)},fetchConfigFile:function(t){fetch(t).then(s=>s.json()).then(s=>{this.config=s}).catch(s=>{var a;this.isLoaded=!0;let i=document.createElement("div");i.id="error_config",i.innerHTML="Invalid or Config File not found. Please check configuration file.",(a=document.querySelector("body"))==null||a.appendChild(i)})}},created(){this.fetchConfigFile("/config.json")},mounted(){this.eventBus=m("eventBus")},updated(){var e=this;if(!e.isLoaded){e.eventBus.on("updateRecap",function(a){e.recap=a});let s=new URLSearchParams(document.location.search.substring(1)),i=s.has("platform")?s.get("platform"):"mobile";this.redirectToPlatform(i),document.querySelectorAll(".print-button").forEach(function(a){a.addEventListener("click",function(){e.printTicket()})}),document.querySelectorAll(".print-add-button").forEach(function(a){a.addEventListener("click",function(){e.addAnotherPerson(),e.eventBus.emit("returnToBeginning")})}),document.querySelectorAll(".cancel-button").forEach(function(a){a.addEventListener("click",function(){window.location.reload()})});var t=document.querySelector(e.config.form.id);t==null||t.addEventListener("change",()=>{e.eventBus.emit("updateQrCode","test")}),t==null||t.addEventListener("keyup",()=>{e.eventBus.emit("updateQrCode","test")}),e.isLoaded=!0}}}),ae={class:"container-fluid vh-100",id:"main_container"},ce={class:"nav justify-content-center"},le=["src"],de=o("div",{class:"bg-light align-items-center position-relative text-center",id:"utility_container"},null,-1),ue=o("div",{class:"w-100 text-muted align-items-center position-fixed text-center",id:"copyright"},[o("img",{height:"32",width:"32",src:F,id:"copyright_logo"}),o("a",null," EKAMI SA (Gen\xE8ve)")],-1);function me(e,t,s,i,a,S){const h=b("FormNavigationMobile"),d=b("QrCode");return n(),r("main",null,[o("div",ae,[o("div",ce,[e.config.companyLogo!=""?(n(),r("img",{key:0,class:"img-fluid pt-5 mt-5",id:"company_logo",src:e.config.companyLogo},null,8,le)):g("",!0)]),de,e.config.form?(n(),C(h,{key:0,formId:e.config.form.id,formClass:e.config.form.class,groupFields:e.config.form.fieldGroups,colors:e.config.colors,thanksMessage:e.config.form.thanksMessage,endMessage:e.config.form.endMessage,datepickerOptions:e.config.datepickerOptions},null,8,["formId","formClass","groupFields","colors","thanksMessage","endMessage","datepickerOptions"])):g("",!0),e.config.qrOptions?(n(),C(d,{key:1,qrOptions:e.config.qrOptions,context:e.config.context,qrCodeId:"qrcode"},null,8,["qrOptions","context"])):g("",!0),ue])])}var ge=B(ie,[["render",me]]);export{ge as default};
