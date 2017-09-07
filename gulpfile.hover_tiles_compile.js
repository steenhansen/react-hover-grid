'use strict'

// gulp hover_tiles_compile

require('babel-core/register')
const env = require('node-env-file')
const gulp = require('gulp')
const babel = require('gulp-babel')
const gutil = require('gulp-util')
const error_text_color = 'bgRed'
const start_text_color = 'bgGreen'
const debug = require('gulp-debug')
const moment = require('moment')
var unassert = require('gulp-unassert')

env('./.env')  // N.B. This defines process.env.NODE_ENV

const jsx_text = '1 hover_tiles_compile JSX ---- '

function handleError(level, error) {
  console.log(gutil.colors[error_text_color](error.message))
  process.exit(1)
}
function onError(error) { handleError.call(this, 'error', error)}

function jsx_to_js_1() {
  const jsx_source = __dirname + '/jsx/*.jsx'
  const js_dest = __dirname +'/js'
  return gulp.src(jsx_source)
          .on('error', onError)
          .pipe(babel({presets: ['es2015', "stage-2"]}))
          .pipe(gulp.dest(js_dest))
          .pipe(debug({title: 'hover_tiles_compile jsx:'}))
}

function remove_asserts_2() {
  const js_source = __dirname +'/js/*.js'
  const js_dest = __dirname +'/js'
  if (process.env.NODE_ENV ==='development'){
    unassert = require('gulp-empty-pipe')
  }
  return gulp.src(js_source)
          .on('error', onError)
          .pipe(unassert())
          .pipe(gulp.dest(js_dest))
          .pipe(debug({title: 'hover_tiles_compile unAssert:'}))
}

function fini_message_3(cb) {
  const hh_mm_ss = moment().format('hh:mm:ss')
  console.log(gutil.colors[start_text_color](jsx_text + hh_mm_ss))
  cb()
}

gulp.task('hover_tiles_compile', gulp.series( jsx_to_js_1, remove_asserts_2, fini_message_3))


