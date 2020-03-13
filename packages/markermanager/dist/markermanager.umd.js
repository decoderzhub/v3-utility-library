!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(((t=t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.markermanager={}))}(this,(function(t){"use strict";var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,i){return t(i={exports:{}},i.exports),i.exports}var e=function(t){return t&&t.Math==Math&&t},r=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof i&&i)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},u=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,h=Object.getOwnPropertyDescriptor,f={f:h&&!s.call({1:2},1)?function(t){var i=h(this,t);return!!i&&i.enumerable}:s},a=function(t,i){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:i}},c={}.toString,l=function(t){return c.call(t).slice(8,-1)},v="".split,y=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==l(t)?v.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},d=function(t){return y(g(t))},p=function(t){return"object"==typeof t?null!==t:"function"==typeof t},k=function(t,i){if(!p(t))return t;var n,e;if(i&&"function"==typeof(n=t.toString)&&!p(e=n.call(t)))return e;if("function"==typeof(n=t.valueOf)&&!p(e=n.call(t)))return e;if(!i&&"function"==typeof(n=t.toString)&&!p(e=n.call(t)))return e;throw TypeError("Can't convert object to primitive value")},M={}.hasOwnProperty,b=function(t,i){return M.call(t,i)},w=r.document,_=p(w)&&p(w.createElement),m=!u&&!o((function(){return 7!=Object.defineProperty(("div",_?w.createElement("div"):{}),"a",{get:function(){return 7}}).a})),j=Object.getOwnPropertyDescriptor,O={f:u?j:function(t,i){if(t=d(t),i=k(i,!0),m)try{return j(t,i)}catch(t){}if(b(t,i))return a(!f.f.call(t,i),t[i])}},S=function(t){if(!p(t))throw TypeError(String(t)+" is not an object");return t},C=Object.defineProperty,E={f:u?C:function(t,i,n){if(S(t),i=k(i,!0),S(n),m)try{return C(t,i,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[i]=n.value),t}},T=u?function(t,i,n){return E.f(t,i,a(1,n))}:function(t,i,n){return t[i]=n,t},A=function(t,i){try{T(r,t,i)}catch(n){r[t]=i}return i},x=r["t"]||A("__core-js_shared__",{}),P=Function.toString;"function"!=typeof x.inspectSource&&(x.inspectSource=function(t){return P.call(t)});var F,G,z,B=x.inspectSource,N=r.WeakMap,D="function"==typeof N&&/native code/.test(B(N)),R=n((function(t){(t.exports=function(t,i){return x[t]||(x[t]=void 0!==i?i:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),Z=0,q=Math.random(),I=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++Z+q).toString(36)},L=R("keys"),H={},K=r.WeakMap;if(D){var V=new K,J=V.get,Q=V.has,U=V.set;F=function(t,i){return U.call(V,t,i),i},G=function(t){return J.call(V,t)||{}},z=function(t){return Q.call(V,t)}}else{var W=L["state"]||(L.state=I("state"));H[W]=!0,F=function(t,i){return T(t,W,i),i},G=function(t){return b(t,W)?t[W]:{}},z=function(t){return b(t,W)}}var X,Y,$={set:F,get:G,has:z,enforce:function(t){return z(t)?G(t):F(t,{})},getterFor:function(t){return function(i){var n;if(!p(i)||(n=G(i)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},tt=n((function(t){var i=$.get,n=$.enforce,e=String(String).split("String");(t.exports=function(t,i,o,u){var s=!!u&&!!u.unsafe,h=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof i||b(o,"name")||T(o,"name",i),n(o).source=e.join("string"==typeof i?i:"")),t!==r?(s?!f&&t[i]&&(h=!0):delete t[i],h?t[i]=o:T(t,i,o)):h?t[i]=o:A(i,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&i(this).source||B(this)}))})),it=r,nt=function(t){return"function"==typeof t?t:void 0},et=function(t,i){return arguments.length<2?nt(it[t])||nt(r[t]):it[t]&&it[t][i]||r[t]&&r[t][i]},rt=Math.ceil,ot=Math.floor,ut=function(t){return isNaN(t=+t)?0:(t>0?ot:rt)(t)},st=Math.min,ht=function(t){return t>0?st(ut(t),9007199254740991):0},ft=Math.max,at=Math.min,ct=function(t,i){var n=ut(t);return n<0?ft(n+i,0):at(n,i)},lt=function(t){return function(i,n,e){var r,o=d(i),u=ht(o.length),s=ct(e,u);if(t&&n!=n){for(;u>s;)if((r=o[s++])!=r)return!0}else for(;u>s;s++)if((t||s in o)&&o[s]===n)return t||s||0;return!t&&-1}},vt=(lt(!0),lt(!1)),yt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),gt={f:Object.getOwnPropertyNames||function(t){return function(t,i){var n,e=d(t),r=0,o=[];for(n in e)!b(H,n)&&b(e,n)&&o.push(n);for(;i.length>r;)b(e,n=i[r++])&&(~vt(o,n)||o.push(n));return o}(t,yt)}},dt={f:Object.getOwnPropertySymbols},pt=et("Reflect","ownKeys")||function(t){var i=gt.f(S(t)),n=dt.f;return n?i.concat(n(t)):i},kt=function(t,i){for(var n=pt(i),e=E.f,r=O.f,o=0;o<n.length;o++){var u=n[o];b(t,u)||e(t,u,r(i,u))}},Mt=/#|\.prototype\./,bt=function(t,i){var n=_t[wt(t)];return n==jt||n!=mt&&("function"==typeof i?o(i):!!i)},wt=bt.normalize=function(t){return String(t).replace(Mt,".").toLowerCase()},_t=bt.data={},mt=bt.NATIVE="N",jt=bt.POLYFILL="P",Ot=bt,St=O.f,Ct=function(t){return Object(g(t))},Et=Array.isArray||function(t){return"Array"==l(t)},Tt=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),At=Tt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,xt=R("wks"),Pt=r.Symbol,Ft=At?Pt:Pt&&Pt.withoutSetter||I,Gt=function(t){return b(xt,t)||(Tt&&b(Pt,t)?xt[t]=Pt[t]:xt[t]=Ft("Symbol."+t)),xt[t]},zt=Gt("species"),Bt=function(t,i){var n;return Et(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Et(n.prototype)?p(n)&&null===(n=n[zt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===i?0:i)},Nt=function(t,i,n){var e=k(i);e in t?E.f(t,e,a(0,n)):t[e]=n},Dt=et("navigator","userAgent")||"",Rt=r.process,Zt=Rt&&Rt.versions,qt=Zt&&Zt.v8;qt?Y=(X=qt.split("."))[0]+X[1]:Dt&&(!(X=Dt.match(/Edge\/(\d+)/))||X[1]>=74)&&(X=Dt.match(/Chrome\/(\d+)/))&&(Y=X[1]);var It=Y&&+Y,Lt=Gt("species"),Ht=Object.defineProperty,Kt={},Vt=function(t){throw t},Jt=("splice",It>=51||!o((function(){var t=[];return(t.constructor={})[Lt]=function(){return{foo:1}},1!==t.splice(Boolean).foo}))),Qt=function(t,i){if(b(Kt,"splice"))return Kt.splice;i||(i={});var n=[].splice,e=!!b(i,"ACCESSORS")&&i.ACCESSORS,r=b(i,0)?i[0]:Vt,s=b(i,1)?i[1]:void 0;return Kt.splice=!!n&&!o((function(){if(e&&!u)return!0;var t={length:-1};e?Ht(t,1,{enumerable:!0,get:Vt}):t[1]=1,n.call(t,r,s)}))}(0,{ACCESSORS:!0,0:0,1:2}),Ut=Math.max,Wt=Math.min;function Xt(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function Yt(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function $t(t,i,n){return i&&Yt(t.prototype,i),n&&Yt(t,n),t}!function(t,i){var n,e,o,u,s,h=t.target,f=t.global,a=t.stat;if(n=f?r:a?r[h]||A(h,{}):(r[h]||{}).prototype)for(e in i){if(u=i[e],o=t.noTargetGet?(s=St(n,e))&&s.value:n[e],!Ot(f?e:h+(a?".":"#")+e,t.forced)&&void 0!==o){if(typeof u==typeof o)continue;kt(u,o)}(t.sham||o&&o.sham)&&T(u,"sham",!0),tt(n,e,u,t)}}({target:"Array",proto:!0,forced:!Jt||!Qt},{splice:function(t,i){var n,e,r,o,u,s,h=Ct(this),f=ht(h.length),a=ct(t,f),c=arguments.length;if(0===c?n=e=0:1===c?(n=0,e=f-a):(n=c-2,e=Wt(Ut(ut(i),0),f-a)),f+n-e>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(r=Bt(h,e),o=0;o<e;o++)(u=a+o)in h&&Nt(r,o,h[u]);if(r.length=e,n<e){for(o=a;o<f-e;o++)s=o+n,(u=o+e)in h?h[s]=h[u]:delete h[s];for(o=f;o>f-e+n;o--)delete h[o-1]}else if(n>e)for(o=f-e;o>a;o--)s=o+n-1,(u=o+e-1)in h?h[s]=h[u]:delete h[s];for(o=0;o<n;o++)h[o+a]=arguments[o+2];return h.length=f-e+n,r}});var ti=function(){function t(i,n){Xt(this,t),this.z=n,this.minX=Math.min(i[0].x,i[1].x),this.maxX=Math.max(i[0].x,i[1].x),this.minY=Math.min(i[0].y,i[1].y),this.maxY=Math.max(i[0].y,i[1].y)}return $t(t,[{key:"equals",value:function(t){return this.maxX===t.maxX&&this.maxY===t.maxY&&this.minX===t.minX&&this.minY===t.minY}},{key:"containsPoint",value:function(t){return this.minX<=t.x&&this.maxX>=t.x&&this.minY<=t.y&&this.maxY>=t.y}}]),t}(),ii=function(){function t(i,n){var e=this,r=n.maxZoom,o=void 0===r?19:r,u=n.trackMarkers,s=n.shown,h=void 0===s||s,f=n.borderPadding,a=void 0===f?100:f;Xt(this,t),this.i=1024,this.o=i,this.u=i.getZoom(),this.s=o,this.h=u,this.l=new google.maps.Size(-a,a),this.v=new google.maps.Size(a,-a),this.g={},this.p=[],this.p[this.s]=[],this.k={},this.k[this.s]=0,this.shownMarkers=0,this.shown=h,google.maps.event.addListenerOnce(i,"idle",(function(){e.M()}))}return $t(t,[{key:"_initialize",value:function(){var t=this.o.mapTypes;for(var i in t)i in t&&t.get(i)&&"number"===t.get(i).maxZoom&&this.o.mapTypes.get(i).maxZoom;google.maps.event.addListener(this.o,"dragend",this._.bind(this)),google.maps.event.addListener(this.o,"idle",this._.bind(this)),google.maps.event.addListener(this.o,"zoom_changed",this._.bind(this)),this.resetManager(),this.m=this.j(),google.maps.event.trigger(this,"loaded")}},{key:"_removeOverlay",value:function(t){t.setMap(null),this.shownMarkers--}},{key:"_addOverlay",value:function(t){this.shown&&(t.setMap(this.o),this.shownMarkers++)}},{key:"resetManager",value:function(){for(var t=256,i=0;i<=this.s;++i)this.p[i]=[],this.k[i]=0,this.g[i]=Math.ceil(t/this.i),t<<=1}},{key:"clearMarkers",value:function(){this.O(this.m,this.S.bind(this)),this.resetManager()}},{key:"_getTilePoint",value:function(t,i,n){var e=function(t,i){return new google.maps.Point(~~(.5+(r=t.lng(),(1+r/180)*(2<<i+6))),~~(.5+(n=t.lat(),e=Math.sin(n*Math.PI/180),(1-.5/Math.PI*Math.log((1+e)/(1-e)))*(2<<i+6))));var n,e,r}(t,i);return new google.maps.Point(Math.floor((e.x+n.width)/this.i),Math.floor((e.y+n.height)/this.i))}},{key:"_addMarkerBatch",value:function(t,i,n){var e=t.getPosition();t.set("__minZoom",i),this.h&&google.maps.event.addListener(t,"changed",(function(t,i,n){this.C(t,i,n)}));for(var r=this.T(e,n,new google.maps.Size(0,0)),o=n;o>=i;o--)this.A(r.x,r.y,o).push(t),r.x=r.x>>1,r.y=r.y>>1}},{key:"_isGridPointVisible",value:function(t){var i=this.m.minY<=t.y&&t.y<=this.m.maxY,n=this.m.minX,e=n<=t.x&&t.x<=this.m.maxX;if(!e&&n<0){var r=this.g[this.m.z];e=n+r<=t.x&&t.x<=r-1}return i&&e}},{key:"_onMarkerMoved",value:function(t,i,n){for(var e=this.s,r=!1,o=this.T(i,e,new google.maps.Size(0,0)),u=this.T(n,e,new google.maps.Size(0,0));e>=0&&(o.x!==u.x||o.y!==u.y);){var s=this.P(o.x,o.y,e);s&&this.F(s,t)&&this.A(u.x,u.y,e).push(t),e===this.u&&(this.G(o)?this.G(u)||(this.S(t),r=!0):this.G(u)&&(this.B(t),r=!0)),o.x=o.x>>1,o.y=o.y>>1,u.x=u.x>>1,u.y=u.y>>1,--e}r&&this.N()}},{key:"removeMarker",value:function(t){for(var i=this.s,n=!1,e=t.getPosition(),r=this.T(e,i,new google.maps.Size(0,0));i>=0;){var o=this.P(r.x,r.y,i);o&&this.F(o,t),i===this.u&&this.G(r)&&(this.S(t),n=!0),r.x=r.x>>1,r.y=r.y>>1,--i}n&&this.N(),this.k[t.get("__minZoom")]--}},{key:"addMarkers",value:function(t,i,n){n=this.D(n);for(var e=t.length-1;e>=0;e--)this.R(t[e],i,n);this.k[i]+=t.length}},{key:"_getOptmaxZoom",value:function(t){return t||this.s}},{key:"getMarkerCount",value:function(t){for(var i=0,n=0;n<=t;n++)i+=this.k[n];return i}},{key:"getMarker",value:function(t,i,n){var e=new google.maps.LatLng(t,i),r=this.T(e,n,new google.maps.Size(0,0)),o=new google.maps.Marker({position:e}),u=this.P(r.x,r.y,n);if(void 0!==u)for(var s=0;s<u.length;s++)t===u[s].getPosition().lat()&&i===u[s].getPosition().lng()&&(o=u[s]);return o}},{key:"addMarker",value:function(t,i,n){n=this.D(n),this.R(t,i,n);var e=this.T(t.getPosition(),this.u,new google.maps.Size(0,0));this.G(e)&&i<=this.m.z&&this.m.z<=n&&(this.B(t),this.N()),this.k[i]++}},{key:"_getGridCellCreate",value:function(t,i,n){return t<0&&(t+=this.g[n]),this.p[n]||(this.p[n]=[]),this.p[n][t]||(this.p[n][t]=[]),this.p[n][t][i]||(this.p[n][t][i]=[]),this.p[n][t][i]}},{key:"_getGridCellNoCreate",value:function(t,i,n){return t<0&&(t+=this.g[n]),this.p[n]&&this.p[n][t]&&this.p[n][t][i]?this.p[n][t][i]:null}},{key:"_getGridBounds",value:function(t,i,n,e){i=Math.min(i,this.s);var r=t.getSouthWest(),o=t.getNorthEast(),u=this.T(r,i,n),s=this.T(o,i,e),h=this.g[i];(o.lng()<r.lng()||s.x<u.x)&&(u.x-=h),s.x-u.x+1>=h&&(u.x=0,s.x=h-1);var f=new ti([u,s],i);return f.z=i,f}},{key:"_getMapGridBounds",value:function(){return this.Z(this.o.getBounds(),this.u,this.l,this.v)}},{key:"_onMapMoveEnd",value:function(){window.setTimeout(this.q.bind(this),0)}},{key:"visible",value:function(){return!!this.shown}},{key:"isHidden",value:function(){return!this.shown}},{key:"show",value:function(){this.shown=!0,this.refresh()}},{key:"hide",value:function(){this.shown=!1,this.refresh()}},{key:"toggle",value:function(){this.shown=!this.shown,this.refresh()}},{key:"refresh",value:function(){this.shownMarkers>0&&this.O(this.m,this.S.bind(this)),this.show&&this.O(this.m,this.B.bind(this)),this.N()}},{key:"_updateMarkers",value:function(){this.u=this.o.getZoom();var t=this.j();t.equals(this.m)&&t.z===this.m.z||(t.z!==this.m.z?(this.O(this.m,this.S.bind(this)),this.show&&this.O(t,this.B.bind(this))):(this.I(this.m,t,this.L.bind(this)),this.show&&this.I(t,this.m,this.H.bind(this))),this.m=t,this.N())}},{key:"_notifyListeners",value:function(){google.maps.event.trigger(this,"changed",this.m,this.shownMarkers)}},{key:"_processAll",value:function(t,i){for(var n=t.minX;n<=t.maxX;n++)for(var e=t.minY;e<=t.maxY;e++)this.K(n,e,t.z,i)}},{key:"_processCellMarkers",value:function(t,i,n,e){var r=this.P(t,i,n);if(r)for(var o=r.length-1;o>=0;o--)e(r[o])}},{key:"_removeCellMarkers",value:function(t,i,n){this.K(t,i,n,this.S.bind(this))}},{key:"_addCellMarkers",value:function(t,i,n){this.K(t,i,n,this.B.bind(this))}},{key:"_rectangleDiff",value:function(t,i,n){this.V(t,i,(function(i,e){n(i,e,t.z)}))}},{key:"_rectangleDiffCoords",value:function(t,i,n){var e,r,o=t.minX,u=t.minY,s=t.maxX,h=t.maxY,f=i.minX,a=i.minY,c=i.maxX,l=i.maxY;for(e=o;e<=s;e++){for(r=u;r<=h&&r<a;r++)n(e,r);for(r=Math.max(l+1,u);r<=h;r++)n(e,r)}for(r=Math.max(u,a);r<=Math.min(h,l);r++){for(e=Math.min(s+1,f)-1;e>=o;e--)n(e,r);for(e=Math.max(o,c+1);e<=s;e++)n(e,r)}}},{key:"_removeMarkerFromCell",value:function(t,i){for(var n=0,e=0;e<t.length;++e)t[e]===i&&(t.splice(e--,1),n++);return n}}]),t}();t.MarkerManager=ii,Object.defineProperty(t,"J",{value:!0})}));
//# sourceMappingURL=markermanager.umd.js.map
