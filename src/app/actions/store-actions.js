/**
 * Created by apple on 15/1/14.
 */

'use strict';

var Reflux = require('reflux'),
    StoreActions;


StoreActions = Reflux.createActions({
    'getDate': {children: ['completed', 'failed']}
});

// 預設偵聽 Call API
StoreActions.getDate.listen(function (data) {
    var data = data;
    console.log('> StoreActions.getDate');
    //APIAccountLogin.load(data).then(this.completed, this.failed);
});


// Store 偵聽 KPIActions.getDate.completed
// Store 偵聽 KPIActions.getDate.failed
StoreActions.getDate.completed.listen(function (result, textStatus, request) {
    console.log(result);
});
StoreActions.getDate.failed.listen(function (qXHR, textStatus, errorThrown) {
    console.log(qXHR);
});


// 執行

StoreActions.getDate();


module.exports = StoreActions;
