(function(){"use strict";var D,m,se,M,ae,le,_e,ce,J,K,X,I={},ue=[],De=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function L(e,n){for(var t in n)e[t]=n[t];return e}function Y(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function de(e,n,t){var o,i,r,a={};for(r in n)r=="key"?o=n[r]:r=="ref"?i=n[r]:a[r]=n[r];if(arguments.length>2&&(a.children=arguments.length>3?D.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)a[r]===void 0&&(a[r]=e.defaultProps[r]);return U(e,a,o,i,null)}function U(e,n,t,o,i){var r={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++se,__i:-1,__u:0};return i==null&&m.vnode!=null&&m.vnode(r),r}function F(e){return e.children}function j(e,n){this.props=e,this.context=n}function A(e,n){if(n==null)return e.__?A(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?A(e):null}function pe(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return pe(e)}}function fe(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!W.__r++||ae!=m.debounceRendering)&&((ae=m.debounceRendering)||le)(W)}function W(){for(var e,n,t,o,i,r,a,_=1;M.length;)M.length>_&&M.sort(_e),e=M.shift(),_=M.length,e.__d&&(t=void 0,o=void 0,i=(o=(n=e).__v).__e,r=[],a=[],n.__P&&((t=L({},o)).__v=o.__v+1,m.vnode&&m.vnode(t),Z(n.__P,t,o,n.__n,n.__P.namespaceURI,32&o.__u?[i]:null,r,i??A(o),!!(32&o.__u),a),t.__v=o.__v,t.__.__k[t.__i]=t,be(r,t,a),o.__e=o.__=null,t.__e!=i&&pe(t)));W.__r=0}function ge(e,n,t,o,i,r,a,_,u,l,c){var s,f,d,k,C,y,h,g=o&&o.__k||ue,v=n.length;for(u=Be(t,n,g,u,v),s=0;s<v;s++)(d=t.__k[s])!=null&&(f=d.__i==-1?I:g[d.__i]||I,d.__i=s,y=Z(e,d,f,i,r,a,_,u,l,c),k=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&ee(f.ref,null,d),c.push(d.ref,d.__c||k,d)),C==null&&k!=null&&(C=k),(h=!!(4&d.__u))||f.__k===d.__k?u=he(d,u,e,h):typeof d.type=="function"&&y!==void 0?u=y:k&&(u=k.nextSibling),d.__u&=-7);return t.__e=C,u}function Be(e,n,t,o,i){var r,a,_,u,l,c=t.length,s=c,f=0;for(e.__k=new Array(i),r=0;r<i;r++)(a=n[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[r]=U(null,a,null,null,null):B(a)?a=e.__k[r]=U(F,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[r]=U(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[r]=a,u=r+f,a.__=e,a.__b=e.__b+1,_=null,(l=a.__i=Ue(a,t,u,s))!=-1&&(s--,(_=t[l])&&(_.__u|=2)),_==null||_.__v==null?(l==-1&&(i>c?f--:i<c&&f++),typeof a.type!="function"&&(a.__u|=4)):l!=u&&(l==u-1?f--:l==u+1?f++:(l>u?f--:f++,a.__u|=4))):e.__k[r]=null;if(s)for(r=0;r<c;r++)(_=t[r])!=null&&(2&_.__u)==0&&(_.__e==o&&(o=A(_)),xe(_,_));return o}function he(e,n,t,o){var i,r;if(typeof e.type=="function"){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,n=he(i[r],n,t,o));return n}e.__e!=n&&(o&&(n&&e.type&&!n.parentNode&&(n=A(e)),t.insertBefore(e.__e,n||null)),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType==8);return n}function Ue(e,n,t,o){var i,r,a,_=e.key,u=e.type,l=n[t],c=l!=null&&(2&l.__u)==0;if(l===null&&_==null||c&&_==l.key&&u==l.type)return t;if(o>(c?1:0)){for(i=t-1,r=t+1;i>=0||r<n.length;)if((l=n[a=i>=0?i--:r++])!=null&&(2&l.__u)==0&&_==l.key&&u==l.type)return a}return-1}function me(e,n,t){n[0]=="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||De.test(n)?t:t+"px"}function z(e,n,t,o,i){var r,a;e:if(n=="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||me(e.style,n,"");if(t)for(n in t)o&&t[n]==o[n]||me(e.style,n,t[n])}else if(n[0]=="o"&&n[1]=="n")r=n!=(n=n.replace(ce,"$1")),a=n.toLowerCase(),n=a in e||n=="onFocusOut"||n=="onFocusIn"?a.slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?o?t.u=o.u:(t.u=J,e.addEventListener(n,r?X:K,r)):e.removeEventListener(n,r?X:K,r);else{if(i=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n!="popover"&&n in e)try{e[n]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!="-"?e.removeAttribute(n):e.setAttribute(n,n=="popover"&&t==1?"":t))}}function ve(e){return function(n){if(this.l){var t=this.l[n.type+e];if(n.t==null)n.t=J++;else if(n.t<t.u)return;return t(m.event?m.event(n):n)}}}function Z(e,n,t,o,i,r,a,_,u,l){var c,s,f,d,k,C,y,h,g,v,w,T,S,E,R,$,P,N=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[_=n.__e=t.__e]),(c=m.__b)&&c(n);e:if(typeof N=="function")try{if(h=n.props,g="prototype"in N&&N.prototype.render,v=(c=N.contextType)&&o[c.__c],w=c?v?v.props.value:c.__:o,t.__c?y=(s=n.__c=t.__c).__=s.__E:(g?n.__c=s=new N(h,w):(n.__c=s=new j(h,w),s.constructor=N,s.render=je),v&&v.sub(s),s.state||(s.state={}),s.__n=o,f=s.__d=!0,s.__h=[],s._sb=[]),g&&s.__s==null&&(s.__s=s.state),g&&N.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=L({},s.__s)),L(s.__s,N.getDerivedStateFromProps(h,s.__s))),d=s.props,k=s.state,s.__v=n,f)g&&N.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),g&&s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(g&&N.getDerivedStateFromProps==null&&h!==d&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(h,w),n.__v==t.__v||!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(h,s.__s,w)===!1){for(n.__v!=t.__v&&(s.props=h,s.state=s.__s,s.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.some(function(O){O&&(O.__=n)}),T=0;T<s._sb.length;T++)s.__h.push(s._sb[T]);s._sb=[],s.__h.length&&a.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(h,s.__s,w),g&&s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(d,k,C)})}if(s.context=w,s.props=h,s.__P=e,s.__e=!1,S=m.__r,E=0,g){for(s.state=s.__s,s.__d=!1,S&&S(n),c=s.render(s.props,s.state,s.context),R=0;R<s._sb.length;R++)s.__h.push(s._sb[R]);s._sb=[]}else do s.__d=!1,S&&S(n),c=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++E<25);s.state=s.__s,s.getChildContext!=null&&(o=L(L({},o),s.getChildContext())),g&&!f&&s.getSnapshotBeforeUpdate!=null&&(C=s.getSnapshotBeforeUpdate(d,k)),$=c,c!=null&&c.type===F&&c.key==null&&($=ye(c.props.children)),_=ge(e,B($)?$:[$],n,t,o,i,r,a,_,u,l),s.base=n.__e,n.__u&=-161,s.__h.length&&a.push(s),y&&(s.__E=s.__=null)}catch(O){if(n.__v=null,u||r!=null)if(O.then){for(n.__u|=u?160:128;_&&_.nodeType==8&&_.nextSibling;)_=_.nextSibling;r[r.indexOf(_)]=null,n.__e=_}else{for(P=r.length;P--;)Y(r[P]);Q(n)}else n.__e=t.__e,n.__k=t.__k,O.then||Q(n);m.__e(O,n,t)}else r==null&&n.__v==t.__v?(n.__k=t.__k,n.__e=t.__e):_=n.__e=Fe(t.__e,n,t,o,i,r,a,u,l);return(c=m.diffed)&&c(n),128&n.__u?void 0:_}function Q(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Q)}function be(e,n,t){for(var o=0;o<t.length;o++)ee(t[o],t[++o],t[++o]);m.__c&&m.__c(n,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){m.__e(r,i.__v)}})}function ye(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:B(e)?e.map(ye):L({},e)}function Fe(e,n,t,o,i,r,a,_,u){var l,c,s,f,d,k,C,y=t.props||I,h=n.props,g=n.type;if(g=="svg"?i="http://www.w3.org/2000/svg":g=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((d=r[l])&&"setAttribute"in d==!!g&&(g?d.localName==g:d.nodeType==3)){e=d,r[l]=null;break}}if(e==null){if(g==null)return document.createTextNode(h);e=document.createElementNS(i,g,h.is&&h),_&&(m.__m&&m.__m(n,r),_=!1),r=null}if(g==null)y===h||_&&e.data==h||(e.data=h);else{if(r=r&&D.call(e.childNodes),!_&&r!=null)for(y={},l=0;l<e.attributes.length;l++)y[(d=e.attributes[l]).name]=d.value;for(l in y)if(d=y[l],l!="children"){if(l=="dangerouslySetInnerHTML")s=d;else if(!(l in h)){if(l=="value"&&"defaultValue"in h||l=="checked"&&"defaultChecked"in h)continue;z(e,l,null,d,i)}}for(l in h)d=h[l],l=="children"?f=d:l=="dangerouslySetInnerHTML"?c=d:l=="value"?k=d:l=="checked"?C=d:_&&typeof d!="function"||y[l]===d||z(e,l,d,y[l],i);if(c)_||s&&(c.__html==s.__html||c.__html==e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(s&&(e.innerHTML=""),ge(n.type=="template"?e.content:e,B(f)?f:[f],n,t,o,g=="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,a,r?r[0]:t.__k&&A(t,0),_,u),r!=null)for(l=r.length;l--;)Y(r[l]);_||(l="value",g=="progress"&&k==null?e.removeAttribute("value"):k!=null&&(k!==e[l]||g=="progress"&&!k||g=="option"&&k!=y[l])&&z(e,l,k,y[l],i),l="checked",C!=null&&C!=e[l]&&z(e,l,C,y[l],i))}return e}function ee(e,n,t){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&n==null||(e.__u=e(n))}else e.current=n}catch(i){m.__e(i,t)}}function xe(e,n,t){var o,i;if(m.unmount&&m.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||ee(o,null,n)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){m.__e(r,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&xe(o[i],n,t||typeof e.type!="function");t||Y(e.__e),e.__c=e.__=e.__e=void 0}function je(e,n,t){return this.constructor(e,t)}function We(e,n,t){var o,i,r,a;n==document&&(n=document.documentElement),m.__&&m.__(e,n),i=(o=!1)?null:n.__k,r=[],a=[],Z(n,e=n.__k=de(F,null,[e]),i||I,I,n.namespaceURI,i?null:n.firstChild?D.call(n.childNodes):null,r,i?i.__e:n.firstChild,o,a),be(r,e,a)}D=ue.slice,m={__e:function(e,n,t,o){for(var i,r,a;n=n.__;)if((i=n.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),a=i.__d),a)return i.__E=i}catch(_){e=_}throw e}},se=0,j.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},t),this.props)),e&&L(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),fe(this))},j.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),fe(this))},j.prototype.render=F,M=[],le=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_e=function(e,n){return e.__v.__b-n.__v.__b},W.__r=0,ce=/(PointerCapture)$|Capture$/i,J=0,K=ve(!1),X=ve(!0);var ze=0;function p(e,n,t,o,i,r){n||(n={});var a,_,u=n;if("ref"in u)for(_ in u={},n)_=="ref"?a=n[_]:u[_]=n[_];var l={type:e,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ze,__i:-1,__u:0,__source:i,__self:r};if(typeof e=="function"&&(a=e.defaultProps))for(_ in a)u[_]===void 0&&(u[_]=a[_]);return m.vnode&&m.vnode(l),l}var H,b,ne,ke,G=0,we=[],x=m,Se=x.__b,Ee=x.__r,Ne=x.diffed,Ce=x.__c,Te=x.unmount,Le=x.__;function te(e,n){x.__h&&x.__h(b,e,G||n),G=0;var t=b.__H||(b.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Ge(e,n,t){var o=te(H++,2);if(o.t=e,!o.__c&&(o.__=[Ke(void 0,n),function(_){var u=o.__N?o.__N[0]:o.__[0],l=o.t(u,_);u!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=b,!b.__f)){var i=function(_,u,l){if(!o.__c.__H)return!0;var c=o.__c.__H.__.filter(function(f){return!!f.__c});if(c.every(function(f){return!f.__N}))return!r||r.call(this,_,u,l);var s=o.__c.props!==_;return c.forEach(function(f){if(f.__N){var d=f.__[0];f.__=f.__N,f.__N=void 0,d!==f.__[0]&&(s=!0)}}),r&&r.call(this,_,u,l)||s};b.__f=!0;var r=b.shouldComponentUpdate,a=b.componentWillUpdate;b.componentWillUpdate=function(_,u,l){if(this.__e){var c=r;r=void 0,i(_,u,l),r=c}a&&a.call(this,_,u,l)},b.shouldComponentUpdate=i}return o.__N||o.__}function q(e,n){var t=te(H++,3);!x.__s&&Re(t.__H,n)&&(t.__=e,t.u=n,b.__H.__h.push(t))}function Oe(e){return G=5,$e(function(){return{current:e}},[])}function $e(e,n){var t=te(H++,7);return Re(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function qe(e,n){return G=8,$e(function(){return e},n)}function Ve(){for(var e;e=we.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(V),e.__H.__h.forEach(oe),e.__H.__h=[]}catch(n){e.__H.__h=[],x.__e(n,e.__v)}}x.__b=function(e){b=null,Se&&Se(e)},x.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Le&&Le(e,n)},x.__r=function(e){Ee&&Ee(e),H=0;var n=(b=e.__c).__H;n&&(ne===b?(n.__h=[],b.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(n.__h.forEach(V),n.__h.forEach(oe),n.__h=[],H=0)),ne=b},x.diffed=function(e){Ne&&Ne(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(we.push(n)!==1&&ke===x.requestAnimationFrame||((ke=x.requestAnimationFrame)||Je)(Ve)),n.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),ne=b=null},x.__c=function(e,n){n.some(function(t){try{t.__h.forEach(V),t.__h=t.__h.filter(function(o){return!o.__||oe(o)})}catch(o){n.some(function(i){i.__h&&(i.__h=[])}),n=[],x.__e(o,t.__v)}}),Ce&&Ce(e,n)},x.unmount=function(e){Te&&Te(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{V(o)}catch(i){n=i}}),t.__H=void 0,n&&x.__e(n,t.__v))};var Me=typeof requestAnimationFrame=="function";function Je(e){var n,t=function(){clearTimeout(o),Me&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,35);Me&&(n=requestAnimationFrame(t))}function V(e){var n=b,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),b=n}function oe(e){var n=b;e.__c=e.__(),b=n}function Re(e,n){return!e||e.length!==n.length||n.some(function(t,o){return t!==e[o]})}function Ke(e,n){return typeof n=="function"?n(e):n}const Xe={isOpen:!1,messages:[],isStreaming:!1,error:null};function Ae(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function Ye(e,n){switch(n.type){case"OPEN":return{...e,isOpen:!0,error:null};case"CLOSE":return{...e,isOpen:!1};case"LOAD_MESSAGES":return{...e,messages:n.messages};case"ADD_USER_MESSAGE":return{...e,error:null,messages:[...e.messages,{id:n.id,role:"user",content:n.content}]};case"START_STREAMING":return{...e,isStreaming:!0,error:null,messages:[...e.messages,{id:n.id,role:"assistant",content:"",isStreaming:!0}]};case"APPEND_TEXT":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,content:o.content+n.text}),{...e,messages:t}}case"ADD_TOOL_CALL":{const t=[...e.messages],o=t[t.length-1];if(o&&o.role==="assistant"){const i=[...o.toolCalls??[],n.toolCall];t[t.length-1]={...o,toolCalls:i}}return{...e,messages:t}}case"SET_TOOL_RESULT":{const t=[...e.messages],o=t[t.length-1];if(o&&o.role==="assistant"&&o.toolCalls){const i=o.toolCalls.map(r=>r.id===n.toolCallId?{...r,result:n.result,status:"done"}:r);t[t.length-1]={...o,toolCalls:i}}return{...e,messages:t}}case"FINISH_STREAMING":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,isStreaming:!1}),{...e,isStreaming:!1,messages:t}}case"SET_ERROR":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,isStreaming:!1}),{...e,isStreaming:!1,error:n.error,messages:t}}case"CLEAR_MESSAGES":return{...e,messages:[],error:null};default:return e}}async function Ie(e,n,t){const o=await fetch(`${e}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,messages:t})});if(!o.ok){const i=await o.json().catch(()=>({error:"Request failed"}));throw new Error(i.error||`HTTP ${o.status}`)}if(!o.body)throw new Error("No response stream available");return o.body}const re={};function Ze(e){Object.assign(re,e)}function Qe(e){return re[e]}function en(e){return e in re}async function He(e,n){const t=e.getReader(),o=new TextDecoder;let i="";try{for(;;){const{done:r,value:a}=await t.read();if(r)break;i+=o.decode(a,{stream:!0});const _=i.split(`

`);i=_.pop()??"";for(const u of _)Pe(u.trim(),n)}i.trim()&&Pe(i.trim(),n),n.onFinish()}catch(r){const a=r instanceof Error?r.message:"Stream read failed";n.onError(a)}finally{t.releaseLock()}}function Pe(e,n){const t=e.split(`
`);for(const o of t){if(!o.startsWith("data: "))continue;const i=o.slice(6);if(i==="[DONE]")return;try{const r=JSON.parse(i);switch(r.type){case"text-delta":r.delta&&n.onTextDelta(r.delta);break;case"tool-input-available":r.toolCallId&&r.toolName&&n.onToolCall(r.toolCallId,r.toolName,r.input??{});break;case"tool-output-available":r.toolCallId&&n.onToolResult(r.toolCallId,r.output);break;case"tool-call":r.toolCallId&&r.toolName&&n.onToolCall(r.toolCallId,r.toolName,r.input??{});break;case"tool-result":r.toolCallId&&n.onToolResult(r.toolCallId,r.output);break;case"error":n.onError(r.errorText??r.reason??"Unknown error");break;case"abort":n.onError(r.reason??"Response aborted");break;default:break}}catch{}}}function nn(e,n){if(!n)return e;let t=e;for(const[o,i]of Object.entries(n))t=t.replace(`:${o}`,encodeURIComponent(i));return t}function tn(e){var o;const n=e.replace(/\/$/,"")||"/",t=document.querySelectorAll("a[href]");for(const i of t){const r=i;if((((o=r.pathname)==null?void 0:o.replace(/\/$/,""))||"/")===n)return r.click(),console.log(`[Ourguide-B2B] Navigated via anchor click: ${e}`),!0}return!1}function on(e){var i,r;const n=window,t=n.next;if((i=t==null?void 0:t.router)!=null&&i.push)return t.router.push(e),console.log(`[Ourguide-B2B] Navigated via Next.js router: ${e}`),!0;if(n.__NUXT__){const a=n.$nuxt;if((r=a==null?void 0:a.$router)!=null&&r.push)return a.$router.push(e),console.log(`[Ourguide-B2B] Navigated via Vue/Nuxt router: ${e}`),!0}return!1}function rn(e){try{return window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate",{state:{}})),console.log(`[Ourguide-B2B] Navigated via pushState: ${e}`),!0}catch{return!1}}async function sn(e,n){const t=nn(e,n);return tn(t)||on(t)||rn(t)||(console.log(`[Ourguide-B2B] Navigated via hard navigation: ${t}`),window.location.href=t),!0}const an="og2-chat-";function ie(e){return`${an}${e}`}function ln(e,n){try{const t=n.map(({isStreaming:o,...i})=>i);sessionStorage.setItem(ie(e),JSON.stringify(t))}catch{}}function _n(e){try{const n=sessionStorage.getItem(ie(e));return n?JSON.parse(n):[]}catch{return[]}}function cn(e){try{sessionStorage.removeItem(ie(e))}catch{}}function un({productId:e,apiUrl:n,position:t}){const[o,i]=Ge(Ye,Xe),r=Oe(null),a=Oe(null);q(()=>{const c=_n(e);c.length>0&&i({type:"LOAD_MESSAGES",messages:c})},[e]),q(()=>{!o.isStreaming&&o.messages.length>0&&ln(e,o.messages)},[o.messages,o.isStreaming,e]),q(()=>{o.isOpen&&!o.isStreaming&&setTimeout(()=>{var c;return(c=r.current)==null?void 0:c.focus()},50)},[o.isOpen,o.isStreaming]),q(()=>{var c;(c=a.current)==null||c.scrollIntoView({behavior:"smooth"})},[o.messages]);const _=qe(async c=>{const s=c.trim();if(!s||o.isStreaming)return;r.current&&(r.current.value="");const f=Ae();i({type:"ADD_USER_MESSAGE",id:f,content:s});const d=[...o.messages.map(g=>({role:g.role,content:g.content})),{role:"user",content:s}],k=Ae();i({type:"START_STREAMING",id:k});const C=new Map,y=new Map,h=g=>({onTextDelta:v=>{i({type:"APPEND_TEXT",text:v})},onToolCall:(v,w,T)=>{const S={id:v,name:w,args:T,status:"calling"};C.set(v,S),i({type:"ADD_TOOL_CALL",toolCall:S}),g&&en(w)&&y.set(v,{name:w,args:T})},onToolResult:(v,w)=>{i({type:"SET_TOOL_RESULT",toolCallId:v,result:w});const T=C.get(v);if((T==null?void 0:T.name)==="navigate_to_page"){const S=w;S.route&&(S.confidence??0)>=.5&&sn(S.route,S.params)}},onError:v=>{i({type:"SET_ERROR",error:v})}});try{const g=await Ie(n,e,d);let v=!1;if(await He(g,{...h(!0),onError:E=>{v=!0,i({type:"SET_ERROR",error:E})},onFinish:()=>{}}),v||y.size===0){v||i({type:"FINISH_STREAMING"});return}const w=[];for(const[E,{name:R,args:$}]of y){const P=Qe(R);let N;try{N=await P($)}catch(O){N={status:"error",error:O instanceof Error?O.message:"Handler failed"}}i({type:"SET_TOOL_RESULT",toolCallId:E,result:N}),w.push({toolCallId:E,toolName:R,args:$,result:N})}const T=[...d,{role:"assistant",content:w.map(E=>({type:"tool-call",toolCallId:E.toolCallId,toolName:E.toolName,args:E.args}))},{role:"tool",content:w.map(E=>({type:"tool-result",toolCallId:E.toolCallId,toolName:E.toolName,output:{type:"json",value:E.result}}))}],S=await Ie(n,e,T);await He(S,{...h(!1),onFinish:()=>{i({type:"FINISH_STREAMING"})}})}catch(g){const v=g instanceof Error?g.message:"Something went wrong";i({type:"FINISH_STREAMING"}),i({type:"SET_ERROR",error:v})}},[o.messages,o.isStreaming,n,e]);function u(c){c.key==="Enter"&&!c.shiftKey&&r.current&&(c.preventDefault(),_(r.current.value))}function l(){cn(e),i({type:"CLEAR_MESSAGES"})}return p("div",{className:`og2-container og2-${t}`,children:[o.isOpen&&p("div",{className:"og2-panel",children:[p("div",{className:"og2-panel-header",children:[p("span",{className:"og2-panel-title",children:"Assistant"}),p("div",{className:"og2-header-actions",children:[o.messages.length>0&&p("button",{className:"og2-clear-btn",onClick:l,"aria-label":"Clear chat",title:"Clear chat",children:p("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"})})}),p("button",{className:"og2-close-btn",onClick:()=>i({type:"CLOSE"}),"aria-label":"Close",children:p("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:p("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),p("div",{className:"og2-messages",children:[o.messages.length===0&&!o.error&&p("div",{className:"og2-empty-state",children:"Ask me anything or tell me where you'd like to go."}),o.messages.map(c=>p("div",{className:`og2-message og2-message-${c.role}`,children:p("div",{className:"og2-bubble",children:[c.content,c.isStreaming&&p("span",{className:"og2-cursor"}),dn(c.toolCalls)]})},c.id)),o.error&&p("div",{className:"og2-message og2-message-error",children:p("div",{className:"og2-bubble",children:o.error})}),p("div",{ref:a})]}),p("div",{className:"og2-input-area",children:[p("input",{ref:r,className:"og2-input",type:"text",placeholder:"Ask anything or navigate...",onKeyDown:u,disabled:o.isStreaming}),p("button",{className:"og2-send-btn",onClick:()=>r.current&&_(r.current.value),disabled:o.isStreaming,children:o.isStreaming?p("span",{className:"og2-spinner og2-spinner-sm"}):p("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"})})})]})]}),p("button",{className:"og2-trigger",onClick:()=>i(o.isOpen?{type:"CLOSE"}:{type:"OPEN"}),"aria-label":o.isOpen?"Close assistant":"Open assistant",children:o.isOpen?p("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:p("path",{d:"M6 6L18 18M18 6L6 18"})}):p("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})})})]})}function dn(e){return!e||e.length===0?null:p("div",{className:"og2-tool-calls",children:e.map(n=>p("div",{className:"og2-tool-indicator",children:[n.status==="calling"&&p("span",{className:"og2-spinner og2-spinner-sm"}),n.status==="done"&&p("svg",{className:"og2-tool-check",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:p("path",{d:"M20 6L9 17L4 12"})}),p("span",{className:"og2-tool-label",children:pn(n)})]},n.id))})}function pn(e){if(e.name==="navigate_to_page"){if(e.status==="calling")return"Finding the right page...";const n=e.result;return n!=null&&n.route?`Navigated to ${n.route}`:"No matching page found"}return e.name}const fn=`/* Ourguide-B2B Widget - All classes prefixed with og2- */

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
`;window.crow=(e,n)=>{e==="registerTools"&&n&&typeof n=="object"&&Ze(n)},(function(){const e=document.currentScript??document.querySelector('script[data-product-id][src*="ourguide-b2b-widget"]');if(!e){console.error("[Ourguide-B2B] Could not find script element");return}const n=e.dataset.productId,t=e.dataset.apiUrl??"http://localhost:3000",o=e.dataset.position??"bottom-right";if(!n){console.error("[Ourguide-B2B] data-product-id is required");return}const i=document.createElement("style");i.textContent=fn,document.head.appendChild(i);const r=document.createElement("div");r.id="og2-widget-root",document.body.appendChild(r),We(de(un,{productId:n,apiUrl:t,position:o}),r)})()})();
