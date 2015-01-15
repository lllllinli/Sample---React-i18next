/**
 * Created by apple on 15/1/14.
 */
'use strict';


var Reflux = require('reflux'),
    AccountLoginStore;

AccountLoginStore = Reflux.createStore({
    init: function () {
        var that = this;
        that.data={};

    }
});
