//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-apt/lib/list").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";

  test("list()", function() {
    var pkgs = op([]);
    pkgs.must.be.instanceOf(Array);
    pkgs.length.must.be.gt(0);
    for (var pkg of pkgs) {
      pkg.must.have(["name", "release", "installed"]);
    }
  });

  test("list(term) - package name", function() {
    var pkgs = op([{term: "bash"}]);
    pkgs.must.be.instanceOf(Array);
    pkgs.length.must.be.eq(1);
    pkgs[0].name.must.be.eq("bash");
    pkgs[0].must.have(["release", "installed"]);
  });

  test("list(term) - regex", function() {
    var pkgs = op([{term: "bash*"}]);
    pkgs.must.be.instanceOf(Array);
    pkgs.length.must.be.gt(1);
    for (var pkg of pkgs) {
      pkg.must.have(["name", "release", "installed"]);
      pkg.name.must.match(/^bash.*/);
    }
  });

  test("list({installed})", function() {
    var pkgs = op([{installed: true}]);
    pkgs.must.be.instanceOf(Array);
    pkgs.length.must.be.gt(0);
    for (var pkg of pkgs) {
      pkg.must.have(["name", "release"]);
      pkg.installed.must.be.eq(true);
    }
  });

  test("list({upgradable})", function() {
    var pkgs = op([{upgradable: true}]);
    pkgs.must.be.instanceOf(Array);
    for (var pkg of pkgs) {
      pkg.must.have(["name", "release", "installed"]);
    }
  });
})();
