//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const op = require("../../../dist/es5/nodejs/justo-plugin-apt/lib/update").default;

//suite
suite("#op()", function() {
  test("update()", function() {
    op([]).must.be.eq(0);
  });

  test("update({})", function() {
    op([{}]).must.be.eq(0);
  });

  test("update({output: true})", function(console) {
    op([{output: true}], console).must.be.eq(0);
  });
})();
