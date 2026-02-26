(function(){"use strict";var H,m,ae,A,le,_e,ce,ue,J,K,X,R={},de=[],je=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,P=Array.isArray;function O(e,n){for(var t in n)e[t]=n[t];return e}function Q(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function fe(e,n,t){var o,s,r,a={};for(r in n)r=="key"?o=n[r]:r=="ref"?s=n[r]:a[r]=n[r];if(arguments.length>2&&(a.children=arguments.length>3?H.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)a[r]===void 0&&(a[r]=e.defaultProps[r]);return D(e,a,o,s,null)}function D(e,n,t,o,s){var r={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++ae,__i:-1,__u:0};return s==null&&m.vnode!=null&&m.vnode(r),r}function B(e){return e.children}function F(e,n){this.props=e,this.context=n}function L(e,n){if(n==null)return e.__?L(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?L(e):null}function pe(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return pe(e)}}function ge(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!j.__r++||le!=m.debounceRendering)&&((le=m.debounceRendering)||_e)(j)}function j(){for(var e,n,t,o,s,r,a,_=1;A.length;)A.length>_&&A.sort(ce),e=A.shift(),_=A.length,e.__d&&(t=void 0,o=void 0,s=(o=(n=e).__v).__e,r=[],a=[],n.__P&&((t=O({},o)).__v=o.__v+1,m.vnode&&m.vnode(t),Y(n.__P,t,o,n.__n,n.__P.namespaceURI,32&o.__u?[s]:null,r,s??L(o),!!(32&o.__u),a),t.__v=o.__v,t.__.__k[t.__i]=t,ye(r,t,a),o.__e=o.__=null,t.__e!=s&&pe(t)));j.__r=0}function he(e,n,t,o,s,r,a,_,u,l,c){var i,f,d,k,C,y,h,g=o&&o.__k||de,b=n.length;for(u=We(t,n,g,u,b),i=0;i<b;i++)(d=t.__k[i])!=null&&(f=d.__i==-1?R:g[d.__i]||R,d.__i=i,y=Y(e,d,f,s,r,a,_,u,l,c),k=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&ee(f.ref,null,d),c.push(d.ref,d.__c||k,d)),C==null&&k!=null&&(C=k),(h=!!(4&d.__u))||f.__k===d.__k?u=me(d,u,e,h):typeof d.type=="function"&&y!==void 0?u=y:k&&(u=k.nextSibling),d.__u&=-7);return t.__e=C,u}function We(e,n,t,o,s){var r,a,_,u,l,c=t.length,i=c,f=0;for(e.__k=new Array(s),r=0;r<s;r++)(a=n[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[r]=D(null,a,null,null,null):P(a)?a=e.__k[r]=D(B,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[r]=D(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[r]=a,u=r+f,a.__=e,a.__b=e.__b+1,_=null,(l=a.__i=ze(a,t,u,i))!=-1&&(i--,(_=t[l])&&(_.__u|=2)),_==null||_.__v==null?(l==-1&&(s>c?f--:s<c&&f++),typeof a.type!="function"&&(a.__u|=4)):l!=u&&(l==u-1?f--:l==u+1?f++:(l>u?f--:f++,a.__u|=4))):e.__k[r]=null;if(i)for(r=0;r<c;r++)(_=t[r])!=null&&(2&_.__u)==0&&(_.__e==o&&(o=L(_)),ke(_,_));return o}function me(e,n,t,o){var s,r;if(typeof e.type=="function"){for(s=e.__k,r=0;s&&r<s.length;r++)s[r]&&(s[r].__=e,n=me(s[r],n,t,o));return n}e.__e!=n&&(o&&(n&&e.type&&!n.parentNode&&(n=L(e)),t.insertBefore(e.__e,n||null)),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType==8);return n}function ze(e,n,t,o){var s,r,a,_=e.key,u=e.type,l=n[t],c=l!=null&&(2&l.__u)==0;if(l===null&&_==null||c&&_==l.key&&u==l.type)return t;if(o>(c?1:0)){for(s=t-1,r=t+1;s>=0||r<n.length;)if((l=n[a=s>=0?s--:r++])!=null&&(2&l.__u)==0&&_==l.key&&u==l.type)return a}return-1}function be(e,n,t){n[0]=="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||je.test(n)?t:t+"px"}function W(e,n,t,o,s){var r,a;e:if(n=="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||be(e.style,n,"");if(t)for(n in t)o&&t[n]==o[n]||be(e.style,n,t[n])}else if(n[0]=="o"&&n[1]=="n")r=n!=(n=n.replace(ue,"$1")),a=n.toLowerCase(),n=a in e||n=="onFocusOut"||n=="onFocusIn"?a.slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?o?t.u=o.u:(t.u=J,e.addEventListener(n,r?X:K,r)):e.removeEventListener(n,r?X:K,r);else{if(s=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n!="popover"&&n in e)try{e[n]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!="-"?e.removeAttribute(n):e.setAttribute(n,n=="popover"&&t==1?"":t))}}function ve(e){return function(n){if(this.l){var t=this.l[n.type+e];if(n.t==null)n.t=J++;else if(n.t<t.u)return;return t(m.event?m.event(n):n)}}}function Y(e,n,t,o,s,r,a,_,u,l){var c,i,f,d,k,C,y,h,g,b,w,E,N,V,S,I,M,T=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[_=n.__e=t.__e]),(c=m.__b)&&c(n);e:if(typeof T=="function")try{if(h=n.props,g="prototype"in T&&T.prototype.render,b=(c=T.contextType)&&o[c.__c],w=c?b?b.props.value:c.__:o,t.__c?y=(i=n.__c=t.__c).__=i.__E:(g?n.__c=i=new T(h,w):(n.__c=i=new F(h,w),i.constructor=T,i.render=qe),b&&b.sub(i),i.state||(i.state={}),i.__n=o,f=i.__d=!0,i.__h=[],i._sb=[]),g&&i.__s==null&&(i.__s=i.state),g&&T.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=O({},i.__s)),O(i.__s,T.getDerivedStateFromProps(h,i.__s))),d=i.props,k=i.state,i.__v=n,f)g&&T.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),g&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(g&&T.getDerivedStateFromProps==null&&h!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,w),n.__v==t.__v||!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,w)===!1){for(n.__v!=t.__v&&(i.props=h,i.state=i.__s,i.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.some(function($){$&&($.__=n)}),E=0;E<i._sb.length;E++)i.__h.push(i._sb[E]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,w),g&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,k,C)})}if(i.context=w,i.props=h,i.__P=e,i.__e=!1,N=m.__r,V=0,g){for(i.state=i.__s,i.__d=!1,N&&N(n),c=i.render(i.props,i.state,i.context),S=0;S<i._sb.length;S++)i.__h.push(i._sb[S]);i._sb=[]}else do i.__d=!1,N&&N(n),c=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++V<25);i.state=i.__s,i.getChildContext!=null&&(o=O(O({},o),i.getChildContext())),g&&!f&&i.getSnapshotBeforeUpdate!=null&&(C=i.getSnapshotBeforeUpdate(d,k)),I=c,c!=null&&c.type===B&&c.key==null&&(I=xe(c.props.children)),_=he(e,P(I)?I:[I],n,t,o,s,r,a,_,u,l),i.base=n.__e,n.__u&=-161,i.__h.length&&a.push(i),y&&(i.__E=i.__=null)}catch($){if(n.__v=null,u||r!=null)if($.then){for(n.__u|=u?160:128;_&&_.nodeType==8&&_.nextSibling;)_=_.nextSibling;r[r.indexOf(_)]=null,n.__e=_}else{for(M=r.length;M--;)Q(r[M]);Z(n)}else n.__e=t.__e,n.__k=t.__k,$.then||Z(n);m.__e($,n,t)}else r==null&&n.__v==t.__v?(n.__k=t.__k,n.__e=t.__e):_=n.__e=Ge(t.__e,n,t,o,s,r,a,u,l);return(c=m.diffed)&&c(n),128&n.__u?void 0:_}function Z(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Z)}function ye(e,n,t){for(var o=0;o<t.length;o++)ee(t[o],t[++o],t[++o]);m.__c&&m.__c(n,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(r){r.call(s)})}catch(r){m.__e(r,s.__v)}})}function xe(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:P(e)?e.map(xe):O({},e)}function Ge(e,n,t,o,s,r,a,_,u){var l,c,i,f,d,k,C,y=t.props||R,h=n.props,g=n.type;if(g=="svg"?s="http://www.w3.org/2000/svg":g=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((d=r[l])&&"setAttribute"in d==!!g&&(g?d.localName==g:d.nodeType==3)){e=d,r[l]=null;break}}if(e==null){if(g==null)return document.createTextNode(h);e=document.createElementNS(s,g,h.is&&h),_&&(m.__m&&m.__m(n,r),_=!1),r=null}if(g==null)y===h||_&&e.data==h||(e.data=h);else{if(r=r&&H.call(e.childNodes),!_&&r!=null)for(y={},l=0;l<e.attributes.length;l++)y[(d=e.attributes[l]).name]=d.value;for(l in y)if(d=y[l],l!="children"){if(l=="dangerouslySetInnerHTML")i=d;else if(!(l in h)){if(l=="value"&&"defaultValue"in h||l=="checked"&&"defaultChecked"in h)continue;W(e,l,null,d,s)}}for(l in h)d=h[l],l=="children"?f=d:l=="dangerouslySetInnerHTML"?c=d:l=="value"?k=d:l=="checked"?C=d:_&&typeof d!="function"||y[l]===d||W(e,l,d,y[l],s);if(c)_||i&&(c.__html==i.__html||c.__html==e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(i&&(e.innerHTML=""),he(n.type=="template"?e.content:e,P(f)?f:[f],n,t,o,g=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,a,r?r[0]:t.__k&&L(t,0),_,u),r!=null)for(l=r.length;l--;)Q(r[l]);_||(l="value",g=="progress"&&k==null?e.removeAttribute("value"):k!=null&&(k!==e[l]||g=="progress"&&!k||g=="option"&&k!=y[l])&&W(e,l,k,y[l],s),l="checked",C!=null&&C!=e[l]&&W(e,l,C,y[l],s))}return e}function ee(e,n,t){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&n==null||(e.__u=e(n))}else e.current=n}catch(s){m.__e(s,t)}}function ke(e,n,t){var o,s;if(m.unmount&&m.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||ee(o,null,n)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){m.__e(r,n)}o.base=o.__P=null}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&ke(o[s],n,t||typeof e.type!="function");t||Q(e.__e),e.__c=e.__=e.__e=void 0}function qe(e,n,t){return this.constructor(e,t)}function Ve(e,n,t){var o,s,r,a;n==document&&(n=document.documentElement),m.__&&m.__(e,n),s=(o=!1)?null:n.__k,r=[],a=[],Y(n,e=n.__k=fe(B,null,[e]),s||R,R,n.namespaceURI,s?null:n.firstChild?H.call(n.childNodes):null,r,s?s.__e:n.firstChild,o,a),ye(r,e,a)}H=de.slice,m={__e:function(e,n,t,o){for(var s,r,a;n=n.__;)if((s=n.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,o||{}),a=s.__d),a)return s.__E=s}catch(_){e=_}throw e}},ae=0,F.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=O({},this.state),typeof e=="function"&&(e=e(O({},t),this.props)),e&&O(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),ge(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ge(this))},F.prototype.render=B,A=[],_e=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ce=function(e,n){return e.__v.__b-n.__v.__b},j.__r=0,ue=/(PointerCapture)$|Capture$/i,J=0,K=ve(!1),X=ve(!0);var Je=0;function p(e,n,t,o,s,r){n||(n={});var a,_,u=n;if("ref"in u)for(_ in u={},n)_=="ref"?a=n[_]:u[_]=n[_];var l={type:e,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Je,__i:-1,__u:0,__source:s,__self:r};if(typeof e=="function"&&(a=e.defaultProps))for(_ in a)u[_]===void 0&&(u[_]=a[_]);return m.vnode&&m.vnode(l),l}var U,v,ne,we,z=0,Se=[],x=m,Ee=x.__b,Ne=x.__r,Ce=x.diffed,Te=x.__c,$e=x.unmount,Oe=x.__;function te(e,n){x.__h&&x.__h(v,e,z||n),z=0;var t=v.__H||(v.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Ke(e,n,t){var o=te(U++,2);if(o.t=e,!o.__c&&(o.__=[Ze(void 0,n),function(_){var u=o.__N?o.__N[0]:o.__[0],l=o.t(u,_);u!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.__f)){var s=function(_,u,l){if(!o.__c.__H)return!0;var c=o.__c.__H.__.filter(function(f){return!!f.__c});if(c.every(function(f){return!f.__N}))return!r||r.call(this,_,u,l);var i=o.__c.props!==_;return c.forEach(function(f){if(f.__N){var d=f.__[0];f.__=f.__N,f.__N=void 0,d!==f.__[0]&&(i=!0)}}),r&&r.call(this,_,u,l)||i};v.__f=!0;var r=v.shouldComponentUpdate,a=v.componentWillUpdate;v.componentWillUpdate=function(_,u,l){if(this.__e){var c=r;r=void 0,s(_,u,l),r=c}a&&a.call(this,_,u,l)},v.shouldComponentUpdate=s}return o.__N||o.__}function G(e,n){var t=te(U++,3);!x.__s&&Me(t.__H,n)&&(t.__=e,t.u=n,v.__H.__h.push(t))}function Ie(e){return z=5,Ae(function(){return{current:e}},[])}function Ae(e,n){var t=te(U++,7);return Me(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function Xe(e,n){return z=8,Ae(function(){return e},n)}function Qe(){for(var e;e=Se.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(q),e.__H.__h.forEach(oe),e.__H.__h=[]}catch(n){e.__H.__h=[],x.__e(n,e.__v)}}x.__b=function(e){v=null,Ee&&Ee(e)},x.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Oe&&Oe(e,n)},x.__r=function(e){Ne&&Ne(e),U=0;var n=(v=e.__c).__H;n&&(ne===v?(n.__h=[],v.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(n.__h.forEach(q),n.__h.forEach(oe),n.__h=[],U=0)),ne=v},x.diffed=function(e){Ce&&Ce(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(Se.push(n)!==1&&we===x.requestAnimationFrame||((we=x.requestAnimationFrame)||Ye)(Qe)),n.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),ne=v=null},x.__c=function(e,n){n.some(function(t){try{t.__h.forEach(q),t.__h=t.__h.filter(function(o){return!o.__||oe(o)})}catch(o){n.some(function(s){s.__h&&(s.__h=[])}),n=[],x.__e(o,t.__v)}}),Te&&Te(e,n)},x.unmount=function(e){$e&&$e(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{q(o)}catch(s){n=s}}),t.__H=void 0,n&&x.__e(n,t.__v))};var Le=typeof requestAnimationFrame=="function";function Ye(e){var n,t=function(){clearTimeout(o),Le&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,35);Le&&(n=requestAnimationFrame(t))}function q(e){var n=v,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),v=n}function oe(e){var n=v;e.__c=e.__(),v=n}function Me(e,n){return!e||e.length!==n.length||n.some(function(t,o){return t!==e[o]})}function Ze(e,n){return typeof n=="function"?n(e):n}const en={isOpen:!1,messages:[],isStreaming:!1,error:null};function Re(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function nn(e,n){switch(n.type){case"OPEN":return{...e,isOpen:!0,error:null};case"CLOSE":return{...e,isOpen:!1};case"LOAD_MESSAGES":return{...e,messages:n.messages};case"ADD_USER_MESSAGE":return{...e,error:null,messages:[...e.messages,{id:n.id,role:"user",content:n.content}]};case"START_STREAMING":return{...e,isStreaming:!0,error:null,messages:[...e.messages,{id:n.id,role:"assistant",content:"",isStreaming:!0}]};case"APPEND_TEXT":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,content:o.content+n.text}),{...e,messages:t}}case"ADD_TOOL_CALL":{const t=[...e.messages],o=t[t.length-1];if(o&&o.role==="assistant"){const s=[...o.toolCalls??[],n.toolCall];t[t.length-1]={...o,toolCalls:s}}return{...e,messages:t}}case"SET_TOOL_RESULT":{const t=[...e.messages],o=t[t.length-1];if(o&&o.role==="assistant"&&o.toolCalls){const s=o.toolCalls.map(r=>r.id===n.toolCallId?{...r,result:n.result,status:"done"}:r);t[t.length-1]={...o,toolCalls:s}}return{...e,messages:t}}case"FINISH_STREAMING":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,isStreaming:!1}),{...e,isStreaming:!1,messages:t}}case"SET_ERROR":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,isStreaming:!1}),{...e,isStreaming:!1,error:n.error,messages:t}}case"CLEAR_MESSAGES":return{...e,messages:[],error:null};default:return e}}async function Ue(e,n,t,o){const s=await fetch(`${e}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,messages:t,endUserSessionId:o})});if(!s.ok){const r=await s.json().catch(()=>({error:"Request failed"}));throw new Error(r.error||`HTTP ${s.status}`)}if(!s.body)throw new Error("No response stream available");return s.body}async function tn(e,n,t,o,s){const r=await fetch(`${e}/api/widget/identify`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,endUserSessionId:t,token:o,name:s})}),a=await r.json().catch(()=>({}));if(!r.ok)throw new Error(a.error||`HTTP ${r.status}`);return a}async function on(e,n,t){const o=await fetch(`${e}/api/widget/reset-user`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,endUserSessionId:t})}),s=await o.json().catch(()=>({}));if(!o.ok)throw new Error(s.error||`HTTP ${o.status}`);return s}const re={};function rn(e){Object.assign(re,e)}function sn(e){return re[e]}function an(e){return e in re}async function He(e,n){const t=e.getReader(),o=new TextDecoder;let s="";try{for(;;){const{done:r,value:a}=await t.read();if(r)break;s+=o.decode(a,{stream:!0});const _=s.split(`

`);s=_.pop()??"";for(const u of _)Pe(u.trim(),n)}s.trim()&&Pe(s.trim(),n),n.onFinish()}catch(r){const a=r instanceof Error?r.message:"Stream read failed";n.onError(a)}finally{t.releaseLock()}}function Pe(e,n){const t=e.split(`
`);for(const o of t){if(!o.startsWith("data: "))continue;const s=o.slice(6);if(s==="[DONE]")return;try{const r=JSON.parse(s);switch(r.type){case"text-delta":r.delta&&n.onTextDelta(r.delta);break;case"tool-input-available":r.toolCallId&&r.toolName&&n.onToolCall(r.toolCallId,r.toolName,r.input??{});break;case"tool-output-available":r.toolCallId&&n.onToolResult(r.toolCallId,r.output);break;case"tool-call":r.toolCallId&&r.toolName&&n.onToolCall(r.toolCallId,r.toolName,r.input??{});break;case"tool-result":r.toolCallId&&n.onToolResult(r.toolCallId,r.output);break;case"error":n.onError(r.errorText??r.reason??"Unknown error");break;case"abort":n.onError(r.reason??"Response aborted");break;default:break}}catch{}}}function ln(e,n){if(!n)return e;let t=e;for(const[o,s]of Object.entries(n))t=t.replace(`:${o}`,encodeURIComponent(s));return t}function _n(e){var o;const n=e.replace(/\/$/,"")||"/",t=document.querySelectorAll("a[href]");for(const s of t){const r=s;if((((o=r.pathname)==null?void 0:o.replace(/\/$/,""))||"/")===n)return r.click(),console.log(`[Ourguide-B2B] Navigated via anchor click: ${e}`),!0}return!1}function cn(e){var s,r;const n=window,t=n.next;if((s=t==null?void 0:t.router)!=null&&s.push)return t.router.push(e),console.log(`[Ourguide-B2B] Navigated via Next.js router: ${e}`),!0;if(n.__NUXT__){const a=n.$nuxt;if((r=a==null?void 0:a.$router)!=null&&r.push)return a.$router.push(e),console.log(`[Ourguide-B2B] Navigated via Vue/Nuxt router: ${e}`),!0}return!1}function un(e){try{return window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate",{state:{}})),console.log(`[Ourguide-B2B] Navigated via pushState: ${e}`),!0}catch{return!1}}async function dn(e,n){const t=ln(e,n);return _n(t)||cn(t)||un(t)||(console.log(`[Ourguide-B2B] Navigated via hard navigation: ${t}`),window.location.href=t),!0}const fn="og2-chat-",pn="og2-enduser-session-";function se(e){return`${fn}${e}`}function De(e){return`${pn}${e}`}function Be(){var n,t;const e=(t=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:t.call(n);return e||`${Date.now()}-${Math.random().toString(16).slice(2)}`}function ie(e){const n=De(e);try{const t=localStorage.getItem(n);if(t&&t.trim())return t;const o=`sess_${Be()}`;return localStorage.setItem(n,o),o}catch{return`sess_${Be()}`}}function gn(e){try{localStorage.removeItem(De(e))}catch{}}function hn(e,n){try{const t=n.map(({isStreaming:o,...s})=>s);sessionStorage.setItem(se(e),JSON.stringify(t))}catch{}}function mn(e){try{const n=sessionStorage.getItem(se(e));return n?JSON.parse(n):[]}catch{return[]}}function bn(e){try{sessionStorage.removeItem(se(e))}catch{}}function vn({productId:e,apiUrl:n,position:t}){const[o,s]=Ke(nn,en),r=Ie(null),a=Ie(null);G(()=>{const c=mn(e);c.length>0&&s({type:"LOAD_MESSAGES",messages:c})},[e]),G(()=>{!o.isStreaming&&o.messages.length>0&&hn(e,o.messages)},[o.messages,o.isStreaming,e]),G(()=>{o.isOpen&&!o.isStreaming&&setTimeout(()=>{var c;return(c=r.current)==null?void 0:c.focus()},50)},[o.isOpen,o.isStreaming]),G(()=>{var c;(c=a.current)==null||c.scrollIntoView({behavior:"smooth"})},[o.messages]);const _=Xe(async c=>{const i=c.trim();if(!i||o.isStreaming)return;r.current&&(r.current.value="");const f=Re();s({type:"ADD_USER_MESSAGE",id:f,content:i});const d=[...o.messages.map(g=>({role:g.role,content:g.content})),{role:"user",content:i}],k=Re();s({type:"START_STREAMING",id:k});const C=new Map,y=new Map,h=g=>({onTextDelta:b=>{s({type:"APPEND_TEXT",text:b})},onToolCall:(b,w,E)=>{const N={id:b,name:w,args:E,status:"calling"};C.set(b,N),s({type:"ADD_TOOL_CALL",toolCall:N}),g&&an(w)&&y.set(b,{name:w,args:E})},onToolResult:(b,w)=>{s({type:"SET_TOOL_RESULT",toolCallId:b,result:w});const E=C.get(b);if((E==null?void 0:E.name)==="navigate_to_page"){const N=w;N.route&&(N.confidence??0)>=.5&&dn(N.route,N.params)}},onError:b=>{s({type:"SET_ERROR",error:b})}});try{const g=ie(e),b=await Ue(n,e,d,g);let w=!1;if(await He(b,{...h(!0),onError:S=>{w=!0,s({type:"SET_ERROR",error:S})},onFinish:()=>{}}),w||y.size===0){w||s({type:"FINISH_STREAMING"});return}const E=[];for(const[S,{name:I,args:M}]of y){const T=sn(I);let $;try{$=await T(M)}catch(Fe){$={status:"error",error:Fe instanceof Error?Fe.message:"Handler failed"}}s({type:"SET_TOOL_RESULT",toolCallId:S,result:$}),E.push({toolCallId:S,toolName:I,args:M,result:$})}const N=[...d,{role:"assistant",content:E.map(S=>({type:"tool-call",toolCallId:S.toolCallId,toolName:S.toolName,input:S.args}))},{role:"tool",content:E.map(S=>({type:"tool-result",toolCallId:S.toolCallId,toolName:S.toolName,output:{type:"json",value:S.result}}))}],V=await Ue(n,e,N);await He(V,{...h(!1),onFinish:()=>{s({type:"FINISH_STREAMING"})}})}catch(g){const b=g instanceof Error?g.message:"Something went wrong";s({type:"FINISH_STREAMING"}),s({type:"SET_ERROR",error:b})}},[o.messages,o.isStreaming,n,e]);function u(c){c.key==="Enter"&&!c.shiftKey&&r.current&&(c.preventDefault(),_(r.current.value))}function l(){bn(e),s({type:"CLEAR_MESSAGES"})}return p("div",{className:`og2-container og2-${t}`,children:[o.isOpen&&p("div",{className:"og2-panel",children:[p("div",{className:"og2-panel-header",children:[p("span",{className:"og2-panel-title",children:"Assistant"}),p("div",{className:"og2-header-actions",children:[o.messages.length>0&&p("button",{className:"og2-clear-btn",onClick:l,"aria-label":"Clear chat",title:"Clear chat",children:p("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"})})}),p("button",{className:"og2-close-btn",onClick:()=>s({type:"CLOSE"}),"aria-label":"Close",children:p("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:p("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),p("div",{className:"og2-messages",children:[o.messages.length===0&&!o.error&&p("div",{className:"og2-empty-state",children:"Ask me anything or tell me where you'd like to go."}),o.messages.map(c=>p("div",{className:`og2-message og2-message-${c.role}`,children:p("div",{className:"og2-bubble",children:[c.content,c.isStreaming&&p("span",{className:"og2-cursor"}),yn(c.toolCalls)]})},c.id)),o.error&&p("div",{className:"og2-message og2-message-error",children:p("div",{className:"og2-bubble",children:o.error})}),p("div",{ref:a})]}),p("div",{className:"og2-input-area",children:[p("input",{ref:r,className:"og2-input",type:"text",placeholder:"Ask anything or navigate...",onKeyDown:u,disabled:o.isStreaming}),p("button",{className:"og2-send-btn",onClick:()=>r.current&&_(r.current.value),disabled:o.isStreaming,children:o.isStreaming?p("span",{className:"og2-spinner og2-spinner-sm"}):p("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"})})})]})]}),p("button",{className:"og2-trigger",onClick:()=>s(o.isOpen?{type:"CLOSE"}:{type:"OPEN"}),"aria-label":o.isOpen?"Close assistant":"Open assistant",children:o.isOpen?p("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:p("path",{d:"M6 6L18 18M18 6L6 18"})}):p("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})})})]})}function yn(e){return!e||e.length===0?null:p("div",{className:"og2-tool-calls",children:e.map(n=>p("div",{className:"og2-tool-indicator",children:[n.status==="calling"&&p("span",{className:"og2-spinner og2-spinner-sm"}),n.status==="done"&&p("svg",{className:"og2-tool-check",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M20 6L9 17L4 12"})}),p("span",{className:"og2-tool-label",children:xn(n)})]},n.id))})}function xn(e){if(e.name==="navigate_to_page"){if(e.status==="calling")return"Finding the right page...";const n=e.result;return n!=null&&n.route?`Navigated to ${n.route}`:"No matching page found"}return e.name}const kn=`/* Ourguide-B2B Widget - All classes prefixed with og2- */

.og2-container {
  position: fixed;
  z-index: 2147483647;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #1a1a1a;
}

.og2-container.og2-bottom-right {
  bottom: 20px;
  right: 20px;
}

.og2-container.og2-bottom-left {
  bottom: 20px;
  left: 20px;
}

/* Floating trigger button */
.og2-trigger {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #18181b;
  color: white;
  border: none;
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
  width: 24px;
  height: 24px;
}

/* Chat panel */
.og2-panel {
  position: absolute;
  bottom: 64px;
  right: 0;
  width: 380px;
  max-height: 520px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid #e4e4e7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.og2-panel-header {
  padding: 14px 16px;
  border-bottom: 1px solid #f4f4f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.og2-panel-title {
  font-size: 14px;
  font-weight: 600;
  color: #18181b;
}

.og2-header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.og2-clear-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #a1a1aa;
  padding: 4px;
  display: flex;
  border-radius: 4px;
}

.og2-clear-btn:hover {
  color: #18181b;
  background: #f4f4f5;
}

.og2-close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #a1a1aa;
  padding: 4px;
  display: flex;
  border-radius: 4px;
}

