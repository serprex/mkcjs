"use strict"
var require=(function(o){var M={},a=/[^/]+\/\.\.\//,r=function(x,p){
x=(p||"")+x.replace(/^\.\//,"")
while(x.match(a))x=x.replace(a,"")
return(M[x]||o)(x)}
r.f=function(p,f){var m={},j=p.lastIndexOf("/"),s=~j?p.slice(0,j+1):""
M[p]=function(){return m.exports||(f(m,m.exports={},function(x){return r(x,s)}),m.exports)}}
return r})(typeof require!="undefined"&&require);