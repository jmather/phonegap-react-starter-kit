#!/usr/bin/env node

var child_process = require('child_process');

var watchify = child_process.spawn('npm', ['run', 'watch-js'], {
    cwd: __dirname + '/..',
    stdio: [
        0, // use parents stdin for child
        1, // pipe child's stdout to parent
        2 // direct child's stderr to a file
    ]
});

var postcss = child_process.spawn('npm', ['run', 'watch-css'], {
    cwd: __dirname + '/..',
    stdio: [
        0, // use parents stdin for child
        1, // pipe child's stdout to parent
        2 // direct child's stderr to a file
    ]
});

var testServer = child_process.spawn('node', ['local-test-server.js'], {
    cwd: __dirname,
    stdio: [
        0, // use parents stdin for child
        1, // pipe child's stdout to parent
        2 // direct child's stderr to a file
    ]
});