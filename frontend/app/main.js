
require.config({

    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'domReady': '../bower_components/requirejs-domready/domReady',
        'require': '../bower_components/requirejs/require',
        'angular-bootstrap-tpls':'../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'abn_tree_directive':'js/abn_tree_directive'




    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'abn_tree_directive':{
            deps: ['angular','angular-bootstrap-tpls'],
          exports:'angularBootstrapNavTree'
        },

       'angular-route': {
            deps: ['angular']
        },
        'angular-bootstrap-tpls':{
            deps: ['angular']
        }





    },

    deps: [
         './bootstrap'
    ]
});
