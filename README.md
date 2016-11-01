# Incremental TypeScript with Browserify

Here is a simple setup to incrementally add TypeScript to your browserify project.

## 1. Install `tsify` and `typescript`

```bash
npm i tsify typescript -D
```

## 2. Add `tsify` as a *plugin* to your browserify configuration

```javascript
'use strict'

const browserify = require('browserify')
const tsify = require('tsify')
const babelify = require('babelify')

browserify('./src/main.js')
  .plugin(tsify)
  .transform(babelify)
  .bundle()
  .pipe(process.stdout)
```

## 3. Configure TypeScript

```json
{
  "compilerOptions": {
    "allowJs": true,
    "module": "commonjs",
    "target": "es6",
    "sourceMap": true
  }
}
```
