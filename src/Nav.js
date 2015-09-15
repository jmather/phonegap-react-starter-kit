var React = require('react');
var _ = require('underscore');

var NavStore = require('./store/NavStore');

function getState() {
    return NavStore.getNav();
}

var Nav = {};

Nav.Header = React.createClass({
    getInitialState: function() {
        return getState();
    },

    componentDidMount: function() {
        NavStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        NavStore.removeChangeListener(this._onChange);
    },

    /**
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function() {
        this.setState(getState());
    },
    render: function() {
        var views = {
            header: null,
            headerCenter: 'Tic-Tacky',
            headerLeft: null,
            headerRight: null
        };

        _.mapObject(this.state, function(val, key) {
            if (val) {
                views[key] = val;
            }
        });

        if (views.header === null) {
            views.header = <h1 className="title">{views.headerCenter}</h1>;
        }

        return (
            <header className="bar bar-nav">
                {views.headerLeft}
                {views.headerRight}
                {views.header}
            </header>
        )
    }
});

Nav.Footer = React.createClass({
    getInitialState: function() {
        return getState();
    },

    componentDidMount: function() {
        NavStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        NavStore.removeChangeListener(this._onChange);
    },

    /**
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function() {
        this.setState(getState());
    },
    render: function() {
        var views = {
            footer: null,
            footerLeft: null,
            footerRight: null,
            footerCenter: null
        };

        _.mapObject(this.state, function(val, key) {
            if (val) {
                views[key] = val;
            }
        });

        var Footer = React.createClass({
            render: function() {
                return <div className="bar bar-footer">{this.props.children}</div>;
            }
        });

        if (views.footer === null && (views.footerLeft || views.footerRight || views.footerCenter)) {
            views.footer = (<Footer>
                {views.footerLeft}
                {views.footerRight}
                {views.footerCenter}
            </Footer>);
        }

        if (views.footer) {
            return <Footer>{views.footer}</Footer>
        }

        return null;
    }
});

Nav.HeaderSecondary = React.createClass({
    getInitialState: function() {
        return getState();
    },
    componentDidMount: function() {
        NavStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        NavStore.removeChangeListener(this._onChange);
    },

    /**
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function() {
        this.setState(getState());
    },
    render: function() {
        if (this.state.headerSecondary === null) {
            return null;
        }

        return (
            <div className="bar bar-standard bar-header-secondary">
                {this.state.headerSecondary}
            </div>
        );
    }
});

Nav.FooterSecondary = React.createClass({
    getInitialState: function() {
        return getState();
    },
    componentDidMount: function() {
        NavStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        NavStore.removeChangeListener(this._onChange);
    },

    /**
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function() {
        this.setState(getState());
    },
    render: function() {
        if (this.state.footerSecondary === null) {
            return null;
        }

        return (
            <div className="bar bar-standard bar-footer-secondary">
                {this.state.footerSecondary}
            </div>
        );
    }
});

var Footer = React.createClass({
    componentDidMount: function() {
        NavStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        NavStore.removeChangeListener(this._onChange);
    },

    /**
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function() {
        this.setState(getState());
    },
    render: function() {
        if (this.props.children === undefined) {
            return null;
        }

        return (
            <nav className="bar bar-standard bar-footer">
                {this.props.children}
            </nav>
        );
    }
});

Nav.HeaderLeft = React.createClass({
    render: function() {
        return (
            <button onClick={this.props.onClick} className="btn btn-link btn-nav pull-left">
                <span className="icon icon-left-nav"></span>
                {this.props.children}
            </button>
        );
    }
});

module.exports = Nav;