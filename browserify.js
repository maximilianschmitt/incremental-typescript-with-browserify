'use strict'

const browserify = require('browserify')
const tsify = require('tsify')
const babelify = require('babelify')

browserify('./src/main.js')
  .plugin(tsify)
  .transform(babelify)
  .bundle()
  .pipe(process.stdout)
