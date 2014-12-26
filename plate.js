"use strict";
var require=(function(o){
	var M={}
	var r=function(x,p){
		if(x.slice(0,2)=="./")x=x.slice(2);
		if(p)x=p+x;
		while(x.match(/[^/]+\/\.\.\//))x=x.replace(/[^/]+\/\.\.\//,"");
		var m=M[x];
		return m?m():o?o(x):null;
	}
	r.f=function(p,f){
		var m={exports:{}},i=true,j=p.lastIndexOf("/"),s=j==-1?"":p.slice(0,j+1);
		M[p]=function(){
			if (i){
				i=false;
				f(function(x){return r(x,s)},m,m.exports);
			}
			return m.exports;
		}
	}
	return r;
})(typeof require=="undefined"?null:require);