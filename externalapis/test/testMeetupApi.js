"use strict";

// var Module = require('module');
// var originalRequire = Module.prototype.require;
// Module.prototype.require = function(){
//   if(arguments[0] === '../src/meetup') {
//     console.log('++----------------', arguments);
//     arguments[0] = '../stub/meetUpDataMock';
//   }
//   return originalRequire.apply(this, arguments);
// };

const expect  =  require('chai').expect;


//const sinon   =  require('sinon');
// const callMeetUpFindEvents = require('../src/meetup')
const meetingDataAdapter   = require('../src/meetingDataAdapter')
const meetUpDataMock       = require('../stub/meetUpDataMock');


describe('=================Test Meeting Api=======================================', () => {

  //  it('Compare return JSON for Meeting api', (done) => {
  //      var expected = 'Belfast Social Events Group';
  //      var result;
   //
  //      callMeetUpFindEvents((result) => {
  //        expect(result[0].name).to.equal(expected);
  //        done();
  //      });
  //   })

       it('Compare return JSON for Meeting api but call adapter', (done) => {
           var expected = 'Belfast Social Events Group';
           var result;
           var objMeetingAdapter = new meetingDataAdapter();

           objMeetingAdapter.getBelfastEvents((result) => {
             expect(result[0].name).to.equal(expected);
             done();
           });
        })


        it('Compare return JSON for Meeting api', () => {
            var expected = 'Belfast Social Events Group';
            var result;

            meetUpDataMock((result) => {
              expect(result[0].name).to.equal(expected);
//              done();
            });
         })

 })
