'use strict'
const path = require('path')
const gulp = require('gulp')
const less = require('gulp-less')
const gif = require('gulp-if')
const typescript = require('gulp-typescript')
const rename = require('gulp-rename')
const del = require('del')
const watch = require('gulp-watch')
const sourcemaps = require('gulp-sourcemaps')
const src = 'assets'
const tscConfig = require(path.join(process.cwd(), src,'tsconfig.json'))
const dest = './.tmp/public'

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compile', 'less', 'copyLibs', 'copyAssets', 'watch'],
    production: ['clean'],

    clean: () => {
      return del(dest)
    },
    watch: () => {
      const tscSource = path.join(src, 'app', '**', '*')
      return gulp.watch(tscSource, ['compile', 'copyLibs', 'copyAssets'])
    },
    compile: {
      dependsOf: ['clean'],
      task: () => {
        const tscSource = path.join(src, 'app', '**', '*.ts')
        return gulp
          .src(tscSource)
          .pipe(sourcemaps.init())          // <--- sourcemaps
          .pipe(typescript(tscConfig.compilerOptions))
          .pipe(sourcemaps.write('.'))      // <--- sourcemaps
          .pipe(gulp.dest(path.join(dest, 'app')))
      }
    },
    less: {
      dependsOf: ['clean'],
      task: () => {
        const lessSource = path.join(src, 'less', '*.less')
        return gulp
          .src(lessSource)
          .pipe(sourcemaps.init())
          .pipe(less())
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest(path.join(dest, 'styles')))
      }
    },
    copyLibs: {
      dependsOf: ['clean'],
      task: () => {
        var libs = {
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          'systemjs': 'node_modules/systemjs/dist/system.js',
          'rxjs': 'node_modules/rxjs/**/*.js',
          'shimjs': 'node_modules/core-js/client/shim.min.js',
          'zonejs': 'node_modules/zone.js/dist/zone.js',
          'reflectjs': 'node_modules/reflect-metadata/Reflect.js',
          'core': 'node_modules/@angular/core/bundles/core.umd.min.js',
          'common': 'node_modules/@angular/common/bundles/common.umd.min.js',
          'compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.min.js',
          'forms': 'node_modules/@angular/forms/bundles/forms.umd.min.js',
          'http': 'node_modules/@angular/http/bundles/http.umd.min.js',
          'platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js',
          'platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
          'router': 'node_modules/@angular/router/bundles/router.umd.min.js',
          'router-deprecated': 'node_modules/@angular/router-deprecated/bundles/router-deprecated.umd.min.js',
          'upgrade': 'node_modules/@angular/upgrade/bundles/upgrade.umd.min.js'
        }

        for (var destinationDir in libs) {
          gulp.src(path.join(libs[destinationDir]))
            .pipe(gulp.dest(path.join(dest, 'lib', destinationDir)))
        }
      }
    },
    copyAssets : {
      dependsOf: ['clean'],
      task: () => {
        return gulp.src([
            path.join(src, 'app', '**', '*'), 
            path.join(src, 'index.html'), 
            path.join(src, '*.css'), 
            path.join('!app', '**', '*.ts')], 
            { base : src })
          .pipe(gulp.dest(dest))
      }
    }

  }
}