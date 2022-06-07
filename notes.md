# Mocha & Chai

In the project directory we can use the command
```js
> npm install mocha chai --save-dev
```
to kick things off.

Then we can make a folder in the project directory which should be called test.
if we wish to test the file tail.js, then the test directory might have a file like this:

### Example Test
```js
const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should have such and such behaviour", () => {
    let whatTailShouldDo = 'foo';
    let whatTailActuallyDoes = tail('bar');
    assert.deepEqual(whatTailShouldDo, whatTailActuallyDoes);
  });
  it("should have some other behaviour", () => {
    // verify some other behaviour
  });
});
```
In this example we used chai's `assert`, which comes with tons of methods like `assert.notEqual`, `assert.isUndefined`, and many [more](https://www.chaijs.com/api/assert/).
Chai also offers the alternative BDD styles [Expect and Should](https://www.chaijs.com/api/bdd/) which you should explore! For now, `assert` will suffice.

The functions `describe` and `it` come from Mocha. Each `it` is a test, and the assertion therein is coming from Chai's `assert`.
