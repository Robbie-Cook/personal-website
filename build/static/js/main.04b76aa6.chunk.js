(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,n,t){e.exports=t.p+"static/media/me_irl3_cropped.2ead195c.jpg"},49:function(e,n,t){e.exports=t.p+"static/media/aboutImage.47dfa197.jpg"},50:function(e,n,t){e.exports=t.p+"static/media/aboutImage2.9b4e3b0c.jpg"},55:function(e,n,t){e.exports=t(99)},61:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){},91:function(e,n,t){},97:function(e,n,t){},99:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(22),o=t.n(r),c=(t(61),t(105)),l=t(106),s=t(2),u=t(6),m=t(11),d=t(3),p=t(10),h=t(15),f=t(16),g=t(53),b=function(){function e(n,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;Object(s.a)(this,e),"string"===typeof n?(this.top=n,this.right=t,this.bottom=a,this.left=i):(this.top="".concat(n,"px"),this.right="".concat(t,"px"),this.bottom="".concat(a,"px"),this.left="".concat(i,"px"))}return Object(u.a)(e,[{key:"toString",value:function(){return"".concat(this.top," ").concat(this.right," ").concat(this.bottom," ").concat(this.left)}}]),e}(),v=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"getTheme",value:function(){return{textColor:"#dcd6ce",page:{heading:{h1:{margin:new b(0,0,13,0)}},padding:new b(0,50),item:{padding:new b(0,20)}},navbar:{height:"56px",textColor:"#dcd6ce",textColorHighlight:"#6385a9",font:"'Roboto Slab', sans-serif",padding:new b(0,50),border:{backgroundColor:Object(g.a)(Object(d.a)(e),"textColor",this)}},mobile:{cutOff:"992px",padding:new b(20,20),navbar:{padding:new b(20,40)}}}}}]),e}();function w(){var e=Object(h.a)(["\n  font-size: 40px\n  "]);return w=function(){return e},e}function E(){var e=Object(h.a)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 50px;\n  font-weight: bold\n  margin: ","\n  "]);return E=function(){return e},e}var y=v.getTheme();var x=function(e){function n(){return Object(s.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return function(e,n){var t=f.a.h1(E(),y.page.heading.h1.margin),a=Object(f.a)(t)(w());return"h1"===e||void 0===e?i.a.createElement(t,null,n):"h2"===e?i.a.createElement(a,null,n):void 0}(this.props.type,this.props.children)}}]),n}(a.Component);var O=function(e){function n(){return Object(s.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return e=this.props.height,n=this.props.width,void 0===e&&(e=40),void 0===n&&(n=100),i.a.createElement("div",{style:{height:parseInt(e),width:parseInt(n)}});var e,n}}]),n}(a.Component);function j(){var e=Object(h.a)(["\n\n  //  Overwrite bootstrap for containers\n  & .container {\n    max-width: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  display: flex;\n  flex-direction: row;\n  padding: ",";\n\n  // Mobile styles\n  @media (max-width: ",") {\n    flex-direction: column;\n    padding: ","\n  }\n\n  // Bootstrap overrides\n  & .row {\n    margin: 0\n    @media (max-width: ",") {\n      flex-direction: column;\n    }\n  }\n\n  & .col {\n    padding: ",";\n  }\n\n"]);return j=function(){return e},e}var k=v.getTheme(),C=f.a.div(j(),k.page.padding,k.mobile.cutOff,k.mobile.padding,k.mobile.cutOff,k.page.item.padding);var I=function(e){function n(){return Object(s.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{style:this.props.style},!0===(e=this.props.spacer)||void 0===e?i.a.createElement(O,null):void 0,i.a.createElement(C,null,this.props.children));var e}}]),n}(a.Component),T=(t(66),t(100)),M=t(46),N=t.n(M);function A(){var e=Object(h.a)(["\n\n  position: relative;\n  right: -","\n\n  // Code for mobile displays\n\n  @media (max-width: ",") {\n    width: 100%;\n    right: 0\n  }\n\n  & img {\n    // Mobile mode\n    @media (max-width: ",") {\n      width: 100%;\n    }\n  }\n\n  & .fadingElement {\n    // Mobile mode\n    @media (max-width: ",") {\n      opacity: 0\n    }\n  }\n"]);return A=function(){return e},e}function W(){var e=Object(h.a)(["\n  margin: 100px 0 100px 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 300px;\n\n  @media (max-width: ",") {\n    justify-content: center;\n    text-align: center;\n    margin: 50px 20px 70px 20px;\n  }\n\n  & .iconWrapper {\n    @media (max-width: ",") {\n      justify-content: center\n    }\n  }\n\n"]);return W=function(){return e},e}var L=v.getTheme(),_=f.a.div(W(),L.mobile.cutOff,L.mobile.cutOff),R=f.a.div(A(),L.page.padding.right,L.mobile.cutOff,L.mobile.cutOff,L.mobile.cutOff),S=function(e){function n(){return Object(s.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement(I,{spacer:!1,style:{overflowX:"hidden"}},i.a.createElement("div",{class:"padder"}),i.a.createElement(_,null,i.a.createElement(x,{style:{marginLeft:0}},"Robbie Cook"),i.a.createElement("p",null,"Hello! I'm a developer living in Auckland, New Zealand. I love swimming, Netflix, and coding."),i.a.createElement("p",null,"Check out my ",i.a.createElement(T.a,{to:"/about"},"About")," page to find out more :)"),i.a.createElement("div",{class:"iconWrapper"},i.a.createElement("a",{href:"https://github.com/Robbie-Cook"},i.a.createElement("i",{class:"icon fab fa-github-square"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/robbie-cook/"},i.a.createElement("i",{class:"icon fab fa-linkedin"})),i.a.createElement("div",{class:"iconWrapper2"},i.a.createElement("a",{href:"mailto:robbie@robbie.pw"},i.a.createElement("i",{class:"icon fas fa-envelope-square"}),i.a.createElement("span",null,"robbie@robbie.pw"))))),i.a.createElement(R,null,i.a.createElement("div",{class:"fadingElement"}),i.a.createElement("img",{src:N.a,style:{height:"100%"}})))}}]),n}(a.Component),B=t(101),H=t(102),D=t(103),J=(v.getTheme(),function(e){function n(){return Object(s.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement(I,null,i.a.createElement(B.a,null,i.a.createElement(H.a,null,i.a.createElement(D.a,null,i.a.createElement(x,{type:"h2"},"Music"))),i.a.createElement(H.a,null,i.a.createElement(D.a,{class:"subpage"},i.a.createElement("iframe",{width:"100%",height:"450",scrolling:"yes",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39548578&color=%23222121&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"})),i.a.createElement(D.a,{class:"subpage"},i.a.createElement("p",null,"Music is one of my passions. My favourite bands at the moment are Vampire Weekend, The Killers, Brandon Flowers, and the White Stripes."),i.a.createElement("p",null,"I make some music at home, and my set up at home is an electric keyboard and a microphone at my parent's house. I also am trying to learn guitar -- I have a little acoustic guitar here in Auckland.")))))}}]),n}(a.Component)),U=(a.Component,t(104)),q=t(28),z=t.n(q);t(67),t(68);function Q(){var e=Object(h.a)(["\n\n    // Code for mobile styling\n    @media (max-width: ",") {\n      flex-direction: column;\n      margin-left: 0;\n    }\n\n    display: flex;\n    flex-direction: row;\n\n    margin-left: ",";\n\n    & .nav-link {\n      margin: 0;\n      padding: 0;\n      color: ","!important;\n      font-family: ",";\n    }\n\n    // Space between each navbar item\n    & .nav-item {\n      margin: 20px 0px 0 20px;\n    }\n"]);return Q=function(){return e},e}function X(){var e=Object(h.a)(["\n\n  // Mobile view \n  @media (max-width: ",") {\n      height: auto!important;\n      padding: ",";\n      border-bottom: 2px solid ","\n  }\n  \n  height: ","\n  padding: ","\n\n  & a:hover {\n    color: ","!important;\n  }\n\n  & .navbar-toggler-icon {\n      background-image:none;\n  }\n\n  & .navbar-toggler {\n    border-color ","!important\n  }\n\n  & .nav-item {\n    @media (max-width: ",") {\n      margin-left: 5px!important;\n    }\n  }\n\n  & .nav-item:last-child {\n    @media (max-width: ",") {\n      margin-bottom: 20px\n    }\n  }\n\n  & .nav-item:first-child {\n    @media (max-width: ",") {\n      margin-left: 0px\n    }\n  }\n\n"]);return X=function(){return e},e}var F=v.getTheme(),K=f.a.div(X(),F.mobile.cutOff,F.mobile.navbar.padding,F.navbar.borderColor,F.navbar.height,F.navbar.padding,F.navbar.textColorHighlight,F.textColor,F.mobile.cutOff,F.mobile.cutOff,F.mobile.cutOff),P=f.a.div(Q(),F.mobile.cutOff,F.navbar.padding,F.navbar.textColor,F.navbar.font);var V=function(e){function n(){return Object(s.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){!function(){var e=document.createElement("div");e.className+="nav-icons-wrapper";for(var n=0;n<3;n++){var t=document.createElement("div");e.appendChild(t)}document.getElementsByClassName("navbar-toggler")[0].replaceChild(e,document.getElementsByClassName("navbar-toggler-icon")[0])}()}},{key:"render",value:function(){return i.a.createElement(K,null,i.a.createElement(z.a,{expand:"lg"},i.a.createElement(z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(z.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(U.a,{className:"mr-auto"},i.a.createElement(P,null,function(e){var n=[];return e.forEach(function(e){var t=window.location.href,a=t.substr(t.lastIndexOf("/"))===e.path?"nav-item active":"nav-item";n.push(i.a.createElement("li",{class:a},i.a.createElement(U.a.Link,null,i.a.createElement(T.a,{class:"nav-link",style:{marginRight:30},to:e.path},e.name))))}),n}(this.props.pages))))))}}]),n}(a.Component),Z=(t(91),t(92),t(48)),$=t(49),G=t.n($),Y=t(50),ee=t.n(Y),ne=function e(n,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;Object(s.a)(this,e),this.image=n,this.altText=t,this.legend=a},te=[new ne(G.a,"Me in Christchurch"),new ne(ee.a,"My library desk in Dunedin")];var ae={height:200},ie=function(e){function n(){return Object(s.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement(I,null,i.a.createElement(B.a,null,i.a.createElement(H.a,null,i.a.createElement(D.a,null,i.a.createElement(x,{type:"h2"},"About"))),i.a.createElement(H.a,null,i.a.createElement(D.a,null,i.a.createElement("p",null,"Hi! I'm a 22-year-old developer currently living in Auckland. I work in .NET for an Auckland software company."),i.a.createElement("p",null,"I studied at Otago University in Dunedin; where I got an Honours degree in Computer Science and worked as a lab demonstrator for Python and Java students. I also did some Disabilities tutoring for the University as well in my final year."),i.a.createElement("p",null,"At the moment, I am learning about SQL, web apps, and React."),i.a.createElement("p",null,"I have experience with Linux systems, LaTeX and Machine Learning (e.g. tensorflow)."),i.a.createElement("p",null,"In my spare time, I like to swim, gym, and play guitar and piano.")),i.a.createElement(D.a,null,i.a.createElement("div",{className:"carouselColumn"},i.a.createElement(Z.Carousel,{style:ae,showThumbs:!1},function(){for(var e=[],n=0;n<te.length;n++){var t=te[n];e.push(i.a.createElement("div",null,i.a.createElement("img",{src:t.image,alt:t.altText,className:"carouselImage"}),i.a.createElement("p",{className:"legend"},t.legend)))}return e}()))))))}}]),n}(a.Component),re=function e(n,t,a){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(s.a)(this,e),this.name=n,this.path=t,this.component=a,this.exact=i};t(97);var oe=function(){for(var e=[new re("Home","/",function(){return i.a.createElement(S,null)},!0),new re("About","/about",function(){return i.a.createElement(ie,null)}),new re("Music","/music",function(){return i.a.createElement(J,null)})],n=[],t=0;t<e.length;t++){var a=e[t],r=i.a.createElement(c.a,{path:a.path,component:a.component});a.exact&&(r=i.a.createElement(c.a,{exact:!0,path:a.path,component:a.component})),n.push(r)}return i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("div",null,i.a.createElement(V,{pages:e}),i.a.createElement("div",null,n))))},ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(oe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ce?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):le(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):le(e)})}}()}},[[55,1,2]]]);
//# sourceMappingURL=main.04b76aa6.chunk.js.map