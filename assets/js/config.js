requirejs = {
    baseUrl: '/js/',
    paths: {
        underscore: 'lodash'
    },
    shim: {
        d3: {
            exports: 'd3'
        },
        'd3.chart': {
            deps: ['d3'],
            exports: 'd3.chart'
        },
        backbone: {
            deps: ['lodash', 'jquery'],
            exports: 'Backbone'
        }
    }
};
