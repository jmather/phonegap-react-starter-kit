var React = require('react');

var NavStore = require('../store/NavStore');

var About = React.createClass({
    componentDidMount: function() {
        NavStore.updateNav({headerCenter: 'About'});
    },

    render: function() {
        return (
            <div className="padded-view">
                <p>About</p>
            </div>
        );
    }
});

module.exports = About;