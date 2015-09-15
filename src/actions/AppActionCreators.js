var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../constants/AppConstants').actionTypes;

module.exports = {
    showHome: function() {
        AppDispatcher.dispatch({
            actionType: AppActions.SHOW_HOME
        });
    },
    showAbout: function() {
        AppDispatcher.dispatch({
            actionType: AppActions.SHOW_ABOUT
        });
    }
};