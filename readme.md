mkcjs was designed over frustration with browserify

mkcjs does not parse modules. It's meant to be used with a build tool, such as ninja-build

For an example of a mkcjs project, see http://github.com/serprex/openEtG

Invocation is straightforward, `mkcjs $output [$sources...]`

Sources may include json. It's possible to override requires at runtime through `require.f` as done by [openEtG-cia](http://github.com/ZephyrPhantom/openEtG-vanilla/blob/master/index.html)