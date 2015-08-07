requirejs.config({
    baseUrl: 'app',
    paths:   {
        'backbone':              'vendor/backbone/backbone',
        'backbone.stickit':      'vendor/backbone.stickit/backbone.stickit',
        'backbone-validation':   'vendor/backbone-validation/backbone-validation-amd',
        'bootstrap':             'vendor/bootstrap/js/bootstrap',
        'jquery':                'vendor/jquery/jquery',
        'jquery-ui':             'vendor/jquery-ui',
        'jst':                   'src/templates',
        'marionette':            'vendor/marionette/backbone.marionette',
        'spin':                  'vendor/spin/spin',
        'jquery.spin':           'vendor/spin/jquery.spin',
        'underscore':            'vendor/underscore/underscore'
    },
    shim:    {
        'backbone':         {
            deps:    ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'bootstrap':        {
            deps: ['jquery']
        },
        'marionette':       {
            deps:    ['backbone'],
            exports: 'Marionette'
        },
        'jst':              {
            exports: 'JST'
        },
        'underscore':       {
            exports: '_'
        }
    },
    map:     {
        'jquery-ui/sortable': {
            'core':   'vendor/jquery-ui/core',
            'mouse':  'vendor/jquery-ui/mouse',
            'widget': 'vendor/jquery-ui/widget'
        }
    },
    deps:    [
        'jst'
    ]
});

require([
    'src/app',
    'src/config'
], function (App, config) {
    App.start(config);
});
