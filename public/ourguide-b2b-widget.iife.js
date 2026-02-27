(function(){"use strict";var te,b,Me,D,Ae,Le,Oe,He,fe,_e,pe,V={},Be=[],wn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,oe=Array.isArray;function O(e,n){for(var t in n)e[t]=n[t];return e}function he(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Pe(e,n,t){var o,i,r,a={};for(r in n)r=="key"?o=n[r]:r=="ref"?i=n[r]:a[r]=n[r];if(arguments.length>2&&(a.children=arguments.length>3?te.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)a[r]===void 0&&(a[r]=e.defaultProps[r]);return re(e,a,o,i,null)}function re(e,n,t,o,i){var r={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Me,__i:-1,__u:0};return i==null&&b.vnode!=null&&b.vnode(r),r}function ie(e){return e.children}function se(e,n){this.props=e,this.context=n}function j(e,n){if(n==null)return e.__?j(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?j(e):null}function De(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return De(e)}}function ze(e){(!e.__d&&(e.__d=!0)&&D.push(e)&&!ae.__r++||Ae!=b.debounceRendering)&&((Ae=b.debounceRendering)||Le)(ae)}function ae(){for(var e,n,t,o,i,r,a,c=1;D.length;)D.length>c&&D.sort(Oe),e=D.shift(),c=D.length,e.__d&&(t=void 0,o=void 0,i=(o=(n=e).__v).__e,r=[],a=[],n.__P&&((t=O({},o)).__v=o.__v+1,b.vnode&&b.vnode(t),me(n.__P,t,o,n.__n,n.__P.namespaceURI,32&o.__u?[i]:null,r,i??j(o),!!(32&o.__u),a),t.__v=o.__v,t.__.__k[t.__i]=t,Ge(r,t,a),o.__e=o.__=null,t.__e!=i&&De(t)));ae.__r=0}function Ue(e,n,t,o,i,r,a,c,u,l,p){var s,f,_,h,E,S,v,m=o&&o.__k||Be,R=n.length;for(u=kn(t,n,m,u,R),s=0;s<R;s++)(_=t.__k[s])!=null&&(f=_.__i==-1?V:m[_.__i]||V,_.__i=s,S=me(e,_,f,i,r,a,c,u,l,p),h=_.__e,_.ref&&f.ref!=_.ref&&(f.ref&&ve(f.ref,null,_),p.push(_.ref,_.__c||h,_)),E==null&&h!=null&&(E=h),(v=!!(4&_.__u))||f.__k===_.__k?u=je(_,u,e,v):typeof _.type=="function"&&S!==void 0?u=S:h&&(u=h.nextSibling),_.__u&=-7);return t.__e=E,u}function kn(e,n,t,o,i){var r,a,c,u,l,p=t.length,s=p,f=0;for(e.__k=new Array(i),r=0;r<i;r++)(a=n[r])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[r]=re(null,a,null,null,null):oe(a)?a=e.__k[r]=re(ie,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[r]=re(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[r]=a,u=r+f,a.__=e,a.__b=e.__b+1,c=null,(l=a.__i=Sn(a,t,u,s))!=-1&&(s--,(c=t[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(i>p?f--:i<p&&f++),typeof a.type!="function"&&(a.__u|=4)):l!=u&&(l==u-1?f--:l==u+1?f++:(l>u?f--:f++,a.__u|=4))):e.__k[r]=null;if(s)for(r=0;r<p;r++)(c=t[r])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=j(c)),qe(c,c));return o}function je(e,n,t,o){var i,r;if(typeof e.type=="function"){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,n=je(i[r],n,t,o));return n}e.__e!=n&&(o&&(n&&e.type&&!n.parentNode&&(n=j(e)),t.insertBefore(e.__e,n||null)),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType==8);return n}function Sn(e,n,t,o){var i,r,a,c=e.key,u=e.type,l=n[t],p=l!=null&&(2&l.__u)==0;if(l===null&&c==null||p&&c==l.key&&u==l.type)return t;if(o>(p?1:0)){for(i=t-1,r=t+1;i>=0||r<n.length;)if((l=n[a=i>=0?i--:r++])!=null&&(2&l.__u)==0&&c==l.key&&u==l.type)return a}return-1}function Fe(e,n,t){n[0]=="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||wn.test(n)?t:t+"px"}function le(e,n,t,o,i){var r,a;e:if(n=="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||Fe(e.style,n,"");if(t)for(n in t)o&&t[n]==o[n]||Fe(e.style,n,t[n])}else if(n[0]=="o"&&n[1]=="n")r=n!=(n=n.replace(He,"$1")),a=n.toLowerCase(),n=a in e||n=="onFocusOut"||n=="onFocusIn"?a.slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?o?t.u=o.u:(t.u=fe,e.addEventListener(n,r?pe:_e,r)):e.removeEventListener(n,r?pe:_e,r);else{if(i=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n!="popover"&&n in e)try{e[n]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!="-"?e.removeAttribute(n):e.setAttribute(n,n=="popover"&&t==1?"":t))}}function We(e){return function(n){if(this.l){var t=this.l[n.type+e];if(n.t==null)n.t=fe++;else if(n.t<t.u)return;return t(b.event?b.event(n):n)}}}function me(e,n,t,o,i,r,a,c,u,l){var p,s,f,_,h,E,S,v,m,R,$,z,P,K,W,U,Y,I=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[c=n.__e=t.__e]),(p=b.__b)&&p(n);e:if(typeof I=="function")try{if(v=n.props,m="prototype"in I&&I.prototype.render,R=(p=I.contextType)&&o[p.__c],$=p?R?R.props.value:p.__:o,t.__c?S=(s=n.__c=t.__c).__=s.__E:(m?n.__c=s=new I(v,$):(n.__c=s=new se(v,$),s.constructor=I,s.render=Nn),R&&R.sub(s),s.state||(s.state={}),s.__n=o,f=s.__d=!0,s.__h=[],s._sb=[]),m&&s.__s==null&&(s.__s=s.state),m&&I.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=O({},s.__s)),O(s.__s,I.getDerivedStateFromProps(v,s.__s))),_=s.props,h=s.state,s.__v=n,f)m&&I.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),m&&s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(m&&I.getDerivedStateFromProps==null&&v!==_&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(v,$),n.__v==t.__v||!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(v,s.__s,$)===!1){for(n.__v!=t.__v&&(s.props=v,s.state=s.__s,s.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.some(function(g){g&&(g.__=n)}),z=0;z<s._sb.length;z++)s.__h.push(s._sb[z]);s._sb=[],s.__h.length&&a.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(v,s.__s,$),m&&s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(_,h,E)})}if(s.context=$,s.props=v,s.__P=e,s.__e=!1,P=b.__r,K=0,m){for(s.state=s.__s,s.__d=!1,P&&P(n),p=s.render(s.props,s.state,s.context),W=0;W<s._sb.length;W++)s.__h.push(s._sb[W]);s._sb=[]}else do s.__d=!1,P&&P(n),p=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++K<25);s.state=s.__s,s.getChildContext!=null&&(o=O(O({},o),s.getChildContext())),m&&!f&&s.getSnapshotBeforeUpdate!=null&&(E=s.getSnapshotBeforeUpdate(_,h)),U=p,p!=null&&p.type===ie&&p.key==null&&(U=Ve(p.props.children)),c=Ue(e,oe(U)?U:[U],n,t,o,i,r,a,c,u,l),s.base=n.__e,n.__u&=-161,s.__h.length&&a.push(s),S&&(s.__E=s.__=null)}catch(g){if(n.__v=null,u||r!=null)if(g.then){for(n.__u|=u?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;r[r.indexOf(c)]=null,n.__e=c}else{for(Y=r.length;Y--;)he(r[Y]);be(n)}else n.__e=t.__e,n.__k=t.__k,g.then||be(n);b.__e(g,n,t)}else r==null&&n.__v==t.__v?(n.__k=t.__k,n.__e=t.__e):c=n.__e=En(t.__e,n,t,o,i,r,a,u,l);return(p=b.diffed)&&p(n),128&n.__u?void 0:c}function be(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(be)}function Ge(e,n,t){for(var o=0;o<t.length;o++)ve(t[o],t[++o],t[++o]);b.__c&&b.__c(n,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){b.__e(r,i.__v)}})}function Ve(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:oe(e)?e.map(Ve):O({},e)}function En(e,n,t,o,i,r,a,c,u){var l,p,s,f,_,h,E,S=t.props||V,v=n.props,m=n.type;if(m=="svg"?i="http://www.w3.org/2000/svg":m=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((_=r[l])&&"setAttribute"in _==!!m&&(m?_.localName==m:_.nodeType==3)){e=_,r[l]=null;break}}if(e==null){if(m==null)return document.createTextNode(v);e=document.createElementNS(i,m,v.is&&v),c&&(b.__m&&b.__m(n,r),c=!1),r=null}if(m==null)S===v||c&&e.data==v||(e.data=v);else{if(r=r&&te.call(e.childNodes),!c&&r!=null)for(S={},l=0;l<e.attributes.length;l++)S[(_=e.attributes[l]).name]=_.value;for(l in S)if(_=S[l],l!="children"){if(l=="dangerouslySetInnerHTML")s=_;else if(!(l in v)){if(l=="value"&&"defaultValue"in v||l=="checked"&&"defaultChecked"in v)continue;le(e,l,null,_,i)}}for(l in v)_=v[l],l=="children"?f=_:l=="dangerouslySetInnerHTML"?p=_:l=="value"?h=_:l=="checked"?E=_:c&&typeof _!="function"||S[l]===_||le(e,l,_,S[l],i);if(p)c||s&&(p.__html==s.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),n.__k=[];else if(s&&(e.innerHTML=""),Ue(n.type=="template"?e.content:e,oe(f)?f:[f],n,t,o,m=="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,a,r?r[0]:t.__k&&j(t,0),c,u),r!=null)for(l=r.length;l--;)he(r[l]);c||(l="value",m=="progress"&&h==null?e.removeAttribute("value"):h!=null&&(h!==e[l]||m=="progress"&&!h||m=="option"&&h!=S[l])&&le(e,l,h,S[l],i),l="checked",E!=null&&E!=e[l]&&le(e,l,E,S[l],i))}return e}function ve(e,n,t){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&n==null||(e.__u=e(n))}else e.current=n}catch(i){b.__e(i,t)}}function qe(e,n,t){var o,i;if(b.unmount&&b.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||ve(o,null,n)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){b.__e(r,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&qe(o[i],n,t||typeof e.type!="function");t||he(e.__e),e.__c=e.__=e.__e=void 0}function Nn(e,n,t){return this.constructor(e,t)}function Cn(e,n,t){var o,i,r,a;n==document&&(n=document.documentElement),b.__&&b.__(e,n),i=(o=!1)?null:n.__k,r=[],a=[],me(n,e=n.__k=Pe(ie,null,[e]),i||V,V,n.namespaceURI,i?null:n.firstChild?te.call(n.childNodes):null,r,i?i.__e:n.firstChild,o,a),Ge(r,e,a)}te=Be.slice,b={__e:function(e,n,t,o){for(var i,r,a;n=n.__;)if((i=n.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),a=i.__d),a)return i.__E=i}catch(c){e=c}throw e}},Me=0,se.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=O({},this.state),typeof e=="function"&&(e=e(O({},t),this.props)),e&&O(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),ze(this))},se.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ze(this))},se.prototype.render=ie,D=[],Le=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Oe=function(e,n){return e.__v.__b-n.__v.__b},ae.__r=0,He=/(PointerCapture)$|Capture$/i,fe=0,_e=We(!1),pe=We(!0);var Tn=0;function d(e,n,t,o,i,r){n||(n={});var a,c,u=n;if("ref"in u)for(c in u={},n)c=="ref"?a=n[c]:u[c]=n[c];var l={type:e,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Tn,__i:-1,__u:0,__source:i,__self:r};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return b.vnode&&b.vnode(l),l}var q,x,ye,Xe,X=0,Je=[],k=b,Ke=k.__b,Ye=k.__r,Qe=k.diffed,Ze=k.__c,en=k.unmount,nn=k.__;function xe(e,n){k.__h&&k.__h(x,e,X||n),X=0;var t=x.__H||(x.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function J(e){return X=1,tn(ln,e)}function tn(e,n,t){var o=xe(q++,2);if(o.t=e,!o.__c&&(o.__=[ln(void 0,n),function(c){var u=o.__N?o.__N[0]:o.__[0],l=o.t(u,c);u!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=x,!x.__f)){var i=function(c,u,l){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(f){return!!f.__c});if(p.every(function(f){return!f.__N}))return!r||r.call(this,c,u,l);var s=o.__c.props!==c;return p.forEach(function(f){if(f.__N){var _=f.__[0];f.__=f.__N,f.__N=void 0,_!==f.__[0]&&(s=!0)}}),r&&r.call(this,c,u,l)||s};x.__f=!0;var r=x.shouldComponentUpdate,a=x.componentWillUpdate;x.componentWillUpdate=function(c,u,l){if(this.__e){var p=r;r=void 0,i(c,u,l),r=p}a&&a.call(this,c,u,l)},x.shouldComponentUpdate=i}return o.__N||o.__}function F(e,n){var t=xe(q++,3);!k.__s&&an(t.__H,n)&&(t.__=e,t.u=n,x.__H.__h.push(t))}function B(e){return X=5,on(function(){return{current:e}},[])}function on(e,n){var t=xe(q++,7);return an(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function rn(e,n){return X=8,on(function(){return e},n)}function $n(){for(var e;e=Je.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ce),e.__H.__h.forEach(we),e.__H.__h=[]}catch(n){e.__H.__h=[],k.__e(n,e.__v)}}k.__b=function(e){x=null,Ke&&Ke(e)},k.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),nn&&nn(e,n)},k.__r=function(e){Ye&&Ye(e),q=0;var n=(x=e.__c).__H;n&&(ye===x?(n.__h=[],x.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(n.__h.forEach(ce),n.__h.forEach(we),n.__h=[],q=0)),ye=x},k.diffed=function(e){Qe&&Qe(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(Je.push(n)!==1&&Xe===k.requestAnimationFrame||((Xe=k.requestAnimationFrame)||In)($n)),n.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),ye=x=null},k.__c=function(e,n){n.some(function(t){try{t.__h.forEach(ce),t.__h=t.__h.filter(function(o){return!o.__||we(o)})}catch(o){n.some(function(i){i.__h&&(i.__h=[])}),n=[],k.__e(o,t.__v)}}),Ze&&Ze(e,n)},k.unmount=function(e){en&&en(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{ce(o)}catch(i){n=i}}),t.__H=void 0,n&&k.__e(n,t.__v))};var sn=typeof requestAnimationFrame=="function";function In(e){var n,t=function(){clearTimeout(o),sn&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,35);sn&&(n=requestAnimationFrame(t))}function ce(e){var n=x,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),x=n}function we(e){var n=x;e.__c=e.__(),x=n}function an(e,n){return!e||e.length!==n.length||n.some(function(t,o){return t!==e[o]})}function ln(e,n){return typeof n=="function"?n(e):n}const Rn={isOpen:!1,messages:[],isStreaming:!1,error:null};function cn(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function Mn(e,n){switch(n.type){case"OPEN":return{...e,isOpen:!0,error:null};case"CLOSE":return{...e,isOpen:!1};case"LOAD_MESSAGES":return{...e,messages:n.messages};case"ADD_USER_MESSAGE":return{...e,error:null,messages:[...e.messages,{id:n.id,role:"user",content:n.content}]};case"START_STREAMING":return{...e,isStreaming:!0,error:null,messages:[...e.messages,{id:n.id,role:"assistant",content:"",isStreaming:!0}]};case"APPEND_TEXT":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,content:o.content+n.text}),{...e,messages:t}}case"ADD_TOOL_CALL":{const t=[...e.messages],o=t[t.length-1];if(o&&o.role==="assistant"){const i=[...o.toolCalls??[],n.toolCall];t[t.length-1]={...o,toolCalls:i}}return{...e,messages:t}}case"SET_TOOL_RESULT":{const t=[...e.messages],o=t[t.length-1];if(o&&o.role==="assistant"&&o.toolCalls){const i=o.toolCalls.map(r=>r.id===n.toolCallId?{...r,result:n.result,status:"done"}:r);t[t.length-1]={...o,toolCalls:i}}return{...e,messages:t}}case"FINISH_STREAMING":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,isStreaming:!1}),{...e,isStreaming:!1,messages:t}}case"SET_ERROR":{const t=[...e.messages],o=t[t.length-1];return o&&o.role==="assistant"&&o.isStreaming&&(t[t.length-1]={...o,isStreaming:!1}),{...e,isStreaming:!1,error:n.error,messages:t}}case"CLEAR_MESSAGES":return{...e,messages:[],error:null};default:return e}}function An(e){return new Promise((n,t)=>{const o=new FileReader;o.onload=()=>{const i=o.result;n(i.split(",")[1])},o.onerror=()=>t(new Error("Failed to read file")),o.readAsDataURL(e)})}async function Ln(e,n){try{const t=await fetch(`${e}/api/products/${n}/config`,{headers:{"ngrok-skip-browser-warning":"true"}});return t.ok?await t.json():{screenContextEnabled:!1}}catch{return{screenContextEnabled:!1}}}async function dn(e,n,t,o,i,r,a){const c={productId:n,messages:t,endUserSessionId:o};i&&(c.conversationId=i),r&&(c.screenContext=r),a&&a.length>0&&(c.attachments=a);const u=await fetch(`${e}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify(c)});if(!u.ok){const l=await u.json().catch(()=>({error:"Request failed"}));throw new Error(l.error||`HTTP ${u.status}`)}if(!u.body)throw new Error("No response stream available");return{stream:u.body,conversationId:u.headers.get("X-Conversation-Id")}}async function On(e,n,t,o,i){const r=await fetch(`${e}/api/widget/identify`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,endUserSessionId:t,token:o,name:i})}),a=await r.json().catch(()=>({}));if(!r.ok)throw new Error(a.error||`HTTP ${r.status}`);return a}async function Hn(e,n,t){const o=await fetch(`${e}/api/widget/reset-user`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({productId:n,endUserSessionId:t})}),i=await o.json().catch(()=>({}));if(!o.ok)throw new Error(i.error||`HTTP ${o.status}`);return i}const ke={};function Bn(e){Object.assign(ke,e)}function Pn(e){return ke[e]}function Dn(e){return e in ke}async function un(e,n){const t=e.getReader(),o=new TextDecoder;let i="";try{for(;;){const{done:r,value:a}=await t.read();if(r)break;i+=o.decode(a,{stream:!0});const c=i.split(`

`);i=c.pop()??"";for(const u of c)gn(u.trim(),n)}i.trim()&&gn(i.trim(),n),n.onFinish()}catch(r){const a=r instanceof Error?r.message:"Stream read failed";n.onError(a)}finally{t.releaseLock()}}function gn(e,n){const t=e.split(`
`);for(const o of t){if(!o.startsWith("data: "))continue;const i=o.slice(6);if(i==="[DONE]")return;try{const r=JSON.parse(i);switch(r.type){case"text-delta":r.delta&&n.onTextDelta(r.delta);break;case"tool-input-available":r.toolCallId&&r.toolName&&n.onToolCall(r.toolCallId,r.toolName,r.input??{},r.providerMetadata);break;case"tool-output-available":r.toolCallId&&n.onToolResult(r.toolCallId,r.output);break;case"tool-call":r.toolCallId&&r.toolName&&n.onToolCall(r.toolCallId,r.toolName,r.input??{});break;case"tool-result":r.toolCallId&&n.onToolResult(r.toolCallId,r.output);break;case"error":n.onError(r.errorText??r.reason??"Unknown error");break;case"abort":n.onError(r.reason??"Response aborted");break;default:break}}catch{}}}function zn(e,n){if(!n)return e;let t=e;for(const[o,i]of Object.entries(n))t=t.replace(`:${o}`,encodeURIComponent(i));return t}function Un(e){var o;const n=e.replace(/\/$/,"")||"/",t=document.querySelectorAll("a[href]");for(const i of t){const r=i;if((((o=r.pathname)==null?void 0:o.replace(/\/$/,""))||"/")===n)return r.click(),console.log(`[Ourguide-B2B] Navigated via anchor click: ${e}`),!0}return!1}function jn(e){var i,r;const n=window,t=n.next;if((i=t==null?void 0:t.router)!=null&&i.push)return t.router.push(e),console.log(`[Ourguide-B2B] Navigated via Next.js router: ${e}`),!0;if(n.__NUXT__){const a=n.$nuxt;if((r=a==null?void 0:a.$router)!=null&&r.push)return a.$router.push(e),console.log(`[Ourguide-B2B] Navigated via Vue/Nuxt router: ${e}`),!0}return!1}function Fn(e){try{return window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate",{state:{}})),console.log(`[Ourguide-B2B] Navigated via pushState: ${e}`),!0}catch{return!1}}async function Wn(e,n){const t=zn(e,n);return Un(t)||jn(t)||Fn(t)||(console.log(`[Ourguide-B2B] Navigated via hard navigation: ${t}`),window.location.href=t),!0}const Gn="og2-chat-",Vn="og2-enduser-session-",Se="og2-conv-";function Ee(e){return`${Gn}${e}`}function fn(e){return`${Vn}${e}`}function _n(){var n,t;const e=(t=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:t.call(n);return e||`${Date.now()}-${Math.random().toString(16).slice(2)}`}function Ne(e){const n=fn(e);try{const t=localStorage.getItem(n);if(t&&t.trim())return t;const o=`sess_${_n()}`;return localStorage.setItem(n,o),o}catch{return`sess_${_n()}`}}function qn(e){try{localStorage.removeItem(fn(e))}catch{}}function Xn(e,n){try{const t=n.map(({isStreaming:o,...i})=>i);sessionStorage.setItem(Ee(e),JSON.stringify(t))}catch{}}function Jn(e){try{const n=sessionStorage.getItem(Ee(e));return n?JSON.parse(n):[]}catch{return[]}}function Ce(e){try{sessionStorage.removeItem(Ee(e)),sessionStorage.removeItem(`${Se}${e}`)}catch{}}function Kn(e,n){try{sessionStorage.setItem(`${Se}${e}`,n)}catch{}}function Yn(e){try{return sessionStorage.getItem(`${Se}${e}`)}catch{return null}}const Qn=10,Zn=30,Te=500,et="og2-widget-root",nt=new Set(["SCRIPT","STYLE","NOSCRIPT","SVG","NAV","HEADER","FOOTER"]),tt="a[href], button, input, select, textarea";function $e(e){if(!(e instanceof HTMLElement)||e.hidden||e.getAttribute("aria-hidden")==="true")return!1;const n=getComputedStyle(e);return n.display!=="none"&&n.visibility!=="hidden"}function Ie(e){return!!e.closest(`#${et}`)}function ot(e){var t,o;if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement){if(e.id){const i=document.querySelector(`label[for="${e.id}"]`);if((t=i==null?void 0:i.textContent)!=null&&t.trim())return i.textContent.trim()}return e.getAttribute("aria-label")||e.placeholder||e.getAttribute("name")||""}const n=(o=e.innerText)==null?void 0:o.trim();return n||e.getAttribute("aria-label")||e.getAttribute("title")||""}function pn(e,n){return e.length<=n?e:e.slice(0,n-3)+"..."}function rt(){var p;const e=window.location.pathname+window.location.search,n=document.title||"",t=document.querySelectorAll("h1, h2, h3"),o=[];for(const s of t){if(o.length>=Qn)break;if(Ie(s)||!$e(s))continue;const f=(p=s.innerText)==null?void 0:p.trim();f&&!o.includes(f)&&o.push(f)}const i=document.querySelectorAll(tt),r=[],a=new Set;for(const s of i){if(r.length>=Zn)break;if(Ie(s)||!$e(s))continue;const f=ot(s);if(!f)continue;const _=`${s.tagName}:${f}`;if(a.has(_))continue;a.add(_);const h={tag:s.tagName.toLowerCase(),text:pn(f,80)};if(s instanceof HTMLInputElement&&(h.type=s.type),s instanceof HTMLAnchorElement&&s.href)try{const E=new URL(s.href);h.href=E.pathname+E.search}catch{h.href=s.getAttribute("href")||void 0}r.push(h)}const c=document.querySelector("main")||document.body;let u="";function l(s){var _;if(u.length>=Te)return;if(s.nodeType===Node.TEXT_NODE){const h=(_=s.textContent)==null?void 0:_.trim();h&&(u+=(u?" ":"")+h);return}if(s.nodeType!==Node.ELEMENT_NODE)return;const f=s;if(!nt.has(f.tagName)&&!Ie(f)&&$e(f)){for(const h of f.childNodes)if(l(h),u.length>=Te)return}}return l(c),u=pn(u.replace(/\s+/g," ").trim(),Te),{url:e,title:n,headings:o,interactiveElements:r,visibleText:u}}const hn={none:"none",soft:"0 2px 8px rgba(0,0,0,0.08)",medium:"0 4px 16px rgba(0,0,0,0.12)",strong:"0 8px 32px rgba(0,0,0,0.18)","extra-strong":"0 16px 48px rgba(0,0,0,0.28)"};function it(e,n){if(!e||!n)return;const t=(c,u)=>{u!=null&&u!==""&&e.style.setProperty(c,String(u))},{colors:o,typography:i,dimensions:r,shadow:a}=n;o&&(t("--og2-bg",o.background),t("--og2-border",o.border),t("--og2-text",o.text),t("--og2-messages-bg",o.messagesBackground),t("--og2-agent-bubble",o.agentBubble),t("--og2-agent-bubble-text",o.agentBubbleText),t("--og2-user-bubble",o.userBubble),t("--og2-user-bubble-text",o.userBubbleText),t("--og2-user-bubble-border",o.userBubbleBorder)),i&&(t("--og2-font",i.fontFamily),t("--og2-font-weight",i.fontWeight),t("--og2-line-height",i.lineHeight),i.fontSize&&t("--og2-font-size",`${i.fontSize}px`),i.headerSize&&t("--og2-header-size",`${i.headerSize}px`),typeof i.letterSpacing=="number"&&t("--og2-letter-spacing",`${i.letterSpacing}px`)),r&&(r.width&&t("--og2-width",`${r.width}px`),r.maxHeight&&t("--og2-height",`${r.maxHeight}px`),r.borderRadius!==void 0&&t("--og2-radius",`${r.borderRadius}px`),r.padding!==void 0&&t("--og2-padding",`${r.padding}px`)),a&&hn[a]&&t("--og2-shadow",hn[a])}function st(e,n){if(console.log("[Ourguide] applyBubble called",{el:e,bubble:n}),!e||!n){console.warn("[Ourguide] applyBubble skipped — el or bubble is falsy",{el:e,bubble:n});return}const t=(o,i)=>{i!=null&&i!==""&&e.style.setProperty(o,String(i))};n.background&&t("--og2-bubble-bg",n.background),n.border&&t("--og2-bubble-border",n.border),n.icon&&t("--og2-bubble-icon",n.icon),n.buttonSize&&t("--og2-bubble-size",`${n.buttonSize}px`),n.iconSize&&t("--og2-bubble-icon-size",`${n.iconSize}px`),n.right!==void 0&&t("--og2-bubble-right",`${n.right}px`),n.bottom!==void 0&&t("--og2-bubble-bottom",`${n.bottom}px`)}function at({productId:e,apiUrl:n}){const[t,o]=tn(Mn,Rn),i=B(null),r=B(null),a=B(null),c=B(null),u=B(null),l=B(null),p=B(!1),[s,f]=J(""),[_,h]=J([]),[E,S]=J([]),[v,m]=J(!1),[R,$]=J(!1),z=B(null);F(()=>{console.log("[Ourguide] fetchConfig called",{apiUrl:n,productId:e}),Ln(n,e).then(g=>{var y;console.log("[Ourguide] config received",g),console.log("[Ourguide] config.bubble",g.bubble),console.log("[Ourguide] triggerRef.current",u.current),p.current=g.screenContextEnabled,it(c.current,g.appearance),st(c.current,g.bubble),console.log("[Ourguide] applyBubble done. triggerRef styles:",(y=u.current)==null?void 0:y.style.cssText)})},[n,e]);const P=rn(()=>{Ce(e),a.current=null,o({type:"FINISH_STREAMING"}),o({type:"CLEAR_MESSAGES"})},[e]);F(()=>{a.current=Yn(e);const g=Jn(e);g.length>0&&o({type:"LOAD_MESSAGES",messages:g})},[e]),F(()=>{const g=y=>{const w=y.detail;w!=null&&w.productId&&w.productId!==e||P()};return window.addEventListener("og2:resetUser",g),()=>{window.removeEventListener("og2:resetUser",g)}},[e,P]),F(()=>{!t.isStreaming&&t.messages.length>0&&Xn(e,t.messages)},[t.messages,t.isStreaming,e]),F(()=>{t.isOpen&&!t.isStreaming&&setTimeout(()=>{var g;return(g=i.current)==null?void 0:g.focus()},50)},[t.isOpen,t.isStreaming]),F(()=>{var g;(g=r.current)==null||g.scrollIntoView({behavior:"smooth"})},[t.messages]);const K=rn(async g=>{const y=g.trim(),w=[..._];if(!y&&w.length===0||t.isStreaming)return;f(""),h([]),i.current&&(i.current.style.height="auto");const H=w.length>0?w.map(N=>`[${N.name}]`).join(" "):"",G=[y,H].filter(Boolean).join(" "),de=cn();o({type:"ADD_USER_MESSAGE",id:de,content:G});let Q=[];if(w.length>0)try{Q=await Promise.all(w.map(async N=>({name:N.name,type:N.type,data:await An(N)})))}catch{o({type:"SET_ERROR",error:"Failed to read attached files"});return}const Z=[...t.messages.map(N=>({role:N.role,content:N.content})),{role:"user",content:y||"Please review the attached file(s)."}],ee=p.current?rt():void 0,ne=cn();o({type:"START_STREAMING",id:ne});const mn=new Map,Re=new Map,bn=N=>({onTextDelta:C=>{o({type:"APPEND_TEXT",text:C})},onToolCall:(C,A,L,M)=>{const ue={id:C,name:A,args:L,status:"calling",providerMetadata:M};mn.set(C,ue),o({type:"ADD_TOOL_CALL",toolCall:ue}),N&&Dn(A)&&Re.set(C,{name:A,args:L,providerMetadata:M})},onToolResult:(C,A)=>{o({type:"SET_TOOL_RESULT",toolCallId:C,result:A});const L=mn.get(C);if((L==null?void 0:L.name)==="navigate_to_page"){const M=A;M.route&&(M.confidence??0)>=.5&&Wn(M.route,M.params)}},onError:C=>{o({type:"SET_ERROR",error:C})}});try{const N=Ne(e),{stream:C,conversationId:A}=await dn(n,e,Z,N,a.current||void 0,ee,Q);A&&!a.current&&(a.current=A,Kn(e,A));let L=!1;if(await un(C,{...bn(!0),onError:T=>{L=!0,o({type:"SET_ERROR",error:T})},onFinish:()=>{}}),L||Re.size===0){L||o({type:"FINISH_STREAMING"});return}const M=[];for(const[T,{name:vn,args:yn,providerMetadata:gt}]of Re){const ft=Pn(vn);let ge;try{ge=await ft(yn)}catch(xn){ge={status:"error",error:xn instanceof Error?xn.message:"Handler failed"}}o({type:"SET_TOOL_RESULT",toolCallId:T,result:ge}),M.push({toolCallId:T,toolName:vn,args:yn,result:ge,providerMetadata:gt})}const ue=[...Z,{role:"assistant",content:M.map(T=>({type:"tool-call",toolCallId:T.toolCallId,toolName:T.toolName,input:T.args,...T.providerMetadata?{providerOptions:T.providerMetadata}:{}}))},{role:"tool",content:M.map(T=>({type:"tool-result",toolCallId:T.toolCallId,toolName:T.toolName,output:{type:"json",value:T.result}}))}],{stream:ut}=await dn(n,e,ue,void 0,a.current||void 0);await un(ut,{...bn(!1),onFinish:()=>{o({type:"FINISH_STREAMING"})}})}catch(N){const C=N instanceof Error?N.message:"Something went wrong";o({type:"FINISH_STREAMING"}),o({type:"SET_ERROR",error:C})}},[t.messages,t.isStreaming,n,e,_]);function W(g){g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),K(s))}function U(){if(t.messages.length>0){const g=t.messages.find(H=>H.role==="user"),y=g?g.content.slice(0,30):"Conversation",w=t.messages[t.messages.length-1].content.slice(0,50);S(H=>[{id:Date.now(),title:y,preview:w,messages:[...t.messages]},...H])}Ce(e),a.current=null,o({type:"CLEAR_MESSAGES"}),m(!1)}function Y(g){o({type:"LOAD_MESSAGES",messages:g.messages}),S(y=>y.filter(w=>w.id!==g.id)),m(!1)}function I(){var H;const g=window.SpeechRecognition||window.webkitSpeechRecognition;if(!g)return;if(R){(H=z.current)==null||H.stop(),$(!1);return}const y=new g;y.lang="en-US",y.interimResults=!0,y.continuous=!0;const w=s.trimEnd();y.onresult=G=>{let de="",Q="";for(let ee=0;ee<G.results.length;ee++){const ne=G.results[ee];ne.isFinal?de+=ne[0].transcript:Q+=ne[0].transcript}const Z=(de+Q).trim();f(w?`${w} ${Z}`:Z)},y.onend=()=>$(!1),y.onerror=()=>$(!1),z.current=y,y.start(),$(!0)}return d("div",{className:"og2-container",ref:c,children:[t.isOpen&&d("div",{className:"og2-panel",children:[d("div",{className:"og2-panel-header",children:[d("span",{className:"og2-panel-title",children:"Assistant"}),d("div",{className:"og2-header-actions",children:[d("button",{className:"og2-action-btn",onClick:U,"aria-label":"New conversation",title:"New conversation",children:d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M12 5v14M5 12h14"})})}),d("button",{className:"og2-action-btn",onClick:()=>m(g=>!g),"aria-label":"Recent conversations",title:"Recent conversations",children:d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"}),d("path",{d:"M12 7v5l4 2"})]})}),d("button",{className:"og2-close-btn",onClick:()=>o({type:"CLOSE"}),"aria-label":"Close",children:d("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:d("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),v&&d("div",{className:"og2-history-panel",children:[d("div",{className:"og2-history-header",children:[d("span",{className:"og2-history-title",children:"Recent Conversations"}),d("button",{className:"og2-action-btn",onClick:()=>m(!1),"aria-label":"Close history",children:d("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:d("path",{d:"M4 4L12 12M12 4L4 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),d("div",{className:"og2-history-list",children:E.length===0?d("p",{className:"og2-history-empty",children:"No conversations yet"}):E.map(g=>d("button",{className:"og2-history-item",onClick:()=>Y(g),children:[d("span",{className:"og2-history-item-title",children:g.title}),d("span",{className:"og2-history-item-preview",children:g.preview})]},g.id))})]}),d("div",{className:"og2-messages",children:d("div",{className:"og2-messages-inner",children:[d("div",{className:"og2-message og2-message-assistant",children:d("div",{className:"og2-bubble",children:"Hi! What can I do for you today?"})}),t.messages.map(g=>g.isStreaming&&!g.content?d("div",{className:"og2-message og2-message-assistant",children:d("span",{className:"og2-shimmer-text",children:"Thinking"})},g.id):d("div",{className:`og2-message og2-message-${g.role}`,children:d("div",{className:"og2-bubble",children:[g.content,g.isStreaming&&d("span",{className:"og2-cursor"}),lt(g.toolCalls)]})},g.id)),t.error&&d("div",{className:"og2-message og2-message-error",children:d("div",{className:"og2-bubble",children:t.error})}),d("div",{ref:r})]})}),d("div",{className:"og2-footer",children:[d("div",{className:"og2-powered-by",children:[d("svg",{className:"og2-powered-by-logo",width:"20",height:"20",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d("circle",{cx:"20",cy:"20",r:"9",stroke:"#38bdf8",strokeWidth:"2.2",fill:"none"}),d("circle",{cx:"20",cy:"20",r:"11",stroke:"#38bdf8",strokeWidth:"0.6",fill:"none",opacity:"0.25"})]}),d("p",{className:"og2-powered-by-text",children:"Powered by Ourguide"})]}),d("div",{className:"og2-input-area",children:[_.length>0&&d("div",{className:"og2-file-chips",children:_.map((g,y)=>d("span",{className:"og2-file-chip",children:[d("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),d("polyline",{points:"13 2 13 9 20 9"})]}),g.name.length>18?`${g.name.slice(0,16)}…`:g.name,d("button",{className:"og2-file-chip-remove",onClick:()=>h(w=>w.filter((H,G)=>G!==y)),"aria-label":`Remove ${g.name}`,children:"×"})]},y))}),d("textarea",{ref:i,className:"og2-input",rows:1,value:s,onInput:g=>{f(g.target.value),g.target.style.height="auto",g.target.style.height=`${g.target.scrollHeight}px`},onKeyDown:W,placeholder:"Message..."}),d("div",{className:"og2-input-toolbar",children:[d("div",{className:"og2-input-toolbar-left",children:[d("button",{className:"og2-upload-btn",onClick:()=>{var g;return(g=l.current)==null?void 0:g.click()},"aria-label":"Attach file",title:"Attach file",children:d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.42 16.41a2 2 0 0 1-2.83-2.83l8.49-8.48"})})}),d("input",{ref:l,type:"file",multiple:!0,style:{display:"none"},onChange:g=>{const y=Array.from(g.target.files??[]);y.length>0&&h(w=>[...w,...y]),g.target.value=""}}),d("button",{className:`og2-mic-btn${R?" og2-mic-active":""}`,onClick:I,"aria-label":"Voice input",title:"Voice input",children:d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d("rect",{x:"9",y:"2",width:"6",height:"11",rx:"3"}),d("path",{d:"M5 10a7 7 0 0 0 14 0M12 19v3M8 22h8"})]})})]}),d("button",{className:`og2-send-btn${s.trim()||_.length>0?" og2-send-active":""}`,onClick:()=>K(s),children:d("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M12 19V5M5 12l7-7 7 7"})})})]})]})]})]}),d("button",{ref:u,className:"og2-trigger",onClick:()=>o(t.isOpen?{type:"CLOSE"}:{type:"OPEN"}),"aria-label":t.isOpen?"Close assistant":"Open assistant",children:t.isOpen?d("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:d("path",{d:"M6 6L18 18M18 6L6 18"})}):d("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})})})]})}function lt(e){return!e||e.length===0?null:d("div",{className:"og2-tool-calls",children:e.map(n=>d("div",{className:"og2-tool-indicator",children:[n.status==="calling"&&d("span",{className:"og2-spinner og2-spinner-sm"}),n.status==="done"&&d("svg",{className:"og2-tool-check",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:d("path",{d:"M20 6L9 17L4 12"})}),d("span",{className:"og2-tool-label",children:ct(n)})]},n.id))})}function ct(e){if(e.name==="navigate_to_page"){if(e.status==="calling")return"Finding the right page...";const n=e.result;return n!=null&&n.route?`Navigated to ${n.route}`:"No matching page found"}return e.name}const dt=`/* Ourguide-B2B Widget - All classes prefixed with og2- */

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
  padding: 12px 16px;
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

/* ── Messages inner scrollable rounded container ── */
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

/* ── Agent bubble: light bg, black text ── */
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
.og2-tool-calls {
  margin-top: 6px;
}

.og2-tool-indicator {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 0;
  font-size: 11px;
  color: #a1a1aa;
}

.og2-tool-check {
  color: #16a34a;
  flex-shrink: 0;
}

.og2-tool-label {
  line-height: 1.3;
}

/* ── Footer ── */
.og2-footer {
  padding: 16px;
  background: var(--og2-bg, #ffffff);
  flex-shrink: 0;
}

/* ── Powered by ── */
.og2-powered-by {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 8px;
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

/* ── Send button: gray when empty, blue when has text ── */
.og2-send-btn {
  width: 36px;
  height: 36px;
  padding: 0;
  background: #d1d5db;
  color: #ffffff;
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
  background: #2563eb;
  color: #ffffff;
}

/* ── Spinner ── */
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
`;(function(){const e=document.currentScript??document.querySelector('script[data-product-id][src*="ourguide-b2b-widget"]');if(!e){console.error("[Ourguide-B2B] Could not find script element");return}const n=e.dataset.productId||"",t=e.dataset.apiUrl??"http://localhost:3000";if(!n){console.error("[Ourguide-B2B] data-product-id is required");return}async function o(l,p){try{if(l==="registerTools"){p&&typeof p=="object"&&Bn(p);return}if(l==="identify"){const s=p??{};if(!s.token||typeof s.token!="string"||!s.token.trim()){console.warn("[Ourguide-B2B] identify: token is required");return}const f=Ne(n);await On(t,n,f,s.token,s.name);return}if(l==="resetUser"){const s=Ne(n);await Hn(t,n,s),qn(n),Ce(n),window.dispatchEvent(new CustomEvent("og2:resetUser",{detail:{productId:n}}));return}}catch(s){const f=s instanceof Error?s.message:"Unknown error";console.warn(`[Ourguide-B2B] ${l} failed: ${f}`)}}const i=window,r=Array.isArray(i.ourguide)?i.ourguide:[];i.ourguide=(l,p)=>{o(l,p)};for(const l of r)Array.isArray(l)&&(l[0]==="identify"||l[0]==="resetUser"||l[0]==="registerTools")&&o(l[0],l[1]);const a=document.createElement("link");a.rel="stylesheet",a.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",document.head.appendChild(a);const c=document.createElement("style");c.textContent=dt,document.head.appendChild(c);const u=document.createElement("div");u.id="og2-widget-root",document.body.appendChild(u),Cn(Pe(at,{productId:n,apiUrl:t}),u)})()})();
