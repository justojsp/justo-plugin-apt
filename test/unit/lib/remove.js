//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-apt/lib/remove").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";

  test("uninstall({name})", function() {
    op([{name: "sysvbanner"}]).must.be.eq(0);
  });

  test("uninstall({names : string[]})", function() {
    op([{names: ["sysvbanner"]}]).must.be.eq(0);
  });

  test("uninstall({names : string})", function() {
    op([{names: "sysvbanner"}]).must.be.eq(0);
  });

  test("uninstall({name, purge, output})", function() {
    op([{name: "sysvbanner", purge: true, output: true}]).must.be.eq(0);
  });
})();
