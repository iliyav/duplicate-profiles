var allTestFiles = [
    'jst'
];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function (path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
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

    shim: {
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

    map:      {
        '*': {
            'core':   'vendor/jquery-ui/core',
            'mouse':  'vendor/jquery-ui/mouse',
            'widget': 'vendor/jquery-ui/widget'
        }
    },

    // dynamically load all test files
    deps:     allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
