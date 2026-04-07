(function(){"use strict";var lt,$,Ln,Ee,Mn,Rn,On,Dn,Ut,Ft,zt,ct={},dt=[],pr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ut=Array.isArray;function be(e,t){for(var n in t)e[n]=t[n];return e}function Bt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function $n(e,t,n){var o,r,i,s={};for(i in t)i=="key"?o=t[i]:i=="ref"?r=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?lt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return pt(e,s,o,r,null)}function pt(e,t,n,o,r){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Ln,__i:-1,__u:0};return r==null&&$.vnode!=null&&$.vnode(i),i}function De(e){return e.children}function ft(e,t){this.props=e,this.context=t}function $e(e,t){if(t==null)return e.__?$e(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?$e(e):null}function fr(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,o=[],r=[],i=be({},t);i.__v=t.__v+1,$.vnode&&$.vnode(i),Gt(e.__P,i,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,o,n??$e(t),!!(32&t.__u),r),i.__v=t.__v,i.__.__k[i.__i]=i,Gn(o,i,r),t.__e=t.__=null,i.__e!=n&&Pn(i)}}function Pn(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Pn(e)}function Hn(e){(!e.__d&&(e.__d=!0)&&Ee.push(e)&&!gt.__r++||Mn!=$.debounceRendering)&&((Mn=$.debounceRendering)||Rn)(gt)}function gt(){try{for(var e,t=1;Ee.length;)Ee.length>t&&Ee.sort(On),e=Ee.shift(),t=Ee.length,fr(e)}finally{Ee.length=gt.__r=0}}function Un(e,t,n,o,r,i,s,l,p,u,g){var c,_,b,y,R,O,C,w=o&&o.__k||dt,L=t.length;for(p=gr(n,t,w,p,L),c=0;c<L;c++)(b=n.__k[c])!=null&&(_=b.__i!=-1&&w[b.__i]||ct,b.__i=c,O=Gt(e,b,_,r,i,s,l,p,u,g),y=b.__e,b.ref&&_.ref!=b.ref&&(_.ref&&jt(_.ref,null,b),g.push(b.ref,b.__c||y,b)),R==null&&y!=null&&(R=y),(C=!!(4&b.__u))||_.__k===b.__k?p=Fn(b,p,e,C):typeof b.type=="function"&&O!==void 0?p=O:y&&(p=y.nextSibling),b.__u&=-7);return n.__e=R,p}function gr(e,t,n,o,r){var i,s,l,p,u,g=n.length,c=g,_=0;for(e.__k=new Array(r),i=0;i<r;i++)(s=t[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[i]=pt(null,s,null,null,null):ut(s)?s=e.__k[i]=pt(De,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[i]=pt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[i]=s,p=i+_,s.__=e,s.__b=e.__b+1,l=null,(u=s.__i=hr(s,n,p,c))!=-1&&(c--,(l=n[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(r>g?_--:r<g&&_++),typeof s.type!="function"&&(s.__u|=4)):u!=p&&(u==p-1?_--:u==p+1?_++:(u>p?_--:_++,s.__u|=4))):e.__k[i]=null;if(c)for(i=0;i<g;i++)(l=n[i])!=null&&(2&l.__u)==0&&(l.__e==o&&(o=$e(l)),jn(l,l));return o}function Fn(e,t,n,o){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=Fn(r[i],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=$e(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function hr(e,t,n,o){var r,i,s,l=e.key,p=e.type,u=t[n],g=u!=null&&(2&u.__u)==0;if(u===null&&l==null||g&&l==u.key&&p==u.type)return n;if(o>(g?1:0)){for(r=n-1,i=n+1;r>=0||i<t.length;)if((u=t[s=r>=0?r--:i++])!=null&&(2&u.__u)==0&&l==u.key&&p==u.type)return s}return-1}function zn(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||pr.test(t)?n:n+"px"}function ht(e,t,n,o,r){var i,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||zn(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||zn(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(Dn,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o?n.u=o.u:(n.u=Ut,e.addEventListener(t,i?zt:Ft,i)):e.removeEventListener(t,i?zt:Ft,i);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Bn(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Ut++;else if(t.t<n.u)return;return n($.event?$.event(t):t)}}}function Gt(e,t,n,o,r,i,s,l,p,u){var g,c,_,b,y,R,O,C,w,L,S,h,T,k,I,D=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(p=!!(32&n.__u),i=[l=t.__e=n.__e]),(g=$.__b)&&g(t);e:if(typeof D=="function")try{if(C=t.props,w=D.prototype&&D.prototype.render,L=(g=D.contextType)&&o[g.__c],S=g?L?L.props.value:g.__:o,n.__c?O=(c=t.__c=n.__c).__=c.__E:(w?t.__c=c=new D(C,S):(t.__c=c=new ft(C,S),c.constructor=D,c.render=br),L&&L.sub(c),c.state||(c.state={}),c.__n=o,_=c.__d=!0,c.__h=[],c._sb=[]),w&&c.__s==null&&(c.__s=c.state),w&&D.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=be({},c.__s)),be(c.__s,D.getDerivedStateFromProps(C,c.__s))),b=c.props,y=c.state,c.__v=t,_)w&&D.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),w&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(w&&D.getDerivedStateFromProps==null&&C!==b&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(C,S),t.__v==n.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(C,c.__s,S)===!1){t.__v!=n.__v&&(c.props=C,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(U){U&&(U.__=t)}),dt.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(C,c.__s,S),w&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(b,y,R)})}if(c.context=S,c.props=C,c.__P=e,c.__e=!1,h=$.__r,T=0,w)c.state=c.__s,c.__d=!1,h&&h(t),g=c.render(c.props,c.state,c.context),dt.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,h&&h(t),g=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++T<25);c.state=c.__s,c.getChildContext!=null&&(o=be(be({},o),c.getChildContext())),w&&!_&&c.getSnapshotBeforeUpdate!=null&&(R=c.getSnapshotBeforeUpdate(b,y)),k=g!=null&&g.type===De&&g.key==null?Wn(g.props.children):g,l=Un(e,ut(k)?k:[k],t,n,o,r,i,s,l,p,u),c.base=t.__e,t.__u&=-161,c.__h.length&&s.push(c),O&&(c.__E=c.__=null)}catch(U){if(t.__v=null,p||i!=null)if(U.then){for(t.__u|=p?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,t.__e=l}else{for(I=i.length;I--;)Bt(i[I]);Wt(t)}else t.__e=n.__e,t.__k=n.__k,U.then||Wt(t);$.__e(U,t,n)}else i==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=mr(n.__e,t,n,o,r,i,s,p,u);return(g=$.diffed)&&g(t),128&t.__u?void 0:l}function Wt(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Wt))}function Gn(e,t,n){for(var o=0;o<n.length;o++)jt(n[o],n[++o],n[++o]);$.__c&&$.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(i){i.call(r)})}catch(i){$.__e(i,r.__v)}})}function Wn(e){return typeof e!="object"||e==null||e.__b>0?e:ut(e)?e.map(Wn):be({},e)}function mr(e,t,n,o,r,i,s,l,p){var u,g,c,_,b,y,R,O=n.props||ct,C=t.props,w=t.type;if(w=="svg"?r="http://www.w3.org/2000/svg":w=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),i!=null){for(u=0;u<i.length;u++)if((b=i[u])&&"setAttribute"in b==!!w&&(w?b.localName==w:b.nodeType==3)){e=b,i[u]=null;break}}if(e==null){if(w==null)return document.createTextNode(C);e=document.createElementNS(r,w,C.is&&C),l&&($.__m&&$.__m(t,i),l=!1),i=null}if(w==null)O===C||l&&e.data==C||(e.data=C);else{if(i=i&&lt.call(e.childNodes),!l&&i!=null)for(O={},u=0;u<e.attributes.length;u++)O[(b=e.attributes[u]).name]=b.value;for(u in O)b=O[u],u=="dangerouslySetInnerHTML"?c=b:u=="children"||u in C||u=="value"&&"defaultValue"in C||u=="checked"&&"defaultChecked"in C||ht(e,u,null,b,r);for(u in C)b=C[u],u=="children"?_=b:u=="dangerouslySetInnerHTML"?g=b:u=="value"?y=b:u=="checked"?R=b:l&&typeof b!="function"||O[u]===b||ht(e,u,b,O[u],r);if(g)l||c&&(g.__html==c.__html||g.__html==e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(c&&(e.innerHTML=""),Un(t.type=="template"?e.content:e,ut(_)?_:[_],t,n,o,w=="foreignObject"?"http://www.w3.org/1999/xhtml":r,i,s,i?i[0]:n.__k&&$e(n,0),l,p),i!=null)for(u=i.length;u--;)Bt(i[u]);l||(u="value",w=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[u]||w=="progress"&&!y||w=="option"&&y!=O[u])&&ht(e,u,y,O[u],r),u="checked",R!=null&&R!=e[u]&&ht(e,u,R,O[u],r))}return e}function jt(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(r){$.__e(r,n)}}function jn(e,t,n){var o,r;if($.unmount&&$.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||jt(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){$.__e(i,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&jn(o[r],t,n||typeof e.type!="function");n||Bt(e.__e),e.__c=e.__=e.__e=void 0}function br(e,t,n){return this.constructor(e,n)}function _r(e,t,n){var o,r,i,s;t==document&&(t=document.documentElement),$.__&&$.__(e,t),r=(o=!1)?null:t.__k,i=[],s=[],Gt(t,e=t.__k=$n(De,null,[e]),r||ct,ct,t.namespaceURI,r?null:t.firstChild?lt.call(t.childNodes):null,i,r?r.__e:t.firstChild,o,s),Gn(i,e,s)}lt=dt.slice,$={__e:function(e,t,n,o){for(var r,i,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(e)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),s=r.__d),s)return r.__E=r}catch(l){e=l}throw e}},Ln=0,ft.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=be({},this.state),typeof e=="function"&&(e=e(be({},n),this.props)),e&&be(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Hn(this))},ft.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Hn(this))},ft.prototype.render=De,Ee=[],Rn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,On=function(e,t){return e.__v.__b-t.__v.__b},gt.__r=0,Dn=/(PointerCapture)$|Capture$/i,Ut=0,Ft=Bn(!1),zt=Bn(!0);var yr=0;function d(e,t,n,o,r,i){t||(t={});var s,l,p=t;if("ref"in p)for(l in p={},t)l=="ref"?s=t[l]:p[l]=t[l];var u={type:e,props:p,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--yr,__i:-1,__u:0,__source:r,__self:i};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)p[l]===void 0&&(p[l]=s[l]);return $.vnode&&$.vnode(u),u}var Xe,G,Vt,Vn,qe=0,Xn=[],j=$,qn=j.__b,Yn=j.__r,Kn=j.diffed,Jn=j.__c,Zn=j.unmount,Qn=j.__;function Xt(e,t){j.__h&&j.__h(G,e,qe||t),qe=0;var n=G.__H||(G.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ie(e){return qe=1,vr(no,e)}function vr(e,t,n){var o=Xt(Xe++,2);if(o.t=e,!o.__c&&(o.__=[no(void 0,t),function(l){var p=o.__N?o.__N[0]:o.__[0],u=o.t(p,l);p!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=G,!G.__f)){var r=function(l,p,u){if(!o.__c.__H)return!0;var g=o.__c.__H.__.filter(function(_){return _.__c});if(g.every(function(_){return!_.__N}))return!i||i.call(this,l,p,u);var c=o.__c.props!==l;return g.some(function(_){if(_.__N){var b=_.__[0];_.__=_.__N,_.__N=void 0,b!==_.__[0]&&(c=!0)}}),i&&i.call(this,l,p,u)||c};G.__f=!0;var i=G.shouldComponentUpdate,s=G.componentWillUpdate;G.componentWillUpdate=function(l,p,u){if(this.__e){var g=i;i=void 0,r(l,p,u),i=g}s&&s.call(this,l,p,u)},G.shouldComponentUpdate=r}return o.__N||o.__}function ke(e,t){var n=Xt(Xe++,3);!j.__s&&to(n.__H,t)&&(n.__=e,n.u=t,G.__H.__h.push(n))}function Te(e){return qe=5,Ye(function(){return{current:e}},[])}function Ye(e,t){var n=Xt(Xe++,7);return to(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function qt(e,t){return qe=8,Ye(function(){return e},t)}function xr(){for(var e;e=Xn.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(mt),t.__h.some(Yt),t.__h=[]}catch(n){t.__h=[],j.__e(n,e.__v)}}}j.__b=function(e){G=null,qn&&qn(e)},j.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Qn&&Qn(e,t)},j.__r=function(e){Yn&&Yn(e),Xe=0;var t=(G=e.__c).__H;t&&(Vt===G?(t.__h=[],G.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(mt),t.__h.some(Yt),t.__h=[],Xe=0)),Vt=G},j.diffed=function(e){Kn&&Kn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Xn.push(t)!==1&&Vn===j.requestAnimationFrame||((Vn=j.requestAnimationFrame)||wr)(xr)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Vt=G=null},j.__c=function(e,t){t.some(function(n){try{n.__h.some(mt),n.__h=n.__h.filter(function(o){return!o.__||Yt(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],j.__e(o,n.__v)}}),Jn&&Jn(e,t)},j.unmount=function(e){Zn&&Zn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(o){try{mt(o)}catch(r){t=r}}),n.__H=void 0,t&&j.__e(t,n.__v))};var eo=typeof requestAnimationFrame=="function";function wr(e){var t,n=function(){clearTimeout(o),eo&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);eo&&(t=requestAnimationFrame(n))}function mt(e){var t=G,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),G=t}function Yt(e){var t=G;e.__c=e.__(),G=t}function to(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function no(e,t){return typeof t=="function"?t(e):t}function Er(e){return new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const r=o.result;t(r.split(",")[1])},o.onerror=()=>n(new Error("Failed to read file")),o.readAsDataURL(e)})}async function Tr(e,t){const n=`${e}/api/products/${t}/config`;console.log("[Argide] fetchConfig HTTP GET",n);try{const o=await fetch(n,{headers:{"ngrok-skip-browser-warning":"true"}});if(console.log("[Argide] fetchConfig HTTP status:",o.status,o.statusText),!o.ok)return console.warn("[Argide] fetchConfig non-OK response, returning {}"),{};const r=await o.json();return console.log("[Argide] fetchConfig raw JSON:",JSON.stringify(r,null,2)),r}catch(o){return console.error("[Argide] fetchConfig threw:",o),{}}}async function Ke(e,t,n,o,r,i,s,l){const p={productId:t,messages:n,endUserSessionId:o};r&&(p.conversationId=r),i&&i.length>0&&(p.attachments=i),l&&(p.autoEscalate=!0);const u=await fetch(`${e}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify(p),signal:s});if(!u.ok){const c=await u.json().catch(()=>({error:"Request failed"}));throw new Error(c.error||`HTTP ${u.status}`)}if(u.headers.get("X-Handed-Off")==="1")return{stream:new ReadableStream({start(_){_.close()}}),conversationId:u.headers.get("X-Conversation-Id"),handedOff:!0};if(!u.body)throw new Error("No response stream available");return{stream:u.body,conversationId:u.headers.get("X-Conversation-Id")}}async function Sr(e,t,n){const o=`${e}/api/widget/conversations/${t}/messages?endUserSessionId=${encodeURIComponent(n)}`,r=await fetch(o,{headers:{"ngrok-skip-browser-warning":"true"}}).catch(()=>null);return r!=null&&r.ok?(await r.json().catch(()=>({}))).messages??[]:[]}async function oo(e,t,n,o,r){const i=await fetch(`${e}/api/widget/identify`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:t,endUserSessionId:n,token:o,name:r})}),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`HTTP ${i.status}`);return s}async function ro(e,t,n){const o=await fetch(`${e}/api/widget/reset-user`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:t,endUserSessionId:n})}),r=await o.json().catch(()=>({}));if(!o.ok)throw new Error(r.error||`HTTP ${o.status}`);return r}const Ar={isOpen:!1,messages:[],isStreaming:!1,error:null,errorRetriable:!1};function Je(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function kr(e,t){var n;switch(t.type){case"OPEN":return{...e,isOpen:!0,error:null,errorRetriable:!1};case"CLOSE":return{...e,isOpen:!1};case"LOAD_MESSAGES":return{...e,messages:t.messages};case"ADD_USER_MESSAGE":return{...e,error:null,errorRetriable:!1,messages:[...e.messages,{id:t.id,role:"user",content:t.content,timestamp:Date.now()}]};case"ADD_ADMIN_MESSAGE":{if(e.messages.some(r=>r.id===t.message.id))return e;if(e.isStreaming){const r=e.messages.findLastIndex(i=>i.role==="assistant"&&i.isStreaming);if(r!==-1){const i=[...e.messages];return i.splice(r,0,t.message),{...e,messages:i}}}return{...e,messages:[...e.messages,t.message]}}case"START_STREAMING":return{...e,isStreaming:!0,error:null,errorRetriable:!1,messages:[...e.messages,{id:t.id,role:"assistant",content:"",isStreaming:!0,source:"ai",timestamp:Date.now()}]};case"APPEND_TEXT":{const o=[...e.messages],r=o[o.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(o[o.length-1]={...r,content:r.content+t.text}),{...e,messages:o}}case"ADD_TOOL_CALL":{const o=[...e.messages],r=o[o.length-1];if(r&&r.role==="assistant"){const i=[...r.toolCalls??[],t.toolCall];o[o.length-1]={...r,toolCalls:i}}return{...e,messages:o}}case"SET_TOOL_RESULT":{const o=[...e.messages],r=o[o.length-1];if(r&&r.role==="assistant"&&r.toolCalls){const i=r.toolCalls.map(s=>s.id===t.toolCallId?{...s,result:t.result,status:"done"}:s);o[o.length-1]={...r,toolCalls:i}}return{...e,messages:o}}case"FINISH_STREAMING":{const o=[...e.messages],r=o[o.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(r.content?o[o.length-1]={...r,isStreaming:!1}:o.pop()),{...e,isStreaming:!1,messages:o}}case"STOP_STREAMING":{const o=[...e.messages],r=o[o.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(!r.content&&!((n=r.toolCalls)!=null&&n.length)?o.pop():o[o.length-1]={...r,isStreaming:!1}),{...e,isStreaming:!1,messages:o}}case"SET_ERROR":{const o=[...e.messages],r=o[o.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(o[o.length-1]={...r,isStreaming:!1}),{...e,isStreaming:!1,error:t.error,errorRetriable:t.retriable??!1,messages:o}}case"CLEAR_MESSAGES":return{...e,messages:[],error:null,errorRetriable:!1,isStreaming:!1};default:return e}}async function Kt(e,t,n){const o=e.getReader(),r=new TextDecoder;let i="";try{for(;;){if(n!=null&&n.aborted){await o.cancel();break}const{done:s,value:l}=await o.read();if(i+=s?r.decode():r.decode(l,{stream:!0}),s)break;const p=i.split(`

`);i=p.pop()??"";for(const u of p){if(n!=null&&n.aborted)break;io(u.trim(),t)}}!(n!=null&&n.aborted)&&i.trim()&&io(i.trim(),t),t.onFinish()}catch(s){if(n!=null&&n.aborted){t.onFinish();return}const l=s instanceof Error?s.message:"Stream read failed";t.onError(l)}finally{o.releaseLock()}}function io(e,t){const n=e.split(`
`);for(const o of n){if(!o.startsWith("data: "))continue;const r=o.slice(6);if(r==="[DONE]")return;try{const i=JSON.parse(r);switch(i.type){case"text-delta":i.delta&&t.onTextDelta(i.delta);break;case"tool-input-available":i.toolCallId&&i.toolName&&t.onToolCall(i.toolCallId,i.toolName,i.input??{},i.providerMetadata);break;case"tool-output-available":i.toolCallId&&t.onToolResult(i.toolCallId,i.output);break;case"tool-call":i.toolCallId&&i.toolName&&t.onToolCall(i.toolCallId,i.toolName,i.input??{});break;case"tool-result":i.toolCallId&&t.onToolResult(i.toolCallId,i.output);break;case"error":t.onError(i.errorText??i.reason??"Unknown error");break;case"abort":t.onError(i.reason??"Response aborted");break;default:break}}catch{}}}const Cr=10,Ir=30,Jt=500,Nr="og2-widget-root",Lr=new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","NAV","HEADER","FOOTER"]),Mr="a[href], button, input, select, textarea";function Zt(e){if(!(e instanceof HTMLElement))return!1;if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=e;for(;t;){if(t.hidden||t.getAttribute("aria-hidden")==="true")return!1;const n=getComputedStyle(t);if(n.display==="none"||n.visibility==="hidden")return!1;t=t.parentElement}return!0}function Qt(e){return!!e.closest(`#${Nr}`)}function Rr(e){var n,o;if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){if(e.id){const r=document.querySelector(`label[for="${CSS.escape(e.id)}"]`);if((n=r==null?void 0:r.textContent)!=null&&n.trim())return r.textContent.trim()}return e.getAttribute("aria-label")||e.placeholder||e.getAttribute("name")||""}const t=(o=e.innerText)==null?void 0:o.trim();return t||e.getAttribute("aria-label")||e.getAttribute("title")||""}function so(e,t){return e.length<=t?e:e.slice(0,t-3)+"..."}function ao(){var g;const e=window.location.pathname+window.location.search,t=document.title||"",n=document.querySelectorAll("h1, h2, h3"),o=[];for(const c of n){if(o.length>=Cr)break;if(Qt(c)||!Zt(c))continue;const _=(g=c.innerText)==null?void 0:g.trim();_&&!o.includes(_)&&o.push(_)}const r=document.querySelectorAll(Mr),i=[],s=new Set;for(const c of r){if(i.length>=Ir)break;if(Qt(c)||!Zt(c))continue;const _=Rr(c);if(!_)continue;const b=`${c.tagName}:${_}`;if(s.has(b))continue;s.add(b);const y={tag:c.tagName.toLowerCase(),text:so(_,80)};if(c instanceof HTMLInputElement&&(y.type=c.type),c instanceof HTMLAnchorElement&&c.href)try{const R=new URL(c.href);y.href=R.pathname+R.search}catch{y.href=c.getAttribute("href")||void 0}i.push(y)}const l=document.querySelector("main")||document.body;let p="";function u(c){var b;if(p.length>=Jt)return;if(c.nodeType===Node.TEXT_NODE){const y=(b=c.textContent)==null?void 0:b.trim();y&&(p+=(p?" ":"")+y);return}if(c.nodeType!==Node.ELEMENT_NODE)return;const _=c;if(!Lr.has(_.tagName)&&!Qt(_)&&Zt(_)){for(const y of _.childNodes)if(u(y),p.length>=Jt)return}}return u(l),p=so(p.replace(/\s+/g," ").trim(),Jt),{url:e,title:t,headings:o,interactiveElements:i,visibleText:p}}const en={capture_screen:async()=>ao()};function tn(e){Object.assign(en,e)}function lo(e){return en[e]}function co(e){return Object.hasOwn(en,e)}const uo="og2-action-highlight",Or=1e4;let de=null,bt=null;function _t(e,t="#3b82f6",n=Or){ue();const o=e.getBoundingClientRect(),r=4,i=document.createElement("div");i.id=uo,Object.assign(i.style,{position:"fixed",top:`${o.top-r}px`,left:`${o.left-r}px`,width:`${o.width+r*2}px`,height:`${o.height+r*2}px`,border:`2px solid ${t}`,borderRadius:"4px",backgroundColor:po(t,.08),pointerEvents:"none",zIndex:"2147483646",transition:"opacity 0.2s ease, top 0.15s ease, left 0.15s ease, width 0.15s ease, height 0.15s ease",boxShadow:`0 0 0 2px ${po(t,.2)}`}),document.body.appendChild(i),de=i;const s=()=>{if(!de)return;const l=e.getBoundingClientRect();de.style.top=`${l.top-r}px`,de.style.left=`${l.left-r}px`,de.style.width=`${l.width+r*2}px`,de.style.height=`${l.height+r*2}px`};window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s,{passive:!0}),bt=setTimeout(()=>{ue(),window.removeEventListener("scroll",s),window.removeEventListener("resize",s)},n),i.__og2Cleanup=()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}}function ue(){if(bt&&(clearTimeout(bt),bt=null),de){const t=de.__og2Cleanup;typeof t=="function"&&t(),de.style.opacity="0";const n=de;setTimeout(()=>{try{n.remove()}catch{}},200),de=null}const e=document.getElementById(uo);if(e)try{e.remove()}catch{}}function po(e,t){const n=e.replace("#",""),o=parseInt(n.substring(0,2),16),r=parseInt(n.substring(2,4),16),i=parseInt(n.substring(4,6),16);return isNaN(o)||isNaN(r)||isNaN(i)?`rgba(59,130,246,${t})`:`rgba(${o},${r},${i},${t})`}let se=null,nn=!1;const Pe=new EventTarget;function Dr(){nn=!1}function fo(){return nn}function go(){nn=!0}function ho(e,t,n){return new Promise(o=>{se={resolve:o,elementId:e,method:t,description:n},Pe.dispatchEvent(new CustomEvent("approval-requested",{detail:{elementId:e,method:t,description:n}}));const r=setTimeout(()=>{(se==null?void 0:se.elementId)===e&&(se.resolve(!1),se=null,ue(),Pe.dispatchEvent(new Event("approval-dismissed")))},3e4),i=o;se.resolve=s=>{clearTimeout(r),i(s)}})}function on(e){se&&(se.resolve(e),se=null)}function $r(){se&&(se.resolve(!1),se=null,ue())}const Pr="og2-chat-",Hr="og2-enduser-session-",rn="og2-conv-";function sn(e){return`${Pr}${e}`}function mo(e){return`${Hr}${e}`}function bo(){var t,n;const e=(n=(t=globalThis.crypto)==null?void 0:t.randomUUID)==null?void 0:n.call(t);return e||`${Date.now()}-${Math.random().toString(16).slice(2)}`}function _e(e){const t=mo(e);try{const n=localStorage.getItem(t);if(n&&n.trim())return n;const o=`sess_${bo()}`;return localStorage.setItem(t,o),o}catch{return`sess_${bo()}`}}function _o(e){try{localStorage.removeItem(mo(e))}catch{}}function an(e,t){try{const n=t.map(({isStreaming:o,...r})=>r);sessionStorage.setItem(sn(e),JSON.stringify(n))}catch{}}function Ur(e){try{const t=sessionStorage.getItem(sn(e));return t?JSON.parse(t):[]}catch{return[]}}function yt(e){try{sessionStorage.removeItem(sn(e)),sessionStorage.removeItem(`${rn}${e}`)}catch{}}function vt(e,t){try{sessionStorage.setItem(`${rn}${e}`,t)}catch{}}function Fr(e){try{return sessionStorage.getItem(`${rn}${e}`)}catch{return null}}function zr(e,t){if(!t)return e;let n=e;for(const[o,r]of Object.entries(t)){const i=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(`:${i}(?!\\w)`,"g"),encodeURIComponent(r))}return n}function Br(e){var o;const t=e.replace(/\/$/,"")||"/",n=document.querySelectorAll("a[href]");for(const r of n){const i=r,s=((o=i.pathname)==null?void 0:o.replace(/\/$/,""))||"/";if(i.origin===window.location.origin&&s===t)return i.click(),console.log(`[Argide] Navigated via anchor click: ${e}`),!0}return!1}function Gr(e){var r,i;const t=window,n=t.next;if((r=n==null?void 0:n.router)!=null&&r.push)return n.router.push(e),console.log(`[Argide] Navigated via Next.js router: ${e}`),!0;if(t.__NUXT__){const s=t.$nuxt;if((i=s==null?void 0:s.$router)!=null&&i.push)return s.$router.push(e),console.log(`[Argide] Navigated via Vue/Nuxt router: ${e}`),!0}return!1}function Wr(e){try{return window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate",{state:{}})),console.log(`[Argide] Navigated via pushState: ${e}`),!0}catch{return!1}}async function yo(e,t,n){const o=zr(e,t);return n?(n(o),console.log(`[Argide] Navigated via navigate prop: ${o}`),!0):(Br(o)||Gr(o)||Wr(o)||(console.log(`[Argide] Navigated via hard navigation: ${o}`),window.location.href=o),!0)}class jr{constructor(t){this.state=Ar,this.conversationId=null,this.callbacks={},this.listeners=new Set,this.abortController=null,this.destroyed=!1,this.eventSource=null,this.escalationTimer=null,this.productId=t.productId,this.apiUrl=t.apiUrl,this.conversationId=Fr(this.productId),console.log("[Ourguide] constructor",{conversationId:this.conversationId,productId:this.productId});const n=Ur(this.productId);n.length>0&&this.dispatch({type:"LOAD_MESSAGES",messages:n}),this.connectSSE()}on(t){this.callbacks={...this.callbacks,...t}}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}getSnapshot(){return this.state}getState(){return this.state}getMessages(){return this.state.messages}dispatch(t){var n,o;if(!this.destroyed){this.state=kr(this.state,t),(o=(n=this.callbacks).onStateChange)==null||o.call(n,this.state);for(const r of this.listeners)r(this.state)}}open(){this.dispatch({type:"OPEN"})}close(){this.dispatch({type:"CLOSE"})}registerTools(t){tn(t)}async loadConfig(){var n,o;const t=await Tr(this.apiUrl,this.productId);return(o=(n=this.callbacks).onConfigLoaded)==null||o.call(n,t),t}async identify(t,n){const o=_e(this.productId);await oo(this.apiUrl,this.productId,o,t,n)}resetUser(){const t=_e(this.productId);ro(this.apiUrl,this.productId,t).catch(()=>{}),_o(this.productId),yt(this.productId),this.clearEscalationTimer(),this.disconnectSSE(),this.conversationId=null,this.dispatch({type:"FINISH_STREAMING"}),this.dispatch({type:"CLEAR_MESSAGES"})}destroy(){var t;this.destroyed=!0,(t=this.abortController)==null||t.abort(),this.abortController=null,this.clearEscalationTimer(),this.disconnectSSE(),this.listeners.clear(),this.callbacks={}}cancelStream(){var t;this.state.isStreaming&&(on(!1),ue(),(t=this.abortController)==null||t.abort(),this.abortController=null,this.dispatch({type:"FINISH_STREAMING"}),this.persistMessages())}revive(){this.destroyed=!1}newConversation(){const t=this.state.messages,n=this.conversationId;let o=null;if(t.length>0){const r=t.find(i=>i.role==="user");o={conversationId:n,title:r?r.content.slice(0,30):"Conversation",preview:t[t.length-1].content.slice(0,50),messages:[...t]}}return yt(this.productId),this.clearEscalationTimer(),this.disconnectSSE(),this.conversationId=null,this.dispatch({type:"CLEAR_MESSAGES"}),o}async retry(t){var c,_,b,y,R,O;if(this.state.isStreaming)return;const n=this.state.messages,o=[...n].reverse().find(C=>C.role==="user");if(!o)return;const r=n.lastIndexOf(o),i=n[n.length-1];i&&i.role==="assistant"&&!i.content&&!((c=i.toolCalls)!=null&&c.length)&&this.dispatch({type:"LOAD_MESSAGES",messages:n.slice(0,-1)}),this.dispatch({type:"SET_ERROR",error:""});const s=this.state.messages.slice(0,r).map(C=>({role:C.role,content:C.content}));s.push({role:"user",content:o.content}),this.dispatch({type:"START_STREAMING",id:Je()}),(_=this.abortController)==null||_.abort();const l=new AbortController;this.abortController=l;const p=new Map,u=new Map,g=C=>({onTextDelta:w=>this.dispatch({type:"APPEND_TEXT",text:w}),onToolCall:(w,L,S,h)=>{var k,I;const T={id:w,name:L,args:S,status:"calling",providerMetadata:h};p.set(w,T),this.dispatch({type:"ADD_TOOL_CALL",toolCall:T}),(I=(k=this.callbacks).onToolCall)==null||I.call(k,T),co(L)&&u.set(w,{name:L,args:S,providerMetadata:h})},onToolResult:(w,L)=>{var h,T;this.dispatch({type:"SET_TOOL_RESULT",toolCallId:w,result:L});const S=p.get(w);if(S&&((T=(h=this.callbacks).onToolResult)==null||T.call(h,S.name,L)),(S==null?void 0:S.name)==="navigate_to_page"){const k=L;k.route&&(k.confidence??0)>=.5&&yo(k.route,k.params,t)}},onError:w=>{var L,S;this.dispatch({type:"SET_ERROR",error:w,retriable:!0}),(S=(L=this.callbacks).onError)==null||S.call(L,w)}});try{const C=_e(this.productId),{stream:w,conversationId:L}=await Ke(this.apiUrl,this.productId,s,C,this.conversationId||void 0,void 0,l.signal);L&&!this.conversationId&&(this.conversationId=L,vt(this.productId,L));const S=50;let h=s,T=w,k=0;for(;!l.signal.aborted;){k++;let I=!1;if(u.clear(),await Kt(T,{...g(!0),onError:x=>{var B,P;I=!0,this.dispatch({type:"SET_ERROR",error:x,retriable:!0}),(P=(B=this.callbacks).onError)==null||P.call(B,x)},onFinish:()=>{}},l.signal),l.signal.aborted||I)break;if(u.size===0){this.dispatch({type:"FINISH_STREAMING"});break}if(k>=S){this.dispatch({type:"FINISH_STREAMING"});break}const D=[];for(const[x,{name:B,args:P,providerMetadata:Z}]of u){let Q;try{Q=await lo(B)(P)}catch(Se){Q={status:"error",error:Se instanceof Error?Se.message:"Handler failed"}}this.dispatch({type:"SET_TOOL_RESULT",toolCallId:x,result:Q}),(y=(b=this.callbacks).onToolResult)==null||y.call(b,B,Q),D.push({toolCallId:x,toolName:B,args:P,result:Q,providerMetadata:Z})}h=[...h,{role:"assistant",content:D.map(x=>({type:"tool-call",toolCallId:x.toolCallId,toolName:x.toolName,input:x.args,...x.providerMetadata?{providerOptions:x.providerMetadata}:{}}))},{role:"tool",content:D.map(x=>({type:"tool-result",toolCallId:x.toolCallId,toolName:x.toolName,output:{type:"json",value:x.result}}))}];const{stream:U}=await Ke(this.apiUrl,this.productId,h,void 0,this.conversationId||void 0,void 0,l.signal);T=U}}catch(C){if(this.destroyed||l.signal.aborted)return;this.dispatch({type:"FINISH_STREAMING"});const w=C instanceof Error?C.message:"Something went wrong";this.dispatch({type:"SET_ERROR",error:w,retriable:!0}),(O=(R=this.callbacks).onError)==null||O.call(R,w)}this.persistMessages()}restoreLocalConversation(t){this.disconnectSSE(),this.clearEscalationTimer(),this.conversationId=null,yt(this.productId),this.dispatch({type:"LOAD_MESSAGES",messages:t}),an(this.productId,t)}async restoreConversation(t){this.disconnectSSE(),this.conversationId=t,vt(this.productId,t);const n=_e(this.productId),r=(await Sr(this.apiUrl,t,n)).map(i=>({id:i.id,role:i.role,content:i.content,...i.source?{source:i.source}:{},...i.timestamp?{timestamp:i.timestamp}:{}}));this.dispatch({type:"LOAD_MESSAGES",messages:r}),an(this.productId,r),this.connectSSE()}async sendMessage(t,n,o){var O,C,w,L,S;const r=t.trim(),i=n?[...n]:[];if(!r&&i.length===0||this.state.isStreaming)return;this.clearEscalationTimer(),Dr();const s=i.length>0?i.map(h=>`[${h.name}]`).join(" "):"",l=[r,s].filter(Boolean).join(" ");this.dispatch({type:"ADD_USER_MESSAGE",id:Je(),content:l});const p=this.state.messages.some(h=>h.source==="human");p||this.dispatch({type:"START_STREAMING",id:Je()});let u=[];if(i.length>0)try{u=await Promise.all(i.map(async h=>({name:h.name,type:h.type,data:await Er(h)})))}catch{p||this.dispatch({type:"FINISH_STREAMING"}),this.dispatch({type:"SET_ERROR",error:"Failed to read attached files"});return}const g=[...this.state.messages.slice(0,p?-1:-2).map(h=>({role:h.role,content:h.content})),{role:"user",content:r||"Please review the attached file(s)."}];(O=this.abortController)==null||O.abort();const c=new AbortController;this.abortController=c;const _=new Map,b=new Map;let y=!1;const R=h=>({onTextDelta:T=>this.dispatch({type:"APPEND_TEXT",text:T}),onToolCall:(T,k,I,D)=>{var x,B;const U={id:T,name:k,args:I,status:"calling",providerMetadata:D};_.set(T,U),this.dispatch({type:"ADD_TOOL_CALL",toolCall:U}),(B=(x=this.callbacks).onToolCall)==null||B.call(x,U),k==="begin_collect_info"&&(y=!0),co(k)&&b.set(T,{name:k,args:I,providerMetadata:D})},onToolResult:(T,k)=>{var D,U;this.dispatch({type:"SET_TOOL_RESULT",toolCallId:T,result:k});const I=_.get(T);if(I&&((U=(D=this.callbacks).onToolResult)==null||U.call(D,I.name,k)),(I==null?void 0:I.name)==="navigate_to_page"){const x=k;x.route&&(x.confidence??0)>=.5&&yo(x.route,x.params,o)}},onError:T=>{var k,I;this.dispatch({type:"SET_ERROR",error:T,retriable:!0}),(I=(k=this.callbacks).onError)==null||I.call(k,T)}});try{const h=_e(this.productId),{stream:T,conversationId:k,handedOff:I}=await Ke(this.apiUrl,this.productId,g,h,this.conversationId||void 0,u,c.signal);if(I){p||this.dispatch({type:"FINISH_STREAMING"}),k&&!this.conversationId&&(this.conversationId=k,vt(this.productId,k)),this.persistMessages();return}let D=!1;k&&!this.conversationId&&(console.log("[Ourguide] New conversationId from API:",k),this.conversationId=k,vt(this.productId,k),D=!0);const U=50;let x=g,B=T,P=0;for(;!c.signal.aborted;){P++;let Z=!1;if(b.clear(),await Kt(B,{...R(!0),onError:Y=>{var ce,fe;Z=!0,this.dispatch({type:"SET_ERROR",error:Y,retriable:!0}),(fe=(ce=this.callbacks).onError)==null||fe.call(ce,Y)},onFinish:()=>{}},c.signal),D&&P===1&&this.connectSSE(),y&&this.startEscalationTimer(),c.signal.aborted||Z)break;if(b.size===0){this.dispatch({type:"FINISH_STREAMING"});break}if(P>=U){this.dispatch({type:"FINISH_STREAMING"});break}const Q=[];for(const[Y,{name:ce,args:fe,providerMetadata:Fe}]of b){let H;try{H=await lo(ce)(fe)}catch(Ae){H={status:"error",error:Ae instanceof Error?Ae.message:"Handler failed"}}this.dispatch({type:"SET_TOOL_RESULT",toolCallId:Y,result:H}),(w=(C=this.callbacks).onToolResult)==null||w.call(C,ce,H),Q.push({toolCallId:Y,toolName:ce,args:fe,result:H,providerMetadata:Fe})}x=[...x,{role:"assistant",content:Q.map(Y=>({type:"tool-call",toolCallId:Y.toolCallId,toolName:Y.toolName,input:Y.args,...Y.providerMetadata?{providerOptions:Y.providerMetadata}:{}}))},{role:"tool",content:Q.map(Y=>({type:"tool-result",toolCallId:Y.toolCallId,toolName:Y.toolName,output:{type:"json",value:Y.result}}))}];const{stream:Se}=await Ke(this.apiUrl,this.productId,x,void 0,this.conversationId||void 0,void 0,c.signal);B=Se}}catch(h){if(this.destroyed||c.signal.aborted)return;this.dispatch({type:"FINISH_STREAMING"});const T=h instanceof Error?h.message:"Something went wrong";this.dispatch({type:"SET_ERROR",error:T,retriable:!0}),(S=(L=this.callbacks).onError)==null||S.call(L,T)}this.persistMessages()}clearEscalationTimer(){this.escalationTimer&&(clearTimeout(this.escalationTimer),this.escalationTimer=null)}startEscalationTimer(){this.clearEscalationTimer(),this.escalationTimer=setTimeout(()=>{this.escalationTimer=null,this.triggerAutoEscalation()},3e4)}async triggerAutoEscalation(){var r;if(this.destroyed||!this.conversationId||this.state.isStreaming)return;console.log("[Ourguide] Auto-escalation triggered (1m timeout)");const t=_e(this.productId),n=[...this.state.messages.map(i=>({role:i.role,content:i.content})),{role:"user",content:"(no response)"}];(r=this.abortController)==null||r.abort();const o=new AbortController;this.abortController=o;try{const{stream:i}=await Ke(this.apiUrl,this.productId,n,t,this.conversationId||void 0,void 0,o.signal,!0);this.dispatch({type:"START_STREAMING",id:Je()}),await Kt(i,{onTextDelta:s=>this.dispatch({type:"APPEND_TEXT",text:s}),onToolCall:(s,l,p)=>{this.dispatch({type:"ADD_TOOL_CALL",toolCall:{id:s,name:l,args:p,status:"calling"}})},onToolResult:(s,l)=>{this.dispatch({type:"SET_TOOL_RESULT",toolCallId:s,result:l})},onError:s=>{this.dispatch({type:"SET_ERROR",error:s})},onFinish:()=>{this.dispatch({type:"FINISH_STREAMING"})}})}catch(i){if(this.destroyed||o.signal.aborted)return;this.dispatch({type:"FINISH_STREAMING"}),console.error("[Ourguide] Auto-escalation failed:",i)}this.persistMessages()}connectSSE(){if(console.log("[Ourguide] connectSSE called",{destroyed:this.destroyed,conversationId:this.conversationId,hasEventSource:!!this.eventSource}),this.destroyed||!this.conversationId||this.eventSource)return;const t=_e(this.productId),n=`${this.apiUrl}/api/conversations/${this.conversationId}/stream?endUserSessionId=${encodeURIComponent(t)}`;console.log("[Ourguide] Opening EventSource:",n);const o=new EventSource(n);o.onopen=()=>{console.log("[Ourguide] SSE connection opened")},o.onmessage=r=>{console.log("[Ourguide] SSE message received:",r.data);try{const i=JSON.parse(r.data);if(i.role!=="assistant"||typeof i.content!="string"||i.type!=="reply")return;const s={id:i.id??Je(),role:"assistant",content:i.content,source:"human",timestamp:Date.now()};this.dispatch({type:"ADD_ADMIN_MESSAGE",message:s}),this.persistMessages()}catch{}},o.onerror=r=>{console.error("[Ourguide] SSE error",{readyState:o.readyState,err:r}),o.readyState===EventSource.CLOSED&&(this.eventSource=null)},this.eventSource=o}disconnectSSE(){this.eventSource&&(this.eventSource.close(),this.eventSource=null)}persistMessages(){!this.state.isStreaming&&this.state.messages.length>0&&an(this.productId,this.state.messages)}}function vo(e,t){var n,o;if(e.name==="navigate_to_page"){if(e.status==="calling")return"Finding the right page...";const r=e.result;return r!=null&&r.route?`Navigated to ${r.route}`:"No matching page found"}if(e.name==="capture_screen")return e.status==="calling"||t?"Looking at your screen...":"Screen captured";if(e.name==="capture_screen_for_action")return e.status==="calling"||t?"Analyzing page elements...":"Page elements captured";if(e.name==="perform_action"){const r=((n=e.args)==null?void 0:n.description)||"Performing action";if(e.status==="calling")return r+"...";const i=e.result;return i!=null&&i.denied?"Action denied":(i==null?void 0:i.success)===!1?"Action failed":r}if(e.name==="batch_fill_form"){const r=((o=e.args)==null?void 0:o.description)||"Filling form";if(e.status==="calling")return r+"...";const i=e.result;return i!=null&&i.denied?"Form fill denied":(i==null?void 0:i.success)===!1?"Some fields failed":r}return e.name==="plan_actions"?e.status==="calling"?"Planning actions...":"Plan ready":e.name}function ln(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ce(e){let t=e;return t=t.replace(/`([^`\n]+)`/g,'<code class="og2-md-inline-code">$1</code>'),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/__(.+?)__/g,"<strong>$1</strong>"),t=t.replace(/\*(.+?)\*/g,"<em>$1</em>"),t=t.replace(new RegExp("(?<!\\w)_(.+?)_(?!\\w)","g"),"<em>$1</em>"),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(n,o,r)=>{const i=r.trim();return/^(https?:\/\/|mailto:|\/|#)/i.test(i)?`<a class="og2-md-link" href="${i}" target="_blank" rel="noopener noreferrer">${o}</a>`:o}),t}function xo(e){if(!e)return"";const t=[];let n=e.replace(/```(\w*)\n([\s\S]*?)```/g,(o,r,i)=>{const s=t.length,l=ln(i.replace(/\n$/,"")),p=r?` data-lang="${ln(r)}"`:"";return t.push(`<pre class="og2-md-pre"${p}><code class="og2-md-code">${l}</code></pre>`),`\0CB${s}\0`});return n=ln(n),n=Zr(n),n=n.replace(/\x00CB(\d+)\x00/g,(o,r)=>t[parseInt(r)]),n}function Vr(e){return/^[\s]*[-*]\s/.test(e)?"ul":/^[\s]*\d+\.\s/.test(e)?"ol":/^#{1,4}\s+/.test(e)?"heading":/^\s*\|/.test(e)?"table":"text"}function Xr(e){const t=[];let n=null;for(const o of e){const r=Vr(o);n&&n.type===r?n.lines.push(o):(n&&t.push(n),n={type:r,lines:[o]})}return n&&t.push(n),t}function qr(e){var t;switch(e.type){case"ul":return`<ul class="og2-md-list">${e.lines.map(o=>`<li>${Ce(o.replace(/^[\s]*[-*]\s/,""))}</li>`).join("")}</ul>`;case"ol":{const n=e.lines.map(i=>`<li>${Ce(i.replace(/^[\s]*\d+\.\s/,""))}</li>`).join(""),o=((t=e.lines[0].match(/^[\s]*(\d+)\./))==null?void 0:t[1])??"1";return`<ol class="og2-md-list"${o!=="1"?` start="${o}"`:""}>${n}</ol>`}case"heading":return e.lines.map(n=>{const o=n.match(/^(#{1,4})\s+(.+)$/),r=o[1].length;return`<h${r+2} class="og2-md-heading">${Ce(o[2])}</h${r+2}>`}).join("");case"table":return Jr(e.lines);case"text":return`<p>${e.lines.map(n=>Ce(n)).join("<br>")}</p>`}}function xt(e){return e.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(o=>o.trim())}function Yr(e){const t=e.trim(),n=t.startsWith(":"),o=t.endsWith(":");return n&&o?"center":o?"right":"left"}function Kr(e){const t=xt(e);return t.length>0&&t.every(n=>/^:?-{1,}:?$/.test(n.trim()))}function Jr(e){if(e.length<2||!Kr(e[1]))return`<p>${e.map(l=>Ce(l)).join("<br>")}</p>`;const t=xt(e[0]),n=xt(e[1]).map(Yr),o=e.slice(2),r=l=>{const p=n[l];return p&&p!=="left"?` style="text-align:${p}"`:""},i="<thead><tr>"+t.map((l,p)=>`<th${r(p)}>${Ce(l)}</th>`).join("")+"</tr></thead>";let s="";return o.length>0&&(s=`<tbody>${o.map(p=>{const u=xt(p);return"<tr>"+t.map((g,c)=>`<td${r(c)}>${Ce(u[c]??"")}</td>`).join("")+"</tr>"}).join("")}</tbody>`),`<table class="og2-md-table">${i}${s}</table>`}function Zr(e){const t=e.split(/\n{2,}/),n=[];for(const o of t){const r=o.trim();if(!r)continue;if(/^\x00CB\d+\x00$/.test(r)){n.push(r);continue}const i=r.split(`
`),s=Xr(i);for(const l of s)n.push(qr(l))}return n.join("")}const wo={none:"none",soft:"0 2px 8px rgba(0,0,0,0.08)",medium:"0 4px 16px rgba(0,0,0,0.12)",strong:"0 8px 32px rgba(0,0,0,0.18)","extra-strong":"0 16px 48px rgba(0,0,0,0.28)"};function Qr(e,t){if(!e||!t)return;const n=(l,p)=>{p!=null&&p!==""&&e.style.setProperty(l,String(p))},{colors:o,typography:r,dimensions:i,shadow:s}=t;o&&(n("--og2-bg",o.background),n("--og2-border",o.border),n("--og2-text",o.text),n("--og2-messages-bg",o.messagesBackground),n("--og2-agent-bubble",o.agentBubble),n("--og2-agent-bubble-text",o.agentBubbleText),n("--og2-user-bubble",o.userBubble),n("--og2-user-bubble-text",o.userBubbleText),n("--og2-user-bubble-border",o.userBubbleBorder),n("--og2-send-bg",o.sendButtonBackground),n("--og2-send-icon",o.sendButtonIcon),n("--og2-send-inactive-bg",o.sendButtonInactiveBackground)),r&&(n("--og2-font",r.fontFamily),n("--og2-font-weight",r.fontWeight),n("--og2-line-height",r.lineHeight),typeof r.fontSize=="number"&&n("--og2-font-size",`${r.fontSize}px`),typeof r.headerSize=="number"&&n("--og2-header-size",`${r.headerSize}px`),typeof r.letterSpacing=="number"&&n("--og2-letter-spacing",`${r.letterSpacing}px`)),i&&(i.width!==void 0&&n("--og2-width",`${i.width}px`),i.maxHeight!==void 0&&n("--og2-height",`${i.maxHeight}px`),i.borderRadius!==void 0&&n("--og2-radius",`${i.borderRadius}px`),i.padding!==void 0&&n("--og2-padding",`${i.padding}px`)),s&&wo[s]&&n("--og2-shadow",wo[s])}function ei(e,t){if(!e||!t)return;const n=(o,r)=>{r!=null&&r!==""&&e.style.setProperty(o,String(r))};t.background&&n("--og2-bubble-bg",t.background),t.border&&n("--og2-bubble-border",t.border),t.icon&&n("--og2-bubble-icon",t.icon),t.buttonSize&&n("--og2-bubble-size",`${t.buttonSize}px`),t.iconSize&&n("--og2-bubble-icon-size",`${t.iconSize}px`),t.right!==void 0&&n("--og2-bubble-right",`${t.right}px`),t.bottom!==void 0&&n("--og2-bubble-bottom",`${t.bottom}px`)}let Eo=new Map,To=null;function He(){return Eo}function Ze(e){Eo=e}function ti(){return To}function Qe(e){To=e}const ni=10,oi=150,cn=600,ri=100,dn=8,ii="og2-widget-root",si=new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","NAV","HEADER","FOOTER"]),ai='a[href], button, input, select, textarea, [role="button"], [role="link"], [role="checkbox"], [role="radio"], [role="switch"], [role="tab"], [role="menuitem"], [contenteditable="true"]',li=[/^:r[a-z0-9]+:$/,/^react-/i,/^__next/,/^radix-/,/^headlessui-/,/^mui-/,/^ember\d/,/^ext-gen\d/];function wt(e,t=document){const n=[...t.querySelectorAll(e)],o=t.querySelectorAll("*");for(const r of o)r.shadowRoot&&n.push(...wt(e,r.shadowRoot));return n}const ci='form, [role="form"], dialog, [role="dialog"], [role="alertdialog"], section[aria-label], section[aria-labelledby], [role="region"][aria-label], nav, [role="navigation"], aside, [role="complementary"]';function di(e){var r,i,s;const t=e.getAttribute("aria-label");if(t)return t;const n=e.getAttribute("aria-labelledby");if(n){const l=document.getElementById(n);if((r=l==null?void 0:l.textContent)!=null&&r.trim())return l.textContent.trim()}if(e.tagName.toLowerCase()==="form"){const l=e.getAttribute("name")||e.getAttribute("id");if(l&&!St(l))return l}if(e instanceof HTMLDialogElement||(i=e.getAttribute("role"))!=null&&i.includes("dialog")){const l=e.querySelector('h1, h2, h3, [role="heading"]');if((s=l==null?void 0:l.textContent)!=null&&s.trim())return l.textContent.trim()}return""}function Ie(e){const o=new Set([160,8239,8199,65279]);let r="",i=!1;for(let s=0;s<e.length;s++){const l=e.charCodeAt(s);if(!(l>=57344&&l<=63743)){if(o.has(l)){i||(r+=" ",i=!0);continue}r+=e[s],i=e[s]===" "}}return r.trim()}function Et(e){var t,n;try{const o=e;if(!o.isConnected||o.hidden||o.getAttribute("aria-hidden")==="true")return!1;const r=((n=(t=o.ownerDocument)==null?void 0:t.defaultView)==null?void 0:n.getComputedStyle(o))??window.getComputedStyle(o);if(!r||r.display==="none"||r.visibility==="hidden")return!1;const i=parseFloat(r.opacity??"1");if(!Number.isFinite(i)||i===0)return!1;const s=o.getBoundingClientRect();return!(!s||Math.max(s.width,s.height)===0||o.getClientRects().length===0)}catch{return!1}}function Tt(e){return!!e.closest(`#${ii}`)}function ui(e){try{const t=e.getBoundingClientRect();return t.top<window.innerHeight&&t.bottom>0&&t.left<window.innerWidth&&t.right>0}catch{return!1}}function So(e,t){return e.length<=t?e:e.slice(0,t-3)+"..."}function St(e){return li.some(t=>t.test(e))}function Ao(e){var n,o,r;if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){if(e.id){const s=document.querySelector(`label[for="${CSS.escape(e.id)}"]`);if((n=s==null?void 0:s.textContent)!=null&&n.trim())return Ie(s.textContent.trim())}const i=e.closest("label");if(i){const s=(o=i.textContent)==null?void 0:o.trim();if(s)return Ie(s)}return Ie(e.getAttribute("aria-label")||e.placeholder||e.getAttribute("name")||"")}const t=(r=e.innerText)==null?void 0:r.trim();return Ie(t||e.getAttribute("aria-label")||e.getAttribute("title")||"")}function pi(e){const t=e.getAttribute("data-testid");if(t)return`[data-testid="${CSS.escape(t)}"]`;const n=e.getAttribute("data-test-id");if(n)return`[data-test-id="${CSS.escape(n)}"]`;if(e.id&&!St(e.id))return`#${CSS.escape(e.id)}`;const o=e.getAttribute("aria-label");if(o){const i=`${e.tagName.toLowerCase()}[aria-label="${CSS.escape(o)}"]`;if(document.querySelectorAll(i).length===1)return i}if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){const r=e.getAttribute("name");if(r){const i=e.closest("form"),s=(i==null?void 0:i.getAttribute("name"))||(i==null?void 0:i.getAttribute("id"));if(s&&!St(s)){const u=e.tagName.toLowerCase(),g=`form[name="${CSS.escape(s)}"] ${u}[name="${CSS.escape(r)}"]`;if(document.querySelectorAll(g).length===1)return g}const p=`${e.tagName.toLowerCase()}[name="${CSS.escape(r)}"]`;if(document.querySelectorAll(p).length===1)return p}}if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const r=e.placeholder;if(r){const s=`${e.tagName.toLowerCase()}[placeholder="${CSS.escape(r)}"]`;if(document.querySelectorAll(s).length===1)return s}}return fi(e)}function fi(e){const t=[];let n=e;for(;n&&n!==document.documentElement;){const o=n.tagName.toLowerCase();if(n.id&&!St(n.id))return t.unshift(`#${CSS.escape(n.id)}`),t.join(" > ");const r=n.parentElement;if(!r){t.unshift(o);break}const i=n.tagName,s=Array.from(r.children).filter(l=>l.tagName===i);if(s.length>1){const l=s.indexOf(n)+1;t.unshift(`${o}:nth-of-type(${l})`)}else t.unshift(o);n=r}return t.join(" > ")}function ko(e){const t=e.tagName.toLowerCase(),n=Ao(e),o=e.type||"",r=e.getAttribute("role")||"";return`${t}:${o}:${r}:${n.slice(0,40)}`}function et(){var w,L,S;const e=window.location.pathname+window.location.search,t=document.title||"",n=wt("h1, h2, h3"),o=[];for(const h of n){if(o.length>=ni)break;if(Tt(h)||!Et(h))continue;const T=(w=h.innerText)==null?void 0:w.trim();T&&!o.includes(T)&&o.push(Ie(T))}const r=wt(ci).filter(h=>!Tt(h)&&Et(h)),i=new Map;for(const h of r){const T=di(h),k=h.tagName.toLowerCase(),I=h.getAttribute("role")||k;i.set(h,T?`${I}: ${Ie(T)}`:I)}const s=[...i].reverse(),l=wt(ai),p=[];for(const h of l)Tt(h)||!Et(h)||p.push({el:h,inViewport:ui(h)});p.sort((h,T)=>h.inViewport&&!T.inViewport?-1:!h.inViewport&&T.inViewport?1:0);const u=[],g=new Map,c=new Set;let _=0;for(const{el:h,inViewport:T}of p){if(u.length>=oi)break;const k=Ao(h);if(!k)continue;const I=pi(h);if(c.has(I))continue;c.add(I);const D=`el_${_++}`,U=h.tagName.toLowerCase(),x={id:D,tag:U,label:So(k,ri),isInViewport:T},B=h.getAttribute("role");if(B&&(x.role=B),h instanceof HTMLInputElement&&(x.type=h.type,h.placeholder&&(x.placeholder=h.placeholder),(h.type==="checkbox"||h.type==="radio")&&(x.checked=h.checked)),h instanceof HTMLTextAreaElement&&h.placeholder&&(x.placeholder=h.placeholder),h instanceof HTMLSelectElement){const P=Array.from(h.options).map(Z=>{var Q;return((Q=Z.textContent)==null?void 0:Q.trim())||Z.value});x.options=P.slice(0,dn),P.length>dn&&x.options.push(`...+${P.length-dn} more`),x.value=((S=(L=h.options[h.selectedIndex])==null?void 0:L.textContent)==null?void 0:S.trim())||h.value}if(h.disabled&&(x.disabled=!0),h instanceof HTMLAnchorElement&&h.href)try{const P=new URL(h.href);x.href=P.pathname+P.search}catch{x.href=h.getAttribute("href")||void 0}for(const[P,Z]of s)if(P.contains(h)){x.group=Z;break}u.push(x),g.set(D,{selector:I,verifyHash:ko(h),label:x.label,tag:U})}const b=document.querySelector("main")||document.body;let y="";function R(h){var k;if(y.length>=cn)return;if(h.nodeType===Node.TEXT_NODE){const I=(k=h.textContent)==null?void 0:k.trim();I&&(y+=(y?" ":"")+I);return}if(h.nodeType!==Node.ELEMENT_NODE)return;const T=h;if(!si.has(T.tagName)&&!Tt(T)&&Et(T)){for(const I of T.childNodes)if(R(I),y.length>=cn)return}}R(b),y=So(y.replace(/\s+/g," ").trim(),cn);const O={url:e,title:t,headings:o,elements:u,visibleText:y},C=gi(O);return{snapshot:O,selectorMap:g,outline:C}}function gi(e){const t=[];if(t.push(`Page: ${e.title}`),t.push(`URL: ${e.url}`),e.headings.length>0){t.push(""),t.push("Headings:");for(const o of e.headings)t.push(`  ${o}`)}t.push(""),t.push("Interactive Elements:");let n;for(const o of e.elements){o.group!==n&&(n=o.group,n&&(t.push(""),t.push(`── ${n} ──`)));let i=`${n?"  ":""}[${o.id}] ${o.tag}`;o.type&&(i+=`[${o.type}]`),i+=`: ${o.label}`;const s=[];o.placeholder&&s.push(`placeholder="${o.placeholder}"`),o.options&&s.push(`options=[${o.options.map(l=>`"${l}"`).join(",")}]`),o.value!==void 0&&s.push(`selected="${o.value}"`),o.checked!==void 0&&s.push(`checked=${o.checked}`),o.disabled&&s.push("(disabled)"),o.href&&s.push(`href="${o.href}"`),o.isInViewport||s.push("(off-screen)"),s.length>0&&(i+=" "+s.join(" ")),t.push(i)}return e.visibleText&&(t.push(""),t.push("Visible Text:"),t.push(e.visibleText)),t.join(`
`)}function hi(e,t){const n=new Set(e.elements.map(i=>`${i.tag}:${i.label}`)),o=t.elements.filter(i=>!n.has(`${i.tag}:${i.label}`));if(o.length===0)return"(no new elements detected)";const r=[];r.push(`New elements after action (${o.length}):`);for(const i of o){let s=`[${i.id}] ${i.tag}`;i.type&&(s+=`[${i.type}]`),s+=`: ${i.label}`;const l=[];i.placeholder&&l.push(`placeholder="${i.placeholder}"`),i.options&&l.push(`options=[${i.options.map(p=>`"${p}"`).join(",")}]`),i.disabled&&l.push("(disabled)"),l.length>0&&(s+=" "+l.join(" ")),r.push(s)}return r.join(`
`)}function At(e,t){const n=t.get(e);if(!n)return null;const o=document.querySelector(n.selector);return!o||ko(o)!==n.verifyHash?Co(n):o}function Co(e){const t=e.tag==="a"?'a[href], button, [role="button"], [role="link"]':e.tag==="button"?'button, [role="button"], a[href]':`${e.tag}, [role="${e.tag}"]`,n=document.querySelectorAll(t),o=e.label.toLowerCase();for(const r of n){const i=Io(r).toLowerCase();if(i.length>0&&i===o)return r}for(const r of n){const i=Io(r).toLowerCase();if(i.length>0&&(i.includes(o)||o.includes(i)))return r}return null}function Io(e){var t;return((t=e.innerText)==null?void 0:t.trim())||e.getAttribute("aria-label")||e.getAttribute("title")||e.placeholder||e.getAttribute("name")||""}function No(e=3e3,t=300){return new Promise(n=>{let o,r=!1;const i=()=>{r||(r=!0,s.disconnect(),n())},s=new MutationObserver(()=>{clearTimeout(o),o=setTimeout(i,t)});s.observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),o=setTimeout(i,t),setTimeout(i,e)})}async function un(e,t,n,o){try{switch(e){case"click":return await mi(t);case"fill":return await _i(t,n.value??"");case"typeCharByChar":return await yi(t,n.value??"",n.delayMs);case"selectOption":return await vi(t,n.value??"");case"check":return await xi(t,n.checked??!0);case"scroll":return await wi(n.direction??"down",t);case"pressKey":return await Ei(n.key??"Enter");case"setFile":return await Ai(t,n);case"dragAndDrop":{if(!n.toElementId||!o)return{success:!1,description:"Missing target element for drag and drop",error:"missing-target"};const r=At(n.toElementId,o);return r?await Si(t,r):{success:!1,description:"Target element not found",error:"target-not-found"}}default:return{success:!1,description:`Unknown method: ${e}`,error:"unknown-method"}}}catch(r){return{success:!1,description:`Action failed: ${r instanceof Error?r.message:"unknown error"}`,error:"exception"}}}async function mi(e){e.scrollIntoView({block:"center",behavior:"smooth"}),await kt(100);const t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,r={bubbles:!0,cancelable:!0,composed:!0,view:window,clientX:n,clientY:o};e.dispatchEvent(new PointerEvent("pointerdown",{...r,pointerId:1})),e.dispatchEvent(new MouseEvent("mousedown",r)),e.dispatchEvent(new PointerEvent("pointerup",{...r,pointerId:1})),e.dispatchEvent(new MouseEvent("mouseup",r));const i=new MouseEvent("click",{...r,detail:1});return e.dispatchEvent(i),{success:!0,description:`Clicked "${Ue(e)}"`}}const Lo=new Set(["color","date","datetime-local","month","range","time","week"]);async function bi(e,t){const n=Ue(e);if(e instanceof HTMLSelectElement)return Ro(e,t);if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const o=e instanceof HTMLInputElement?(e.type||"").toLowerCase():"textarea";return e instanceof HTMLInputElement&&Lo.has(o)?(pn(e),fn(e,t.trim()),gn(e,t.trim()),{success:!0,description:`Filled "${n}" with value`}):(pn(e),Mo(t)||(fn(e,t),gn(e,t)),{success:!0,description:`Filled "${n}" with value`})}return e.isContentEditable?(pn(e),Mo(t)||(e.textContent=t,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))),{success:!0,description:`Filled "${n}" with value`}):{success:!1,description:`Cannot fill element "${n}"`,error:"unsupported-element"}}async function _i(e,t){const n=await bi(e,t);if(!n.success)return n;const o=ki(e),i=e instanceof HTMLInputElement&&Lo.has((e.type||"").toLowerCase())?t.trim():t;return o!==null&&o!==i?{...n,verified:!1,warning:"Value may not have been set correctly. Try typeCharByChar if the field uses autocomplete."}:{...n,verified:!0}}function pn(e){try{e.focus()}catch{}if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){try{e.select()}catch{try{const t=(e.value??"").length;e.setSelectionRange(0,t)}catch{}}return}if(e.isContentEditable)try{const t=document.getSelection(),n=document.createRange();n.selectNodeContents(e),t==null||t.removeAllRanges(),t==null||t.addRange(n)}catch{}}function fn(e,t){var s;const n=e instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(n,"value"),r=o==null?void 0:o.set;typeof r=="function"?r.call(e,t):e.value=t;const i=e._valueTracker;(s=i==null?void 0:i.setValue)==null||s.call(i,"")}function gn(e,t){try{e.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,data:t,inputType:"insertText"}))}catch{e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}e.dispatchEvent(new Event("change",{bubbles:!0}))}function Mo(e){try{return document.execCommand("insertText",!1,e)}catch{return!1}}async function yi(e,t,n=50){const o=Ue(e);e.focus();for(const r of t){e.dispatchEvent(new KeyboardEvent("keydown",{key:r,bubbles:!0,cancelable:!0}));try{document.execCommand("insertText",!1,r)}catch{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(fn(e,e.value+r),gn(e,e.value))}e.dispatchEvent(new KeyboardEvent("keyup",{key:r,bubbles:!0})),n>0&&await kt(n)}return{success:!0,description:`Typed "${Ci(t)}" into "${o}"`}}async function Ro(e,t){var p;const n=Ue(e);if(!(e instanceof HTMLSelectElement))return{success:!1,description:`"${n}" is not a select element`,error:"not-select"};const o=t.trim(),i=Array.from(e.options).find(u=>{const g=(u.label||u.textContent||"").trim(),c=String(u.value??"").trim();return g===o||c===o||g.toLowerCase()===o.toLowerCase()||c.toLowerCase()===o.toLowerCase()});if(!i)return{success:!1,description:`Option "${o}" not found in "${n}"`,error:"option-not-found"};const s=Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,"value");return s!=null&&s.set?s.set.call(e,i.value):e.value=i.value,i.selected=!0,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})),{success:!0,description:`Selected "${((p=i.textContent)==null?void 0:p.trim())||i.value}" in "${n}"`}}async function vi(e,t){var o,r;const n=await Ro(e,t);if(!n.success)return n;if(e instanceof HTMLSelectElement){const i=t.trim().toLowerCase();if((((r=(o=e.options[e.selectedIndex])==null?void 0:o.textContent)==null?void 0:r.trim())||e.value).toLowerCase()!==i&&e.value.toLowerCase()!==i)return{...n,verified:!1,warning:"Selected value may not match the requested option."}}return{...n,verified:!0}}async function xi(e,t){const n=Ue(e);if(e instanceof HTMLInputElement&&(e.type==="checkbox"||e.type==="radio")){if(e.checked===t)return{success:!0,description:`"${n}" already ${t?"checked":"unchecked"}`};if(e.click(),e.checked!==t){const r=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"checked");r!=null&&r.set?r.set.call(e,t):e.checked=t,e.dispatchEvent(new Event("change",{bubbles:!0})),e.dispatchEvent(new Event("input",{bubbles:!0}))}return{success:!0,description:`${t?"Checked":"Unchecked"} "${n}"`}}return e.getAttribute("aria-checked")!==null?(e.click(),{success:!0,description:`Toggled "${n}"`}):{success:!1,description:`"${n}" is not a checkable element`,error:"not-checkable"}}async function wi(e,t){const n=Math.round(window.innerHeight*.75),r={up:{top:-n,left:0},down:{top:n,left:0},left:{top:0,left:-n},right:{top:0,left:n}}[e];return t&&t!==document.body&&t!==document.documentElement?t.scrollBy({...r,behavior:"smooth"}):window.scrollBy({...r,behavior:"smooth"}),{success:!0,description:`Scrolled ${e}`}}async function Ei(e){var o;const t=document.activeElement||document.body,n=Ti(e);if(t.dispatchEvent(new KeyboardEvent("keydown",{...n,bubbles:!0,cancelable:!0})),n.key==="Enter"||n.key===" "){const r=(o=t.tagName)==null?void 0:o.toLowerCase();(r==="button"||r==="a"||t.getAttribute("role")==="button")&&t.click()}if(n.key==="Tab"){const r=Array.from(document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(s=>!s.hidden&&s.offsetParent!==null),i=r.indexOf(t);if(i>=0){const s=n.shiftKey?r[i-1]||r[r.length-1]:r[i+1]||r[0];s==null||s.focus()}}return t.dispatchEvent(new KeyboardEvent("keyup",{...n,bubbles:!0})),{success:!0,description:`Pressed ${e}`}}function Ti(e){const t=e.split("+").map(r=>r.trim()),n={ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1};let o=e;if(t.length>1){o=t[t.length-1];for(let r=0;r<t.length-1;r++){const i=t[r].toLowerCase();i==="ctrl"||i==="control"?n.ctrlKey=!0:i==="alt"?n.altKey=!0:i==="shift"?n.shiftKey=!0:(i==="cmd"||i==="meta"||i==="command")&&(n.metaKey=!0)}}return{key:o,...n}}async function Si(e,t){const n=new DataTransfer;return e.dispatchEvent(new DragEvent("dragstart",{dataTransfer:n,bubbles:!0,cancelable:!0})),await kt(50),t.dispatchEvent(new DragEvent("dragenter",{dataTransfer:n,bubbles:!0,cancelable:!0})),t.dispatchEvent(new DragEvent("dragover",{dataTransfer:n,bubbles:!0,cancelable:!0})),await kt(50),t.dispatchEvent(new DragEvent("drop",{dataTransfer:n,bubbles:!0,cancelable:!0})),e.dispatchEvent(new DragEvent("dragend",{dataTransfer:n,bubbles:!0})),{success:!0,description:"Dragged element to target"}}async function Ai(e,t){const n=Ue(e);if(!(e instanceof HTMLInputElement)||e.type!=="file")return{success:!1,description:`"${n}" is not a file input`,error:"not-file-input"};const{fileName:o,fileBase64:r,fileMimeType:i}=t;if(!o||!r)return{success:!1,description:"Missing fileName or fileBase64 for file upload",error:"missing-file-data"};try{const s=new DataTransfer,l=atob(r),p=new Uint8Array(l.length);for(let c=0;c<l.length;c++)p[c]=l.charCodeAt(c);const u=new Blob([p],{type:i||"application/octet-stream"}),g=new File([u],o,{type:i||"application/octet-stream",lastModified:Date.now()});return s.items.add(g),e.files=s.files,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})),{success:!0,description:`Attached "${o}" to "${n}"`}}catch(s){return{success:!1,description:`File upload failed: ${s instanceof Error?s.message:"unknown error"}`,error:"file-upload-failed"}}}function ki(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?e.value:e.isContentEditable?e.textContent??null:null}function kt(e){return new Promise(t=>setTimeout(t,e))}function Ue(e){var t;return e.getAttribute("aria-label")||e.placeholder||((t=e.innerText)==null?void 0:t.trim().slice(0,40))||e.getAttribute("name")||e.tagName.toLowerCase()}function Ci(e,t=30){return e.length<=t?e:e.slice(0,t-3)+"..."}async function Ii(){console.log("[Ourguide] capture_screen tool invoked — capturing DOM snapshot");const e=ao();return console.log("[Ourguide] capture_screen result",{url:e.url,title:e.title}),e}async function Ni(){console.log("[Ourguide] capture_screen_for_action — capturing actionable DOM");const e=et();return Ze(e.selectorMap),Qe(e.snapshot),console.log("[Ourguide] actionable DOM captured",{elementCount:e.snapshot.elements.length,url:e.snapshot.url}),{outline:e.outline}}async function Li(e){const t=e.elementId,n=e.method,o=e.description||`${n} on ${t}`,r={value:e.value,checked:e.checked,direction:e.direction,key:e.key,toElementId:e.toElementId,delayMs:e.delayMs,fileName:e.fileName,fileBase64:e.fileBase64,fileMimeType:e.fileMimeType};console.log("[Ourguide] perform_action invoked",{elementId:t,method:n,description:o});const i=He();let s=At(t,i);if(!s){const _=i.get(t);if(_){console.log("[Ourguide] self-heal: element not found, recapturing DOM");const b=et();Ze(b.selectorMap),Qe(b.snapshot);for(const[,y]of b.selectorMap)if(y.tag===_.tag&&y.label.toLowerCase()===_.label.toLowerCase()&&(s=document.querySelector(y.selector),s))break}if(!s)return console.warn("[Ourguide] perform_action — element not found even after self-heal",{elementId:t}),{success:!1,error:"Element not found on the page. It may have changed. Try capture_screen_for_action again."}}let l=!0;if(fo()?(_t(s),await new Promise(_=>setTimeout(_,400)),ue()):(_t(s),l=await ho(t,n,o),ue(),l&&go()),!l)return console.log("[Ourguide] perform_action — denied by user"),{success:!1,denied:!0,description:"User denied this action"};console.log("[Ourguide] perform_action — executing",{method:n,elementId:t});let p=await un(n,s,r,He());if(!p.success&&p.error==="exception"){console.log("[Ourguide] self-heal: action failed, recapturing and retrying");const _=He().get(t);if(_){const b=et();for(const[,y]of b.selectorMap)if(y.tag===_.tag&&y.label.toLowerCase()===_.label.toLowerCase()){const R=document.querySelector(y.selector);if(R){p=await un(n,R,r,b.selectorMap),Ze(b.selectorMap),Qe(b.snapshot);break}}}}console.log("[Ourguide] perform_action result",p),await No();const u=ti(),g=et();Ze(g.selectorMap),Qe(g.snapshot);const c=u?hi(u,g.snapshot)+`

Full snapshot:
`+g.outline:g.outline;return{...p,newSnapshot:c}}async function Mi(e){var p,u;const t=e.fields??[],n=e.description||"Fill form fields";if(t.length===0)return{success:!1,description:"No fields provided",error:"missing-fields"};console.log("[Ourguide] batch_fill_form invoked",{fieldCount:t.length,description:n});let o=!0;if(!fo()){const g=At((p=t[0])==null?void 0:p.elementId,He());g&&_t(g),o=await ho(((u=t[0])==null?void 0:u.elementId)||"","batch_fill",n),ue(),o&&go()}if(!o)return{success:!1,denied:!0,description:"User denied this action"};const r=[];for(const g of t){const c=At(g.elementId,He());if(!c){r.push({elementId:g.elementId,success:!1,error:"Element not found"});continue}_t(c),await new Promise(R=>setTimeout(R,200)),ue();const _=g.method||"fill",b={value:g.value,checked:g.checked},y=await un(_,c,b,He());r.push({elementId:g.elementId,success:y.success,error:y.error})}await No();const i=et();Ze(i.selectorMap),Qe(i.snapshot);const s=r.every(g=>g.success),l=r.filter(g=>!g.success).length;return{success:s,description:s?`Filled ${t.length} fields`:`${l} of ${t.length} fields failed`,results:r,newSnapshot:i.outline}}function Ri(){tn({capture_screen:Ii,capture_screen_for_action:Ni,perform_action:Li,batch_fill_form:Mi,plan_actions:async e=>{const t=e.plan;return console.log("[Ourguide] plan_actions:",t),{acknowledged:!0,plan:t}}})}/*! @license DOMPurify 3.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.3/LICENSE */const{entries:Oo,setPrototypeOf:Do,isFrozen:Oi,getPrototypeOf:Di,getOwnPropertyDescriptor:$i}=Object;let{freeze:te,seal:le,create:Ct}=Object,{apply:hn,construct:mn}=typeof Reflect<"u"&&Reflect;te||(te=function(t){return t}),le||(le=function(t){return t}),hn||(hn=function(t,n){for(var o=arguments.length,r=new Array(o>2?o-2:0),i=2;i<o;i++)r[i-2]=arguments[i];return t.apply(n,r)}),mn||(mn=function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return new t(...o)});const It=oe(Array.prototype.forEach),Pi=oe(Array.prototype.lastIndexOf),$o=oe(Array.prototype.pop),tt=oe(Array.prototype.push),Hi=oe(Array.prototype.splice),Nt=oe(String.prototype.toLowerCase),bn=oe(String.prototype.toString),_n=oe(String.prototype.match),nt=oe(String.prototype.replace),Ui=oe(String.prototype.indexOf),Fi=oe(String.prototype.trim),ae=oe(Object.prototype.hasOwnProperty),ne=oe(RegExp.prototype.test),ot=zi(TypeError);function oe(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return hn(e,t,o)}}function zi(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return mn(e,n)}}function N(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Nt;Do&&Do(e,null);let o=t.length;for(;o--;){let r=t[o];if(typeof r=="string"){const i=n(r);i!==r&&(Oi(t)||(t[o]=i),r=i)}e[r]=!0}return e}function Bi(e){for(let t=0;t<e.length;t++)ae(e,t)||(e[t]=null);return e}function pe(e){const t=Ct(null);for(const[n,o]of Oo(e))ae(e,n)&&(Array.isArray(o)?t[n]=Bi(o):o&&typeof o=="object"&&o.constructor===Object?t[n]=pe(o):t[n]=o);return t}function rt(e,t){for(;e!==null;){const o=$i(e,t);if(o){if(o.get)return oe(o.get);if(typeof o.value=="function")return oe(o.value)}e=Di(e)}function n(){return null}return n}const Po=te(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),yn=te(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),vn=te(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Gi=te(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),xn=te(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Wi=te(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ho=te(["#text"]),Uo=te(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),wn=te(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Fo=te(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Lt=te(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ji=le(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Vi=le(/<%[\w\W]*|[\w\W]*%>/gm),Xi=le(/\$\{[\w\W]*/gm),qi=le(/^data-[\-\w.\u00B7-\uFFFF]+$/),Yi=le(/^aria-[\-\w]+$/),zo=le(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ki=le(/^(?:\w+script|data):/i),Ji=le(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Bo=le(/^html$/i),Zi=le(/^[a-z][.\w]*(-[.\w]+)+$/i);var Go=Object.freeze({__proto__:null,ARIA_ATTR:Yi,ATTR_WHITESPACE:Ji,CUSTOM_ELEMENT:Zi,DATA_ATTR:qi,DOCTYPE_NAME:Bo,ERB_EXPR:Vi,IS_ALLOWED_URI:zo,IS_SCRIPT_OR_DATA:Ki,MUSTACHE_EXPR:ji,TMPLIT_EXPR:Xi});const it={element:1,text:3,progressingInstruction:7,comment:8,document:9},Qi=function(){return typeof window>"u"?null:window},es=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const r="data-tt-policy-suffix";n&&n.hasAttribute(r)&&(o=n.getAttribute(r));const i="dompurify"+(o?"#"+o:"");try{return t.createPolicy(i,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Wo=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function jo(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qi();const t=E=>jo(E);if(t.version="3.3.3",t.removed=[],!e||!e.document||e.document.nodeType!==it.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const o=n,r=o.currentScript,{DocumentFragment:i,HTMLTemplateElement:s,Node:l,Element:p,NodeFilter:u,NamedNodeMap:g=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:c,DOMParser:_,trustedTypes:b}=e,y=p.prototype,R=rt(y,"cloneNode"),O=rt(y,"remove"),C=rt(y,"nextSibling"),w=rt(y,"childNodes"),L=rt(y,"parentNode");if(typeof s=="function"){const E=n.createElement("template");E.content&&E.content.ownerDocument&&(n=E.content.ownerDocument)}let S,h="";const{implementation:T,createNodeIterator:k,createDocumentFragment:I,getElementsByTagName:D}=n,{importNode:U}=o;let x=Wo();t.isSupported=typeof Oo=="function"&&typeof L=="function"&&T&&T.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:B,ERB_EXPR:P,TMPLIT_EXPR:Z,DATA_ATTR:Q,ARIA_ATTR:Se,IS_SCRIPT_OR_DATA:Y,ATTR_WHITESPACE:ce,CUSTOM_ELEMENT:fe}=Go;let{IS_ALLOWED_URI:Fe}=Go,H=null;const Ae=N({},[...Po,...yn,...vn,...xn,...Ho]);let W=null;const Mt=N({},[...Uo,...wn,...Fo,...Lt]);let z=Object.seal(Ct(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ne=null,ze=null;const f=Object.seal(Ct(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let A=!0,M=!0,V=!1,X=!0,ye=!1,Le=!0,ge=!1,Me=!1,Re=!1,Be=!1,Rt=!1,Ot=!1,Yo=!0,Ko=!1;const is="user-content-";let En=!0,st=!1,Ge={},he=null;const Tn=N({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Jo=null;const Zo=N({},["audio","video","img","source","image","track"]);let Sn=null;const Qo=N({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Dt="http://www.w3.org/1998/Math/MathML",$t="http://www.w3.org/2000/svg",ve="http://www.w3.org/1999/xhtml";let We=ve,An=!1,kn=null;const ss=N({},[Dt,$t,ve],bn);let Pt=N({},["mi","mo","mn","ms","mtext"]),Ht=N({},["annotation-xml"]);const as=N({},["title","style","font","a","script"]);let at=null;const ls=["application/xhtml+xml","text/html"],cs="text/html";let K=null,je=null;const ds=n.createElement("form"),er=function(a){return a instanceof RegExp||a instanceof Function},Cn=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(je&&je===a)){if((!a||typeof a!="object")&&(a={}),a=pe(a),at=ls.indexOf(a.PARSER_MEDIA_TYPE)===-1?cs:a.PARSER_MEDIA_TYPE,K=at==="application/xhtml+xml"?bn:Nt,H=ae(a,"ALLOWED_TAGS")?N({},a.ALLOWED_TAGS,K):Ae,W=ae(a,"ALLOWED_ATTR")?N({},a.ALLOWED_ATTR,K):Mt,kn=ae(a,"ALLOWED_NAMESPACES")?N({},a.ALLOWED_NAMESPACES,bn):ss,Sn=ae(a,"ADD_URI_SAFE_ATTR")?N(pe(Qo),a.ADD_URI_SAFE_ATTR,K):Qo,Jo=ae(a,"ADD_DATA_URI_TAGS")?N(pe(Zo),a.ADD_DATA_URI_TAGS,K):Zo,he=ae(a,"FORBID_CONTENTS")?N({},a.FORBID_CONTENTS,K):Tn,Ne=ae(a,"FORBID_TAGS")?N({},a.FORBID_TAGS,K):pe({}),ze=ae(a,"FORBID_ATTR")?N({},a.FORBID_ATTR,K):pe({}),Ge=ae(a,"USE_PROFILES")?a.USE_PROFILES:!1,A=a.ALLOW_ARIA_ATTR!==!1,M=a.ALLOW_DATA_ATTR!==!1,V=a.ALLOW_UNKNOWN_PROTOCOLS||!1,X=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ye=a.SAFE_FOR_TEMPLATES||!1,Le=a.SAFE_FOR_XML!==!1,ge=a.WHOLE_DOCUMENT||!1,Be=a.RETURN_DOM||!1,Rt=a.RETURN_DOM_FRAGMENT||!1,Ot=a.RETURN_TRUSTED_TYPE||!1,Re=a.FORCE_BODY||!1,Yo=a.SANITIZE_DOM!==!1,Ko=a.SANITIZE_NAMED_PROPS||!1,En=a.KEEP_CONTENT!==!1,st=a.IN_PLACE||!1,Fe=a.ALLOWED_URI_REGEXP||zo,We=a.NAMESPACE||ve,Pt=a.MATHML_TEXT_INTEGRATION_POINTS||Pt,Ht=a.HTML_INTEGRATION_POINTS||Ht,z=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&er(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(z.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&er(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(z.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(z.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ye&&(M=!1),Rt&&(Be=!0),Ge&&(H=N({},Ho),W=Ct(null),Ge.html===!0&&(N(H,Po),N(W,Uo)),Ge.svg===!0&&(N(H,yn),N(W,wn),N(W,Lt)),Ge.svgFilters===!0&&(N(H,vn),N(W,wn),N(W,Lt)),Ge.mathMl===!0&&(N(H,xn),N(W,Fo),N(W,Lt))),ae(a,"ADD_TAGS")||(f.tagCheck=null),ae(a,"ADD_ATTR")||(f.attributeCheck=null),a.ADD_TAGS&&(typeof a.ADD_TAGS=="function"?f.tagCheck=a.ADD_TAGS:(H===Ae&&(H=pe(H)),N(H,a.ADD_TAGS,K))),a.ADD_ATTR&&(typeof a.ADD_ATTR=="function"?f.attributeCheck=a.ADD_ATTR:(W===Mt&&(W=pe(W)),N(W,a.ADD_ATTR,K))),a.ADD_URI_SAFE_ATTR&&N(Sn,a.ADD_URI_SAFE_ATTR,K),a.FORBID_CONTENTS&&(he===Tn&&(he=pe(he)),N(he,a.FORBID_CONTENTS,K)),a.ADD_FORBID_CONTENTS&&(he===Tn&&(he=pe(he)),N(he,a.ADD_FORBID_CONTENTS,K)),En&&(H["#text"]=!0),ge&&N(H,["html","head","body"]),H.table&&(N(H,["tbody"]),delete Ne.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw ot('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ot('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');S=a.TRUSTED_TYPES_POLICY,h=S.createHTML("")}else S===void 0&&(S=es(b,r)),S!==null&&typeof h=="string"&&(h=S.createHTML(""));te&&te(a),je=a}},tr=N({},[...yn,...vn,...Gi]),nr=N({},[...xn,...Wi]),us=function(a){let m=L(a);(!m||!m.tagName)&&(m={namespaceURI:We,tagName:"template"});const v=Nt(a.tagName),F=Nt(m.tagName);return kn[a.namespaceURI]?a.namespaceURI===$t?m.namespaceURI===ve?v==="svg":m.namespaceURI===Dt?v==="svg"&&(F==="annotation-xml"||Pt[F]):!!tr[v]:a.namespaceURI===Dt?m.namespaceURI===ve?v==="math":m.namespaceURI===$t?v==="math"&&Ht[F]:!!nr[v]:a.namespaceURI===ve?m.namespaceURI===$t&&!Ht[F]||m.namespaceURI===Dt&&!Pt[F]?!1:!nr[v]&&(as[v]||!tr[v]):!!(at==="application/xhtml+xml"&&kn[a.namespaceURI]):!1},me=function(a){tt(t.removed,{element:a});try{L(a).removeChild(a)}catch{O(a)}},Oe=function(a,m){try{tt(t.removed,{attribute:m.getAttributeNode(a),from:m})}catch{tt(t.removed,{attribute:null,from:m})}if(m.removeAttribute(a),a==="is")if(Be||Rt)try{me(m)}catch{}else try{m.setAttribute(a,"")}catch{}},or=function(a){let m=null,v=null;if(Re)a="<remove></remove>"+a;else{const q=_n(a,/^[\r\n\t ]+/);v=q&&q[0]}at==="application/xhtml+xml"&&We===ve&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const F=S?S.createHTML(a):a;if(We===ve)try{m=new _().parseFromString(F,at)}catch{}if(!m||!m.documentElement){m=T.createDocument(We,"template",null);try{m.documentElement.innerHTML=An?h:F}catch{}}const ee=m.body||m.documentElement;return a&&v&&ee.insertBefore(n.createTextNode(v),ee.childNodes[0]||null),We===ve?D.call(m,ge?"html":"body")[0]:ge?m.documentElement:ee},rr=function(a){return k.call(a.ownerDocument||a,a,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},In=function(a){return a instanceof c&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof g)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},ir=function(a){return typeof l=="function"&&a instanceof l};function xe(E,a,m){It(E,v=>{v.call(t,a,m,je)})}const sr=function(a){let m=null;if(xe(x.beforeSanitizeElements,a,null),In(a))return me(a),!0;const v=K(a.nodeName);if(xe(x.uponSanitizeElement,a,{tagName:v,allowedTags:H}),Le&&a.hasChildNodes()&&!ir(a.firstElementChild)&&ne(/<[/\w!]/g,a.innerHTML)&&ne(/<[/\w!]/g,a.textContent)||a.nodeType===it.progressingInstruction||Le&&a.nodeType===it.comment&&ne(/<[/\w]/g,a.data))return me(a),!0;if(!(f.tagCheck instanceof Function&&f.tagCheck(v))&&(!H[v]||Ne[v])){if(!Ne[v]&&lr(v)&&(z.tagNameCheck instanceof RegExp&&ne(z.tagNameCheck,v)||z.tagNameCheck instanceof Function&&z.tagNameCheck(v)))return!1;if(En&&!he[v]){const F=L(a)||a.parentNode,ee=w(a)||a.childNodes;if(ee&&F){const q=ee.length;for(let re=q-1;re>=0;--re){const we=R(ee[re],!0);we.__removalCount=(a.__removalCount||0)+1,F.insertBefore(we,C(a))}}}return me(a),!0}return a instanceof p&&!us(a)||(v==="noscript"||v==="noembed"||v==="noframes")&&ne(/<\/no(script|embed|frames)/i,a.innerHTML)?(me(a),!0):(ye&&a.nodeType===it.text&&(m=a.textContent,It([B,P,Z],F=>{m=nt(m,F," ")}),a.textContent!==m&&(tt(t.removed,{element:a.cloneNode()}),a.textContent=m)),xe(x.afterSanitizeElements,a,null),!1)},ar=function(a,m,v){if(ze[m]||Yo&&(m==="id"||m==="name")&&(v in n||v in ds))return!1;if(!(M&&!ze[m]&&ne(Q,m))){if(!(A&&ne(Se,m))){if(!(f.attributeCheck instanceof Function&&f.attributeCheck(m,a))){if(!W[m]||ze[m]){if(!(lr(a)&&(z.tagNameCheck instanceof RegExp&&ne(z.tagNameCheck,a)||z.tagNameCheck instanceof Function&&z.tagNameCheck(a))&&(z.attributeNameCheck instanceof RegExp&&ne(z.attributeNameCheck,m)||z.attributeNameCheck instanceof Function&&z.attributeNameCheck(m,a))||m==="is"&&z.allowCustomizedBuiltInElements&&(z.tagNameCheck instanceof RegExp&&ne(z.tagNameCheck,v)||z.tagNameCheck instanceof Function&&z.tagNameCheck(v))))return!1}else if(!Sn[m]){if(!ne(Fe,nt(v,ce,""))){if(!((m==="src"||m==="xlink:href"||m==="href")&&a!=="script"&&Ui(v,"data:")===0&&Jo[a])){if(!(V&&!ne(Y,nt(v,ce,"")))){if(v)return!1}}}}}}}return!0},lr=function(a){return a!=="annotation-xml"&&_n(a,fe)},cr=function(a){xe(x.beforeSanitizeAttributes,a,null);const{attributes:m}=a;if(!m||In(a))return;const v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W,forceKeepAttr:void 0};let F=m.length;for(;F--;){const ee=m[F],{name:q,namespaceURI:re,value:we}=ee,Ve=K(q),Nn=we;let J=q==="value"?Nn:Fi(Nn);if(v.attrName=Ve,v.attrValue=J,v.keepAttr=!0,v.forceKeepAttr=void 0,xe(x.uponSanitizeAttribute,a,v),J=v.attrValue,Ko&&(Ve==="id"||Ve==="name")&&(Oe(q,a),J=is+J),Le&&ne(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,J)){Oe(q,a);continue}if(Ve==="attributename"&&_n(J,"href")){Oe(q,a);continue}if(v.forceKeepAttr)continue;if(!v.keepAttr){Oe(q,a);continue}if(!X&&ne(/\/>/i,J)){Oe(q,a);continue}ye&&It([B,P,Z],ur=>{J=nt(J,ur," ")});const dr=K(a.nodeName);if(!ar(dr,Ve,J)){Oe(q,a);continue}if(S&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!re)switch(b.getAttributeType(dr,Ve)){case"TrustedHTML":{J=S.createHTML(J);break}case"TrustedScriptURL":{J=S.createScriptURL(J);break}}if(J!==Nn)try{re?a.setAttributeNS(re,q,J):a.setAttribute(q,J),In(a)?me(a):$o(t.removed)}catch{Oe(q,a)}}xe(x.afterSanitizeAttributes,a,null)},ps=function E(a){let m=null;const v=rr(a);for(xe(x.beforeSanitizeShadowDOM,a,null);m=v.nextNode();)xe(x.uponSanitizeShadowNode,m,null),sr(m),cr(m),m.content instanceof i&&E(m.content);xe(x.afterSanitizeShadowDOM,a,null)};return t.sanitize=function(E){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=null,v=null,F=null,ee=null;if(An=!E,An&&(E="<!-->"),typeof E!="string"&&!ir(E))if(typeof E.toString=="function"){if(E=E.toString(),typeof E!="string")throw ot("dirty is not a string, aborting")}else throw ot("toString is not a function");if(!t.isSupported)return E;if(Me||Cn(a),t.removed=[],typeof E=="string"&&(st=!1),st){if(E.nodeName){const we=K(E.nodeName);if(!H[we]||Ne[we])throw ot("root node is forbidden and cannot be sanitized in-place")}}else if(E instanceof l)m=or("<!---->"),v=m.ownerDocument.importNode(E,!0),v.nodeType===it.element&&v.nodeName==="BODY"||v.nodeName==="HTML"?m=v:m.appendChild(v);else{if(!Be&&!ye&&!ge&&E.indexOf("<")===-1)return S&&Ot?S.createHTML(E):E;if(m=or(E),!m)return Be?null:Ot?h:""}m&&Re&&me(m.firstChild);const q=rr(st?E:m);for(;F=q.nextNode();)sr(F),cr(F),F.content instanceof i&&ps(F.content);if(st)return E;if(Be){if(Rt)for(ee=I.call(m.ownerDocument);m.firstChild;)ee.appendChild(m.firstChild);else ee=m;return(W.shadowroot||W.shadowrootmode)&&(ee=U.call(o,ee,!0)),ee}let re=ge?m.outerHTML:m.innerHTML;return ge&&H["!doctype"]&&m.ownerDocument&&m.ownerDocument.doctype&&m.ownerDocument.doctype.name&&ne(Bo,m.ownerDocument.doctype.name)&&(re="<!DOCTYPE "+m.ownerDocument.doctype.name+`>
`+re),ye&&It([B,P,Z],we=>{re=nt(re,we," ")}),S&&Ot?S.createHTML(re):re},t.setConfig=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Cn(E),Me=!0},t.clearConfig=function(){je=null,Me=!1},t.isValidAttribute=function(E,a,m){je||Cn({});const v=K(E),F=K(a);return ar(v,F,m)},t.addHook=function(E,a){typeof a=="function"&&tt(x[E],a)},t.removeHook=function(E,a){if(a!==void 0){const m=Pi(x[E],a);return m===-1?void 0:Hi(x[E],m,1)[0]}return $o(x[E])},t.removeHooks=function(E){x[E]=[]},t.removeAllHooks=function(){x=Wo()},t}var Vo=jo();const Xo={ADD_ATTR:["target","rel"]};Ri();function ts(e){const t=Math.floor((Date.now()-e)/1e3);if(t<60)return"just now";const n=Math.floor(t/60);if(n<60)return`${n}m`;const o=Math.floor(n/60);if(o<24)return`${o}h`;const r=Math.floor(o/24);return r<30?`${r}d`:`${Math.floor(r/30)}mo`}function qo({size:e=28}){return d("svg",{width:e,height:e,viewBox:"0 0 100 100","aria-label":"Human agent",children:[d("circle",{cx:"50",cy:"50",r:"50",fill:"#e8e8e8"}),d("circle",{cx:"50",cy:"50",r:"47",fill:"none",stroke:"#dcdcdc",strokeWidth:"1"}),d("clipPath",{id:"avatar-clip",children:d("circle",{cx:"50",cy:"50",r:"47"})}),d("g",{clipPath:"url(#avatar-clip)",children:[d("circle",{cx:"50",cy:"40",r:"16",fill:"#ffffff"}),d("ellipse",{cx:"50",cy:"82",rx:"28",ry:"24",fill:"#ffffff"})]})]})}function ns({productId:e,apiUrl:t}){const n=Te(null);n.current||(n.current=new jr({productId:e,apiUrl:t}));const o=n.current,[r,i]=ie(o.getState());ke(()=>o.subscribe(f=>i(f)),[o]);const s=Te(null),l=Te(null),p=Te(null),u=Te(null),g=Te(null),[c,_]=ie(""),[b,y]=ie([]),[R,O]=ie([]),[C,w]=ie(!1),[L,S]=ie(!1),h=Te(null),[T,k]=ie("Assistant"),[I,D]=ie("Hi! What can I do for you today?"),[U,x]=ie([]),[B,P]=ie(null),Z=Te(null),[Q,Se]=ie(new Set),[,Y]=ie(0);ke(()=>{const f=setInterval(()=>Y(A=>A+1),3e4);return()=>clearInterval(f)},[]);const ce=Ye(()=>{for(let f=r.messages.length-1;f>=0;f--)if(r.messages[f].role==="assistant")return f;return-1},[r.messages]),fe=Ye(()=>r.messages.some(f=>f.source==="human"),[r.messages]),Fe=Ye(()=>r.messages.findIndex(f=>f.source==="human"),[r.messages]),H=U.map(f=>{var A,M;return{...f,message:((A=f.message)==null?void 0:A.trim())||((M=f.buttonLabel)==null?void 0:M.trim())||""}}).filter(f=>!!f.message);ke(()=>{const f=M=>{const V=M.detail;P(V)},A=()=>P(null);return Pe.addEventListener("approval-requested",f),Pe.addEventListener("approval-dismissed",A),()=>{Pe.removeEventListener("approval-requested",f),Pe.removeEventListener("approval-dismissed",A),$r()}},[]);const Ae=qt(f=>{on(f),P(null),ue()},[]);qt(()=>{var f;on(!1),P(null),ue(),(f=Z.current)==null||f.abort(),Z.current=null,o.dispatch({type:"STOP_STREAMING"})},[o]),ke(()=>{o.loadConfig().then(f=>{var A,M,V;Qr(p.current,f.appearance),ei(p.current,f.bubble),(A=f.identity)!=null&&A.name&&k(f.identity.name),(M=f.identity)!=null&&M.welcomeMessage&&D(f.identity.welcomeMessage),(V=f.suggestions)!=null&&V.length&&x(f.suggestions)}).catch(f=>{console.error("[Argide] loadConfig failed:",f)})},[o]),ke(()=>{const f=A=>{const M=A.detail;M!=null&&M.productId&&M.productId!==e||o.resetUser()};return window.addEventListener("og2:resetUser",f),()=>window.removeEventListener("og2:resetUser",f)},[e,o]),ke(()=>{r.isOpen&&!r.isStreaming&&setTimeout(()=>{var f;return(f=s.current)==null?void 0:f.focus()},50)},[r.isOpen,r.isStreaming]),ke(()=>{var f;(f=l.current)==null||f.scrollIntoView({behavior:"smooth"})},[r.messages,B]);const W=qt(async f=>{const A=f.trim(),M=[...b];if(!(!A&&M.length===0||r.isStreaming)){_(""),y([]),s.current&&(s.current.style.height="auto");try{await o.sendMessage(A||"",M)}catch(V){console.error("[Argide] sendMessage failed:",V),o.dispatch({type:"SET_ERROR",error:"Failed to send message. Please try again."})}}},[r.isStreaming,o,b]);function Mt(f){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),W(c))}function z(){const f=o.newConversation();f&&O(A=>[{id:Date.now(),conversationId:f.conversationId,title:f.title,preview:f.preview,messages:f.messages},...A]),w(!1)}async function Ne(f){w(!1);try{f.conversationId?await o.restoreConversation(f.conversationId):o.dispatch({type:"LOAD_MESSAGES",messages:f.messages}),O(A=>A.filter(M=>M.id!==f.id))}catch(A){console.error("[Ourguide] Failed to restore conversation:",A),o.dispatch({type:"SET_ERROR",error:"Failed to restore conversation. Please try again."})}}function ze(){var V;const f=window.SpeechRecognition||window.webkitSpeechRecognition;if(!f)return;if(L){(V=h.current)==null||V.stop(),S(!1);return}const A=new f;A.lang="en-US",A.interimResults=!0,A.continuous=!0;const M=c.trimEnd();A.onresult=X=>{let ye="",Le="";for(let Me=0;Me<X.results.length;Me++){const Re=X.results[Me];Re.isFinal?ye+=Re[0].transcript:Le+=Re[0].transcript}const ge=(ye+Le).trim();_(M?`${M} ${ge}`:ge)},A.onend=()=>S(!1),A.onerror=()=>S(!1),h.current=A,A.start(),S(!0)}return d("div",{className:"og2-container",ref:p,children:[r.isOpen&&d("div",{className:"og2-panel",children:[d("div",{className:"og2-panel-header",children:[d("div",{className:"og2-panel-title",children:[fe&&d(qo,{size:24}),d("span",{children:fe?"Support Agent":T})]}),d("div",{className:"og2-header-actions",children:[d("button",{className:"og2-action-btn",onClick:z,"aria-label":"New conversation",title:"New conversation",children:d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M12 5v14M5 12h14"})})}),d("button",{className:"og2-action-btn",onClick:()=>w(f=>!f),"aria-label":"Recent conversations",title:"Recent conversations",children:d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"}),d("path",{d:"M12 7v5l4 2"})]})}),d("button",{className:"og2-close-btn",onClick:()=>o.close(),"aria-label":"Close",children:d("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:d("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),C&&d("div",{className:"og2-history-panel",children:[d("div",{className:"og2-history-header",children:[d("span",{className:"og2-history-title",children:"Recent Conversations"}),d("button",{className:"og2-action-btn",onClick:()=>w(!1),"aria-label":"Close history",children:d("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:d("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),d("div",{className:"og2-history-list",children:R.length===0?d("p",{className:"og2-history-empty",children:"No conversations yet"}):R.map(f=>d("button",{className:"og2-history-item",onClick:()=>Ne(f),children:[d("span",{className:"og2-history-item-title",children:f.title}),d("span",{className:"og2-history-item-preview",children:f.preview})]},f.id))})]}),d("div",{className:"og2-messages",children:d("div",{className:"og2-messages-inner",children:[d("div",{className:"og2-message og2-message-assistant",children:d("div",{className:"og2-bubble og2-md",dangerouslySetInnerHTML:{__html:Vo.sanitize(xo(I),Xo)}})}),H.length>0&&r.messages.length===0&&d("div",{className:"og2-suggestions",children:H.map((f,A)=>d("button",{className:"og2-suggestion-btn",onClick:()=>W(f.message),children:f.message},A))}),r.messages.map((f,A)=>{var M;return d(De,{children:[A===Fe&&d("div",{className:"og2-handoff-banner",children:[d(qo,{size:20}),d("span",{children:[d("strong",{children:"Support Agent"})," joined the conversation"]})]},"handoff-banner"),f.isStreaming&&!f.content&&!((M=f.toolCalls)!=null&&M.length)?d("div",{className:"og2-message og2-message-assistant",children:d("span",{className:"og2-shimmer-text",children:"Thinking"})}):d("div",{className:`og2-message og2-message-${f.role}`,onClick:f.role==="assistant"&&A!==ce&&f.timestamp?()=>Se(V=>{const X=new Set(V);return X.has(f.id)?X.delete(f.id):X.add(f.id),X}):void 0,children:f.role==="assistant"?d(De,{children:[d("div",{className:"og2-assistant-content",children:[f.toolCalls&&f.toolCalls.length>0&&d(os,{toolCalls:f.toolCalls,awaitingResponse:f.isStreaming&&!f.content,hasContent:!!f.content}),f.content&&d("div",{className:"og2-bubble og2-md",children:d("span",{dangerouslySetInnerHTML:{__html:Vo.sanitize(xo(f.content),Xo)}})})]}),f.timestamp&&(A===ce||Q.has(f.id))&&d("div",{className:"og2-msg-meta",children:[d("span",{children:f.source==="human"?"Support Agent":"AI Agent"}),d("span",{className:"og2-msg-meta-dot",children:"·"}),d("span",{children:ts(f.timestamp)})]})]}):d("div",{className:"og2-bubble",children:f.content})})]},f.id)}),B&&d("div",{className:"og2-message og2-message-assistant og2-message-full",children:d("div",{className:"og2-approval-card",children:[d("div",{className:"og2-approval-header",children:d("span",{className:"og2-approval-label",children:"Action requested"})}),d("p",{className:"og2-approval-desc",children:"The assistant wants to take actions on this page."}),d("div",{className:"og2-approval-actions",children:[d("button",{className:"og2-approval-deny",onClick:()=>Ae(!1),children:"Deny"}),d("button",{className:"og2-approval-allow",onClick:()=>Ae(!0),children:"Allow"})]})]})}),r.error&&d("div",{className:"og2-error-banner",children:[d("span",{className:"og2-error-text",children:r.error}),r.errorRetriable?d("button",{className:"og2-error-retry",onClick:()=>{o.retry()},"aria-label":"Retry",children:[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("polyline",{points:"23 4 23 10 17 10"}),d("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]}),"Retry"]}):d("button",{className:"og2-error-retry",onClick:()=>o.dispatch({type:"SET_ERROR",error:""}),"aria-label":"Dismiss",children:"Dismiss"})]}),d("div",{ref:l})]})}),d("div",{className:"og2-footer",children:[d("div",{className:"og2-input-area",children:d("div",{className:"og2-input-inner",children:[b.length>0&&d("div",{className:"og2-file-chips",children:b.map((f,A)=>d("span",{className:"og2-file-chip",children:[d("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),d("polyline",{points:"13 2 13 9 20 9"})]}),f.name.length>18?`${f.name.slice(0,16)}…`:f.name,d("button",{className:"og2-file-chip-remove",onClick:()=>y(M=>M.filter((V,X)=>X!==A)),"aria-label":`Remove ${f.name}`,children:"×"})]},A))}),d("textarea",{ref:s,className:"og2-input",value:c,onInput:f=>{const A=f.target;_(A.value),A.style.height="auto",A.style.height=`${Math.min(A.scrollHeight,200)}px`},onKeyDown:Mt,placeholder:"Message..."}),d("div",{className:"og2-input-toolbar",children:[d("div",{className:"og2-input-toolbar-left",children:[d("button",{className:"og2-upload-btn",onClick:()=>{var f;return(f=g.current)==null?void 0:f.click()},"aria-label":"Attach file",title:"Attach file",children:d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.42 16.41a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),d("input",{ref:g,type:"file",multiple:!0,accept:"image/*,.pdf,.doc,.docx,.txt,.csv,.md",style:{display:"none"},onChange:f=>{const M=Array.from(f.target.files??[]),V=M.filter(X=>X.size<=20971520);if(V.length<M.length){const X=M.length-V.length;o.dispatch({type:"SET_ERROR",error:`${X} file${X>1?"s":""} exceeded the 20MB size limit and ${X>1?"were":"was"} skipped`})}V.length>0&&y(X=>[...X,...V]),f.target.value=""}}),d("button",{className:`og2-mic-btn${L?" og2-mic-active":""}`,onClick:ze,"aria-label":"Voice input",title:"Voice input",children:d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("rect",{x:"9",y:"2",width:"6",height:"11",rx:"3"}),d("path",{d:"M5 10a7 7 0 0 0 14 0M12 19v3M8 22h8"})]})})]}),d("div",{className:"og2-input-toolbar-spacer"}),d("div",{className:"og2-input-toolbar-right",children:r.isStreaming?d("button",{className:"og2-send-btn og2-send-btn--stop",onClick:()=>o.cancelStream(),"aria-label":"Send",children:[d("span",{className:"og2-send-bg",children:[d("span",{className:"og2-send-bg-base"}),d("span",{className:"og2-send-bg-color"})]}),d("span",{className:"og2-send-icons",children:[d("span",{className:"og2-send-icon og2-send-icon--arrow",children:d("svg",{width:"14",height:"14",viewBox:"0 0 384 512",fill:"currentColor",children:d("path",{d:"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2l105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"})})}),d("span",{className:"og2-send-icon og2-send-icon--stop",children:d("svg",{width:"14",height:"14",viewBox:"0 0 384 512",fill:"currentColor",children:d("path",{d:"M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"})})})]})]}):d("button",{className:"og2-send-btn",onClick:()=>W(c),disabled:!c.trim()&&b.length===0,"aria-label":"Send",children:[d("span",{className:"og2-send-bg",children:[d("span",{className:"og2-send-bg-base"}),d("span",{className:"og2-send-bg-color"})]}),d("span",{className:"og2-send-icons",children:[d("span",{className:"og2-send-icon og2-send-icon--arrow",children:d("svg",{width:"14",height:"14",viewBox:"0 0 384 512",fill:"currentColor",children:d("path",{d:"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2l105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"})})}),d("span",{className:"og2-send-icon og2-send-icon--stop",children:d("svg",{width:"14",height:"14",viewBox:"0 0 384 512",fill:"currentColor",children:d("path",{d:"M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"})})})]})]})})]})]})}),d("div",{className:"og2-powered-by",children:[d("img",{className:"og2-powered-by-logo",src:`${t}/argide-logo.png`,alt:"Argide",width:"14",height:"14"}),d("p",{className:"og2-powered-by-text",children:d("a",{href:"https://www.argide.ai",target:"_blank",rel:"noopener noreferrer",children:"Powered by Argide"})})]})]})]}),d("button",{ref:u,className:"og2-trigger",onClick:()=>r.isOpen?o.close():o.open(),"aria-label":r.isOpen?"Close assistant":"Open assistant",children:r.isOpen?d("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:d("path",{d:"M6 6L18 18M18 6L6 18"})}):d("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})})})]})}function os({toolCalls:e,awaitingResponse:t,hasContent:n}){const[o,r]=ie(!1),i=e[e.length-1],s=e.length,l=i.status==="calling"||t&&(i.name==="capture_screen"||i.name==="capture_screen_for_action")&&i.status==="done",p=!l&&n,u=d("svg",{className:"og2-step-check",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M20 6L9 17l-5-5"})});return p?d("div",{className:"og2-tool-steps",children:[d("button",{className:"og2-tool-summary",onClick:()=>r(!o),children:[d("span",{className:"og2-tool-step-done",children:[s," step",s!==1?"s":"",u]}),d("svg",{className:`og2-tool-summary-chevron ${o?"og2-chevron-open":""}`,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M9 18l6-6-6-6"})})]}),o&&e.map(g=>d("div",{className:"og2-tool-step",children:d("span",{className:"og2-tool-step-done",children:[vo(g,!1),u]})},g.id))]}):d("div",{className:"og2-tool-steps",children:d("div",{className:"og2-tool-current",children:d("span",{className:l?"og2-shimmer-text":"og2-shimmer-fade",children:[vo(i,t),!l&&u]})})})}const rs=`/* @usecrow/ui — Widget styles
 * All classes are prefixed with og2- to avoid collisions with the host page.
 * Import via: import '@usecrow/ui/styles.css'
 */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* ── Scoped reset ── */
.og2-container *,
.og2-container *::before,
.og2-container *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.og2-container {
  position: fixed;
  z-index: 2147483647;
  font-family: var(--og2-font, 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  font-size: var(--og2-font-size, 14px);
  font-weight: var(--og2-font-weight, 400);
  line-height: var(--og2-line-height, 1.5);
  letter-spacing: var(--og2-letter-spacing, 0px);
  color: var(--og2-text, #18181b);
  bottom: var(--og2-bubble-bottom, 16px);
  right: var(--og2-bubble-right, 16px);
}

/* ── Floating trigger button ── */
.og2-trigger {
  width: var(--og2-bubble-size, 48px);
  height: var(--og2-bubble-size, 48px);
  border-radius: 50%;
  background: var(--og2-bubble-bg, var(--og2-agent-bubble, #18181b));
  color: var(--og2-bubble-icon, var(--og2-agent-bubble-text, #ffffff));
  border: 1px solid var(--og2-bubble-border, transparent);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.og2-trigger:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.og2-trigger svg {
  width: var(--og2-bubble-icon-size, 20px);
  height: var(--og2-bubble-icon-size, 20px);
}

/* ── Chat panel ── */
.og2-panel {
  position: absolute;
  bottom: 64px;
  right: 0;
  width: var(--og2-width, 400px);
  height: var(--og2-height, 600px);
  background: var(--og2-bg, #ffffff);
  border-radius: var(--og2-radius, 24px);
  box-shadow: var(--og2-shadow, 0 4px 16px rgba(0, 0, 0, 0.12));
  border: 1px solid var(--og2-border, #e4e4e7);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Header ── */
.og2-panel-header {
  padding: var(--og2-padding, 12px) var(--og2-padding, 16px);
  border-bottom: 1px solid var(--og2-border, #e4e4e7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background: var(--og2-bg, #ffffff);
}

.og2-panel-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--og2-header-size, 16px);
  font-weight: 600;
  color: var(--og2-text, #18181b);
}

.og2-header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.og2-action-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--og2-text, #000000);
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: opacity 0.15s ease;
}

.og2-action-btn:hover {
  opacity: 0.7;
}

.og2-close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--og2-text, #000000);
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: opacity 0.15s ease;
}

.og2-close-btn:hover {
  opacity: 0.7;
}

/* ── Context label ── */
.og2-context-label {
  padding: 6px 16px;
  border-bottom: 1px solid var(--og2-border, #e4e4e7);
  background: #fafafa;
  font-size: 11px;
  color: #71717a;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

/* ── History panel ── */
.og2-history-panel {
  margin: 8px 12px;
  border-radius: 12px;
  border: 1px solid var(--og2-border, #e4e4e7);
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.10);
  background: var(--og2-bg, #ffffff);
  max-height: 180px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
}

.og2-history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid var(--og2-border, #e4e4e7);
  flex-shrink: 0;
}

.og2-history-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--og2-text, #18181b);
}

.og2-history-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
}
.og2-history-list::-webkit-scrollbar {
  width: 4px;
}
.og2-history-list::-webkit-scrollbar-track {
  background: transparent;
}
.og2-history-list::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}
.og2-history-list::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.25);
}

.og2-history-empty {
  text-align: center;
  font-size: 12px;
  color: #a1a1aa;
  padding: 20px 12px;
  margin: 0;
}

.og2-history-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px;
  text-align: left;
  background: none;
  border: none;
  border-bottom: 1px solid var(--og2-border, #e4e4e7);
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.og2-history-item:last-child {
  border-bottom: none;
}

.og2-history-item:hover {
  opacity: 0.7;
}

.og2-history-item-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--og2-text, #18181b);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.og2-history-item-preview {
  font-size: 11px;
  color: #a1a1aa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Messages outer wrapper ── */
.og2-messages {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: var(--og2-bg, #ffffff);
}

/* ── Messages inner scrollable container ── */
.og2-messages-inner {
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 0;
  margin: 0 16px;
  border-radius: 16px;
  background: var(--og2-messages-bg, #ffffff);
  scroll-behavior: smooth;
  box-sizing: border-box;
}

/* ── Sleek scrollbar ── */
.og2-messages-inner::-webkit-scrollbar {
  width: 4px;
}
.og2-messages-inner::-webkit-scrollbar-track {
  background: transparent;
}
.og2-messages-inner::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}
.og2-messages-inner::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.25);
}
.og2-messages-inner {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
}

/* ── Message rows ── */
.og2-message {
  font-size: var(--og2-font-size, 14px);
  display: flex;
  align-items: flex-end;
}

.og2-message-assistant {
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.og2-message-user {
  justify-content: flex-end;
  align-items: flex-end;
}

.og2-message-full {
  width: 100%;
}

/* ── Agent bubble: light bg, black text ── */
.og2-assistant-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
}
.og2-message-assistant .og2-bubble {
  display: inline-block;
  background: var(--og2-agent-bubble, #f4f4f5);
  color: var(--og2-agent-bubble-text, #18181b);
  padding: 10px 16px;
  border-radius: 24px;
  max-width: 88%;
  white-space: pre-wrap;
  word-break: break-word;
}

/* ── User bubble ── */
.og2-message-user .og2-bubble {
  display: inline-block;
  background: var(--og2-user-bubble, #1e3a5f);
  color: var(--og2-user-bubble-text, #ffffff);
  border: 1px solid var(--og2-user-bubble-border, #1e3a5f);
  padding: 10px 16px;
  border-radius: 24px;
  max-width: 88%;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-word;
}

.og2-error-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 13px;
  line-height: 1.4;
  margin: 4px 0;
}

.og2-error-text {
  flex: 1;
  min-width: 0;
  word-break: break-word;
}

.og2-error-retry {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  background: none;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 500;
  color: #991b1b;
  cursor: pointer;
  transition: background 0.15s;
  font-family: inherit;
}

.og2-error-retry:hover {
  background: #fee2e2;
}

/* ── Thinking indicator row (matches Dex layout) ── */
.og2-thinking-row {
  padding: 0 4px;
  width: 100%;
  color: rgba(0, 0, 0, 0.95);
}

.og2-thinking-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: 1.75;
}

/* ── Message metadata (source + elapsed time) ── */
/* ── Handoff banner ── */
.og2-handoff-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  color: #888888;
  padding: 4px 0;
}

.og2-handoff-banner strong {
  color: #3a3a3a;
  font-weight: 600;
}

.og2-msg-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #868686;
  margin-top: 4px;
  padding-left: 16px;
}

.og2-msg-meta-dot {
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  color: #868686;
}

/* Make older assistant messages clickable to reveal metadata */
.og2-message-assistant {
  cursor: default;
}

/* ── Shimmer "Thinking" text ── */
.og2-shimmer-text {
  display: inline-block;
  color: rgba(0, 0, 0, 0.27);
  background: linear-gradient(90deg,
    rgba(0, 0, 0, 0.22) 0%,
    rgba(0, 0, 0, 0.22) 50%,
    rgba(0, 0, 0, 0.22) 54%,
    rgba(0, 0, 0, 0.30) 57%,
    rgba(0, 0, 0, 0.34) 61%,
    rgba(0, 0, 0, 0.42) 66%,
    rgba(0, 0, 0, 0.42) 74%,
    rgba(0, 0, 0, 0.34) 79%,
    rgba(0, 0, 0, 0.30) 83%,
    rgba(0, 0, 0, 0.22) 88%,
    rgba(0, 0, 0, 0.22) 92%,
    rgba(0, 0, 0, 0.22) 100%
  );
  background-size: 200% 100%;
  background-repeat: repeat-x;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  will-change: background-position, opacity;
  animation: og2-shimmer 1s linear infinite;
  line-height: inherit;
}

@keyframes og2-shimmer {
  0% {
    background-position: 0% 0;
    opacity: 0.98;
  }
  15% {
    opacity: 1;
  }
  86% {
    background-position: -200% 0;
    opacity: 1;
  }
  100% {
    background-position: -202% 0;
    opacity: 0.99;
  }
}

/* ── Streaming cursor ── */
.og2-cursor {
  display: inline-block;
  width: 2px;
  height: 14px;
  background: var(--og2-agent-bubble-text, #ffffff);
  margin-left: 1px;
  vertical-align: text-bottom;
  animation: og2-blink 0.8s step-end infinite;
}

@keyframes og2-blink {
  50% { opacity: 0; }
}

/* ── Tool call indicators ── */
.og2-tool-steps {
  padding: 2px 0 4px;
}

.og2-tool-current {
  display: flex;
  align-items: center;
  gap: 5px;
}

.og2-tool-step-done {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #a1a1aa;
  padding: 2px 0;
}

.og2-step-check {
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
  color: #22c55e;
  flex-shrink: 0;
  animation: og2-check-in 0.3s ease-out;
}

@keyframes og2-check-in {
  0%   { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}

.og2-shimmer-fade .og2-step-check,
.og2-shimmer-text .og2-step-check {
  -webkit-text-fill-color: initial;
  -webkit-background-clip: initial;
  background-clip: initial;
  background: none;
}

.og2-shimmer-fade {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  padding: 4px 0;
  background: linear-gradient(
    90deg,
    #71717a 0%,
    #71717a 40%,
    #d4d4d8 50%,
    #71717a 60%,
    #71717a 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: og2-shimmer-out 0.6s ease-out forwards;
}

@keyframes og2-shimmer-out {
  0%   { background-position: 200% 0; opacity: 1; }
  100% { background-position: -200% 0; opacity: 0.55; }
}

.og2-tool-step {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 0 2px 4px;
  font-size: 12px;
}
.og2-tool-step .og2-tool-step-done {
  font-size: 12px;
  color: #c4c4cc;
}

.og2-tool-summary {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  padding: 2px 0;
  cursor: pointer;
  font-family: inherit;
}
.og2-tool-summary:hover .og2-tool-step-done {
  color: #71717a;
}
.og2-tool-summary-chevron {
  color: #a1a1aa;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}
.og2-tool-summary:hover .og2-tool-summary-chevron {
  color: #71717a;
}
.og2-chevron-open {
  transform: rotate(90deg);
}

.og2-tool-steps + .og2-bubble {
  margin-top: 4px;
}

/* ── Tool renderer container ── */
.og2-tool-renderer {
  margin-top: 8px;
  border-radius: 8px;
  overflow: hidden;
}

/* ── Footer ── */
.og2-footer {
  position: relative;
  padding: 0 12px 12px;
  background: transparent;
  border-top: none;
  flex-shrink: 0;
}


/* ── Powered by ── */
.og2-powered-by {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 8px;
}

.og2-powered-by-logo {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  opacity: 0.55;
}

.og2-powered-by-text {
  font-size: 11px;
  font-weight: 600;
  color: #6b7280;
  text-align: center;
}

/* ── Input area — outer frosted shell ── */

.og2-powered-by-text a {
  color: inherit;
  text-decoration: none;
}

.og2-powered-by-text:hover {
  cursor: pointer;
  color: #374151;
}

/* ── Input wrapper ── */
.og2-input-area {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 19.5px;
  padding: 5.5px;
  width: 100%;
  background: radial-gradient(144.11% 100% at 50% 0%, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%);
  box-shadow:
    0 1.5px 0 0 rgba(255,255,255,1) inset,
    0 2px 0 0 rgba(255,255,255,1) inset,
    0 0 18px 0 rgba(255,255,255,0.8) inset,
    0 1px 2px 0 rgba(0,0,0,0.05),
    0 2px 6px 0 rgba(0,0,0,0.03);
  transition: box-shadow 0.2s ease-out;
}

.og2-input-area:focus-within {
  box-shadow:
    0 1.5px 0 0 rgba(255,255,255,1) inset,
    0 2px 0 0 rgba(255,255,255,1) inset,
    0 0 18px 0 rgba(255,255,255,0.8) inset,
    0 1px 2px 0 rgba(0,0,0,0.08),
    0 4px 12px 0 rgba(0,0,0,0.05);
}

/* ── Input area — inner white card ── */
.og2-input-inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 10px 10px 8.5px;
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  overflow: hidden;
  box-shadow: 0 1px 0 0 rgba(255,255,255,0.4) inset, 0 1px 4px 0 rgba(0,0,0,0.08);
  transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
}

.og2-input-inner:hover {
  border-color: rgba(0, 0, 0, 0.1);
}

.og2-input-area:focus-within .og2-input-inner {
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16);
}

/* ── Bottom toolbar ── */
.og2-input-toolbar {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-top: -6px;
  font-size: 12px;
}

.og2-input-toolbar-left {
  display: flex;
  align-items: center;
  gap: 2px;
}

.og2-input-toolbar-spacer {
  flex: 1;
}

.og2-input-toolbar-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* ── Suggestions ── */
.og2-file-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding-bottom: 6px;
}

.og2-file-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--og2-text, #18181b);
  background: var(--og2-messages-bg, #f4f4f5);
  border: 1px solid var(--og2-border, #e4e4e7);
  border-radius: 6px;
  padding: 2px 6px 2px 5px;
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.og2-file-chip-remove {
  background: none;
  border: none;
  cursor: pointer;
  color: #a1a1aa;
  font-size: 13px;
  line-height: 1;
  padding: 0;
  margin-left: 2px;
  flex-shrink: 0;
  transition: color 0.15s ease;
}

.og2-file-chip-remove:hover {
  color: #ef4444;
}

/* ── Textarea ── */
.og2-input {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 14px;
  font-family: var(--og2-font, inherit);
  color: #000000;
  background: transparent;
  min-height: 48px;
  max-height: 200px;
  overflow-y: auto;
  line-height: 1.6;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: rgba(229, 231, 235, 0.6) transparent;
}

.og2-input::-webkit-scrollbar {
  width: 6px;
}

.og2-input::-webkit-scrollbar-thumb {
  background: rgba(229, 231, 235, 0.6);
  border-radius: 999px;
}

.og2-input::-webkit-scrollbar-track {
  background: transparent;
}

.og2-input::placeholder {
  color: rgba(0, 0, 0, 0.35);
  font-weight: 375;
}

/* ── Icon-only action buttons (mic, upload) ── */
.og2-mic-btn,
.og2-upload-btn {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: none;
  color: #000000;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  opacity: 0.8;
  transition: opacity 75ms ease, background 75ms ease;
}

.og2-mic-btn:hover,
.og2-upload-btn:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.05);
}

.og2-mic-btn.og2-mic-active {
  color: #ef4444;
  background: rgba(254, 242, 242, 1);
  opacity: 1;
  animation: og2-mic-pulse 1.5s ease-in-out infinite;
}

@keyframes og2-mic-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* ── Send button ── */
.og2-send-btn {
  position: relative;
  width: 30px;
  height: 30px;
  margin-left: 2px;
  padding: 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #ffffff;
  overflow: hidden;
  transition: box-shadow 0.2s ease-out;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.10);
  opacity: 0.95;
  background: transparent;
}

.og2-send-btn:hover {
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.12);
}

.og2-send-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.og2-send-btn:active:not(:disabled) {
  transform: scale(0.95);
}

.og2-send-bg {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  pointer-events: none;
}

.og2-send-bg-base {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: rgba(115, 115, 115, 0.7);
}

.og2-send-bg-color {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: radial-gradient(120% 120% at 50% 50%, rgba(31, 78, 243, 0.9) 0%, rgba(31, 78, 243, 0.85) 40%, rgba(31, 78, 243, 0.8) 100%);
  background-size: 200% 200%;
  transition: opacity 0.3s ease-out;
  opacity: 1;
  animation: og2-moving-radial 3s ease-in-out infinite;
}

@keyframes og2-moving-radial {
  0% { background-position: 50% 0%; }
  25% { background-position: 100% 50%; }
  50% { background-position: 50% 100%; }
  75% { background-position: 0% 50%; }
  100% { background-position: 50% 0%; }
}

.og2-send-icons {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.og2-send-icon {
  position: absolute;
  transition: transform 0.22s ease-out, opacity 0.22s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.og2-send-icon--arrow {
  transform: translateY(0);
  opacity: 1;
}

.og2-send-icon--stop {
  transform: translateY(16px);
  opacity: 0;
}

/* Streaming state */
.og2-send-btn--stop .og2-send-bg-color {
  opacity: 0;
}

.og2-send-btn--stop .og2-send-icon--arrow {
  transform: translateY(-16px);
  opacity: 0;
}

.og2-send-btn--stop .og2-send-icon--stop {
  transform: translateY(0);
  opacity: 1;
}

/* ── Suggestions ── */
.og2-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 4px;
  margin-bottom: 10px;
}

.og2-suggestion-btn {
  background: var(--og2-bg, #ffffff);
  border: 1px solid var(--og2-border, #e4e4e7);
  color: var(--og2-text, #18181b);
  font-family: var(--og2-font, 'Inter', system-ui, sans-serif);
  font-weight: var(--og2-font-weight, 400);
  font-size: 12px;
  line-height: 1rem;
  letter-spacing: var(--og2-letter-spacing, 0px);
  padding: 4px 12px;
  border-radius: 9999px;
  cursor: pointer;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1),
              background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
              border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
              opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 100%;
  white-space: normal;
  word-break: break-word;
}

.og2-suggestion-btn:hover {
  opacity: 0.7;
}

.og2-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid var(--og2-border, #e4e4e7);
  border-top-color: var(--og2-agent-bubble, #18181b);
  border-radius: 50%;
  animation: og2-spin 0.6s linear infinite;
  vertical-align: middle;
  flex-shrink: 0;
}

.og2-spinner-sm {
  width: 12px;
  height: 12px;
  border-width: 1.5px;
}

@keyframes og2-spin {
  to { transform: rotate(360deg); }
}

/* ── Markdown rendering ── */
.og2-bubble.og2-md {
  white-space: normal;
}

.og2-md-pre {
  background: #1e1e2e;
  color: #cdd6f4;
  padding: 10px 12px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 12px;
  margin: 6px 0;
  white-space: pre;
  line-height: 1.45;
}

.og2-md-code {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
}

.og2-md-inline-code {
  background: rgba(0, 0, 0, 0.07);
  padding: 1px 5px;
  border-radius: 4px;
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 0.88em;
}

.og2-md-heading {
  font-weight: 600;
  margin: 8px 0 4px;
}

h3.og2-md-heading { font-size: 1.05em; }
h4.og2-md-heading { font-size: 1em; }
h5.og2-md-heading, h6.og2-md-heading { font-size: 0.95em; }

.og2-md-link {
  color: #2563eb;
  text-decoration: underline;
}

ul.og2-md-list {
  list-style-type: disc;
}

ol.og2-md-list {
  list-style-type: decimal;
}

.og2-md-list {
  margin: 4px 0;
  padding-left: 20px;
}

.og2-md-list li {
  margin: 2px 0;
}

.og2-md-table {
  width: 100%;
  border-collapse: collapse;
  margin: 8px 0;
  font-size: 0.9em;
}

.og2-md-table th,
.og2-md-table td {
  border: 1px solid #d1d5db;
  padding: 6px 10px;
}

.og2-md-table th {
  background: #f3f4f6;
  font-weight: 600;
}

.og2-md-table tr:nth-child(even) {
  background: #f9fafb;
}

.og2-bubble.og2-md p {
  margin: 0 0 8px;
}

.og2-bubble.og2-md p:last-child {
  margin-bottom: 0;
}

/* ── Action Approval Card ── */
@keyframes og2-approval-in {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.og2-approval-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 14px;
  background: var(--og2-bg, #ffffff);
  border: 1px solid var(--og2-border, #e4e4e7);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);
  width: 100%;
  animation: og2-approval-in 0.2s ease-out;
}

.og2-approval-header {
  display: flex;
  align-items: center;
}

.og2-approval-label {
  font-size: 12px;
  font-weight: 600;
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.og2-approval-desc {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.45;
  font-weight: 500;
  color: var(--og2-text, #18181b);
  word-break: break-word;
}

.og2-approval-actions {
  display: flex;
  gap: 8px;
  margin-top: 2px;
}

.og2-approval-allow,
.og2-approval-deny {
  flex: 1;
  padding: 7px 0;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  line-height: 1;
  text-align: center;
  transition: all 0.15s ease;
}

.og2-approval-allow {
  background: var(--og2-text, #18181b);
  color: var(--og2-bg, #ffffff);
  border: 1px solid var(--og2-text, #18181b);
}
.og2-approval-allow:hover {
  opacity: 0.88;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}
.og2-approval-allow:active {
  transform: translateY(0);
  box-shadow: none;
}

.og2-approval-deny {
  background: transparent;
  color: #71717a;
  border: 1px solid var(--og2-border, #e4e4e7);
}
.og2-approval-deny:hover {
  background: rgba(0, 0, 0, 0.03);
  color: var(--og2-text, #18181b);
  border-color: #d4d4d8;
}
.og2-approval-deny:active {
  background: rgba(0, 0, 0, 0.05);
}
`;(function(){const e=document.currentScript??document.querySelector('script[data-product-id][src*="argide-b2b-widget"]');if(!e){console.error("[Argide-B2B] Could not find script element");return}const t=e.dataset.productId||"",n=e.dataset.apiUrl??"http://localhost:3000";if(!t){console.error("[Argide-B2B] data-product-id is required");return}async function o(l,p){try{if(l==="registerTools"){p&&typeof p=="object"&&tn(p);return}if(l==="identify"){const u=p??{};if(!u.token||typeof u.token!="string"||!u.token.trim()){console.warn("[Argide-B2B] identify: token is required");return}const g=_e(t);await oo(n,t,g,u.token,u.name);return}if(l==="resetUser"){const u=_e(t);await ro(n,t,u),_o(t),yt(t),window.dispatchEvent(new CustomEvent("og2:resetUser",{detail:{productId:t}}));return}}catch(u){const g=u instanceof Error?u.message:"Unknown error";console.warn(`[Argide-B2B] ${l} failed: ${g}`)}}const r=window,i=Array.isArray(r.argide)?r.argide:[];r.argide=(l,p)=>{o(l,p)};for(const l of i)Array.isArray(l)&&(l[0]==="identify"||l[0]==="resetUser"||l[0]==="registerTools")&&o(l[0],l[1]);function s(){const l=document.createElement("link");l.rel="stylesheet",l.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",document.head.appendChild(l);const p=document.createElement("div");p.id="og2-widget-root",document.body.appendChild(p);const u=p.attachShadow({mode:"open"}),g=document.createElement("style");g.textContent=rs,u.appendChild(g);const c=document.createElement("div");u.appendChild(c),_r($n(ns,{productId:t,apiUrl:n}),c)}document.body?s():document.addEventListener("DOMContentLoaded",s)})()})();
