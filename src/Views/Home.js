var React = require('react');

var AppActionCreators = require('../actions/AppActionCreators');
var AppConstants = require('../constants/AppConstants');

var NavStore = require('../store/NavStore');
var Nav = require('../Nav');

var Home = React.createClass({
    about: function() {
        AppActionCreators.showAbout();
    },

    returnToMainMenu: function() {
        AppActionCreators.showHome();
    },

    componentDidMount: function() {
        NavStore.updateNav({headerLeft: null, headerCenter: AppConstants.title});
    },

    componentWillUnmount: function() {
        NavStore.updateNav({headerLeft: <Nav.HeaderLeft onClick={this.returnToMainMenu}>Main Menu</Nav.HeaderLeft>});
    },

    render: function() {
        return (
            <div className="padded-view">
                <h1>Home</h1>
                <div className="card">
                    <ul className="table-view">
                        <li className="table-view-cell">
                            About
                            <button className="btn btn-primary" onClick={this.about}>Go</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Home;