
import '/node_modules/backbone';
import * as html from './bio-grapy.component.pug';
export default Backbone.View.extend({
    initialize: function() {
        this.el='bio-grapy';
        this.render();
    },
    render: function() {
        this.$el.html(html);
    }
});