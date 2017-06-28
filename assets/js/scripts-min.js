!function(){for(var t,e=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],n=e.length,r=window.console=window.console||{};n--;)r[t=e[n]]||(r[t]=function(){})}(),window.paceOptions={restartOnRequestAfter:!1,restartOnPushState:!1,eventLag:!1},function(){var t,e,n,r,i,o,s,a,l,u,c,h,p,d,f,g,m,y,v,w,b,_,E,L,T,A,S,k,x,F,O,P,R,q,M,C,N,H,I,V,j,U,D,G,W,B,z,X,Y,Z=[].slice,J={}.hasOwnProperty,Q=function(t,e){function n(){this.constructor=t}for(var r in e)J.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},$=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};for(b={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},x=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},O=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,w=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==O&&(O=function(t){return setTimeout(t,50)},w=function(t){return clearTimeout(t)}),R=function(t){var e,n;return e=x(),(n=function(){var r;return(r=x()-e)>=33?(e=x(),t(r,function(){return O(n)})):setTimeout(n,33-r)})()},P=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?Z.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},_=function(){var t,e,n,r,i,o,s;for(e=arguments[0],o=0,s=(r=2<=arguments.length?Z.call(arguments,1):[]).length;s>o;o++)if(n=r[o])for(t in n)J.call(n,t)&&(i=n[t],null!=e[t]&&"object"==typeof e[t]&&null!=i&&"object"==typeof i?_(e[t],i):e[t]=i);return e},m=function(t){var e,n,r,i,o;for(n=e=0,i=0,o=t.length;o>i;i++)r=t[i],n+=Math.abs(r),e++;return n/e},L=function(t,e){var n,r,i;if(null==t&&(t="options"),null==e&&(e=!0),i=document.querySelector("[data-pace-"+t+"]")){if(n=i.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(t){return r=t,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},s=function(){function t(){}return t.prototype.on=function(t,e,n,r){var i;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(i=this.bindings)[t]&&(i[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,r,i;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,i=[];n<this.bindings[t].length;)i.push(this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):n++);return i}},t.prototype.trigger=function(){var t,e,n,r,i,o,s,a,l;if(n=arguments[0],t=2<=arguments.length?Z.call(arguments,1):[],null!=(s=this.bindings)?s[n]:void 0){for(i=0,l=[];i<this.bindings[n].length;)a=this.bindings[n][i],r=a.handler,e=a.ctx,o=a.once,r.apply(null!=e?e:this,t),l.push(o?this.bindings[n].splice(i,1):i++);return l}},t}(),u=window.Pace||{},window.Pace=u,_(u,s.prototype),F=u.options=_({},b,window.paceOptions,L()),D=0,W=(z=["ajax","document","eventLag","elements"]).length;W>D;D++)N=z[D],!0===F[N]&&(F[N]=b[N]);l=function(t){function e(){return X=e.__super__.constructor.apply(this,arguments)}return Q(e,t),e}(Error),e=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(F.target)))throw new l;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return t=this.getElement(),t.className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){l=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,r,i,o,s;if(null==document.querySelector(F.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",i=0,o=(s=["webkitTransform","msTransform","transform"]).length;o>i;i++)e=s[i],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return this.progress>=100},t}(),a=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,r,i,o,s;if(null!=this.bindings[t]){for(s=[],r=0,i=(o=this.bindings[t]).length;i>r;r++)n=o[r],s.push(n.call(this,e));return s}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),U=window.XMLHttpRequest,j=window.XDomainRequest,V=window.WebSocket,E=function(t,e){var n,r,i;i=[];for(n in e.prototype)try{r=e.prototype[n],i.push(null==t[n]&&"function"!=typeof r?t[n]=r:void 0)}catch(t){t}return i},S=[],u.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?Z.call(arguments,1):[],S.unshift("ignore"),n=e.apply(null,t),S.shift(),n},u.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?Z.call(arguments,1):[],S.unshift("track"),n=e.apply(null,t),S.shift(),n},C=function(t){var e;if(null==t&&(t="GET"),"track"===S[0])return"force";if(!S.length&&F.ajax){if("socket"===t&&F.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),$.call(F.ajax.trackMethods,e)>=0)return!0}return!1},c=function(t){function e(){var t,n=this;e.__super__.constructor.apply(this,arguments),t=function(t){var e;return e=t.open,t.open=function(r,i){return C(r)&&n.trigger("request",{type:r,url:i,request:t}),e.apply(t,arguments)}},window.XMLHttpRequest=function(e){var n;return n=new U(e),t(n),n};try{E(window.XMLHttpRequest,U)}catch(t){}if(null!=j){window.XDomainRequest=function(){var e;return e=new j,t(e),e};try{E(window.XDomainRequest,j)}catch(t){}}if(null!=V&&F.ajax.trackWebSockets){window.WebSocket=function(t,e){var r;return r=null!=e?new V(t,e):new V(t),C("socket")&&n.trigger("request",{type:"socket",url:t,protocols:e,request:r}),r};try{E(window.WebSocket,V)}catch(t){}}}return Q(e,t),e}(a),G=null,M=function(t){var e,n,r,i;for(n=0,r=(i=F.ajax.ignoreURLs).length;r>n;n++)if("string"==typeof(e=i[n])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(T=function(){return null==G&&(G=new c),G})().on("request",function(e){var n,r,i,o,s;return o=e.type,i=e.request,s=e.url,M(s)?void 0:u.running||!1===F.restartOnRequestAfter&&"force"!==C(o)?void 0:(r=arguments,"boolean"==typeof(n=F.restartOnRequestAfter||0)&&(n=0),setTimeout(function(){var e,n,s,a,l;if("socket"===o?i.readyState<2:0<(s=i.readyState)&&4>s){for(u.restart(),l=[],e=0,n=(a=u.sources).length;n>e;e++){if((N=a[e])instanceof t){N.watch.apply(N,r);break}l.push(void 0)}return l}},n))}),t=function(){function t(){var t=this;this.elements=[],T().on("request",function(){return t.watch.apply(t,arguments)})}return t.prototype.watch=function(t){var e,n,r,i;return r=t.type,e=t.request,i=t.url,M(i)?void 0:(n="socket"===r?new d(e):new f(e),this.elements.push(n))},t}(),f=function(){return function(t){var e,n,r,i,o,s=this;if(this.progress=0,null!=window.ProgressEvent)for(t.addEventListener("progress",function(t){return s.progress=t.lengthComputable?100*t.loaded/t.total:s.progress+(100-s.progress)/2},!1),o=["load","abort","timeout","error"],n=0,r=o.length;r>n;n++)e=o[n],t.addEventListener(e,function(){return s.progress=100},!1);else i=t.onreadystatechange,t.onreadystatechange=function(){var e;return 0===(e=t.readyState)||4===e?s.progress=100:3===t.readyState&&(s.progress=50),"function"==typeof i?i.apply(null,arguments):void 0}}}(),d=function(){return function(t){var e,n,r,i,o=this;for(this.progress=0,n=0,r=(i=["error","open"]).length;r>n;n++)e=i[n],t.addEventListener(e,function(){return o.progress=100},!1)}}(),r=function(){return function(t){var e,n,r,o;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(o=t.selectors).length;r>n;n++)e=o[n],this.elements.push(new i(e))}}(),i=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},F.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),n=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),o=function(){return function(){var t,e,n,r,i,o=this;this.progress=0,t=0,i=[],r=0,n=x(),e=setInterval(function(){var s;return s=x()-n-50,n=x(),i.push(s),i.length>F.eventLag.sampleCount&&i.shift(),t=m(i),++r>=F.eventLag.minSamples&&t<F.eventLag.lagThreshold?(o.progress=100,clearInterval(e)):o.progress=3/(t+3)*100},50)}}(),p=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=F.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=P(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return Pace.trigger("update"),null==e&&(e=P(this.source,"progress")),e>=100&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/F.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,F.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+F.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),H=null,q=null,y=null,I=null,g=null,v=null,u.running=!1,A=function(){return F.restartOnPushState?u.restart():void 0},null!=window.history.pushState&&(B=window.history.pushState,window.history.pushState=function(){return A(),B.apply(window.history,arguments)}),null!=window.history.replaceState&&(Y=window.history.replaceState,window.history.replaceState=function(){return A(),Y.apply(window.history,arguments)}),h={ajax:t,elements:r,document:n,eventLag:o},(k=function(){var t,n,r,i,o,s,a,l;for(u.sources=H=[],n=0,i=(s=["ajax","elements","document","eventLag"]).length;i>n;n++)t=s[n],!1!==F[t]&&H.push(new h[t](F[t]));for(r=0,o=(l=null!=(a=F.extraSources)?a:[]).length;o>r;r++)N=l[r],H.push(new N(F));return u.bar=y=new e,q=[],I=new p})(),u.stop=function(){return u.trigger("stop"),u.running=!1,y.destroy(),v=!0,null!=g&&("function"==typeof w&&w(g),g=null),k()},u.restart=function(){return u.trigger("restart"),u.stop(),u.start()},u.go=function(){var t;return u.running=!0,y.render(),t=x(),v=!1,g=R(function(e,n){var r,i,o,s,a,l,c,h,d,f,g,m,w,b,_;for(100-y.progress,i=f=0,o=!0,l=g=0,w=H.length;w>g;l=++g)for(N=H[l],d=null!=q[l]?q[l]:q[l]=[],a=null!=(_=N.elements)?_:[N],c=m=0,b=a.length;b>m;c=++m)s=a[c],h=null!=d[c]?d[c]:d[c]=new p(s),o&=h.done,h.done||(i++,f+=h.tick(e));return r=f/i,y.update(I.tick(e,r)),y.done()||o||v?(y.update(100),u.trigger("done"),setTimeout(function(){return y.finish(),u.running=!1,u.trigger("hide")},Math.max(F.ghostTime,Math.max(F.minTime-(x()-t),0)))):n()})},u.start=function(t){_(F,t),u.running=!0;try{y.render()}catch(t){l=t}return document.querySelector(".pace")?(u.trigger("start"),u.go()):setTimeout(u.start,50)},"function"==typeof define&&define.amd?define(function(){return u}):"object"==typeof exports?module.exports=u:F.startOnPageLoad&&u.start()}.call(this);var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var t={elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"original",data_srcset:"originalSet",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null},e=!("onscroll"in window)||/glebot/.test(navigator.userAgent),n=function(t,e){t&&t(e)},r=function(t){return t.getBoundingClientRect().top+window.pageYOffset-t.ownerDocument.documentElement.clientTop},i=function(t,e,n){return(e===window?window.innerHeight+window.pageYOffset:r(e)+e.offsetHeight)<=r(t)-n},o=function(t){return t.getBoundingClientRect().left+window.pageXOffset-t.ownerDocument.documentElement.clientLeft},s=function(t,e,n){var r=window.innerWidth;return(e===window?r+window.pageXOffset:o(e)+r)<=o(t)-n},a=function(t,e,n){return(e===window?window.pageYOffset:r(e))>=r(t)+n+t.offsetHeight},l=function(t,e,n){return(e===window?window.pageXOffset:o(e))>=o(t)+n+t.offsetWidth},u=function(t,e,n){return!(i(t,e,n)||a(t,e,n)||s(t,e,n)||l(t,e,n))},c=function(t,e){var n=new t(e),r=new CustomEvent("LazyLoad::Initialized",{detail:{instance:n}});window.dispatchEvent(r)},h=function(t,e){var n=t.parentElement;if("PICTURE"===n.tagName)for(var r=0;r<n.children.length;r++){var i=n.children[r];if("SOURCE"===i.tagName){var o=i.dataset[e];o&&i.setAttribute("srcset",o)}}},p=function(t,e,n){var r=t.tagName,i=t.dataset[n];if("IMG"===r){h(t,e);var o=t.dataset[e];return o&&t.setAttribute("srcset",o),void(i&&t.setAttribute("src",i))}"IFRAME"!==r?i&&(t.style.backgroundImage="url("+i+")"):i&&t.setAttribute("src",i)},d=function(e){this._settings=_extends({},t,e),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};d.prototype={_reveal:function(t){var e=this._settings,r=function r(){e&&(t.removeEventListener("load",i),t.removeEventListener("error",r),t.classList.remove(e.class_loading),t.classList.add(e.class_error),n(e.callback_error,t))},i=function i(){e&&(t.classList.remove(e.class_loading),t.classList.add(e.class_loaded),t.removeEventListener("load",i),t.removeEventListener("error",r),n(e.callback_load,t))};"IMG"!==t.tagName&&"IFRAME"!==t.tagName||(t.addEventListener("load",i),t.addEventListener("error",r),t.classList.add(e.class_loading)),p(t,e.data_srcset,e.data_src),n(e.callback_set,t)},_loopThroughElements:function(){var t=this._settings,r=this._elements,i=r?r.length:0,o=void 0,s=[],a=this._isFirstLoop;for(o=0;o<i;o++){var l=r[o];t.skip_invisible&&null===l.offsetParent||(e||u(l,t.container,t.threshold))&&(a&&l.classList.add(t.class_initial),this._reveal(l),s.push(o),l.dataset.wasProcessed=!0)}for(;s.length>0;)r.splice(s.pop(),1),n(t.callback_processed,r.length);0===i&&this._stopScrollHandler(),a&&(this._isFirstLoop=!1)},_purgeElements:function(){var t=this._elements,e=t.length,n=void 0,r=[];for(n=0;n<e;n++)t[n].dataset.wasProcessed&&r.push(n);for(;r.length>0;)t.splice(r.pop(),1)},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},handleScroll:function(){var t=this._settings.throttle;if(0!==t){var e=function(){(new Date).getTime()},n=e(),r=t-(n-this._previousLoopTime);r<=0||r>t?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=n,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=e(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),r))}else this._loopThroughElements()},update:function(){this._elements=Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null}};var f=window.lazyLoadOptions;return f&&function(t,e){var n=e.length;if(n)for(var r=0;r<n;r++)c(t,e[r]);else c(t,e)}(d,f),d}),function(t,e){function n(n){if(void 0===n)throw new Error('Pathformer [constructor]: "element" parameter is required');if(n.constructor===String&&!(n=e.getElementById(n)))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(n.constructor instanceof t.SVGElement||/^svg$/i.test(n.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=n,this.scan(n)}function r(t,e,n){this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(n),this.isReady&&this.init()}n.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],n.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],n.prototype.scan=function(t){for(var e,n,r,i,o=t.querySelectorAll(this.TYPES.join(",")),s=0;s<o.length;s++)n=o[s],e=this[n.tagName.toLowerCase()+"ToPath"],r=e(this.parseAttr(n.attributes)),i=this.pathMaker(n,r),n.parentNode.replaceChild(i,n)},n.prototype.lineToPath=function(t){var e={},n=t.x1||0,r=t.y1||0,i=t.x2||0,o=t.y2||0;return e.d="M"+n+","+r+"L"+i+","+o,e},n.prototype.rectToPath=function(t){var e={},n=parseFloat(t.x)||0,r=parseFloat(t.y)||0,i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;return e.d="M"+n+" "+r+" ",e.d+="L"+(n+i)+" "+r+" ",e.d+="L"+(n+i)+" "+(r+o)+" ",e.d+="L"+n+" "+(r+o)+" Z",e},n.prototype.polylineToPath=function(t){var e,n,r={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var o=[];for(e=0;e<i.length;e+=2)o.push(i[e]+","+i[e+1]);i=o}for(n="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(n+="L"+i[e]);return r.d=n,r},n.prototype.polygonToPath=function(t){var e=n.prototype.polylineToPath(t);return e.d+="Z",e},n.prototype.ellipseToPath=function(t){var e={},n=parseFloat(t.rx)||0,r=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,o=parseFloat(t.cy)||0,s=i-n,a=o,l=parseFloat(i)+parseFloat(n),u=o;return e.d="M"+s+","+a+"A"+n+","+r+" 0,1,1 "+l+","+u+"A"+n+","+r+" 0,1,1 "+s+","+u,e},n.prototype.circleToPath=function(t){var e={},n=parseFloat(t.r)||0,r=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,o=r-n,s=i,a=parseFloat(r)+parseFloat(n),l=i;return e.d="M"+o+","+s+"A"+n+","+n+" 0,1,1 "+a+","+l+"A"+n+","+n+" 0,1,1 "+o+","+l,e},n.prototype.pathMaker=function(t,n){var r,i,o=e.createElementNS("http://www.w3.org/2000/svg","path");for(r=0;r<t.attributes.length;r++)i=t.attributes[r],-1===this.ATTR_WATCH.indexOf(i.name)&&o.setAttribute(i.name,i.value);for(r in n)o.setAttribute(r,n[r]);return o},n.prototype.parseAttr=function(t){for(var e,n={},r=0;r<t.length;r++){if(e=t[r],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");n[e.name]=e.value}return n};var i,o,s;r.LINEAR=function(t){return t},r.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},r.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},r.EASE_IN=function(t){return Math.pow(t,3)},r.EASE_OUT_BOUNCE=function(t){var e=1-Math.cos(.5*t*Math.PI),n=Math.pow(e,1.5),r=Math.pow(1-t,2);return 1-r+(1-Math.abs(Math.cos(2.5*n*Math.PI)))*r},r.prototype.setElement=function(n,r){if(void 0===n)throw new Error('Vivus [constructor]: "element" parameter is required');if(n.constructor===String&&!(n=e.getElementById(n)))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=n,r&&r.file){var i=e.createElement("object");i.setAttribute("type","image/svg+xml"),i.setAttribute("data",r.file),i.setAttribute("built-by-vivus","true"),n.appendChild(i),n=i}switch(n.constructor){case t.SVGSVGElement:case t.SVGElement:this.el=n,this.isReady=!0;break;case t.HTMLObjectElement:var o,s;s=this,(o=function(t){if(!s.isReady){if(s.el=n.contentDocument&&n.contentDocument.querySelector("svg"),!s.el&&t)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");return s.el?(n.getAttribute("built-by-vivus")&&(s.parentEl.insertBefore(s.el,n),s.parentEl.removeChild(n),s.el.setAttribute("width","100%"),s.el.setAttribute("height","100%")),s.isReady=!0,s.init(),!0):void 0}})()||n.addEventListener("load",o);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},r.prototype.setOptions=function(e){var n=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],i=["inViewport","manual","autostart"];if(void 0!==e&&e.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if((e=e||{}).type&&-1===n.indexOf(e.type))throw new Error("Vivus [constructor]: "+e.type+" is not an existing animation `type`");if(this.type=e.type||n[0],e.start&&-1===i.indexOf(e.start))throw new Error("Vivus [constructor]: "+e.start+" is not an existing `start` option");if(this.start=e.start||i[0],this.isIE=-1!==t.navigator.userAgent.indexOf("MSIE")||-1!==t.navigator.userAgent.indexOf("Trident/")||-1!==t.navigator.userAgent.indexOf("Edge/"),this.duration=s(e.duration,120),this.delay=s(e.delay,null),this.dashGap=s(e.dashGap,1),this.forceRender=e.hasOwnProperty("forceRender")?!!e.forceRender:this.isIE,this.reverseStack=!!e.reverseStack,this.selfDestroy=!!e.selfDestroy,this.onReady=e.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=!!e.hasOwnProperty("ignoreInvisible")&&!!e.ignoreInvisible,this.animTimingFunction=e.animTimingFunction||r.LINEAR,this.pathTimingFunction=e.pathTimingFunction||r.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},r.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},r.prototype.mapping=function(){var e,n,r,i,o,a,l,u;for(u=a=l=0,n=this.el.querySelectorAll("path"),e=0;e<n.length;e++)r=n[e],this.isInvisible(r)||(o={el:r,length:Math.ceil(r.getTotalLength())},isNaN(o.length)?t.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",r):(this.map.push(o),r.style.strokeDasharray=o.length+" "+(o.length+2*this.dashGap),r.style.strokeDashoffset=o.length+this.dashGap,o.length+=this.dashGap,a+=o.length,this.renderPath(e)));for(a=0===a?1:a,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(n.length>1?n.length-1:1),this.reverseStack&&this.map.reverse(),e=0;e<this.map.length;e++){switch(o=this.map[e],this.type){case"delayed":o.startAt=this.delayUnit*e,o.duration=this.duration-this.delay;break;case"oneByOne":o.startAt=l/a*this.duration,o.duration=o.length/a*this.duration;break;case"sync":case"async":case"nsync":o.startAt=0,o.duration=this.duration;break;case"scenario-sync":r=o.el,i=this.parseAttr(r),o.startAt=u+(s(i["data-delay"],this.delayUnit)||0),o.duration=s(i["data-duration"],this.duration),u=void 0!==i["data-async"]?o.startAt:o.startAt+o.duration,this.frameLength=Math.max(this.frameLength,o.startAt+o.duration);break;case"scenario":r=o.el,i=this.parseAttr(r),o.startAt=s(i["data-start"],this.delayUnit)||0,o.duration=s(i["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,o.startAt+o.duration)}l+=o.length,this.frameLength=this.frameLength||this.duration}},r.prototype.drawer=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),void(this.handle=i(function(){t.drawer()}));this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},r.prototype.trace=function(){var t,e,n,r;for(r=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)n=this.map[t],e=(r-n.startAt)/n.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),n.progress!==e&&(n.progress=e,n.el.style.strokeDashoffset=Math.floor(n.length*(1-e)),this.renderPath(t))},r.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],n=e.el.cloneNode(!0);e.el.parentNode.replaceChild(n,e.el),e.el=n}},r.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new n(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},r.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var e=this,n=function(){e.isInViewport(e.parentEl,1)&&(e.play(),t.removeEventListener("scroll",n))};t.addEventListener("scroll",n),n()}},r.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},r.prototype.reset=function(){return this.setFrameProgress(0)},r.prototype.finish=function(){return this.setFrameProgress(1)},r.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},r.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.drawer(),this},r.prototype.stop=function(){return this.handle&&(o(this.handle),this.handle=null),this},r.prototype.destroy=function(){this.stop();var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},r.prototype.isInvisible=function(t){var e,n=t.getAttribute("data-ignore");return null!==n?"false"!==n:!!this.ignoreInvisible&&(!(e=t.getBoundingClientRect()).width&&!e.height)},r.prototype.parseAttr=function(t){var e,n={};if(t&&t.attributes)for(var r=0;r<t.attributes.length;r++)e=t.attributes[r],n[e.name]=e.value;return n},r.prototype.isInViewport=function(t,e){var n=this.scrollY(),r=n+this.getViewportH(),i=t.getBoundingClientRect(),o=i.height,s=n+i.top,a=s+o;return e=e||0,r>=s+o*e&&a>=n},r.prototype.docElem=t.document.documentElement,r.prototype.getViewportH=function(){var e=this.docElem.clientHeight,n=t.innerHeight;return n>e?n:e},r.prototype.scrollY=function(){return t.pageYOffset||this.docElem.scrollTop},i=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)},o=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||t.msCancelAnimationFrame||function(e){return t.clearTimeout(e)},s=function(t,e){var n=parseInt(t,10);return n>=0?n:e},"function"==typeof define&&define.amd?define([],function(){return r}):"object"==typeof exports?module.exports=r:t.Vivus=r}(window,document);var VivusHoola,myLazyLoad=new LazyLoad;!function(t){function e(){var e=t(window).scrollTop();2===a&&e>=s.three||3===a&&e<=s.three?(t("#lemon-bg path").each(function(e){t(this).css({"transition-delay":.5+.01*e+"s"})}),lemon_slot.addClass("animate"),a=2===a?3:2):3===a&&e>=s.four||4===a&&e<=s.four?(hoochlife_bg.toggle(),VivusHoola.play(),hoola_slot.addClass("animate"),a=3===a?4:3):(4===a&&e>=s.five||5===a&&e<=s.five)&&(t(o).toggleClass("fixed"),a=4===a?5:4)}function n(){r=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,hoochlife_bg=t("#hoochlife").children(".fixed-backdrop"),liquidgold=t("#liquidgold"),o=t("#whatson"),lemon_slot=t("#lemon-slot"),hoola_slot=t("#hoola-slot"),s={two:liquidgold.offset().top,three:hoola_slot.offset().top-1.75*i,four:o.offset().top-1.75*i,five:o.offset().top+o.outerHeight(!0)-i},a=2,console.log(s)}var r,i,o,s,a;r=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,VivusHoola=new Vivus("hoola-bg",{duration:100,file:"/wp-content/themes/hooch/assets/svg/Hoola-bg.svg",pathTimingFunction:Vivus.EASE_OUT_BOUNCE},function(t){t.parentEl.classList.add("finished")}),t('.finder input[type="submit"]').on("click",function(){alert("Error: awaiting database")}),document.addEventListener("touchmove",e,{capture:!0}),document.addEventListener("scroll",e,{capture:!0}),t(".mobile-menu").click(function(){return t("#mobile-nav").toggleClass("active"),!1}),t("#mobile-nav a:not(.mobile-menu)").click(function(){t("#mobile-nav").toggleClass("active")}),Pace.on("done",function(){document.documentElement.className=document.documentElement.className.replace(/\bintro\b/,""),n()})}(jQuery),function(t,e,n,r,i,o,s){t.GoogleAnalyticsObject=i,t[i]=t[i]||function(){(t[i].q=t[i].q||[]).push(arguments)},t[i].l=1*new Date,o=e.createElement(n),s=e.getElementsByTagName(n)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(o,s)}(window,document,"script",0,"ga"),ga("create","UA-8273012-16","auto"),ga("send","pageview");