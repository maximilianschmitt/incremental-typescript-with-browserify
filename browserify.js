'use strict'

const browserify = require('browserify')
const tsify = require('tsify')
const babelify = require('babelify')

browserify('./src/main.js')
  .plugin(tsify)
  .transform(babelify, { allowJs: true, extensions: ['.ts'] })
  .bundle()
  .pipe(process.stdout)
