!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).MarkerClusterer=t()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=function(e){return e&&e.Math==Math&&e},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")(),i=function(e){try{return!!e()}catch(e){return!0}},o=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,u={f:a&&!s.call({1:2},1)?function(e){var t=a(this,e);return!!t&&t.enumerable}:s},l=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},c={}.toString,h=function(e){return c.call(e).slice(8,-1)},f="".split,g=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==h(e)?f.call(e,""):Object(e)}:Object,d=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},v=function(e){return g(d(e))},p=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_=function(e,t){if(!p(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!p(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!p(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!p(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,y=function(e,t){return m.call(e,t)},k=r.document,x=p(k)&&p(k.createElement),b=!o&&!i((function(){return 7!=Object.defineProperty((e="div",x?k.createElement(e):{}),"a",{get:function(){return 7}}).a;var e})),S=Object.getOwnPropertyDescriptor,M={f:o?S:function(e,t){if(e=v(e),t=_(t,!0),b)try{return S(e,t)}catch(e){}if(y(e,t))return l(!u.f.call(e,t),e[t])}},E=function(e){if(!p(e))throw TypeError(String(e)+" is not an object");return e},C=Object.defineProperty,I={f:o?C:function(e,t,n){if(E(e),t=_(t,!0),E(n),b)try{return C(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},w=o?function(e,t,n){return I.f(e,t,l(1,n))}:function(e,t,n){return e[t]=n,e},O=function(e,t){try{w(r,e,t)}catch(n){r[e]=t}return t},A=r["__core-js_shared__"]||O("__core-js_shared__",{}),T=Function.toString;"function"!=typeof A.inspectSource&&(A.inspectSource=function(e){return T.call(e)});var P,L,j,z,R=A.inspectSource,B=r.WeakMap,Z="function"==typeof B&&/native code/.test(R(B)),D=t((function(e){(e.exports=function(e,t){return A[e]||(A[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),N=0,H=Math.random(),$=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++N+H).toString(36)},F=D("keys"),U={},G=r.WeakMap;if(Z){var V=new G,W=V.get,X=V.has,q=V.set;P=function(e,t){return q.call(V,e,t),t},L=function(e){return W.call(V,e)||{}},j=function(e){return X.call(V,e)}}else{var K=F[z="state"]||(F[z]=$(z));U[K]=!0,P=function(e,t){return w(e,K,t),t},L=function(e){return y(e,K)?e[K]:{}},j=function(e){return y(e,K)}}var Y={set:P,get:L,has:j,enforce:function(e){return j(e)?L(e):P(e,{})},getterFor:function(e){return function(t){var n;if(!p(t)||(n=L(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=t((function(e){var t=Y.get,n=Y.enforce,i=String(String).split("String");(e.exports=function(e,t,o,s){var a=!!s&&!!s.unsafe,u=!!s&&!!s.enumerable,l=!!s&&!!s.noTargetGet;"function"==typeof o&&("string"!=typeof t||y(o,"name")||w(o,"name",t),n(o).source=i.join("string"==typeof t?t:"")),e!==r?(a?!l&&e[t]&&(u=!0):delete e[t],u?e[t]=o:w(e,t,o)):u?e[t]=o:O(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||R(this)}))})),Q=r,ee=function(e){return"function"==typeof e?e:void 0},te=function(e,t){return arguments.length<2?ee(Q[e])||ee(r[e]):Q[e]&&Q[e][t]||r[e]&&r[e][t]},ne=Math.ceil,re=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?re:ne)(e)},oe=Math.min,se=function(e){return e>0?oe(ie(e),9007199254740991):0},ae=Math.max,ue=Math.min,le=function(e,t){var n=ie(e);return n<0?ae(n+t,0):ue(n,t)},ce=function(e){return function(t,n,r){var i,o=v(t),s=se(o.length),a=le(r,s);if(e&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((e||a in o)&&o[a]===n)return e||a||0;return!e&&-1}},he={includes:ce(!0),indexOf:ce(!1)},fe=he.indexOf,ge=function(e,t){var n,r=v(e),i=0,o=[];for(n in r)!y(U,n)&&y(r,n)&&o.push(n);for(;t.length>i;)y(r,n=t[i++])&&(~fe(o,n)||o.push(n));return o},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ve=de.concat("length","prototype"),pe={f:Object.getOwnPropertyNames||function(e){return ge(e,ve)}},_e={f:Object.getOwnPropertySymbols},me=te("Reflect","ownKeys")||function(e){var t=pe.f(E(e)),n=_e.f;return n?t.concat(n(e)):t},ye=function(e,t){for(var n=me(t),r=I.f,i=M.f,o=0;o<n.length;o++){var s=n[o];y(e,s)||r(e,s,i(t,s))}},ke=/#|\.prototype\./,xe=function(e,t){var n=Se[be(e)];return n==Ee||n!=Me&&("function"==typeof t?i(t):!!t)},be=xe.normalize=function(e){return String(e).replace(ke,".").toLowerCase()},Se=xe.data={},Me=xe.NATIVE="N",Ee=xe.POLYFILL="P",Ce=xe,Ie=M.f,we=function(e,t){var n,i,o,s,a,u=e.target,l=e.global,c=e.stat;if(n=l?r:c?r[u]||O(u,{}):(r[u]||{}).prototype)for(i in t){if(s=t[i],o=e.noTargetGet?(a=Ie(n,i))&&a.value:n[i],!Ce(l?i:u+(c?".":"#")+i,e.forced)&&void 0!==o){if(typeof s==typeof o)continue;ye(s,o)}(e.sham||o&&o.sham)&&w(s,"sham",!0),J(n,i,s,e)}},Oe=function(e,t){var n=[][e];return!!n&&i((function(){n.call(null,t||function(){throw 1},1)}))},Ae=Object.defineProperty,Te={},Pe=function(e){throw e},Le=function(e,t){if(y(Te,e))return Te[e];t||(t={});var n=[][e],r=!!y(t,"ACCESSORS")&&t.ACCESSORS,s=y(t,0)?t[0]:Pe,a=y(t,1)?t[1]:void 0;return Te[e]=!!n&&!i((function(){if(r&&!o)return!0;var e={length:-1};r?Ae(e,1,{enumerable:!0,get:Pe}):e[1]=1,n.call(e,s,a)}))},je=he.indexOf,ze=[].indexOf,Re=!!ze&&1/[1].indexOf(1,-0)<0,Be=Oe("indexOf"),Ze=Le("indexOf",{ACCESSORS:!0,1:0});we({target:"Array",proto:!0,forced:Re||!Be||!Ze},{indexOf:function(e){return Re?ze.apply(this,arguments)||0:je(this,e,arguments.length>1?arguments[1]:void 0)}});var De,Ne,He=Array.isArray||function(e){return"Array"==h(e)},$e=function(e,t,n){var r=_(t);r in e?I.f(e,r,l(0,n)):e[r]=n},Fe=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),Ue=Fe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ge=D("wks"),Ve=r.Symbol,We=Ue?Ve:Ve&&Ve.withoutSetter||$,Xe=function(e){return y(Ge,e)||(Fe&&y(Ve,e)?Ge[e]=Ve[e]:Ge[e]=We("Symbol."+e)),Ge[e]},qe=te("navigator","userAgent")||"",Ke=r.process,Ye=Ke&&Ke.versions,Je=Ye&&Ye.v8;Je?Ne=(De=Je.split("."))[0]+De[1]:qe&&(!(De=qe.match(/Edge\/(\d+)/))||De[1]>=74)&&(De=qe.match(/Chrome\/(\d+)/))&&(Ne=De[1]);var Qe=Ne&&+Ne,et=Xe("species"),tt=function(e){return Qe>=51||!i((function(){var t=[];return(t.constructor={})[et]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},nt=tt("slice"),rt=Le("slice",{ACCESSORS:!0,0:0,1:2}),it=Xe("species"),ot=[].slice,st=Math.max;we({target:"Array",proto:!0,forced:!nt||!rt},{slice:function(e,t){var n,r,i,o=v(this),s=se(o.length),a=le(e,s),u=le(void 0===t?s:t,s);if(He(o)&&("function"!=typeof(n=o.constructor)||n!==Array&&!He(n.prototype)?p(n)&&null===(n=n[it])&&(n=void 0):n=void 0,n===Array||void 0===n))return ot.call(o,a,u);for(r=new(void 0===n?Array:n)(st(u-a,0)),i=0;a<u;a++,i++)a in o&&$e(r,i,o[a]);return r.length=i,r}});var at=function(e){return Object(d(e))},ut=Xe("species"),lt=function(e,t){var n;return He(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!He(n.prototype)?p(n)&&null===(n=n[ut])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},ct=tt("splice"),ht=Le("splice",{ACCESSORS:!0,0:0,1:2}),ft=Math.max,gt=Math.min;we({target:"Array",proto:!0,forced:!ct||!ht},{splice:function(e,t){var n,r,i,o,s,a,u=at(this),l=se(u.length),c=le(e,l),h=arguments.length;if(0===h?n=r=0:1===h?(n=0,r=l-c):(n=h-2,r=gt(ft(ie(t),0),l-c)),l+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(i=lt(u,r),o=0;o<r;o++)(s=c+o)in u&&$e(i,o,u[s]);if(i.length=r,n<r){for(o=c;o<l-r;o++)a=o+n,(s=o+r)in u?u[a]=u[s]:delete u[a];for(o=l;o>l-r+n;o--)delete u[o-1]}else if(n>r)for(o=l-r;o>c;o--)a=o+n-1,(s=o+r-1)in u?u[a]=u[s]:delete u[a];for(o=0;o<n;o++)u[o+c]=arguments[o+2];return u.length=l-r+n,i}});var dt=Date.prototype,vt=dt.toString,pt=dt.getTime;new Date(NaN)+""!="Invalid Date"&&J(dt,"toString",(function(){var e=pt.call(this);return e==e?vt.call(this):"Invalid Date"}));var _t=Object.keys||function(e){return ge(e,de)},mt=Object.assign,yt=Object.defineProperty,kt=!mt||i((function(){if(o&&1!==mt({b:1},mt(yt({},"a",{enumerable:!0,get:function(){yt(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=mt({},e)[n]||"abcdefghijklmnopqrst"!=_t(mt({},t)).join("")}))?function(e,t){for(var n=at(e),r=arguments.length,i=1,s=_e.f,a=u.f;r>i;)for(var l,c=g(arguments[i++]),h=s?_t(c).concat(s(c)):_t(c),f=h.length,d=0;f>d;)l=h[d++],o&&!a.call(c,l)||(n[l]=c[l]);return n}:mt;we({target:"Object",stat:!0,forced:Object.assign!==kt},{assign:kt});var xt={};xt[Xe("toStringTag")]="z";var bt="[object z]"===String(xt),St=Xe("toStringTag"),Mt="Arguments"==h(function(){return arguments}()),Et=bt?h:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),St))?n:Mt?h(t):"Object"==(r=h(t))&&"function"==typeof t.callee?"Arguments":r},Ct=bt?{}.toString:function(){return"[object "+Et(this)+"]"};bt||J(Object.prototype,"toString",Ct,{unsafe:!0});var It=function(){var e=E(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},wt=RegExp.prototype,Ot=wt.toString,At=i((function(){return"/a/b"!=Ot.call({source:"a",flags:"b"})})),Tt="toString"!=Ot.name;function Pt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jt(e,t,n){return t&&Lt(e.prototype,t),n&&Lt(e,n),e}function zt(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Bt(e,t)}function Rt(e){return(Rt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Bt(e,t){return(Bt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Zt(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Dt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(At||Tt)&&J(RegExp.prototype,"toString",(function(){var e=E(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in wt)?It.call(e):n)}),{unsafe:!0});var Nt=Xe("isConcatSpreadable"),Ht=Qe>=51||!i((function(){var e=[];return e[Nt]=!1,e.concat()[0]!==e})),$t=tt("concat"),Ft=function(e){if(!p(e))return!1;var t=e[Nt];return void 0!==t?!!t:He(e)};we({target:"Array",proto:!0,forced:!Ht||!$t},{concat:function(e){var t,n,r,i,o,s=at(this),a=lt(s,0),u=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],Ft(o)){if(u+(i=se(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<i;n++,u++)n in o&&$e(a,u,o[n])}else{if(u>=9007199254740991)throw TypeError("Maximum allowed index exceeded");$e(a,u++,o)}return a.length=u,a}});var Ut=[].join,Gt=g!=Object,Vt=Oe("join",",");we({target:"Array",proto:!0,forced:Gt||!Vt},{join:function(e){return Ut.call(v(this),void 0===e?",":e)}});var Wt=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},Xt=function(e){return function(t,n,r,i){Wt(n);var o=at(t),s=g(o),a=se(o.length),u=e?a-1:0,l=e?-1:1;if(r<2)for(;;){if(u in s){i=s[u],u+=l;break}if(u+=l,e?u<0:a<=u)throw TypeError("Reduce of empty array with no initial value")}for(;e?u>=0:a>u;u+=l)u in s&&(i=n(i,s[u],u,o));return i}},qt={left:Xt(!1),right:Xt(!0)}.left,Kt=Oe("reduce"),Yt=Le("reduce",{1:0});we({target:"Array",proto:!0,forced:!Kt||!Yt},{reduce:function(e){return qt(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}}),we({target:"Object",stat:!0,forced:i((function(){_t(1)}))},{keys:function(e){return _t(at(e))}});var Jt="\t\n\v\f\r                　\u2028\u2029\ufeff",Qt="["+Jt+"]",en=RegExp("^"+Qt+Qt+"*"),tn=RegExp(Qt+Qt+"*$"),nn=function(e){return function(t){var n=String(d(t));return 1&e&&(n=n.replace(en,"")),2&e&&(n=n.replace(tn,"")),n}},rn={start:nn(1),end:nn(2),trim:nn(3)}.trim,on=r.parseInt,sn=/^[+-]?0[Xx]/,an=8!==on(Jt+"08")||22!==on(Jt+"0x16")?function(e,t){var n=rn(String(e));return on(n,t>>>0||(sn.test(n)?16:10))}:on;function un(e,t){return RegExp(e,t)}we({global:!0,forced:parseInt!=an},{parseInt:an});var ln,cn,hn={UNSUPPORTED_Y:i((function(){var e=un("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:i((function(){var e=un("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},fn=RegExp.prototype.exec,gn=String.prototype.replace,dn=fn,vn=(ln=/a/,cn=/b*/g,fn.call(ln,"a"),fn.call(cn,"a"),0!==ln.lastIndex||0!==cn.lastIndex),pn=hn.UNSUPPORTED_Y||hn.BROKEN_CARET,_n=void 0!==/()??/.exec("")[1];(vn||_n||pn)&&(dn=function(e){var t,n,r,i,o=this,s=pn&&o.sticky,a=It.call(o),u=o.source,l=0,c=e;return s&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),c=String(e).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==e[o.lastIndex-1])&&(u="(?: "+u+")",c=" "+c,l++),n=new RegExp("^(?:"+u+")",a)),_n&&(n=new RegExp("^"+u+"$(?!\\s)",a)),vn&&(t=o.lastIndex),r=fn.call(s?n:o,c),s?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:vn&&r&&(o.lastIndex=o.global?r.index+r[0].length:t),_n&&r&&r.length>1&&gn.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r});var mn=dn;we({target:"RegExp",proto:!0,forced:/./.exec!==mn},{exec:mn});var yn=Xe("species"),kn=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),xn="$0"==="a".replace(/./,"$0"),bn=Xe("replace"),Sn=!!/./[bn]&&""===/./[bn]("a","$0"),Mn=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),En=function(e,t,n,r){var o=Xe(e),s=!i((function(){var t={};return t[o]=function(){return 7},7!=""[e](t)})),a=s&&!i((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[yn]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return t=!0,null},n[o](""),!t}));if(!s||!a||"replace"===e&&(!kn||!xn||Sn)||"split"===e&&!Mn){var u=/./[o],l=n(o,""[e],(function(e,t,n,r,i){return t.exec===mn?s&&!i?{done:!0,value:u.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:xn,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Sn}),c=l[0],h=l[1];J(String.prototype,e,c),J(RegExp.prototype,o,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}r&&w(RegExp.prototype[o],"sham",!0)},Cn=function(e){return function(t,n){var r,i,o=String(d(t)),s=ie(n),a=o.length;return s<0||s>=a?e?"":void 0:(r=o.charCodeAt(s))<55296||r>56319||s+1===a||(i=o.charCodeAt(s+1))<56320||i>57343?e?o.charAt(s):r:e?o.slice(s,s+2):i-56320+(r-55296<<10)+65536}},In={codeAt:Cn(!1),charAt:Cn(!0)}.charAt,wn=function(e,t,n){return t+(n?In(e,t).length:1)},On=function(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==h(e))throw TypeError("RegExp#exec called on incompatible receiver");return mn.call(e,t)},An=Math.max,Tn=Math.min,Pn=Math.floor,Ln=/\$([$&'`]|\d\d?|<[^>]*>)/g,jn=/\$([$&'`]|\d\d?)/g;En("replace",2,(function(e,t,n,r){var i=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,o=r.REPLACE_KEEPS_$0,s=i?"$":"$0";return[function(n,r){var i=d(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!i&&o||"string"==typeof r&&-1===r.indexOf(s)){var u=n(t,e,this,r);if(u.done)return u.value}var l=E(e),c=String(this),h="function"==typeof r;h||(r=String(r));var f=l.global;if(f){var g=l.unicode;l.lastIndex=0}for(var d=[];;){var v=On(l,c);if(null===v)break;if(d.push(v),!f)break;""===String(v[0])&&(l.lastIndex=wn(c,se(l.lastIndex),g))}for(var p,_="",m=0,y=0;y<d.length;y++){v=d[y];for(var k=String(v[0]),x=An(Tn(ie(v.index),c.length),0),b=[],S=1;S<v.length;S++)b.push(void 0===(p=v[S])?p:String(p));var M=v.groups;if(h){var C=[k].concat(b,x,c);void 0!==M&&C.push(M);var I=String(r.apply(void 0,C))}else I=a(k,c,x,b,M,r);x>=m&&(_+=c.slice(m,x)+I,m=x+k.length)}return _+c.slice(m)}];function a(e,n,r,i,o,s){var a=r+e.length,u=i.length,l=jn;return void 0!==o&&(o=at(o),l=Ln),t.call(s,l,(function(t,s){var l;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(a);case"<":l=o[s.slice(1,-1)];break;default:var c=+s;if(0===c)return t;if(c>u){var h=Pn(c/10);return 0===h?t:h<=u?void 0===i[h-1]?s.charAt(1):i[h-1]+s.charAt(1):t}l=i[c-1]}return void 0===l?"":l}))}}));var zn=Xe("match"),Rn=Xe("species"),Bn=[].push,Zn=Math.min,Dn=!i((function(){return!RegExp(4294967295,"y")}));En("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r,i,o=String(d(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===e)return[o];if(!p(r=e)||(void 0!==(i=r[zn])?!i:"RegExp"!=h(r)))return t.call(o,e,s);for(var a,u,l,c=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,v=new RegExp(e.source,f+"g");(a=mn.call(v,o))&&!((u=v.lastIndex)>g&&(c.push(o.slice(g,a.index)),a.length>1&&a.index<o.length&&Bn.apply(c,a.slice(1)),l=a[0].length,g=u,c.length>=s));)v.lastIndex===a.index&&v.lastIndex++;return g===o.length?!l&&v.test("")||c.push(""):c.push(o.slice(g)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=d(this),o=null==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(String(i),t,n)},function(e,i){var o=n(r,e,this,i,r!==t);if(o.done)return o.value;var s=E(e),a=String(this),u=function(e,t){var n,r=E(e).constructor;return void 0===r||null==(n=E(r)[Rn])?t:Wt(n)}(s,RegExp),l=s.unicode,c=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(Dn?"y":"g"),h=new u(Dn?s:"^(?:"+s.source+")",c),f=void 0===i?4294967295:i>>>0;if(0===f)return[];if(0===a.length)return null===On(h,a)?[a]:[];for(var g=0,d=0,v=[];d<a.length;){h.lastIndex=Dn?d:0;var p,_=On(h,Dn?a:a.slice(d));if(null===_||(p=Zn(se(h.lastIndex+(Dn?0:d)),a.length))===g)d=wn(a,d,l);else{if(v.push(a.slice(g,d)),v.length===f)return v;for(var m=1;m<=_.length-1;m++)if(v.push(_[m]),v.length===f)return v;d=g=p}}return v.push(a.slice(g)),v}]}),!Dn);var Nn=function e(){Pt(this,e),function(e,t){for(var n in t.prototype)e.prototype[n]=t.prototype[n]}(e,google.maps.OverlayView)};function Hn(e){return Object.keys(e).reduce((function(t,n){return e[n]&&t.push(n+":"+e[n]),t}),[]).join(";")}function $n(e){return e?e+"px":void 0}var Fn=function(e){function t(e,n){var r;return Pt(this,t),(r=Zt(this,Rt(t).call(this))).cluster_=e,r.styles_=n,r.center_=null,r.div_=null,r.sums_=null,r.visible_=!1,r.style=null,r.setMap(e.getMap()),r}return zt(t,e),jt(t,[{key:"onAdd",value:function(){var e,t,n=this,r=this.cluster_.getMarkerClusterer(),i=Dt(google.maps.version.split("."),2),o=i[0],s=i[1],a=100*parseInt(o,10)+parseInt(s,10);this.div_=document.createElement("div"),this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",(function(){t=e})),google.maps.event.addDomListener(this.div_,"mousedown",(function(){e=!0,t=!1})),a>=332&&google.maps.event.addDomListener(this.div_,"touchstart",(function(e){e.stopPropagation()})),google.maps.event.addDomListener(this.div_,"click",(function(i){if(e=!1,!t){if(google.maps.event.trigger(r,"click",n.cluster_),google.maps.event.trigger(r,"clusterclick",n.cluster_),r.getZoomOnClick()){var o=r.getMaxZoom(),s=n.cluster_.getBounds();r.getMap().fitBounds(s),setTimeout((function(){r.getMap().fitBounds(s),null!==o&&r.getMap().getZoom()>o&&r.getMap().setZoom(o+1)}),100)}i.cancelBubble=!0,i.stopPropagation&&i.stopPropagation()}})),google.maps.event.addDomListener(this.div_,"mouseover",(function(){google.maps.event.trigger(r,"mouseover",n.cluster_)})),google.maps.event.addDomListener(this.div_,"mouseout",(function(){google.maps.event.trigger(r,"mouseout",n.cluster_)}))}},{key:"onRemove",value:function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)}},{key:"draw",value:function(){if(this.visible_){var e=this.getPosFromLatLng_(this.center_);this.div_.style.top=e.y+"px",this.div_.style.left=e.x+"px"}}},{key:"hide",value:function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1}},{key:"show",value:function(){this.div_&&(this.div_.className=this.className_,this.div_.style.cssText=this.createCss_(this.getPosFromLatLng_(this.center_)),this.div_.innerHTML=(this.style.url?this.getImageElementHtml():"")+this.getLabelDivHtml(),void 0===this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""),this.visible_=!0}},{key:"getLabelDivHtml",value:function(){var e=this.cluster_.getMarkerClusterer().ariaLabelFn(this.sums_.text),t={position:"absolute",top:$n(this.anchorText_[0]),left:$n(this.anchorText_[1]),color:this.style.textColor,"font-size":$n(this.style.textSize),"font-family":this.style.fontFamily,"font-weight":this.style.fontWeight,"font-style":this.style.fontStyle,"text-decoration":this.style.textDecoration,"text-align":"center",width:$n(this.style.width),"line-height":$n(this.style.textLineHeight)};return'\n<div aria-label="'.concat(e,'" style="').concat(Hn(t),'" tabindex="0">\n  <span aria-hidden="true">').concat(this.sums_.text,"</span>\n</div>\n")}},{key:"getImageElementHtml",value:function(){var e=(this.style.backgroundPosition||"0 0").split(" "),t=parseInt(e[0].replace(/^\s+|\s+$/g,""),10),n=parseInt(e[1].replace(/^\s+|\s+$/g,""),10),r={};if(this.cluster_.getMarkerClusterer().getEnableRetinaIcons())r={width:$n(this.style.width),height:$n(this.style.height)};else{var i=-1*n,o=-1*t+this.style.width,s=-1*n+this.style.height,a=-1*t;r={clip:"rect(".concat(i,"px, ").concat(o,"px, ").concat(s,"px, ").concat(a,"px)")}}var u=Hn(Object.assign({position:"absolute",top:$n(n),left:$n(t)},r));return'<img alt="'.concat(this.sums_.text,'" aria-hidden="true" src="').concat(this.style.url,'" style="').concat(u,'"/>')}},{key:"useStyle",value:function(e){this.sums_=e;var t=Math.max(0,e.index-1);t=Math.min(this.styles_.length-1,t),this.style=this.styles_[t],this.anchorText_=this.style.anchorText||[0,0],this.anchorIcon_=this.style.anchorIcon||[Math.floor(this.style.height/2),Math.floor(this.style.width/2)],this.className_=this.cluster_.getMarkerClusterer().getClusterClass()+" "+(this.style.className||"cluster-"+t)}},{key:"setCenter",value:function(e){this.center_=e}},{key:"createCss_",value:function(e){return Hn({"z-index":"".concat(this.cluster_.getMarkerClusterer().getZIndex()),top:$n(e.y),left:$n(e.x),width:$n(this.style.width),height:$n(this.style.height),cursor:"pointer",position:"absolute","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-o-user-select":"none","user-select":"none"})}},{key:"getPosFromLatLng_",value:function(e){var t=this.getProjection().fromLatLngToDivPixel(e);return t.x=Math.floor(t.x-this.anchorIcon_[1]),t.y=Math.floor(t.y-this.anchorIcon_[0]),t}}]),t}(Nn),Un=function(){function e(t){Pt(this,e),this.markerClusterer_=t,this.map_=this.markerClusterer_.getMap(),this.minClusterSize_=this.markerClusterer_.getMinimumClusterSize(),this.averageCenter_=this.markerClusterer_.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new Fn(this,this.markerClusterer_.getStyles())}return jt(e,[{key:"getSize",value:function(){return this.markers_.length}},{key:"getMarkers",value:function(){return this.markers_}},{key:"getCenter",value:function(){return this.center_}},{key:"getMap",value:function(){return this.map_}},{key:"getMarkerClusterer",value:function(){return this.markerClusterer_}},{key:"getBounds",value:function(){for(var e=new google.maps.LatLngBounds(this.center_,this.center_),t=this.getMarkers(),n=0;n<t.length;n++)e.extend(t[n].getPosition());return e}},{key:"remove",value:function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_}},{key:"addMarker",value:function(e){if(this.isMarkerAlreadyAdded_(e))return!1;if(this.center_){if(this.averageCenter_){var t=this.markers_.length+1,n=(this.center_.lat()*(t-1)+e.getPosition().lat())/t,r=(this.center_.lng()*(t-1)+e.getPosition().lng())/t;this.center_=new google.maps.LatLng(n,r),this.calculateBounds_()}}else this.center_=e.getPosition(),this.calculateBounds_();e.isAdded=!0,this.markers_.push(e);var i=this.markers_.length,o=this.markerClusterer_.getMaxZoom();if(null!==o&&this.map_.getZoom()>o)e.getMap()!==this.map_&&e.setMap(this.map_);else if(i<this.minClusterSize_)e.getMap()!==this.map_&&e.setMap(this.map_);else if(i===this.minClusterSize_)for(var s=0;s<i;s++)this.markers_[s].setMap(null);else e.setMap(null);return!0}},{key:"isMarkerInClusterBounds",value:function(e){return this.bounds_.contains(e.getPosition())}},{key:"calculateBounds_",value:function(){var e=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(e)}},{key:"updateIcon",value:function(){var e=this.markers_.length,t=this.markerClusterer_.getMaxZoom();if(null!==t&&this.map_.getZoom()>t)this.clusterIcon_.hide();else if(e<this.minClusterSize_)this.clusterIcon_.hide();else{var n=this.markerClusterer_.getStyles().length,r=this.markerClusterer_.getCalculator()(this.markers_,n);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(r),this.clusterIcon_.show()}}},{key:"isMarkerAlreadyAdded_",value:function(e){if(this.markers_.indexOf)return-1!==this.markers_.indexOf(e);for(var t=0;t<this.markers_.length;t++)if(e===this.markers_[t])return!0;return!1}}]),e}(),Gn=function(e,t,n){return void 0!==e[t]?e[t]:n},Vn=function(e){function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Pt(this,t),(n=Zt(this,Rt(t).call(this))).options=i,n.markers_=[],n.clusters_=[],n.listeners_=[],n.activeMap_=null,n.ready_=!1,n.ariaLabelFn=n.options.ariaLabelFn||function(){return""},n.zIndex_=n.options.zIndex||google.maps.Marker.MAX_ZINDEX+1,n.gridSize_=n.options.gridSize||60,n.minClusterSize_=n.options.minimumClusterSize||2,n.maxZoom_=n.options.maxZoom||null,n.styles_=n.options.styles||[],n.title_=n.options.title||"",n.zoomOnClick_=Gn(n.options,"zoomOnClick",!0),n.averageCenter_=Gn(n.options,"averageCenter",!1),n.ignoreHidden_=Gn(n.options,"ignoreHidden",!1),n.enableRetinaIcons_=Gn(n.options,"enableRetinaIcons",!1),n.imagePath_=n.options.imagePath||t.IMAGE_PATH,n.imageExtension_=n.options.imageExtension||t.IMAGE_EXTENSION,n.imageSizes_=n.options.imageSizes||t.IMAGE_SIZES,n.calculator_=n.options.calculator||t.CALCULATOR,n.batchSize_=n.options.batchSize||t.BATCH_SIZE,n.batchSizeIE_=n.options.batchSizeIE||t.BATCH_SIZE_IE,n.clusterClass_=n.options.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(n.batchSize_=n.batchSizeIE_),n.setupStyles_(),n.addMarkers(r,!0),n.setMap(e),n}return zt(t,e),jt(t,[{key:"onAdd",value:function(){var e=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.prevZoom_=this.getMap().getZoom(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",(function(){var t=e.getMap(),n=t.minZoom||0,r=Math.min(t.maxZoom||100,t.mapTypes[t.getMapTypeId()].maxZoom),i=Math.min(Math.max(e.getMap().getZoom(),n),r);e.prevZoom_!=i&&(e.prevZoom_=i,e.resetViewport_(!1))})),google.maps.event.addListener(this.getMap(),"idle",(function(){e.redraw_()}))]}},{key:"onRemove",value:function(){for(var e=0;e<this.markers_.length;e++)this.markers_[e].getMap()!==this.activeMap_&&this.markers_[e].setMap(this.activeMap_);for(var t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();this.clusters_=[];for(var n=0;n<this.listeners_.length;n++)google.maps.event.removeListener(this.listeners_[n]);this.listeners_=[],this.activeMap_=null,this.ready_=!1}},{key:"draw",value:function(){}},{key:"setupStyles_",value:function(){if(!(this.styles_.length>0))for(var e=0;e<this.imageSizes_.length;e++){var n=this.imageSizes_[e];this.styles_.push(t.withDefaultStyle({url:this.imagePath_+(e+1)+"."+this.imageExtension_,height:n,width:n}))}}},{key:"fitMapToMarkers",value:function(){for(var e=this.getMarkers(),t=new google.maps.LatLngBounds,n=0;n<e.length;n++)!e[n].getVisible()&&this.getIgnoreHidden()||t.extend(e[n].getPosition());this.getMap().fitBounds(t)}},{key:"getGridSize",value:function(){return this.gridSize_}},{key:"setGridSize",value:function(e){this.gridSize_=e}},{key:"getMinimumClusterSize",value:function(){return this.minClusterSize_}},{key:"setMinimumClusterSize",value:function(e){this.minClusterSize_=e}},{key:"getMaxZoom",value:function(){return this.maxZoom_}},{key:"setMaxZoom",value:function(e){this.maxZoom_=e}},{key:"getZIndex",value:function(){return this.zIndex_}},{key:"setZIndex",value:function(e){this.zIndex_=e}},{key:"getStyles",value:function(){return this.styles_}},{key:"setStyles",value:function(e){this.styles_=e}},{key:"getTitle",value:function(){return this.title_}},{key:"setTitle",value:function(e){this.title_=e}},{key:"getZoomOnClick",value:function(){return this.zoomOnClick_}},{key:"setZoomOnClick",value:function(e){this.zoomOnClick_=e}},{key:"getAverageCenter",value:function(){return this.averageCenter_}},{key:"setAverageCenter",value:function(e){this.averageCenter_=e}},{key:"getIgnoreHidden",value:function(){return this.ignoreHidden_}},{key:"setIgnoreHidden",value:function(e){this.ignoreHidden_=e}},{key:"getEnableRetinaIcons",value:function(){return this.enableRetinaIcons_}},{key:"setEnableRetinaIcons",value:function(e){this.enableRetinaIcons_=e}},{key:"getImageExtension",value:function(){return this.imageExtension_}},{key:"setImageExtension",value:function(e){this.imageExtension_=e}},{key:"getImagePath",value:function(){return this.imagePath_}},{key:"setImagePath",value:function(e){this.imagePath_=e}},{key:"getImageSizes",value:function(){return this.imageSizes_}},{key:"setImageSizes",value:function(e){this.imageSizes_=e}},{key:"getCalculator",value:function(){return this.calculator_}},{key:"setCalculator",value:function(e){this.calculator_=e}},{key:"getBatchSizeIE",value:function(){return this.batchSizeIE_}},{key:"setBatchSizeIE",value:function(e){this.batchSizeIE_=e}},{key:"getClusterClass",value:function(){return this.clusterClass_}},{key:"setClusterClass",value:function(e){this.clusterClass_=e}},{key:"getMarkers",value:function(){return this.markers_}},{key:"getTotalMarkers",value:function(){return this.markers_.length}},{key:"getClusters",value:function(){return this.clusters_}},{key:"getTotalClusters",value:function(){return this.clusters_.length}},{key:"addMarker",value:function(e,t){this.pushMarkerTo_(e),t||this.redraw_()}},{key:"addMarkers",value:function(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&this.pushMarkerTo_(e[n]);t||this.redraw_()}},{key:"pushMarkerTo_",value:function(e){var t=this;e.getDraggable()&&google.maps.event.addListener(e,"dragend",(function(){t.ready_&&(e.isAdded=!1,t.repaint())})),e.isAdded=!1,this.markers_.push(e)}},{key:"removeMarker",value:function(e,t){var n=this.removeMarker_(e);return!t&&n&&this.repaint(),n}},{key:"removeMarkers",value:function(e,t){for(var n=!1,r=0;r<e.length;r++){var i=this.removeMarker_(e[r]);n=n||i}return!t&&n&&this.repaint(),n}},{key:"removeMarker_",value:function(e){var t=-1;if(this.markers_.indexOf)t=this.markers_.indexOf(e);else for(var n=0;n<this.markers_.length;n++)if(e===this.markers_[n]){t=n;break}return-1!==t&&(e.setMap(null),this.markers_.splice(t,1),!0)}},{key:"clearMarkers",value:function(){this.resetViewport_(!0),this.markers_=[]}},{key:"repaint",value:function(){var e=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout((function(){for(var t=0;t<e.length;t++)e[t].remove()}),0)}},{key:"getExtendedBounds",value:function(e){var t=this.getProjection(),n=new google.maps.LatLng(e.getNorthEast().lat(),e.getNorthEast().lng()),r=new google.maps.LatLng(e.getSouthWest().lat(),e.getSouthWest().lng()),i=t.fromLatLngToDivPixel(n);i.x+=this.gridSize_,i.y-=this.gridSize_;var o=t.fromLatLngToDivPixel(r);o.x-=this.gridSize_,o.y+=this.gridSize_;var s=t.fromDivPixelToLatLng(i),a=t.fromDivPixelToLatLng(o);return e.extend(s),e.extend(a),e}},{key:"redraw_",value:function(){this.createClusters_(0)}},{key:"resetViewport_",value:function(e){for(var t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();this.clusters_=[];for(var n=0;n<this.markers_.length;n++){var r=this.markers_[n];r.isAdded=!1,e&&r.setMap(null)}}},{key:"distanceBetweenPoints_",value:function(e,t){var n=(t.lat()-e.lat())*Math.PI/180,r=(t.lng()-e.lng())*Math.PI/180,i=Math.sin(n/2)*Math.sin(n/2)+Math.cos(e.lat()*Math.PI/180)*Math.cos(t.lat()*Math.PI/180)*Math.sin(r/2)*Math.sin(r/2);return 6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))}},{key:"isMarkerInBounds_",value:function(e,t){return t.contains(e.getPosition())}},{key:"addToClosestCluster_",value:function(e){for(var t=4e4,n=null,r=0;r<this.clusters_.length;r++){var i=this.clusters_[r],o=i.getCenter();if(o){var s=this.distanceBetweenPoints_(o,e.getPosition());s<t&&(t=s,n=i)}}if(n&&n.isMarkerInClusterBounds(e))n.addMarker(e);else{var a=new Un(this);a.addMarker(e),this.clusters_.push(a)}}},{key:"createClusters_",value:function(e){var t=this;if(this.ready_){var n;0===e&&(google.maps.event.trigger(this,"clusteringbegin",this),void 0!==this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),n=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));for(var r=this.getExtendedBounds(n),i=Math.min(e+this.batchSize_,this.markers_.length),o=e;o<i;o++){var s=this.markers_[o];!s.isAdded&&this.isMarkerInBounds_(s,r)&&(!this.ignoreHidden_||this.ignoreHidden_&&s.getVisible())&&this.addToClosestCluster_(s)}if(i<this.markers_.length)this.timerRefStatic=window.setTimeout((function(){t.createClusters_(i)}),0);else{delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this);for(var a=0;a<this.clusters_.length;a++)this.clusters_[a].updateIcon()}}}}],[{key:"CALCULATOR",value:function(e,t){for(var n=0,r=e.length,i=r;0!==i;)i=Math.floor(i/10),n++;return n=Math.min(n,t),{text:r.toString(),index:n,title:""}}},{key:"withDefaultStyle",value:function(e){return Object.assign({textColor:"black",textSize:11,textDecoration:"none",textLineHeight:e.height,fontWeight:"bold",fontStyle:"normal",fontFamily:"Arial,sans-serif",backgroundPosition:"0 0"},e)}}]),t}(Nn);return Vn.BATCH_SIZE=2e3,Vn.BATCH_SIZE_IE=500,Vn.IMAGE_PATH="../images/m",Vn.IMAGE_EXTENSION="png",Vn.IMAGE_SIZES=[53,56,66,78,90],Vn}));
//# sourceMappingURL=markerclustererplus.umd.js.map
