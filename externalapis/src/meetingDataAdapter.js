"use strict";

//require('dotenv').config();
const callMeetUpFindEvents = require('../src/meetup')

class MeetingDataAdapter {

  getBelfastEvents(callback)
  {
    callMeetUpFindEvents(callback);
  }


}

module.exports = MeetingDataAdapter;
