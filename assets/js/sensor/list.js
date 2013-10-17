define(['backbone', 'lodash', './collection', './item'], function(Backbone, _, Collection, Item) {
    return Backbone.View.extend({

        items: null,

        initialize: function(options) {
            _.bindAll(this);
            this.items = {};
            this.collection = new Collection();
            this.listenTo(this.collection, {
                add: this.loadItem
            });
        },

        loadItem: function(model) {
            this.renderItem(model);
            model.fetch();
        },

        renderItem: function(model) {
            this.items[model.id] = new Item({
                model: model
            }).render();
            this.$el.append(this.items[model.id].el);
        }
    });
});
