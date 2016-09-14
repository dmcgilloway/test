function myFunction (condition, expensiveFunction) {
  var result = null;

  if (condition) {
    result = expensiveFunction(); // long running, expensive ("slow") code here
  }

  return result;
}

module.exports = myFunction;