function web3d(){var I='bootstrap',J='begin',K='gwt.codesvr.web3d=',L='gwt.codesvr=',M='web3d',N='startup',O='DUMMY',P=0,Q=1,R='iframe',S='position:absolute; width:0; height:0; border:none; left: -1000px;',T=' top: -1000px;',U='CSS1Compat',V='<!doctype html>',W='',X='<html><head><\/head><body><\/body><\/html>',Y='undefined',Z='readystatechange',$=10,_='Chrome',ab='eval("',bb='");',cb='script',db='javascript',eb='moduleStartup',fb='moduleRequested',gb='Failed to load ',hb='head',ib='meta',jb='name',kb='web3d::',lb='::',mb='gwt:property',nb='content',ob='=',pb='gwt:onPropertyErrorFn',qb='Bad handler "',rb='" for "gwt:onPropertyErrorFn"',sb='gwt:onLoadErrorFn',tb='" for "gwt:onLoadErrorFn"',ub='#',vb='?',wb='/',xb='img',yb='clear.cache.gif',zb='baseUrl',Ab='web3d.nocache.js',Bb='base',Cb='//',Db='user.agent',Eb='webkit',Fb='safari',Gb='msie',Hb=11,Ib='ie10',Jb=9,Kb='ie9',Lb=8,Mb='ie8',Nb='gecko',Ob='gecko1_8',Pb=2,Qb=3,Rb=4,Sb='selectingPermutation',Tb='web3d.devmode.js',Ub='18EBAFF235EE31DFDA1EE52C35151A34',Vb=':1',Wb=':2',Xb=':3',Yb=':',Zb='.cache.js',$b='loadExternalRefs',_b='end';var o=window;var p=document;r(I,J);function q(){var a=o.location.search;return a.indexOf(K)!=-1||a.indexOf(L)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:M,sessionId:o.__gwtStatsSessionId,subSystem:N,evtGroup:a,millis:(new Date).getTime(),type:b})}}
web3d.__sendStats=r;web3d.__moduleName=M;web3d.__errFn=null;web3d.__moduleBase=O;web3d.__softPermutationId=P;web3d.__computePropValue=null;web3d.__getPropMap=null;web3d.__installRunAsyncCode=function(){};web3d.__gwtStartLoadingFragment=function(){return null};web3d.__gwt_isKnownPropertyValue=function(){return false};web3d.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[M]={moduleName:M};web3d.__moduleStartupDone=function(e){var f=t[M].bindings;t[M].bindings=function(){var a=f?f():{};var b=e[web3d.__softPermutationId];for(var c=P;c<b.length;c++){var d=b[c];a[d[P]]=d[Q]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(R);a.id=M;a.style.cssText=S+T;a.tabIndex=-1;p.body.appendChild(a);u=a.contentWindow.document;u.open();var b=document.compatMode==U?V:W;u.write(b+X);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==Y){return typeof p.body!=Y&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(p.removeEventListener){p.removeEventListener(Z,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(Z,d,false)}var e=setInterval(function(){d()},$)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(_)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(ab));for(var i=P;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(Q,j.length-Q)))}h.appendChild(e.createTextNode(bb));g=e.createElement(cb);g.language=db;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=P;i<c.length;i++){g=e.createElement(cb);g.language=db;g.text=c[i];f.appendChild(g);d(f,g)}}}
web3d.onScriptDownloaded=function(a){l(function(){m(a)})};r(eb,fb);var n=p.createElement(cb);n.src=k;if(web3d.__errFn){n.onerror=function(){web3d.__errFn(M,new Error(gb+code))}}p.getElementsByTagName(hb)[P].appendChild(n)}
web3d.__startLoadingFragment=function(a){return D(a)};web3d.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(cb);d.language=db;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(ib);for(var g=P,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(jb),k;if(j){j=j.replace(kb,W);if(j.indexOf(lb)>=P){continue}if(j==mb){k=i.getAttribute(nb);if(k){var l,m=k.indexOf(ob);if(m>=P){j=k.substring(P,m);l=k.substring(m+Q)}else{j=k;l=W}c[j]=l}}else if(j==pb){k=i.getAttribute(nb);if(k){try{d=eval(k)}catch(a){alert(qb+k+rb)}}}else if(j==sb){k=i.getAttribute(nb);if(k){try{e=eval(k)}catch(a){alert(qb+k+tb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;web3d.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(ub);if(b==-1){b=a.length}var c=a.indexOf(vb);if(c==-1){c=a.length}var d=a.lastIndexOf(wb,Math.min(c,b));return d>=P?a.substring(P,d+Q):W}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(xb);b.src=a+yb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(zb);if(a!=null){return a}return W}
function h(){var a=p.getElementsByTagName(cb);for(var b=P;b<a.length;++b){if(a[b].src.indexOf(Ab)!=-1){return e(a[b].src)}}return W}
function i(){var a=p.getElementsByTagName(Bb);if(a.length>P){return a[a.length-Q].href}return W}
function j(){var a=p.location;return a.href==a.protocol+Cb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==W){k=h()}if(k==W){k=i()}if(k==W&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return web3d.__moduleBase+a}
function F(){var f=[];var g=P;function h(a,b){var c=f;for(var d=P,e=a.length-Q;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Db]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(Eb)!=-1}())return Fb;if(function(){return a.indexOf(Gb)!=-1&&(b>=$&&b<Hb)}())return Ib;if(function(){return a.indexOf(Gb)!=-1&&(b>=Jb&&b<Hb)}())return Kb;if(function(){return a.indexOf(Gb)!=-1&&(b>=Lb&&b<Hb)}())return Mb;if(function(){return a.indexOf(Nb)!=-1||b>=Hb}())return Ob;return Fb};i[Db]={'gecko1_8':P,'ie10':Q,'ie8':Pb,'ie9':Qb,'safari':Rb};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};web3d.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};web3d.__computePropValue=k;o.__gwt_activeModules[M].bindings=web3d.__getPropMap;r(I,Sb);if(q()){return D(Tb)}var l;try{h([Ob],Ub);h([Ib],Ub+Vb);h([Kb],Ub+Wb);h([Fb],Ub+Xb);l=f[k(Db)];var m=l.indexOf(Yb);if(m!=-1){g=parseInt(l.substring(m+Q),$);l=l.substring(P,m)}}catch(a){}web3d.__softPermutationId=g;return D(l+Zb)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r($b,J);r($b,_b)}
B();web3d.__moduleBase=C();t[M].moduleBase=web3d.__moduleBase;var H=F();G();r(I,_b);A(H);return true}
web3d.succeeded=web3d();