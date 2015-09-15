var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('underscore');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var CHANGE_EVENT = 'change';

var defaults = {
    title: null,
    header: null,
    headerLeft: null,
    headerRight: null,
    headerCenter: AppConstants.title,
    headerSecondary: null,
    footer: null,
    footerLeft: null,
    footerRight: null,
    footerCenter: null,
    footerSecondary: null
};

var nav = assign({}, defaults);

/**
 * @exports NavStore
 */
var NavStore = assign({}, EventEmitter.prototype, {

    getNav: function() {
        return nav;
    },

    setNav: function(newNav) {
        var resolvedNav = {};

        _.defaults(resolvedNav, newNav, defaults);

        nav = resolvedNav;

        this.emitChange();
    },

    updateNav: function(newNav) {
        _.mapObject(newNav, function(val, key) {
            nav[key] = val;
        });

        this.emitChange();
    },

    /**
     *
     */
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

module.exports = NavStore;