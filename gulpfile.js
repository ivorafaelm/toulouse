var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
    'jquery': './vendor/bower_components/jquery/',
    'bootstrap': './vendor/bower_components/bootstrap-sass/assets/',
    'onepagescroll': './vendor/bower_components/javascripts/onepagescroll/'
}

elixir(function(mix) {
    mix.sass("app.scss", 'public/css/', {includePaths: [paths.bootstrap + 'stylesheets/']})
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts')
        .copy(paths.onepagescroll + 'src/jquery.onepage-scroll.js', 'public/js')
        .copy(paths.onepagescroll + 'css/onepage-scroll.css', 'public/css')
        .scripts([
            paths.jquery + "dist/jquery.js",
            paths.bootstrap + "javascripts/bootstrap.js"
        ], 'public/js/app.js', './');
});