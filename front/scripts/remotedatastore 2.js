(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function RemoteDataStore(url) {
    if (!url) {
    throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function (key, val) {
        $.post(this.serverUrl, val, function (serverResponse) {
        console.log(JSON.stringify(serverResponse));
        });
        };



    RemoteDataStore.prototype.getAll = function (cb) {
        // Code will go here
        $.get(this.serverUrl, function (serverResponse) {
        console.log(JSON.stringify(serverResponse));
        cb(serverResponse);
        });
        };


    RemoteDataStore.prototype.get = function (key, cb) {
        $.get(this.serverUrl + '/' + key, function (serverResponse) {
        console.log(JSON.stringify(serverResponse));
        cb(serverResponse);
        });
        };


    RemoteDataStore.prototype.remove = function (key) {
        $.ajax(this.serverUrl + '/' + key, {
        type: 'DELETE'
        });
        };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);