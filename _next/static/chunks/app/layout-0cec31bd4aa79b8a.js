(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9512:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,3704,23)),Promise.resolve().then(n.t.bind(n,4415,23)),Promise.resolve().then(n.t.bind(n,2494,23)),Promise.resolve().then(n.t.bind(n,9324,23))},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return m},handleClientScriptLoad:function(){return b},initScriptLoader:function(){return y}});let r=n(306),a=n(9955),l=n(5155),i=r._(n(7650)),s=a._(n(2115)),o=n(1147),u=n(2815),c=n(8571),d=new Map,f=new Set,p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},_=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:i="",strategy:s="afterInteractive",onError:o,stylesheets:c}=e,_=n||t;if(_&&f.has(_))return;if(d.has(t)){f.add(_),d.get(t).then(r,o);return}let b=()=>{a&&a(),f.add(_)},y=document.createElement("script"),g=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),b()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){o&&o(e)});l?(y.innerHTML=l.__html||"",b()):i?(y.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",b()):t&&(y.src=t,d.set(t,g)),(0,u.setAttributesFromProps)(y,e),"worker"===s&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",s),c&&p(c),document.body.appendChild(y)};function b(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>_(e))}):_(e)}function y(e){e.forEach(b),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:d,stylesheets:p,...b}=e,{updateScripts:y,scripts:g,getIsSsr:m,appDir:h,nonce:v}=(0,s.useContext)(o.HeadManagerContext),O=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||n;O.current||(a&&e&&f.has(e)&&a(),O.current=!0)},[a,t,n]);let I=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{!I.current&&("afterInteractive"===u?_(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>_(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>_(e))})),I.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(g[u]=(g[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...b}]),y(g)):m&&m()?f.add(t||n):m&&!m()&&_(e)),h){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(i.default.preload(n,b.integrity?{as:"script",integrity:b.integrity,nonce:v,crossOrigin:b.crossOrigin}:{as:"script",nonce:v,crossOrigin:b.crossOrigin}),(0,l.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...b,id:t}])+")"}})):(b.dangerouslySetInnerHTML&&(b.children=b.dangerouslySetInnerHTML.__html,delete b.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...b,id:t}])+")"}}));"afterInteractive"===u&&n&&i.default.preload(n,b.integrity?{as:"script",integrity:b.integrity,nonce:v,crossOrigin:b.crossOrigin}:{as:"script",nonce:v,crossOrigin:b.crossOrigin})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let m=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return l}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function l(e,t){for(let[l,i]of Object.entries(t)){if(!t.hasOwnProperty(l)||r.includes(l)||void 0===i)continue;let s=n[l]||l.toLowerCase();"SCRIPT"===e.tagName&&a(s)?e[s]=!!i:e.setAttribute(s,String(i)),(!1===i||"SCRIPT"===e.tagName&&a(s)&&(!i||"false"===i))&&(e.setAttribute(s,""),e.removeAttribute(s))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9324:()=>{},2494:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_f434ac",variable:"__variable_f434ac"}},4415:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_ee36b3",variable:"__variable_ee36b3"}}},e=>{var t=t=>e(e.s=t);e.O(0,[30,441,517,358],()=>t(9512)),_N_E=e.O()}]);