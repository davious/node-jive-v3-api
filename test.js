var api = require('./api');

var community = {
    'jiveUrl' : 'https://community.jivesoftware.com'
};


var username = 'MYUSERNAME';
var password = 'MYPASSWORD';

var basicauth = new (require('./basicauth'))(username, password);

var _ = api(community, basicauth);
var request = _.osapi.jive.corev3.activities.get();

request.execute( function(e) {
    console.log(e);
});
