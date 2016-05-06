"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 





op;var _child_process = require("child_process");var _child_process2 = _interopRequireDefault(_child_process);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params) {
  var opts, args, res;


  if (params.length >= 1) opts = Object.assign({}, params[0]);
  if (!opts) opts = {};
  if (!opts.hasOwnProperty("terms")) opts.terms = [];
  if (opts.term) opts.terms.push(opts.term);


  args = ["list"];
  if (opts.installed) args.push("--installed");
  if (opts.upgradable) args.push("--upgradable");var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
    for (var _iterator = opts.terms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var term = _step.value;args.push(term);}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}


  res = _child_process2.default.spawnSync("apt", args);

  if (res.status) {
    throw new Error(res.stderr.toString());} else 
  {
    var output = res.output.toString();

    res = [];var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
      for (var _iterator2 = output.split("\n")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var ln = _step2.value;
        var pattern = /^(.+)\/([a-zA-Z0-9]+).+/;

        if (pattern.test(ln)) {
          var pkg = pattern.exec(ln).slice(1, 3);
          res.push({ name: pkg[0], release: pkg[1], installed: /\[.*installed.*\]/.test(ln) });}}} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}}





  return res;}