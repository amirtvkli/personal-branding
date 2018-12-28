var { View } = require('backbone');
var html = require('./bio-grapy.component.pug');
module.exports = View.extend({
    initialize: function() {
        this.render();
    },
    
    render: function() {
        this.$el.html(html);
    }
});