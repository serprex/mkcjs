#!/usr/bin/node
if (!process.argv.length){
	process.stdout.write("mkcjs OUT [MODULES]\n");
	return;
}
var fs = require("fs");
var path = require("path");
var out = fs.createWriteStream(process.argv[2]);
function writeModule(n){
	return function(){
		if (n >= process.argv.length){
			out.end();
			return;
		}
		out.write("require.f('" + process.argv[n].slice(0,-3) + "',function(require,module,exports){")
		var src = fs.createReadStream(process.argv[n]);
		src.on("end", function(){
			out.write("});")
			writeModule(n+1)();
		});
		src.pipe(out, {end: false});
	}
}
var plate = fs.createReadStream(path.resolve(__dirname, "plate.js"));
plate.pipe(out, {end: false});
plate.on("end", writeModule(3));