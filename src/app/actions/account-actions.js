/**
 * Created by apple on 15/1/13.
 */
'use strict';

var Reflux = require('reflux'),
    APIAccountLogin = require('../services/APIAccountLogin'),
    AccountActions;


AccountActions = Reflux.createActions({
    'login': {children: ['completed', 'failed']},
    'logout': {children: ['completed', 'failed']},
    'updateUser': {children: ['completed', 'failed']},
    'updateUserPassword': {children: ['completed', 'failed']}
});


// 預設偵聽 Call API
AccountActions.login.listen(function (data) {
    var data = data;
    APIAccountLogin.load(data).then(this.completed, this.failed);
});

AccountActions.logout.listen(function (data) {
    var data = data;
    //APIAccountLogin.load(data).then(this.completed, this.failed);
});

AccountActions.updateUser.listen(function (data) {
    var data = data;
    //APIAccountLogin.load(data).then(this.completed, this.failed);
});

AccountActions.updateUserPassword.listen(function (data) {
    var data = data;
    //APIAccountLogin.load(data).then(this.completed, this.failed);
});


// Store 偵聽 AccountActions.login.completed
AccountActions.login.completed.listen(function (result, textStatus, request) {
    console.log(result);
});

// Store 偵聽 AccountActions.login.completed
AccountActions.login.failed.listen(function (result, textStatus, request) {
    console.log(result);
});


// 執行

AccountActions.login({
    companyName: 'Migo',
    serName: 'linli',
    password: '1234'
});

AccountActions.logout({
    companyName: 'Migo',
    serName: 'linli',
    password: '1234'
});

AccountActions.updateUser({
    companyName: 'Migo',
    serName: 'linli',
    password: '1234'
});

AccountActions.updateUserPassword({
    companyName: 'Migo',
    serName: 'linli',
    password: '1234'
});

module.exports = AccountActions;




