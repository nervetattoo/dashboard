/**
 * SensorController
 *
 * @module      :: Controller
 */
var _ = require('lodash');
var Q = require('q');

module.exports = {
    // Overrides for the settings in `config/controllers.js`
    _config: {},

    _err: function(err) {
        return res.json(err);
    },

    push: function(req, res) {
        var id = req.param('sensor_id');
        var data = _.clone(req.body);
        data.sensor_id = id;
        var where = _.omit(data, ['value', 'increment']);
        Value.findOrCreate(where, data, function(err, value) {
            if (err) return res.send(err,500);

            if (req.body.increment) {
                value.value = (value.value || 0) + req.body.increment;
            }
            else {
                value.value = req.body.value;
            }
            value.save(function(err) {
                if (err) return res.send(err, 500);
                res.json(value.toJSON());
            });
        });
    },

    values: function(req, res) {
        var id = req.param('sensor_id');
        var where = req.param('where') || {};
        where.sensor_id = id;
        Sensor.findOne().where({id:id})
            .then(function(sensor) {
                Value.find()
                    .where(where)
                    .then(function(values) {
                        var result = sensor.toJSON();
                        result.values = _.invoke(values, 'toJSON');
                        return res.json(result);
                }, this._err);
        }, this._err);
    }
};
