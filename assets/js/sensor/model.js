define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        url: function() {
            return '/sensor_data/' + this.id;
        }
    });
});
