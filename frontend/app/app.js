
define(['angular','google-maps','angular-route','angular-bootstrap-tpls','./controllers/index','./services/index','./directives/index','abn_tree_directive','lodash'], function (angular) {
    'use strict';
    return angular.module('app',['app.controllers','app.directives','app.services','ngRoute','ui.bootstrap','angularBootstrapNavTree','google-maps'.ns()]);
});
