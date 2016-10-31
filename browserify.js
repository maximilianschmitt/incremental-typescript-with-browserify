'use strict'

const browserify = require('browserify')
const tsify = require('tsify')
const babelify = require('babelify')

browserify('./src/main.js', { extensions: ['.ts'] })
  .plugin(tsify)
  .transform(babelify)
  .bundle()
  .pipe(process.stdout)
