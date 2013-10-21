module.exports = function sensorTokenIsCorrect(req, res, next) {
    var token = req.param('token');
    var id = req.param('sensor_id');

    sails.log('policy', id, token);
    Sensor.findOne()
        .where({id: id})
        .then(function(sensor) {
            sails.log('found sensor', token, sensor.token);
            if (token === sensor.token) return next();
            return res.redirect('/500');
        }, next);
};
