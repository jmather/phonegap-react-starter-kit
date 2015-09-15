var keyMirror = require('keymirror');

module.exports = {
    title: 'My App',
    actionTypes: keyMirror({
        SHOW_HOME: null,
        SHOW_ABOUT: null
    })
};
