import{G as q,S as E,_ as T}from"./ekami128x128.0bb11458.js";import{$ as h,_ as S,Q as F}from"./QrCode.3fd2c41d.js";import{d as $,i as b,r as _,o as n,c as r,a as o,n as C,b as k,F as g,e as y,f as L,t as w,g as d,h as P,j as f,k as B}from"./index.2893e218.js";import{K as A}from"./kioskboard-aio-2.2.0.min.70742d97.js";const M=$({name:"FormNavigation",data(){return{recap:[],eventBus:b("eventBus")}},props:{formId:String,formClass:String,groupFields:Object,colors:Object,endMessage:String,thanksMessage:String,datepickerOptions:Object},computed:{cssProps(){var e,t,s,a;return{"--primary-color":(e=this.colors)==null?void 0:e.primary,"--secondary-color":(t=this.colors)==null?void 0:t.secondary,"--tertiary-color":(s=this.colors)==null?void 0:s.tertiary,"--quaternary-color":(a=this.colors)==null?void 0:a.quaternary}}},components:{GeneratorInputGroup:q},methods:{checkItem:function(){var t=h("#carouselForm");h(".carousel-inner .carousel-item:first").hasClass("active")?(t.children(".carousel-control-prev").hide(),t.children(".carousel-control-next").show()):h(".carousel-inner .carousel-item:last").hasClass("active")?(t.children(".carousel-control-next").hide(),t.children(".carousel-control-prev").show()):(t.children(".carousel-control-next").show(),t.children(".carousel-control-prev").show())},writeToRecap:function(){this.recap=[],document.querySelectorAll(".carousel-inner label").forEach(t=>{let s=document.querySelector("#"+t.htmlFor),a=s.value==""?t.innerText+" ?":s.value;this.recap.push(a)}),this.eventBus.emit("updateRecap",this.recap)},returnToBeggining:function(){var t;(t=document.getElementById("indicator0"))==null||t.click()}},mounted(){var e;this.eventBus=b("eventBus"),this.eventBus.on("returnToBeginning",this.returnToBeggining),document.querySelectorAll("input, select").forEach(t=>{["change","focus"].forEach(s=>{t.addEventListener(s,()=>{this.writeToRecap()})})}),this.checkItem(),(e=document.querySelector("#carouselForm"))==null||e.addEventListener("slid.bs.carousel",this.checkItem),h(".datepicker").datepicker(this.datepickerOptions)}}),O={class:"row"},I={class:"col-sm h-100",id:"form-div"},j=["id"],N={id:"carouselForm",class:"carousel carousel-dark slide","data-bs-interval":"false","data-bs-wrap":"false"},G={class:"carousel-indicators mt-4"},Q=["id","data-bs-slide-to","aria-label"],V=["id","data-bs-slide-to","aria-label"],R=["id","data-bs-slide-to","aria-label"],z={class:"carousel-inner"},x=["id"],D={id:"carousel-end",class:"carousel-item"},H={class:"container"},U={key:0,class:"fs-2 m-4 text-center"},Y={key:1,class:"fs-2 m-4 text-center"},J={class:"row d-flex justify-content-center"},W=o("button",{type:"button",class:"col-3 print-button m-2 fw-bold btn btn-kiosk ml-auto gx-1 btn-lg btn-success"},[o("span",{class:"fs-3"},[o("i",{class:"bi bi-person-check-fill"}),d(" Termin\xE9")])],-1),X=o("span",{class:"fs-3"},[o("i",{class:"fs-1bi bi-person-plus-fill"}),d(" Autre personne")],-1),Z=[X],K={key:0,class:"fs-3 m-4 text-center"},ee={key:1,class:"fs-3 m-4 text-center"},te=d(' Pour imprimer votre ticket, cliquez sur "Termin\xE9". '),oe=o("br",null,null,-1),se=d(` Pour d\xE9marrer la saisie d'une autre personne de votre famille (adresse identique), cliquez sur "Autre Personne". `),ne=[te,oe,se],re=P('<button class="carousel-control-prev" type="button" data-bs-target="#carouselForm" data-bs-slide="prev"><span class="text-dark" aria-hidden="true">\u279C</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselForm" data-bs-slide="next"><span class="text-dark" aria-hidden="true">\u279C</span></button><button type="button" class="fs-3 m-4 cancel-button fw-bold btn btn-kiosk btn-danger"><i class="bi bi-trash-fill"></i></button>',3);function ie(e,t,s,a,i,u){var p,m;const v=_("GeneratorInputGroup");return n(),r("div",O,[o("div",I,[o("form",{id:e.formId,class:C(e.formClass),style:k(e.cssProps)},[o("div",N,[o("div",G,[(n(!0),r(g,null,y(e.groupFields,(l,c)=>(n(),r(g,{key:c},[c==0?(n(),r("button",{key:0,id:"indicator"+c,type:"button","data-bs-target":"#carouselForm","data-bs-slide-to":c,"aria-current":"true",class:"active","aria-label":"Part"+c},null,8,Q)):(n(),r("button",{key:1,id:"indicator"+c,type:"button","data-bs-target":"#carouselForm","data-bs-slide-to":c,"aria-current":"true","aria-label":"Part"+c},null,8,V))],64))),128)),o("button",{id:"indicator"+Object.keys(e.groupFields).length,type:"button","data-bs-target":"#carouselForm","data-bs-slide-to":Object.keys(e.groupFields).length,"aria-current":"true","aria-label":"Part"+Object.keys(e.groupFields).length},null,8,R)]),o("div",z,[(n(!0),r(g,null,y(e.groupFields,(l,c)=>(n(),r("div",{key:c,id:l.id,class:C(l.class)},[L(v,{inputGroups:l.fields},null,8,["inputGroups"])],10,x))),128)),o("div",D,[o("div",H,[e.thanksMessage?(n(),r("p",U,w(e.thanksMessage),1)):(n(),r("p",Y,"Merci !")),o("div",J,[W,o("button",{type:"button",class:"col-3 print-add-button m-2 fw-bold btn btn-kiosk ml-auto gx-1 btn-lg",style:k({color:(p=e.colors)==null?void 0:p.secondary,backgroundColor:(m=e.colors)==null?void 0:m.primary}),onClick:t[0]||(t[0]=l=>e.returnToBeggining())},Z,4),e.endMessage?(n(),r("p",K,w(e.endMessage),1)):(n(),r("p",ee,ne))])])])]),re])],14,j)])])}var ae=S(M,[["render",ie]]);const ce=$({components:{FormNavigation:ae,QrCode:F},data(){return{eventBus:b("eventBus"),config:{},recap:[],isLoaded:!1}},methods:{downloadCanvas:function(){console.log("download");let t=document.querySelector("#lastname").value+" "+document.querySelector("#firstname").value+" "+document.querySelector("#birthdate").value,s=document.querySelector("#lastname").value+" "+document.querySelector("#firstname").value;this.eventBus.emit("generateAndDownloadQrCode",[t,s])},redirectToPlatform:function(t){t.toLocaleLowerCase()=="mobile"?this.$router.push({name:"Mobile"}):t.toLocaleLowerCase()=="kiosk"&&this.$router.push({name:"Kiosk"})},addAnotherPerson:function(){this.eventBus.emit("updateQrCode"),setTimeout(function(){window.print(),document.querySelectorAll("input").forEach(t=>{t.hasAttribute("resettable")&&(t.value="")})},1e3)},printTicket:function(){this.eventBus.emit("updateQrCode"),setTimeout(function(){window.print(),window.location.reload()},1e3)},fetchConfigFile:function(t){fetch(t).then(s=>s.json()).then(s=>{this.config=s}).catch(s=>{var i;this.isLoaded=!0;let a=document.createElement("div");a.id="error_config",a.innerHTML="Invalid or Config File not found. Please check configuration file.",(i=document.querySelector("body"))==null||i.appendChild(a)})}},created(){this.fetchConfigFile("/ekami-kiosk-app//config.json")},mounted(){this.eventBus=b("eventBus")},updated(){var e=this;if(!e.isLoaded){e.eventBus.on("updateRecap",function(i){e.recap=i});let s=new URLSearchParams(document.location.search.substring(1)),a=s.has("platform")?s.get("platform"):"kiosk";this.redirectToPlatform(a),document.querySelectorAll(".print-button").forEach(function(i){i.addEventListener("click",function(){e.printTicket()})}),document.querySelectorAll(".print-add-button").forEach(function(i){i.addEventListener("click",function(){e.addAnotherPerson(),e.eventBus.emit("returnToBeginning")})}),document.querySelectorAll(".cancel-button").forEach(function(i){i.addEventListener("click",function(){window.location.reload()})});var t=document.querySelector(e.config.form.id);t==null||t.addEventListener("change",()=>{e.eventBus.emit("updateQrCode","test")}),t==null||t.addEventListener("keyup",()=>{e.eventBus.emit("updateQrCode","test")}),document.querySelectorAll(".slim-select").forEach(i=>{new E({select:"#"+i.id,showSearch:!1})});for(const[i,u]of Object.entries(e.config.keyboards))A.run(u.target,u.options);e.isLoaded=!0}}}),le={class:"container-fluid vh-100",id:"main_container"},de={class:"row vh-100"},ue={class:"col-3 bg-light align-items-center position-relative text-center",id:"utility_container"},pe={class:"mb-3 vh-100"},me=["src"],he={class:"p-2 mt-4",id:"buttons_div"},fe=o("button",{class:"col-12 print-button m-2 fw-bold btn btn-kiosk ml-auto gx-1 btn-lg btn-success"},[o("span",{class:"fs-3"},[o("i",{class:"bi bi-person-check-fill"}),d(" Termin\xE9")])],-1),ge=o("span",{class:"fs-3"},[o("i",{class:"bi bi-person-plus-fill"}),d(" Autre Personne ")],-1),be=[ge],ve=o("h4",{class:"fw-bold"},"Your information",-1),_e={class:"w-100 p-2",id:"recap_div"},ke=o("div",{class:"w-100 mb-5 text-muted position-absolute bottom-0 start-50 translate-middle-x",id:"copyright"},[o("img",{height:"32",width:"32",src:T,id:"copyright_logo"}),o("a",null," EKAMI SA (Gen\xE8ve)")],-1),ye={class:"col-9"};function we(e,t,s,a,i,u){const v=_("FormNavigation"),p=_("QrCode");return n(),r("main",null,[o("div",le,[o("div",de,[o("div",ue,[o("div",pe,[e.config.companyLogo!=""?(n(),r("img",{key:0,class:"img-fluid p-4 pt-5",id:"company_logo",src:e.config.companyLogo},null,8,me)):f("",!0),o("div",he,[fe,e.config.colors?(n(),r("button",{key:0,class:"col-12 print-add-button m-2 fw-bold btn btn-kiosk ml-auto gx-1 btn-lg",style:k({backgroundColor:e.config.colors.primary,color:e.config.colors.secondary})},be,4)):f("",!0)]),ve,o("div",_e,[(n(!0),r(g,null,y(e.recap,(m,l)=>(n(),r("p",{key:l},w(m),1))),128))]),ke])]),o("div",ye,[e.config.form?(n(),B(v,{key:0,formId:e.config.form.id,formClass:e.config.form.class,groupFields:e.config.form.fieldGroups,colors:e.config.colors,thanksMessage:e.config.form.thanksMessage,endMessage:e.config.form.endMessage,datepickerOptions:e.config.datepickerOptions},null,8,["formId","formClass","groupFields","colors","thanksMessage","endMessage","datepickerOptions"])):f("",!0),e.config.qrOptions?(n(),B(p,{key:1,qrOptions:e.config.qrOptions,context:e.config.context,qrCodeId:"qrcode"},null,8,["qrOptions","context"])):f("",!0)])])])])}var qe=S(ce,[["render",we]]);export{qe as default};
