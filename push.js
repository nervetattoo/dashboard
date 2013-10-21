#!/usr/bin/env node

var url = require('url');
var moment = require('moment');
var request = require('request');
var argv = require('optimist')
    .usage('./push.js -t token -s sensorid value')
    .options('h', { alias: 'host', default: 'localhost' })
    .options('p', { alias: 'port', default: '1337' })
    .options('m', { alias: 'minutes', boolean: true })
    .options('t', { alias: 'token', demand: true})
    .options('s', { alias: 'sensor', demand: true})
    .argv;

var uri = url.format({
    protocol: 'http',
    hostname: argv.host,
    port: argv.port,
    pathname: '/sensor_data/' + argv.sensor
});

var date = moment();
var data = {
    year: date.year(),
    month: date.month() + 1,
    day: date.date(),
    token: argv.token,
    value: argv._
};

if (argv.minutes) {
    data.minute = date.minute();
}

console.log(uri);
request.post({
    url: uri,
    form: data
}, function(err, resp, body) {
    console.log(body);
});
