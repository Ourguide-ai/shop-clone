(function(){"use strict";var dt,N,Nn,Ie,On,Ln,Mn,In,Ft,Ut,zt,Je={},Rn=[],tr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ft=Array.isArray;function ve(e,t){for(var n in t)e[n]=t[n];return e}function Bt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function $n(e,t,n){var o,r,i,s={};for(i in t)i=="key"?o=t[i]:i=="ref"?r=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?dt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return pt(e,s,o,r,null)}function pt(e,t,n,o,r){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Nn,__i:-1,__u:0};return r==null&&N.vnode!=null&&N.vnode(i),i}function gt(e){return e.children}function mt(e,t){this.props=e,this.context=t}function ze(e,t){if(t==null)return e.__?ze(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ze(e):null}function Dn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Dn(e)}}function Pn(e){(!e.__d&&(e.__d=!0)&&Ie.push(e)&&!ht.__r++||On!=N.debounceRendering)&&((On=N.debounceRendering)||Ln)(ht)}function ht(){for(var e,t,n,o,r,i,s,c=1;Ie.length;)Ie.length>c&&Ie.sort(Mn),e=Ie.shift(),c=Ie.length,e.__d&&(n=void 0,o=void 0,r=(o=(t=e).__v).__e,i=[],s=[],t.__P&&((n=ve({},o)).__v=o.__v+1,N.vnode&&N.vnode(n),Wt(t.__P,n,o,t.__n,t.__P.namespaceURI,32&o.__u?[r]:null,i,r??ze(o),!!(32&o.__u),s),n.__v=o.__v,n.__.__k[n.__i]=n,Bn(i,n,s),o.__e=o.__=null,n.__e!=r&&Dn(n)));ht.__r=0}function Hn(e,t,n,o,r,i,s,c,f,d,h){var l,b,m,v,O,$,S,k=o&&o.__k||Rn,U=t.length;for(f=nr(n,t,k,f,U),l=0;l<U;l++)(m=n.__k[l])!=null&&(b=m.__i==-1?Je:k[m.__i]||Je,m.__i=l,$=Wt(e,m,b,r,i,s,c,f,d,h),v=m.__e,m.ref&&b.ref!=m.ref&&(b.ref&&jt(b.ref,null,m),h.push(m.ref,m.__c||v,m)),O==null&&v!=null&&(O=v),(S=!!(4&m.__u))||b.__k===m.__k?f=Fn(m,f,e,S):typeof m.type=="function"&&$!==void 0?f=$:v&&(f=v.nextSibling),m.__u&=-7);return n.__e=O,f}function nr(e,t,n,o,r){var i,s,c,f,d,h=n.length,l=h,b=0;for(e.__k=new Array(r),i=0;i<r;i++)(s=t[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[i]=pt(null,s,null,null,null):ft(s)?s=e.__k[i]=pt(gt,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[i]=pt(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[i]=s,f=i+b,s.__=e,s.__b=e.__b+1,c=null,(d=s.__i=or(s,n,f,l))!=-1&&(l--,(c=n[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(r>h?b--:r<h&&b++),typeof s.type!="function"&&(s.__u|=4)):d!=f&&(d==f-1?b--:d==f+1?b++:(d>f?b--:b++,s.__u|=4))):e.__k[i]=null;if(l)for(i=0;i<h;i++)(c=n[i])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=ze(c)),Gn(c,c));return o}function Fn(e,t,n,o){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=Fn(r[i],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=ze(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function or(e,t,n,o){var r,i,s,c=e.key,f=e.type,d=t[n],h=d!=null&&(2&d.__u)==0;if(d===null&&c==null||h&&c==d.key&&f==d.type)return n;if(o>(h?1:0)){for(r=n-1,i=n+1;r>=0||i<t.length;)if((d=t[s=r>=0?r--:i++])!=null&&(2&d.__u)==0&&c==d.key&&f==d.type)return s}return-1}function Un(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||tr.test(t)?n:n+"px"}function _t(e,t,n,o,r){var i,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Un(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||Un(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(In,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o?n.u=o.u:(n.u=Ft,e.addEventListener(t,i?zt:Ut,i)):e.removeEventListener(t,i?zt:Ut,i);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function zn(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Ft++;else if(t.t<n.u)return;return n(N.event?N.event(t):t)}}}function Wt(e,t,n,o,r,i,s,c,f,d){var h,l,b,m,v,O,$,S,k,U,_,C,j,X,fe,ae,P,A=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(f=!!(32&n.__u),i=[c=t.__e=n.__e]),(h=N.__b)&&h(t);e:if(typeof A=="function")try{if(S=t.props,k="prototype"in A&&A.prototype.render,U=(h=A.contextType)&&o[h.__c],_=h?U?U.props.value:h.__:o,n.__c?$=(l=t.__c=n.__c).__=l.__E:(k?t.__c=l=new A(S,_):(t.__c=l=new mt(S,_),l.constructor=A,l.render=ir),U&&U.sub(l),l.state||(l.state={}),l.__n=o,b=l.__d=!0,l.__h=[],l._sb=[]),k&&l.__s==null&&(l.__s=l.state),k&&A.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=ve({},l.__s)),ve(l.__s,A.getDerivedStateFromProps(S,l.__s))),m=l.props,v=l.state,l.__v=t,b)k&&A.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),k&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(k&&A.getDerivedStateFromProps==null&&S!==m&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(S,_),t.__v==n.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(S,l.__s,_)===!1){for(t.__v!=n.__v&&(l.props=S,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(D){D&&(D.__=t)}),C=0;C<l._sb.length;C++)l.__h.push(l._sb[C]);l._sb=[],l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(S,l.__s,_),k&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(m,v,O)})}if(l.context=_,l.props=S,l.__P=e,l.__e=!1,j=N.__r,X=0,k){for(l.state=l.__s,l.__d=!1,j&&j(t),h=l.render(l.props,l.state,l.context),fe=0;fe<l._sb.length;fe++)l.__h.push(l._sb[fe]);l._sb=[]}else do l.__d=!1,j&&j(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++X<25);l.state=l.__s,l.getChildContext!=null&&(o=ve(ve({},o),l.getChildContext())),k&&!b&&l.getSnapshotBeforeUpdate!=null&&(O=l.getSnapshotBeforeUpdate(m,v)),ae=h,h!=null&&h.type===gt&&h.key==null&&(ae=Wn(h.props.children)),c=Hn(e,ft(ae)?ae:[ae],t,n,o,r,i,s,c,f,d),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),$&&(l.__E=l.__=null)}catch(D){if(t.__v=null,f||i!=null)if(D.then){for(t.__u|=f?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,t.__e=c}else{for(P=i.length;P--;)Bt(i[P]);Gt(t)}else t.__e=n.__e,t.__k=n.__k,D.then||Gt(t);N.__e(D,t,n)}else i==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):c=t.__e=rr(n.__e,t,n,o,r,i,s,f,d);return(h=N.diffed)&&h(t),128&t.__u?void 0:c}function Gt(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Gt)}function Bn(e,t,n){for(var o=0;o<n.length;o++)jt(n[o],n[++o],n[++o]);N.__c&&N.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(i){i.call(r)})}catch(i){N.__e(i,r.__v)}})}function Wn(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ft(e)?e.map(Wn):ve({},e)}function rr(e,t,n,o,r,i,s,c,f){var d,h,l,b,m,v,O,$=n.props||Je,S=t.props,k=t.type;if(k=="svg"?r="http://www.w3.org/2000/svg":k=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((m=i[d])&&"setAttribute"in m==!!k&&(k?m.localName==k:m.nodeType==3)){e=m,i[d]=null;break}}if(e==null){if(k==null)return document.createTextNode(S);e=document.createElementNS(r,k,S.is&&S),c&&(N.__m&&N.__m(t,i),c=!1),i=null}if(k==null)$===S||c&&e.data==S||(e.data=S);else{if(i=i&&dt.call(e.childNodes),!c&&i!=null)for($={},d=0;d<e.attributes.length;d++)$[(m=e.attributes[d]).name]=m.value;for(d in $)if(m=$[d],d!="children"){if(d=="dangerouslySetInnerHTML")l=m;else if(!(d in S)){if(d=="value"&&"defaultValue"in S||d=="checked"&&"defaultChecked"in S)continue;_t(e,d,null,m,r)}}for(d in S)m=S[d],d=="children"?b=m:d=="dangerouslySetInnerHTML"?h=m:d=="value"?v=m:d=="checked"?O=m:c&&typeof m!="function"||$[d]===m||_t(e,d,m,$[d],r);if(h)c||l&&(h.__html==l.__html||h.__html==e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(l&&(e.innerHTML=""),Hn(t.type=="template"?e.content:e,ft(b)?b:[b],t,n,o,k=="foreignObject"?"http://www.w3.org/1999/xhtml":r,i,s,i?i[0]:n.__k&&ze(n,0),c,f),i!=null)for(d=i.length;d--;)Bt(i[d]);c||(d="value",k=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[d]||k=="progress"&&!v||k=="option"&&v!=$[d])&&_t(e,d,v,$[d],r),d="checked",O!=null&&O!=e[d]&&_t(e,d,O,$[d],r))}return e}function jt(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(r){N.__e(r,n)}}function Gn(e,t,n){var o,r;if(N.unmount&&N.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||jt(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){N.__e(i,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&Gn(o[r],t,n||typeof e.type!="function");n||Bt(e.__e),e.__c=e.__=e.__e=void 0}function ir(e,t,n){return this.constructor(e,n)}function sr(e,t,n){var o,r,i,s;t==document&&(t=document.documentElement),N.__&&N.__(e,t),r=(o=!1)?null:t.__k,i=[],s=[],Wt(t,e=t.__k=$n(gt,null,[e]),r||Je,Je,t.namespaceURI,r?null:t.firstChild?dt.call(t.childNodes):null,i,r?r.__e:t.firstChild,o,s),Bn(i,e,s)}dt=Rn.slice,N={__e:function(e,t,n,o){for(var r,i,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(e)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),s=r.__d),s)return r.__E=r}catch(c){e=c}throw e}},Nn=0,mt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ve({},this.state),typeof e=="function"&&(e=e(ve({},n),this.props)),e&&ve(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Pn(this))},mt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Pn(this))},mt.prototype.render=gt,Ie=[],Ln=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Mn=function(e,t){return e.__v.__b-t.__v.__b},ht.__r=0,In=/(PointerCapture)$|Capture$/i,Ft=0,Ut=zn(!1),zt=zn(!0);var ar=0;function p(e,t,n,o,r,i){t||(t={});var s,c,f=t;if("ref"in f)for(c in f={},t)c=="ref"?s=t[c]:f[c]=t[c];var d={type:e,props:f,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ar,__i:-1,__u:0,__source:r,__self:i};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)f[c]===void 0&&(f[c]=s[c]);return N.vnode&&N.vnode(d),d}var Ze,F,Vt,jn,Qe=0,Vn=[],B=N,qn=B.__b,Xn=B.__r,Yn=B.diffed,Kn=B.__c,Jn=B.unmount,Zn=B.__;function qt(e,t){B.__h&&B.__h(F,e,Qe||t),Qe=0;var n=F.__H||(F.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function me(e){return Qe=1,Qn(oo,e)}function Qn(e,t,n){var o=qt(Ze++,2);if(o.t=e,!o.__c&&(o.__=[oo(void 0,t),function(c){var f=o.__N?o.__N[0]:o.__[0],d=o.t(f,c);f!==d&&(o.__N=[d,o.__[1]],o.__c.setState({}))}],o.__c=F,!F.__f)){var r=function(c,f,d){if(!o.__c.__H)return!0;var h=o.__c.__H.__.filter(function(b){return!!b.__c});if(h.every(function(b){return!b.__N}))return!i||i.call(this,c,f,d);var l=o.__c.props!==c;return h.forEach(function(b){if(b.__N){var m=b.__[0];b.__=b.__N,b.__N=void 0,m!==b.__[0]&&(l=!0)}}),i&&i.call(this,c,f,d)||l};F.__f=!0;var i=F.shouldComponentUpdate,s=F.componentWillUpdate;F.componentWillUpdate=function(c,f,d){if(this.__e){var h=i;i=void 0,r(c,f,d),i=h}s&&s.call(this,c,f,d)},F.shouldComponentUpdate=r}return o.__N||o.__}function Re(e,t){var n=qt(Ze++,3);!B.__s&&no(n.__H,t)&&(n.__=e,n.u=t,F.__H.__h.push(n))}function Ce(e){return Qe=5,eo(function(){return{current:e}},[])}function eo(e,t){var n=qt(Ze++,7);return no(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function bt(e,t){return Qe=8,eo(function(){return e},t)}function lr(){for(var e;e=Vn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(yt),e.__H.__h.forEach(Xt),e.__H.__h=[]}catch(t){e.__H.__h=[],B.__e(t,e.__v)}}B.__b=function(e){F=null,qn&&qn(e)},B.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Zn&&Zn(e,t)},B.__r=function(e){Xn&&Xn(e),Ze=0;var t=(F=e.__c).__H;t&&(Vt===F?(t.__h=[],F.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(yt),t.__h.forEach(Xt),t.__h=[],Ze=0)),Vt=F},B.diffed=function(e){Yn&&Yn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Vn.push(t)!==1&&jn===B.requestAnimationFrame||((jn=B.requestAnimationFrame)||cr)(lr)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Vt=F=null},B.__c=function(e,t){t.some(function(n){try{n.__h.forEach(yt),n.__h=n.__h.filter(function(o){return!o.__||Xt(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],B.__e(o,n.__v)}}),Kn&&Kn(e,t)},B.unmount=function(e){Jn&&Jn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{yt(o)}catch(r){t=r}}),n.__H=void 0,t&&B.__e(t,n.__v))};var to=typeof requestAnimationFrame=="function";function cr(e){var t,n=function(){clearTimeout(o),to&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);to&&(t=requestAnimationFrame(n))}function yt(e){var t=F,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),F=t}function Xt(e){var t=F;e.__c=e.__(),F=t}function no(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function oo(e,t){return typeof t=="function"?t(e):t}const ur={isOpen:!1,messages:[],isStreaming:!1,error:null};function ro(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function dr(e,t){var n,o;switch(t.type){case"OPEN":return{...e,isOpen:!0,error:null};case"CLOSE":return{...e,isOpen:!1};case"LOAD_MESSAGES":return{...e,messages:t.messages};case"ADD_USER_MESSAGE":return{...e,error:null,messages:[...e.messages,{id:t.id,role:"user",content:t.content}]};case"START_STREAMING":return{...e,isStreaming:!0,error:null,messages:[...e.messages,{id:t.id,role:"assistant",content:"",isStreaming:!0}]};case"APPEND_TEXT":{const r=[...e.messages],i=r[r.length-1];return i&&i.role==="assistant"&&i.isStreaming&&(r[r.length-1]={...i,content:i.content+t.text}),{...e,messages:r}}case"ADD_TOOL_CALL":{const r=[...e.messages],i=r[r.length-1];if(i&&i.role==="assistant"){const s=[...i.toolCalls??[],t.toolCall];r[r.length-1]={...i,toolCalls:s}}return{...e,messages:r}}case"SET_TOOL_RESULT":{const r=[...e.messages],i=r[r.length-1];if(i&&i.role==="assistant"&&i.toolCalls){const s=i.toolCalls.map(c=>c.id===t.toolCallId?{...c,result:t.result,status:"done"}:c);r[r.length-1]={...i,toolCalls:s}}return{...e,messages:r}}case"FINISH_STREAMING":{const r=[...e.messages],i=r[r.length-1];return i&&i.role==="assistant"&&i.isStreaming&&(!i.content&&((n=i.toolCalls)!=null&&n.length)?r.pop():r[r.length-1]={...i,isStreaming:!1}),{...e,isStreaming:!1,messages:r}}case"STOP_STREAMING":{const r=[...e.messages],i=r[r.length-1];return i&&i.role==="assistant"&&i.isStreaming&&(!i.content&&!((o=i.toolCalls)!=null&&o.length)?r.pop():r[r.length-1]={...i,isStreaming:!1}),{...e,isStreaming:!1,messages:r}}case"SET_ERROR":{const r=[...e.messages],i=r[r.length-1];return i&&i.role==="assistant"&&i.isStreaming&&(r[r.length-1]={...i,isStreaming:!1}),{...e,isStreaming:!1,error:t.error,messages:r}}case"CLEAR_MESSAGES":return{...e,messages:[],error:null};default:return e}}function fr(e){return new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const r=o.result;t(r.split(",")[1])},o.onerror=()=>n(new Error("Failed to read file")),o.readAsDataURL(e)})}async function pr(e,t){const n=`${e}/api/products/${t}/config`;console.log("[Ourguide] fetchConfig HTTP GET",n);try{const o=await fetch(n,{headers:{"ngrok-skip-browser-warning":"true"}});if(console.log("[Ourguide] fetchConfig HTTP status:",o.status,o.statusText),!o.ok)return console.warn("[Ourguide] fetchConfig non-OK response, returning {}"),{};const r=await o.json();return console.log("[Ourguide] fetchConfig raw JSON:",JSON.stringify(r,null,2)),r}catch(o){return console.error("[Ourguide] fetchConfig threw:",o),{}}}async function io(e,t,n,o,r,i,s){const c={productId:t,messages:n,endUserSessionId:o};r&&(c.conversationId=r),i&&i.length>0&&(c.attachments=i);const f=await fetch(`${e}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify(c),signal:s});if(!f.ok){const d=await f.json().catch(()=>({error:"Request failed"}));throw new Error(d.error||`HTTP ${f.status}`)}if(!f.body)throw new Error("No response stream available");return{stream:f.body,conversationId:f.headers.get("X-Conversation-Id")}}async function gr(e,t,n,o,r){const i=await fetch(`${e}/api/widget/identify`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:t,endUserSessionId:n,token:o,name:r})}),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`HTTP ${i.status}`);return s}async function mr(e,t,n){const o=await fetch(`${e}/api/widget/reset-user`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:t,endUserSessionId:n})}),r=await o.json().catch(()=>({}));if(!o.ok)throw new Error(r.error||`HTTP ${o.status}`);return r}const Yt={};function so(e){Object.assign(Yt,e)}function hr(e){return Yt[e]}function _r(e){return e in Yt}async function br(e,t,n){const o=e.getReader(),r=new TextDecoder;let i="";try{for(;;){if(n!=null&&n.aborted){await o.cancel();break}const{done:s,value:c}=await o.read();if(s)break;i+=r.decode(c,{stream:!0});const f=i.split(`

`);i=f.pop()??"";for(const d of f){if(n!=null&&n.aborted)break;ao(d.trim(),t)}}!(n!=null&&n.aborted)&&i.trim()&&ao(i.trim(),t),t.onFinish()}catch(s){if(n!=null&&n.aborted){t.onFinish();return}const c=s instanceof Error?s.message:"Stream read failed";t.onError(c)}finally{o.releaseLock()}}function ao(e,t){const n=e.split(`
`);for(const o of n){if(!o.startsWith("data: "))continue;const r=o.slice(6);if(r==="[DONE]")return;try{const i=JSON.parse(r);switch(i.type){case"text-delta":i.delta&&t.onTextDelta(i.delta);break;case"tool-input-available":i.toolCallId&&i.toolName&&t.onToolCall(i.toolCallId,i.toolName,i.input??{},i.providerMetadata);break;case"tool-output-available":i.toolCallId&&t.onToolResult(i.toolCallId,i.output);break;case"tool-call":i.toolCallId&&i.toolName&&t.onToolCall(i.toolCallId,i.toolName,i.input??{});break;case"tool-result":i.toolCallId&&t.onToolResult(i.toolCallId,i.output);break;case"error":t.onError(i.errorText??i.reason??"Unknown error");break;case"abort":t.onError(i.reason??"Response aborted");break;default:break}}catch{}}}function yr(e,t){if(!t)return e;let n=e;for(const[o,r]of Object.entries(t))n=n.replace(`:${o}`,encodeURIComponent(r));return n}function vr(e){var o;const t=e.replace(/\/$/,"")||"/",n=document.querySelectorAll("a[href]");for(const r of n){const i=r;if((((o=i.pathname)==null?void 0:o.replace(/\/$/,""))||"/")===t)return i.click(),console.log(`[Ourguide-B2B] Navigated via anchor click: ${e}`),!0}return!1}function wr(e){var r,i;const t=window,n=t.next;if((r=n==null?void 0:n.router)!=null&&r.push)return n.router.push(e),console.log(`[Ourguide-B2B] Navigated via Next.js router: ${e}`),!0;if(t.__NUXT__){const s=t.$nuxt;if((i=s==null?void 0:s.$router)!=null&&i.push)return s.$router.push(e),console.log(`[Ourguide-B2B] Navigated via Vue/Nuxt router: ${e}`),!0}return!1}function xr(e){try{return window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate",{state:{}})),console.log(`[Ourguide-B2B] Navigated via pushState: ${e}`),!0}catch{return!1}}async function Er(e,t){const n=yr(e,t);return vr(n)||wr(n)||xr(n)||(console.log(`[Ourguide-B2B] Navigated via hard navigation: ${n}`),window.location.href=n),!0}const Tr="og2-chat-",Sr="og2-enduser-session-",Kt="og2-conv-";function Jt(e){return`${Tr}${e}`}function lo(e){return`${Sr}${e}`}function co(){var t,n;const e=(n=(t=globalThis.crypto)==null?void 0:t.randomUUID)==null?void 0:n.call(t);return e||`${Date.now()}-${Math.random().toString(16).slice(2)}`}function Zt(e){const t=lo(e);try{const n=localStorage.getItem(t);if(n&&n.trim())return n;const o=`sess_${co()}`;return localStorage.setItem(t,o),o}catch{return`sess_${co()}`}}function kr(e){try{localStorage.removeItem(lo(e))}catch{}}function Ar(e,t){try{const n=t.map(({isStreaming:o,...r})=>r);sessionStorage.setItem(Jt(e),JSON.stringify(n))}catch{}}function Cr(e){try{const t=sessionStorage.getItem(Jt(e));return t?JSON.parse(t):[]}catch{return[]}}function Qt(e){try{sessionStorage.removeItem(Jt(e)),sessionStorage.removeItem(`${Kt}${e}`)}catch{}}function Nr(e,t){try{sessionStorage.setItem(`${Kt}${e}`,t)}catch{}}function Or(e){try{return sessionStorage.getItem(`${Kt}${e}`)}catch{return null}}const uo="og2-action-highlight",Lr=1e4;let ue=null,vt=null;function wt(e,t="#3b82f6",n=Lr){we();const o=e.getBoundingClientRect(),r=4,i=document.createElement("div");i.id=uo,Object.assign(i.style,{position:"fixed",top:`${o.top-r}px`,left:`${o.left-r}px`,width:`${o.width+r*2}px`,height:`${o.height+r*2}px`,border:`2px solid ${t}`,borderRadius:"4px",backgroundColor:fo(t,.08),pointerEvents:"none",zIndex:"2147483646",transition:"opacity 0.2s ease, top 0.15s ease, left 0.15s ease, width 0.15s ease, height 0.15s ease",boxShadow:`0 0 0 2px ${fo(t,.2)}`}),document.body.appendChild(i),ue=i;const s=()=>{if(!ue)return;const c=e.getBoundingClientRect();ue.style.top=`${c.top-r}px`,ue.style.left=`${c.left-r}px`,ue.style.width=`${c.width+r*2}px`,ue.style.height=`${c.height+r*2}px`};window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s,{passive:!0}),vt=setTimeout(()=>{we(),window.removeEventListener("scroll",s),window.removeEventListener("resize",s)},n),i.__og2Cleanup=()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}}function we(){if(vt&&(clearTimeout(vt),vt=null),ue){const t=ue.__og2Cleanup;typeof t=="function"&&t(),ue.style.opacity="0";const n=ue;setTimeout(()=>{try{n.remove()}catch{}},200),ue=null}const e=document.getElementById(uo);if(e)try{e.remove()}catch{}}function fo(e,t){const n=e.replace("#",""),o=parseInt(n.substring(0,2),16),r=parseInt(n.substring(2,4),16),i=parseInt(n.substring(4,6),16);return isNaN(o)||isNaN(r)||isNaN(i)?`rgba(59,130,246,${t})`:`rgba(${o},${r},${i},${t})`}let oe=null,en=!1;const Be=new EventTarget;function Mr(){en=!1}function po(){return en}function go(){en=!0}function mo(e,t,n){return new Promise(o=>{oe={resolve:o,elementId:e,method:t,description:n},Be.dispatchEvent(new CustomEvent("approval-requested",{detail:{elementId:e,method:t,description:n}}));const r=setTimeout(()=>{(oe==null?void 0:oe.elementId)===e&&(oe.resolve(!1),oe=null,we(),Be.dispatchEvent(new Event("approval-dismissed")))},3e4),i=o;oe.resolve=s=>{clearTimeout(r),i(s)}})}function Ir(e){oe&&(oe.resolve(e),oe=null)}function Rr(){oe&&(oe.resolve(!1),oe=null,we())}let ho=new Map,_o=null;function We(){return ho}function et(e){ho=e}function $r(){return _o}function tt(e){_o=e}const Dr=10,Pr=150,tn=600,Hr=100,nn=8,Fr="og2-widget-root",Ur=new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","NAV","HEADER","FOOTER"]),zr='a[href], button, input, select, textarea, [role="button"], [role="link"], [role="checkbox"], [role="radio"], [role="switch"], [role="tab"], [role="menuitem"], [contenteditable="true"]',Br=[/^:r[a-z0-9]+:$/,/^react-/i,/^__next/,/^radix-/,/^headlessui-/,/^mui-/,/^ember\d/,/^ext-gen\d/];function xt(e,t=document){const n=[...t.querySelectorAll(e)],o=t.querySelectorAll("*");for(const r of o)r.shadowRoot&&n.push(...xt(e,r.shadowRoot));return n}const Wr='form, [role="form"], dialog, [role="dialog"], [role="alertdialog"], section[aria-label], section[aria-labelledby], [role="region"][aria-label], nav, [role="navigation"], aside, [role="complementary"]';function Gr(e){var r,i,s;const t=e.getAttribute("aria-label");if(t)return t;const n=e.getAttribute("aria-labelledby");if(n){const c=document.getElementById(n);if((r=c==null?void 0:c.textContent)!=null&&r.trim())return c.textContent.trim()}if(e.tagName.toLowerCase()==="form"){const c=e.getAttribute("name")||e.getAttribute("id");if(c&&!St(c))return c}if(e instanceof HTMLDialogElement||(i=e.getAttribute("role"))!=null&&i.includes("dialog")){const c=e.querySelector('h1, h2, h3, [role="heading"]');if((s=c==null?void 0:c.textContent)!=null&&s.trim())return c.textContent.trim()}return""}function $e(e){const o=new Set([160,8239,8199,65279]);let r="",i=!1;for(let s=0;s<e.length;s++){const c=e.charCodeAt(s);if(!(c>=57344&&c<=63743)){if(o.has(c)){i||(r+=" ",i=!0);continue}r+=e[s],i=e[s]===" "}}return r.trim()}function Et(e){var t,n;try{const o=e;if(!o.isConnected||o.hidden||o.getAttribute("aria-hidden")==="true")return!1;const r=((n=(t=o.ownerDocument)==null?void 0:t.defaultView)==null?void 0:n.getComputedStyle(o))??window.getComputedStyle(o);if(!r||r.display==="none"||r.visibility==="hidden")return!1;const i=parseFloat(r.opacity??"1");if(!Number.isFinite(i)||i===0)return!1;const s=o.getBoundingClientRect();return!(!s||Math.max(s.width,s.height)===0||o.getClientRects().length===0)}catch{return!1}}function Tt(e){return!!e.closest(`#${Fr}`)}function jr(e){try{const t=e.getBoundingClientRect();return t.top<window.innerHeight&&t.bottom>0&&t.left<window.innerWidth&&t.right>0}catch{return!1}}function bo(e,t){return e.length<=t?e:e.slice(0,t-3)+"..."}function St(e){return Br.some(t=>t.test(e))}function yo(e){var n,o,r;if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){if(e.id){const s=document.querySelector(`label[for="${CSS.escape(e.id)}"]`);if((n=s==null?void 0:s.textContent)!=null&&n.trim())return $e(s.textContent.trim())}const i=e.closest("label");if(i){const s=(o=i.textContent)==null?void 0:o.trim();if(s)return $e(s)}return $e(e.getAttribute("aria-label")||e.placeholder||e.getAttribute("name")||"")}const t=(r=e.innerText)==null?void 0:r.trim();return $e(t||e.getAttribute("aria-label")||e.getAttribute("title")||"")}function Vr(e){const t=e.getAttribute("data-testid");if(t)return`[data-testid="${CSS.escape(t)}"]`;const n=e.getAttribute("data-test-id");if(n)return`[data-test-id="${CSS.escape(n)}"]`;if(e.id&&!St(e.id))return`#${CSS.escape(e.id)}`;const o=e.getAttribute("aria-label");if(o){const i=`${e.tagName.toLowerCase()}[aria-label="${CSS.escape(o)}"]`;if(document.querySelectorAll(i).length===1)return i}if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){const r=e.getAttribute("name");if(r){const i=e.closest("form"),s=(i==null?void 0:i.getAttribute("name"))||(i==null?void 0:i.getAttribute("id"));if(s&&!St(s)){const d=e.tagName.toLowerCase(),h=`form[name="${CSS.escape(s)}"] ${d}[name="${CSS.escape(r)}"]`;if(document.querySelectorAll(h).length===1)return h}const f=`${e.tagName.toLowerCase()}[name="${CSS.escape(r)}"]`;if(document.querySelectorAll(f).length===1)return f}}if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const r=e.placeholder;if(r){const s=`${e.tagName.toLowerCase()}[placeholder="${CSS.escape(r)}"]`;if(document.querySelectorAll(s).length===1)return s}}return qr(e)}function qr(e){const t=[];let n=e;for(;n&&n!==document.documentElement;){const o=n.tagName.toLowerCase();if(n.id&&!St(n.id))return t.unshift(`#${CSS.escape(n.id)}`),t.join(" > ");const r=n.parentElement;if(!r){t.unshift(o);break}const i=n.tagName,s=Array.from(r.children).filter(c=>c.tagName===i);if(s.length>1){const c=s.indexOf(n)+1;t.unshift(`${o}:nth-of-type(${c})`)}else t.unshift(o);n=r}return t.join(" > ")}function vo(e){const t=e.tagName.toLowerCase(),n=yo(e),o=e.type||"",r=e.getAttribute("role")||"";return`${t}:${o}:${r}:${n.slice(0,40)}`}function nt(){var S,k,U;const e=window.location.pathname+window.location.search,t=document.title||"",n=xt("h1, h2, h3"),o=[];for(const _ of n){if(o.length>=Dr)break;if(Tt(_)||!Et(_))continue;const C=(S=_.innerText)==null?void 0:S.trim();C&&!o.includes(C)&&o.push($e(C))}const r=xt(Wr).filter(_=>!Tt(_)&&Et(_)),i=new Map;for(const _ of r){const C=Gr(_),j=_.tagName.toLowerCase(),X=_.getAttribute("role")||j;i.set(_,C?`${X}: ${$e(C)}`:X)}const s=xt(zr),c=[];for(const _ of s)Tt(_)||!Et(_)||c.push({el:_,inViewport:jr(_)});c.sort((_,C)=>_.inViewport&&!C.inViewport?-1:!_.inViewport&&C.inViewport?1:0);const f=[],d=new Map,h=new Set;let l=0;for(const{el:_,inViewport:C}of c){if(f.length>=Pr)break;const j=yo(_);if(!j)continue;const X=Vr(_);if(h.has(X))continue;h.add(X);const fe=`el_${l++}`,ae=_.tagName.toLowerCase(),P={id:fe,tag:ae,label:bo(j,Hr),isInViewport:C},A=_.getAttribute("role");if(A&&(P.role=A),_ instanceof HTMLInputElement&&(P.type=_.type,_.placeholder&&(P.placeholder=_.placeholder),(_.type==="checkbox"||_.type==="radio")&&(P.checked=_.checked)),_ instanceof HTMLTextAreaElement&&_.placeholder&&(P.placeholder=_.placeholder),_ instanceof HTMLSelectElement){const D=Array.from(_.options).map(re=>{var xe;return((xe=re.textContent)==null?void 0:xe.trim())||re.value});P.options=D.slice(0,nn),D.length>nn&&P.options.push(`...+${D.length-nn} more`),P.value=((U=(k=_.options[_.selectedIndex])==null?void 0:k.textContent)==null?void 0:U.trim())||_.value}if(_.disabled&&(P.disabled=!0),_ instanceof HTMLAnchorElement&&_.href)try{const D=new URL(_.href);P.href=D.pathname+D.search}catch{P.href=_.getAttribute("href")||void 0}for(const[D,re]of i)if(D.contains(_)){P.group=re;break}f.push(P),d.set(fe,{selector:X,verifyHash:vo(_),label:P.label,tag:ae})}const b=document.querySelector("main")||document.body;let m="";function v(_){var j;if(m.length>=tn)return;if(_.nodeType===Node.TEXT_NODE){const X=(j=_.textContent)==null?void 0:j.trim();X&&(m+=(m?" ":"")+X);return}if(_.nodeType!==Node.ELEMENT_NODE)return;const C=_;if(!Ur.has(C.tagName)&&!Tt(C)&&Et(C)){for(const X of C.childNodes)if(v(X),m.length>=tn)return}}v(b),m=bo(m.replace(/\s+/g," ").trim(),tn);const O={url:e,title:t,headings:o,elements:f,visibleText:m},$=Xr(O);return{snapshot:O,selectorMap:d,outline:$}}function Xr(e){const t=[];if(t.push(`Page: ${e.title}`),t.push(`URL: ${e.url}`),e.headings.length>0){t.push(""),t.push("Headings:");for(const o of e.headings)t.push(`  ${o}`)}t.push(""),t.push("Interactive Elements:");let n;for(const o of e.elements){o.group!==n&&(n=o.group,n&&(t.push(""),t.push(`── ${n} ──`)));let i=`${n?"  ":""}[${o.id}] ${o.tag}`;o.type&&(i+=`[${o.type}]`),i+=`: ${o.label}`;const s=[];o.placeholder&&s.push(`placeholder="${o.placeholder}"`),o.options&&s.push(`options=[${o.options.map(c=>`"${c}"`).join(",")}]`),o.value!==void 0&&s.push(`selected="${o.value}"`),o.checked!==void 0&&s.push(`checked=${o.checked}`),o.disabled&&s.push("(disabled)"),o.href&&s.push(`href="${o.href}"`),o.isInViewport||s.push("(off-screen)"),s.length>0&&(i+=" "+s.join(" ")),t.push(i)}return e.visibleText&&(t.push(""),t.push("Visible Text:"),t.push(e.visibleText)),t.join(`
`)}function Yr(e,t){const n=new Set(e.elements.map(i=>`${i.tag}:${i.label}`)),o=t.elements.filter(i=>!n.has(`${i.tag}:${i.label}`));if(o.length===0)return"(no new elements detected)";const r=[];r.push(`New elements after action (${o.length}):`);for(const i of o){let s=`[${i.id}] ${i.tag}`;i.type&&(s+=`[${i.type}]`),s+=`: ${i.label}`;const c=[];i.placeholder&&c.push(`placeholder="${i.placeholder}"`),i.options&&c.push(`options=[${i.options.map(f=>`"${f}"`).join(",")}]`),i.disabled&&c.push("(disabled)"),c.length>0&&(s+=" "+c.join(" ")),r.push(s)}return r.join(`
`)}function kt(e,t){const n=t.get(e);if(!n)return null;const o=document.querySelector(n.selector);return!o||vo(o)!==n.verifyHash?wo(n):o}function wo(e){const t=e.tag==="a"?'a[href], button, [role="button"], [role="link"]':e.tag==="button"?'button, [role="button"], a[href]':`${e.tag}, [role="${e.tag}"]`,n=document.querySelectorAll(t),o=e.label.toLowerCase();for(const r of n){const i=xo(r).toLowerCase();if(i.length>0&&i===o)return r}for(const r of n){const i=xo(r).toLowerCase();if(i.length>0&&(i.includes(o)||o.includes(i)))return r}return null}function xo(e){var t;return((t=e.innerText)==null?void 0:t.trim())||e.getAttribute("aria-label")||e.getAttribute("title")||e.placeholder||e.getAttribute("name")||""}function Eo(e=3e3,t=300){return new Promise(n=>{let o,r=!1;const i=()=>{r||(r=!0,s.disconnect(),n())},s=new MutationObserver(()=>{clearTimeout(o),o=setTimeout(i,t)});s.observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),o=setTimeout(i,t),setTimeout(i,e)})}async function on(e,t,n,o){try{switch(e){case"click":return await Kr(t);case"fill":return await Qr(t,n.value??"");case"typeCharByChar":return await ei(t,n.value??"",n.delayMs);case"selectOption":return await ti(t,n.value??"");case"check":return await ni(t,n.checked??!0);case"scroll":return await oi(n.direction??"down",t);case"pressKey":return await ri(n.key??"Enter");case"setFile":return await ai(t,n);case"dragAndDrop":{if(!n.toElementId||!o)return{success:!1,description:"Missing target element for drag and drop",error:"missing-target"};const r=kt(n.toElementId,o);return r?await si(t,r):{success:!1,description:"Target element not found",error:"target-not-found"}}default:return{success:!1,description:`Unknown method: ${e}`,error:"unknown-method"}}}catch(r){return{success:!1,description:`Action failed: ${r instanceof Error?r.message:"unknown error"}`,error:"exception"}}}async function Kr(e){e.scrollIntoView({block:"center",behavior:"smooth"}),await At(100);const t=e.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,r={bubbles:!0,cancelable:!0,composed:!0,view:window,clientX:n,clientY:o};e.dispatchEvent(new PointerEvent("pointerdown",{...r,pointerId:1})),e.dispatchEvent(new MouseEvent("mousedown",r)),e.dispatchEvent(new PointerEvent("pointerup",{...r,pointerId:1})),e.dispatchEvent(new MouseEvent("mouseup",r));const i=new MouseEvent("click",{...r,detail:1});if(!e.dispatchEvent(i))try{e.click()}catch{}return{success:!0,description:`Clicked "${Ge(e)}"`}}const Jr=new Set(["color","date","datetime-local","month","range","time","week"]);async function Zr(e,t){const n=Ge(e);if(e instanceof HTMLSelectElement)return So(e,t);if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const o=e instanceof HTMLInputElement?(e.type||"").toLowerCase():"textarea";return e instanceof HTMLInputElement&&Jr.has(o)?(rn(e),sn(e,t.trim()),an(e,t.trim()),{success:!0,description:`Filled "${n}" with value`}):(rn(e),To(t)||(sn(e,t),an(e,t)),{success:!0,description:`Filled "${n}" with value`})}return e.isContentEditable?(rn(e),To(t)||(e.textContent=t,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))),{success:!0,description:`Filled "${n}" with value`}):{success:!1,description:`Cannot fill element "${n}"`,error:"unsupported-element"}}async function Qr(e,t){const n=await Zr(e,t);if(!n.success)return n;const o=li(e);return o!==null&&o!==t?{...n,verified:!1,warning:"Value may not have been set correctly. Try typeCharByChar if the field uses autocomplete."}:{...n,verified:!0}}function rn(e){try{e.focus()}catch{}if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){try{e.select()}catch{try{const t=(e.value??"").length;e.setSelectionRange(0,t)}catch{}}return}if(e.isContentEditable)try{const t=document.getSelection(),n=document.createRange();n.selectNodeContents(e),t==null||t.removeAllRanges(),t==null||t.addRange(n)}catch{}}function sn(e,t){var s;const n=e instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(n,"value"),r=o==null?void 0:o.set;typeof r=="function"?r.call(e,t):e.value=t;const i=e._valueTracker;(s=i==null?void 0:i.setValue)==null||s.call(i,"")}function an(e,t){try{e.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,data:t,inputType:"insertText"}))}catch{e.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}e.dispatchEvent(new Event("change",{bubbles:!0}))}function To(e){try{return document.execCommand("insertText",!1,e)}catch{return!1}}async function ei(e,t,n=50){const o=Ge(e);e.focus();for(const r of t){e.dispatchEvent(new KeyboardEvent("keydown",{key:r,bubbles:!0,cancelable:!0}));try{document.execCommand("insertText",!1,r)}catch{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(sn(e,e.value+r),an(e,e.value))}e.dispatchEvent(new KeyboardEvent("keyup",{key:r,bubbles:!0})),n>0&&await At(n)}return{success:!0,description:`Typed "${ci(t)}" into "${o}"`}}async function So(e,t){var f;const n=Ge(e);if(!(e instanceof HTMLSelectElement))return{success:!1,description:`"${n}" is not a select element`,error:"not-select"};const o=t.trim(),i=Array.from(e.options).find(d=>{const h=(d.label||d.textContent||"").trim(),l=String(d.value??"").trim();return h===o||l===o||h.toLowerCase()===o.toLowerCase()||l.toLowerCase()===o.toLowerCase()});if(!i)return{success:!1,description:`Option "${o}" not found in "${n}"`,error:"option-not-found"};const s=Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,"value");return s!=null&&s.set?s.set.call(e,i.value):e.value=i.value,i.selected=!0,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})),{success:!0,description:`Selected "${((f=i.textContent)==null?void 0:f.trim())||i.value}" in "${n}"`}}async function ti(e,t){var o,r;const n=await So(e,t);if(!n.success)return n;if(e instanceof HTMLSelectElement){const i=t.trim().toLowerCase();if((((r=(o=e.options[e.selectedIndex])==null?void 0:o.textContent)==null?void 0:r.trim())||e.value).toLowerCase()!==i&&e.value.toLowerCase()!==i)return{...n,verified:!1,warning:"Selected value may not match the requested option."}}return{...n,verified:!0}}async function ni(e,t){const n=Ge(e);if(e instanceof HTMLInputElement&&(e.type==="checkbox"||e.type==="radio")){if(e.checked===t)return{success:!0,description:`"${n}" already ${t?"checked":"unchecked"}`};if(e.click(),e.checked!==t){const r=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"checked");r!=null&&r.set?r.set.call(e,t):e.checked=t,e.dispatchEvent(new Event("change",{bubbles:!0})),e.dispatchEvent(new Event("input",{bubbles:!0}))}return{success:!0,description:`${t?"Checked":"Unchecked"} "${n}"`}}return e.getAttribute("aria-checked")!==null?(e.click(),{success:!0,description:`Toggled "${n}"`}):{success:!1,description:`"${n}" is not a checkable element`,error:"not-checkable"}}async function oi(e,t){const n=Math.round(window.innerHeight*.75),r={up:{top:-n,left:0},down:{top:n,left:0},left:{top:0,left:-n},right:{top:0,left:n}}[e];return t&&t!==document.body&&t!==document.documentElement?t.scrollBy({...r,behavior:"smooth"}):window.scrollBy({...r,behavior:"smooth"}),{success:!0,description:`Scrolled ${e}`}}async function ri(e){var o;const t=document.activeElement||document.body,n=ii(e);if(t.dispatchEvent(new KeyboardEvent("keydown",{...n,bubbles:!0,cancelable:!0})),n.key==="Enter"||n.key===" "){const r=(o=t.tagName)==null?void 0:o.toLowerCase();(r==="button"||r==="a"||t.getAttribute("role")==="button")&&t.click()}if(n.key==="Tab"){const r=Array.from(document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(s=>!s.hidden&&s.offsetParent!==null),i=r.indexOf(t);if(i>=0){const s=n.shiftKey?r[i-1]||r[r.length-1]:r[i+1]||r[0];s==null||s.focus()}}return t.dispatchEvent(new KeyboardEvent("keyup",{...n,bubbles:!0})),{success:!0,description:`Pressed ${e}`}}function ii(e){const t=e.split("+").map(r=>r.trim()),n={ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1};let o=e;if(t.length>1){o=t[t.length-1];for(let r=0;r<t.length-1;r++){const i=t[r].toLowerCase();i==="ctrl"||i==="control"?n.ctrlKey=!0:i==="alt"?n.altKey=!0:i==="shift"?n.shiftKey=!0:(i==="cmd"||i==="meta"||i==="command")&&(n.metaKey=!0)}}return{key:o,...n}}async function si(e,t){const n=new DataTransfer;return e.dispatchEvent(new DragEvent("dragstart",{dataTransfer:n,bubbles:!0,cancelable:!0})),await At(50),t.dispatchEvent(new DragEvent("dragenter",{dataTransfer:n,bubbles:!0,cancelable:!0})),t.dispatchEvent(new DragEvent("dragover",{dataTransfer:n,bubbles:!0,cancelable:!0})),await At(50),t.dispatchEvent(new DragEvent("drop",{dataTransfer:n,bubbles:!0,cancelable:!0})),e.dispatchEvent(new DragEvent("dragend",{dataTransfer:n,bubbles:!0})),{success:!0,description:"Dragged element to target"}}async function ai(e,t){const n=Ge(e);if(!(e instanceof HTMLInputElement)||e.type!=="file")return{success:!1,description:`"${n}" is not a file input`,error:"not-file-input"};const{fileName:o,fileBase64:r,fileMimeType:i}=t;if(!o||!r)return{success:!1,description:"Missing fileName or fileBase64 for file upload",error:"missing-file-data"};try{const s=new DataTransfer,c=atob(r),f=new Uint8Array(c.length);for(let l=0;l<c.length;l++)f[l]=c.charCodeAt(l);const d=new Blob([f],{type:i||"application/octet-stream"}),h=new File([d],o,{type:i||"application/octet-stream",lastModified:Date.now()});return s.items.add(h),e.files=s.files,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})),{success:!0,description:`Attached "${o}" to "${n}"`}}catch(s){return{success:!1,description:`File upload failed: ${s instanceof Error?s.message:"unknown error"}`,error:"file-upload-failed"}}}function li(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement?e.value:e.isContentEditable?e.textContent??null:null}function At(e){return new Promise(t=>setTimeout(t,e))}function Ge(e){var t;return e.getAttribute("aria-label")||e.placeholder||((t=e.innerText)==null?void 0:t.trim().slice(0,40))||e.getAttribute("name")||e.tagName.toLowerCase()}function ci(e,t=30){return e.length<=t?e:e.slice(0,t-3)+"..."}const ui=10,di=30,ln=500,fi="og2-widget-root",pi=new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","NAV","HEADER","FOOTER"]),gi="a[href], button, input, select, textarea";function cn(e){if(!(e instanceof HTMLElement)||e.hidden||e.getAttribute("aria-hidden")==="true")return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"}function un(e){return!!e.closest(`#${fi}`)}function mi(e){var n,o;if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){if(e.id){const r=document.querySelector(`label[for="${e.id}"]`);if((n=r==null?void 0:r.textContent)!=null&&n.trim())return r.textContent.trim()}return e.getAttribute("aria-label")||e.placeholder||e.getAttribute("name")||""}const t=(o=e.innerText)==null?void 0:o.trim();return t||e.getAttribute("aria-label")||e.getAttribute("title")||""}function ko(e,t){return e.length<=t?e:e.slice(0,t-3)+"..."}function hi(){var h;const e=window.location.pathname+window.location.search,t=document.title||"",n=document.querySelectorAll("h1, h2, h3"),o=[];for(const l of n){if(o.length>=ui)break;if(un(l)||!cn(l))continue;const b=(h=l.innerText)==null?void 0:h.trim();b&&!o.includes(b)&&o.push(b)}const r=document.querySelectorAll(gi),i=[],s=new Set;for(const l of r){if(i.length>=di)break;if(un(l)||!cn(l))continue;const b=mi(l);if(!b)continue;const m=`${l.tagName}:${b}`;if(s.has(m))continue;s.add(m);const v={tag:l.tagName.toLowerCase(),text:ko(b,80)};if(l instanceof HTMLInputElement&&(v.type=l.type),l instanceof HTMLAnchorElement&&l.href)try{const O=new URL(l.href);v.href=O.pathname+O.search}catch{v.href=l.getAttribute("href")||void 0}i.push(v)}const c=document.querySelector("main")||document.body;let f="";function d(l){var m;if(f.length>=ln)return;if(l.nodeType===Node.TEXT_NODE){const v=(m=l.textContent)==null?void 0:m.trim();v&&(f+=(f?" ":"")+v);return}if(l.nodeType!==Node.ELEMENT_NODE)return;const b=l;if(!pi.has(b.tagName)&&!un(b)&&cn(b)){for(const v of b.childNodes)if(d(v),f.length>=ln)return}}return d(c),f=ko(f.replace(/\s+/g," ").trim(),ln),{url:e,title:t,headings:o,interactiveElements:i,visibleText:f}}async function _i(){console.log("[Ourguide] capture_screen tool invoked — capturing DOM snapshot");const e=hi();return console.log("[Ourguide] capture_screen result",{url:e.url,title:e.title}),e}async function bi(){console.log("[Ourguide] capture_screen_for_action — capturing actionable DOM");const e=nt();return et(e.selectorMap),tt(e.snapshot),console.log("[Ourguide] actionable DOM captured",{elementCount:e.snapshot.elements.length,url:e.snapshot.url}),{outline:e.outline}}async function yi(e){const t=e.elementId,n=e.method,o=e.description||`${n} on ${t}`,r={value:e.value,checked:e.checked,direction:e.direction,key:e.key,toElementId:e.toElementId,delayMs:e.delayMs,fileName:e.fileName,fileBase64:e.fileBase64,fileMimeType:e.fileMimeType};console.log("[Ourguide] perform_action invoked",{elementId:t,method:n,description:o});const i=We();let s=kt(t,i);if(!s){const b=i.get(t);if(b){console.log("[Ourguide] self-heal: element not found, recapturing DOM");const m=nt();et(m.selectorMap),tt(m.snapshot);for(const[,v]of m.selectorMap)if(v.tag===b.tag&&v.label.toLowerCase()===b.label.toLowerCase()&&(s=document.querySelector(v.selector),s))break}if(!s)return console.warn("[Ourguide] perform_action — element not found even after self-heal",{elementId:t}),{success:!1,error:"Element not found on the page. It may have changed. Try capture_screen_for_action again."}}let c=!0;if(po()?(wt(s),await new Promise(b=>setTimeout(b,400)),we()):(wt(s),c=await mo(t,n,o),we(),c&&go()),!c)return console.log("[Ourguide] perform_action — denied by user"),{success:!1,denied:!0,description:"User denied this action"};console.log("[Ourguide] perform_action — executing",{method:n,elementId:t});let f=await on(n,s,r,We());if(!f.success&&f.error==="exception"){console.log("[Ourguide] self-heal: action failed, recapturing and retrying");const b=We().get(t);if(b){const m=nt();for(const[,v]of m.selectorMap)if(v.tag===b.tag&&v.label.toLowerCase()===b.label.toLowerCase()){const O=document.querySelector(v.selector);if(O){f=await on(n,O,r,m.selectorMap),et(m.selectorMap),tt(m.snapshot);break}}}}console.log("[Ourguide] perform_action result",f),await Eo();const d=$r(),h=nt();et(h.selectorMap),tt(h.snapshot);const l=d?Yr(d,h.snapshot)+`

Full snapshot:
`+h.outline:h.outline;return{...f,newSnapshot:l}}async function vi(e){var f,d;const t=e.fields,n=e.description||"Fill form fields";console.log("[Ourguide] batch_fill_form invoked",{fieldCount:t.length,description:n});let o=!0;if(!po()){const h=kt((f=t[0])==null?void 0:f.elementId,We());h&&wt(h),o=await mo(((d=t[0])==null?void 0:d.elementId)||"","batch_fill",n),we(),o&&go()}if(!o)return{success:!1,denied:!0,description:"User denied this action"};const r=[];for(const h of t){const l=kt(h.elementId,We());if(!l){r.push({elementId:h.elementId,success:!1,error:"Element not found"});continue}wt(l),await new Promise(O=>setTimeout(O,200)),we();const b=h.method||"fill",m={value:h.value,checked:h.checked},v=await on(b,l,m,We());r.push({elementId:h.elementId,success:v.success,error:v.error})}await Eo();const i=nt();et(i.selectorMap),tt(i.snapshot);const s=r.every(h=>h.success),c=r.filter(h=>!h.success).length;return{success:s,description:s?`Filled ${t.length} fields`:`${c} of ${t.length} fields failed`,results:r,newSnapshot:i.outline}}function wi(){so({capture_screen:_i,capture_screen_for_action:bi,perform_action:yi,batch_fill_form:vi,plan_actions:async e=>{const t=e.plan;return console.log("[Ourguide] plan_actions:",t),{acknowledged:!0,plan:t}}})}function dn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function De(e){let t=e;return t=t.replace(/`([^`\n]+)`/g,'<code class="og2-md-inline-code">$1</code>'),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/__(.+?)__/g,"<strong>$1</strong>"),t=t.replace(/\*(.+?)\*/g,"<em>$1</em>"),t=t.replace(new RegExp("(?<!\\w)_(.+?)_(?!\\w)","g"),"<em>$1</em>"),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(n,o,r)=>{const i=r.trim();return/^(https?:\/\/|mailto:|\/|#)/i.test(i)?`<a class="og2-md-link" href="${i}" target="_blank" rel="noopener noreferrer">${o}</a>`:o}),t}function Ao(e){if(!e)return"";const t=[];let n=e.replace(/```(\w*)\n([\s\S]*?)```/g,(o,r,i)=>{const s=t.length,c=dn(i.replace(/\n$/,"")),f=r?` data-lang="${dn(r)}"`:"";return t.push(`<pre class="og2-md-pre"${f}><code class="og2-md-code">${c}</code></pre>`),`\0CB${s}\0`});return n=dn(n),n=Ci(n),n=n.replace(/\x00CB(\d+)\x00/g,(o,r)=>t[parseInt(r)]),n}function xi(e){return/^[\s]*[-*]\s/.test(e)?"ul":/^[\s]*\d+\.\s/.test(e)?"ol":/^#{1,4}\s+/.test(e)?"heading":/^\s*\|/.test(e)?"table":"text"}function Ei(e){const t=[];let n=null;for(const o of e){const r=xi(o);n&&n.type===r?n.lines.push(o):(n&&t.push(n),n={type:r,lines:[o]})}return n&&t.push(n),t}function Ti(e){var t;switch(e.type){case"ul":return`<ul class="og2-md-list">${e.lines.map(o=>`<li>${De(o.replace(/^[\s]*[-*]\s/,""))}</li>`).join("")}</ul>`;case"ol":{const n=e.lines.map(i=>`<li>${De(i.replace(/^[\s]*\d+\.\s/,""))}</li>`).join(""),o=((t=e.lines[0].match(/^[\s]*(\d+)\./))==null?void 0:t[1])??"1";return`<ol class="og2-md-list"${o!=="1"?` start="${o}"`:""}>${n}</ol>`}case"heading":return e.lines.map(n=>{const o=n.match(/^(#{1,4})\s+(.+)$/),r=o[1].length;return`<h${r+2} class="og2-md-heading">${De(o[2])}</h${r+2}>`}).join("");case"table":return Ai(e.lines);case"text":return`<p>${e.lines.map(n=>De(n)).join("<br>")}</p>`}}function Ct(e){return e.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(o=>o.trim())}function Si(e){const t=e.trim(),n=t.startsWith(":"),o=t.endsWith(":");return n&&o?"center":o?"right":"left"}function ki(e){const t=Ct(e);return t.length>0&&t.every(n=>/^:?-{1,}:?$/.test(n.trim()))}function Ai(e){if(e.length<2||!ki(e[1]))return`<p>${e.map(c=>De(c)).join("<br>")}</p>`;const t=Ct(e[0]),n=Ct(e[1]).map(Si),o=e.slice(2),r=c=>{const f=n[c];return f&&f!=="left"?` style="text-align:${f}"`:""},i="<thead><tr>"+t.map((c,f)=>`<th${r(f)}>${De(c)}</th>`).join("")+"</tr></thead>";let s="";return o.length>0&&(s=`<tbody>${o.map(f=>{const d=Ct(f);return"<tr>"+t.map((h,l)=>`<td${r(l)}>${De(d[l]??"")}</td>`).join("")+"</tr>"}).join("")}</tbody>`),`<table class="og2-md-table">${i}${s}</table>`}function Ci(e){const t=e.split(/\n{2,}/),n=[];for(const o of t){const r=o.trim();if(!r)continue;if(/^\x00CB\d+\x00$/.test(r)){n.push(r);continue}const i=r.split(`
`),s=Ei(i);for(const c of s)n.push(Ti(c))}return n.join("")}/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:Co,setPrototypeOf:No,isFrozen:Ni,getPrototypeOf:Oi,getOwnPropertyDescriptor:Li}=Object;let{freeze:Z,seal:se,create:fn}=Object,{apply:pn,construct:gn}=typeof Reflect<"u"&&Reflect;Z||(Z=function(t){return t}),se||(se=function(t){return t}),pn||(pn=function(t,n){for(var o=arguments.length,r=new Array(o>2?o-2:0),i=2;i<o;i++)r[i-2]=arguments[i];return t.apply(n,r)}),gn||(gn=function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return new t(...o)});const Nt=ee(Array.prototype.forEach),Mi=ee(Array.prototype.lastIndexOf),Oo=ee(Array.prototype.pop),ot=ee(Array.prototype.push),Ii=ee(Array.prototype.splice),Ot=ee(String.prototype.toLowerCase),mn=ee(String.prototype.toString),hn=ee(String.prototype.match),rt=ee(String.prototype.replace),Ri=ee(String.prototype.indexOf),$i=ee(String.prototype.trim),de=ee(Object.prototype.hasOwnProperty),Q=ee(RegExp.prototype.test),it=Di(TypeError);function ee(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return pn(e,t,o)}}function Di(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return gn(e,n)}}function T(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ot;No&&No(e,null);let o=t.length;for(;o--;){let r=t[o];if(typeof r=="string"){const i=n(r);i!==r&&(Ni(t)||(t[o]=i),r=i)}e[r]=!0}return e}function Pi(e){for(let t=0;t<e.length;t++)de(e,t)||(e[t]=null);return e}function he(e){const t=fn(null);for(const[n,o]of Co(e))de(e,n)&&(Array.isArray(o)?t[n]=Pi(o):o&&typeof o=="object"&&o.constructor===Object?t[n]=he(o):t[n]=o);return t}function st(e,t){for(;e!==null;){const o=Li(e,t);if(o){if(o.get)return ee(o.get);if(typeof o.value=="function")return ee(o.value)}e=Oi(e)}function n(){return null}return n}const Lo=Z(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),_n=Z(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),bn=Z(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Hi=Z(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),yn=Z(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Fi=Z(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Mo=Z(["#text"]),Io=Z(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),vn=Z(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ro=Z(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Lt=Z(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ui=se(/\{\{[\w\W]*|[\w\W]*\}\}/gm),zi=se(/<%[\w\W]*|[\w\W]*%>/gm),Bi=se(/\$\{[\w\W]*/gm),Wi=se(/^data-[\-\w.\u00B7-\uFFFF]+$/),Gi=se(/^aria-[\-\w]+$/),$o=se(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ji=se(/^(?:\w+script|data):/i),Vi=se(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Do=se(/^html$/i),qi=se(/^[a-z][.\w]*(-[.\w]+)+$/i);var Po=Object.freeze({__proto__:null,ARIA_ATTR:Gi,ATTR_WHITESPACE:Vi,CUSTOM_ELEMENT:qi,DATA_ATTR:Wi,DOCTYPE_NAME:Do,ERB_EXPR:zi,IS_ALLOWED_URI:$o,IS_SCRIPT_OR_DATA:ji,MUSTACHE_EXPR:Ui,TMPLIT_EXPR:Bi});const at={element:1,text:3,progressingInstruction:7,comment:8,document:9},Xi=function(){return typeof window>"u"?null:window},Yi=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const r="data-tt-policy-suffix";n&&n.hasAttribute(r)&&(o=n.getAttribute(r));const i="dompurify"+(o?"#"+o:"");try{return t.createPolicy(i,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Ho=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Fo(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Xi();const t=w=>Fo(w);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==at.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const o=n,r=o.currentScript,{DocumentFragment:i,HTMLTemplateElement:s,Node:c,Element:f,NodeFilter:d,NamedNodeMap:h=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:l,DOMParser:b,trustedTypes:m}=e,v=f.prototype,O=st(v,"cloneNode"),$=st(v,"remove"),S=st(v,"nextSibling"),k=st(v,"childNodes"),U=st(v,"parentNode");if(typeof s=="function"){const w=n.createElement("template");w.content&&w.content.ownerDocument&&(n=w.content.ownerDocument)}let _,C="";const{implementation:j,createNodeIterator:X,createDocumentFragment:fe,getElementsByTagName:ae}=n,{importNode:P}=o;let A=Ho();t.isSupported=typeof Co=="function"&&typeof U=="function"&&j&&j.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:D,ERB_EXPR:re,TMPLIT_EXPR:xe,DATA_ATTR:Mt,ARIA_ATTR:xn,IS_SCRIPT_OR_DATA:It,ATTR_WHITESPACE:je,CUSTOM_ELEMENT:En}=Po;let{IS_ALLOWED_URI:Rt}=Po,W=null;const $t=T({},[...Lo,..._n,...bn,...yn,...Mo]);let u=null;const E=T({},[...Io,...vn,...Ro,...Lt]);let x=Object.seal(fn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),M=null,z=null;const pe=Object.seal(fn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Ne=!0,Ee=!0,Oe=!1,Te=!0,ie=!1,Ve=!0,L=!1,H=!1,le=!1,te=!1,K=!1,ge=!1,Pe=!0,lt=!1;const V="user-content-";let He=!0,Fe=!1,_e={},ce=null;const I=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Le=null;const qe=T({},["audio","video","img","source","image","track"]);let ct=null;const Dt=T({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),be="http://www.w3.org/1998/Math/MathML",Me="http://www.w3.org/2000/svg",Se="http://www.w3.org/1999/xhtml";let Xe=Se,Tn=!1,Sn=null;const ts=T({},[be,Me,Se],mn);let Pt=T({},["mi","mo","mn","ms","mtext"]),Ht=T({},["annotation-xml"]);const ns=T({},["title","style","font","a","script"]);let ut=null;const os=["application/xhtml+xml","text/html"],rs="text/html";let q=null,Ye=null;const is=n.createElement("form"),Wo=function(a){return a instanceof RegExp||a instanceof Function},kn=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ye&&Ye===a)){if((!a||typeof a!="object")&&(a={}),a=he(a),ut=os.indexOf(a.PARSER_MEDIA_TYPE)===-1?rs:a.PARSER_MEDIA_TYPE,q=ut==="application/xhtml+xml"?mn:Ot,W=de(a,"ALLOWED_TAGS")?T({},a.ALLOWED_TAGS,q):$t,u=de(a,"ALLOWED_ATTR")?T({},a.ALLOWED_ATTR,q):E,Sn=de(a,"ALLOWED_NAMESPACES")?T({},a.ALLOWED_NAMESPACES,mn):ts,ct=de(a,"ADD_URI_SAFE_ATTR")?T(he(Dt),a.ADD_URI_SAFE_ATTR,q):Dt,Le=de(a,"ADD_DATA_URI_TAGS")?T(he(qe),a.ADD_DATA_URI_TAGS,q):qe,ce=de(a,"FORBID_CONTENTS")?T({},a.FORBID_CONTENTS,q):I,M=de(a,"FORBID_TAGS")?T({},a.FORBID_TAGS,q):he({}),z=de(a,"FORBID_ATTR")?T({},a.FORBID_ATTR,q):he({}),_e=de(a,"USE_PROFILES")?a.USE_PROFILES:!1,Ne=a.ALLOW_ARIA_ATTR!==!1,Ee=a.ALLOW_DATA_ATTR!==!1,Oe=a.ALLOW_UNKNOWN_PROTOCOLS||!1,Te=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ie=a.SAFE_FOR_TEMPLATES||!1,Ve=a.SAFE_FOR_XML!==!1,L=a.WHOLE_DOCUMENT||!1,te=a.RETURN_DOM||!1,K=a.RETURN_DOM_FRAGMENT||!1,ge=a.RETURN_TRUSTED_TYPE||!1,le=a.FORCE_BODY||!1,Pe=a.SANITIZE_DOM!==!1,lt=a.SANITIZE_NAMED_PROPS||!1,He=a.KEEP_CONTENT!==!1,Fe=a.IN_PLACE||!1,Rt=a.ALLOWED_URI_REGEXP||$o,Xe=a.NAMESPACE||Se,Pt=a.MATHML_TEXT_INTEGRATION_POINTS||Pt,Ht=a.HTML_INTEGRATION_POINTS||Ht,x=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&Wo(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(x.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&Wo(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(x.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(x.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ie&&(Ee=!1),K&&(te=!0),_e&&(W=T({},Mo),u=[],_e.html===!0&&(T(W,Lo),T(u,Io)),_e.svg===!0&&(T(W,_n),T(u,vn),T(u,Lt)),_e.svgFilters===!0&&(T(W,bn),T(u,vn),T(u,Lt)),_e.mathMl===!0&&(T(W,yn),T(u,Ro),T(u,Lt))),a.ADD_TAGS&&(typeof a.ADD_TAGS=="function"?pe.tagCheck=a.ADD_TAGS:(W===$t&&(W=he(W)),T(W,a.ADD_TAGS,q))),a.ADD_ATTR&&(typeof a.ADD_ATTR=="function"?pe.attributeCheck=a.ADD_ATTR:(u===E&&(u=he(u)),T(u,a.ADD_ATTR,q))),a.ADD_URI_SAFE_ATTR&&T(ct,a.ADD_URI_SAFE_ATTR,q),a.FORBID_CONTENTS&&(ce===I&&(ce=he(ce)),T(ce,a.FORBID_CONTENTS,q)),a.ADD_FORBID_CONTENTS&&(ce===I&&(ce=he(ce)),T(ce,a.ADD_FORBID_CONTENTS,q)),He&&(W["#text"]=!0),L&&T(W,["html","head","body"]),W.table&&(T(W,["tbody"]),delete M.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw it('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw it('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=a.TRUSTED_TYPES_POLICY,C=_.createHTML("")}else _===void 0&&(_=Yi(m,r)),_!==null&&typeof C=="string"&&(C=_.createHTML(""));Z&&Z(a),Ye=a}},Go=T({},[..._n,...bn,...Hi]),jo=T({},[...yn,...Fi]),ss=function(a){let g=U(a);(!g||!g.tagName)&&(g={namespaceURI:Xe,tagName:"template"});const y=Ot(a.tagName),R=Ot(g.tagName);return Sn[a.namespaceURI]?a.namespaceURI===Me?g.namespaceURI===Se?y==="svg":g.namespaceURI===be?y==="svg"&&(R==="annotation-xml"||Pt[R]):!!Go[y]:a.namespaceURI===be?g.namespaceURI===Se?y==="math":g.namespaceURI===Me?y==="math"&&Ht[R]:!!jo[y]:a.namespaceURI===Se?g.namespaceURI===Me&&!Ht[R]||g.namespaceURI===be&&!Pt[R]?!1:!jo[y]&&(ns[y]||!Go[y]):!!(ut==="application/xhtml+xml"&&Sn[a.namespaceURI]):!1},ye=function(a){ot(t.removed,{element:a});try{U(a).removeChild(a)}catch{$(a)}},Ue=function(a,g){try{ot(t.removed,{attribute:g.getAttributeNode(a),from:g})}catch{ot(t.removed,{attribute:null,from:g})}if(g.removeAttribute(a),a==="is")if(te||K)try{ye(g)}catch{}else try{g.setAttribute(a,"")}catch{}},Vo=function(a){let g=null,y=null;if(le)a="<remove></remove>"+a;else{const G=hn(a,/^[\r\n\t ]+/);y=G&&G[0]}ut==="application/xhtml+xml"&&Xe===Se&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");const R=_?_.createHTML(a):a;if(Xe===Se)try{g=new b().parseFromString(R,ut)}catch{}if(!g||!g.documentElement){g=j.createDocument(Xe,"template",null);try{g.documentElement.innerHTML=Tn?C:R}catch{}}const J=g.body||g.documentElement;return a&&y&&J.insertBefore(n.createTextNode(y),J.childNodes[0]||null),Xe===Se?ae.call(g,L?"html":"body")[0]:L?g.documentElement:J},qo=function(a){return X.call(a.ownerDocument||a,a,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},An=function(a){return a instanceof l&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof h)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},Xo=function(a){return typeof c=="function"&&a instanceof c};function ke(w,a,g){Nt(w,y=>{y.call(t,a,g,Ye)})}const Yo=function(a){let g=null;if(ke(A.beforeSanitizeElements,a,null),An(a))return ye(a),!0;const y=q(a.nodeName);if(ke(A.uponSanitizeElement,a,{tagName:y,allowedTags:W}),Ve&&a.hasChildNodes()&&!Xo(a.firstElementChild)&&Q(/<[/\w!]/g,a.innerHTML)&&Q(/<[/\w!]/g,a.textContent)||a.nodeType===at.progressingInstruction||Ve&&a.nodeType===at.comment&&Q(/<[/\w]/g,a.data))return ye(a),!0;if(!(pe.tagCheck instanceof Function&&pe.tagCheck(y))&&(!W[y]||M[y])){if(!M[y]&&Jo(y)&&(x.tagNameCheck instanceof RegExp&&Q(x.tagNameCheck,y)||x.tagNameCheck instanceof Function&&x.tagNameCheck(y)))return!1;if(He&&!ce[y]){const R=U(a)||a.parentNode,J=k(a)||a.childNodes;if(J&&R){const G=J.length;for(let ne=G-1;ne>=0;--ne){const Ae=O(J[ne],!0);Ae.__removalCount=(a.__removalCount||0)+1,R.insertBefore(Ae,S(a))}}}return ye(a),!0}return a instanceof f&&!ss(a)||(y==="noscript"||y==="noembed"||y==="noframes")&&Q(/<\/no(script|embed|frames)/i,a.innerHTML)?(ye(a),!0):(ie&&a.nodeType===at.text&&(g=a.textContent,Nt([D,re,xe],R=>{g=rt(g,R," ")}),a.textContent!==g&&(ot(t.removed,{element:a.cloneNode()}),a.textContent=g)),ke(A.afterSanitizeElements,a,null),!1)},Ko=function(a,g,y){if(Pe&&(g==="id"||g==="name")&&(y in n||y in is))return!1;if(!(Ee&&!z[g]&&Q(Mt,g))){if(!(Ne&&Q(xn,g))){if(!(pe.attributeCheck instanceof Function&&pe.attributeCheck(g,a))){if(!u[g]||z[g]){if(!(Jo(a)&&(x.tagNameCheck instanceof RegExp&&Q(x.tagNameCheck,a)||x.tagNameCheck instanceof Function&&x.tagNameCheck(a))&&(x.attributeNameCheck instanceof RegExp&&Q(x.attributeNameCheck,g)||x.attributeNameCheck instanceof Function&&x.attributeNameCheck(g,a))||g==="is"&&x.allowCustomizedBuiltInElements&&(x.tagNameCheck instanceof RegExp&&Q(x.tagNameCheck,y)||x.tagNameCheck instanceof Function&&x.tagNameCheck(y))))return!1}else if(!ct[g]){if(!Q(Rt,rt(y,je,""))){if(!((g==="src"||g==="xlink:href"||g==="href")&&a!=="script"&&Ri(y,"data:")===0&&Le[a])){if(!(Oe&&!Q(It,rt(y,je,"")))){if(y)return!1}}}}}}}return!0},Jo=function(a){return a!=="annotation-xml"&&hn(a,En)},Zo=function(a){ke(A.beforeSanitizeAttributes,a,null);const{attributes:g}=a;if(!g||An(a))return;const y={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:u,forceKeepAttr:void 0};let R=g.length;for(;R--;){const J=g[R],{name:G,namespaceURI:ne,value:Ae}=J,Ke=q(G),Cn=Ae;let Y=G==="value"?Cn:$i(Cn);if(y.attrName=Ke,y.attrValue=Y,y.keepAttr=!0,y.forceKeepAttr=void 0,ke(A.uponSanitizeAttribute,a,y),Y=y.attrValue,lt&&(Ke==="id"||Ke==="name")&&(Ue(G,a),Y=V+Y),Ve&&Q(/((--!?|])>)|<\/(style|title|textarea)/i,Y)){Ue(G,a);continue}if(Ke==="attributename"&&hn(Y,"href")){Ue(G,a);continue}if(y.forceKeepAttr)continue;if(!y.keepAttr){Ue(G,a);continue}if(!Te&&Q(/\/>/i,Y)){Ue(G,a);continue}ie&&Nt([D,re,xe],er=>{Y=rt(Y,er," ")});const Qo=q(a.nodeName);if(!Ko(Qo,Ke,Y)){Ue(G,a);continue}if(_&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!ne)switch(m.getAttributeType(Qo,Ke)){case"TrustedHTML":{Y=_.createHTML(Y);break}case"TrustedScriptURL":{Y=_.createScriptURL(Y);break}}if(Y!==Cn)try{ne?a.setAttributeNS(ne,G,Y):a.setAttribute(G,Y),An(a)?ye(a):Oo(t.removed)}catch{Ue(G,a)}}ke(A.afterSanitizeAttributes,a,null)},as=function w(a){let g=null;const y=qo(a);for(ke(A.beforeSanitizeShadowDOM,a,null);g=y.nextNode();)ke(A.uponSanitizeShadowNode,g,null),Yo(g),Zo(g),g.content instanceof i&&w(g.content);ke(A.afterSanitizeShadowDOM,a,null)};return t.sanitize=function(w){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=null,y=null,R=null,J=null;if(Tn=!w,Tn&&(w="<!-->"),typeof w!="string"&&!Xo(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw it("dirty is not a string, aborting")}else throw it("toString is not a function");if(!t.isSupported)return w;if(H||kn(a),t.removed=[],typeof w=="string"&&(Fe=!1),Fe){if(w.nodeName){const Ae=q(w.nodeName);if(!W[Ae]||M[Ae])throw it("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof c)g=Vo("<!---->"),y=g.ownerDocument.importNode(w,!0),y.nodeType===at.element&&y.nodeName==="BODY"||y.nodeName==="HTML"?g=y:g.appendChild(y);else{if(!te&&!ie&&!L&&w.indexOf("<")===-1)return _&&ge?_.createHTML(w):w;if(g=Vo(w),!g)return te?null:ge?C:""}g&&le&&ye(g.firstChild);const G=qo(Fe?w:g);for(;R=G.nextNode();)Yo(R),Zo(R),R.content instanceof i&&as(R.content);if(Fe)return w;if(te){if(K)for(J=fe.call(g.ownerDocument);g.firstChild;)J.appendChild(g.firstChild);else J=g;return(u.shadowroot||u.shadowrootmode)&&(J=P.call(o,J,!0)),J}let ne=L?g.outerHTML:g.innerHTML;return L&&W["!doctype"]&&g.ownerDocument&&g.ownerDocument.doctype&&g.ownerDocument.doctype.name&&Q(Do,g.ownerDocument.doctype.name)&&(ne="<!DOCTYPE "+g.ownerDocument.doctype.name+`>
`+ne),ie&&Nt([D,re,xe],Ae=>{ne=rt(ne,Ae," ")}),_&&ge?_.createHTML(ne):ne},t.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};kn(w),H=!0},t.clearConfig=function(){Ye=null,H=!1},t.isValidAttribute=function(w,a,g){Ye||kn({});const y=q(w),R=q(a);return Ko(y,R,g)},t.addHook=function(w,a){typeof a=="function"&&ot(A[w],a)},t.removeHook=function(w,a){if(a!==void 0){const g=Mi(A[w],a);return g===-1?void 0:Ii(A[w],g,1)[0]}return Oo(A[w])},t.removeHooks=function(w){A[w]=[]},t.removeAllHooks=function(){A=Ho()},t}var Uo=Fo();const zo={ADD_ATTR:["target","rel"]};wi();const wn={none:"none",soft:"0 2px 8px rgba(0,0,0,0.08)",medium:"0 4px 16px rgba(0,0,0,0.12)",strong:"0 8px 32px rgba(0,0,0,0.18)","extra-strong":"0 16px 48px rgba(0,0,0,0.28)"};function Ki(e,t){if(console.log("[Ourguide] applyAppearance called",{el:!!e,appearance:t}),!e){console.warn("[Ourguide] applyAppearance skipped — el is null");return}if(!t){console.warn("[Ourguide] applyAppearance skipped — appearance is null/undefined");return}const n=(c,f)=>{f!=null&&f!==""?(console.log(`[Ourguide] setProperty ${c} =`,String(f)),e.style.setProperty(c,String(f))):console.log(`[Ourguide] skipping ${c} — value is`,f)},{colors:o,typography:r,dimensions:i,shadow:s}=t;o&&(n("--og2-bg",o.background),n("--og2-border",o.border),n("--og2-text",o.text),n("--og2-messages-bg",o.messagesBackground),n("--og2-agent-bubble",o.agentBubble),n("--og2-agent-bubble-text",o.agentBubbleText),n("--og2-user-bubble",o.userBubble),n("--og2-user-bubble-text",o.userBubbleText),n("--og2-user-bubble-border",o.userBubbleBorder),n("--og2-send-bg",o.sendButtonBackground),n("--og2-send-icon",o.sendButtonIcon),n("--og2-send-inactive-bg",o.sendButtonInactiveBackground)),r&&(n("--og2-font",r.fontFamily),n("--og2-font-weight",r.fontWeight),n("--og2-line-height",r.lineHeight),r.fontSize&&n("--og2-font-size",`${r.fontSize}px`),r.headerSize&&n("--og2-header-size",`${r.headerSize}px`),typeof r.letterSpacing=="number"&&n("--og2-letter-spacing",`${r.letterSpacing}px`)),i&&(i.width&&n("--og2-width",`${i.width}px`),i.maxHeight&&n("--og2-height",`${i.maxHeight}px`),i.borderRadius!==void 0&&n("--og2-radius",`${i.borderRadius}px`),i.padding!==void 0&&n("--og2-padding",`${i.padding}px`)),s&&(console.log("[Ourguide] shadow:",s,"→",wn[s]??"(not in SHADOW_MAP, skipped)"),wn[s]&&n("--og2-shadow",wn[s])),console.log("[Ourguide] applyAppearance done. container inline styles:",e.style.cssText)}function Ji(e,t){if(console.log("[Ourguide] applyBubble called",{el:e,bubble:t}),!e||!t){console.warn("[Ourguide] applyBubble skipped — el or bubble is falsy",{el:e,bubble:t});return}const n=(o,r)=>{r!=null&&r!==""&&e.style.setProperty(o,String(r))};t.background?n("--og2-bubble-bg",t.background):console.log("[Ourguide] bubble.background falsy — skipping --og2-bubble-bg"),t.border?n("--og2-bubble-border",t.border):console.log("[Ourguide] bubble.border falsy — skipping --og2-bubble-border"),t.icon?n("--og2-bubble-icon",t.icon):console.log("[Ourguide] bubble.icon falsy — skipping --og2-bubble-icon"),t.buttonSize?n("--og2-bubble-size",`${t.buttonSize}px`):console.log("[Ourguide] bubble.buttonSize falsy — skipping --og2-bubble-size"),t.iconSize?n("--og2-bubble-icon-size",`${t.iconSize}px`):console.log("[Ourguide] bubble.iconSize falsy — skipping --og2-bubble-icon-size"),t.right!==void 0?n("--og2-bubble-right",`${t.right}px`):console.log("[Ourguide] bubble.right undefined — skipping --og2-bubble-right"),t.bottom!==void 0?n("--og2-bubble-bottom",`${t.bottom}px`):console.log("[Ourguide] bubble.bottom undefined — skipping --og2-bubble-bottom"),console.log("[Ourguide] applyBubble done. container inline styles:",e.style.cssText)}function Zi({productId:e,apiUrl:t}){const[n,o]=Qn(dr,ur),r=Ce(null),i=Ce(null),s=Ce(null),c=Ce(null),f=Ce(null),d=Ce(null),[h,l]=me(""),[b,m]=me([]),[v,O]=me([]),[$,S]=me(!1),[k,U]=me(!1),_=Ce(null),[C,j]=me("Assistant"),[X,fe]=me("Hi! What can I do for you today?"),[ae,P]=me([]),[A,D]=me(null),re=Ce(null),xe=ae.map(u=>{var E,x;return{...u,message:((E=u.message)==null?void 0:E.trim())||((x=u.buttonLabel)==null?void 0:x.trim())||""}}).filter(u=>!!u.message);Re(()=>{const u=x=>{const M=x.detail;D(M)},E=()=>D(null);return Be.addEventListener("approval-requested",u),Be.addEventListener("approval-dismissed",E),()=>{Be.removeEventListener("approval-requested",u),Be.removeEventListener("approval-dismissed",E),Rr()}},[]);const Mt=bt(u=>{Ir(u),D(null),we()},[]),xn=bt(()=>{var u;(u=re.current)==null||u.abort(),re.current=null,o({type:"STOP_STREAMING"})},[]);Re(()=>{console.log("[Ourguide] fetchConfig called",{apiUrl:t,productId:e}),pr(t,e).then(u=>{var E,x,M,z;console.log("[Ourguide] ── full config received ──",JSON.stringify(u,null,2)),console.log("[Ourguide] config.appearance:",u.appearance),console.log("[Ourguide] config.bubble:",u.bubble),console.log("[Ourguide] config.identity:",u.identity),console.log("[Ourguide] config.suggestions:",u.suggestions),console.log("[Ourguide] containerRef.current:",c.current),Ki(c.current,u.appearance),Ji(c.current,u.bubble),(E=u.identity)!=null&&E.name?(console.log("[Ourguide] setting agentName →",u.identity.name),j(u.identity.name)):console.log("[Ourguide] config.identity?.name is falsy, keeping default. identity =",u.identity),(x=u.identity)!=null&&x.welcomeMessage?(console.log("[Ourguide] setting welcomeMsg →",u.identity.welcomeMessage),fe(u.identity.welcomeMessage)):console.log("[Ourguide] config.identity?.welcomeMessage is falsy, keeping default."),(M=u.suggestions)!=null&&M.length?(console.log("[Ourguide] setting suggestions →",u.suggestions),P(u.suggestions)):console.log("[Ourguide] no suggestions in config (length=",(z=u.suggestions)==null?void 0:z.length,")")}).catch(u=>{console.error("[Ourguide] fetchConfig FAILED:",u)})},[t,e]);const It=bt(()=>{Qt(e),s.current=null,o({type:"FINISH_STREAMING"}),o({type:"CLEAR_MESSAGES"})},[e]);Re(()=>{s.current=Or(e);const u=Cr(e);u.length>0&&o({type:"LOAD_MESSAGES",messages:u})},[e]),Re(()=>{const u=E=>{const x=E.detail;x!=null&&x.productId&&x.productId!==e||It()};return window.addEventListener("og2:resetUser",u),()=>{window.removeEventListener("og2:resetUser",u)}},[e,It]),Re(()=>{!n.isStreaming&&n.messages.length>0&&Ar(e,n.messages)},[n.messages,n.isStreaming,e]),Re(()=>{n.isOpen&&!n.isStreaming&&setTimeout(()=>{var u;return(u=r.current)==null?void 0:u.focus()},50)},[n.isOpen,n.isStreaming]),Re(()=>{var u;(u=i.current)==null||u.scrollIntoView({behavior:"smooth"})},[n.messages,A]);const je=bt(async u=>{const E=u.trim(),x=[...b];if(!E&&x.length===0||n.isStreaming)return;l(""),m([]),r.current&&(r.current.style.height="auto");const M=x.length>0?x.map(L=>`[${L.name}]`).join(" "):"",z=[E,M].filter(Boolean).join(" "),pe=ro();o({type:"ADD_USER_MESSAGE",id:pe,content:z}),Mr();let Ne=[];if(x.length>0)try{Ne=await Promise.all(x.map(async L=>({name:L.name,type:L.type,data:await fr(L)})))}catch{o({type:"SET_ERROR",error:"Failed to read attached files"});return}const Ee=[...n.messages.map(L=>({role:L.role,content:L.content})),{role:"user",content:E||"Please review the attached file(s)."}],Oe=ro();o({type:"START_STREAMING",id:Oe});const Te=new Map,ie=new Map,Ve=L=>({onTextDelta:H=>{o({type:"APPEND_TEXT",text:H})},onToolCall:(H,le,te,K)=>{const ge={id:H,name:le,args:te,status:"calling",providerMetadata:K};Te.set(H,ge),o({type:"ADD_TOOL_CALL",toolCall:ge}),_r(le)&&ie.set(H,{name:le,args:te,providerMetadata:K})},onToolResult:(H,le)=>{o({type:"SET_TOOL_RESULT",toolCallId:H,result:le});const te=Te.get(H);if((te==null?void 0:te.name)==="navigate_to_page"){const K=le;K.route&&(K.confidence??0)>=.5&&Er(K.route,K.params)}},onError:H=>{o({type:"SET_ERROR",error:H})}});try{const L=new AbortController;re.current=L;const{signal:H}=L,le=Zt(e),{stream:te,conversationId:K}=await io(t,e,Ee,le,s.current||void 0,Ne,H);K&&!s.current&&(s.current=K,Nr(e,K));const ge=50;let Pe=Ee,lt=te,V=0;for(;;){if(H.aborted){console.log(`[Ourguide] ── abort detected before round ${V+1}`);break}V++;let He=!1;if(ie.clear(),console.log(`[Ourguide] ── continuation round ${V}/${ge} — parsing stream`),await br(lt,{...Ve(!0),onError:I=>{He=!0,console.error(`[Ourguide] round ${V} stream error:`,I),o({type:"SET_ERROR",error:I})},onFinish:()=>{console.log(`[Ourguide] round ${V} stream finished`)}},H),H.aborted){console.log(`[Ourguide] ── abort detected after round ${V} stream parse`);break}const Fe=[...ie.values()].map(I=>I.name);if(console.log(`[Ourguide] round ${V} parsed — hadError=${He}, pendingClientCalls=${ie.size}`,Fe),He){console.warn(`[Ourguide] stopping: stream error in round ${V}`);break}if(ie.size===0){console.log(`[Ourguide] stopping: no client-side tool calls in round ${V} — LLM responded with text or server-only tools`),o({type:"FINISH_STREAMING"});break}if(V>=ge){console.warn(`[Ourguide] stopping: hit max continuation rounds (${ge})`),o({type:"FINISH_STREAMING"});break}const _e=[];for(const[I,{name:Le,args:qe,providerMetadata:ct}]of ie){console.log(`[Ourguide] round ${V} executing handler: ${Le} (${I})`,qe);const Dt=hr(Le);let be;try{be=await Dt(qe),console.log(`[Ourguide] round ${V} handler ${Le} (${I}) succeeded`,Object.keys(be))}catch(Me){console.error(`[Ourguide] round ${V} handler ${Le} (${I}) threw:`,Me),be={status:"error",error:Me instanceof Error?Me.message:"Handler failed"}}o({type:"SET_TOOL_RESULT",toolCallId:I,result:be}),_e.push({toolCallId:I,toolName:Le,args:qe,result:be,providerMetadata:ct})}Pe=[...Pe,{role:"assistant",content:_e.map(I=>({type:"tool-call",toolCallId:I.toolCallId,toolName:I.toolName,input:I.args,...I.providerMetadata?{providerOptions:I.providerMetadata}:{}}))},{role:"tool",content:_e.map(I=>({type:"tool-result",toolCallId:I.toolCallId,toolName:I.toolName,output:{type:"json",value:I.result}}))}],console.log(`[Ourguide] round ${V} sending continuation with ${Pe.length} messages`);const{stream:ce}=await io(t,e,Pe,void 0,s.current||void 0,void 0,H);console.log(`[Ourguide] round ${V} continuation stream received, entering round ${V+1}`),lt=ce}console.log(`[Ourguide] ── continuation loop ended after ${V} round(s)`)}catch(L){if(L instanceof DOMException&&L.name==="AbortError"){console.log("[Ourguide] request aborted by user");return}console.error("[Ourguide] handleSubmit outer catch:",L);const H=L instanceof Error?L.message:"Something went wrong";o({type:"FINISH_STREAMING"}),o({type:"SET_ERROR",error:H})}finally{re.current=null}},[n.messages,n.isStreaming,t,e,b]);function En(u){u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),je(h))}function Rt(){if(n.messages.length>0){const u=n.messages.find(M=>M.role==="user"),E=u?u.content.slice(0,30):"Conversation",x=n.messages[n.messages.length-1].content.slice(0,50);O(M=>[{id:Date.now(),title:E,preview:x,messages:[...n.messages]},...M])}Qt(e),s.current=null,o({type:"CLEAR_MESSAGES"}),S(!1)}function W(u){o({type:"LOAD_MESSAGES",messages:u.messages}),O(E=>E.filter(x=>x.id!==u.id)),S(!1)}function $t(){var M;const u=window.SpeechRecognition||window.webkitSpeechRecognition;if(!u)return;if(k){(M=_.current)==null||M.stop(),U(!1);return}const E=new u;E.lang="en-US",E.interimResults=!0,E.continuous=!0;const x=h.trimEnd();E.onresult=z=>{let pe="",Ne="";for(let Oe=0;Oe<z.results.length;Oe++){const Te=z.results[Oe];Te.isFinal?pe+=Te[0].transcript:Ne+=Te[0].transcript}const Ee=(pe+Ne).trim();l(x?`${x} ${Ee}`:Ee)},E.onend=()=>U(!1),E.onerror=()=>U(!1),_.current=E,E.start(),U(!0)}return p("div",{className:"og2-container",ref:c,children:[n.isOpen&&p("div",{className:"og2-panel",children:[p("div",{className:"og2-panel-header",children:[p("span",{className:"og2-panel-title",children:C}),p("div",{className:"og2-header-actions",children:[p("button",{className:"og2-action-btn",onClick:Rt,"aria-label":"New conversation",title:"New conversation",children:p("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M12 5v14M5 12h14"})})}),p("button",{className:"og2-action-btn",onClick:()=>S(u=>!u),"aria-label":"Recent conversations",title:"Recent conversations",children:p("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),p("path",{d:"M3 3v5h5"}),p("path",{d:"M12 7v5l4 2"})]})}),p("button",{className:"og2-close-btn",onClick:()=>o({type:"CLOSE"}),"aria-label":"Close",children:p("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:p("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),$&&p("div",{className:"og2-history-panel",children:[p("div",{className:"og2-history-header",children:[p("span",{className:"og2-history-title",children:"Recent Conversations"}),p("button",{className:"og2-action-btn",onClick:()=>S(!1),"aria-label":"Close history",children:p("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:p("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),p("div",{className:"og2-history-list",children:v.length===0?p("p",{className:"og2-history-empty",children:"No conversations yet"}):v.map(u=>p("button",{className:"og2-history-item",onClick:()=>W(u),children:[p("span",{className:"og2-history-item-title",children:u.title}),p("span",{className:"og2-history-item-preview",children:u.preview})]},u.id))})]}),p("div",{className:"og2-messages",children:p("div",{className:"og2-messages-inner",children:[p("div",{className:"og2-message og2-message-assistant",children:p("div",{className:"og2-bubble og2-md",dangerouslySetInnerHTML:{__html:Uo.sanitize(Ao(X),zo)}})}),xe.length>0&&n.messages.length===0&&p("div",{className:"og2-suggestions",children:xe.map((u,E)=>p("button",{className:"og2-suggestion-btn",onClick:()=>je(u.message),children:u.message},E))}),n.messages.map(u=>{var E;return u.isStreaming&&!u.content&&!((E=u.toolCalls)!=null&&E.length)?p("div",{className:"og2-message og2-message-assistant",children:p("span",{className:"og2-shimmer-text",children:"Thinking"})},u.id):p("div",{className:`og2-message og2-message-${u.role}`,children:u.role==="assistant"?p("div",{className:"og2-assistant-content",children:[u.toolCalls&&u.toolCalls.length>0&&p(Qi,{toolCalls:u.toolCalls,awaitingResponse:u.isStreaming&&!u.content,hasContent:!!u.content}),u.content&&p("div",{className:"og2-bubble og2-md",children:p("span",{dangerouslySetInnerHTML:{__html:Uo.sanitize(Ao(u.content),zo)}})})]}):p("div",{className:"og2-bubble",children:u.content})},u.id)}),A&&p("div",{className:"og2-message og2-message-assistant og2-message-full",children:p("div",{className:"og2-approval-card",children:[p("div",{className:"og2-approval-header",children:p("span",{className:"og2-approval-label",children:"Action requested"})}),p("p",{className:"og2-approval-desc",children:"The assistant wants to take actions on this page."}),p("div",{className:"og2-approval-actions",children:[p("button",{className:"og2-approval-deny",onClick:()=>Mt(!1),children:"Deny"}),p("button",{className:"og2-approval-allow",onClick:()=>Mt(!0),children:"Allow"})]})]})}),n.error&&p("div",{className:"og2-message og2-message-error",children:p("div",{className:"og2-bubble",children:n.error})}),p("div",{ref:i})]})}),p("div",{className:"og2-footer",children:[p("div",{className:"og2-powered-by",children:[p("svg",{className:"og2-powered-by-logo",width:"20",height:"20",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[p("circle",{cx:"20",cy:"20",r:"9",stroke:"#38bdf8",strokeWidth:"2.2",fill:"none"}),p("circle",{cx:"20",cy:"20",r:"11",stroke:"#38bdf8",strokeWidth:"0.6",fill:"none",opacity:"0.25"})]}),p("p",{className:"og2-powered-by-text",children:"Powered by Ourguide"})]}),p("div",{className:"og2-input-area",children:[b.length>0&&p("div",{className:"og2-file-chips",children:b.map((u,E)=>p("span",{className:"og2-file-chip",children:[p("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),p("polyline",{points:"13 2 13 9 20 9"})]}),u.name.length>18?`${u.name.slice(0,16)}…`:u.name,p("button",{className:"og2-file-chip-remove",onClick:()=>m(x=>x.filter((M,z)=>z!==E)),"aria-label":`Remove ${u.name}`,children:"×"})]},E))}),p("textarea",{ref:r,className:"og2-input",rows:1,value:h,onInput:u=>{l(u.target.value),u.target.style.height="auto",u.target.style.height=`${u.target.scrollHeight}px`},onKeyDown:En,placeholder:"Message..."}),p("div",{className:"og2-input-toolbar",children:[p("div",{className:"og2-input-toolbar-left",children:[p("button",{className:"og2-upload-btn",onClick:()=>{var u;return(u=d.current)==null?void 0:u.click()},"aria-label":"Attach file",title:"Attach file",children:p("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.42 16.41a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),p("input",{ref:d,type:"file",multiple:!0,accept:"image/*,.pdf,.doc,.docx,.txt,.csv,.md",style:{display:"none"},onChange:u=>{const x=Array.from(u.target.files??[]),M=x.filter(z=>z.size<=20971520);if(M.length<x.length){const z=x.length-M.length;o({type:"SET_ERROR",error:`${z} file${z>1?"s":""} exceeded the 20MB size limit and ${z>1?"were":"was"} skipped`})}M.length>0&&m(z=>[...z,...M]),u.target.value=""}}),p("button",{className:`og2-mic-btn${k?" og2-mic-active":""}`,onClick:$t,"aria-label":"Voice input",title:"Voice input",children:p("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[p("rect",{x:"9",y:"2",width:"6",height:"11",rx:"3"}),p("path",{d:"M5 10a7 7 0 0 0 14 0M12 19v3M8 22h8"})]})})]}),p("button",{className:`og2-send-btn${n.isStreaming?" og2-stop-active":h.trim()||b.length>0?" og2-send-active":""}`,onClick:n.isStreaming?xn:()=>je(h),"aria-label":n.isStreaming?"Stop generating":"Send message",title:n.isStreaming?"Stop generating":"Send message",children:n.isStreaming?p("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:p("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}):p("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M12 19V5M5 12l7-7 7 7"})})})]})]})]})]}),p("button",{ref:f,className:"og2-trigger",onClick:()=>o(n.isOpen?{type:"CLOSE"}:{type:"OPEN"}),"aria-label":n.isOpen?"Close assistant":"Open assistant",children:n.isOpen?p("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:p("path",{d:"M6 6L18 18M18 6L6 18"})}):p("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})})})]})}function Qi({toolCalls:e,awaitingResponse:t,hasContent:n}){const[o,r]=me(!1),i=e[e.length-1],s=e.length,c=i.status==="calling"||t&&(i.name==="capture_screen"||i.name==="capture_screen_for_action")&&i.status==="done",f=!c&&n,d=p("svg",{className:"og2-step-check",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M20 6L9 17l-5-5"})});return f?p("div",{className:"og2-tool-steps",children:[p("button",{className:"og2-tool-summary",onClick:()=>r(!o),children:[p("span",{className:"og2-tool-step-done",children:[s," step",s!==1?"s":"",d]}),p("svg",{className:`og2-tool-summary-chevron ${o?"og2-chevron-open":""}`,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M9 18l6-6-6-6"})})]}),o&&e.map(h=>p("div",{className:"og2-tool-step",children:p("span",{className:"og2-tool-step-done",children:[Bo(h,!1),d]})},h.id))]}):p("div",{className:"og2-tool-steps",children:p("div",{className:"og2-tool-current",children:p("span",{className:c?"og2-shimmer-text":"og2-shimmer-fade",children:[Bo(i,t),!c&&d]})})})}function Bo(e,t){var n,o;if(e.name==="navigate_to_page"){if(e.status==="calling")return"Finding the right page...";const r=e.result;return r!=null&&r.route?`Navigated to ${r.route}`:"No matching page found"}if(e.name==="capture_screen")return e.status==="calling"||t?"Looking at your screen...":"Screen captured";if(e.name==="capture_screen_for_action")return e.status==="calling"||t?"Analyzing page elements...":"Page elements captured";if(e.name==="perform_action"){const r=((n=e.args)==null?void 0:n.description)||"Performing action";if(e.status==="calling")return r+"...";const i=e.result;return i!=null&&i.denied?"Action denied":(i==null?void 0:i.success)===!1?"Action failed":r}if(e.name==="batch_fill_form"){const r=((o=e.args)==null?void 0:o.description)||"Filling form";if(e.status==="calling")return r+"...";const i=e.result;return i!=null&&i.denied?"Form fill denied":(i==null?void 0:i.success)===!1?"Some fields failed":r}return e.name==="plan_actions"?e.status==="calling"?"Planning actions...":"Plan ready":e.name}const es=`/* Ourguide-B2B Widget - All classes prefixed with og2- */

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
`;(function(){const e=document.currentScript??document.querySelector('script[data-product-id][src*="ourguide-b2b-widget"]');if(!e){console.error("[Ourguide-B2B] Could not find script element");return}const t=e.dataset.productId||"",n=e.dataset.apiUrl??"http://localhost:3000";if(!t){console.error("[Ourguide-B2B] data-product-id is required");return}async function o(l,b){try{if(l==="registerTools"){b&&typeof b=="object"&&so(b);return}if(l==="identify"){const m=b??{};if(!m.token||typeof m.token!="string"||!m.token.trim()){console.warn("[Ourguide-B2B] identify: token is required");return}const v=Zt(t);await gr(n,t,v,m.token,m.name);return}if(l==="resetUser"){const m=Zt(t);await mr(n,t,m),kr(t),Qt(t),window.dispatchEvent(new CustomEvent("og2:resetUser",{detail:{productId:t}}));return}}catch(m){const v=m instanceof Error?m.message:"Unknown error";console.warn(`[Ourguide-B2B] ${l} failed: ${v}`)}}const r=window,i=Array.isArray(r.ourguide)?r.ourguide:[];r.ourguide=(l,b)=>{o(l,b)};for(const l of i)Array.isArray(l)&&(l[0]==="identify"||l[0]==="resetUser"||l[0]==="registerTools")&&o(l[0],l[1]);const s=document.createElement("link");s.rel="stylesheet",s.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",document.head.appendChild(s);const c=document.createElement("div");c.id="og2-widget-root",document.body.appendChild(c);const f=c.attachShadow({mode:"open"}),d=document.createElement("style");d.textContent=es,f.appendChild(d);const h=document.createElement("div");f.appendChild(h),sr($n(Zi,{productId:t,apiUrl:n}),h)})()})();
