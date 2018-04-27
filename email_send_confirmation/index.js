module.exports = function (context) {
    var request = require('request');

    // Parse job object for API service request URL
    var service = "wrdsb-hedwig";
    var operation = "message_send";
    var service_key = process.env['HedwigKey'];

    var payload = {
        "from":"claptrap@wrdsb.ca",
        "to":"james_schumann@wrdsb.ca",
        "subject":"Test HTML email from Claptrap, via Hedwig",
        "text":"This is another test email.",
        "html":"<!DOCTYPE html PUBLIC \"-\/\/W3C\/\/DTD XHTML 1.0 Transitional\/\/EN\" \"http:\/\/www.w3.org\/TR\/xhtml1\/DTD\/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http:\/\/www.w3.org\/1999\/xhtml\" style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\">\r\n<head>\r\n<meta name=\"viewport\" content=\"width=device-width\" \/>\r\n<meta http-equiv=\"Content-Type\" content=\"text\/html; charset=UTF-8\" \/>\r\n<title>Actionable emails e.g. reset password<\/title>\r\n\r\n\r\n<style type=\"text\/css\">\r\nimg {\r\nmax-width: 100%;\r\n}\r\nbody {\r\n-webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;\r\n}\r\nbody {\r\nbackground-color: #f6f6f6;\r\n}\r\n@media only screen and (max-width: 640px) {\r\n  body {\r\n    padding: 0 !important;\r\n  }\r\n  h1 {\r\n    font-weight: 800 !important; margin: 20px 0 5px !important;\r\n  }\r\n  h2 {\r\n    font-weight: 800 !important; margin: 20px 0 5px !important;\r\n  }\r\n  h3 {\r\n    font-weight: 800 !important; margin: 20px 0 5px !important;\r\n  }\r\n  h4 {\r\n    font-weight: 800 !important; margin: 20px 0 5px !important;\r\n  }\r\n  h1 {\r\n    font-size: 22px !important;\r\n  }\r\n  h2 {\r\n    font-size: 18px !important;\r\n  }\r\n  h3 {\r\n    font-size: 16px !important;\r\n  }\r\n  .container {\r\n    padding: 0 !important; width: 100% !important;\r\n  }\r\n  .content {\r\n    padding: 0 !important;\r\n  }\r\n  .content-wrap {\r\n    padding: 10px !important;\r\n  }\r\n  .invoice {\r\n    width: 100% !important;\r\n  }\r\n}\r\n<\/style>\r\n<\/head>\r\n\r\n<body itemscope itemtype=\"http:\/\/schema.org\/EmailMessage\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;\" bgcolor=\"#f6f6f6\">\r\n\r\n<table class=\"body-wrap\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;\" bgcolor=\"#f6f6f6\"><tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\"><td style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;\" valign=\"top\"><\/td>\r\n\t\t<td class=\"container\" width=\"600\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;\" valign=\"top\">\r\n\t\t\t<div class=\"content\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;\">\r\n\t\t\t\t<table class=\"main\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" itemprop=\"action\" itemscope itemtype=\"http:\/\/schema.org\/ConfirmAction\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;\" bgcolor=\"#fff\"><tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\"><td class=\"content-wrap\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;\" valign=\"top\">\r\n\t\t\t\t\t\t\t<meta itemprop=\"name\" content=\"Confirm Email\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\" \/><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\"><tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\"><td class=\"content-block\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;\" valign=\"top\">\r\n\t\t\t\t\t\t\t\t\t\tPlease confirm your email address by clicking the link below.\r\n\t\t\t\t\t\t\t\t\t<\/td>\r\n\t\t\t\t\t\t\t\t<\/tr><tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\"><td class=\"content-block\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;\" valign=\"top\">\r\n\t\t\t\t\t\t\t\t\t\tWe may need to send you critical information about our service and it is important that we have an accurate email address.\r\n\t\t\t\t\t\t\t\t\t<\/td>\r\n\t\t\t\t\t\t\t\t<\/tr><tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\"><td class=\"content-block\" itemprop=\"handler\" itemscope itemtype=\"http:\/\/schema.org\/HttpActionHandler\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;\" valign=\"top\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"http:\/\/www.mailgun.com\" class=\"btn-primary\" itemprop=\"url\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;\">Confirm email address<\/a>\r\n\t\t\t\t\t\t\t\t\t<\/td>\r\n\t\t\t\t\t\t\t\t<\/tr><tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\"><td class=\"content-block\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;\" valign=\"top\">\r\n\t\t\t\t\t\t\t\t\t\t&mdash; The Mailgunners\r\n\t\t\t\t\t\t\t\t\t<\/td>\r\n\t\t\t\t\t\t\t\t<\/tr><\/table><\/td>\r\n\t\t\t\t\t<\/tr><\/table><div class=\"footer\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;\">\r\n\t\t\t\t\t<table width=\"100%\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\"><tr style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;\"><td class=\"aligncenter content-block\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;\" align=\"center\" valign=\"top\">Follow <a href=\"http:\/\/twitter.com\/mail_gun\" style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;\">@Mail_Gun<\/a> on Twitter.<\/td>\r\n\t\t\t\t\t\t<\/tr><\/table><\/div><\/div>\r\n\t\t<\/td>\r\n\t\t<td style=\"font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;\" valign=\"top\"><\/td>\r\n\t<\/tr><\/table><\/body>\r\n<\/html>"
    }

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
