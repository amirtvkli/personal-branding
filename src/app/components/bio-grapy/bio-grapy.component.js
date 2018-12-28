const $ = require('jquery');
var { View } = require('backbone');
var html = require('./bio-grapy.component.pug');
module.exports = View.extend({
    initialize: function() {
        this.el='bio-grapy';
        this.render();
        this.changeTitle();
    },
    render: function() {
        this.$el.html(html);
    },
    changeTitle: function () {
        $('#title-san').html('here');
    }
});