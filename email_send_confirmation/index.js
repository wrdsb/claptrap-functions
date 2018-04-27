module.exports = function (context) {
    var request = require('request');
    var ejs = require('ejs');

    // Parse job object for API service request URL
    var service = "wrdsb-hedwig";
    var operation = "message_send";
    var service_key = process.env['HedwigKey'];

    var payload = {
        "from":"claptrap@wrdsb.ca",
        "to":"james_schumann@wrdsb.ca",
        "subject":"Test HTML email from Claptrap, via Hedwig",
        "text":"This is another test email.",
    }

    ejs.renderFile(__dirname + '/template.html', {}, function(err, str) {
        if (err) {
            context.log(err);
            context.done(err);
            return;
        } else {
            payload.html = str;
        }
    });

    // Prepare HTTP request options for calling API service
    var request_options = {
        method: 'POST',
        url: `https://${service}.azurewebsites.net/api/${operation}?code=${service_key}&clientId=hedwig`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'wrdsb-claptrap'
        },
        json: payload
    };

    // Make the request
    request.post(request_options, function (error, response, body) {
        if (error) {
            context.log('error:', error);
            context.done(error);
            return;
        } else {
            context.log('statusCode:', response && response.statusCode);
            context.log('body:', body);
            context.done(null, body);
        }
    });
};
