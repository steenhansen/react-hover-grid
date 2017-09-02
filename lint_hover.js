'use strict'

// gulp lint_hover

const debug = require('gulp-debug')
var gulp = require('gulp')
var eslint = require('gulp-eslint')
var gutil = require('gulp-util')
var start_text_color = 'bgRed'

var my_lint_dirs = [
  __dirname + '/*.js'
  , __dirname + '/jsx/*.jsx'
]

var lint_text = '                                          hover lint'

// NOTE for this to eslint file to work, .eslintignore must have this line
// !node_modules/*

gulp.task('lint_hover', function () {
  console.log(gutil.colors[start_text_color](lint_text))
  return gulp.src(my_lint_dirs)
          .pipe(eslint())
          .pipe(eslint.format())
          .pipe(debug({title: 'lint_HOVER_check:'}))
})


