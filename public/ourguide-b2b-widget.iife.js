(function(){"use strict";var xt,N,In,He,Mn,Rn,$n,Dn,jt,Vt,qt,tt={},Pn=[],or=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Et=Array.isArray;function Oe(e,t){for(var n in t)e[n]=t[n];return e}function Xt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Hn(e,t,n){var o,i,r,s={};for(r in t)r=="key"?o=t[r]:r=="ref"?i=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?xt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return Tt(e,s,o,i,null)}function Tt(e,t,n,o,i){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++In,__i:-1,__u:0};return i==null&&N.vnode!=null&&N.vnode(r),r}function St(e){return e.children}function kt(e,t){this.props=e,this.context=t}function je(e,t){if(t==null)return e.__?je(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?je(e):null}function Fn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Fn(e)}}function Un(e){(!e.__d&&(e.__d=!0)&&He.push(e)&&!At.__r++||Mn!=N.debounceRendering)&&((Mn=N.debounceRendering)||Rn)(At)}function At(){for(var e,t,n,o,i,r,s,c=1;He.length;)He.length>c&&He.sort($n),e=He.shift(),c=He.length,e.__d&&(n=void 0,o=void 0,i=(o=(t=e).__v).__e,r=[],s=[],t.__P&&((n=Oe({},o)).__v=o.__v+1,N.vnode&&N.vnode(n),Yt(t.__P,n,o,t.__n,t.__P.namespaceURI,32&o.__u?[i]:null,r,i??je(o),!!(32&o.__u),s),n.__v=o.__v,n.__.__k[n.__i]=n,jn(r,n,s),o.__e=o.__=null,n.__e!=i&&Fn(n)));At.__r=0}function zn(e,t,n,o,i,r,s,c,p,u,g){var l,b,h,y,O,R,T,S=o&&o.__k||Pn,z=t.length;for(p=rr(n,t,S,p,z),l=0;l<z;l++)(h=n.__k[l])!=null&&(b=h.__i==-1?tt:S[h.__i]||tt,h.__i=l,R=Yt(e,h,b,i,r,s,c,p,u,g),y=h.__e,h.ref&&b.ref!=h.ref&&(b.ref&&Jt(b.ref,null,h),g.push(h.ref,h.__c||y,h)),O==null&&y!=null&&(O=y),(T=!!(4&h.__u))||b.__k===h.__k?p=Bn(h,p,e,T):typeof h.type=="function"&&R!==void 0?p=R:y&&(p=y.nextSibling),h.__u&=-7);return n.__e=O,p}function rr(e,t,n,o,i){var r,s,c,p,u,g=n.length,l=g,b=0;for(e.__k=new Array(i),r=0;r<i;r++)(s=t[r])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[r]=Tt(null,s,null,null,null):Et(s)?s=e.__k[r]=Tt(St,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[r]=Tt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[r]=s,p=r+b,s.__=e,s.__b=e.__b+1,c=null,(u=s.__i=ir(s,n,p,l))!=-1&&(l--,(c=n[u])&&(c.__u|=2)),c==null||c.__v==null?(u==-1&&(i>g?b--:i<g&&b++),typeof s.type!="function"&&(s.__u|=4)):u!=p&&(u==p-1?b--:u==p+1?b++:(u>p?b--:b++,s.__u|=4))):e.__k[r]=null;if(l)for(r=0;r<g;r++)(c=n[r])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=je(c)),qn(c,c));return o}function Bn(e,t,n,o){var i,r;if(typeof e.type=="function"){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=Bn(i[r],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=je(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ir(e,t,n,o){var i,r,s,c=e.key,p=e.type,u=t[n],g=u!=null&&(2&u.__u)==0;if(u===null&&c==null||g&&c==u.key&&p==u.type)return n;if(o>(g?1:0)){for(i=n-1,r=n+1;i>=0||r<t.length;)if((u=t[s=i>=0?i--:r++])!=null&&(2&u.__u)==0&&c==u.key&&p==u.type)return s}return-1}function Wn(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||or.test(t)?n:n+"px"}function Ct(e,t,n,o,i){var r,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Wn(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||Wn(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")r=t!=(t=t.replace(Dn,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o?n.u=o.u:(n.u=jt,e.addEventListener(t,r?qt:Vt,r)):e.removeEventListener(t,r?qt:Vt,r);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Gn(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=jt++;else if(t.t<n.u)return;return n(N.event?N.event(t):t)}}}function Yt(e,t,n,o,i,r,s,c,p,u){var g,l,b,h,y,O,R,T,S,z,_,C,X,K,ve,pe,F,A=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(p=!!(32&n.__u),r=[c=t.__e=n.__e]),(g=N.__b)&&g(t);e:if(typeof A=="function")try{if(T=t.props,S="prototype"in A&&A.prototype.render,z=(g=A.contextType)&&o[g.__c],_=g?z?z.props.value:g.__:o,n.__c?R=(l=t.__c=n.__c).__=l.__E:(S?t.__c=l=new A(T,_):(t.__c=l=new kt(T,_),l.constructor=A,l.render=ar),z&&z.sub(l),l.state||(l.state={}),l.__n=o,b=l.__d=!0,l.__h=[],l._sb=[]),S&&l.__s==null&&(l.__s=l.state),S&&A.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Oe({},l.__s)),Oe(l.__s,A.getDerivedStateFromProps(T,l.__s))),h=l.props,y=l.state,l.__v=t,b)S&&A.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),S&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(S&&A.getDerivedStateFromProps==null&&T!==h&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(T,_),t.__v==n.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(T,l.__s,_)===!1){for(t.__v!=n.__v&&(l.props=T,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function($){$&&($.__=t)}),C=0;C<l._sb.length;C++)l.__h.push(l._sb[C]);l._sb=[],l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(T,l.__s,_),S&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(h,y,O)})}if(l.context=_,l.props=T,l.__P=e,l.__e=!1,X=N.__r,K=0,S){for(l.state=l.__s,l.__d=!1,X&&X(t),g=l.render(l.props,l.state,l.context),ve=0;ve<l._sb.length;ve++)l.__h.push(l._sb[ve]);l._sb=[]}else do l.__d=!1,X&&X(t),g=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++K<25);l.state=l.__s,l.getChildContext!=null&&(o=Oe(Oe({},o),l.getChildContext())),S&&!b&&l.getSnapshotBeforeUpdate!=null&&(O=l.getSnapshotBeforeUpdate(h,y)),pe=g,g!=null&&g.type===St&&g.key==null&&(pe=Vn(g.props.children)),c=zn(e,Et(pe)?pe:[pe],t,n,o,i,r,s,c,p,u),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),R&&(l.__E=l.__=null)}catch($){if(t.__v=null,p||r!=null)if($.then){for(t.__u|=p?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;r[r.indexOf(c)]=null,t.__e=c}else{for(F=r.length;F--;)Xt(r[F]);Kt(t)}else t.__e=n.__e,t.__k=n.__k,$.then||Kt(t);N.__e($,t,n)}else r==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=sr(n.__e,t,n,o,i,r,s,p,u);return(g=N.diffed)&&g(t),128&t.__u?void 0:c}function Kt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Kt)}function jn(e,t,n){for(var o=0;o<n.length;o++)Jt(n[o],n[++o],n[++o]);N.__c&&N.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){N.__e(r,i.__v)}})}function Vn(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Et(e)?e.map(Vn):Oe({},e)}function sr(e,t,n,o,i,r,s,c,p){var u,g,l,b,h,y,O,R=n.props||tt,T=t.props,S=t.type;if(S=="svg"?i="http://www.w3.org/2000/svg":S=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(u=0;u<r.length;u++)if((h=r[u])&&"setAttribute"in h==!!S&&(S?h.localName==S:h.nodeType==3)){e=h,r[u]=null;break}}if(e==null){if(S==null)return document.createTextNode(T);e=document.createElementNS(i,S,T.is&&T),c&&(N.__m&&N.__m(t,r),c=!1),r=null}if(S==null)R===T||c&&e.data==T||(e.data=T);else{if(r=r&&xt.call(e.childNodes),!c&&r!=null)for(R={},u=0;u<e.attributes.length;u++)R[(h=e.attributes[u]).name]=h.value;for(u in R)if(h=R[u],u!="children"){if(u=="dangerouslySetInnerHTML")l=h;else if(!(u in T)){if(u=="value"&&"defaultValue"in T||u=="checked"&&"defaultChecked"in T)continue;Ct(e,u,null,h,i)}}for(u in T)h=T[u],u=="children"?b=h:u=="dangerouslySetInnerHTML"?g=h:u=="value"?y=h:u=="checked"?O=h:c&&typeof h!="function"||R[u]===h||Ct(e,u,h,R[u],i);if(g)c||l&&(g.__html==l.__html||g.__html==e.innerHTML)||(e.innerHTML=g.__html),t.__k=[];else if(l&&(e.innerHTML=""),zn(t.type=="template"?e.content:e,Et(b)?b:[b],t,n,o,S=="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,s,r?r[0]:n.__k&&je(n,0),c,p),r!=null)for(u=r.length;u--;)Xt(r[u]);c||(u="value",S=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[u]||S=="progress"&&!y||S=="option"&&y!=R[u])&&Ct(e,u,y,R[u],i),u="checked",O!=null&&O!=e[u]&&Ct(e,u,O,R[u],i))}return e}function Jt(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(i){N.__e(i,n)}}function qn(e,t,n){var o,i;if(N.unmount&&N.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||Jt(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){N.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&qn(o[i],t,n||typeof e.type!="function");n||Xt(e.__e),e.__c=e.__=e.__e=void 0}function ar(e,t,n){return this.constructor(e,n)}function lr(e,t,n){var o,i,r,s;t==document&&(t=document.documentElement),N.__&&N.__(e,t),i=(o=!1)?null:t.__k,r=[],s=[],Yt(t,e=t.__k=Hn(St,null,[e]),i||tt,tt,t.namespaceURI,i?null:t.firstChild?xt.call(t.childNodes):null,r,i?i.__e:t.firstChild,o,s),jn(r,e,s)}xt=Pn.slice,N={__e:function(e,t,n,o){for(var i,r,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),s=i.__d),s)return i.__E=i}catch(c){e=c}throw e}},In=0,kt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Oe({},this.state),typeof e=="function"&&(e=e(Oe({},n),this.props)),e&&Oe(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Un(this))},kt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Un(this))},kt.prototype.render=St,He=[],Rn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$n=function(e,t){return e.__v.__b-t.__v.__b},At.__r=0,Dn=/(PointerCapture)$|Capture$/i,jt=0,Vt=Gn(!1),qt=Gn(!0);var cr=0;function f(e,t,n,o,i,r){t||(t={});var s,c,p=t;if("ref"in p)for(c in p={},t)c=="ref"?s=t[c]:p[c]=t[c];var u={type:e,props:p,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--cr,__i:-1,__u:0,__source:i,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)p[c]===void 0&&(p[c]=s[c]);return N.vnode&&N.vnode(u),u}var nt,U,Zt,Xn,ot=0,Yn=[],j=N,Kn=j.__b,Jn=j.__r,Zn=j.diffed,Qn=j.__c,eo=j.unmount,to=j.__;function Qt(e,t){j.__h&&j.__h(U,e,ot||t),ot=0;var n=U.__H||(U.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function he(e){return ot=1,no(so,e)}function no(e,t,n){var o=Qt(nt++,2);if(o.t=e,!o.__c&&(o.__=[so(void 0,t),function(c){var p=o.__N?o.__N[0]:o.__[0],u=o.t(p,c);p!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=U,!U.__f)){var i=function(c,p,u){if(!o.__c.__H)return!0;var g=o.__c.__H.__.filter(function(b){return!!b.__c});if(g.every(function(b){return!b.__N}))return!r||r.call(this,c,p,u);var l=o.__c.props!==c;return g.forEach(function(b){if(b.__N){var h=b.__[0];b.__=b.__N,b.__N=void 0,h!==b.__[0]&&(l=!0)}}),r&&r.call(this,c,p,u)||l};U.__f=!0;var r=U.shouldComponentUpdate,s=U.componentWillUpdate;U.componentWillUpdate=function(c,p,u){if(this.__e){var g=r;r=void 0,i(c,p,u),r=g}s&&s.call(this,c,p,u)},U.shouldComponentUpdate=i}return o.__N||o.__}function Fe(e,t){var n=Qt(nt++,3);!j.__s&&io(n.__H,t)&&(n.__=e,n.u=t,U.__H.__h.push(n))}function Ee(e){return ot=5,oo(function(){return{current:e}},[])}function oo(e,t){var n=Qt(nt++,7);return io(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function rt(e,t){return ot=8,oo(function(){return e},t)}function ur(){for(var e;e=Yn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Nt),e.__H.__h.forEach(en),e.__H.__h=[]}catch(t){e.__H.__h=[],j.__e(t,e.__v)}}j.__b=function(e){U=null,Kn&&Kn(e)},j.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),to&&to(e,t)},j.__r=function(e){Jn&&Jn(e),nt=0;var t=(U=e.__c).__H;t&&(Zt===U?(t.__h=[],U.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(Nt),t.__h.forEach(en),t.__h=[],nt=0)),Zt=U},j.diffed=function(e){Zn&&Zn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Yn.push(t)!==1&&Xn===j.requestAnimationFrame||((Xn=j.requestAnimationFrame)||dr)(ur)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Zt=U=null},j.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Nt),n.__h=n.__h.filter(function(o){return!o.__||en(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],j.__e(o,n.__v)}}),Qn&&Qn(e,t)},j.unmount=function(e){eo&&eo(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{Nt(o)}catch(i){t=i}}),n.__H=void 0,t&&j.__e(t,n.__v))};var ro=typeof requestAnimationFrame=="function";function dr(e){var t,n=function(){clearTimeout(o),ro&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);ro&&(t=requestAnimationFrame(n))}function Nt(e){var t=U,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),U=t}function en(e){var t=U;e.__c=e.__(),U=t}function io(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function so(e,t){return typeof t=="function"?t(e):t}const fr={isOpen:!1,messages:[],isStreaming:!1,error:null};function ao(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function pr(e,t){var n,o;switch(t.type){case"OPEN":return{...e,isOpen:!0,error:null};case"CLOSE":return{...e,isOpen:!1};case"LOAD_MESSAGES":return{...e,messages:t.messages};case"ADD_USER_MESSAGE":return{...e,error:null,messages:[...e.messages,{id:t.id,role:"user",content:t.content}]};case"START_STREAMING":return{...e,isStreaming:!0,error:null,messages:[...e.messages,{id:t.id,role:"assistant",content:"",isStreaming:!0}]};case"APPEND_TEXT":{const i=[...e.messages],r=i[i.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(i[i.length-1]={...r,content:r.content+t.text}),{...e,messages:i}}case"ADD_TOOL_CALL":{const i=[...e.messages],r=i[i.length-1];if(r&&r.role==="assistant"){const s=[...r.toolCalls??[],t.toolCall];i[i.length-1]={...r,toolCalls:s}}return{...e,messages:i}}case"SET_TOOL_RESULT":{const i=[...e.messages],r=i[i.length-1];if(r&&r.role==="assistant"&&r.toolCalls){const s=r.toolCalls.map(c=>c.id===t.toolCallId?{...c,result:t.result,status:"done"}:c);i[i.length-1]={...r,toolCalls:s}}return{...e,messages:i}}case"FINISH_STREAMING":{const i=[...e.messages],r=i[i.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(!r.content&&((n=r.toolCalls)!=null&&n.length)?i.pop():i[i.length-1]={...r,isStreaming:!1}),{...e,isStreaming:!1,messages:i}}case"STOP_STREAMING":{const i=[...e.messages],r=i[i.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(!r.content&&!((o=r.toolCalls)!=null&&o.length)?i.pop():i[i.length-1]={...r,isStreaming:!1}),{...e,isStreaming:!1,messages:i}}case"SET_ERROR":{const i=[...e.messages],r=i[i.length-1];return r&&r.role==="assistant"&&r.isStreaming&&(i[i.length-1]={...r,isStreaming:!1}),{...e,isStreaming:!1,error:t.error,messages:i}}case"CLEAR_MESSAGES":return{...e,messages:[],error:null};default:return e}}function gr(e){return new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=o.result;t(i.split(",")[1])},o.onerror=()=>n(new Error("Failed to read file")),o.readAsDataURL(e)})}async function mr(e,t){const n=`${e}/api/products/${t}/config`;console.log("[Ourguide] fetchConfig HTTP GET",n);try{const o=await fetch(n,{headers:{"ngrok-skip-browser-warning":"true"}});if(console.log("[Ourguide] fetchConfig HTTP status:",o.status,o.statusText),!o.ok)return console.warn("[Ourguide] fetchConfig non-OK response, returning {}"),{};const i=await o.json();return console.log("[Ourguide] fetchConfig raw JSON:",JSON.stringify(i,null,2)),i}catch(o){return console.error("[Ourguide] fetchConfig threw:",o),{}}}async function lo(e,t,n,o,i,r,s,c,p){const u={productId:t,messages:n,endUserSessionId:o};i&&(u.conversationId=i),r&&r.length>0&&(u.attachments=r),c&&(u.workflowInProgress=!0),p&&(u.approvedWorkflowId=p);const g=await fetch(`${e}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify(u),signal:s});if(!g.ok){const l=await g.json().catch(()=>({error:"Request failed"}));throw new Error(l.error||`HTTP ${g.status}`)}if(!g.body)throw new Error("No response stream available");return{stream:g.body,conversationId:g.headers.get("X-Conversation-Id")}}async function hr(e,t,n,o,i){const r=await fetch(`${e}/api/widget/identify`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:t,endUserSessionId:n,token:o,name:i})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||`HTTP ${r.status}`);return s}async function _r(e,t,n){const o=await fetch(`${e}/api/widget/reset-user`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:t,endUserSessionId:n})}),i=await o.json().catch(()=>({}));if(!o.ok)throw new Error(i.error||`HTTP ${o.status}`);return i}const tn={};function co(e){Object.assign(tn,e)}function br(e){return tn[e]}function vr(e){return e in tn}async function yr(e,t,n){const o=e.getReader(),i=new TextDecoder;let r="";try{for(;;){if(n!=null&&n.aborted){await o.cancel();break}const{done:s,value:c}=await o.read();if(s)break;r+=i.decode(c,{stream:!0});const p=r.split(`

`);r=p.pop()??"";for(const u of p){if(n!=null&&n.aborted)break;uo(u.trim(),t)}}!(n!=null&&n.aborted)&&r.trim()&&uo(r.trim(),t),t.onFinish()}catch(s){if(n!=null&&n.aborted){t.onFinish();return}const c=s instanceof Error?s.message:"Stream read failed";t.onError(c)}finally{o.releaseLock()}}function uo(e,t){const n=e.split(`
`);for(const o of n){if(!o.startsWith("data: "))continue;const i=o.slice(6);if(i==="[DONE]")return;try{const r=JSON.parse(i);switch(r.type){case"text-delta":r.delta&&t.onTextDelta(r.delta);break;case"tool-input-available":r.toolCallId&&r.toolName&&t.onToolCall(r.toolCallId,r.toolName,r.input??{},r.providerMetadata);break;case"tool-output-available":r.toolCallId&&t.onToolResult(r.toolCallId,r.output);break;case"tool-call":r.toolCallId&&r.toolName&&t.onToolCall(r.toolCallId,r.toolName,r.input??{});break;case"tool-result":r.toolCallId&&t.onToolResult(r.toolCallId,r.output);break;case"error":t.onError(r.errorText??r.reason??"Unknown error");break;case"abort":t.onError(r.reason??"Response aborted");break;default:break}}catch{}}}function wr(e,t){if(!t)return e;let n=e;for(const[o,i]of Object.entries(t))n=n.replace(`:${o}`,encodeURIComponent(i));return n}function xr(e){var o;const t=e.replace(/\/$/,"")||"/",n=document.querySelectorAll("a[href]");for(const i of n){const r=i;if((((o=r.pathname)==null?void 0:o.replace(/\/$/,""))||"/")===t)return r.click(),console.log(`[Ourguide-B2B] Navigated via anchor click: ${e}`),!0}return!1}function Er(e){var i,r;const t=window,n=t.next;if((i=n==null?void 0:n.router)!=null&&i.push)return n.router.push(e),console.log(`[Ourguide-B2B] Navigated via Next.js router: ${e}`),!0;if(t.__NUXT__){const s=t.$nuxt;if((r=s==null?void 0:s.$router)!=null&&r.push)return s.$router.push(e),console.log(`[Ourguide-B2B] Navigated via Vue/Nuxt router: ${e}`),!0}return!1}function Tr(e){try{return window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate",{state:{}})),console.log(`[Ourguide-B2B] Navigated via pushState: ${e}`),!0}catch{return!1}}async function Sr(e,t){const n=wr(e,t);return xr(n)||Er(n)||Tr(n)||(console.log(`[Ourguide-B2B] Navigated via hard navigation: ${n}`),window.location.href=n),!0}const kr="og2-chat-",Ar="og2-enduser-session-",nn="og2-conv-";function on(e){return`${kr}${e}`}function fo(e){return`${Ar}${e}`}function po(){var t,n;const e=(n=(t=globalThis.crypto)==null?void 0:t.randomUUID)==null?void 0:n.call(t);return e||`${Date.now()}-${Math.random().toString(16).slice(2)}`}function rn(e){const t=fo(e);try{const n=localStorage.getItem(t);if(n&&n.trim())return n;const o=`sess_${po()}`;return localStorage.setItem(t,o),o}catch{return`sess_${po()}`}}function Cr(e){try{localStorage.removeItem(fo(e))}catch{}}function Nr(e,t){try{const n=t.map(({isStreaming:o,...i})=>i);sessionStorage.setItem(on(e),JSON.stringify(n))}catch{}}function Or(e){try{const t=sessionStorage.getItem(on(e));return t?JSON.parse(t):[]}catch{return[]}}function sn(e){try{sessionStorage.removeItem(on(e)),sessionStorage.removeItem(`${nn}${e}`)}catch{}}function Lr(e,t){try{sessionStorage.setItem(`${nn}${e}`,t)}catch{}}function Ir(e){try{return sessionStorage.getItem(`${nn}${e}`)}catch{return null}}const go="og2-action-highlight",Mr=1e4;let _e=null,Ot=null;function Lt(e,t="#3b82f6",n=Mr){Le();const o=e.getBoundingClientRect(),i=4,r=document.createElement("div");r.id=go,Object.assign(r.style,{position:"fixed",top:`${o.top-i}px`,left:`${o.left-i}px`,width:`${o.width+i*2}px`,height:`${o.height+i*2}px`,border:`2px solid ${t}`,borderRadius:"4px",backgroundColor:mo(t,.08),pointerEvents:"none",zIndex:"2147483646",transition:"opacity 0.2s ease, top 0.15s ease, left 0.15s ease, width 0.15s ease, height 0.15s ease",boxShadow:`0 0 0 2px ${mo(t,.2)}`}),document.body.appendChild(r),_e=r;const s=()=>{if(!_e)return;const c=e.getBoundingClientRect();_e.style.top=`${c.top-i}px`,_e.style.left=`${c.left-i}px`,_e.style.width=`${c.width+i*2}px`,_e.style.height=`${c.height+i*2}px`};window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s,{passive:!0}),Ot=setTimeout(()=>{Le(),window.removeEventListener("scroll",s),window.removeEventListener("resize",s)},n),r.__og2Cleanup=()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}}function Le(){if(Ot&&(clearTimeout(Ot),Ot=null),_e){const t=_e.__og2Cleanup;typeof t=="function"&&t(),_e.style.opacity="0";const n=_e;setTimeout(()=>{try{n.remove()}catch{}},200),_e=null}const e=document.getElementById(go);if(e)try{e.remove()}catch{}}function mo(e,t){const n=e.replace("#",""),o=parseInt(n.substring(0,2),16),i=parseInt(n.substring(2,4),16),r=parseInt(n.substring(4,6),16);return isNaN(o)||isNaN(i)||isNaN(r)?`rgba(59,130,246,${t})`:`rgba(${o},${i},${r},${t})`}let se=null,an=!1;const de=new EventTarget;function Rr(){an=!1}function ho(){return an}function ln(){an=!0}function _o(e,t,n){return new Promise(o=>{se={resolve:o,elementId:e,method:t,description:n},de.dispatchEvent(new CustomEvent("approval-requested",{detail:{elementId:e,method:t,description:n}}));const i=setTimeout(()=>{(se==null?void 0:se.elementId)===e&&(se.resolve(!1),se=null,Le(),de.dispatchEvent(new Event("approval-dismissed")))},3e4),r=o;se.resolve=s=>{clearTimeout(i),r(s)}})}function $r(e){se&&(se.resolve(e),se=null)}function Dr(){se&&(se.resolve(!1),se=null,Le())}let ae=null;function Pr(e,t){return new Promise(n=>{ae={resolve:n,workflowId:e,workflowTitle:t},de.dispatchEvent(new CustomEvent("workflow-approval-requested",{detail:{workflowId:e,workflowTitle:t}}));const o=setTimeout(()=>{(ae==null?void 0:ae.workflowId)===e&&(ae.resolve(!1),ae=null,de.dispatchEvent(new Event("workflow-approval-dismissed")))},3e4),i=n;ae.resolve=r=>{clearTimeout(o),i(r)}})}function Hr(e){ae&&(ae.resolve(e),ae=null)}function Fr(){ae&&(ae.resolve(!1),ae=null)}let bo=new Map,vo=null;function Ve(){return bo}function it(e){bo=e}function Ur(){return vo}function st(e){vo=e}const zr=10,Br=150,cn=600,Wr=100,un=8,Gr="og2-widget-root",jr=new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","NAV","HEADER","FOOTER"]),Vr='a[href], button, input, select, textarea, [role="button"], [role="link"], [role="checkbox"], [role="radio"], [role="switch"], [role="tab"], [role="menuitem"], [contenteditable="true"]',qr=[/^:r[a-z0-9]+:$/,/^react-/i,/^__next/,/^radix-/,/^headlessui-/,/^mui-/,/^ember\d/,/^ext-gen\d/];function It(e,t=document){const n=[...t.querySelectorAll(e)],o=t.querySelectorAll("*");for(const i of o)i.shadowRoot&&n.push(...It(e,i.shadowRoot));return n}const Xr='form, [role="form"], dialog, [role="dialog"], [role="alertdialog"], section[aria-label], section[aria-labelledby], [role="region"][aria-label], nav, [role="navigation"], aside, [role="complementary"]';function Yr(e){var i,r,s;const t=e.getAttribute("aria-label");if(t)return t;const n=e.getAttribute("aria-labelledby");if(n){const c=document.getElementById(n);if((i=c==null?void 0:c.textContent)!=null&&i.trim())return c.textContent.trim()}if(e.tagName.toLowerCase()==="form"){const c=e.getAttribute("name")||e.getAttribute("id");if(c&&!$t(c))return c}if(e instanceof HTMLDialogElement||(r=e.getAttribute("role"))!=null&&r.includes("dialog")){const c=e.querySelector('h1, h2, h3, [role="heading"]');if((s=c==null?void 0:c.textContent)!=null&&s.trim())return c.textContent.trim()}return""}function Ue(e){const o=new Set([160,8239,8199,65279]);let i="",r=!1;for(let s=0;s<e.length;s++){const c=e.charCodeAt(s);if(!(c>=57344&&c<=63743)){if(o.has(c)){r||(i+=" ",r=!0);continue}i+=e[s],r=e[s]===" "}}return i.trim()}function Mt(e){var t,n;try{const o=e;if(!o.isConnected||o.hidden||o.getAttribute("aria-hidden")==="true")return!1;const i=((n=(t=o.ownerDocument)==null?void 0:t.defaultView)==null?void 0:n.getComputedStyle(o))??window.getComputedStyle(o);if(!i||i.display==="none"||i.visibility==="hidden")return!1;const r=parseFloat(i.opacity??"1");if(!Number.isFinite(r)||r===0)return!1;const s=o.getBoundingClientRect();return!(!s||Math.max(s.width,s.height)===0||o.getClientRects().length===0)}catch{return!1}}function Rt(e){return!!e.closest(`#${Gr}`)}function Kr(e){try{const t=e.getBoundingClientRect();return t.top<window.innerHeight&&t.bottom>0&&t.left<window.innerWidth&&t.right>0}catch{return!1}}function yo(e,t){return e.length<=t?e:e.slice(0,t-3)+"..."}function $t(e){return qr.some(t=>t.test(e))}function wo(e){var n,o,i;if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){if(e.id){const s=document.querySelector(`label[for="${CSS.escape(e.id)}"]`);if((n=s==null?void 0:s.textContent)!=null&&n.trim())return Ue(s.textContent.trim())}const r=e.closest("label");if(r){const s=(o=r.textContent)==null?void 0:o.trim();if(s)return Ue(s)}return Ue(e.getAttribute("aria-label")||e.placeholder||e.getAttribute("name")||"")}const t=(i=e.innerText)==null?void 0:i.trim();return Ue(t||e.getAttribute("aria-label")||e.getAttribute("title")||"")}function Jr(e){const t=e.getAttribute("data-testid");if(t)return`[data-testid="${CSS.escape(t)}"]`;const n=e.getAttribute("data-test-id");if(n)return`[data-test-id="${CSS.escape(n)}"]`;if(e.id&&!$t(e.id))return`#${CSS.escape(e.id)}`;const o=e.getAttribute("aria-label");if(o){const r=`${e.tagName.toLowerCase()}[aria-label="${CSS.escape(o)}"]`;if(document.querySelectorAll(r).length===1)return r}if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){const i=e.getAttribute("name");if(i){const r=e.closest("form"),s=(r==null?void 0:r.getAttribute("name"))||(r==null?void 0:r.getAttribute("id"));if(s&&!$t(s)){const u=e.tagName.toLowerCase(),g=`form[name="${CSS.escape(s)}"] ${u}[name="${CSS.escape(i)}"]`;if(document.querySelectorAll(g).length===1)return g}const p=`${e.tagName.toLowerCase()}[name="${CSS.escape(i)}"]`;if(document.querySelectorAll(p).length===1)return p}}if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const i=e.placeholder;if(i){const s=`${e.tagName.toLowerCase()}[placeholder="${CSS.escape(i)}"]`;if(document.querySelectorAll(s).length===1)return s}}return Zr(e)}function Zr(e){const t=[];let n=e;for(;n&&n!==document.documentElement;){const o=n.tagName.toLowerCase();if(n.id&&!$t(n.id))return t.unshift(`#${CSS.escape(n.id)}`),t.join(" > ");const i=n.parentElement;if(!i){t.unshift(o);break}const r=n.tagName,s=Array.from(i.children).filter(c=>c.tagName===r);if(s.length>1){const c=s.indexOf(n)+1;t.unshift(`${o}:nth-of-type(${c})`)}else t.unshift(o);n=i}return t.join(" > ")}function xo(e){const t=e.tagName.toLowerCase(),n=wo(e),o=e.type||"",i=e.getAttribute("role")||"";return`${t}:${o}:${i}:${n.slice(0,40)}`}function at(){var T,S,z;const e=window.location.pathname+window.location.search,t=document.title||"",n=It("h1, h2, h3"),o=[];for(const _ of n){if(o.length>=zr)break;if(Rt(_)||!Mt(_))continue;const C=(T=_.innerText)==null?void 0:T.trim();C&&!o.includes(C)&&o.push(Ue(C))}const i=It(Xr).filter(_=>!Rt(_)&&Mt(_)),r=new Map;for(const _ of i){const C=Yr(_),X=_.tagName.toLowerCase(),K=_.getAttribute("role")||X;r.set(_,C?`${K}: ${Ue(C)}`:K)}const s=It(Vr),c=[];for(const _ of s)Rt(_)||!Mt(_)||c.push({el:_,inViewport:Kr(_)});c.sort((_,C)=>_.inViewport&&!C.inViewport?-1:!_.inViewport&&C.inViewport?1:0);const p=[],u=new Map,g=new Set;let l=0;for(const{el:_,inViewport:C}of c){if(p.length>=Br)break;const X=wo(_);if(!X)continue;const K=Jr(_);if(g.has(K))continue;g.add(K);const ve=`el_${l++}`,pe=_.tagName.toLowerCase(),F={id:ve,tag:pe,label:yo(X,Wr),isInViewport:C},A=_.getAttribute("role");if(A&&(F.role=A),_ instanceof HTMLInputElement&&(F.type=_.type,_.placeholder&&(F.placeholder=_.placeholder),(_.type==="checkbox"||_.type==="radio")&&(F.checked=_.checked)),_ instanceof HTMLTextAreaElement&&_.placeholder&&(F.placeholder=_.placeholder),_ instanceof HTMLSelectElement){const $=Array.from(_.options).map(ge=>{var Se;return((Se=ge.textContent)==null?void 0:Se.trim())||ge.value});F.options=$.slice(0,un),$.length>un&&F.options.push(`...+${$.length-un} more`),F.value=((z=(S=_.options[_.selectedIndex])==null?void 0:S.textContent)==null?void 0:z.trim())||_.value}if(_.disabled&&(F.disabled=!0),_ instanceof HTMLAnchorElement&&_.href)try{const $=new URL(_.href);F.href=$.pathname+$.search}catch{F.href=_.getAttribute("href")||void 0}for(const[$,ge]of r)if($.contains(_)){F.group=ge;break}p.push(F),u.set(ve,{selector:K,verifyHash:xo(_),label:F.label,tag:pe})}const b=document.querySelector("main")||document.body;let h="";function y(_){var X;if(h.length>=cn)return;if(_.nodeType===Node.TEXT_NODE){const K=(X=_.textContent)==null?void 0:X.trim();K&&(h+=(h?" ":"")+K);return}if(_.nodeType!==Node.ELEMENT_NODE)return;const C=_;if(!jr.has(C.tagName)&&!Rt(C)&&Mt(C)){for(const K of C.childNodes)if(y(K),h.length>=cn)return}}y(b),h=yo(h.replace(/\s+/g," ").trim(),cn);const O={url:e,title:t,headings:o,elements:p,visibleText:h},R=Qr(O);return{snapshot:O,selectorMap:u,outline:R}}function Qr(e){const t=[];if(t.push(`Page: ${e.title}`),t.push(`URL: ${e.url}`),e.headings.length>0){t.push(""),t.push("Headings:");for(const o of e.headings)t.push(`  ${o}`)}t.push(""),t.push("Interactive Elements:");let n;for(const o of e.elements){o.group!==n&&(n=o.group,n&&(t.push(""),t.push(`── ${n} ──`)));let r=`${n?"  ":""}[${o.id}] ${o.tag}`;o.type&&(r+=`[${o.type}]`),r+=`: ${o.label}`;const s=[];o.placeholder&&s.push(`placeholder="${o.placeholder}"`),o.options&&s.push(`options=[${o.options.map(c=>`"${c}"`).join(",")}]`),o.value!==void 0&&s.push(`selected="${o.value}"`),o.checked!==void 0&&s.push(`checked=${o.checked}`),o.disabled&&s.push("(disabled)"),o.href&&s.push(`href="${o.href}"`),o.isInViewport||s.push("(off-screen)"),s.length>0&&(r+=" "+s.join(" ")),t.push(r)}return e.visibleText&&(t.push(""),t.push("Visible Text:"),t.push(e.visibleText)),t.join(`
`)}function ei(e,t){const n=new Set(e.elements.map(r=>`${r.tag}:${r.label}`)),o=t.elements.filter(r=>!n.has(`${r.tag}:${r.label}`));if(o.length===0)return"(no new elements detected)";const i=[];i.push(`New elements after action (${o.length}):`);for(const r of o){let s=`[${r.id}] ${r.tag}`;r.type&&(s+=`[${r.type}]`),s+=`: ${r.label}`;const c=[];r.placeholder&&c.push(`placeholder="${r.placeholder}"`),r.options&&c.push(`options=[${r.options.map(p=>`"${p}"`).join(",")}]`),r.disabled&&c.push("(disabled)"),c.length>0&&(s+=" "+c.join(" ")),i.push(s)}return i.join(`
`)}function Dt(e,t){const n=t.get(e);if(!n)return null;const o=document.querySelector(n.selector);return!o||xo(o)!==n.verifyHash?Eo(n):o}function Eo(e){const t=e.tag==="a"?'a[href], button, [role="button"], [role="link"]':e.tag==="button"?'button, [role="button"], a[href]':`${e.tag}, [role="${e.tag}"]`,n=document.querySelectorAll(t),o=e.label.toLowerCase();for(const i of n){const r=To(i).toLowerCase();if(r.length>0&&r===o)return i}for(const i of n){const r=To(i).toLowerCase();if(r.length>0&&(r.includes(o)||o.includes(r)))return i}return null}function To(e){var t;return((t=e.innerText)==null?void 0:t.trim())||e.getAttribute("aria-label")||e.getAttribute("title")||e.placeholder||e.getAttribute("name")||""}function So(e=3e3,t=300){return new Promise(n=>{let o,i=!1;const r=()=>{i||(i=!0,s.disconnect(),n())},s=new MutationObserver(()=>{clearTimeout(o),o=setTimeout(r,t)});s.observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),o=setTimeout(r,t),setTimeout(r,e)})}async function dn(e,t,n,o){try{switch(e){case"click":return await ti(t);case"fill":return await ri(t,n.value??"");case"typeCharByChar":return await ii(t,n.value??"",n.delayMs);case"selectOption":return await si(t,n.value??"");case"check":return await ai(t,n.checked??!0);case"scroll":return await li(n.direction??"down",t);case"pressKey":return await ci(n.key??"Enter");case"setFile":return await fi(t,n);case"dragAndDrop":{if(!n.toElementId||!o)return{success:!1,description:"Missing target element for drag and drop",error:"missing-target"};const i=Dt(n.toElementId,o);return i?await di(t,i):{success:!1,description:"Target element not found",error:"target-not-found"}}default:return{success:!1,description:`Unknown method: ${e}`,error:"unknown-method"}}}catch(i){return{success:!1,description:`Action failed: ${i instanceof Error?i.message:"unknown error"}`,error:"exception"}}}async function ti(e){e.scrollIntoView({block:"center",behavior:"smooth"}),await Pt(100);const t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,i={bubbles:!0,cancelable:!0,composed:!0,view:window,clientX:n,clientY:o};e.dispatchEvent(new PointerEvent("pointerdown",{...i,pointerId:1})),e.dispatchEvent(new MouseEvent("mousedown",i)),e.dispatchEvent(new PointerEvent("pointerup",{...i,pointerId:1})),e.dispatchEvent(new MouseEvent("mouseup",i));const r=new MouseEvent("click",{...i,detail:1});if(!e.dispatchEvent(r))try{e.click()}catch{}return{success:!0,description:`Clicked "${qe(e)}"`}}const ni=new Set(["color","date","datetime-local","month","range","time","week"]);async function oi(e,t){const n=qe(e);if(e instanceof HTMLSelectElement)return Ao(e,t);if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const o=e instanceof HTMLInputElement?(e.type||"").toLowerCase():"textarea";return e instanceof HTMLInputElement&&ni.has(o)?(fn(e),pn(e,t.trim()),gn(e,t.trim()),{success:!0,description:`Filled "${n}" with value`}):(fn(e),ko(t)||(pn(e,t),gn(e,t)),{success:!0,description:`Filled "${n}" with value`})}return e.isContentEditable?(fn(e),ko(t)||(e.textContent=t,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))),{success:!0,description:`Filled "${n}" with value`}):{success:!1,description:`Cannot fill element "${n}"`,error:"unsupported-element"}}async function ri(e,t){const n=await oi(e,t);if(!n.success)return n;const o=pi(e);return o!==null&&o!==t?{...n,verified:!1,warning:"Value may not have been set correctly. Try typeCharByChar if the field uses autocomplete."}:{...n,verified:!0}}function fn(e){try{e.focus()}catch{}if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){try{e.select()}catch{try{const t=(e.value??"").length;e.setSelectionRange(0,t)}catch{}}return}if(e.isContentEditable)try{const t=document.getSelection(),n=document.createRange();n.selectNodeContents(e),t==null||t.removeAllRanges(),t==null||t.addRange(n)}catch{}}function pn(e,t){var s;const n=e instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(n,"value"),i=o==null?void 0:o.set;typeof i=="function"?i.call(e,t):e.value=t;const r=e._valueTracker;(s=r==null?void 0:r.setValue)==null||s.call(r,"")}function gn(e,t){try{e.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,data:t,inputType:"insertText"}))}catch{e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}e.dispatchEvent(new Event("change",{bubbles:!0}))}function ko(e){try{return document.execCommand("insertText",!1,e)}catch{return!1}}async function ii(e,t,n=50){const o=qe(e);e.focus();for(const i of t){e.dispatchEvent(new KeyboardEvent("keydown",{key:i,bubbles:!0,cancelable:!0}));try{document.execCommand("insertText",!1,i)}catch{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(pn(e,e.value+i),gn(e,e.value))}e.dispatchEvent(new KeyboardEvent("keyup",{key:i,bubbles:!0})),n>0&&await Pt(n)}return{success:!0,description:`Typed "${gi(t)}" into "${o}"`}}async function Ao(e,t){var p;const n=qe(e);if(!(e instanceof HTMLSelectElement))return{success:!1,description:`"${n}" is not a select element`,error:"not-select"};const o=t.trim(),r=Array.from(e.options).find(u=>{const g=(u.label||u.textContent||"").trim(),l=String(u.value??"").trim();return g===o||l===o||g.toLowerCase()===o.toLowerCase()||l.toLowerCase()===o.toLowerCase()});if(!r)return{success:!1,description:`Option "${o}" not found in "${n}"`,error:"option-not-found"};const s=Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,"value");return s!=null&&s.set?s.set.call(e,r.value):e.value=r.value,r.selected=!0,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})),{success:!0,description:`Selected "${((p=r.textContent)==null?void 0:p.trim())||r.value}" in "${n}"`}}async function si(e,t){var o,i;const n=await Ao(e,t);if(!n.success)return n;if(e instanceof HTMLSelectElement){const r=t.trim().toLowerCase();if((((i=(o=e.options[e.selectedIndex])==null?void 0:o.textContent)==null?void 0:i.trim())||e.value).toLowerCase()!==r&&e.value.toLowerCase()!==r)return{...n,verified:!1,warning:"Selected value may not match the requested option."}}return{...n,verified:!0}}async function ai(e,t){const n=qe(e);if(e instanceof HTMLInputElement&&(e.type==="checkbox"||e.type==="radio")){if(e.checked===t)return{success:!0,description:`"${n}" already ${t?"checked":"unchecked"}`};if(e.click(),e.checked!==t){const i=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"checked");i!=null&&i.set?i.set.call(e,t):e.checked=t,e.dispatchEvent(new Event("change",{bubbles:!0})),e.dispatchEvent(new Event("input",{bubbles:!0}))}return{success:!0,description:`${t?"Checked":"Unchecked"} "${n}"`}}return e.getAttribute("aria-checked")!==null?(e.click(),{success:!0,description:`Toggled "${n}"`}):{success:!1,description:`"${n}" is not a checkable element`,error:"not-checkable"}}async function li(e,t){const n=Math.round(window.innerHeight*.75),i={up:{top:-n,left:0},down:{top:n,left:0},left:{top:0,left:-n},right:{top:0,left:n}}[e];return t&&t!==document.body&&t!==document.documentElement?t.scrollBy({...i,behavior:"smooth"}):window.scrollBy({...i,behavior:"smooth"}),{success:!0,description:`Scrolled ${e}`}}async function ci(e){var o;const t=document.activeElement||document.body,n=ui(e);if(t.dispatchEvent(new KeyboardEvent("keydown",{...n,bubbles:!0,cancelable:!0})),n.key==="Enter"||n.key===" "){const i=(o=t.tagName)==null?void 0:o.toLowerCase();(i==="button"||i==="a"||t.getAttribute("role")==="button")&&t.click()}if(n.key==="Tab"){const i=Array.from(document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(s=>!s.hidden&&s.offsetParent!==null),r=i.indexOf(t);if(r>=0){const s=n.shiftKey?i[r-1]||i[i.length-1]:i[r+1]||i[0];s==null||s.focus()}}return t.dispatchEvent(new KeyboardEvent("keyup",{...n,bubbles:!0})),{success:!0,description:`Pressed ${e}`}}function ui(e){const t=e.split("+").map(i=>i.trim()),n={ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1};let o=e;if(t.length>1){o=t[t.length-1];for(let i=0;i<t.length-1;i++){const r=t[i].toLowerCase();r==="ctrl"||r==="control"?n.ctrlKey=!0:r==="alt"?n.altKey=!0:r==="shift"?n.shiftKey=!0:(r==="cmd"||r==="meta"||r==="command")&&(n.metaKey=!0)}}return{key:o,...n}}async function di(e,t){const n=new DataTransfer;return e.dispatchEvent(new DragEvent("dragstart",{dataTransfer:n,bubbles:!0,cancelable:!0})),await Pt(50),t.dispatchEvent(new DragEvent("dragenter",{dataTransfer:n,bubbles:!0,cancelable:!0})),t.dispatchEvent(new DragEvent("dragover",{dataTransfer:n,bubbles:!0,cancelable:!0})),await Pt(50),t.dispatchEvent(new DragEvent("drop",{dataTransfer:n,bubbles:!0,cancelable:!0})),e.dispatchEvent(new DragEvent("dragend",{dataTransfer:n,bubbles:!0})),{success:!0,description:"Dragged element to target"}}async function fi(e,t){const n=qe(e);if(!(e instanceof HTMLInputElement)||e.type!=="file")return{success:!1,description:`"${n}" is not a file input`,error:"not-file-input"};const{fileName:o,fileBase64:i,fileMimeType:r}=t;if(!o||!i)return{success:!1,description:"Missing fileName or fileBase64 for file upload",error:"missing-file-data"};try{const s=new DataTransfer,c=atob(i),p=new Uint8Array(c.length);for(let l=0;l<c.length;l++)p[l]=c.charCodeAt(l);const u=new Blob([p],{type:r||"application/octet-stream"}),g=new File([u],o,{type:r||"application/octet-stream",lastModified:Date.now()});return s.items.add(g),e.files=s.files,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})),{success:!0,description:`Attached "${o}" to "${n}"`}}catch(s){return{success:!1,description:`File upload failed: ${s instanceof Error?s.message:"unknown error"}`,error:"file-upload-failed"}}}function pi(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?e.value:e.isContentEditable?e.textContent??null:null}function Pt(e){return new Promise(t=>setTimeout(t,e))}function qe(e){var t;return e.getAttribute("aria-label")||e.placeholder||((t=e.innerText)==null?void 0:t.trim().slice(0,40))||e.getAttribute("name")||e.tagName.toLowerCase()}function gi(e,t=30){return e.length<=t?e:e.slice(0,t-3)+"..."}const mi=10,hi=30,mn=500,_i="og2-widget-root",bi=new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","NAV","HEADER","FOOTER"]),vi="a[href], button, input, select, textarea";function hn(e){if(!(e instanceof HTMLElement)||e.hidden||e.getAttribute("aria-hidden")==="true")return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"}function _n(e){return!!e.closest(`#${_i}`)}function yi(e){var n,o;if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){if(e.id){const i=document.querySelector(`label[for="${e.id}"]`);if((n=i==null?void 0:i.textContent)!=null&&n.trim())return i.textContent.trim()}return e.getAttribute("aria-label")||e.placeholder||e.getAttribute("name")||""}const t=(o=e.innerText)==null?void 0:o.trim();return t||e.getAttribute("aria-label")||e.getAttribute("title")||""}function Co(e,t){return e.length<=t?e:e.slice(0,t-3)+"..."}function wi(){var g;const e=window.location.pathname+window.location.search,t=document.title||"",n=document.querySelectorAll("h1, h2, h3"),o=[];for(const l of n){if(o.length>=mi)break;if(_n(l)||!hn(l))continue;const b=(g=l.innerText)==null?void 0:g.trim();b&&!o.includes(b)&&o.push(b)}const i=document.querySelectorAll(vi),r=[],s=new Set;for(const l of i){if(r.length>=hi)break;if(_n(l)||!hn(l))continue;const b=yi(l);if(!b)continue;const h=`${l.tagName}:${b}`;if(s.has(h))continue;s.add(h);const y={tag:l.tagName.toLowerCase(),text:Co(b,80)};if(l instanceof HTMLInputElement&&(y.type=l.type),l instanceof HTMLAnchorElement&&l.href)try{const O=new URL(l.href);y.href=O.pathname+O.search}catch{y.href=l.getAttribute("href")||void 0}r.push(y)}const c=document.querySelector("main")||document.body;let p="";function u(l){var h;if(p.length>=mn)return;if(l.nodeType===Node.TEXT_NODE){const y=(h=l.textContent)==null?void 0:h.trim();y&&(p+=(p?" ":"")+y);return}if(l.nodeType!==Node.ELEMENT_NODE)return;const b=l;if(!bi.has(b.tagName)&&!_n(b)&&hn(b)){for(const y of b.childNodes)if(u(y),p.length>=mn)return}}return u(c),p=Co(p.replace(/\s+/g," ").trim(),mn),{url:e,title:t,headings:o,interactiveElements:r,visibleText:p}}async function xi(){console.log("[Ourguide] capture_screen tool invoked — capturing DOM snapshot");const e=wi();return console.log("[Ourguide] capture_screen result",{url:e.url,title:e.title}),e}async function Ei(){console.log("[Ourguide] capture_screen_for_action — capturing actionable DOM");const e=at();return it(e.selectorMap),st(e.snapshot),console.log("[Ourguide] actionable DOM captured",{elementCount:e.snapshot.elements.length,url:e.snapshot.url}),{outline:e.outline}}async function Ti(e){const t=e.elementId,n=e.method,o=e.description||`${n} on ${t}`,i={value:e.value,checked:e.checked,direction:e.direction,key:e.key,toElementId:e.toElementId,delayMs:e.delayMs,fileName:e.fileName,fileBase64:e.fileBase64,fileMimeType:e.fileMimeType};console.log("[Ourguide] perform_action invoked",{elementId:t,method:n,description:o});const r=Ve();let s=Dt(t,r);if(!s){const b=r.get(t);if(b){console.log("[Ourguide] self-heal: element not found, recapturing DOM");const h=at();it(h.selectorMap),st(h.snapshot);for(const[,y]of h.selectorMap)if(y.tag===b.tag&&y.label.toLowerCase()===b.label.toLowerCase()&&(s=document.querySelector(y.selector),s))break}if(!s)return console.warn("[Ourguide] perform_action — element not found even after self-heal",{elementId:t}),{success:!1,error:"Element not found on the page. It may have changed. Try capture_screen_for_action again."}}let c=!0;if(ho()?(Lt(s),await new Promise(b=>setTimeout(b,400)),Le()):(Lt(s),c=await _o(t,n,o),Le(),c&&ln()),!c)return console.log("[Ourguide] perform_action — denied by user"),{success:!1,denied:!0,description:"User denied this action"};console.log("[Ourguide] perform_action — executing",{method:n,elementId:t});let p=await dn(n,s,i,Ve());if(!p.success&&p.error==="exception"){console.log("[Ourguide] self-heal: action failed, recapturing and retrying");const b=Ve().get(t);if(b){const h=at();for(const[,y]of h.selectorMap)if(y.tag===b.tag&&y.label.toLowerCase()===b.label.toLowerCase()){const O=document.querySelector(y.selector);if(O){p=await dn(n,O,i,h.selectorMap),it(h.selectorMap),st(h.snapshot);break}}}}console.log("[Ourguide] perform_action result",p),await So();const u=Ur(),g=at();it(g.selectorMap),st(g.snapshot);const l=u?ei(u,g.snapshot)+`

Full snapshot:
`+g.outline:g.outline;return{...p,newSnapshot:l}}async function Si(e){var p,u;const t=e.fields,n=e.description||"Fill form fields";console.log("[Ourguide] batch_fill_form invoked",{fieldCount:t.length,description:n});let o=!0;if(!ho()){const g=Dt((p=t[0])==null?void 0:p.elementId,Ve());g&&Lt(g),o=await _o(((u=t[0])==null?void 0:u.elementId)||"","batch_fill",n),Le(),o&&ln()}if(!o)return{success:!1,denied:!0,description:"User denied this action"};const i=[];for(const g of t){const l=Dt(g.elementId,Ve());if(!l){i.push({elementId:g.elementId,success:!1,error:"Element not found"});continue}Lt(l),await new Promise(O=>setTimeout(O,200)),Le();const b=g.method||"fill",h={value:g.value,checked:g.checked},y=await dn(b,l,h,Ve());i.push({elementId:g.elementId,success:y.success,error:y.error})}await So();const r=at();it(r.selectorMap),st(r.snapshot);const s=i.every(g=>g.success),c=i.filter(g=>!g.success).length;return{success:s,description:s?`Filled ${t.length} fields`:`${c} of ${t.length} fields failed`,results:i,newSnapshot:r.outline}}function ki(){co({capture_screen:xi,capture_screen_for_action:Ei,perform_action:Ti,batch_fill_form:Si,plan_actions:async e=>{const t=e.plan;return console.log("[Ourguide] plan_actions:",t),{acknowledged:!0,plan:t}},run_workflow:async e=>{const t=e.workflowId,n=e.workflowTitle;return console.log("[Ourguide] run_workflow invoked",{workflowId:t,workflowTitle:n}),await Pr(t,n)?(console.log("[Ourguide] run_workflow — approved by user"),ln(),{approved:!0,workflowId:t,workflowTitle:n}):(console.log("[Ourguide] run_workflow — denied by user"),{approved:!1,denied:!0,workflowId:t,workflowTitle:n,message:`The user DECLINED to run the "${n}" workflow. Do NOT proceed with it. Respond acknowledging the user chose not to run it and ask how else you can help.`})}})}function bn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ze(e){let t=e;return t=t.replace(/`([^`\n]+)`/g,'<code class="og2-md-inline-code">$1</code>'),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/__(.+?)__/g,"<strong>$1</strong>"),t=t.replace(/\*(.+?)\*/g,"<em>$1</em>"),t=t.replace(new RegExp("(?<!\\w)_(.+?)_(?!\\w)","g"),"<em>$1</em>"),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(n,o,i)=>{const r=i.trim();return/^(https?:\/\/|mailto:|\/|#)/i.test(r)?`<a class="og2-md-link" href="${r}" target="_blank" rel="noopener noreferrer">${o}</a>`:o}),t}function No(e){if(!e)return"";const t=[];let n=e.replace(/```(\w*)\n([\s\S]*?)```/g,(o,i,r)=>{const s=t.length,c=bn(r.replace(/\n$/,"")),p=i?` data-lang="${bn(i)}"`:"";return t.push(`<pre class="og2-md-pre"${p}><code class="og2-md-code">${c}</code></pre>`),`\0CB${s}\0`});return n=bn(n),n=Mi(n),n=n.replace(/\x00CB(\d+)\x00/g,(o,i)=>t[parseInt(i)]),n}function Ai(e){return/^[\s]*[-*]\s/.test(e)?"ul":/^[\s]*\d+\.\s/.test(e)?"ol":/^#{1,4}\s+/.test(e)?"heading":/^\s*\|/.test(e)?"table":"text"}function Ci(e){const t=[];let n=null;for(const o of e){const i=Ai(o);n&&n.type===i?n.lines.push(o):(n&&t.push(n),n={type:i,lines:[o]})}return n&&t.push(n),t}function Ni(e){var t;switch(e.type){case"ul":return`<ul class="og2-md-list">${e.lines.map(o=>`<li>${ze(o.replace(/^[\s]*[-*]\s/,""))}</li>`).join("")}</ul>`;case"ol":{const n=e.lines.map(r=>`<li>${ze(r.replace(/^[\s]*\d+\.\s/,""))}</li>`).join(""),o=((t=e.lines[0].match(/^[\s]*(\d+)\./))==null?void 0:t[1])??"1";return`<ol class="og2-md-list"${o!=="1"?` start="${o}"`:""}>${n}</ol>`}case"heading":return e.lines.map(n=>{const o=n.match(/^(#{1,4})\s+(.+)$/),i=o[1].length;return`<h${i+2} class="og2-md-heading">${ze(o[2])}</h${i+2}>`}).join("");case"table":return Ii(e.lines);case"text":return`<p>${e.lines.map(n=>ze(n)).join("<br>")}</p>`}}function Ht(e){return e.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(o=>o.trim())}function Oi(e){const t=e.trim(),n=t.startsWith(":"),o=t.endsWith(":");return n&&o?"center":o?"right":"left"}function Li(e){const t=Ht(e);return t.length>0&&t.every(n=>/^:?-{1,}:?$/.test(n.trim()))}function Ii(e){if(e.length<2||!Li(e[1]))return`<p>${e.map(c=>ze(c)).join("<br>")}</p>`;const t=Ht(e[0]),n=Ht(e[1]).map(Oi),o=e.slice(2),i=c=>{const p=n[c];return p&&p!=="left"?` style="text-align:${p}"`:""},r="<thead><tr>"+t.map((c,p)=>`<th${i(p)}>${ze(c)}</th>`).join("")+"</tr></thead>";let s="";return o.length>0&&(s=`<tbody>${o.map(p=>{const u=Ht(p);return"<tr>"+t.map((g,l)=>`<td${i(l)}>${ze(u[l]??"")}</td>`).join("")+"</tr>"}).join("")}</tbody>`),`<table class="og2-md-table">${r}${s}</table>`}function Mi(e){const t=e.split(/\n{2,}/),n=[];for(const o of t){const i=o.trim();if(!i)continue;if(/^\x00CB\d+\x00$/.test(i)){n.push(i);continue}const r=i.split(`
`),s=Ci(r);for(const c of s)n.push(Ni(c))}return n.join("")}/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:Oo,setPrototypeOf:Lo,isFrozen:Ri,getPrototypeOf:$i,getOwnPropertyDescriptor:Di}=Object;let{freeze:ee,seal:fe,create:vn}=Object,{apply:yn,construct:wn}=typeof Reflect<"u"&&Reflect;ee||(ee=function(t){return t}),fe||(fe=function(t){return t}),yn||(yn=function(t,n){for(var o=arguments.length,i=new Array(o>2?o-2:0),r=2;r<o;r++)i[r-2]=arguments[r];return t.apply(n,i)}),wn||(wn=function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return new t(...o)});const Ft=ne(Array.prototype.forEach),Pi=ne(Array.prototype.lastIndexOf),Io=ne(Array.prototype.pop),lt=ne(Array.prototype.push),Hi=ne(Array.prototype.splice),Ut=ne(String.prototype.toLowerCase),xn=ne(String.prototype.toString),En=ne(String.prototype.match),ct=ne(String.prototype.replace),Fi=ne(String.prototype.indexOf),Ui=ne(String.prototype.trim),be=ne(Object.prototype.hasOwnProperty),te=ne(RegExp.prototype.test),ut=zi(TypeError);function ne(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return yn(e,t,o)}}function zi(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return wn(e,n)}}function E(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ut;Lo&&Lo(e,null);let o=t.length;for(;o--;){let i=t[o];if(typeof i=="string"){const r=n(i);r!==i&&(Ri(t)||(t[o]=r),i=r)}e[i]=!0}return e}function Bi(e){for(let t=0;t<e.length;t++)be(e,t)||(e[t]=null);return e}function Te(e){const t=vn(null);for(const[n,o]of Oo(e))be(e,n)&&(Array.isArray(o)?t[n]=Bi(o):o&&typeof o=="object"&&o.constructor===Object?t[n]=Te(o):t[n]=o);return t}function dt(e,t){for(;e!==null;){const o=Di(e,t);if(o){if(o.get)return ne(o.get);if(typeof o.value=="function")return ne(o.value)}e=$i(e)}function n(){return null}return n}const Mo=ee(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Tn=ee(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Sn=ee(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Wi=ee(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),kn=ee(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Gi=ee(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ro=ee(["#text"]),$o=ee(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),An=ee(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Do=ee(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),zt=ee(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ji=fe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Vi=fe(/<%[\w\W]*|[\w\W]*%>/gm),qi=fe(/\$\{[\w\W]*/gm),Xi=fe(/^data-[\-\w.\u00B7-\uFFFF]+$/),Yi=fe(/^aria-[\-\w]+$/),Po=fe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ki=fe(/^(?:\w+script|data):/i),Ji=fe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ho=fe(/^html$/i),Zi=fe(/^[a-z][.\w]*(-[.\w]+)+$/i);var Fo=Object.freeze({__proto__:null,ARIA_ATTR:Yi,ATTR_WHITESPACE:Ji,CUSTOM_ELEMENT:Zi,DATA_ATTR:Xi,DOCTYPE_NAME:Ho,ERB_EXPR:Vi,IS_ALLOWED_URI:Po,IS_SCRIPT_OR_DATA:Ki,MUSTACHE_EXPR:ji,TMPLIT_EXPR:qi});const ft={element:1,text:3,progressingInstruction:7,comment:8,document:9},Qi=function(){return typeof window>"u"?null:window},es=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(o=n.getAttribute(i));const r="dompurify"+(o?"#"+o:"");try{return t.createPolicy(r,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}},Uo=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function zo(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qi();const t=w=>zo(w);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==ft.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const o=n,i=o.currentScript,{DocumentFragment:r,HTMLTemplateElement:s,Node:c,Element:p,NodeFilter:u,NamedNodeMap:g=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:l,DOMParser:b,trustedTypes:h}=e,y=p.prototype,O=dt(y,"cloneNode"),R=dt(y,"remove"),T=dt(y,"nextSibling"),S=dt(y,"childNodes"),z=dt(y,"parentNode");if(typeof s=="function"){const w=n.createElement("template");w.content&&w.content.ownerDocument&&(n=w.content.ownerDocument)}let _,C="";const{implementation:X,createNodeIterator:K,createDocumentFragment:ve,getElementsByTagName:pe}=n,{importNode:F}=o;let A=Uo();t.isSupported=typeof Oo=="function"&&typeof z=="function"&&X&&X.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:$,ERB_EXPR:ge,TMPLIT_EXPR:Se,DATA_ATTR:De,ARIA_ATTR:Be,IS_SCRIPT_OR_DATA:Xe,ATTR_WHITESPACE:pt,CUSTOM_ELEMENT:Bt}=Fo;let{IS_ALLOWED_URI:gt}=Fo,V=null;const mt=E({},[...Mo,...Tn,...Sn,...kn,...Ro]);let B=null;const Wt=E({},[...$o,...An,...Do,...zt]);let D=Object.seal(vn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),We=null,ht=null;const d=Object.seal(vn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let x=!0,k=!0,P=!1,I=!0,oe=!1,ke=!0,le=!1,Ie=!1,Ae=!1,ce=!1,Ye=!1,H=!1,W=!0,ye=!1;const Ce="user-content-";let re=!0,me=!1,we={},ue=null;const G=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let _t=null;const Ke=E({},["audio","video","img","source","image","track"]);let bt=null;const Je=E({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ze="http://www.w3.org/1998/Math/MathML",L="http://www.w3.org/2000/svg",J="http://www.w3.org/1999/xhtml";let xe=J,vt=!1,yt=null;const Me=E({},[Ze,L,J],xn);let Pe=E({},["mi","mo","mn","ms","mtext"]),Gt=E({},["annotation-xml"]);const ss=E({},["title","style","font","a","script"]);let wt=null;const as=["application/xhtml+xml","text/html"],ls="text/html";let Y=null,Qe=null;const cs=n.createElement("form"),jo=function(a){return a instanceof RegExp||a instanceof Function},Nn=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Qe&&Qe===a)){if((!a||typeof a!="object")&&(a={}),a=Te(a),wt=as.indexOf(a.PARSER_MEDIA_TYPE)===-1?ls:a.PARSER_MEDIA_TYPE,Y=wt==="application/xhtml+xml"?xn:Ut,V=be(a,"ALLOWED_TAGS")?E({},a.ALLOWED_TAGS,Y):mt,B=be(a,"ALLOWED_ATTR")?E({},a.ALLOWED_ATTR,Y):Wt,yt=be(a,"ALLOWED_NAMESPACES")?E({},a.ALLOWED_NAMESPACES,xn):Me,bt=be(a,"ADD_URI_SAFE_ATTR")?E(Te(Je),a.ADD_URI_SAFE_ATTR,Y):Je,_t=be(a,"ADD_DATA_URI_TAGS")?E(Te(Ke),a.ADD_DATA_URI_TAGS,Y):Ke,ue=be(a,"FORBID_CONTENTS")?E({},a.FORBID_CONTENTS,Y):G,We=be(a,"FORBID_TAGS")?E({},a.FORBID_TAGS,Y):Te({}),ht=be(a,"FORBID_ATTR")?E({},a.FORBID_ATTR,Y):Te({}),we=be(a,"USE_PROFILES")?a.USE_PROFILES:!1,x=a.ALLOW_ARIA_ATTR!==!1,k=a.ALLOW_DATA_ATTR!==!1,P=a.ALLOW_UNKNOWN_PROTOCOLS||!1,I=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,oe=a.SAFE_FOR_TEMPLATES||!1,ke=a.SAFE_FOR_XML!==!1,le=a.WHOLE_DOCUMENT||!1,ce=a.RETURN_DOM||!1,Ye=a.RETURN_DOM_FRAGMENT||!1,H=a.RETURN_TRUSTED_TYPE||!1,Ae=a.FORCE_BODY||!1,W=a.SANITIZE_DOM!==!1,ye=a.SANITIZE_NAMED_PROPS||!1,re=a.KEEP_CONTENT!==!1,me=a.IN_PLACE||!1,gt=a.ALLOWED_URI_REGEXP||Po,xe=a.NAMESPACE||J,Pe=a.MATHML_TEXT_INTEGRATION_POINTS||Pe,Gt=a.HTML_INTEGRATION_POINTS||Gt,D=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&jo(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(D.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&jo(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(D.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(D.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),oe&&(k=!1),Ye&&(ce=!0),we&&(V=E({},Ro),B=[],we.html===!0&&(E(V,Mo),E(B,$o)),we.svg===!0&&(E(V,Tn),E(B,An),E(B,zt)),we.svgFilters===!0&&(E(V,Sn),E(B,An),E(B,zt)),we.mathMl===!0&&(E(V,kn),E(B,Do),E(B,zt))),a.ADD_TAGS&&(typeof a.ADD_TAGS=="function"?d.tagCheck=a.ADD_TAGS:(V===mt&&(V=Te(V)),E(V,a.ADD_TAGS,Y))),a.ADD_ATTR&&(typeof a.ADD_ATTR=="function"?d.attributeCheck=a.ADD_ATTR:(B===Wt&&(B=Te(B)),E(B,a.ADD_ATTR,Y))),a.ADD_URI_SAFE_ATTR&&E(bt,a.ADD_URI_SAFE_ATTR,Y),a.FORBID_CONTENTS&&(ue===G&&(ue=Te(ue)),E(ue,a.FORBID_CONTENTS,Y)),a.ADD_FORBID_CONTENTS&&(ue===G&&(ue=Te(ue)),E(ue,a.ADD_FORBID_CONTENTS,Y)),re&&(V["#text"]=!0),le&&E(V,["html","head","body"]),V.table&&(E(V,["tbody"]),delete We.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ut('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=a.TRUSTED_TYPES_POLICY,C=_.createHTML("")}else _===void 0&&(_=es(h,i)),_!==null&&typeof C=="string"&&(C=_.createHTML(""));ee&&ee(a),Qe=a}},Vo=E({},[...Tn,...Sn,...Wi]),qo=E({},[...kn,...Gi]),us=function(a){let m=z(a);(!m||!m.tagName)&&(m={namespaceURI:xe,tagName:"template"});const v=Ut(a.tagName),M=Ut(m.tagName);return yt[a.namespaceURI]?a.namespaceURI===L?m.namespaceURI===J?v==="svg":m.namespaceURI===Ze?v==="svg"&&(M==="annotation-xml"||Pe[M]):!!Vo[v]:a.namespaceURI===Ze?m.namespaceURI===J?v==="math":m.namespaceURI===L?v==="math"&&Gt[M]:!!qo[v]:a.namespaceURI===J?m.namespaceURI===L&&!Gt[M]||m.namespaceURI===Ze&&!Pe[M]?!1:!qo[v]&&(ss[v]||!Vo[v]):!!(wt==="application/xhtml+xml"&&yt[a.namespaceURI]):!1},Ne=function(a){lt(t.removed,{element:a});try{z(a).removeChild(a)}catch{R(a)}},Ge=function(a,m){try{lt(t.removed,{attribute:m.getAttributeNode(a),from:m})}catch{lt(t.removed,{attribute:null,from:m})}if(m.removeAttribute(a),a==="is")if(ce||Ye)try{Ne(m)}catch{}else try{m.setAttribute(a,"")}catch{}},Xo=function(a){let m=null,v=null;if(Ae)a="<remove></remove>"+a;else{const q=En(a,/^[\r\n\t ]+/);v=q&&q[0]}wt==="application/xhtml+xml"&&xe===J&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const M=_?_.createHTML(a):a;if(xe===J)try{m=new b().parseFromString(M,wt)}catch{}if(!m||!m.documentElement){m=X.createDocument(xe,"template",null);try{m.documentElement.innerHTML=vt?C:M}catch{}}const Q=m.body||m.documentElement;return a&&v&&Q.insertBefore(n.createTextNode(v),Q.childNodes[0]||null),xe===J?pe.call(m,le?"html":"body")[0]:le?m.documentElement:Q},Yo=function(a){return K.call(a.ownerDocument||a,a,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},On=function(a){return a instanceof l&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof g)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},Ko=function(a){return typeof c=="function"&&a instanceof c};function Re(w,a,m){Ft(w,v=>{v.call(t,a,m,Qe)})}const Jo=function(a){let m=null;if(Re(A.beforeSanitizeElements,a,null),On(a))return Ne(a),!0;const v=Y(a.nodeName);if(Re(A.uponSanitizeElement,a,{tagName:v,allowedTags:V}),ke&&a.hasChildNodes()&&!Ko(a.firstElementChild)&&te(/<[/\w!]/g,a.innerHTML)&&te(/<[/\w!]/g,a.textContent)||a.nodeType===ft.progressingInstruction||ke&&a.nodeType===ft.comment&&te(/<[/\w]/g,a.data))return Ne(a),!0;if(!(d.tagCheck instanceof Function&&d.tagCheck(v))&&(!V[v]||We[v])){if(!We[v]&&Qo(v)&&(D.tagNameCheck instanceof RegExp&&te(D.tagNameCheck,v)||D.tagNameCheck instanceof Function&&D.tagNameCheck(v)))return!1;if(re&&!ue[v]){const M=z(a)||a.parentNode,Q=S(a)||a.childNodes;if(Q&&M){const q=Q.length;for(let ie=q-1;ie>=0;--ie){const $e=O(Q[ie],!0);$e.__removalCount=(a.__removalCount||0)+1,M.insertBefore($e,T(a))}}}return Ne(a),!0}return a instanceof p&&!us(a)||(v==="noscript"||v==="noembed"||v==="noframes")&&te(/<\/no(script|embed|frames)/i,a.innerHTML)?(Ne(a),!0):(oe&&a.nodeType===ft.text&&(m=a.textContent,Ft([$,ge,Se],M=>{m=ct(m,M," ")}),a.textContent!==m&&(lt(t.removed,{element:a.cloneNode()}),a.textContent=m)),Re(A.afterSanitizeElements,a,null),!1)},Zo=function(a,m,v){if(W&&(m==="id"||m==="name")&&(v in n||v in cs))return!1;if(!(k&&!ht[m]&&te(De,m))){if(!(x&&te(Be,m))){if(!(d.attributeCheck instanceof Function&&d.attributeCheck(m,a))){if(!B[m]||ht[m]){if(!(Qo(a)&&(D.tagNameCheck instanceof RegExp&&te(D.tagNameCheck,a)||D.tagNameCheck instanceof Function&&D.tagNameCheck(a))&&(D.attributeNameCheck instanceof RegExp&&te(D.attributeNameCheck,m)||D.attributeNameCheck instanceof Function&&D.attributeNameCheck(m,a))||m==="is"&&D.allowCustomizedBuiltInElements&&(D.tagNameCheck instanceof RegExp&&te(D.tagNameCheck,v)||D.tagNameCheck instanceof Function&&D.tagNameCheck(v))))return!1}else if(!bt[m]){if(!te(gt,ct(v,pt,""))){if(!((m==="src"||m==="xlink:href"||m==="href")&&a!=="script"&&Fi(v,"data:")===0&&_t[a])){if(!(P&&!te(Xe,ct(v,pt,"")))){if(v)return!1}}}}}}}return!0},Qo=function(a){return a!=="annotation-xml"&&En(a,Bt)},er=function(a){Re(A.beforeSanitizeAttributes,a,null);const{attributes:m}=a;if(!m||On(a))return;const v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:B,forceKeepAttr:void 0};let M=m.length;for(;M--;){const Q=m[M],{name:q,namespaceURI:ie,value:$e}=Q,et=Y(q),Ln=$e;let Z=q==="value"?Ln:Ui(Ln);if(v.attrName=et,v.attrValue=Z,v.keepAttr=!0,v.forceKeepAttr=void 0,Re(A.uponSanitizeAttribute,a,v),Z=v.attrValue,ye&&(et==="id"||et==="name")&&(Ge(q,a),Z=Ce+Z),ke&&te(/((--!?|])>)|<\/(style|title|textarea)/i,Z)){Ge(q,a);continue}if(et==="attributename"&&En(Z,"href")){Ge(q,a);continue}if(v.forceKeepAttr)continue;if(!v.keepAttr){Ge(q,a);continue}if(!I&&te(/\/>/i,Z)){Ge(q,a);continue}oe&&Ft([$,ge,Se],nr=>{Z=ct(Z,nr," ")});const tr=Y(a.nodeName);if(!Zo(tr,et,Z)){Ge(q,a);continue}if(_&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!ie)switch(h.getAttributeType(tr,et)){case"TrustedHTML":{Z=_.createHTML(Z);break}case"TrustedScriptURL":{Z=_.createScriptURL(Z);break}}if(Z!==Ln)try{ie?a.setAttributeNS(ie,q,Z):a.setAttribute(q,Z),On(a)?Ne(a):Io(t.removed)}catch{Ge(q,a)}}Re(A.afterSanitizeAttributes,a,null)},ds=function w(a){let m=null;const v=Yo(a);for(Re(A.beforeSanitizeShadowDOM,a,null);m=v.nextNode();)Re(A.uponSanitizeShadowNode,m,null),Jo(m),er(m),m.content instanceof r&&w(m.content);Re(A.afterSanitizeShadowDOM,a,null)};return t.sanitize=function(w){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=null,v=null,M=null,Q=null;if(vt=!w,vt&&(w="<!-->"),typeof w!="string"&&!Ko(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw ut("dirty is not a string, aborting")}else throw ut("toString is not a function");if(!t.isSupported)return w;if(Ie||Nn(a),t.removed=[],typeof w=="string"&&(me=!1),me){if(w.nodeName){const $e=Y(w.nodeName);if(!V[$e]||We[$e])throw ut("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof c)m=Xo("<!---->"),v=m.ownerDocument.importNode(w,!0),v.nodeType===ft.element&&v.nodeName==="BODY"||v.nodeName==="HTML"?m=v:m.appendChild(v);else{if(!ce&&!oe&&!le&&w.indexOf("<")===-1)return _&&H?_.createHTML(w):w;if(m=Xo(w),!m)return ce?null:H?C:""}m&&Ae&&Ne(m.firstChild);const q=Yo(me?w:m);for(;M=q.nextNode();)Jo(M),er(M),M.content instanceof r&&ds(M.content);if(me)return w;if(ce){if(Ye)for(Q=ve.call(m.ownerDocument);m.firstChild;)Q.appendChild(m.firstChild);else Q=m;return(B.shadowroot||B.shadowrootmode)&&(Q=F.call(o,Q,!0)),Q}let ie=le?m.outerHTML:m.innerHTML;return le&&V["!doctype"]&&m.ownerDocument&&m.ownerDocument.doctype&&m.ownerDocument.doctype.name&&te(Ho,m.ownerDocument.doctype.name)&&(ie="<!DOCTYPE "+m.ownerDocument.doctype.name+`>
`+ie),oe&&Ft([$,ge,Se],$e=>{ie=ct(ie,$e," ")}),_&&H?_.createHTML(ie):ie},t.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Nn(w),Ie=!0},t.clearConfig=function(){Qe=null,Ie=!1},t.isValidAttribute=function(w,a,m){Qe||Nn({});const v=Y(w),M=Y(a);return Zo(v,M,m)},t.addHook=function(w,a){typeof a=="function"&&lt(A[w],a)},t.removeHook=function(w,a){if(a!==void 0){const m=Pi(A[w],a);return m===-1?void 0:Hi(A[w],m,1)[0]}return Io(A[w])},t.removeHooks=function(w){A[w]=[]},t.removeAllHooks=function(){A=Uo()},t}var Bo=zo();const Wo={ADD_ATTR:["target","rel"]};ki();const Cn={none:"none",soft:"0 2px 8px rgba(0,0,0,0.08)",medium:"0 4px 16px rgba(0,0,0,0.12)",strong:"0 8px 32px rgba(0,0,0,0.18)","extra-strong":"0 16px 48px rgba(0,0,0,0.28)"};function ts(e,t){if(console.log("[Ourguide] applyAppearance called",{el:!!e,appearance:t}),!e){console.warn("[Ourguide] applyAppearance skipped — el is null");return}if(!t){console.warn("[Ourguide] applyAppearance skipped — appearance is null/undefined");return}const n=(c,p)=>{p!=null&&p!==""?(console.log(`[Ourguide] setProperty ${c} =`,String(p)),e.style.setProperty(c,String(p))):console.log(`[Ourguide] skipping ${c} — value is`,p)},{colors:o,typography:i,dimensions:r,shadow:s}=t;o&&(n("--og2-bg",o.background),n("--og2-border",o.border),n("--og2-text",o.text),n("--og2-messages-bg",o.messagesBackground),n("--og2-agent-bubble",o.agentBubble),n("--og2-agent-bubble-text",o.agentBubbleText),n("--og2-user-bubble",o.userBubble),n("--og2-user-bubble-text",o.userBubbleText),n("--og2-user-bubble-border",o.userBubbleBorder),n("--og2-send-bg",o.sendButtonBackground),n("--og2-send-icon",o.sendButtonIcon),n("--og2-send-inactive-bg",o.sendButtonInactiveBackground)),i&&(n("--og2-font",i.fontFamily),n("--og2-font-weight",i.fontWeight),n("--og2-line-height",i.lineHeight),i.fontSize&&n("--og2-font-size",`${i.fontSize}px`),i.headerSize&&n("--og2-header-size",`${i.headerSize}px`),typeof i.letterSpacing=="number"&&n("--og2-letter-spacing",`${i.letterSpacing}px`)),r&&(r.width&&n("--og2-width",`${r.width}px`),r.maxHeight&&n("--og2-height",`${r.maxHeight}px`),r.borderRadius!==void 0&&n("--og2-radius",`${r.borderRadius}px`),r.padding!==void 0&&n("--og2-padding",`${r.padding}px`)),s&&(console.log("[Ourguide] shadow:",s,"→",Cn[s]??"(not in SHADOW_MAP, skipped)"),Cn[s]&&n("--og2-shadow",Cn[s])),console.log("[Ourguide] applyAppearance done. container inline styles:",e.style.cssText)}function ns(e,t){if(console.log("[Ourguide] applyBubble called",{el:e,bubble:t}),!e||!t){console.warn("[Ourguide] applyBubble skipped — el or bubble is falsy",{el:e,bubble:t});return}const n=(o,i)=>{i!=null&&i!==""&&e.style.setProperty(o,String(i))};t.background?n("--og2-bubble-bg",t.background):console.log("[Ourguide] bubble.background falsy — skipping --og2-bubble-bg"),t.border?n("--og2-bubble-border",t.border):console.log("[Ourguide] bubble.border falsy — skipping --og2-bubble-border"),t.icon?n("--og2-bubble-icon",t.icon):console.log("[Ourguide] bubble.icon falsy — skipping --og2-bubble-icon"),t.buttonSize?n("--og2-bubble-size",`${t.buttonSize}px`):console.log("[Ourguide] bubble.buttonSize falsy — skipping --og2-bubble-size"),t.iconSize?n("--og2-bubble-icon-size",`${t.iconSize}px`):console.log("[Ourguide] bubble.iconSize falsy — skipping --og2-bubble-icon-size"),t.right!==void 0?n("--og2-bubble-right",`${t.right}px`):console.log("[Ourguide] bubble.right undefined — skipping --og2-bubble-right"),t.bottom!==void 0?n("--og2-bubble-bottom",`${t.bottom}px`):console.log("[Ourguide] bubble.bottom undefined — skipping --og2-bubble-bottom"),console.log("[Ourguide] applyBubble done. container inline styles:",e.style.cssText)}function os({productId:e,apiUrl:t}){const[n,o]=no(pr,fr),i=Ee(null),r=Ee(null),s=Ee(null),c=Ee(null),p=Ee(null),u=Ee(null),[g,l]=he(""),[b,h]=he([]),[y,O]=he([]),[R,T]=he(!1),[S,z]=he(!1),_=Ee(null),[C,X]=he("Assistant"),[K,ve]=he("Hi! What can I do for you today?"),[pe,F]=he([]),[A,$]=he(null),[ge,Se]=he(null),De=Ee(!1),Be=Ee(null),Xe=Ee(null),pt=pe.filter(d=>{var x;return!!((x=d==null?void 0:d.buttonLabel)!=null&&x.trim())}).map(d=>{var x;return{...d,message:((x=d.message)==null?void 0:x.trim())||d.buttonLabel}});Fe(()=>{const d=I=>{const oe=I.detail;$(oe)},x=()=>$(null),k=I=>{const oe=I.detail;Se(oe)},P=()=>Se(null);return de.addEventListener("approval-requested",d),de.addEventListener("approval-dismissed",x),de.addEventListener("workflow-approval-requested",k),de.addEventListener("workflow-approval-dismissed",P),()=>{de.removeEventListener("approval-requested",d),de.removeEventListener("approval-dismissed",x),de.removeEventListener("workflow-approval-requested",k),de.removeEventListener("workflow-approval-dismissed",P),Dr(),Fr()}},[]);const Bt=rt(d=>{Hr(d),Se(null),d&&(De.current=!0)},[]),gt=rt(d=>{$r(d),$(null),Le()},[]),V=rt(()=>{var d;(d=Xe.current)==null||d.abort(),Xe.current=null,o({type:"STOP_STREAMING"})},[]);Fe(()=>{console.log("[Ourguide] fetchConfig called",{apiUrl:t,productId:e}),mr(t,e).then(d=>{var x,k,P,I;console.log("[Ourguide] ── full config received ──",JSON.stringify(d,null,2)),console.log("[Ourguide] config.appearance:",d.appearance),console.log("[Ourguide] config.bubble:",d.bubble),console.log("[Ourguide] config.identity:",d.identity),console.log("[Ourguide] config.suggestions:",d.suggestions),console.log("[Ourguide] containerRef.current:",c.current),ts(c.current,d.appearance),ns(c.current,d.bubble),(x=d.identity)!=null&&x.name?(console.log("[Ourguide] setting agentName →",d.identity.name),X(d.identity.name)):console.log("[Ourguide] config.identity?.name is falsy, keeping default. identity =",d.identity),(k=d.identity)!=null&&k.welcomeMessage?(console.log("[Ourguide] setting welcomeMsg →",d.identity.welcomeMessage),ve(d.identity.welcomeMessage)):console.log("[Ourguide] config.identity?.welcomeMessage is falsy, keeping default."),(P=d.suggestions)!=null&&P.length?(console.log("[Ourguide] setting suggestions →",d.suggestions),F(d.suggestions)):console.log("[Ourguide] no suggestions in config (length=",(I=d.suggestions)==null?void 0:I.length,")")}).catch(d=>{console.error("[Ourguide] fetchConfig FAILED:",d)})},[t,e]);const mt=rt(()=>{sn(e),s.current=null,o({type:"FINISH_STREAMING"}),o({type:"CLEAR_MESSAGES"})},[e]);Fe(()=>{s.current=Ir(e);const d=Or(e);d.length>0&&o({type:"LOAD_MESSAGES",messages:d})},[e]),Fe(()=>{const d=x=>{const k=x.detail;k!=null&&k.productId&&k.productId!==e||mt()};return window.addEventListener("og2:resetUser",d),()=>{window.removeEventListener("og2:resetUser",d)}},[e,mt]),Fe(()=>{!n.isStreaming&&n.messages.length>0&&Nr(e,n.messages)},[n.messages,n.isStreaming,e]),Fe(()=>{n.isOpen&&!n.isStreaming&&setTimeout(()=>{var d;return(d=i.current)==null?void 0:d.focus()},50)},[n.isOpen,n.isStreaming]),Fe(()=>{var d;(d=r.current)==null||d.scrollIntoView({behavior:"smooth"})},[n.messages,A,ge]);const B=rt(async d=>{const x=d.trim(),k=[...b];if(!x&&k.length===0||n.isStreaming)return;l(""),h([]),i.current&&(i.current.style.height="auto");const P=k.length>0?k.map(H=>`[${H.name}]`).join(" "):"",I=[x,P].filter(Boolean).join(" "),oe=ao();o({type:"ADD_USER_MESSAGE",id:oe,content:I}),Rr();let ke=[];if(k.length>0)try{ke=await Promise.all(k.map(async H=>({name:H.name,type:H.type,data:await gr(H)})))}catch{o({type:"SET_ERROR",error:"Failed to read attached files"});return}const le=[...n.messages.map(H=>({role:H.role,content:H.content})),{role:"user",content:x||"Please review the attached file(s)."}],Ie=ao();o({type:"START_STREAMING",id:Ie});const Ae=new Map,ce=new Map,Ye=H=>({onTextDelta:W=>{o({type:"APPEND_TEXT",text:W})},onToolCall:(W,ye,Ce,re)=>{const me={id:W,name:ye,args:Ce,status:"calling",providerMetadata:re};Ae.set(W,me),o({type:"ADD_TOOL_CALL",toolCall:me}),vr(ye)&&ce.set(W,{name:ye,args:Ce,providerMetadata:re})},onToolResult:(W,ye)=>{o({type:"SET_TOOL_RESULT",toolCallId:W,result:ye});const Ce=Ae.get(W);if((Ce==null?void 0:Ce.name)==="navigate_to_page"){const re=ye;re.route&&(re.confidence??0)>=.5&&Sr(re.route,re.params)}},onError:W=>{o({type:"SET_ERROR",error:W})}});try{const H=new AbortController;Xe.current=H;const{signal:W}=H,ye=rn(e),{stream:Ce,conversationId:re}=await lo(t,e,le,ye,s.current||void 0,ke,W,De.current,Be.current||void 0);re&&!s.current&&(s.current=re,Lr(e,re));const me=50;let we=le,ue=Ce,G=0,_t=!1;for(;;){if(W.aborted){console.log(`[Ourguide] ── abort detected before round ${G+1}`);break}G++;let Ke=!1;if(ce.clear(),console.log(`[Ourguide] ── continuation round ${G}/${me} — parsing stream`),await yr(ue,{...Ye(!0),onError:L=>{Ke=!0,console.error(`[Ourguide] round ${G} stream error:`,L),o({type:"SET_ERROR",error:L})},onFinish:()=>{console.log(`[Ourguide] round ${G} stream finished`)}},W),W.aborted){console.log(`[Ourguide] ── abort detected after round ${G} stream parse`);break}const bt=[...ce.values()].map(L=>L.name);if(console.log(`[Ourguide] round ${G} parsed — hadError=${Ke}, pendingClientCalls=${ce.size}`,bt),Ke){console.warn(`[Ourguide] stopping: stream error in round ${G}`);break}if(ce.size===0){console.log(`[Ourguide] stopping: no client-side tool calls in round ${G} — LLM responded with text or server-only tools`),o({type:"FINISH_STREAMING"});break}if(G>=me){console.warn(`[Ourguide] stopping: hit max continuation rounds (${me})`),o({type:"FINISH_STREAMING"});break}const Je=[];for(const[L,{name:J,args:xe,providerMetadata:vt}]of ce){console.log(`[Ourguide] round ${G} executing handler: ${J} (${L})`,xe);const yt=br(J);let Me;try{Me=await yt(xe),console.log(`[Ourguide] round ${G} handler ${J} (${L}) succeeded`,Object.keys(Me))}catch(Pe){console.error(`[Ourguide] round ${G} handler ${J} (${L}) threw:`,Pe),Me={status:"error",error:Pe instanceof Error?Pe.message:"Handler failed"}}o({type:"SET_TOOL_RESULT",toolCallId:L,result:Me}),Je.push({toolCallId:L,toolName:J,args:xe,result:Me,providerMetadata:vt}),["perform_action","batch_fill_form","capture_screen_for_action"].includes(J)&&(_t=!0),J==="run_workflow"&&Me.approved&&(De.current=!0,Be.current=Me.workflowId||xe.workflowId,console.log("[Ourguide] workflow approved, setting workflowInProgress, workflowId:",Be.current))}we=[...we,{role:"assistant",content:Je.map(L=>({type:"tool-call",toolCallId:L.toolCallId,toolName:L.toolName,input:L.args,...L.providerMetadata?{providerOptions:L.providerMetadata}:{}}))},{role:"tool",content:Je.map(L=>({type:"tool-result",toolCallId:L.toolCallId,toolName:L.toolName,output:{type:"json",value:L.result}}))}],console.log(`[Ourguide] round ${G} sending continuation with ${we.length} messages`);const{stream:Ze}=await lo(t,e,we,void 0,s.current||void 0,void 0,W,De.current,Be.current||void 0);console.log(`[Ourguide] round ${G} continuation stream received, entering round ${G+1}`),ue=Ze}console.log(`[Ourguide] ── continuation loop ended after ${G} round(s)`),De.current&&_t&&(De.current=!1,Be.current=null,console.log("[Ourguide] workflow execution complete, resetting state"))}catch(H){if(H instanceof DOMException&&H.name==="AbortError"){console.log("[Ourguide] request aborted by user");return}console.error("[Ourguide] handleSubmit outer catch:",H);const W=H instanceof Error?H.message:"Something went wrong";o({type:"FINISH_STREAMING"}),o({type:"SET_ERROR",error:W})}finally{Xe.current=null}},[n.messages,n.isStreaming,t,e,b]);function Wt(d){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),B(g))}function D(){if(n.messages.length>0){const d=n.messages.find(P=>P.role==="user"),x=d?d.content.slice(0,30):"Conversation",k=n.messages[n.messages.length-1].content.slice(0,50);O(P=>[{id:Date.now(),title:x,preview:k,messages:[...n.messages]},...P])}sn(e),s.current=null,o({type:"CLEAR_MESSAGES"}),T(!1)}function We(d){o({type:"LOAD_MESSAGES",messages:d.messages}),O(x=>x.filter(k=>k.id!==d.id)),T(!1)}function ht(){var P;const d=window.SpeechRecognition||window.webkitSpeechRecognition;if(!d)return;if(S){(P=_.current)==null||P.stop(),z(!1);return}const x=new d;x.lang="en-US",x.interimResults=!0,x.continuous=!0;const k=g.trimEnd();x.onresult=I=>{let oe="",ke="";for(let Ie=0;Ie<I.results.length;Ie++){const Ae=I.results[Ie];Ae.isFinal?oe+=Ae[0].transcript:ke+=Ae[0].transcript}const le=(oe+ke).trim();l(k?`${k} ${le}`:le)},x.onend=()=>z(!1),x.onerror=()=>z(!1),_.current=x,x.start(),z(!0)}return f("div",{className:"og2-container",ref:c,children:[n.isOpen&&f("div",{className:"og2-panel",children:[f("div",{className:"og2-panel-header",children:[f("span",{className:"og2-panel-title",children:C}),f("div",{className:"og2-header-actions",children:[f("button",{className:"og2-action-btn",onClick:D,"aria-label":"New conversation",title:"New conversation",children:f("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f("path",{d:"M12 5v14M5 12h14"})})}),f("button",{className:"og2-action-btn",onClick:()=>T(d=>!d),"aria-label":"Recent conversations",title:"Recent conversations",children:f("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),f("path",{d:"M3 3v5h5"}),f("path",{d:"M12 7v5l4 2"})]})}),f("button",{className:"og2-close-btn",onClick:()=>o({type:"CLOSE"}),"aria-label":"Close",children:f("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:f("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),R&&f("div",{className:"og2-history-panel",children:[f("div",{className:"og2-history-header",children:[f("span",{className:"og2-history-title",children:"Recent Conversations"}),f("button",{className:"og2-action-btn",onClick:()=>T(!1),"aria-label":"Close history",children:f("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:f("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),f("div",{className:"og2-history-list",children:y.length===0?f("p",{className:"og2-history-empty",children:"No conversations yet"}):y.map(d=>f("button",{className:"og2-history-item",onClick:()=>We(d),children:[f("span",{className:"og2-history-item-title",children:d.title}),f("span",{className:"og2-history-item-preview",children:d.preview})]},d.id))})]}),f("div",{className:"og2-messages",children:f("div",{className:"og2-messages-inner",children:[f("div",{className:"og2-message og2-message-assistant",children:f("div",{className:"og2-bubble og2-md",dangerouslySetInnerHTML:{__html:Bo.sanitize(No(K),Wo)}})}),n.messages.map(d=>{var x;return d.isStreaming&&!d.content&&!((x=d.toolCalls)!=null&&x.length)?f("div",{className:"og2-message og2-message-assistant",children:f("span",{className:"og2-shimmer-text",children:"Thinking"})},d.id):f("div",{className:`og2-message og2-message-${d.role}`,children:d.role==="assistant"?f("div",{className:"og2-assistant-content",children:[d.toolCalls&&d.toolCalls.length>0&&f(rs,{toolCalls:d.toolCalls,awaitingResponse:d.isStreaming&&!d.content,hasContent:!!d.content}),d.content&&f("div",{className:"og2-bubble og2-md",children:f("span",{dangerouslySetInnerHTML:{__html:Bo.sanitize(No(d.content),Wo)}})})]}):f("div",{className:"og2-bubble",children:d.content})},d.id)}),A&&f("div",{className:"og2-message og2-message-assistant og2-message-full",children:f("div",{className:"og2-approval-card",children:[f("div",{className:"og2-approval-header",children:f("span",{className:"og2-approval-label",children:"Action requested"})}),f("p",{className:"og2-approval-desc",children:"The assistant wants to take actions on this page."}),f("div",{className:"og2-approval-actions",children:[f("button",{className:"og2-approval-deny",onClick:()=>gt(!1),children:"Deny"}),f("button",{className:"og2-approval-allow",onClick:()=>gt(!0),children:"Allow"})]})]})}),ge&&f("div",{className:"og2-message og2-message-assistant og2-message-full",children:f("div",{className:"og2-approval-card",children:[f("div",{className:"og2-approval-header",children:f("span",{className:"og2-approval-label",children:"Workflow"})}),f("p",{className:"og2-approval-desc",children:["Run workflow: ",f("strong",{children:ge.workflowTitle}),"?"]}),f("div",{className:"og2-approval-actions",children:[f("button",{className:"og2-approval-deny",onClick:()=>Bt(!1),children:"Cancel"}),f("button",{className:"og2-approval-allow",onClick:()=>Bt(!0),children:"Run workflow"})]})]})}),n.error&&f("div",{className:"og2-message og2-message-error",children:f("div",{className:"og2-bubble",children:n.error})}),f("div",{ref:r})]})}),f("div",{className:"og2-footer",children:[pt.length>0&&n.messages.length===0&&f("div",{className:"og2-suggestions",children:pt.map((d,x)=>f("div",{className:"og2-suggestion-row",children:[f("span",{className:"og2-suggestion-chip",title:d.message,children:d.message}),f("button",{className:"og2-suggestion-btn",onClick:()=>B(d.message),"aria-label":d.buttonLabel,children:d.buttonLabel})]},x))}),f("div",{className:"og2-powered-by",children:[f("svg",{className:"og2-powered-by-logo",width:"20",height:"20",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f("circle",{cx:"20",cy:"20",r:"9",stroke:"#38bdf8",strokeWidth:"2.2",fill:"none"}),f("circle",{cx:"20",cy:"20",r:"11",stroke:"#38bdf8",strokeWidth:"0.6",fill:"none",opacity:"0.25"})]}),f("p",{className:"og2-powered-by-text",children:"Powered by Ourguide"})]}),f("div",{className:"og2-input-area",children:[b.length>0&&f("div",{className:"og2-file-chips",children:b.map((d,x)=>f("span",{className:"og2-file-chip",children:[f("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),f("polyline",{points:"13 2 13 9 20 9"})]}),d.name.length>18?`${d.name.slice(0,16)}…`:d.name,f("button",{className:"og2-file-chip-remove",onClick:()=>h(k=>k.filter((P,I)=>I!==x)),"aria-label":`Remove ${d.name}`,children:"×"})]},x))}),f("textarea",{ref:i,className:"og2-input",rows:1,value:g,onInput:d=>{l(d.target.value),d.target.style.height="auto",d.target.style.height=`${d.target.scrollHeight}px`},onKeyDown:Wt,placeholder:"Message..."}),f("div",{className:"og2-input-toolbar",children:[f("div",{className:"og2-input-toolbar-left",children:[f("button",{className:"og2-upload-btn",onClick:()=>{var d;return(d=u.current)==null?void 0:d.click()},"aria-label":"Attach file",title:"Attach file",children:f("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.42 16.41a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),f("input",{ref:u,type:"file",multiple:!0,accept:"image/*,.pdf,.doc,.docx,.txt,.csv,.md",style:{display:"none"},onChange:d=>{const k=Array.from(d.target.files??[]),P=k.filter(I=>I.size<=20971520);if(P.length<k.length){const I=k.length-P.length;o({type:"SET_ERROR",error:`${I} file${I>1?"s":""} exceeded the 20MB size limit and ${I>1?"were":"was"} skipped`})}P.length>0&&h(I=>[...I,...P]),d.target.value=""}}),f("button",{className:`og2-mic-btn${S?" og2-mic-active":""}`,onClick:ht,"aria-label":"Voice input",title:"Voice input",children:f("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f("rect",{x:"9",y:"2",width:"6",height:"11",rx:"3"}),f("path",{d:"M5 10a7 7 0 0 0 14 0M12 19v3M8 22h8"})]})})]}),f("button",{className:`og2-send-btn${n.isStreaming?" og2-stop-active":g.trim()||b.length>0?" og2-send-active":""}`,onClick:n.isStreaming?V:()=>B(g),"aria-label":n.isStreaming?"Stop generating":"Send message",title:n.isStreaming?"Stop generating":"Send message",children:n.isStreaming?f("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:f("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}):f("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:f("path",{d:"M12 19V5M5 12l7-7 7 7"})})})]})]})]})]}),f("button",{ref:p,className:"og2-trigger",onClick:()=>o(n.isOpen?{type:"CLOSE"}:{type:"OPEN"}),"aria-label":n.isOpen?"Close assistant":"Open assistant",children:n.isOpen?f("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:f("path",{d:"M6 6L18 18M18 6L6 18"})}):f("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})})})]})}function rs({toolCalls:e,awaitingResponse:t,hasContent:n}){const[o,i]=he(!1),r=e[e.length-1],s=e.length,c=r.status==="calling"||t&&(r.name==="capture_screen"||r.name==="capture_screen_for_action")&&r.status==="done",p=!c&&n,u=f("svg",{className:"og2-step-check",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:f("path",{d:"M20 6L9 17l-5-5"})});return p?f("div",{className:"og2-tool-steps",children:[f("button",{className:"og2-tool-summary",onClick:()=>i(!o),children:[f("span",{className:"og2-tool-step-done",children:[s," step",s!==1?"s":"",u]}),f("svg",{className:`og2-tool-summary-chevron ${o?"og2-chevron-open":""}`,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:f("path",{d:"M9 18l6-6-6-6"})})]}),o&&e.map(g=>f("div",{className:"og2-tool-step",children:f("span",{className:"og2-tool-step-done",children:[Go(g,!1),u]})},g.id))]}):f("div",{className:"og2-tool-steps",children:f("div",{className:"og2-tool-current",children:f("span",{className:c?"og2-shimmer-text":"og2-shimmer-fade",children:[Go(r,t),!c&&u]})})})}function Go(e,t){var n,o,i;if(e.name==="navigate_to_page"){if(e.status==="calling")return"Finding the right page...";const r=e.result;return r!=null&&r.route?`Navigated to ${r.route}`:"No matching page found"}if(e.name==="capture_screen")return e.status==="calling"||t?"Looking at your screen...":"Screen captured";if(e.name==="capture_screen_for_action")return e.status==="calling"||t?"Analyzing page elements...":"Page elements captured";if(e.name==="perform_action"){const r=((n=e.args)==null?void 0:n.description)||"Performing action";if(e.status==="calling")return r+"...";const s=e.result;return s!=null&&s.denied?"Action denied":(s==null?void 0:s.success)===!1?"Action failed":r}if(e.name==="batch_fill_form"){const r=((o=e.args)==null?void 0:o.description)||"Filling form";if(e.status==="calling")return r+"...";const s=e.result;return s!=null&&s.denied?"Form fill denied":(s==null?void 0:s.success)===!1?"Some fields failed":r}if(e.name==="plan_actions")return e.status==="calling"?"Planning actions...":"Plan ready";if(e.name==="run_workflow"){const r=((i=e.args)==null?void 0:i.workflowTitle)||"workflow";if(e.status==="calling")return`Preparing to run "${r}"...`;const s=e.result;return(s==null?void 0:s.approved)===!1?`Workflow "${r}" declined`:`Running workflow "${r}"`}return e.name}const is=`/* Ourguide-B2B Widget - All classes prefixed with og2- */

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
  max-width: 85%;
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

/* ── User bubble: MongoDB dark green bg, white text ── */
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

.og2-message-error {
  justify-content: flex-start;
}

.og2-message-error .og2-bubble {
  display: inline-block;
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
  padding: 10px 16px;
  border-radius: 24px;
  max-width: 80%;
  font-size: 12px;
}

/* ── Shimmer "Thinking" text ── */
.og2-shimmer-text {
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
  animation: og2-shimmer 1.5s ease-in-out infinite;
}

@keyframes og2-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
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

/* ── Footer ── */
.og2-footer {
  padding: 8px 16px 16px;
  background: var(--og2-bg, #ffffff);
  flex-shrink: 0;
}

/* ── Powered by ── */
.og2-powered-by {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin-bottom: 4px;
}

.og2-powered-by-logo {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.og2-powered-by-text {
  font-size: 12px;
  font-weight: 700;
  color: #6b7280;
  text-align: center;
}

/* ── Input wrapper: pill with border, two-row layout ── */
.og2-input-area {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 16px;
  padding: 10px 8px 8px 14px;
  border: 1px solid var(--og2-border, #e4e4e7);
  background: var(--og2-bg, #ffffff);
}

/* ── Bottom toolbar: icons left, send right ── */
.og2-input-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.og2-input-toolbar-left {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: -6px;
}

/* ── Grows to fill; stacks file chips above textarea ── */
.og2-input-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* ── File chips row ── */
.og2-file-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding-top: 4px;
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
  font-size: var(--og2-font-size, 14px);
  font-family: var(--og2-font, inherit);
  font-weight: var(--og2-font-weight, 400);
  color: var(--og2-text, #18181b);
  background: transparent;
  max-height: 120px;
  overflow-y: auto;
  line-height: var(--og2-line-height, 1.5);
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
}
.og2-input::-webkit-scrollbar {
  width: 4px;
}
.og2-input::-webkit-scrollbar-track {
  background: transparent;
}
.og2-input::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

.og2-input::placeholder {
  color: #a1a1aa;
}

/* ── Icon-only action buttons (mic, upload) ── */
.og2-mic-btn,
.og2-upload-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: none;
  color: #52525b;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  transition: color 0.15s ease;
}

.og2-mic-btn:hover,
.og2-upload-btn:hover {
  color: var(--og2-text, #18181b);
}

.og2-mic-btn.og2-mic-active {
  color: #ef4444;
}

/* ── Send button: configurable via CSS variables ── */
.og2-send-btn {
  width: 36px;
  height: 36px;
  padding: 0;
  background: var(--og2-send-inactive-bg, #d1d5db);
  color: var(--og2-send-icon, #ffffff);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}

.og2-send-btn:hover {
  transform: scale(1.06);
}

.og2-send-btn.og2-send-active {
  background: var(--og2-send-bg, #2563eb);
  color: var(--og2-send-icon, #ffffff);
}

.og2-send-btn.og2-stop-active {
  background: var(--og2-send-inactive-bg, #d1d5db);
  color: var(--og2-send-icon, #ffffff);
}

.og2-send-btn.og2-stop-active:hover {
  transform: none;
}

/* ── Spinner ── */
/* ── Suggestions (shown before first user message) ── */
.og2-suggestions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
}

.og2-suggestion-row {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

/* Message preview chip */
.og2-suggestion-chip {
  flex: 1;
  min-width: 0;
  background: var(--og2-agent-bubble, #f4f4f5);
  border: 1px solid var(--og2-border, #e4e4e7);
  color: var(--og2-agent-bubble-text, #18181b);
  font-size: 13px;
  padding: 6px 10px;
  border-radius: 14px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Action button (uses the label) */
.og2-suggestion-btn {
  flex-shrink: 0;
  background: var(--og2-user-bubble, #1e3a5f);
  border: 1px solid var(--og2-user-bubble-border, #1e3a5f);
  color: var(--og2-user-bubble-text, #ffffff);
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 14px;
  cursor: pointer;
  transition: filter 0.15s ease, transform 0.15s ease;
}

.og2-suggestion-btn:hover {
  filter: brightness(0.95);
  transform: translateY(-1px);
}

.og2-suggestion-btn:active {
  transform: translateY(0px);
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

.og2-send-btn .og2-spinner-sm {
  border-color: rgba(255, 255, 255, 0.3);
  border-top-color: white;
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
`;(function(){const e=document.currentScript??document.querySelector('script[data-product-id][src*="ourguide-b2b-widget"]');if(!e){console.error("[Ourguide-B2B] Could not find script element");return}const t=e.dataset.productId||"",n=e.dataset.apiUrl??"http://localhost:3000";if(!t){console.error("[Ourguide-B2B] data-product-id is required");return}async function o(l,b){try{if(l==="registerTools"){b&&typeof b=="object"&&co(b);return}if(l==="identify"){const h=b??{};if(!h.token||typeof h.token!="string"||!h.token.trim()){console.warn("[Ourguide-B2B] identify: token is required");return}const y=rn(t);await hr(n,t,y,h.token,h.name);return}if(l==="resetUser"){const h=rn(t);await _r(n,t,h),Cr(t),sn(t),window.dispatchEvent(new CustomEvent("og2:resetUser",{detail:{productId:t}}));return}}catch(h){const y=h instanceof Error?h.message:"Unknown error";console.warn(`[Ourguide-B2B] ${l} failed: ${y}`)}}const i=window,r=Array.isArray(i.ourguide)?i.ourguide:[];i.ourguide=(l,b)=>{o(l,b)};for(const l of r)Array.isArray(l)&&(l[0]==="identify"||l[0]==="resetUser"||l[0]==="registerTools")&&o(l[0],l[1]);const s=document.createElement("link");s.rel="stylesheet",s.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",document.head.appendChild(s);const c=document.createElement("div");c.id="og2-widget-root",document.body.appendChild(c);const p=c.attachShadow({mode:"open"}),u=document.createElement("style");u.textContent=is,p.appendChild(u);const g=document.createElement("div");p.appendChild(g),lr(Hn(os,{productId:t,apiUrl:n}),g)})()})();
