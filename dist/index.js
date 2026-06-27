"use strict";var m=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var d=m(function(H,b){
function z(e,r,s,c,n,a,u,f){var i,l,q,x,o,v,t,g,y;for(i=s.data,l=a.data,q=s.accessors[0],x=a.accessors[1],o=!1,v=r,t=n,g=f,y=0;y<e;y++)!o&&q(i,t)&&(v-=1,v<=0&&(o=!0)),x(l,g,o),t+=c,g+=u;return a}b.exports=z
});var p=m(function(I,j){
var P=require('@stdlib/array-base-arraylike2object/dist'),A=d();function B(e,r,s,c,n,a,u,f){var i,l,q,x,o,v,t;if(e<=0)return a;if(q=P(s),x=P(a),q.accessorProtocol||x.accessorProtocol)return A(e,r,q,c,n,x,u,f),a;for(i=!1,l=r,o=n,v=f,t=0;t<e;t++)!i&&s[o]&&(l-=1,l<=0&&(i=!0)),a[v]=i,o+=c,v+=u;return a}j.exports=B
});var k=m(function(J,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),C=p();function D(e,r,s,c,n,a){var u=R(e,c),f=R(e,a);return C(e,r,s,c,u,n,a,f)}h.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=k(),F=p();E(w,"ndarray",F);module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
