// handlers for policy purchase events
exports.Emailsend = function(payload) {
    console.log('Email send handler triggered');
    console.log('Payload:', payload);
    // Add email sending logic here if needed
};

exports.SMSsend = function(payload) {
    console.log('SMS send handler triggered');
    console.log('Payload:', payload);
    // Add SMS sending logic here if needed
};
