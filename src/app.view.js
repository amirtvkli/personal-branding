var {View} = require('backbone');
module.exports = View.extend({
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(`
        <div class="container"> 
            <div class="row">
                <div class="col-sm-10">
                    <h3>Amir Tavaoli</h3>
                    <h5>Front-End Developer</h5>
                    I'm a front-end developer in love with UI-UX design.
                </div>
                <div class="col-sm-2">
                    here
                </div>
            </div>
        </div>` 
        );
    }
});