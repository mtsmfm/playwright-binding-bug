```
$ npm install
$ node foo.mjs
Error: Function "hello" is not exposed
    at PageBinding.dispatch (/home/mtsmfm/ghq/github.com/mtsmfm/playwright-binding-bug/node_modules/playwright-core/lib/server/page.js:658:27)
    at Page._onBindingCalled (/home/mtsmfm/ghq/github.com/mtsmfm/playwright-binding-bug/node_modules/playwright-core/lib/server/page.js:232:23)
    at FrameSession._onBindingCalled (/home/mtsmfm/ghq/github.com/mtsmfm/playwright-binding-bug/node_modules/playwright-core/lib/server/chromium/crPage.js:704:37)
...
```