.og2-close-btn:hover {
  color: #18181b;
  background: #f4f4f5;
}

/* Messages area */
.og2-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  min-height: 80px;
  scroll-behavior: smooth;
}

.og2-empty-state {
  text-align: center;
  color: #a1a1aa;
  font-size: 13px;
  padding: 24px 16px;
}

.og2-message {
  margin-bottom: 12px;
  font-size: 13px;
}

.og2-message:last-child {
  margin-bottom: 0;
}

/* User messages — right aligned, dark */
.og2-message-user {
  text-align: right;
}

.og2-message-user .og2-bubble {
  display: inline-block;
  background: #18181b;
  color: white;
  padding: 8px 12px;
  border-radius: 12px 12px 2px 12px;
  max-width: 85%;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-word;
}

/* Assistant messages — left aligned, light */
.og2-message-assistant .og2-bubble {
  display: inline-block;
  background: #f4f4f5;
  color: #3f3f46;
  padding: 8px 12px;
  border-radius: 12px 12px 12px 2px;
  max-width: 85%;
  white-space: pre-wrap;
  word-break: break-word;
}

.og2-message-error .og2-bubble {
  display: inline-block;
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
  padding: 8px 12px;
  border-radius: 12px 12px 12px 2px;
  max-width: 85%;
  font-size: 12px;
}

