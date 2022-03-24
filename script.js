/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={910:(e,a,t)=>{t.r(a),t.d(a,{Properties:()=>r,VariableDescriptor:()=>o,bootstrapExtra:()=>X,findLayerBoundaries:()=>m,findLayersBoundaries:()=>b,getLayersMap:()=>p,getVariables:()=>i,initDoors:()=>K,initPropertiesTemplates:()=>D,initVariableActionLayer:()=>Z,openConfig:()=>n});class r{constructor(e){this.properties=null!=e?e:[]}get(e){const a=this.properties.filter((a=>a.name===e)).map((e=>e.value));if(a.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==a.length)return a[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,a){const t=this.get(e);if(void 0!==t){if(typeof t!==a)throw new Error('Expected property "'+e+'" to have type "'+a+'"');return t}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,a){const t=this.get(e);if(void 0===t)throw new Error('Property "'+e+'" is missing');if(typeof t!==a)throw new Error('Expected property "'+e+'" to have type "'+a+'"');return t}getType(e){const a=this.properties.filter((a=>a.name===e)).map((e=>e.type));if(a.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==a.length)return a[0]}}const s="https://unpkg.com/@workadventure/scripting-api-extra@1.3.0/dist";class o{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new r(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}function n(e){const a=e?"#"+e.join():"";WA.nav.openCoWebSite(s+"/configuration.html"+a)}async function i(e,a){const t=await WA.room.getTiledMap(),r=new Map;return l(t.layers,r,e,a),r}function l(e,a,t,r){for(const s of e)if("objectgroup"===s.type){for(const e of s.objects)if("variable"===e.type){if(t&&s.name!==t)continue;if(r&&!r.includes(e.name))continue;a.set(e.name,new o(e))}}else"group"===s.type&&l(s.layers,a,t,r)}let c;async function p(){return void 0===c&&(c=async function(){return function(e){const a=new Map;return u(e.layers,"",a),a}(await WA.room.getTiledMap())}()),c}function u(e,a,t){for(const r of e)"group"===r.type?u(r.layers,a+r.name+"/",t):(r.name=a+r.name,t.set(r.name,r))}function m(e){let a=1/0,t=1/0,r=0,s=0;const o=e.data;if("string"==typeof o)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let n=0;n<e.height;n++)for(let i=0;i<e.width;i++)0!==o[i+n*e.width]&&(a=Math.min(a,i),s=Math.max(s,i),t=Math.min(t,n),r=Math.max(r,n));return{top:t,left:a,right:s+1,bottom:r+1}}function b(e){let a=1/0,t=1/0,r=0,s=0;for(const o of e){const e=m(o);e.left<a&&(a=e.left),e.top<t&&(t=e.top),e.right>s&&(s=e.right),e.bottom>r&&(r=e.bottom)}return{top:t,left:a,right:s,bottom:r}}var A=Object.prototype.toString,W=Array.isArray||function(e){return"[object Array]"===A.call(e)};function y(e){return"function"==typeof e}function v(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function h(e,a){return null!=e&&"object"==typeof e&&a in e}var f=RegExp.prototype.test,d=/\S/;var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},L=/\s*/,P=/\s+/,E=/\s*=/,w=/\s*\}/,k=/#|\^|\/|>|\{|&|=|!/;function N(e){this.string=e,this.tail=e,this.pos=0}function z(e,a){this.view=e,this.cache={".":this.view},this.parent=a}function x(){this.templateCache={_cache:{},set:function(e,a){this._cache[e]=a},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}N.prototype.eos=function(){return""===this.tail},N.prototype.scan=function(e){var a=this.tail.match(e);if(!a||0!==a.index)return"";var t=a[0];return this.tail=this.tail.substring(t.length),this.pos+=t.length,t},N.prototype.scanUntil=function(e){var a,t=this.tail.search(e);switch(t){case-1:a=this.tail,this.tail="";break;case 0:a="";break;default:a=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=a.length,a},z.prototype.push=function(e){return new z(e,this)},z.prototype.lookup=function(e){var a,t,r,s=this.cache;if(s.hasOwnProperty(e))a=s[e];else{for(var o,n,i,l=this,c=!1;l;){if(e.indexOf(".")>0)for(o=l.view,n=e.split("."),i=0;null!=o&&i<n.length;)i===n.length-1&&(c=h(o,n[i])||(t=o,r=n[i],null!=t&&"object"!=typeof t&&t.hasOwnProperty&&t.hasOwnProperty(r))),o=o[n[i++]];else o=l.view[e],c=h(l.view,e);if(c){a=o;break}l=l.parent}s[e]=a}return y(a)&&(a=a.call(this.view)),a},x.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(e,a){var t=this.templateCache,r=e+":"+(a||U.tags).join(":"),s=void 0!==t,o=s?t.get(r):void 0;return null==o&&(o=function(e,a){if(!e)return[];var t,r,s,o,n=!1,i=[],l=[],c=[],p=!1,u=!1,m="",b=0;function A(){if(p&&!u)for(;c.length;)delete l[c.pop()];else c=[];p=!1,u=!1}function y(e){if("string"==typeof e&&(e=e.split(P,2)),!W(e)||2!==e.length)throw new Error("Invalid tags: "+e);t=new RegExp(v(e[0])+"\\s*"),r=new RegExp("\\s*"+v(e[1])),s=new RegExp("\\s*"+v("}"+e[1]))}y(a||U.tags);for(var h,g,z,x,S,O,R=new N(e);!R.eos();){if(h=R.pos,z=R.scanUntil(t))for(var D=0,F=z.length;D<F;++D)o=x=z.charAt(D),function(e,a){return f.call(e,a)}(d,o)?(u=!0,n=!0,m+=" "):(c.push(l.length),m+=x),l.push(["text",x,h,h+1]),h+=1,"\n"===x&&(A(),m="",b=0,n=!1);if(!R.scan(t))break;if(p=!0,g=R.scan(k)||"name",R.scan(L),"="===g?(z=R.scanUntil(E),R.scan(E),R.scanUntil(r)):"{"===g?(z=R.scanUntil(s),R.scan(w),R.scanUntil(r),g="&"):z=R.scanUntil(r),!R.scan(r))throw new Error("Unclosed tag at "+R.pos);if(S=">"==g?[g,z,h,R.pos,m,b,n]:[g,z,h,R.pos],b++,l.push(S),"#"===g||"^"===g)i.push(S);else if("/"===g){if(!(O=i.pop()))throw new Error('Unopened section "'+z+'" at '+h);if(O[1]!==z)throw new Error('Unclosed section "'+O[1]+'" at '+h)}else"name"===g||"{"===g||"&"===g?u=!0:"="===g&&y(z)}if(A(),O=i.pop())throw new Error('Unclosed section "'+O[1]+'" at '+R.pos);return function(e){for(var a,t=[],r=t,s=[],o=0,n=e.length;o<n;++o)switch((a=e[o])[0]){case"#":case"^":r.push(a),s.push(a),r=a[4]=[];break;case"/":s.pop()[5]=a[2],r=s.length>0?s[s.length-1][4]:t;break;default:r.push(a)}return t}(function(e){for(var a,t,r=[],s=0,o=e.length;s<o;++s)(a=e[s])&&("text"===a[0]&&t&&"text"===t[0]?(t[1]+=a[1],t[3]=a[3]):(r.push(a),t=a));return r}(l))}(e,a),s&&t.set(r,o)),o},x.prototype.render=function(e,a,t,r){var s=this.getConfigTags(r),o=this.parse(e,s),n=a instanceof z?a:new z(a,void 0);return this.renderTokens(o,n,t,e,r)},x.prototype.renderTokens=function(e,a,t,r,s){for(var o,n,i,l="",c=0,p=e.length;c<p;++c)i=void 0,"#"===(n=(o=e[c])[0])?i=this.renderSection(o,a,t,r,s):"^"===n?i=this.renderInverted(o,a,t,r,s):">"===n?i=this.renderPartial(o,a,t,s):"&"===n?i=this.unescapedValue(o,a):"name"===n?i=this.escapedValue(o,a,s):"text"===n&&(i=this.rawValue(o)),void 0!==i&&(l+=i);return l},x.prototype.renderSection=function(e,a,t,r,s){var o=this,n="",i=a.lookup(e[1]);if(i){if(W(i))for(var l=0,c=i.length;l<c;++l)n+=this.renderTokens(e[4],a.push(i[l]),t,r,s);else if("object"==typeof i||"string"==typeof i||"number"==typeof i)n+=this.renderTokens(e[4],a.push(i),t,r,s);else if(y(i)){if("string"!=typeof r)throw new Error("Cannot use higher-order sections without the original template");null!=(i=i.call(a.view,r.slice(e[3],e[5]),(function(e){return o.render(e,a,t,s)})))&&(n+=i)}else n+=this.renderTokens(e[4],a,t,r,s);return n}},x.prototype.renderInverted=function(e,a,t,r,s){var o=a.lookup(e[1]);if(!o||W(o)&&0===o.length)return this.renderTokens(e[4],a,t,r,s)},x.prototype.indentPartial=function(e,a,t){for(var r=a.replace(/[^ \t]/g,""),s=e.split("\n"),o=0;o<s.length;o++)s[o].length&&(o>0||!t)&&(s[o]=r+s[o]);return s.join("\n")},x.prototype.renderPartial=function(e,a,t,r){if(t){var s=this.getConfigTags(r),o=y(t)?t(e[1]):t[e[1]];if(null!=o){var n=e[6],i=e[5],l=e[4],c=o;0==i&&l&&(c=this.indentPartial(o,l,n));var p=this.parse(c,s);return this.renderTokens(p,a,t,c,r)}}},x.prototype.unescapedValue=function(e,a){var t=a.lookup(e[1]);if(null!=t)return t},x.prototype.escapedValue=function(e,a,t){var r=this.getConfigEscape(t)||U.escape,s=a.lookup(e[1]);if(null!=s)return"number"==typeof s&&r===U.escape?String(s):r(s)},x.prototype.rawValue=function(e){return e[1]},x.prototype.getConfigTags=function(e){return W(e)?e:e&&"object"==typeof e?e.tags:void 0},x.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!W(e)?e.escape:void 0};var U={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){S.templateCache=e},get templateCache(){return S.templateCache}},S=new x;U.clearCache=function(){return S.clearCache()},U.parse=function(e,a){return S.parse(e,a)},U.render=function(e,a,t,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(W(s=e)?"array":typeof s)+'" was given as the first argument for mustache#render(template, view, partials)');var s;return S.render(e,a,t,r)},U.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return g[e]}))},U.Scanner=N,U.Context=z,U.Writer=x;const O=U;class R{constructor(e,a){this.template=e,this.state=a,this.ast=O.parse(e)}getValue(){return void 0===this.value&&(this.value=O.render(this.template,this.state)),this.value}onChange(e){const a=[];for(const t of this.getUsedVariables().values())a.push(this.state.onVariableChange(t).subscribe((()=>{const a=O.render(this.template,this.state);a!==this.value&&(this.value=a,e(this.value))})));return{unsubscribe:()=>{for(const e of a)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,a){for(const t of e){const e=t[0],r=t[1],s=t[4];["name","&","#","^"].includes(e)&&a.add(r),void 0!==s&&"string"!=typeof s&&this.recursiveGetUsedVariables(s,a)}}}async function D(){var e;const a=await p();for(const[t,r]of a.entries()){const a=null!==(e=r.properties)&&void 0!==e?e:[];for(const e of a){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const a=new R(e.value,WA.state);if(a.isPureString())continue;const r=a.getValue();F(t,e.name,r),a.onChange((a=>{F(t,e.name,a)}))}}}function F(e,a,t){WA.room.setProperty(e,a,t),"visible"===a&&(t?WA.room.showLayer(e):WA.room.hideLayer(e))}let B,C,T=0,M=0;function V(e){if(WA.state[e.name]){let a=e.properties.mustGetString("openLayer");for(const e of a.split("\n"))WA.room.showLayer(e);a=e.properties.mustGetString("closeLayer");for(const e of a.split("\n"))WA.room.hideLayer(e)}else{let a=e.properties.mustGetString("openLayer");for(const e of a.split("\n"))WA.room.hideLayer(e);a=e.properties.mustGetString("closeLayer");for(const e of a.split("\n"))WA.room.showLayer(e)}}function j(e){return e.map((e=>B.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function G(e){const a=b(j(e)),t=32*((a.right-a.left)/2+a.left),r=32*((a.bottom-a.top)/2+a.top);return Math.sqrt(Math.pow(T-t,2)+Math.pow(M-r,2))}function I(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const a=e.properties.getString("openSound"),t=e.properties.getNumber("soundRadius");let r=1;if(t){const a=G(e.properties.mustGetString("openLayer").split("\n"));if(a>t)return;r=1-a/t}a&&WA.sound.loadSound(a).play({volume:r})}(e):function(e){const a=e.properties.getString("closeSound"),t=e.properties.getNumber("soundRadius");let r=1;if(t){const a=G(e.properties.mustGetString("closeLayer").split("\n"));if(a>t)return;r=1-a/t}a&&WA.sound.loadSound(a).play({volume:r})}(e),V(e)})),V(e)}function _(e,a,t,r){const s=e.name;let o,n,i=!1;const l=t.getString("tag");let c=!0;l&&!WA.player.tags.includes(l)&&(c=!1);const p=!!l;function u(){var e;o&&o.remove(),o=WA.ui.displayActionMessage({message:null!==(e=t.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[a.name]=!1,m()}})}function m(){var e;o&&o.remove(),o=WA.ui.displayActionMessage({message:null!==(e=t.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[a.name]=!0,u()}})}function A(){n&&(WA.room.website.delete(n.name),n=void 0)}WA.room.onEnterLayer(s).subscribe((()=>{i=!0,t.getBoolean("autoOpen")&&c?WA.state[a.name]=!0:WA.state[a.name]||(!p||c)&&p||!t.getString("code")&&!t.getString("codeVariable")?c&&(WA.state[a.name]?u():m()):function(e){const t=b(j(a.properties.mustGetString("closeLayer").split("\n")));n=WA.room.website.create({name:"doorKeypad"+e,url:r+"/keypad.html#"+encodeURIComponent(e),position:{x:32*t.right,y:32*t.top,width:96,height:128},allowApi:!0})}(s)})),WA.room.onLeaveLayer(s).subscribe((()=>{i=!1,t.getBoolean("autoClose")&&(WA.state[a.name]=!1),o&&o.remove(),A()})),WA.state.onVariableChange(a.name).subscribe((()=>{i&&(t.getBoolean("autoClose")||!0!==WA.state[a.name]||u(),n&&!0===WA.state[a.name]&&A(),t.getBoolean("autoOpen")||!1!==WA.state[a.name]||m())}))}function q(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const a=e.properties.mustGetString("bellSound"),t=e.properties.getNumber("soundRadius");let r=1;if(t){const a=Math.sqrt(Math.pow(e.x-T,2)+Math.pow(e.y-M,2));if(a>t)return;r=1-a/t}WA.sound.loadSound(a).play({volume:r})}(e)}))}function $(e,a,t){let r;const s=a.getString("bellPopup");WA.room.onEnterLayer(t).subscribe((()=>{var t;s?r=WA.ui.openPopup(s,"",[{label:null!==(t=a.getString("bellButtonText"))&&void 0!==t?t:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveLayer(t).subscribe((()=>{r&&(r.close(),r=void 0)}))}async function K(e){e=null!=e?e:s;const a=await i();B=await p();for(const e of a.values())e.properties.get("door")&&I(e),e.properties.get("bell")&&q(e);for(const t of B.values()){const s=new r(t.properties),o=s.getString("doorVariable");if(o&&"tilelayer"===t.type){const r=a.get(o);if(void 0===r)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');_(t,r,s,e)}const n=s.getString("bellVariable");n&&$(n,s,t.name)}WA.player.onPlayerMove((e=>{T=e.x,M=e.y}))}function Z(e,a){const t=e.getString("bindVariable");t&&function(e,a,t,r,s,o){o&&!WA.player.tags.includes(o)||(void 0!==t&&WA.room.onEnterLayer(a).subscribe((()=>{s||(WA.state[e]=t)})),void 0!==r&&WA.room.onLeaveLayer(a).subscribe((()=>{WA.state[e]=r})))}(t,a,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}function H(e,a,t){let r;const s=t.getString("openConfigAdminTag");let o=!0;function i(){WA.nav.closeCoWebSite()}s&&!WA.player.tags.includes(s)&&(o=!1),WA.room.onEnterLayer(a).subscribe((()=>{const a=t.getString("openConfigTrigger");var s;o&&(a&&"onaction"===a?(r&&r.remove(),r=WA.ui.displayActionMessage({message:null!==(s=t.getString("openConfigTriggerMessage"))&&void 0!==s?s:"Press SPACE or touch here to configure",callback:()=>n(e)})):n(e))})),WA.room.onLeaveLayer(a).subscribe((()=>{r?(r.remove(),i()):i()}))}const J=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],Q=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];function X(){return WA.onInit().then((()=>{K().catch((e=>console.error(e))),async function(){const e=await p();for(const a of e.values())Z(new r(a.properties),a.name)}().catch((e=>console.error(e))),async function(e){const a=await WA.room.getTiledMap();e=null!=e?e:s,C=await p();const t=a.layers.find((e=>"configuration"===e.name));if(t){const a=new r(t.properties).getString("tag");a&&!WA.player.tags.includes(a)||WA.ui.registerMenuCommand("Configure the room",(()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)}));for(const e of C.values()){const a=new r(e.properties),t=a.getString("openConfig");t&&"tilelayer"===e.type&&H(t.split(","),e.name,a)}}}().catch((e=>console.error(e))),D().catch((e=>console.error(e))),async function(){var e,a;const t=WA.player.state.tutorialDone,r=/Mobi|Android/i.test(navigator.userAgent),o=await WA.room.getTiledMap(),n=null!==(a=(await(null===(e=o.properties)||void 0===e?void 0:e.find((e=>"tutorial"===e.name)))).value)&&void 0!==a&&a;if(!t&&n){!function(e){let a={allow:"",name:"tutorial",url:s+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};e&&(a={...a,position:{x:32,y:-225,height:390,width:250},scale:1}),WA.room.website.create(a)}(r);let e,a=await WA.player.getPosition();const t=await WA.room.website.get("tutorial"),o=()=>{const r=a.x+t.x+t.width>e.x+e.width,s=a.x+t.x<e.x,o=a.y+t.y+t.height>e.y+e.height,n=a.y+t.y<e.y;r?t.x=-t.width-24:s&&(t.x=24),o?t.y=-t.height:n&&(t.y=16)},n=e=>{t.width=e.width,t.height=e.height,t.scale=e.scale},i=e=>{const a=(r?J:Q).filter((a=>{if(a.lowerBound&&a.uppperBound)return a.lowerBound<e&&e<=a.uppperBound;if(a.lowerBound&&!a.uppperBound)return a.lowerBound<e;if(!a.lowerBound&&a.uppperBound)return e<=a.uppperBound;throw new Error(`Zoom level of: ${e} could not fit in any of the desktopConfig's ranges.`)}));n(a[0].config)},l=()=>{if(void 0===e)return;const a=e.zoom;i(a),o()};WA.player.onPlayerMove((e=>{a=e,l()})),WA.camera.onCameraUpdate().subscribe((a=>{e=a,l()})),WA.player.state.tutorialDone=!0}}().catch((e=>console.error(e)))})).catch((e=>console.error(e)))}}},a={};function t(r){var s=a[r];if(void 0!==s)return s.exports;var o=a[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=t(910);let a;function r(e,a=!0){a?WA.nav.openCoWebSite(e):WA.nav.openTab(e),s()}function s(){void 0!==a&&(a.close(),a=void 0)}console.log("Script started successfully"),WA.onInit().then((()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("zones/metaverse/1").subscribe((()=>{const e=WA.state.metaverse1Description,t=WA.state.metaverse1URL,o=WA.state.metaverse1Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("metaverse1Popup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/1").subscribe(s),WA.room.onEnterLayer("zones/metaverse/2").subscribe((()=>{const e=WA.state.metaverse2Description,t=WA.state.metaverse2URL,o=WA.state.metaverse2Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("metaverse2Popup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/2").subscribe(s),WA.room.onEnterLayer("zones/metaverse/3").subscribe((()=>{const e=WA.state.metaverse3Description,t=WA.state.metaverse3URL,o=WA.state.metaverse3Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("metaverse3Popup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/3").subscribe(s),WA.room.onEnterLayer("zones/metaverse/4").subscribe((()=>{const e=WA.state.metaverse4Description,t=WA.state.metaverse4URL,o=WA.state.metaverse4Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("metaverse4Popup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/4").subscribe(s),WA.room.onEnterLayer("zones/metaverse/5").subscribe((()=>{const e=WA.state.metaverse5Description,t=WA.state.metaverse5URL,o=WA.state.metaverse5Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("metaverse5Popup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/5").subscribe(s),WA.room.onEnterLayer("zones/metaverse/6").subscribe((()=>{const e=WA.state.metaverse6Description,t=WA.state.metaverse6URL,o=WA.state.metaverse6Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("metaverse6Popup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/6").subscribe(s),WA.room.onEnterLayer("zones/metaverse/playlist").subscribe((()=>{const e=WA.state.metaversePlaylistDescription,t=WA.state.metaversePlaylistURL,o=WA.state.metaversePlaylistEmbed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("metaversePlaylistPopup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/playlist").subscribe(s),WA.room.onEnterLayer("zones/videos/playlist").subscribe((()=>{const e=WA.state.videosDescription,t=WA.state.videosURL,o=WA.state.videosEmbed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("videosPopup",e,n)})),WA.room.onLeaveLayer("zones/videos/playlist").subscribe(s),WA.room.onEnterLayer("zones/patrimoine/1").subscribe((()=>{const e=WA.state.patrimoine1Description,t=WA.state.patrimoine1URL,o=WA.state.patrimoine1Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("patrimoine1Popup",e,n)})),WA.room.onLeaveLayer("zones/patrimoine/1").subscribe(s),WA.room.onEnterLayer("zones/patrimoine/2").subscribe((()=>{const e=WA.state.patrimoine2Description,t=WA.state.patrimoine2URL,o=WA.state.patrimoine2Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("patrimoine2Popup",e,n)})),WA.room.onLeaveLayer("zones/patrimoine/2").subscribe(s),WA.room.onEnterLayer("zones/patrimoine/3").subscribe((()=>{const e=WA.state.patrimoine3Description,t=WA.state.patrimoine3URL,o=WA.state.patrimoine3Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("patrimoine3Popup",e,n)})),WA.room.onLeaveLayer("zones/patrimoine/3").subscribe(s),WA.room.onEnterLayer("zones/patrimoine/4").subscribe((()=>{const e=WA.state.patrimoine4Description,t=WA.state.patrimoine4URL,o=WA.state.patrimoine4Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("patrimoine4Popup",e,n)})),WA.room.onLeaveLayer("zones/patrimoine/4").subscribe(s),WA.room.onEnterLayer("zones/patrimoine/5").subscribe((()=>{const e=WA.state.patrimoine5Description,t=WA.state.patrimoine5URL,o=WA.state.patrimoine5Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("patrimoine5Popup",e,n)})),WA.room.onLeaveLayer("zones/patrimoine/5").subscribe(s),WA.room.onEnterLayer("zones/patrimoine/6").subscribe((()=>{const e=WA.state.patrimoine6Description,t=WA.state.patrimoine6URL,o=WA.state.patrimoine6Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("patrimoine6Popup",e,n)})),WA.room.onLeaveLayer("zones/patrimoine/6").subscribe(s),WA.room.onEnterLayer("zones/patrimoine/playlist").subscribe((()=>{const e=WA.state.patrimoinePlaylistDescription,t=WA.state.patrimoinePlaylistURL,o=WA.state.patrimoinePlaylistEmbed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("patrimoinePlaylistPopup",e,n)})),WA.room.onLeaveLayer("zones/patrimoine/playlist").subscribe(s),WA.room.onEnterLayer("zones/francemeta/1").subscribe((()=>{const e=WA.state.francemeta1Description,t=WA.state.francemeta1URL,o=WA.state.francemeta1Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("francemeta1Popup",e,n)})),WA.room.onLeaveLayer("zones/francemeta/1").subscribe(s),WA.room.onEnterLayer("zones/francemeta/2").subscribe((()=>{const e=WA.state.francemeta2Description,t=WA.state.francemeta2URL,o=WA.state.francemeta2Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("francemeta2Popup",e,n)})),WA.room.onLeaveLayer("zones/francemeta/2").subscribe(s),WA.room.onEnterLayer("zones/francemeta/3").subscribe((()=>{const e=WA.state.francemeta3Description,t=WA.state.francemeta3URL,o=WA.state.francemeta3Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("francemeta3Popup",e,n)})),WA.room.onLeaveLayer("zones/francemeta/3").subscribe(s),WA.room.onEnterLayer("zones/francemeta/4").subscribe((()=>{const e=WA.state.francemeta4Description,t=WA.state.francemeta4URL,o=WA.state.francemeta4Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("francemeta4Popup",e,n)})),WA.room.onLeaveLayer("zones/francemeta/4").subscribe(s),WA.room.onEnterLayer("zones/francemeta/5").subscribe((()=>{const e=WA.state.francemeta5Description,t=WA.state.francemeta5URL,o=WA.state.francemeta5Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("francemeta5Popup",e,n)})),WA.room.onLeaveLayer("zones/francemeta/5").subscribe(s),WA.room.onEnterLayer("zones/francemeta/6").subscribe((()=>{const e=WA.state.francemeta6Description,t=WA.state.francemeta6URL,o=WA.state.francemeta6Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("francemeta6Popup",e,n)})),WA.room.onLeaveLayer("zones/francemeta/6").subscribe(s),WA.room.onEnterLayer("zones/francemeta/playlist").subscribe((()=>{const e=WA.state.francemetaPlaylistDescription,t=WA.state.francemetaPlaylistURL,o=WA.state.francemetaPlaylistEmbed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("francemetaPlaylistPopup",e,n)})),WA.room.onLeaveLayer("zones/francemeta/playlist").subscribe(s),WA.room.onEnterLayer("zones/vip/1").subscribe((()=>{const e=WA.state.vip1Description,t=WA.state.vip1URL,o=WA.state.vip1Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vip1Popup",e,n)})),WA.room.onLeaveLayer("zones/vip/1").subscribe(s),WA.room.onEnterLayer("zones/vip/2").subscribe((()=>{const e=WA.state.vip2Description,t=WA.state.vip2URL,o=WA.state.vip2Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vip2Popup",e,n)})),WA.room.onLeaveLayer("zones/vip/2").subscribe(s),WA.room.onEnterLayer("zones/vip/3").subscribe((()=>{const e=WA.state.vip3Description,t=WA.state.vip3URL,o=WA.state.vip3Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vip3Popup",e,n)})),WA.room.onLeaveLayer("zones/vip/3").subscribe(s),WA.room.onEnterLayer("zones/vip/4").subscribe((()=>{const e=WA.state.vip4Description,t=WA.state.vip4URL,o=WA.state.vip4Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vip4Popup",e,n)})),WA.room.onLeaveLayer("zones/vip/4").subscribe(s),WA.room.onEnterLayer("zones/vip/5").subscribe((()=>{const e=WA.state.vip5Description,t=WA.state.vip5URL,o=WA.state.vip5Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vip5Popup",e,n)})),WA.room.onLeaveLayer("zones/vip/5").subscribe(s),WA.room.onEnterLayer("zones/vip/6").subscribe((()=>{const e=WA.state.vip6Description,t=WA.state.vip6URL,o=WA.state.vip6Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vip6Popup",e,n)})),WA.room.onLeaveLayer("zones/vip/6").subscribe(s),WA.room.onEnterLayer("zones/vip/playlist").subscribe((()=>{const e=WA.state.vipPlaylistDescription,t=WA.state.vipPlaylistURL,o=WA.state.vipPlaylistEmbed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vipPlaylistPopup",e,n)})),WA.room.onLeaveLayer("zones/vip/playlist").subscribe(s),WA.room.onEnterLayer("zones/luxe/1").subscribe((()=>{const e=WA.state.luxe1Description,t=WA.state.luxe1URL,o=WA.state.luxe1Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("luxe1Popup",e,n)})),WA.room.onLeaveLayer("zones/luxe/1").subscribe(s),WA.room.onEnterLayer("zones/luxe/2").subscribe((()=>{const e=WA.state.luxe2Description,t=WA.state.luxe2URL,o=WA.state.luxe2Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("luxe2Popup",e,n)})),WA.room.onLeaveLayer("zones/luxe/2").subscribe(s),WA.room.onEnterLayer("zones/luxe/3").subscribe((()=>{const e=WA.state.luxe3Description,t=WA.state.luxe3URL,o=WA.state.luxe3Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("luxe3Popup",e,n)})),WA.room.onLeaveLayer("zones/luxe/3").subscribe(s),WA.room.onEnterLayer("zones/luxe/4").subscribe((()=>{const e=WA.state.luxe4Description,t=WA.state.luxe4URL,o=WA.state.luxe4Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("luxe4Popup",e,n)})),WA.room.onLeaveLayer("zones/luxe/4").subscribe(s),WA.room.onEnterLayer("zones/luxe/5").subscribe((()=>{const e=WA.state.luxe5Description,t=WA.state.luxe5URL,o=WA.state.luxe5Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("luxe5Popup",e,n)})),WA.room.onLeaveLayer("zones/luxe/5").subscribe(s),WA.room.onEnterLayer("zones/luxe/6").subscribe((()=>{const e=WA.state.luxe6Description,t=WA.state.luxe6URL,o=WA.state.luxe6Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("luxe6Popup",e,n)})),WA.room.onLeaveLayer("zones/luxe/6").subscribe(s),WA.room.onEnterLayer("zones/luxe/playlist").subscribe((()=>{const e=WA.state.luxePlaylistDescription,t=WA.state.luxePlaylistURL,o=WA.state.luxePlaylistEmbed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("luxePlaylistPopup",e,n)})),WA.room.onLeaveLayer("zones/luxe/playlist").subscribe(s),WA.room.onEnterLayer("zones/assurance/1").subscribe((()=>{const e=WA.state.assurance1Description,t=WA.state.assurance1URL,o=WA.state.assurance1Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("assurance1Popup",e,n)})),WA.room.onLeaveLayer("zones/assurance/1").subscribe(s),WA.room.onEnterLayer("zones/assurance/2").subscribe((()=>{const e=WA.state.assurance2Description,t=WA.state.assurance2URL,o=WA.state.assurance2Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("assurance2Popup",e,n)})),WA.room.onLeaveLayer("zones/assurance/2").subscribe(s),WA.room.onEnterLayer("zones/assurance/3").subscribe((()=>{const e=WA.state.assurance3Description,t=WA.state.assurance3URL,o=WA.state.assurance3Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("assurance3Popup",e,n)})),WA.room.onLeaveLayer("zones/assurance/3").subscribe(s),WA.room.onEnterLayer("zones/assurance/4").subscribe((()=>{const e=WA.state.assurance4Description,t=WA.state.assurance4URL,o=WA.state.assurance4Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("assurance4Popup",e,n)})),WA.room.onLeaveLayer("zones/assurance/4").subscribe(s),WA.room.onEnterLayer("zones/assurance/5").subscribe((()=>{const e=WA.state.assurance5Description,t=WA.state.assurance5URL,o=WA.state.assurance5Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("assurance5Popup",e,n)})),WA.room.onLeaveLayer("zones/assurance/5").subscribe(s),WA.room.onEnterLayer("zones/assurance/6").subscribe((()=>{const e=WA.state.assurance6Description,t=WA.state.assurance6URL,o=WA.state.assurance6Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("assurance6Popup",e,n)})),WA.room.onLeaveLayer("zones/assurance/6").subscribe(s),WA.room.onEnterLayer("zones/assurance/playlist").subscribe((()=>{const e=WA.state.assurancePlaylistDescription,t=WA.state.assurancePlaylistURL,o=WA.state.assurancePlaylistEmbed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("assurancePlaylistPopup",e,n)})),WA.room.onLeaveLayer("zones/assurance/playlist").subscribe(s),WA.room.onEnterLayer("zones/vins/1").subscribe((()=>{const e=WA.state.vins1Description,t=WA.state.vins1URL,o=WA.state.vins1Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vins1Popup",e,n)})),WA.room.onLeaveLayer("zones/vins/1").subscribe(s),WA.room.onEnterLayer("zones/vins/2").subscribe((()=>{const e=WA.state.vins2Description,t=WA.state.vins2URL,o=WA.state.vins2Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vins2Popup",e,n)})),WA.room.onLeaveLayer("zones/vins/2").subscribe(s),WA.room.onEnterLayer("zones/vins/3").subscribe((()=>{const e=WA.state.vins3Description,t=WA.state.vins3URL,o=WA.state.vins3Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vins3Popup",e,n)})),WA.room.onLeaveLayer("zones/vins/3").subscribe(s),WA.room.onEnterLayer("zones/vins/4").subscribe((()=>{const e=WA.state.vins4Description,t=WA.state.vins4URL,o=WA.state.vins4Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vins4Popup",e,n)})),WA.room.onLeaveLayer("zones/vins/4").subscribe(s),WA.room.onEnterLayer("zones/vins/5").subscribe((()=>{const e=WA.state.vins5Description,t=WA.state.vins5URL,o=WA.state.vins5Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vins5Popup",e,n)})),WA.room.onLeaveLayer("zones/vins/5").subscribe(s),WA.room.onEnterLayer("zones/vins/6").subscribe((()=>{const e=WA.state.vins6Description,t=WA.state.vins6URL,o=WA.state.vins6Embed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vins6Popup",e,n)})),WA.room.onLeaveLayer("zones/vins/6").subscribe(s),WA.room.onEnterLayer("zones/vins/playlist").subscribe((()=>{const e=WA.state.vinsPlaylistDescription,t=WA.state.vinsPlaylistURL,o=WA.state.vinsPlaylistEmbed;let n=[{label:"Fermer",className:"normal",callback:()=>s()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,o)}),a=WA.ui.openPopup("vinsPlaylistPopup",e,n)})),WA.room.onLeaveLayer("zones/vins/playlist").subscribe(s),(0,e.bootstrapExtra)().then((()=>{console.log("Scripting API Extra ready")})).catch((e=>console.error(e)))})).catch((e=>console.error(e)))})()})();
//# sourceMappingURL=script.js.map