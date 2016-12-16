//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const op = require("../../../dist/es5/nodejs/justo-plugin-apt/lib/remove").default;

//suite
suite("#op()", function() {
  test("uninstall({name})", function() {
    op([{name: "sysvbanner"}]).must.be.eq(0);
  });

  test("uninstall({names : string[]})", function() {
    op([{names: ["sysvbanner"]}]).must.be.eq(0);
  });

  test("uninstall({names : string})", function() {
    op([{names: "sysvbanner"}]).must.be.eq(0);
  });

  test("uninstall({name, purge, output})", function(console) {
    op([{name: "sysvbanner", purge: true, output: true}], console).must.be.eq(0);
  });
})();
