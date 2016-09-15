const sinon = require('sinon');
const expect = require('chai').expect;
const log = require('../src/loganalyzer');
// src/my_function.js


// D, [2014-05-10T14:48:19.093626 #85971] DEBUG -- : maximize proactive e-business
// I, [2014-05-10T14:48:19.093737 #85971]  INFO -- : benchmark vertical functionalities
// D, [2014-05-10T14:48:19.093772 #85971] DEBUG -- : monetize turn-key partnerships
describe('Stubs and Mocks', () => {
  it('Parsing log error type', () => {

    const stub = sinon.stub().returns('DEBUG')
    const logAnalyzer = new log();
    const result = logAnalyzer.getLogStatus(true, stub);
    const expected = 'DEBUG';
    expect(result).to.equal(expected);
  })

  it('test get log status is called at least once', () => {
    // assume this is the expensive (slow) method call
    const logAnalyzer = new log();
    const myCallback = { expensiveMethod: () => {return 'Test';} }
    const mock = sinon.mock(myCallback);
    const result = logAnalyzer.getLogDates(true, myCallback);
    console.log(result);

    mock.expects('expensiveMethod').once().returns('');
  })

  it('Check That the method chkLogDates', () => {
    // assume this is the expensive (slow) method call
    const logAnalyzer = new log();
    //const myCallback = { expensiveMethod: () => {return 'Test';} }

    const mock = sinon.mock(logAnalyzer);

    mock.expects('chkLogDates').once().returns('');
    const result = logAnalyzer.chkLogDates(true);

    // notice that we pass in the real object, but the expensiveMethod isn't the real one
    mock.verify();
  })

  it('Check Method Get Cals', () => {
    // assume this is the expensive (slow) method call
    const logAnalyzer = new log();
    //const myCallback = { expensiveMethod: () => {return 'Test';} }

    const mock = sinon.mock(logAnalyzer);

    mock.expects('readAndGetLogDates').once().returns('');
    const result = logAnalyzer.readAndGetLogDates(false,{},"../data/log.txt");

    // notice that we pass in the real object, but the expensiveMethod isn't the real one
    mock.verify();
  })

})
