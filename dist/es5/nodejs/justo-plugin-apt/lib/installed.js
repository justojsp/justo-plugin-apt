"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default =





op;var _child_process = require("child_process");var _child_process2 = _interopRequireDefault(_child_process);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params) {
  var opts, args, res;


  if (params.length >= 1) opts = Object.assign({}, params[0]);
  if (!opts) opts = {};
  if (typeof opts.names == "string") opts.names = [opts.names];
  if (!opts.hasOwnProperty("names")) opts.names = [];
  if (opts.name) opts.names.push(opts.name);


  args = ["list"];
  if (opts.installed) args.push("--installed");var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
    for (var _iterator = opts.names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var name = _step.value;args.push(name);}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}


  if (opts.names.length === 0) {
    res = false;
  } else {
    res = _child_process2.default.spawnSync("apt", args);

    if (res.status) {
      throw new Error(res.stderr.toString());
    } else {
      var output = res.output.toString(),pkgs = [];var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {

        for (var _iterator2 = output.split("\n")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var ln = _step2.value;
          var pattern = /^(.+)\/([a-zA-Z0-9]+).+/;

          if (pattern.test(ln)) {
            var _pkg = pattern.exec(ln).slice(1, 3);
            pkgs.push({ name: _pkg[0], release: _pkg[1], installed: /\[.*installed.*\]/.test(ln) });
          }
        }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}

      if (pkgs.length == opts.names.length) {
        res = true;var _iteratorNormalCompletion3 = true;var _didIteratorError3 = false;var _iteratorError3 = undefined;try {

          for (var _iterator3 = pkgs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {var pkg = _step3.value;
            if (!pkg.installed) {
              res = false;
              break;
            }
          }} catch (err) {_didIteratorError3 = true;_iteratorError3 = err;} finally {try {if (!_iteratorNormalCompletion3 && _iterator3.return) {_iterator3.return();}} finally {if (_didIteratorError3) {throw _iteratorError3;}}}
      } else {
        res = false;
      }
    }
  }


  return res;
}