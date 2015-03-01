"use strict"
var require=(function(o){var M={},r=function(x,p){
x=x.replace(/^\.\//,"")
if(p)x=p+x
while(x.match(/[^/]+\/\.\.\//))x=x.replace(/[^/]+\/\.\.\//,"")
return x in M?M[x]():o?o(x):null}
r.f=function(p,f){var m={exports:{}},i=true,j=p.lastIndexOf("/"),s=~j?p.slice(0,j+1):""
M[p]=function(){if (i){i=false;f(m,m.exports,function(x){return r(x,s)})}return m.exports}}
return r})(typeof require!="undefined"&&require);