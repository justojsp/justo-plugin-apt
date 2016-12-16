//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const op = require("../../../dist/es5/nodejs/justo-plugin-apt/lib/available").default;

//suite
suite("#op()", function() {
  test("available({}) : false", function() {
    op([{}]).must.be.eq(false);
  });

  test("available({names: []}) : false", function() {
    op([{names: []}]).must.be.eq(false);
  });

  test("available({name}) : true", function() {
    op([{name: "bash"}]).must.be.eq(true);
  });

  test("available({name}) : false", function() {
    op([{name: "banner"}]).must.be.eq(false);
  });

  test("available({names}) : true", function() {
    op([{names: ["bash", "bash-builtins"]}]).must.be.eq(true);
  });

  test("available({names}) : false", function() {
    op([{names: ["bash", "banner"]}]).must.be.eq(false);
  });
})();
