/**
 * Created by apple on 15/1/14.
 */
'use strict';

var Reflux = require('reflux'),
    FilterActions;


FilterActions = Reflux.createActions({
    'storeCategory': {children: ['completed', 'failed']},
    'storeDimension': {children: ['completed', 'failed']},
    'groupDimension': {children: ['completed', 'failed']}
});

FilterActions.storeCategory.listen(function(){
    console.log();
});
FilterActions.storeDimension.listen(function(){});
FilterActions.groupDimension.listen(function(){});



module.exports = FilterActions;
