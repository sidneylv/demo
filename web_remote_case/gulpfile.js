/**
 * @fileoverview
 * @author javey
 * @date 14-12-23
 */

var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    // imerge = require('gulp-imerge'),
    Promise = require('bluebird'),
    rimraf = Promise.promisify(require('rimraf')),
    tap = require('gulp-tap'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    nobone = require('nobone'),
    path = require('path'),
    documentWrite = require('gulp-document-write'),
    _ = nobone.kit.require('lodash'),
    nocache = require('gulp-nocache');
    //nocache = require('../../gulp-nocache/src/index');

process.env.NODE_ENV = 'develop';

var staticPath = './src/static',
    paths = {
        css: staticPath + '/css/**/*.@(css|styl)',
        //css: staticPath + '/css/core/common.styl',
        js: staticPath + '/js/**/*.@(js|jst)',
        //js: staticPath + '/js/**/*.js',
        image: staticPath + '/image/**/*',
        sprite: staticPath + '/image/sprite/**/*.png',
        tpl: './src/view/**/*.html',
        //tpl: './src/view/console/component/pagination/pagination.vm',
        staticDest: './dist',
        tplDest: '../dist'            
    },
    nocacheConf = {
        sourceContext: 'src',
        outputContext: '../webapp'
    };

// 清理所有编译文件
gulp.task('clean', function() {
    return Promise.all([
        rimraf(paths.staticDest),
        rimraf(paths.tplDest + '/view'),
        rimraf(staticPath + '/image/sprite')
    ])
});

gulp.task('build:media', ['clean'], function() {
    return gulp.src(paths.image)
        // .pipe(nocache(_.extend({
        //     type: 'media',
        //     dest: paths.staticDest + (process.env.NODE_ENV === 'development' ? '/i/[name].[hash:6].[ext]' : '/i/[hash:8].[ext]')
        // }, nocacheConf)))
        .pipe(gulp.dest(paths.staticDest + '/static/image'));
});

gulp.task('build:css', ['build:media'], function() {
    // 由于合图过程中，又生成了图片，所以需要对新图片做nocache
    var nocacheSprite = _.once(function() {
        return gulp.src(paths.sprite)
            .pipe(nocache(_.extend({
                type: 'media',
                dest: paths.staticDest + (process.env.NODE_ENV === 'development' ? '/i/[name].[hash:6].[ext]' : '/i/[hash:8].[ext]')
            }, nocacheConf)))
            .pipe(gulp.dest(function(file) {return file.base}))
    });
    return gulp.src(paths.css)
        .pipe(stylus())
        // .pipe(imerge({
        //     spriteTo: staticPath + '/image/sprite',
        //     sourceContext: 'src',
        //     outputContext: 'src',
        //     defaults: {
        //         padding: 5
        //     }
        // }))
        // .pipe(tap(nocacheSprite))
        // .pipe(nocache(_.extend({
        //     type: 'css',
        //     dest: paths.staticDest + (process.env.NODE_ENV === 'development' ? '/c/[name].[hash:6].[ext]' : '/c/[hash:8].[ext]')
        // }, nocacheConf)))
        //.pipe(minifyCss({ compatibility: 'ie7' }))
        .pipe(gulp.dest(paths.staticDest + '/static/css'));
});

gulp.task('build:js', ['build:media'], function() {
    return gulp.src(paths.js)
        // .pipe(tap(function(file) {
        //     // for debug
        //     //console.log(file.path)
        //     if (path.extname(file.path) === '.jst') {
        //         file.contents = new Buffer('define(function() {\n return ' + _.template(file.contents.toString(), null).source + '\n})')
        //     }
        //     file.path = file.path.replace(/\.jst$/, '.js');
        // }))
        // .pipe(documentWrite({ context: nocacheConf.sourceContext }))
        .pipe(uglify())
        // .pipe(nocache(_.extend({
        //     type: 'js',
        //     dest: paths.staticDest + (process.env.NODE_ENV === 'development' ? '/j/[name].[hash:6].[ext]' : '/j/[hash:8].[ext]')
        // }, nocacheConf)))
        .pipe(gulp.dest(paths.staticDest + '/static/js'));
});

gulp.task('build:tpl', ['clean'], function() {
    return gulp.src(paths.tpl)
        // .pipe(nocache(_.extend({
        //     type: 'media',
        //     dest: paths.staticDest + (process.env.NODE_ENV === 'development' ? '/i/[name].[hash:6].[ext]' : '/i/[hash:8].[ext]')
        // }, nocacheConf)))
        .pipe(gulp.dest(paths.staticDest + '/view'));
});

gulp.task('build', ['build:media', 'build:css', 'build:js', 'build:tpl']);

var port = 3000;

gulp.task('server', function() {
    var nb = nobone({
        proxy: {},
        renderer: {},
        service: {}
    });

    nb.service.listen(port, function() {
        nb.kit.log('listen port ' + port);
        //nb.kit.open('http://localhost:' + port + '/view/index.html');
    });

    nb.service.use(nb.renderer.static('dist'));
});

gulp.task('default', ['server']);