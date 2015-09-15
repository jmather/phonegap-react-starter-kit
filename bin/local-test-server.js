#!/usr/bin/env node
var cli = require('cli');

cli.parse({
    verbose: ['v', 'Verbose output']
});

cli.main(function(args, options) {
    var express = require('express');
    var app = express();

    app.use(function(req, res, next) {
        if (req.url === '/') {
            req.url = '/desktop.html';
        }
        next();
    });

    app.use(express.static(__dirname + '/../www'));

    var port = process.env.PORT || 3001;

    var server = app.listen(port, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });
});
