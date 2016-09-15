var fs = require('fs'); // load fs module

function fileutil(){}

fileutil.prototype.ReadFile = function (filename) {
  console.log ("Look at me I am here");
  fs.readFile(filename, function (err, data) {
    var fileContents = data.toString().split('\n');
    console.log("The contents of the file is: " + fileContents);
  });

};

module.exports = fileutil;
