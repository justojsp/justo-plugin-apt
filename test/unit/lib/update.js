//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-apt/lib/update").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";

  test("update()", function() {
    op([]).must.be.eq(0);
  });

  test("update({})", function() {
    op([{}]).must.be.eq(0);
  });

  test("update({output: true})", function() {
    op([{output: true}]).must.be.eq(0);
  });
})();
