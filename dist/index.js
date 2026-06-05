"use strict";var m=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var d=m(function(H,b){
function z(a,e,o,c,n,r,u,f){var i,l,q,x,s,v,t,g,y;for(i=o.data,l=r.data,q=o.accessors[0],x=r.accessors[1],s=!1,v=e,t=n,g=f,y=0;y<a;y++)!s&&q(i,t)&&(v-=1,v<=0&&(s=!0)),x(l,g,s),t+=c,g+=u;return r}b.exports=z
});var p=m(function(I,j){
var P=require('@stdlib/array-base-arraylike2object/dist'),A=d();function B(a,e,o,c,n,r,u,f){var i,l,q,x,s,v,t;if(a<=0)return r;if(q=P(o),x=P(r),q.accessorProtocol||x.accessorProtocol)return A(a,e,q,c,n,x,u,f),r;for(i=!1,l=e,s=n,v=f,t=0;t<a;t++)!i&&o[s]&&(l-=1,l<=0&&(i=!0)),r[v]=i,s+=c,v+=u;return r}j.exports=B
});var k=m(function(J,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),C=p();function D(a,e,o,c,n,r){var u=R(a,c),f=R(a,r);return C(a,e,o,c,u,n,r,f)}h.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=k(),F=p();E(w,"ndarray",F);module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
