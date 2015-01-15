/**
 * Created by apple on 15/1/14.
 */
'use strict';

var Reflux = require('reflux'),
    GroupActions;


GroupActions = Reflux.createActions({
    'getDate': {children: ['completed', 'failed']}
});

// 預設偵聽 Call API
GroupActions.getDate.listen(function (data) {
    var data = data;
    console.log('> GroupActions.getDate');
    //APIAccountLogin.load(data).then(this.completed, this.failed);
});


// Store 偵聽 GroupActions.getDate.completed
// Store 偵聽 GroupActions.getDate.failed
GroupActions.getDate.completed.listen(function (result, textStatus, request) {
    console.log(result);
});
GroupActions.getDate.failed.listen(function (qXHR, textStatus, errorThrown) {
    console.log(qXHR);
});


// 執行

GroupActions.getDate();


module.exports = GroupActions;
