/** @jsx React.DOM */

'use strict';

var React = require('react'),
    AccountActions = require('./actions/account-actions'),
    OverviewActions = require('./actions/overview-actions'),
    KPIActions = require('./actions/KPI-actions'),
    StoreActions = require('./actions/store-actions'),
    GroupActions = require('./actions/group-actions'),
    AccountLoginStore = require('./stores/AccountLoginStore'),
    ExampleApp;


ExampleApp = React.createClass({
    componentDidMount: function () {

        var that = this;

        //var resources = {
        //    'en-US': {
        //        translation: {
        //            'myString': 'Hello, World!' ,
        //            "nav": {
        //                "home": "Home",
        //                "page1": "Page One",
        //                "page2": "Page Two"
        //            }
        //    } },
        //    'fr-FR': {
        //        translation: {
        //            'myString': 'Bonjour tout le monde!',
        //            'anotherString': 'Bonjour!',
        //            "nav": {
        //                "home": "Home v111",
        //                "page1": "Page One  222",
        //                "page2": "Page Two"
        //            }
        //        }
        //    }
        //};

        //i18n.init({
        //    lng: 'fr-FR',
        //    fallbackLng: 'en-US',
        //    resStore: resources
        //});


        i18n.init({
            lng: 'en',
            supportedLngs: ['en', 'cn', 'tw'],
            preload: ['en', 'cn','tw']
        }, function (t) {
            console.log(t('app.name'));
            $(that.refs.nav.getDOMNode()).i18n();

        });

        i18n.init({lng: 'cn'});

    },
    switchEn: function (that) {
        var that = that;
        i18n.setLng('en', function (t) {
            $(that.refs.nav.getDOMNode()).i18n();
        });
        console.log('switchEn');

    },
    switchTW: function (that) {
        var that = that;
        i18n.setLng('tw', function (t) {
            $(that.refs.nav.getDOMNode()).i18n();
        });
        console.log('switchTW');
    },
    switchCn: function (that) {
        i18n.setLng('cn', function (t) {
            $(that.refs.nav.getDOMNode()).i18n();
        });
        console.log('switchCn');
    },
    render: function () {
        return (
            /*jshint ignore:start */
            <div>
                <h2>Hello, World</h2>
                <ul className="nav" ref="nav">
                    <li>
                        <a href="#" data-i18n="nav.home"></a>
                    </li>
                    <li>
                        <a href="#" data-i18n="nav.page1"></a>
                    </li>
                    <li>
                        <a href="#" data-i18n="nav.page2"></a>
                    </li>
                </ul>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default" onClick={this.switchEn.bind(null, this)}>英文</button>
                    <button type="button" className="btn btn-default" onClick={this.switchCn.bind(null, this)}>簡中</button>
                    <button type="button" className="btn btn-default" onClick={this.switchTW.bind(null, this)}>繁中</button>
                </div>

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
