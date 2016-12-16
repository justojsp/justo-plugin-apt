//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const op = require("../../../dist/es5/nodejs/justo-plugin-apt/lib/install").default;

//suite
suite("#op()", function() {
  test("install({name})", function() {
    op([{name: "sysvbanner"}]).must.be.eq(0);
  });

  test("install({names : string[]})", function() {
    op([{names: ["sysvbanner"]}]).must.be.eq(0);
  });

  test("install({names : string})", function() {
    op([{names: "sysvbanner"}]).must.be.eq(0);
  });

  test("install({names, reinstall})", function() {
    op([{names: ["sysvbanner"], reinstall: true}]).must.be.eq(0);
  });

  test("install({names, reinstall, output})", function(console) {
    op([{names: ["sysvbanner"], reinstall: true, output: true}], console).must.be.eq(0);
  });
})();
