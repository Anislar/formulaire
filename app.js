var express = require('express');
var bodyParser = require("body-parser");
const { Router } = require('express');

// serveur html
var server = express.Router();
var urlencoded = bodyParser.urlencoded({ extended: true });

server.post('/', urlencoded, function(request, response) {
    var username = request.body.username;
    var email = request.body.email;
    var password = request.body.password;
    response.redirect('/', "username= " + username + " email = " + email + " password= " + password);

});
module.exports = Router;