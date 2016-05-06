//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-apt/lib/upgrade").default;

//suite
suite({name: "#op()", ignore: process.env.TRAVIS == "true"}, function() {
  const DATA = "test/unit/data";

  test("upgrade()", function() {
    op([]).must.be.eq(0);
  });

  test("upgrade({name})", function() {
    op([{name: "curl"}]).must.be.eq(0);
  });

  test("upgrade({names})", function() {
    op([{names: ["curl"]}]).must.be.eq(0);
  });

  test("upgrade({output: true})", function() {
    op([{output: true}]).must.be.eq(0);
  });
})();
