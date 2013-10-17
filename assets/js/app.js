define(['sails.io', 'lodash', 'q'], function(io, _, Q) {
    var App = function() {
        _.bindAll(this);
    };

    App.prototype.connect = function() {
        var deferred = Q.defer();
        this.socket = socket = io.connect();
        this.socket.on('connect', function() {
            deferred.resolve(socket);
        });
        return deferred.promise;
    };
    return App;
});
