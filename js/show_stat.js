!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}({1:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f}));var s=n(5),r=n.n(s);const i={"0000000001":"MISSION/intro/step-1/done","0000000002":"MISSION/receive-package/step-1/done","0000000003":"RESPONSE/player_occupation/學生","0000000004":"RESPONSE/player_occupation/工程師","0000000005":"RESPONSE/player_occupation/律師","0000000006":"RESPONSE/player_occupation/健身教練","0000000007":"RESPONSE/player_occupation/中年職業婦女","0000000008":"RESPONSE/player_occupation/記者","0000000009":"MISSION/receive-package/step-2/done","0000000010":"MISSION/student-scene-intro/step-1/done","0000000011":"MISSION/student-scene-intro/step-2/done","0000000012":"MISSION/student-scene-intro/step-3/done","0000000013":"RESPONSE/student-intro-choice/passive","0000000014":"RESPONSE/student-intro-choice/proactive","0000000015":"MISSION/student-scene-academic-affairs-office/step-1/done","0000000016":"RESPONSE/student_asked_followup_question/false","0000000017":"RESPONSE/student_asked_followup_question/true","0000000018":"MISSION/student-scene-department-office/step-1/done","0000000019":"MISSION/student-scene-home-2/step-1/done","0000000020":"MISSION/student-scene-home-2/step-2/done","0000000021":"MISSION/student-scene-home-2/step-3/done","0000000022":"RESPONSE/student-gene-interested-in/gene","0000000023":"RESPONSE/student-gene-interested-in/system","0000000024":"MISSION/student-scene-home/step-1/done","0000000025":"MISSION/student-scene-home/step-2/done","0000000026":"MISSION/student-scene-home/step-3/done","0000000027":"MISSION/student-scene-home/workshop-ready/done","0000000028":"MISSION/digit-gene-workshop/step-1/done","0000000029":"MISSION/digit-gene-workshop/step-2/done","0000000030":"MISSION/digit-gene-workshop/step-3/done","0000000031":"MISSION/digit-gene-workshop/step-4/done","0000000032":"MISSION/intro+start/step-1/done","0000000033":"MISSION/doctor-enters-ward/step-1/done","0000000034":"RESPONSE/player_age/15~24","0000000035":"RESPONSE/player_age/25~44","0000000036":"RESPONSE/player_age/45~54","0000000037":"RESPONSE/player_age/65UP","0000000038":"MISSION/15~24/step-1/done","0000000039":"RESPONSE/player_problem/疫情","0000000040":"RESPONSE/player_problem/數位身分證","0000000041":"RESPONSE/player_problem/基因等級","0000000042":"MISSION/gene-level/step-1/done","0000000043":"MISSION/Out-of-the-ward/step-1/done","0000000044":"MISSION/street/step-1/done","0000000045":"MISSION/street/last/done","0000000046":"MISSION/wistoria/step-1/done","0000000047":"MISSION/wistoria/last/done","0000000048":"MISSION/ending-vo/step-1/done","0000000049":"MISSION/doctor-enters-ward/step-2/done","0000000050":"MISSION/ending-vo/step-2/done","0000000051":"MISSION/Out-of-the-ward/step-2/done","0000000052":"MISSION/Out-of-the-ward/step-3/done","0000000053":"RESPONSE/robot-1/沒碳足跡","0000000054":"RESPONSE/robot-1/消耗碳足跡","0000000055":"MISSION/Robot-dialogue-1/step-1/done","0000000056":"RESPONSE/robot-2/法令","0000000057":"RESPONSE/robot-2/消耗碳足跡","0000000058":"MISSION/Robot-dialogue-2/step-1/done","0000000059":"RESPONSE/robot-3/怎麼不早說","0000000060":"RESPONSE/robot-3/怎麼不說","0000000061":"MISSION/Robot-dialogue-3/step-1/done","0000000062":"MISSION/Wistoria-1/step-1/done"},o={};for(const e in i)o[i[e]]=e;function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}!function(e){const t=[];e.fn("setAndNotify",(function(e,t){if(this.set(e,t),this.callbacks){if(a(this.callbacks,e))for(const t of this.callbacks[e])t.call(this,e);if(a(this.callbacks,"*"))for(const t of this.callbacks["*"])t.call(this,e)}})),e.fn("notify",(function(){for(const e in t)if(a(this.callbacks,e))for(const t of this.callbacks[e])t.call(this)})),e.fn("listen",(function(e,t){void 0===this.callbacks&&(this.callbacks={}),void 0===this.callbacks[e]&&(this.callbacks[e]=[]),this.callbacks[e].push(t)}))}(r.a._);const c="https://pingtung-hao-305236.middle2.me/api",u=r.a.namespace("REMOTE_STORE_CACHE");const h=r.a.namespace("DIALOG_ANSWER"),f=new class{constructor(){this._tokenChecked=!1}get token(){return u.get("token")}async _register(){const e=await fetch(c+"/register",{method:"POST"}),t=await e.json();if(t.token){u.set("token",t.token);const e=(new Date).getTime()+864e5;u.set("expire",e),this._tokenChecked=!0}}async _ensureToken(){if(!u.has("token"))return await this._register();if((new Date).getTime()>u.get("expire",0))return await this._register();if(!this._tokenChecked){const e=this.token,t=await fetch(`${c}/check_token?token=${e}`,{method:"GET"});if(!0!==(await t.json()).ok)return await this._register();this._tokenChecked=!0}}async _inc(e){await this._ensureToken(),console.log("increasing key: "+e);const t=`${c}/inc?token=${this.token}&key=${e}`,n=await fetch(t,{method:"POST"}),s=await n.json();return console.log(`increased key: ${e} -> ${s.value}, data: `,s),s.value}async _getc(e){await this._ensureToken();const t=`${c}/getc?token=${this.token}&key=${e}`,n=await fetch(t,{method:"GET"});return(await n.json()).value}increase(e){return e=o[e],this._inc(e)}getCount(e){return e=o[e],this._getc(e)}async getAllCount(){const e={};for(const t in i){const n=i[t],s=await this.getCount(n);e[n]=s}return e}}},5:function(e,t,n){var s,r,i,o;s=this,r=this&&this.define,i={version:"2.12.0",areas:{},apis:{},inherit:function(e,t){for(var n in e)t.hasOwnProperty(n)||Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n));return t},stringify:function(e){return void 0===e||"function"==typeof e?e+"":JSON.stringify(e)},parse:function(e,t){try{return JSON.parse(e,t||i.revive)}catch(t){return e}},fn:function(e,t){for(var n in i.storeAPI[e]=t,i.apis)i.apis[n][e]=t},get:function(e,t){return e.getItem(t)},set:function(e,t,n){e.setItem(t,n)},remove:function(e,t){e.removeItem(t)},key:function(e,t){return e.key(t)},length:function(e){return e.length},clear:function(e){e.clear()},Store:function(e,t,n){var s=i.inherit(i.storeAPI,(function(e,t,n){return 0===arguments.length?s.getAll():"function"==typeof t?s.transact(e,t,n):void 0!==t?s.set(e,t,n):"string"==typeof e||"number"==typeof e?s.get(e):"function"==typeof e?s.each(e):e?s.setAll(e,t):s.clear()}));s._id=e;try{t.setItem("__store2_test","ok"),s._area=t,t.removeItem("__store2_test")}catch(e){s._area=i.storage("fake")}return s._ns=n||"",i.areas[e]||(i.areas[e]=s._area),i.apis[s._ns+s._id]||(i.apis[s._ns+s._id]=s),s},storeAPI:{area:function(e,t){var n=this[e];return n&&n.area||(n=i.Store(e,t,this._ns),this[e]||(this[e]=n)),n},namespace:function(e,t){if(!e)return this._ns?this._ns.substring(0,this._ns.length-1):"";var n=e,s=this[n];if(!(s&&s.namespace||(s=i.Store(this._id,this._area,this._ns+n+"."),this[n]||(this[n]=s),t)))for(var r in i.areas)s.area(r,i.areas[r]);return s},isFake:function(){return"fake"===this._area.name},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(e){return this._area.has?this._area.has(this._in(e)):!!(this._in(e)in this._area)},size:function(){return this.keys().length},each:function(e,t){for(var n=0,s=i.length(this._area);n<s;n++){var r=this._out(i.key(this._area,n));if(void 0!==r&&!1===e.call(this,r,this.get(r),t))break;s>i.length(this._area)&&(s--,n--)}return t||this},keys:function(e){return this.each((function(e,t,n){n.push(e)}),e||[])},get:function(e,t){var n,s=i.get(this._area,this._in(e));return"function"==typeof t&&(n=t,t=null),null!==s?i.parse(s,n):null!=t?t:s},getAll:function(e){return this.each((function(e,t,n){n[e]=t}),e||{})},transact:function(e,t,n){var s=this.get(e,n),r=t(s);return this.set(e,void 0===r?s:r),this},set:function(e,t,n){var s=this.get(e);return null!=s&&!1===n?t:i.set(this._area,this._in(e),i.stringify(t),n)||s},setAll:function(e,t){var n,s;for(var r in e)s=e[r],this.set(r,s,t)!==s&&(n=!0);return n},add:function(e,t){var n=this.get(e);if(n instanceof Array)t=n.concat(t);else if(null!==n){var s=typeof n;if(s===typeof t&&"object"===s){for(var r in t)n[r]=t[r];t=n}else t=n+t}return i.set(this._area,this._in(e),i.stringify(t)),t},remove:function(e,t){var n=this.get(e,t);return i.remove(this._area,this._in(e)),n},clear:function(){return this._ns?this.each((function(e){i.remove(this._area,this._in(e))}),1):i.clear(this._area),this},clearAll:function(){var e=this._area;for(var t in i.areas)i.areas.hasOwnProperty(t)&&(this._area=i.areas[t],this.clear());return this._area=e,this},_in:function(e){return"string"!=typeof e&&(e=i.stringify(e)),this._ns?this._ns+e:e},_out:function(e){return this._ns?e&&0===e.indexOf(this._ns)?e.substring(this._ns.length):void 0:e}},storage:function(e){return i.inherit(i.storageAPI,{items:{},name:e})},storageAPI:{length:0,has:function(e){return this.items.hasOwnProperty(e)},key:function(e){var t=0;for(var n in this.items)if(this.has(n)&&e===t++)return n},setItem:function(e,t){this.has(e)||this.length++,this.items[e]=t},removeItem:function(e){this.has(e)&&(delete this.items[e],this.length--)},getItem:function(e){return this.has(e)?this.items[e]:null},clear:function(){for(var e in this.items)this.removeItem(e)}}},(o=i.Store("local",function(){try{return localStorage}catch(e){}}())).local=o,o._=i,o.area("session",function(){try{return sessionStorage}catch(e){}}()),o.area("page",i.storage("page")),"function"==typeof r&&void 0!==r.amd?r("store2",[],(function(){return o})):e.exports?e.exports=o:(s.store&&(i.conflict=s.store),s.store=o)},9:function(e,t,n){"use strict";n.r(t),n(1).b.getAllCount().then(e=>{document.getElementById("loading").hidden=!0;const t=document.getElementById("stat-table");for(const n in e){const s=e[n],r=t.insertRow();r.insertCell().innerHTML=n,r.insertCell().innerHTML=s}})}});
//# sourceMappingURL=show_stat.js.map