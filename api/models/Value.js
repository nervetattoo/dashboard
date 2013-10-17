/**
* Value
*
* @module      :: Model
* @description :: A short summary of how this model works and what it represents.
* @docs		:: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    autoUpdateddAt: false,

    attributes: {
        sensor_id: {
            type: 'string',
            required: true
        },
        year: 'integer',
        month: 'integer',
        day: 'integer',
        hour: 'integer',
        minute: 'integer',
        second: 'integer',
        value: {
            type: 'integer',
            required: true
        },
        annotation: {
            type: 'string'
        }
    }

};
