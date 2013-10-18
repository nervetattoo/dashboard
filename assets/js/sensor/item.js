define(['backbone', 'lodash', 'd3', 'LineChart'], function(Backbone, _, d3) {
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
            this.$el.html('<h1>' + data.name + '</h1>');
            if (data.values) {
                var graphNode = Backbone.$('<div class="graph"></div>').appendTo(this.$el);
                var values = _.pluck(data.values, 'value');
                var chart = d3.select(graphNode[0])
                    .append("svg")
                    .append('g')
                    .chart("LineChart")
                    .width(600)
                    .height(400);

                chart.draw(values);
            };
            return this;
        }
    });
});