/* Streaming cursor */
.og2-cursor {
  display: inline-block;
  width: 2px;
  height: 14px;
  background: #3f3f46;
  margin-left: 1px;
  vertical-align: text-bottom;
  animation: og2-blink 0.8s step-end infinite;
}

@keyframes og2-blink {
  50% { opacity: 0; }
}

/* Tool call indicators */
.og2-tool-calls {
  margin-top: 6px;
}

.og2-tool-indicator {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 0;
  font-size: 11px;
  color: #71717a;
}

.og2-tool-check {
  color: #16a34a;
  flex-shrink: 0;
}

.og2-tool-label {
  line-height: 1.3;
}

/* Input area */
.og2-input-area {
  padding: 12px 16px;
  border-top: 1px solid #f4f4f5;
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.og2-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  font-size: 13px;
  outline: none;
  font-family: inherit;
  color: #18181b;
  background: white;
}

.og2-input:focus {
  border-color: #a1a1aa;
  box-shadow: 0 0 0 2px rgba(161, 161, 170, 0.2);
}

.og2-input::placeholder {
  color: #a1a1aa;
}

.og2-input:disabled {
  background: #fafafa;
  color: #a1a1aa;
}

.og2-send-btn {
  width: 36px;
  height: 36px;
  padding: 0;
  background: #18181b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.og2-send-btn:hover {
  background: #27272a;
}

