#!/usr/bin/node
"use strict";
if (process.argv.length<3){
	process.stdout.write("mkcjs OUT [MODULES]\n");
	return;
}
var fs = require("fs"),path = require("path");
var out = fs.createWriteStream(process.argv[2]);
function writeModule(n){
	if (n >= process.argv.length){
		out.end();
		return;
	}
	var f = process.argv[n], ext = path.extname(f);
	if (ext == ".js"){
		out.write("require.f('" + f.slice(0,-3) + "',function(module,exports,require){");
	}else if (ext == ".json"){
		out.write("require.f('" + f + "',function(m){m.exports=");
	}else{
		console.log("Unknown ext: " + ext);
	}
	var src = fs.createReadStream(process.argv[n]);
	src.on("end", function(){
		out.write("});");
		writeModule(n+1);
	});
	src.pipe(out, {end: false});
}
var plate = fs.createReadStream(path.resolve(__dirname, "plate.js"));
plate.on("end", function(){writeModule(3)});
plate.pipe(out, {end: false});