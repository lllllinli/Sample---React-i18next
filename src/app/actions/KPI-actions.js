/**
 * Created by apple on 15/1/14.
 */

'use strict';

var Reflux = require('reflux'),
    KPIActions;


KPIActions = Reflux.createActions({
    'getDate': {children: ['completed', 'failed']}
});

// 預設偵聽 Call API
KPIActions.getDate.listen(function (data) {
    var data = data;
    console.log('> KPIActions.getDate');
    //APIAccountLogin.load(data).then(this.completed, this.failed);
});


// Store 偵聽 KPIActions.getDate.completed
// Store 偵聽 KPIActions.getDate.failed
KPIActions.getDate.completed.listen(function (result, textStatus, request) {
    console.log(result);
});
KPIActions.getDate.failed.listen(function (qXHR, textStatus, errorThrown) {
    console.log(qXHR);
});


// 執行

KPIActions.getDate();


module.exports = KPIActions;
