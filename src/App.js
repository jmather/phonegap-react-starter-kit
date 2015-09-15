require('react-fastclick');

var React = require('react');
var AppStore = require('./store/AppStore');

var Nav = require('./Nav');

var HomeView = require('./views/Home');
var AboutView = require('./views/About');

function getState() {
    return {
        view: AppStore.getView()
    };
}

var App = React.createClass({
    getInitialState: function() {
        return getState();
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    /**
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function() {
        this.setState(getState());
    },

    render: function() {
        var Content = getViewClassForViewState(this.state.view);

        return (
            <body>
                <Nav.Header />
                <Nav.HeaderSecondary />
                <div className="content">
                    <Content />
                </div>
                <Nav.FooterSecondary />
                <Nav.Footer />
            </body>
        );
    }
});

/**
 *
 * @param {string} viewState
 * @returns {exports|module.exports}
 */
function getViewClassForViewState(viewState) {
    switch (viewState) {
        case 'home':
            return HomeView;
        case 'about':
            return AboutView;
        default:
            throw new Error("No view for " + viewState);
    }
}

module.exports = App;