.og2-send-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

/* Spinner */
.og2-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #e4e4e7;
  border-top-color: #18181b;
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

.og2-send-btn .og2-spinner-sm {
  border-color: rgba(255, 255, 255, 0.3);
  border-top-color: white;
}

@keyframes og2-spin {
  to { transform: rotate(360deg); }
}
`;(function(){const e=document.currentScript??document.querySelector('script[data-product-id][src*="ourguide-b2b-widget"]');if(!e){console.error("[Ourguide-B2B] Could not find script element");return}const n=e.dataset.productId||"",t=e.dataset.apiUrl??"http://localhost:3000",o=e.dataset.position??"bottom-right";if(!n){console.error("[Ourguide-B2B] data-product-id is required");return}async function s(l,c){try{if(l==="registerTools"){c&&typeof c=="object"&&rn(c);return}if(l==="identify"){const i=c??{};if(!i.token||typeof i.token!="string"||!i.token.trim()){console.warn("[Ourguide-B2B] identify: token is required");return}const f=ie(n);await tn(t,n,f,i.token,i.name);return}if(l==="resetUser"){const i=ie(n);await on(t,n,i),gn(n);return}}catch(i){const f=i instanceof Error?i.message:"Unknown error";console.warn(`[Ourguide-B2B] ${l} failed: ${f}`)}}const r=window,a=Array.isArray(r.ourguide)?r.ourguide:[];r.ourguide=(l,c)=>{s(l,c)};for(const l of a)Array.isArray(l)&&(l[0]==="identify"||l[0]==="resetUser"||l[0]==="registerTools")&&s(l[0],l[1]);const _=document.createElement("style");_.textContent=kn,document.head.appendChild(_);const u=document.createElement("div");u.id="og2-widget-root",document.body.appendChild(u),Ve(fe(vn,{productId:n,apiUrl:t,position:o}),u)})()})();
