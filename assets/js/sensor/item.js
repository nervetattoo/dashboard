define(['backbone', 'lodash', 'bar-chart'], function(Backbone, _, d3) {
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
                var values = _.pluck(data.values, 'value');
                var chart = d3.select('div.graph')
                    .append("svg")
                    .chart("LineChart");

                chart.draw(values);
            };
            return this;
        }
    });
});
