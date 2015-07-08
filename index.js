var pleeease = require('pleeease')
var watch    = require('node-watch');
var fs       = require('fs');

var cssFile  = 'app/style.styl';

var options = {
    "stylus" : true,
    "autoprefixer": {"browsers": ["last 4 versions", "ios 6"]},
    "minifier": true,
    "mqpacker": true
};


watch(cssFile, function(filename) {
    console.log(filename, 'changed.');
    compile();
});


var compile = function() {
    var css = fs.readFileSync(cssFile, 'utf8');
    var fixed = pleeease.process(css, options);

    fs.writeFile('app/style.min.css', fixed, function (err) {
      if (err) {
        throw err;
      }
      console.log('File saved!');
    });
}

compile();