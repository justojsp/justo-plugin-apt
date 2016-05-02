//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-apt/lib/install").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";

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

  test("install({names, reinstall, output})", function() {
    op([{names: ["sysvbanner"], reinstall: true, output: true}]).must.be.eq(0);
  });
})();
