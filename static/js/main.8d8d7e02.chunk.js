(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{20:function(e,t,a){e.exports=a(28)},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(17),l=a.n(c),i=(a(25),a(8)),s=a(14),u=a(11);a(29),a(30);u.a.initializeApp({apiKey:"AIzaSyAhKVIJmr_ErKJCML7sbvlRgD29quZxKTg",authDomain:"react-firegram-eeb81.firebaseapp.com",projectId:"react-firegram-eeb81",storageBucket:"react-firegram-eeb81.appspot.com",messagingSenderId:"156131136298",appId:"1:156131136298:web:6d1116c77a2b0b0a09c453"});var o=u.a.storage(),m=u.a.firestore(),p=u.a.firestore.FieldValue.serverTimestamp,d=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=m.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},f=a(32),g=function(e){var t=e.setSelectedImg,a=d("images").docs;return r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(f.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},s:!0,onClick:function(){return t(e.url)}},r.a.createElement(f.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},b=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"PictureGram"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))},E=a(13),v=a.n(E),j=a(18),O=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],d=s[1],f=Object(n.useState)(null),g=Object(i.a)(f,2),b=g[0],E=g[1];return Object(n.useEffect)((function(){var t=o.ref(e.name),a=m.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){d(e)}),Object(j.a)(v.a.mark((function e(){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=p(),a.add({url:n,createdAt:r}),E(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:b,error:u}},y=function(e){var t=e.file,a=e.setFile,c=O(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement("div",{className:"progress-bar",style:{width:i+"%"}})},h=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],o=s[1],m=["image/png","image/jpeg","image/jpg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),o("")):(c(null),o("Please select an image file (png or jpg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},u&&r.a.createElement("div",{className:"error"},u),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(y,{file:a,setFile:c})))},S=function(e){var t=e.setSelectedImg,a=e.selectedImg;return r.a.createElement(f.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&t(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(f.a.img,{src:a,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))};var I=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(h,null),r.a.createElement(g,{setSelectedImg:c}),a&&r.a.createElement(S,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8d8d7e02.chunk.js.map