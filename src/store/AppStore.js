var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('underscore');

var NavStore = require('./NavStore');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../constants/AppConstants').actionTypes;

var CHANGE_EVENT = 'change';

/**
 * @exports AppStore
 */
var AppStore = assign({}, EventEmitter.prototype, {
    view: 'home',

    getView: function() {
        return this.view;
    },

    setView: function(view) {
        this.view = view;
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

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case AppActions.SHOW_HOME:
            AppStore.setView('home');
            break;
        case AppActions.SHOW_ABOUT:
            AppStore.setView('about');
            break;
        default:
        // no op
    }
});

module.exports = AppStore;