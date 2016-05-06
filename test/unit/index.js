//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const pkg = require("../../dist/es5/nodejs/justo-plugin-apt");

//suite
suite("API", function() {
  test("available", function() {
    pkg.available.must.be.instanceOf(Function);
  });

  test("install", function() {
    pkg.install.must.be.instanceOf(Function);
  });

  test("installed", function() {
    pkg.installed.must.be.instanceOf(Function);
  });

  test("list", function() {
    pkg.list.must.be.instanceOf(Function);
  });

  test("remove", function() {
    pkg.remove.must.be.instanceOf(Function);
  });

  test("uninstall", function() {
    pkg.uninstall.must.be.instanceOf(Function);
  });

  test("update", function() {
    pkg.update.must.be.instanceOf(Function);
  });

  test("upgrade", function() {
    pkg.upgrade.must.be.instanceOf(Function);
  });
})();
