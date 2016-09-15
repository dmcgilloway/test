var https = require('https');
require('dotenv').config();

function callMeetUpFindEvents(meetupCallback)
{
    var options = {
      host: process.env.host,
      path: process.env.path
    };

    var obj;
    callback = function(response) {
      var str = '';
      response.on('data', function (chunk) {  str += chunk; });
      response.on('end', function () {
         meetupCallback(JSON.parse(str));
      });
    }
    https.request(options, callback).end();
}


module.exports = callMeetUpFindEvents;
