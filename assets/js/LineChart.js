define(['d3', 'd3.chart'], function(d3) {
    d3.chart('LineChart', {
        initialize: function() {
            var x = this.x = d3.scale.linear();
            var y = this.y = d3.scale.linear();
            this.line = d3.svg.line()
                .x(function(d,i) { return x(i); })
                .y(function(d,i) { return y(d); });

            var yAxis = this.yAxis = d3.svg.axis()
                .scale(y)
                .orient('left');

            this.yLayer = this.base.append('g')
                .attr('class', 'y axis');

            this.linePath = this.base.append("path")
                .attr("class", "line");

            this.layer("line", this.linePath, {
                dataBind: function(data) {
                    return this.data([data]).attr("d", this.chart().line);
                },
                insert: function() {
                    return this.chart().linePath;
                }
            });

            this.margins([80, 80, 80, 80])
                .width(600)
                .height(200);
        },

        width: function(width) {
            if (typeof width === 'undefined') {
                return this.w;
            }
            this.w = width;
            width -= this.m[3] + this.m[1]
            this.x.range([0, width]);
            this.base.attr("width", width);
            this.redraw();
            return this;
        },

        height: function(height) {
            if (typeof height === 'undefined') {
                return this.h;
            }
            this.h = height;
            height -= this.m[0] + this.m[2]
            this.y.range([height, 0]);
            this.base.attr("height", this.h);
            this.redraw();
            return this;
        },

        transform: function(data) {
            data = data || [];
            this._data = data;
            this.y.domain([0, _.max(data)]);
            this.x.domain([0, data.length]);
            this.yLayer.call(this.yAxis);
            return data;
        },

        redraw: function() {
            this.draw(this._data);
        },

        margins: function(margins) {
            if (typeof margins === 'undefined') {
                return this.m;
            }
            this.m = margins;
            this.base.attr("transform", "translate(" + this.m[3] + "," + this.m[0] + ")");
            return this;
        }
    });
    return d3;
});
