define(['backbone', 'lodash', 'bar-chart'], function(Backbone, _, BarChart) {
    return Backbone.View.extend({
        tagName: 'div',
        className: 'pure-u-1-3',

        initialize: function(options) {
            _.bindAll(this);
            this.listenTo(this.model, {
                change: this.render
            });
        },

        render: function() {
            var data = this.model.toJSON();
            this.$el.html('<h1>' + data.name + '</h1><ul></ul>');
            if (data.values) {
                this.$el.append('<div class="graph"></div>');
                var $g = this.$('.graph');
                console.log(_.pluck(data.values, 'value'));
                var values = _.pluck(data.values, 'value');
                BarChart(values, '.graph', _.max(values));
            };
            return this;
        }
    });
});
