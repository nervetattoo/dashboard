define(['app', 'q', 'backbone', 'sensor/list'], function(App, Q, Backbone, SensorList) {
    var app = new App;
    app.connect().then(function(socket) {
        Backbone.sync = function(method, model, options) {
            var methods = {
                read: 'get',
                create: 'post',
                update: 'put',
                patch: 'put',
                delete: 'delete'
            };
            method = methods[method];
            var url = options.url || _.result(model, 'url');
            var success = options.success || false;
            var data = null;
            if (method == 'post' || method == 'put') {
                data = options.attrs || model.toJSON(options);
            }

            if (success) {
                return socket[method](url, data, success);
            }
            else {
                var deferred = Q.defer();
                socket[method](url, data, deferred.resolve);
                return deferred.promise;
            }
        };
        app.view = new SensorList({
            el:  document.querySelector('main')
        });
        app.view.collection.fetch();
    });
});
