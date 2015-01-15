/** @jsx React.DOM */

'use strict';

var React = require('react'),
    AccountActions = require('./actions/account-actions'),
    OverviewActions = require('./actions/overview-actions'),
    KPIActions = require('./actions/KPI-actions'),
    StoreActions = require('./actions/store-actions'),
    GroupActions = require('./actions/group-actions'),
    ExampleApp;




ExampleApp = React.createClass({
    componentDidMount:function(){


        var that=this;

        var resources = {
            'en-US': {
                translation: {
                    'myString': 'Hello, World!' ,
                    "nav": {
                        "home": "Home",
                        "page1": "Page One",
                        "page2": "Page Two"
                    }
            } },
            'fr-FR': {
                translation: {
                    'myString': 'Bonjour tout le monde!',
                    'anotherString': 'Bonjour!'
                }
            }
        };

        i18n.init({
            lng: 'fr-FR',
            fallbackLng: 'en-US',
            resStore: resources
        });

        $(that.refs.nav.getDOMNode()).i18n();

        console.log(i18n.t('myString'));








    },
    render: function () {
        return (
            /*jshint ignore:start */
            <div>
                <h2>Hello, World</h2>
                <ul class="nav" ref="nav">
                    <li><a href="#" data-i18n="nav.home"></a></li>
                    <li><a href="#" data-i18n="nav.page1"></a></li>
                    <li><a href="#" data-i18n="nav.page2"></a></li>
                </ul>
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);