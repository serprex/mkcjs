$(Get-Content plate.js
$args[1..$args.length] | ForEach {
	$ext = [System.IO.Path]::GetExtension($_)
	if ($ext -eq '.js') {
		echo ("require.f('" + [System.IO.Path]::GetFileNameWithoutExtension($_) + "', function(module, exports, require){")
	} elseif ($ext -eq '.json') {
		echo ("require.f('" + $_ + "',function(m){m.exports=")
	} else {
		exit $ext
	}
	Get-Content $_
	echo "});"
}) > $args[0]
