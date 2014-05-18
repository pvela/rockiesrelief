//require the Twilio module and create a REST client
var client = require('twilio')('AC5dc5f3c92f2029ef772f21e8dba25bf8', 'ccb7739814c6c5aa5a428b356acdc32c');

module.exports =  {

    sendMessage  : function (to,msg) {
        //Send an SMS text message
        client.sendMessage({

            to:to, // Any number Twilio can deliver to
            from: '+13038729155', // A number you bought from Twilio and can use for outbound communication
            body: msg // body of the SMS message

        }, function(err, responseData) { //this function is executed when a response is received from Twilio

            if (!err) { // "err" is an error received during the request, if any

                // "responseData" is a JavaScript object containing data received from Twilio.
                // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
                // http://www.twilio.com/docs/api/rest/sending-sms#example-1

                console.log(responseData.from); // outputs "+14506667788"
                console.log(responseData.body); // outputs "word to your mother."

            }
        });
    }
}