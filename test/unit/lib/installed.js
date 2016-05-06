//imports
const child_process = require("child_process");
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-apt/lib/installed").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";

  init({title: "Install packages to check"}, function() {
    child_process.spawnSync("apt", ["install", "curl", "bash"]).status.must.be.eq(0);
  });

  test("installed({name}) : true", function() {
    op([{name: "curl"}]).must.be.eq(true);
  });

  test("installed({name}) : false", function() {
    op([{name: "couchdb"}]).must.be.eq(false);
  });

  test("installed({names: []}) : false", function() {
    op([{names: []}]).must.be.eq(false);
  });

  test("installed({names}) : true - everyone installed", function() {
    op([{names: ["curl", "bash"]}]).must.be.eq(true);
  });

  test("installed({names}) : false - someone installed", function() {
    op([{names: ["curl", "couchdb"]}]).must.be.eq(false);
  });

  test("installed({names}) : false - none installed", function() {
    op([{names: ["couchdb", "postgresql"]}]).must.be.eq(false);
  });
})();
