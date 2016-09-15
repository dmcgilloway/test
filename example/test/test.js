"use strict";
const expect  =  require('chai').expect;
const sinon   =  require('sinon');
const myFunction = require('../src/my_function')

describe('=================Stubs=======================================', () => {
    
   it('Simple should use stub and display args passed', () => {
      const stub = sinon.stub();
      stub('hello','world');
      console.log(stub.firstCall.args);
    })
   
   it('should use stub and set the return type', () => {
      const stub = sinon.stub().returns(42)
      const result = stub('hello')
      const expected = 42;
      expect(result).to.equal(expected)
    })
   
    it('should return result of expensiveFunction call', () => {
      const stub = sinon.stub().returns(42);
      const result = myFunction(true, stub);
      expect(result).to.equal(42);
     })
   
})

describe('=================Mocks=======================================', () => {

    it('should call the mock', () => {
        // assume this is the expensive (slow) method call
        const myCallback = { expensiveMethod: () => {} }

        const mock = sinon.mock(myCallback);
        mock.expects('expensiveMethod').once().returns(42);

        // notice that we pass in the real object, but the expensiveMethod isn't the real one
        const result = myFunction(true, myCallback.expensiveMethod);

        // verifies that `expensiveMethod` was called once and only once
        expect(result).to.equal(42);
        mock.verify();
    })
   
})