# Browserify and TypeScript

I'm trying to get TypeScript to work in an existing browserify project with
[tsify](https://github.com/TypeStrong/tsify). I'm getting the following error:

```text
$ node browserify.js

events.js:154
      throw er; // Unhandled 'error' event
            ^
SyntaxError: 'import' and 'export' may appear only with 'sourceType: module'
```

Running `tsify` before `babelify` as suggested in [tsify's README](https://github.com/TypeStrong/tsify#syntaxerror-import-and-export-may-appear-only-with-sourcetype-module) didn't do anything for me.

To try and debug this issue I created a minimal project where a `main.js` imports
a `test.ts` file (trying to simulate the fact that I'm trying to add TypeScript
incrementally to an existing JavaScript project):

## main.js

```javascript
import TestClass from './test.ts'

console.log(new TestClass('John', 'Doe'))
```

## test.ts

```typescript
class TestClass {
  fullName: string
  constructor (firstName : string, lastName: string) {
    this.fullName = firstName + lastName
  }
}

export default TestClass
```

## browserify.js

```javascript
browserify('./src/main.js', { extensions: ['.ts'] })
  .plugin(tsify)
  .transform(babelify)
  .bundle()
  .pipe(process.stdout)
```

## .babelrc

```json
{
  "presets": ["es2015", "stage-2"]
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "module": "es6",
    "target": "es6",
    "sourceMap": true
  }
}
```
