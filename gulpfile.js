var gulp = require('gulp'),
    concat = require('gulp-concat'),
    install = require("gulp-install"),
    jsHint = require('gulp-jshint'),
    karma = require('karma').server,
    livereload = require('gulp-livereload'),
    phpunit = require('gulp-phpunit'),
    template = require('gulp-template-compile'),
    exec = require('child_process').exec,
    argv = require('yargs').argv;

gulp.task('js-dep', function () {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(install());
});

gulp.task('jshint', function () {
    return gulp.src([
            'web/app/specs/**/*.js',
            '!web/app/specs/test-main.js',
            'web/app/src/**/*.js',
            '!web/app/src/templates.js'
        ])
        .pipe(jsHint())
        .pipe(jsHint.reporter('default'));
});

gulp.task('phpunit', function () {
    var options = {debug: false, configurationFile: './app'};

    return gulp.src('./src/**/Tests/**/*.php')
        .pipe(phpunit('./bin/phpunit', options));
});

gulp.task('copy', ['js-dep'], function () {
    // backbone
    gulp.src('bower_components/backbone/backbone.js')
        .pipe(gulp.dest('web/app/vendor/backbone'));

    // backbone.stickit
    gulp.src('bower_components/backbone.stickit/backbone.stickit.js')
        .pipe(gulp.dest('web/app/vendor/backbone.stickit'));

    // backbone-validation
    gulp.src('bower_components/backbone-validation/dist/backbone-validation-amd.js')
        .pipe(gulp.dest('web/app/vendor/backbone-validation'));

    // bootstrap
    gulp.src([
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/bootstrap/dist/css/bootstrap.css.map'
        ])
        .pipe(gulp.dest('web/app/vendor/bootstrap/css'));
    gulp.src('bower_components/bootstrap/dist/fonts/*')
        .pipe(gulp.dest('web/app/vendor/bootstrap/fonts'));
    gulp.src('bower_components/bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest('web/app/vendor/bootstrap/js'));

    // jquery
    gulp.src('bower_components/jquery/dist/jquery.js')
        .pipe(gulp.dest('web/app/vendor/jquery'));

    // jquery-ui
    gulp.src([
            'bower_components/jquery-ui/ui/core.js',
            'bower_components/jquery-ui/ui/mouse.js',
            'bower_components/jquery-ui/ui/sortable.js',
            'bower_components/jquery-ui/ui/widget.js'
        ])
        .pipe(gulp.dest('web/app/vendor/jquery-ui'));

    // marionette
    gulp.src('bower_components/marionette/lib/backbone.marionette.js')
        .pipe(gulp.dest('web/app/vendor/marionette'));

    // requirejs
    gulp.src('bower_components/requirejs/require.js')
        .pipe(gulp.dest('web/app/vendor/requirejs'));

    // spin.js
    gulp.src([
            'bower_components/spin.js/jquery.spin.js',
            'bower_components/spin.js/spin.js'
        ])
        .pipe(gulp.dest('web/app/vendor/spin'));

    // underscore
    gulp.src('bower_components/underscore/underscore.js')
        .pipe(gulp.dest('web/app/vendor/underscore'));
});

gulp.task('karma', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun:  true
    }, done);
});

gulp.task('jst', function () {
    gulp.src('web/app/src/**/*.html')
        .pipe(template({
            name: function (file) {
                return file.relative
                    .replace(/modules\//g, '')
                    .replace(/templates\//g, '')
                    .replace(/\.html$/, '');
            }
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('web/app/src'));
});

gulp.task('rjs', ['copy', 'jst'], function (cb) {
    var env = argv.env ? argv.env : 'dev',
        cmd = [
            'php app/console cache:clear --env=' + env,
            'php app/console assets_version:increment --env=' + env,
            'php app/console assetic:dump --env=' + env
        ];

    exec(cmd.join(' && '), function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('web/app/src/**/*.js').on('change', livereload.changed);
    gulp.watch(['web/app/src/**/*.js', '!web/app/src/templates.js'], ['jshint']);
    gulp.watch(['web/app/src/**/templates/*.html'], ['jst']);
});

gulp.task('test', ['jshint', 'karma', 'phpunit']);
gulp.task('build', ['rjs']);
gulp.task('default', ['build']);
