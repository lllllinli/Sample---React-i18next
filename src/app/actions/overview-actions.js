/**
 * Created by apple on 15/1/14.
 */

'use strict';

var Reflux = require('reflux'),
    OverviewActions;


OverviewActions = Reflux.createActions({
    'getDate': {children: ['completed', 'failed']}
});

// 預設偵聽 Call API
OverviewActions.getDate.listen(function (data) {
    var data = data;
    console.log('> OverviewActions.getDate');
    //APIAccountLogin.load(data).then(this.completed, this.failed);
});


// Store 偵聽 OverviewActions.getDate.completed
// Store 偵聽 OverviewActions.getDate.failed
OverviewActions.getDate.completed.listen(function (result, textStatus, request) {
    console.log(result);
});
OverviewActions.getDate.failed.listen(function (qXHR, textStatus, errorThrown) {
    console.log(qXHR);
});


// 執行

OverviewActions.getDate();


module.exports = OverviewActions;

