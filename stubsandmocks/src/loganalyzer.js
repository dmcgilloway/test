
const myCallbackParser = { fileParser: () => {return 'Test';} }
const FileUtil = require('./fileutil');

function loganalyzer(){}

loganalyzer.prototype.getLogStatus = function (condition, expensiveFunction) {

  var result = null

  if (condition) {
    result = expensiveFunction() // long running, expensive ("slow") code here
  }

  return result
};

loganalyzer.prototype.getLogDates = function (condition, myCallback) {

  var result = null

  if (condition) {
    result = myCallback.expensiveMethod(); // long running, expensive ("slow") code here
  }

  return result
};

loganalyzer.prototype.chkLogDates = function (condition) {

  var result = null

  if (condition) {
    result = myCallbackParser; // long running, expensive ("slow") code here
  }

  return result
};

loganalyzer.prototype.readAndGetLogDates = function (condition, myCallback, filename) {

  var result = null
  console.log("Alan Patridge Ah Ha")
  if (condition) {
    result = myCallback.expensiveMethod(); // long running, expensive ("slow") code here
  }
  else {
          const FileUtilHelper = new FileUtil();
          FileUtilHelper.ReadFile(filename);
  }

  return result
};

module.exports = loganalyzer
