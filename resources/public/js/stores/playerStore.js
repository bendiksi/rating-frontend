var AppDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var PlayerConstants = require('../constants/playerConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _players = [];


var PlayerStore = assign({}, EventEmitter.prototype, {

    getAll: function() {
        return _players;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherIndex: AppDispatcher.register(function(action) {
        switch(action.actionType) {
            case PlayerConstants.PLAYERS_UPDATED:
                _players = action.players;
                PlayerStore.emitChange();
                break;

            case PlayerConstants.TODO_DESTROY:
                //destroy(action.id);
                PlayerStore.emitChange();
                break;
        }

        return true; // No errors. Needed by promise in Dispatcher.
    })

});

module.exports = PlayerStore;