/**
 * Created by apple on 15/1/14.
 */
'use strict';

var Reflux = require('reflux'),
    TAActions;


TAActions = Reflux.createActions({
    'getDate': {children: ['completed', 'failed']}
});




module.exports = TAActions;
