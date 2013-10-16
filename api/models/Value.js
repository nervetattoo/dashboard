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
        sensor: {
            model: 'sensor',
            required: true
        },
        date: {
            type: 'date',
            required: true
        },
        time: 'time',
        value: {
            type: 'integer',
            required: true
        },
        annotation: {
            type: 'string'
        }
    }

};
